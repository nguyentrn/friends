const cheerio = require("cheerio");
const fetch = require("node-fetch");

const mongoose = require("mongoose");
const Song = require("./model/song");

const DB =
  "mongodb://nguyen:Nt01113699@157.245.196.34:27017/cdvnu?authSource=admin&w=1/cdvnu?retryWrites=true&w=majority";
const delay = time => {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
};

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

(async function() {
  for (i = 0; i < 50; i++) {
    const songs = await Song.find({
      scrapedSrc: { $ne: true }
    })
      .sort("-point")
      .limit(100)
      .select("title url");

    // console.log("found ", songs.length);
    songs.map(async song => {
      try {
        const editLink = song.url
          .replace("http://mp3", "http://old")
          .replace(".html", "_download.html");
        const data = await fetch(editLink);
        // console.log("go to page ", song.title);

        const $ = cheerio.load(await data.text());
        const src = [];
        const hrefs = $(".tip-text a")
          .get()
          .map(s => $(s).attr("href"));
        hrefs.map(href => {
          let quality = href.split("[")[1] && href.split("[")[1].split("_")[0];
          const link = href.replace(" ", "");
          if (quality) src.push({ quality, link });
        });

        const updated = await Song.findOneAndUpdate(
          {
            url: song.url
          },
          { src: src, scrapedSrc: true }
        );
        console.log("updated src for:", updated.title);
      } catch (err) {
        console.log(err.name);
      }
    });
  }
})();

(async function() {
  for (i = 0; i < 50; i++) {
    const songs = await Song.find({
      scrapedLyric: { $ne: true }
    })
      .sort("-point")
      .limit(100)
      .select("title url");

    // console.log("found ", songs.length);
    songs.map(async song => {
      try {
        const editLink = song.url;
        const data = await fetch(editLink);
        // console.log("go to page ", song.title);

        const $ = cheerio.load(await data.text());
        const lyrics = $("p.genmed")
          .text()
          .split("\n");
        const updated = await Song.findOneAndUpdate(
          {
            url: song.url
          },
          { lyric: lyrics, scrapedLyric: true }
        );
        console.log("updated lyric for:", updated.title);
      } catch (err) {
        console.log(err.name);
      }
    });
  }
})();

// (async function() {
//   const res = await Song.updateMany({}, { scrapedLyric: false, lyric: [] });
//   console.log(res.n, res.nModified);
// })();

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
