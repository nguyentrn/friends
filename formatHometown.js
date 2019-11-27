//
//
//
//
//
//
const pg = require("./database");

const formatHometown = async function(hometown, stringArr) {
  try {
    const arr = stringArr.map(a => `'${a}'`);

    const a = await pg.raw(
      `WITH return AS (SELECT profiles.uid,full_name,location_from,location_now,other FROM profiles RIGHT JOIN profile_raws ON profiles.uid=profile_raws.uid  WHERE (location_from IN (${arr.join(
        ","
      )}) OR location_now IN (${arr.join(
        ","
      )})) AND (hometown IS NULL)) UPDATE profiles SET hometown='${hometown}' FROM return WHERE profiles.uid=return.uid`
    );

    // const res = await pg("profile_raws")
    //   .select("*")
    //   .orWhereIn("location_now", stringArr)
    //   .orWhereIn("location_from", stringArr)
    //   .limit(10);
    // .update({ from: hometown });
    console.log(hometown);
  } catch (err) {
    console.log(err);

    console.log(err.code, hometown);
  }
};

formatHometown("Thái Lan", ["Băng Cốc"]);
// formatHometown("Campuchia", ["Phnôm Pênh"]);
// formatHometown("Lào", [
//   "Viêng Chăn",
//   "Vientane, Vientiane, Laos",
//   "Kaysone Phomvihane",
// ]);

// formatHometown("Hà Nội", [
//   // 'Hà Nội',
//   "Hanoi – Amsterdam High School",
//   "Trường THPT Nguyễn Thị Minh Khai - Hà Nội",
//   // 'Hà Nội Phố'
//   "Hoai Duc Phu, Ha Noi, Vietnam",
//   "Ha Loi, Ha Noi, Vietnam",
//   "Tay Ho, Ha Noi, Vietnam",
//   "Phú Xuyên, Ha Noi, Vietnam",
//   "Gia Lâm Pho, Ha Noi, Vietnam",
//   "Thanh Oai, Ha Son Binh, Vietnam",
//   "Sơn Tây (thị xã)",
//   "THPT Phan Đình Phùng",
//   "THPT Vân Nội",
//   "THPT Trần Hưng Đạo - Thanh Xuân",
//   "Trường THPT Trương Định - Hà Nội",
//   "THPT Nguyễn Trãi - Ba Đình",
//   "Marie Curie Hanoi School",
//   "THPT Trần Phú - Hoàn Kiếm",
//   "THCS & THPT Lương Thế Vinh - Hà Nội",
//   "THPT Trần Nhân Tông - Hà Nội",
//   "THPT Lê Quý Đôn - Đống Đa",
//   "THPT Cầu Giấy - Hà Nội",
//   "THPT Lê Quý Đôn-Hà Đông",
//   "PTTH Đống Đa - Hà Nội",
//   "THPT Xuân Đỉnh ( Hà Nội )",
//   "Xuân Mai",
//   "Duc Tu, Ha Noi, Vietnam",
//   "Hà Đông",
//   "Ba Vì, Ha Son Binh, Vietnam",
// ]);
// formatHometown("Hồ Chí Minh", [
//   // 'Thành phố Hồ Chí Minh',
//   "Trường THPT Gia Định",
//   // 'Ho Chi Minh City',
//   "THPT Chuẩn Quốc Gia Võ Trường Toản - P. Hiệp Thành, Q12, TP. HCM",
//   "Lê Hồng Phong High School",
//   "THPT Nguyễn Công Trứ",
//   "Trường THPT Phú Nhuận",
//   "Trường THPT Marie Curie",
//   // 'Thành Phố Hồ Chí Minh',
//   "Trường THPT Trần Phú TPHCM",
//   "THPT Nguyễn Du",
//   "Nhà Bè, Hồ Chí Minh, Vietnam",
//   "Phu Nhuan, Hồ Chí Minh, Vietnam",
//   "Bình Chánh, Hồ Chí Minh, Vietnam",
//   "Go Vap, Hồ Chí Minh, Vietnam",
//   "Binh Thanh, Hồ Chí Minh, Vietnam",
//   "Hóc Môn, Hồ Chí Minh, Vietnam",
//   "Củ Chi, Hồ Chí Minh, Vietnam",
//   "THPT Bình Phú (Quận 6)",
//   "THPT Nguyễn An Ninh quận 10",
//   "THPT Nguyễn Trãi , Q4 , Sài Gòn",
//   "THPT Nguyễn Thượng Hiền",
//   "Marie Curie High School",
//   "THPT Trưng Vương Q.1",
//   "THPT Nguyễn Hữu Thọ Q.4 Tp.HCM",
//   "Trường THPT Trần Quang Khải TPHCM",
//   "Trường THPT Lê Thánh Tôn Q7 - ZIP",
//   "Trường THPT Nguyễn Tất Thành Q6",
//   "Tran Van On secondary school",
//   "Trường THCS Nguyễn Du - Q.1",
//   "THPT Nguyễn Khuyến Q10",
//   "THPT Nguyễn Thị Diệu",
//   "THPT Nguyễn Thái Bình - TpHCM",
//   "Trường THPT Thanh Đa",
//   "Học sinh THPT Thủ Đức",
//   "Cần Giờ, Hồ Chí Minh, Vietnam",
// ]);

