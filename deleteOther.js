const pg = require("./database");

const del = [
  "Chăm sóc gia đình",
  "Đại học Bôn Ba",
  "Facebook app",
  "FC Barcelona",
  "Garena Liên Quân Mobile",
  "Google",
  "Instagram",
  "Không chọn",
  "Lặng Nhìn Cuộc Sống",
  "Liên Minh Huyền Thoại",
  "M-TP",
  "MAKEUP",
  "Manchester United",
  "Mama & Papa",
  "Papa and Mama",
  "Real Madrid C.F.",
  "Seoul Arts High School",
  "Studying",
  "Trường đời",
  "TikTok",
  "Trường Đời",
  "Trường ĐỜI",
  "Work from home",
  "YG FAMILY"
];
(async () => {
  for (let i = 0; i < del.length; i++) {
    const a = await pg.raw(
      `WITH done AS (SELECT * FROM (SELECT uid,"unnest"(other) AS ot FROM profile_raws) AS b WHERE b.ot='${del[i]}') UPDATE profile_raws p SET other=array_remove(other, '${del[i]}') WHERE EXISTS (SELECT NULL FROM done WHERE p.uid=done.uid); `
    );
    console.log(del[i], a.rowCount);
  }
})();
