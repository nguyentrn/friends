const lcts = require("./locationFrom");
//
//
//
//
//
//
const pg = require("./database");

const formatHometown = async function(hometown, stringArr) {
  try {
    const a = await pg("profiles")
      // .select("*")
      .update({ hometown })
      .whereIn("uid", function() {
        this.select("profiles.uid")
          .from("profiles")
          .whereNull("hometown")
          .join("profile_raws", "profiles.uid", "profile_raws.uid")
          .whereIn("location_from", stringArr)
          .orWhereIn("location_now", stringArr);
      });
    console.log(hometown, a);
  } catch (err) {
    console.log(err);
    console.log(err.code, hometown);
  }
};

(async () => {
  const provincesF = await pg.raw(
    "SELECT hometown,provinces.id FROM (SELECT hometown,round(avg(followers)) AS avg_followers,count(*) AS sample_space FROM profiles WHERE hometown IS NOT NULL GROUP BY hometown) AS b JOIN provinces ON provinces.name=b.hometown ORDER BY sample_space/population LIMIT 63"
  );
  const provincesArray = [];
  provincesF.rows.map(province => provincesArray.push(province.hometown));
  console.log(provincesArray);
  const provinces = lcts.filter(lct =>
    provincesArray.some(p => p === lct.name)
  );
  console.log(provinces);
  for (let i = 0; i < provinces.length; i++) {
    await formatHometown(provinces[i].name, provinces[i].raws);
  }
  // await formatHometown("Thái Lan", ["Băng Cốc"]);
  // await formatHometown("Campuchia", ["Phnôm Pênh"]);
  // await formatHometown("Lào", [
  //   "Viêng Chăn",
  //   "Vientane, Vientiane, Laos",
  //   "Kaysone Phomvihane"
  // ]);

  // await formatHometown("Hà Nội", [
  //   "Trường THPT Nguyễn Thị Minh Khai - Hà Nội",
  //   "THCS & THPT Lương Thế Vinh - Hà Nội",
  //   "Trường THPT Trương Định - Hà Nội",
  //   "Thanh Oai, Ha Son Binh, Vietnam",
  //   "THPT Trần Hưng Đạo - Thanh Xuân",
  //   "Hanoi – Amsterdam High School",
  //   "Hoai Duc Phu, Ha Noi, Vietnam",
  //   "Ung Hoa, Ha Son Binh, Vietnam",
  //   "Gia Lâm Pho, Ha Noi, Vietnam",
  //   "THPT Trần Nhân Tông - Hà Nội",
  //   "Ba Vì, Ha Son Binh, Vietnam",
  //   "Phú Xuyên, Ha Noi, Vietnam",
  //   "THPT Nguyễn Trãi - Ba Đình",
  //   "Tho Tang, Ha Noi, Vietnam",
  //   "THPT Lê Quý Đôn - Đống Đa",
  //   "THPT Trần Phú - Hoàn Kiếm",
  //   "THPT Xuân Đỉnh ( Hà Nội )",
  //   "Marie Curie Hanoi School",
  //   "Tay Ho, Ha Noi, Vietnam",
  //   "Ha Loi, Ha Noi, Vietnam",
  //   "THPT Lê Quý Đôn-Hà Đông",
  //   "Duc Tu, Ha Noi, Vietnam",
  //   "THPT Cầu Giấy - Hà Nội",
  //   "PTTH Đống Đa - Hà Nội",
  //   "THPT Phan Đình Phùng",
  //   "Sơn Tây (thị xã)",
  //   "THPT Vân Nội",
  //   "Hà Nội Phố",
  //   "Xuân Mai",
  //   "Hà Đông",
  //   "Hà Nội"
  // ]);
  // await formatHometown("Hồ Chí Minh", [
  //   "THPT Chuẩn Quốc Gia Võ Trường Toản - P. Hiệp Thành, Q12, TP. HCM",
  //   "Trường THPT Trần Quang Khải TPHCM",
  //   "Trường THPT Lê Thánh Tôn Q7 - ZIP",
  //   "Bình Chánh, Hồ Chí Minh, Vietnam",
  //   "Binh Thanh, Hồ Chí Minh, Vietnam",
  //   "THPT Nguyễn Trãi , Q4 , Sài Gòn",
  //   "Phu Nhuan, Hồ Chí Minh, Vietnam",
  //   "Trường THPT Nguyễn Tất Thành Q6",
  //   "THPT Nguyễn Hữu Thọ Q.4 Tp.HCM",
  //   "THPT Nguyễn Thái Bình - TpHCM",
  //   "Cần Giờ, Hồ Chí Minh, Vietnam",
  //   "Hóc Môn, Hồ Chí Minh, Vietnam",
  //   "Go Vap, Hồ Chí Minh, Vietnam",
  //   "Củ Chi, Hồ Chí Minh, Vietnam",
  //   "Nhà Bè, Hồ Chí Minh, Vietnam",
  //   "Tran Van On secondary school",
  //   "THPT Nguyễn An Ninh quận 10",
  //   "Trường THCS Nguyễn Du - Q.1",
  //   "Trường THPT Trần Phú TPHCM",
  //   "Lê Hồng Phong High School",
  //   "THPT Nguyễn Thượng Hiền",
  //   "Trường THPT Marie Curie",
  //   "Marie Curie High School",
  //   "THPT Bình Phú (Quận 6)",
  //   "THPT Nguyễn Khuyến Q10",
  //   "Học sinh THPT Thủ Đức",
  //   "Thành Phố Hồ Chí Minh",
  //   'Thành phố Hồ Chí Minh',
  //   "Trường THPT Phú Nhuận",
  //   "Thành phố Hồ Chí Minh",
  //   "Trường THPT Thanh Đa",
  //   "THPT Trưng Vương Q.1",
  //   "THPT Nguyễn Công Trứ",
  //   "Trường THPT Gia Định",
  //   "THPT Nguyễn Thị Diệu",
  //   "Ho Chi Minh City",
  //   "THPT Nguyễn Du"
  // ]);

  // await formatHometown("Hải Phòng", [
  //   "Thái Bình, Hải Phòng, Vietnam",
  //   "An Duong, Hải Phòng, Vietnam",
  //   "Haiphong, Hải Phòng, Vietnam",
  //   "Vinh Bao, Hải Phòng, Vietnam",
  //   "Cat Hai, Hải Phòng, Vietnam",
  //   "Lap Le, Hải Phòng, Vietnam",
  //   "Cát Bà, Hải Phòng, Vietnam",
  //   "An Lu, Hải Phòng, Vietnam",
  //   "Hải Phòng"
  // ]);
  // await formatHometown("Thái Nguyên", [
  //   "Ba Hàng, Thái Nguyên, Vietnam",
  //   "Cho Moi, Thái Nguyên, Vietnam",
  //   "Thái Nguyên (thành phố)"
  // ]);

  // await formatHometown("Quảng Ninh", [
  //   "Cam Pha Mines, Quảng Ninh, Vietnam",
  //   "Cẩm Phả Port, Quảng Ninh, Vietnam",
  //   "Hàm Ninh, Quảng Ninh, Quảng Bình",
  //   "An Ninh, Quảng Ninh (Quảng Bình)",
  //   "Port Campha, Quảng Ninh, Vietnam",
  //   "Pho Ba Che, Quảng Ninh, Vietnam",
  //   "Mong Duong, Quảng Ninh, Vietnam",
  //   "Trang Bach, Quảng Ninh, Vietnam",
  //   "Minh Châu, Quảng Ninh, Vietnam",
  //   "Vàng Danh, Quảng Ninh, Vietnam",
  //   "Quảng Yên, Quảng Ninh, Vietnam",
  //   "Bai Chay, Quảng Ninh, Vietnam",
  //   "Hong Gai, Quảng Ninh, Vietnam",
  //   "Cai Rong, Quảng Ninh, Vietnam",
  //   "Quan Lạn, Quảng Ninh, Vietnam",
  //   "Tien Yer, Quảng Ninh, Vietnam",
  //   "Hon Gai, Quảng Ninh, Vietnam",
  //   "Ã?Am Ha, Quảng Ninh, Vietnam",
  //   "Khê Mao, Quảng Ninh, Vietnam",
  //   "Cua Ong, Quảng Ninh, Vietnam",
  //   "Ha Coi, Quảng Ninh, Vietnam",
  //   "Tra Co, Quảng Ninh, Vietnam",
  //   "Mans, Quảng Ninh, Vietnam",
  //   "Hạ Long (thành phố)",
  //   "Hải Hà, Quảng Ninh",
  //   "Bình Liêu",
  //   "Móng Cái",
  //   "Tiên Yên",
  //   "Uông Bí",
  //   "Cẩm Phả"
  // ]);

  // await formatHometown("Lạng Sơn", ["Bac Son, Lạng Sơn, Vietnam", "Lạng Sơn"]);
  // await formatHometown("Bắc Giang", [
  //   "Phu Lang Thong, Bắc Giang, Vietnam",
  //   "Thuong, Bắc Giang, Vietnam",
  //   "Bo Ha, Bắc Giang, Vietnam",
  //   "Bắc Giang (thành phố)",
  //   "Lục Ngạn",
  //   "Lục Nam"
  // ]);

  // await formatHometown("Bắc Ninh", [
  //   "Bắc Ninh (thành phố)",
  //   "Thuận Thành",
  //   "Từ Sơn"
  // ]);
  // await formatHometown("Hà Nam", [
  //   "Kim Bang, Ha Nam Ninh, Vietnam",
  //   "Binh Luc, Hà Nam, Vietnam",
  //   "Phu-Li, Hà Nam, Vietnam",
  //   "Ha-Nam, Hà Nam, Vietnam",
  //   "Phủ Lý"
  // ]);
  // await formatHometown("Hải Dương", [
  //   "Hai Dzung, Hải Dương, Vietnam",
  //   "Hai-Doung, Hải Dương, Vietnam",
  //   "Haidöng, Hải Dương, Vietnam",
  //   "Hải Dương (thành phố)",
  //   "Kinh Môn",
  //   "Chí Linh"
  // ]);

  // await formatHometown("Hưng Yên", [
  //   "Hung Yen, Hưng Yên, Vietnam",
  //   "Ân Thi, Hưng Yên",
  //   "Mỹ Hào"
  // ]);
  // await formatHometown("Nam Định", [
  //   "Nam Định, Nam Định, Vietnam",
  //   "Xuân Trường",
  //   "Nghĩa Hưng",
  //   "Giao Thủy",
  //   "Nam Trực",
  //   "Hải Hậu"
  // ]);
  // await formatHometown("Ninh Bình", [
  //   "Nho Quan, Ninh Bình, Vietnam",
  //   "Ninh Bình (thành phố)"
  // ]);
  // await formatHometown("Thái Bình", [
  //   "Thái Bình, Thái Bình, Vietnam",
  //   "Thái Bình (thành phố)",
  //   "Tiền Hải"
  // ]);
  // await formatHometown("Vĩnh Phúc", [
  //   "Tam Đảo, Vĩnh Phúc, Vietnam",
  //   "Vinh Phuc, Ha Noi, Vietnam",
  //   "Yen, Vĩnh Phúc, Vietnam",
  //   "Vĩnh Tường",
  //   "Vĩnh Phúc",
  //   "Lập Thạch",
  //   "Phúc Yên",
  //   "Vĩnh Yên"
  // ]);

  // await formatHometown("Hòa Bình", [
  //   "Hương Tân Lạc, Hòa Bình, Vietnam",
  //   "Luong Son, Hòa Bình, Vietnam",
  //   "Hòa Bình, Hòa Bình, Vietnam",
  //   "Lac Son, Hòa Bình, Vietnam",
  //   "Phuong Lam, Vietnam"
  // ]);
  // await formatHometown("Sơn La", [
  //   "Son La Chau, Sơn La, Vietnam",
  //   "Sơn La",
  //   "Mộc Châu",
  //   "Phù Yên"
  // ]);
  // await formatHometown("Điện Biên", ["Điện Biên Phủ"]);
  // await formatHometown("Lai Châu", [
  //   "Muong Lay, Lai Châu, Vietnam",
  //   "Mương Té, Lai Châu, Vietnam",
  //   ",Tam Duong, Lai Châu, Vietnam",
  //   "Lai Chau"
  // ]);
  // await formatHometown("Lào Cai", [
  //   "Lao Kay, Lào Cai, Vietnam",
  //   "Laokai, Lào Cai, Vietnam",
  //   "Lào Cai (thành phố)"
  // ]);
  // await formatHometown("Yên Bái", [
  //   "Thác Bà, Yên Bái, Vietnam",
  //   "Yên Bái (thành phố)",
  //   "Nghĩa Lộ",
  //   "Lục Yên"
  // ]);

  // await formatHometown("Phú Thọ", [
  //   "Phu Tho, Phú Thọ, Vietnam",
  //   "Vietri, Phú Thọ, Vietnam",
  //   "Thanh Thủy, Phú Thọ",
  //   "Phú Thọ (thị xã)",
  //   "Thanh Sơn",
  //   "Lâm Thao",
  //   "Thanh Ba",
  //   "Việt Trì",
  //   "Yên Lập",
  //   "Hạ Hòa",
  //   "Cẩm Khê"
  // ]);
  // await formatHometown("Hà Giang", [
  //   "Hà Giang (thành phố)",
  //   "Bắc Quang, Hà Giang, Vietnam"
  // ]);
  // await formatHometown("Tuyên Quang", ["Tuyên Quang, Tuyên Quang, Vietnam"]);
  // await formatHometown("Cao Bằng", ["Cao Bằng"]);
  // await formatHometown("Bắc Kạn", ["Bac Can, Bắc Kạn, Vietnam", "Bắc Kạn"]);

  // await formatHometown("Thanh Hóa", [
  //   "Hương Lang Chánh, Thanh Hóa, Vietnam",
  //   "Hương Cẩm Thủy, Thanh Hóa, Vietnam",
  //   "Hương Ngọc Lac, Thanh Hóa, Vietnam",
  //   "Hương Bá Thước, Thanh Hóa, Vietnam",
  //   "Lang Que Nho, Thanh Hóa, Vietnam",
  //   "Phố Bến Sung, Thanh Hóa, Vietnam",
  //   "Bái Thượng, Thanh Hóa, Vietnam",
  //   "Thach Thât, Thanh Hóa, Vietnam",
  //   "Yen Dinh, Thanh Hóa, Vietnam",
  //   "Như Xuân, Thanh Hóa, Vietnam",
  //   "Quan Hóa, Thanh Hóa, Vietnam",
  //   "Nghi Sơn, Thanh Hóa, Vietnam",
  //   "Lam Son, Thanh Hóa, Vietnam",
  //   "Ba Lang, Thanh Hóa, Vietnam",
  //   "Futim, Thanh Hóa, Vietnam",
  //   "Thọ Xuân (huyện)",
  //   "Thanh Hóa",
  //   "Nga Sơn",
  //   "Bỉm Sơn",
  //   "Sầm Sơn"
  // ]);
  // await formatHometown("Nghệ An", [
  //   "Cho Do Luong, Nghệ An, Vietnam",
  //   "Phu Dien Chau, Nghệ An, Vietnam",
  //   "Cho Do Luong, Nghệ An, Vietnam",
  //   "Vinh Ang, Nghe Tinh, Vietnam",
  //   "Quynh Luu, Nghệ An, Vietnam",
  //   "Thái Hõa, Nghệ An, Vietnam",
  //   "Cầu Giát, Nghệ An, Vietnam",
  //   "Nam �Àn, Nghệ An, Vietnam",
  //   "Ky Son, Nghệ An, Vietnam",
  //   "Vin, Nghệ An, Vietnam",
  //   "Tương Dương, Nghệ An",
  //   "Thành phố Vinh",
  //   "Thanh Chương",
  //   "Quế Phong",
  //   "Yên Thành",
  //   "Con Cuông",
  //   "Diễn Châu",
  //   "Quỳ Châu",
  //   "Nghi Lộc",
  //   "Quỳ Hợp",
  //   "Anh Sơn",
  //   "Cửa Lò",
  //   "Tân Kỳ",
  //   "Vinh"
  // ]);
  // await formatHometown("Hà Tĩnh", [
  //   "Trường THPT Phan Đình Phùng - Hà Tĩnh",
  //   "Hương Khê, Hà Tĩnh, Vietnam",
  //   "Ã?Uc Tho, Hà Tĩnh, Vietnam",
  //   "Ha Tin', Hà Tĩnh, Vietnam",
  //   "Hà Tĩnh (thành phố)",
  //   "THPT Hương Sơn",
  //   "Nghi Xuân",
  //   "Hương Sơn",
  //   "Tĩnh Gia",
  //   "Kỳ Anh"
  // ]);

  // await formatHometown("Cần Thơ", [
  //   "Ap Binh Duong (1), Vietnam",
  //   "Thành phố Cần Thơ",
  //   "Thốt Nốt",
  //   "Cần Thơ",
  //   "Ô Môn"
  // ]);
  // await formatHometown("Đà Nẵng", [
  //   "Da Dang, Quang Nam-Da Nang, Vietnam",
  //   "Đà Nẵng"
  // ]);
  // await formatHometown("An Giang", [
  //   "Long Xuyên",
  //   "Chau Phú, An Giang, Vietnam",
  //   "Chaudok, An Giang, Vietnam",
  //   "Angiang, An Giang, Vietnam",
  //   "Chợ Mới",
  //   "Tri Tôn (thị trấn)",
  //   "Tịnh Biên"
  // ]);
  // await formatHometown("Đồng Nai", [
  //   "Xuân Lộc, Ðồng Nai, Vietnam",
  //   "Xa Dau Giay, Vietnam",
  //   "Vĩnh Cửu, Đồng Nai",
  //   "Gia Kiem, Vietnam",
  //   "Tan Phu, Vietnam",
  //   "Là Ngà, Vietnam",
  //   "Long Khánh",
  //   "Long Thành",
  //   "Nhơn Trạch",
  //   "Trảng Bom",
  //   "Biên Hòa",
  //   "Tân Phú",
  //   "Bến Lức",
  //   "Cẩm Mỹ"
  // ]);
  // await formatHometown("Bình Dương", [
  //   "Binh Duong - Viet Nam",
  //   "Bến Cát",
  //   "Dầu Tiếng",
  //   "Dĩ An",
  //   "Lái Thiêu",
  //   "Phu Giáo, Vietnam",
  //   "Tân Uyên (huyện cũ)",
  //   "Thủ Dầu Một"
  // ]);

  // await formatHometown("Tây Ninh", [
  //   "Truông Mít, Tây Ninh, Vietnam",
  //   "Ap Ben Cau, Tây Ninh, Vietnam",
  //   "Gò Dầu Hạ, Tây Ninh, Vietnam",
  //   "An Thanh, Tây Ninh, Vietnam",
  //   "Suối Dây, Tây Ninh, Vietnam",
  //   "Cau Khoi, Tây Ninh, Vietnam",
  //   "Bau Don, Tây Ninh, Vietnam",
  //   "Tai Nin, Tây Ninh, Vietnam",
  //   "Bến Cầu, Tây Ninh, Vietnam",
  //   "Xa Mát, Tây Ninh, Vietnam",
  //   "Tha La, Tây Ninh, Vietnam",
  //   "Katum, Tây Ninh, Vietnam",
  //   "Trảng Bàng",
  //   "Tây Ninh"
  // ]);
  // await formatHometown("Bình Phước", [
  //   "Phuoc Binh, Bìn Phước, Vietnam",
  //   "Bình Long, Bìn Phước, Vietnam",
  //   "Phu Rieng, Bìn Phước, Vietnam",
  //   "Dong Xoa, Bìn Phước, Vietnam",
  //   "Hớn Quản, Bìn Phước, Vietnam",
  //   "Lộc Ninh, Bìn Phước, Vietnam",
  //   "Binh Phuoc, Vietnam",
  //   "Long Hai, Vietnam",
  //   "Bình Long",
  //   "Đồng Xoài"
  // ]);
  // await formatHometown("Bà Rịa - Vũng Tàu", [
  //   "Xa Vung Tau, Bà Rịa-Vũng Tàu, Vietnam",
  //   "Lang Phuoc Hai, Vietnam",
  //   "Long Điền",
  //   "Xuyên Mộc",
  //   "Vũng Tàu",
  //   "Đất Đỏ",
  //   "Bà Rịa"
  // ]);
  // await formatHometown("Long An", [
  //   "Can Gioc, Long An, Vietnam",
  //   "Cần Giuộc",
  //   "Thạnh Hóa",
  //   "Vĩnh Hưng",
  //   "Cần Đước",
  //   "Mộc Hóa",
  //   "Tân An"
  // ]);
  // await formatHometown("Tiền Giang", [
  //   "Châu Thành, Tiền Giang, Vietnam",
  //   "Mitho, Tiền Giang, Vietnam",
  //   "Cai Lậy (huyện)",
  //   "Cái Bè",
  //   "Mỹ Tho",
  //   "Gò Công",
  //   "Chợ Gạo",
  //   "Long An, Tiền Giang, Vietnam",
  //   "Ap My Tho, Tiền Giang, Vietnam",
  //   "Huu An, Tiền Giang, Vietnam",
  //   "Vĩnh Bình (1), Tiền Giang, Vietnam"
  // ]);
  // await formatHometown("Vĩnh Long", ["Vĩnh Long (thành phố)", "Vũng Liêm"]);
  // await formatHometown("Bến Tre", [
  //   "Ben, Bến Tre, Vietnam",
  //   "Chợ Lách",
  //   "Bến Tre",
  //   "Ba Tri",
  // ]);
  // await formatHometown("Đồng Tháp", [
  //   "Thanh Bình, Ðồng Tháp, Vietnam",
  //   "Cao Lãnh",
  //   "Lai Vung",
  //   "Dong Thap, Hoang Lien Son, Vietnam",
  //   "Sa Đéc",
  //   "Lấp Vò",
  //   "Hồng Ngự (thị xã)",
  //   "Tháp Mười",
  //   "Tân Châu",
  //   "Tràm Chim, Ðồng Tháp, Vietnam"
  // ]);
  // await formatHometown("Trà Vinh", ["Cànglong, Trà Vinh, Vietnam", "Trà Vinh"]);
  // await formatHometown("Sóc Trăng", [
  //   "Sóc Trăng (thành phố)",
  //   "Sài Gòn, Sóc Trăng, Vietnam"
  // ]);
  // await formatHometown("Bạc Liêu", ["Bạc Liêu (thành phố)"]);
  // await formatHometown("Kiên Giang", [
  //   "Vinh Thuan (1), Kiến Giang, Vietnam",
  //   "Phu Quoc, Kiến Giang, Vietnam",
  //   "Rach Soi, Kiến Giang, Vietnam",
  //   "Rach Gia, Vietnam",
  //   'Rạch Giá City',
  //   "Giồng Riềng",
  //   "Kiên Lương",
  //   "Rạch Giá",
  //   "An Biên",
  //   "Hà Tiên",
  //   "Gò Quao",
  // ]);
  // await formatHometown("Hậu Giang", ["Phụng Hiệp", "Vị Thanh", "Long Mỹ"]);
  // await formatHometown("Cà Mau", ["Cà Mau", "Thới Bình, Cà Mau, Vietnam"]);

  // await formatHometown("Quảng Trị", [
  //   "Thi Xã �Òng Hà, Quảng Trị, Vietnam",
  //   "Khe Sanh, Binh Tri Thien, Vietnam",
  //   "Huong Hoa, Quảng Trị, Vietnam",
  //   "Gio Lin, Quảng Trị, Vietnam",
  //   "Hồ Xá, Quảng Trị, Vietnam",
  //   "Lao Bảo (thị trấn)",
  //   "Quảng Trị (thị xã)",
  //   "Cam Lộ (huyện)",
  //   "Vĩnh Linh",
  //   "Hải Lăng",
  //   "Gio Linh",
  //   "Đông Hà"
  // ]);
  // await formatHometown("Thừa Thiên - Huế", ["Huế"]);
  // await formatHometown("Quảng Bình", [
  //   "Quang Ninh, Binh Tri Thien, Vietnam",
  //   "Kwang Binh, Quảng Bình, Vietnam",
  //   "Hoàn Lão, Quảng Bình, Vietnam",
  //   "Le Thuy, Quảng Bình, Vietnam",
  //   "Lệ Thủy, Quảng Bình",
  //   "Quảng Trạch",
  //   "Tuyên Hóa",
  //   "Minh Hóa",
  //   "Đồng Hới",
  //   "Bố Trạch",
  //   "Ba Đồn"
  // ]);

  // await formatHometown("Quảng Nam", [
  //   "Binh Duong, Quang Nam-Da Nang, Vietnam",
  //   "Quang Nam, Quang Nam-Da Nang, Vietnam",
  //   "Phuoc Son, Quang Nam-Da Nang, Vietnam",
  //   "Nong Son, Quang Nam-Da Nang, Vietnam",
  //   "Ai Nghia, Quang Nam-Da Nang, Vietnam",
  //   "Quận Năm, Quang Nam-Da Nang, Vietnam",
  //   "Viet An, Quang Nam-Da Nang, Vietnam",
  //   "Chu Lai, Quang Nam-Da Nang, Vietnam",
  //   "Trà My, Quang Nam-Da Nang, Vietnam",
  //   "Hoi An, Quang Nam-Da Nang, Vietnam",
  //   "Ha Lam, Quang Nam-Da Nang, Vietnam",
  //   "Que Son, Quảng Nam, Vietnam",
  //   "Nam Giang, Quảng Nam",
  //   "Tiên Phước",
  //   "Duy Xuyên",
  //   "Đại Lộc",
  //   "Hội An",
  //   "Tam Kỳ"
  // ]);
  // await formatHometown("Quảng Ngãi", [
  //   "Kwang Ngai, Quảng Ngãi, Vietnam",
  //   "Binh Son, Quảng Ngãi, Vietnam",
  //   "Mộ Đức, Quảng Ngãi, Vietnam",
  //   "Quảng Ngãi (thành phố)"
  // ]);
  // await formatHometown("Bình Định", [
  //   "Binh Dinh, Nghia Binh, Vietnam",
  //   "Hoài Nhon, Bình Ðịnh, Vietnam",
  //   "Phú Phong, Bình Ðịnh, Vietnam",
  //   "Tam Quan, Bình Ðịnh, Vietnam",
  //   "Qui Nhon, Bình Ðịnh, Vietnam",
  //   "Bồng Sơn, Bình Ðịnh, Vietnam",
  //   "Hoài Ân, Bình Ðịnh, Vietnam",
  //   "Tuy Phước",
  //   "Tuy Phong",
  //   "Quy Nhơn",
  //   "Phù Cát",
  //   "An Nhơn"
  // ]);

  // await formatHometown("Bình Thuận", [
  //   "Xa Phan Thiet, Bình Thuận, Vietnam",
  //   "Phan Ri Cua, Thuin Hai, Vietnam",
  //   "Tánh Linh, Bình Thuận, Vietnam",
  //   "Fanthit, Bình Thuận, Vietnam",
  //   "Võ Xu, Thuin Hai, Vietnam",
  //   "Lagi, Thuin Hai, Vietnam",
  //   "Phan Rang - Tháp Chàm",
  //   "Phan Thiết",
  //   "Bắc Bình",
  //   "Hàm Tân",
  //   "Phú Quý",
  //   "Mũi Né"
  // ]);
  // await formatHometown("Phú Yên", [
  //   "Tuy Hòa",
  //   "Tuy An, Phú Yên, Vietnam",
  //   "Tây Hòa, Phú Yên",
  //   "Sông Cầu (thị xã)",
  //   "Sơn Hòa",
  //   "Đông Hòa, Phú Yên"
  // ]);
  // await formatHometown("Khánh Hòa", [
  //   "Cam Ranh Port, Khánh Hòa, Vietnam",
  //   "Diên Khánh, Khánh Hòa, Vietnam",
  //   "Khanh Hoa, Khánh Hòa, Vietnam",
  //   "Ninh Hòa, Khánh Hòa, Vietnam",
  //   "Cam Lâm, Khánh Hòa, Vietnam",
  //   "Vạn Ninh, Khánh Hòa",
  //   "Nha Trang",
  //   "Cam Ranh"
  // ]);
  // await formatHometown("Ninh Thuận", [
  //   "Phan Rang-Tháp Chàm, Ninh Thuận, Vietnam"
  // ]);

  // await formatHometown("Lâm Đồng", [
  //   "Trường THPT chuyên Thăng Long - Đà Lạt",
  //   "Mâ?Kar Da Te, Lâm Ðồng, Vietnam",
  //   "Trường THPT Bùi Thị Xuân, Đà Lạt",
  //   "Trường THPT Đức Trọng - Lâm Đồng",
  //   "Phú Hội (1), Lâm Ðồng, Vietnam",
  //   "Ap Lac Vien, Lâm Ðồng, Vietnam",
  //   "Hiêp Thanh, Lâm Ðồng, Vietnam",
  //   "Tung Nghia, Lâm Ðồng, Vietnam",
  //   "B'Sar Dong, Lâm Ðồng, Vietnam",
  //   "Ấp Lạc Lâm, Lâm Ðồng, Vietnam",
  //   "Dong Thanh, Lâm Ðồng, Vietnam",
  //   "Thanh Bình, Lâm Ðồng, Vietnam",
  //   "Lac Nghiep, Lâm Ðồng, Vietnam",
  //   "Ap Tan Ha, Lâm Ðồng, Vietnam",
  //   "Phi Liêng, Lâm Ðồng, Vietnam",
  //   "Liên Hiệp, Lâm Ðồng, Vietnam",
  //   "D'Joe23, Lâm Ðồng, Vietnam",
  //   "Lac Xuan, Lâm Ðồng, Vietnam",
  //   "Lac Lam, Lâm Ðồng, Vietnam",
  //   "Ankroet, Lâm Ðồng, Vietnam",
  //   "Cau Dat, Lâm Ðồng, Vietnam",
  //   "Djrott, Lâm Ðồng, Vietnam",
  //   "Namban, Lâm Ðồng, Vietnam",
  //   "Kadô, Lâm Ðồng, Vietnam",
  //   "Lạc Dương, Lâm Đồng",
  //   "Thành phố Đà Lạt",
  //   "Dalat, Sarawak",
  //   "Bảo Lộc",
  //   "Di Linh",
  //   "Đà Lạt",
  //   "Lâm Hà"
  // ]);
  // await formatHometown("Kon Tum", [
  //   "Tinh Kontum, Kon Tum, Vietnam",
  //   "Kon Tum, Kon Tum, Vietnam",
  //   "Dak Tô, Kon Tum, Vietnam",
  //   "Kon Tum (thành phố)"
  // ]);
  // await formatHometown("Đắk Nông", [
  //   "THPT Phan Bội Châu - Cư Jut - Đăk Nông",
  //   "Gia Nghĩa",
  //   "Đắk Mil"
  // ]);
  // await formatHometown("Đắk Lắk", [
  //   "Xuong Cua May Dak Song, Đắc Lắk, Vietnam",
  //   "Dinh Ã?Ien Thuan Hanh, Đắc Lắk, Vietnam",
  //   "Bon Bu Bo Dak Nong, Đắc Lắk, Vietnam",
  //   "Buôn Krông K'Mar, Đắc Lắk, Vietnam",
  //   "Buôn Dru Dak Mam, Đắc Lắk, Vietnam",
  //   "Buôn Krông Bông, Đắc Lắk, Vietnam",
  //   "Ban Krong Pack, Đắc Lắk, Vietnam",
  //   "Ban Krông Pach, Đắc Lắk, Vietnam",
  //   "Buôn Mrông (1), Đắc Lắk, Vietnam",
  //   "Buôn Ma Thuột, Đắc Lắk, Vietnam",
  //   "Ban Krong Buk, Đắc Lắk, Vietnam",
  //   "Buon A Rieng, Đắc Lắk, Vietnam",
  //   "Ban Me Thuot, Đắc Lắk, Vietnam",
  //   "Buôn Dak (1), Đắc Lắk, Vietnam",
  //   "Buôn Ya Soup, Đắc Lắk, Vietnam",
  //   "Ban M'Drack, Đắc Lắk, Vietnam",
  //   "Buôn Hô (1), Đắc Lắk, Vietnam",
  //   "Buôn Hô (2), Đắc Lắk, Vietnam",
  //   "Ban Ea Phe, Đắc Lắk, Vietnam",
  //   "Hà Lan (2), Đắc Lắk, Vietnam",
  //   "Ã?Uc Minh, Đắc Lắk, Vietnam",
  //   "Ban Kdrao, Đắc Lắk, Vietnam",
  //   "Trung Hòa, Đắc Lắk, Vietnam",
  //   "Buon Trap, Đắc Lắk, Vietnam",
  //   "�Ak Song, Đắc Lắk, Vietnam",
  //   "Buôn Kli, Đắc Lắk, Vietnam",
  //   "Phuoc An, Đắc Lắk, Vietnam",
  //   "Kim Chau, Đắc Lắk, Vietnam",
  //   "Buôn Hô, Đắc Lắk, Vietnam",
  //   "Ban Dak, Đắc Lắk, Vietnam",
  //   "Lak, Đắc Lắk, Vietnam",
  //   "DakLak Buon Ma Thuot",
  //   "THPT Krông Ana",
  //   "THPT Buôn Đôn",
  //   "Buôn Ma Thuột"
  // ]);
  // await formatHometown("Gia Lai", [
  //   "Nam thanh nữ tú trường THPT lê quý đôn gia lai",
  //   "Trường THPT Nguyễn Huệ, Đắk Đoa, Gia Lai",
  //   "Trường THPT Chuyên Hùng Vương - Gia Lai",
  //   "THPT Nguyễn Bỉnh Khiêm, Chư Sê, Gia Lai",
  //   "Phú Yên (1), Gia Lai-Cong Tum, Vietnam",
  //   "Plei Tpang, Gia Lai-Cong Tum, Vietnam",
  //   "Dak Ha (1), Gia Lai-Cong Tum, Vietnam",
  //   "Trường THPT Phan Bội Châu - Gia Lai",
  //   "THPT  Trần Phú, Chư Prông, Gia Lai",
  //   "THPT  Chư sê - Nguyễn Bỉnh Khiêm",
  //   "Trường THPT Trần Phú (Gia Lai)",
  //   "THPT Nguyễn Trường Tộ-Gia Lai",
  //   "Tinh Pleiku, Gia Lai, Vietnam",
  //   "THPT Mạc Đĩnh Chi - Gia Lai",
  //   "Trường THPT Hoàng Hoa Thám",
  //   "Phu Nhon, Gia Lai, Vietnam",
  //   "Plei Kly, Gia Lai, Vietnam",
  //   "Gia Lai, Gia Lai, Vietnam",
  //   "Phú Túc, Gia Lai, Vietnam",
  //   "Plây Ku, Gia Lai, Vietnam",
  //   "Plây Cu, Gia Lai, Vietnam",
  //   "An Khê, Gia Lai, Vietnam",
  //   "THPT Pleiku - Gia Lai",
  //   "THPT Nguyễn Chí Thanh",
  //   "THPT LÊ LỢI",
  //   "Pleiku"
  // ]);
})();