// formatHometown("Hòa Bình", ["Hòa Bình, Hòa Bình, Vietnam"]);
// formatHometown("Sơn La", ["Sơn La", "Mộc Châu"]);
// formatHometown("Điện Biên", ["Điện Biên Phủ"]);
// formatHometown("Lai Châu", ["Lai Chau"]);
// formatHometown("Lào Cai", ["Lào Cai (thành phố)"]);
// formatHometown("Yên Bái", ["Yên Bái (thành phố)", "Lục Yên", "Nghĩa Lộ"]);

// formatHometown("Phú Thọ", [
//   "Việt Trì",
//   "Phu Tho, Phú Thọ, Vietnam",
//   "Phú Thọ (thị xã)",
//   "Thanh Sơn",
//   "Vietri, Phú Thọ, Vietnam",
// ]);
// formatHometown("Hà Giang", [
//   "Hà Giang (thành phố)",
//   "Bắc Quang, Hà Giang, Vietnam",
// ]);
// formatHometown("Tuyên Quang", ["Tuyên Quang, Tuyên Quang, Vietnam"]);
// formatHometown("Cao Bằng", ["Cao Bằng"]);
// formatHometown("Bắc Kạn", ["Bắc Kạn"]);
// formatHometown("Thái Nguyên", ["Thái Nguyên (thành phố)"]);
// formatHometown("Lạng Sơn", ["Lạng Sơn"]);
// formatHometown("Bắc Giang", ["Bắc Giang (thành phố)", "Lục Nam"]);
// formatHometown("Quảng Ninh", [
//   "Hạ Long (thành phố)",
//   "Cẩm Phả Port, Quảng Ninh, Vietnam",
//   "Móng Cái",
//   "Cua Ong, Quảng Ninh, Vietnam",
//   "Quảng Yên, Quảng Ninh, Vietnam",
//   "Khê Mao, Quảng Ninh, Vietnam",
//   "Uông Bí",
//   "Cẩm Phả",
//   "Ha Coi, Quảng Ninh, Vietnam",
// ]);

// formatHometown("Bắc Ninh", ["Bắc Ninh (thành phố)", "Từ Sơn"]);
// formatHometown("Hà Nam", [
//   "Ha-Nam, Hà Nam, Vietnam",
//   "Phủ Lý",
//   "Binh Luc, Hà Nam, Vietnam",
// ]);
// formatHometown("Hải Dương", [
//   "Hải Dương (thành phố)",
//   "Haidöng, Hải Dương, Vietnam",
// ]);
// formatHometown("Hải Phòng", ["Hải Phòng", "Haiphong, Hải Phòng, Vietnam"]);
// formatHometown("Hưng Yên", [
//   "Hung Yen, Hưng Yên, Vietnam",
//   "Ân Thi, Hưng Yên",
//   "Mỹ Hào",
// ]);
// formatHometown("Nam Định", [
//   "Nam Định, Nam Định, Vietnam",
//   "Giao Thủy",
//   "Hải Hậu",
//   "Xuân Trường",
// ]);
// formatHometown("Ninh Bình", ["Ninh Bình (thành phố)"]);
// formatHometown("Thái Bình", [
//   "Thái Bình, Thái Bình, Vietnam",
//   "Thái Bình (thành phố)",
// ]);
// formatHometown("Vĩnh Phúc", [
//   "Vinh Phuc, Ha Noi, Vietnam",
//   "Phúc Yên",
//   "Yen, Vĩnh Phúc, Vietnam",
//   "Vĩnh Yên",
//   "Vĩnh Tường",
// ]);

