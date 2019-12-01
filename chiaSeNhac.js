const cheerio = require("cheerio");
const fetch = require("node-fetch");

const mongoose = require("mongoose");
const Song = require("./model/song");

const DB =
  "mongodb://nguyen:Nt01113699@157.245.196.34:27017/cdvnu?authSource=admin&w=1/cdvnu?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("DB connect successful !");
  });
const links = [
  `http://old.chiasenhac.vn/mp3/us-uk/us-pop/down`,
  `http://old.chiasenhac.vn/mp3/us-uk/us-rap-hiphop/down`,
  `http://old.chiasenhac.vn/mp3/us-uk/us-dance-remix/down`,
  `http://old.chiasenhac.vn/mp3/vietnam/v-pop/down`,
  `http://old.chiasenhac.vn/mp3/vietnam/v-rap-hiphop/down`,
  `http://old.chiasenhac.vn/mp3/vietnam/v-dance-remix/down`,
  `http://old.chiasenhac.vn/mp3/vietnam/v-truyen-thong/down`,
  `http://old.chiasenhac.vn/mp3/chinese/c-pop/down`,
  `http://old.chiasenhac.vn/mp3/chinese/c-rap-hiphop/down`,
  `http://old.chiasenhac.vn/mp3/chinese/c-dance-remix/down`,
  `http://old.chiasenhac.vn/mp3/korea/k-pop/down`,
  `http://old.chiasenhac.vn/mp3/korea/k-rap-hiphop/down`,
  `http://old.chiasenhac.vn/mp3/korea/k-dance-remix/down`,
  `http://old.chiasenhac.vn/mp3/japan/j-pop/down`,
  `http://old.chiasenhac.vn/mp3/japan/j-rap-hiphop/down`,
  `http://old.chiasenhac.vn/mp3/japan/j-dance-remix/down`,
  `http://old.chiasenhac.vn/mp3/france/f-pop/down`,
  `http://old.chiasenhac.vn/mp3/france/f-rap-hiphop/down`,
  `http://old.chiasenhac.vn/mp3/france/f-dance-remix/down`,
  ,
];
(async function() {
  links.map(async link => {
    for (let i = 0; i < 52; i++) {
      // const data = await fetch(
      //   `https://chiasenhac.vn/mp3/us-uk.html?tab=vua-download&page=${i}`
      // );
      const data = await fetch(`${link}${i > 0 ? i : ""}.html`);

      // const data = await fetch(`${link}${i > 0 ? i : ""}.html`);
      // if (i % 10 === 0) {
      //   console.log("go to page ", i);
      // }

      const $ = cheerio.load(await data.text());
      const allSongs = $("tr")
        .get()
        .map(song => {
          const tapnham = $(song)
            .find(".gen")
            .text()
            .split("\n\t");

          const title = tapnham[1] && tapnham[1].replace("\t", "");
          const url = $(song)
            .find("a")
            .attr("href");
          const artist = tapnham[2] && tapnham[2].replace("\t", "").split(";");
          const downloads = tapnham[3] && tapnham[3].replace(".", "");

          const tapnham1 = $(song)
            .find(".gensmall")
            .get()
            .map(s1 => $(s1).text());
          const time = tapnham1[0] && tapnham1[0].slice(0, 4).split(":");
          const duration = time && time[0] * 60 + time[1] * 1;
          const country = tapnham1[1] && tapnham1[1].split(" -> ")[0];
          const genre =
            tapnham1[1] && tapnham1[1].split(" -> ")[1].split("...")[0];
          let albumYear = parseInt(
            tapnham1[1] &&
              tapnham1[1].slice(-5) &&
              tapnham1[1].slice(-5).replace(")", "")
          );
          if (isNaN(albumYear)) {
            albumYear = null;
          }
          const lastDownloadAt = tapnham1[2] && tapnham1[2];

          return {
            title,
            artist,
            duration,
            downloads,
            country,
            url,
            genre,
            albumYear,
            lastDownloadAt,
            point: Math.floor(downloads / ((2019 - albumYear) * 2.5 + 1))
          };
        });
      // console.log(allSongs);

      allSongs.forEach(async song => {
        if (song.point > 500 || song.downloads > 1000) {
          try {
            if (song.url) {
              const scrapingGroupPost = await Song.findOne({
                url: song.url,
                title: song.title
              });
              // console.log(scrapingGroupPost)

              if (!scrapingGroupPost) {
                // console.log(scrapingGroupPost);
                await Song.create({
                  ...song
                });
                console.log("Created new song ", song.title);
              } else {
                if (song.downloads >= scrapingGroupPost.downloads) {
                  await Song.findOneAndUpdate(
                    {
                      title: song.title,
                      duration: song.duration
                    },
                    song
                  );
                }
              }
            }
          } catch (err) {
            if (err.code) {
              if (err.code !== 11000) {
                console.log(err.code);
              }
            } else console.log(err);
          }
        }
      });
    }

    console.log("DONE");
  });
})();

// (async function() {
//   var matchingId = [];

//   const remove=await Song.aggregate([
//      {
//         $group:{
//            _id:{
//               category:"$url",
//            },
//            count:{
//               $sum:1
//            },
//            match:{
//               $push:"$_id"
//            }
//         }
//      },
//      {
//         $match:{
//            count:{
//               $gt:1
//            }
//         }
//      }]
//   );

//   remove.forEach( function(doc) {
//      doc.match.shift(); // remove the first objectId
//      doc.match.forEach( function(duplicateId) {
//      matchingId.push(duplicateId);
//      });
//   });
//   console.log(matchingId)
//   // remove duplicate documents
//   Song.remove({_id: {$in: matchingId}}).exec()
// })()
