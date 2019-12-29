const pg = require("./database");

const del = [
  "Trường đời",
  "Manchester United",
  "Studying",
  "Mama & Papa",
  "Liên Minh Huyền Thoại",
  "Chăm sóc gia đình",
  "Real Madrid C.F.",
  "Lặng Nhìn Cuộc Sống",
  "Garena Liên Quân Mobile",
  "TikTok",
  "Instagram",
  "Trường Đời",
  "Work from home",
  "M-TP",
  "Không chọn",
  "MAKEUP",
  "Facebook app",
  "FC Barcelona",
  "Đại học Bôn Ba",
  "Trường ĐỜI",
  "YG FAMILY",
  "Seoul Arts High School",
  "Google",
  "Papa and Mama"
];
(async () => {
  for (let i = 0; i < del.length; i++) {
    const a = await pg.raw(
      `WITH done AS (SELECT * FROM (SELECT uid,"unnest"(other) AS ot FROM profile_raws) AS b WHERE b.ot='${del[i]}') UPDATE profile_raws p SET other=array_remove(other, '${del[i]}') WHERE EXISTS (SELECT NULL FROM done WHERE p.uid=done.uid); `
    );
    console.log(del[i], a.rowCount);
  }
})();