// formatHometown("Cần Thơ", [
//   "Cần Thơ",
//   "Ap Binh Duong (1), Vietnam",
//   "Thốt Nốt",
// ]);
// formatHometown("An Giang", [
//   "Long Xuyên",
//   "Chau Phú, An Giang, Vietnam",
//   "Chaudok, An Giang, Vietnam",
//   "Angiang, An Giang, Vietnam",
//   "Chợ Mới",
//   "Tri Tôn (thị trấn)",
//   "Tịnh Biên",
// ]);
// formatHometown("Thanh Hóa", ["Thanh Hóa", "Sầm Sơn"]);
// formatHometown("Nghệ An", [
//   "Quynh Luu, Nghệ An, Vietnam",
//   "Vinh",
//   "Cho Do Luong, Nghệ An, Vietnam",
//   "Thanh Chương",
//   "Phu Dien Chau, Nghệ An, Vietnam",
//   "Yên Thành",
//   "Thành phố Vinh",
//   "Thái Hõa, Nghệ An, Vietnam",
//   "Nam �Àn, Nghệ An, Vietnam",
//   "Vin, Nghệ An, Vietnam",
//   "Cửa Lò",
//   "Quỳ Hợp",
//   "Nghi Lộc",
//   "Tân Kỳ",
// ]);
// formatHometown("Hà Tĩnh", [
//   "Trường THPT Phan Đình Phùng - Hà Tĩnh",
//   "Ha Tin', Hà Tĩnh, Vietnam",
//   "Hà Tĩnh (thành phố)",
//   "Hương Khê, Hà Tĩnh, Vietnam",
//   "Hương Sơn",
//   "THPT Hương Sơn",
//   "Kỳ Anh",
// ]);
// formatHometown("Quảng Trị", [
//   "Quảng Trị (thị xã)",
//   "Vĩnh Linh",
//   "Huong Hoa, Quảng Trị, Vietnam",
//   "Hồ Xá, Quảng Trị, Vietnam",
//   "Đông Hà",
//   "Khe Sanh, Binh Tri Thien, Vietnam",
//   "Lao Bảo (thị trấn)",
//   "Hải Lăng",
// ]);
// formatHometown("Thừa Thiên - Huế", ["Huế"]);
// formatHometown("Quảng Bình", [
//   "Đồng Hới",
//   "Quang Ninh, Binh Tri Thien, Vietnam",
//   "Quảng Trạch",
//   "Le Thuy, Quảng Bình, Vietnam",
// ]);
// formatHometown("Đà Nẵng", ["Đà Nẵng"]);
// formatHometown("Quảng Nam", [
//   "Hội An",
//   "Quang Nam, Quang Nam-Da Nang, Vietnam",
//   "Tam Kỳ",
//   "Hoi An, Quang Nam-Da Nang, Vietnam",
//   "Que Son, Quảng Nam, Vietnam",
// ]);
// formatHometown("Quảng Ngãi", [
//   "Quảng Ngãi (thành phố)",
//   "Binh Son, Quảng Ngãi, Vietnam",
//   "Kwang Ngai, Quảng Ngãi, Vietnam",
// ]);
// formatHometown("Bình Định", [
//   "Hoài Nhon, Bình Ðịnh, Vietnam",
//   "Binh Dinh, Nghia Binh, Vietnam",
//   "Quy Nhơn",
//   "Phú Phong, Bình Ðịnh, Vietnam",
//   "Qui Nhon, Bình Ðịnh, Vietnam",
//   "Hoài Ân, Bình Ðịnh, Vietnam",
//   "Phù Cát",
//   "Tuy Phước",
//   "Bồng Sơn, Bình Ðịnh, Vietnam",
//   "Tuy Phong",
//   "An Nhơn",
// ]);

// formatHometown("Long An", [
//   "Tân An",
//   "Cần Giuộc",
//   "Cần Đước",
//   "Thạnh Hóa",
//   "Mộc Hóa",
//   "Can Gioc, Long An, Vietnam",
// ]);
// formatHometown("Tiền Giang", [
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
//   "Vĩnh Bình (1), Tiền Giang, Vietnam",
// ]);
// formatHometown("Vĩnh Long", ["Vĩnh Long (thành phố)", "Vũng Liêm"]);
// formatHometown("Bến Tre", [
//   "Bến Tre",
//   "Ben, Bến Tre, Vietnam",
//   "Ba Tri",
//   "Chợ Lách",
// ]);
// formatHometown("Đồng Tháp", [
//   "Thanh Bình, Ðồng Tháp, Vietnam",
//   "Cao Lãnh",
//   "Lai Vung",
//   "Dong Thap, Hoang Lien Son, Vietnam",
//   "Sa Đéc",
//   "Lấp Vò",
//   "Hồng Ngự (thị xã)",
//   "Tháp Mười",
//   "Tân Châu",
//   "Tràm Chim, Ðồng Tháp, Vietnam",
// ]);
// formatHometown("Trà Vinh", ["Trà Vinh"]);
// formatHometown("Sóc Trăng", ["Sóc Trăng (thành phố)"]);
// formatHometown("Bạc Liêu", ["Bạc Liêu (thành phố)"]);
// formatHometown("Kiên Giang", [
//   "Rach Gia, Vietnam",
//   "Rạch Giá",
//   "Vinh Thuan (1), Kiến Giang, Vietnam",
//   "Phu Quoc, Kiến Giang, Vietnam",
//   "Giồng Riềng",
//   "Hà Tiên",
//   "Gò Quao",
//   "Kiên Lương",
//   "An Biên",
//   "Rach Soi, Kiến Giang, Vietnam",
// ]);
// formatHometown("Hậu Giang", ["Phụng Hiệp", "Vị Thanh"]);
// formatHometown("Cà Mau", ["Cà Mau", "Thới Bình, Cà Mau, Vietnam"]);

// formatHometown("Bình Thuận", [
//   "Phan Thiết",
//   "Tánh Linh, Bình Thuận, Vietnam",
//   "Xa Phan Thiet, Bình Thuận, Vietnam",
//   "Võ Xu, Thuin Hai, Vietnam",
//   "Lagi, Thuin Hai, Vietnam",
//   "Phan Rang - Tháp Chàm",
//   "Fanthit, Bình Thuận, Vietnam",
//   "Bắc Bình",
//   "Phan Ri Cua, Thuin Hai, Vietnam",
// ]);
// formatHometown("Phú Yên", [
//   "Tuy Hòa",
//   "Tuy An, Phú Yên, Vietnam",
//   "Tây Hòa, Phú Yên",
//   "Sông Cầu (thị xã)",
//   "Sơn Hòa",
//   "Đông Hòa, Phú Yên",
// ]);
// formatHometown("Khánh Hòa", [
//   "Nha Trang",
//   "Khanh Hoa, Khánh Hòa, Vietnam",
//   "Vạn Ninh, Khánh Hòa",
//   "Ninh Hòa, Khánh Hòa, Vietnam",
//   "Cam Ranh Port, Khánh Hòa, Vietnam",
//   "Cam Lâm, Khánh Hòa, Vietnam",
//   "Cam Ranh",
// ]);
// formatHometown("Ninh Thuận", ["Phan Rang-Tháp Chàm, Ninh Thuận, Vietnam"]);
// formatHometown("Đồng Nai", [
//   "Biên Hòa",
//   "Long Thành",
//   "Xuân Lộc, Ðồng Nai, Vietnam",
//   "Long Khánh",
//   "Vĩnh Cửu, Đồng Nai",
//   "Tân Phú",
//   "Xa Dau Giay, Vietnam",
//   "Gia Kiem, Vietnam",
//   "Bến Lức",
//   "Trảng Bom",
//   "Nhơn Trạch",
//   "Cẩm Mỹ",
//   "Tan Phu, Vietnam",
// ]);
// formatHometown("Bình Dương", [
//   "Binh Duong - Viet Nam",
//   "Thủ Dầu Một",
//   "Dĩ An",
//   "Lái Thiêu",
//   "Bến Cát",
//   "Tân Uyên (huyện cũ)",
//   "Dầu Tiếng",
//   "Phu Giáo, Vietnam",
// ]);

// formatHometown("Tây Ninh", [
//   "Tây Ninh",
//   "Gò Dầu Hạ, Tây Ninh, Vietnam",
//   "Trảng Bàng",
// ]);
// formatHometown("Bình Phước", [
//   "Binh Phuoc, Vietnam",
//   "Bình Long, Bìn Phước, Vietnam",
//   "Long Hai, Vietnam",
//   "Lộc Ninh, Bìn Phước, Vietnam",
//   "Bình Long",
// ]);
// formatHometown("Bà Rịa - Vũng Tàu", [
//   "Vũng Tàu",
//   "Xa Vung Tau, Bà Rịa-Vũng Tàu, Vietnam",
//   "Bà Rịa",
//   "Long Điền",
// ]);

// formatHometown("Lâm Đồng", [
//   "Thành phố Đà Lạt",
//   "Trường THPT Bùi Thị Xuân, Đà Lạt",
//   "Trường THPT Đức Trọng - Lâm Đồng",
//   "Trường THPT chuyên Thăng Long - Đà Lạt",
//   "Dalat, Sarawak",
//   "Bảo Lộc",
//   "Đà Lạt",
//   "B'Sar Dong, Lâm Ðồng, Vietnam",
//   "Di Linh",
//   "Tung Nghia, Lâm Ðồng, Vietnam",
//   "Lâm Hà",
// ]);
// formatHometown("Kon Tum", ["Kon Tum (thành phố)", "Kon Tum, Kon Tum, Vietnam"]);
// formatHometown("Đắk Nông", [
//   "THPT Phan Bội Châu - Cư Jut - Đăk Nông",
//   "Đắk Mil",
//   "Gia Nghĩa",
// ]);
// formatHometown("Đắk Lắk", [
//   "THPT Krông Ana",
//   "THPT Buôn Đôn",
//   "DakLak Buon Ma Thuot",
//   "Buôn Ma Thuột, Đắc Lắk, Vietnam",
//   "Buôn Ma Thuột",
//   "Buôn Hô, Đắc Lắk, Vietnam",
//   "Buon Trap, Đắc Lắk, Vietnam",
//   "Ban M'Drack, Đắc Lắk, Vietnam",
// ]);
// formatHometown("Gia Lai", [
//   "THPT Nguyễn Chí Thanh",
//   "Trường THPT Chuyên Hùng Vương - Gia Lai",
//   "THPT Pleiku - Gia Lai",
//   "Pleiku",
//   "Trường THPT Phan Bội Châu - Gia Lai",
//   "Trường THPT Hoàng Hoa Thám",
//   "Trường THPT Trần Phú (Gia Lai)",
//   "THPT Nguyễn Trường Tộ-Gia Lai",
//   "THPT Mạc Đĩnh Chi - Gia Lai",
//   "Nam thanh nữ tú trường THPT lê quý đôn gia lai",
//   "THPT Nguyễn Bỉnh Khiêm, Chư Sê, Gia Lai",
//   "THPT LÊ LỢI",
//   "THPT  Trần Phú, Chư Prông, Gia Lai",
//   "THPT  Chư sê - Nguyễn Bỉnh Khiêm",
//   "Trường THPT Nguyễn Huệ, Đắk Đoa, Gia Lai",
//   "Gia Lai, Gia Lai, Vietnam",
//   "Tinh Pleiku, Gia Lai, Vietnam",
//   "An Khê, Gia Lai, Vietnam",
//   "Phú Túc, Gia Lai, Vietnam",
// ]);
// // await formatFrom('Thái Lan', /(thái lan|Kanchanaburi)/i);
