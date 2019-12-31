//
//
//
//
//
//
const pg = require("./database");

module.exports = [
  {
    name: "Hà Nội",
    raws: [
      "Trường THPT Nguyễn Thị Minh Khai - Hà Nội",
      "THCS & THPT Lương Thế Vinh - Hà Nội",
      "Trường THPT Trương Định - Hà Nội",
      "Thanh Oai, Ha Son Binh, Vietnam",
      "THPT Trần Hưng Đạo - Thanh Xuân",
      "Hanoi – Amsterdam High School",
      "Hoai Duc Phu, Ha Noi, Vietnam",
      "Ung Hoa, Ha Son Binh, Vietnam",
      "Gia Lâm Pho, Ha Noi, Vietnam",
      "THPT Trần Nhân Tông - Hà Nội",
      "Ba Vì, Ha Son Binh, Vietnam",
      "Phú Xuyên, Ha Noi, Vietnam",
      "THPT Nguyễn Trãi - Ba Đình",
      "Tho Tang, Ha Noi, Vietnam",
      "THPT Lê Quý Đôn - Đống Đa",
      "THPT Trần Phú - Hoàn Kiếm",
      "THPT Xuân Đỉnh ( Hà Nội )",
      "Marie Curie Hanoi School",
      "Tay Ho, Ha Noi, Vietnam",
      "Ha Loi, Ha Noi, Vietnam",
      "THPT Lê Quý Đôn-Hà Đông",
      "Duc Tu, Ha Noi, Vietnam",
      "THPT Cầu Giấy - Hà Nội",
      "PTTH Đống Đa - Hà Nội",
      "THPT Phan Đình Phùng",
      "Sơn Tây (thị xã)",
      "THPT Vân Nội",
      "Hà Nội Phố",
      "Xuân Mai",
      "Hà Đông",
      "Hà Nội"
    ]
  },
  {
    name: "Hồ Chí Minh",
    raws: [
      "THPT Chuẩn Quốc Gia Võ Trường Toản - P. Hiệp Thành, Q12, TP. HCM",
      "Trường THPT Trần Quang Khải TPHCM",
      "Trường THPT Lê Thánh Tôn Q7 - ZIP",
      "Bình Chánh, Hồ Chí Minh, Vietnam",
      "Binh Thanh, Hồ Chí Minh, Vietnam",
      "THPT Nguyễn Trãi , Q4 , Sài Gòn",
      "Phu Nhuan, Hồ Chí Minh, Vietnam",
      "Trường THPT Nguyễn Tất Thành Q6",
      "THPT Nguyễn Hữu Thọ Q.4 Tp.HCM",
      "THPT Nguyễn Thái Bình - TpHCM",
      "Cần Giờ, Hồ Chí Minh, Vietnam",
      "Hóc Môn, Hồ Chí Minh, Vietnam",
      "Go Vap, Hồ Chí Minh, Vietnam",
      "Củ Chi, Hồ Chí Minh, Vietnam",
      "Nhà Bè, Hồ Chí Minh, Vietnam",
      "Tran Van On secondary school",
      "THPT Nguyễn An Ninh quận 10",
      "Trường THCS Nguyễn Du - Q.1",
      "Trường THPT Trần Phú TPHCM",
      "Lê Hồng Phong High School",
      "THPT Nguyễn Thượng Hiền",
      "Trường THPT Marie Curie",
      "Marie Curie High School",
      "THPT Bình Phú (Quận 6)",
      "THPT Nguyễn Khuyến Q10",
      "Học sinh THPT Thủ Đức",
      "Thành Phố Hồ Chí Minh",
      "Thành phố Hồ Chí Minh",
      "Trường THPT Phú Nhuận",
      "Thành phố Hồ Chí Minh",
      "Trường THPT Thanh Đa",
      "THPT Trưng Vương Q.1",
      "THPT Nguyễn Công Trứ",
      "Trường THPT Gia Định",
      "THPT Nguyễn Thị Diệu",
      "Ho Chi Minh City",
      "THPT Nguyễn Du"
    ]
  },

  {
    name: "Hải Phòng",
    raws: [
      "Thái Bình, Hải Phòng, Vietnam",
      "An Duong, Hải Phòng, Vietnam",
      "Haiphong, Hải Phòng, Vietnam",
      "Vinh Bao, Hải Phòng, Vietnam",
      "Cat Hai, Hải Phòng, Vietnam",
      "Lap Le, Hải Phòng, Vietnam",
      "Cát Bà, Hải Phòng, Vietnam",
      "An Lu, Hải Phòng, Vietnam",
      "Hải Phòng"
    ]
  },
  {
    name: "Thái Nguyên",
    raws: [
      "Ba Hàng, Thái Nguyên, Vietnam",
      "Cho Moi, Thái Nguyên, Vietnam",
      "Thái Nguyên (thành phố)",
      "Đại Từ"
    ]
  },

  {
    name: "Quảng Ninh",
    raws: [
      "Cam Pha Mines, Quảng Ninh, Vietnam",
      "Cẩm Phả Port, Quảng Ninh, Vietnam",
      "Hàm Ninh, Quảng Ninh, Quảng Bình",
      "An Ninh, Quảng Ninh (Quảng Bình)",
      "Port Campha, Quảng Ninh, Vietnam",
      "Pho Ba Che, Quảng Ninh, Vietnam",
      "Mong Duong, Quảng Ninh, Vietnam",
      "Trang Bach, Quảng Ninh, Vietnam",
      "Minh Châu, Quảng Ninh, Vietnam",
      "Vàng Danh, Quảng Ninh, Vietnam",
      "Quảng Yên, Quảng Ninh, Vietnam",
      "Bai Chay, Quảng Ninh, Vietnam",
      "Hong Gai, Quảng Ninh, Vietnam",
      "Cai Rong, Quảng Ninh, Vietnam",
      "Quan Lạn, Quảng Ninh, Vietnam",
      "Tien Yer, Quảng Ninh, Vietnam",
      "Hon Gai, Quảng Ninh, Vietnam",
      "Ã?Am Ha, Quảng Ninh, Vietnam",
      "Khê Mao, Quảng Ninh, Vietnam",
      "Cua Ong, Quảng Ninh, Vietnam",
      "Ha Coi, Quảng Ninh, Vietnam",
      "Tra Co, Quảng Ninh, Vietnam",
      "Mans, Quảng Ninh, Vietnam",
      "Hạ Long (thành phố)",
      "Hải Hà, Quảng Ninh",
      "Bình Liêu",
      "Móng Cái",
      "Tiên Yên",
      "Uông Bí",
      "Cẩm Phả"
    ]
  },

  {
    name: "Lạng Sơn",
    raws: [
      "Pho Binh Gia, Lạng Sơn, Vietnam",
      "Van Quan, Lạng Sơn, Vietnam",
      "Thất Khê, Lạng Sơn, Vietnam",
      "Lang Met, Lạng Sơn, Vietnam",
      "Bac Son, Lạng Sơn, Vietnam",
      "Lạng Sơn"
    ]
  },
  {
    name: "Bắc Giang",
    raws: [
      "Phu Lang Thong, Bắc Giang, Vietnam",
      "Thuong, Bắc Giang, Vietnam",
      "Bo Ha, Bắc Giang, Vietnam",
      "Bắc Giang (thành phố)",
      "Lục Ngạn",
      "Lục Nam"
    ]
  },

  { name: "Bắc Ninh", raws: ["Bắc Ninh (thành phố)", "Thuận Thành", "Từ Sơn"] },
  {
    name: "Hà Nam",
    raws: [
      "Kim Bang, Ha Nam Ninh, Vietnam",
      "Binh Luc, Hà Nam, Vietnam",
      "Phu-Li, Hà Nam, Vietnam",
      "Ha-Nam, Hà Nam, Vietnam",
      "Phủ Lý"
    ]
  },
  {
    name: "Hải Dương",
    raws: [
      "Hai Dzung, Hải Dương, Vietnam",
      "Hai-Doung, Hải Dương, Vietnam",
      "Ninh Giang, Hai Hung, Vietnam",
      "Haidöng, Hải Dương, Vietnam",
      "Hải Dương (thành phố)",
      "Kinh Môn",
      "Chí Linh"
    ]
  },

  {
    name: "Hưng Yên",
    raws: ["Hung Yen, Hưng Yên, Vietnam", "Ân Thi, Hưng Yên", "Mỹ Hào"]
  },
  {
    name: "Nam Định",
    raws: [
      "Nam Định, Nam Định, Vietnam",
      "Xuân Trường",
      "Nghĩa Hưng",
      "Giao Thủy",
      "Nam Trực",
      "Hải Hậu"
    ]
  },
  {
    name: "Ninh Bình",
    raws: ["Nho Quan, Ninh Bình, Vietnam", "Ninh Bình (thành phố)"]
  },
  {
    name: "Thái Bình",
    raws: [
      "Thai Binâ?, Thái Bình, Vietnam",
      "Quynh Ngoc, Thái Bình, Vietnam",
      "Thuy Duong, Thái Bình, Vietnam",
      "Thái Bình, Thái Bình, Vietnam",
      "Quynh Coi, Thái Bình, Vietnam",
      "Hung Nhan, Thái Bình, Vietnam",
      "Nguyên Xá, Thái Bình, Vietnam",
      "Thuy Anh, Thái Bình, Vietnam",
      "Thanh Nê, Thái Bình, Vietnam",
      "An Lê, Thái Bình, Vietnam",
      "Thái Bình (thành phố)",
      "Tiền Hải"
    ]
  },
  {
    name: "Vĩnh Phúc",
    raws: [
      "Tam Đảo, Vĩnh Phúc, Vietnam",
      "Vinh Phuc, Ha Noi, Vietnam",
      "Yen, Vĩnh Phúc, Vietnam",
      "Vĩnh Tường",
      "Vĩnh Phúc",
      "Lập Thạch",
      "Phúc Yên",
      "Vĩnh Yên"
    ]
  },

  {
    name: "Hòa Bình",
    raws: [
      "Hương Tân Lạc, Hòa Bình, Vietnam",
      "Luong Son, Hòa Bình, Vietnam",
      "Hòa Bình, Hòa Bình, Vietnam",
      "Lac Son, Hòa Bình, Vietnam",
      "Phuong Lam, Vietnam",
      "Mai Châu"
    ]
  },
  {
    name: "Sơn La",
    raws: ["Son La Chau, Sơn La, Vietnam", "Sơn La", "Mộc Châu", "Phù Yên"]
  },
  { name: "Điện Biên", raws: ["Điện Biên Phủ"] },
  {
    name: "Lai Châu",
    raws: [
      ",Tam Duong, Lai Châu, Vietnam",
      "Muong Lay, Lai Châu, Vietnam",
      "Tam Duong, Lai Châu, Vietnam",
      "Muong Ang, Lai Châu, Vietnam",
      "Muong So, Lai Châu, Vietnam",
      "Mương Té, Lai Châu, Vietnam",
      "Lai Chau"
    ]
  },
  {
    name: "Lào Cai",
    raws: [
      "Lao Kay, Lào Cai, Vietnam",
      "Laokai, Lào Cai, Vietnam",
      "Lào Cai (thành phố)"
    ]
  },
  {
    name: "Yên Bái",
    raws: [
      "Thác Bà, Yên Bái, Vietnam",
      "Yên Bái (thành phố)",
      "Nghĩa Lộ",
      "Lục Yên"
    ]
  },

  {
    name: "Phú Thọ",
    raws: [
      "Phu Tho, Phú Thọ, Vietnam",
      "Vietri, Phú Thọ, Vietnam",
      "Thanh Thủy, Phú Thọ",
      "Phú Thọ (thị xã)",
      "Thanh Sơn",
      "Lâm Thao",
      "Thanh Ba",
      "Việt Trì",
      "Yên Lập",
      "Hạ Hòa",
      "Cẩm Khê"
    ]
  },
  {
    name: "Hà Giang",
    raws: ["Hà Giang (thành phố)", "Bắc Quang, Hà Giang, Vietnam"]
  },
  {
    name: "Tuyên Quang",
    raws: ["Tuyên Quang, Tuyên Quang, Vietnam", "Chiêm Hóa"]
  },
  { name: "Cao Bằng", raws: ["Cao Bằng"] },
  { name: "Bắc Kạn", raws: ["Bac Can, Bắc Kạn, Vietnam", "Bắc Kạn"] },

  {
    name: "Thanh Hóa",
    raws: [
      "Hương Lang Chánh, Thanh Hóa, Vietnam",
      "Hương Cẩm Thủy, Thanh Hóa, Vietnam",
      "Hương Ngọc Lac, Thanh Hóa, Vietnam",
      "Hương Bá Thước, Thanh Hóa, Vietnam",
      "Lang Que Nho, Thanh Hóa, Vietnam",
      "Phố Bến Sung, Thanh Hóa, Vietnam",
      "Bái Thượng, Thanh Hóa, Vietnam",
      "Thach Thât, Thanh Hóa, Vietnam",
      "Yen Dinh, Thanh Hóa, Vietnam",
      "Như Xuân, Thanh Hóa, Vietnam",
      "Quan Hóa, Thanh Hóa, Vietnam",
      "Nghi Sơn, Thanh Hóa, Vietnam",
      "Lam Son, Thanh Hóa, Vietnam",
      "Ba Lang, Thanh Hóa, Vietnam",
      "Futim, Thanh Hóa, Vietnam",
      "Thọ Xuân (huyện)",
      "Thanh Hóa",
      "Hoằng Hóa",
      "Nga Sơn",
      "Bỉm Sơn",
      "Sầm Sơn"
    ]
  },
  {
    name: "Nghệ An",
    raws: [
      "Cho Do Luong, Nghệ An, Vietnam",
      "Phu Dien Chau, Nghệ An, Vietnam",
      "Cho Do Luong, Nghệ An, Vietnam",
      "Vinh Ang, Nghe Tinh, Vietnam",
      "Quynh Luu, Nghệ An, Vietnam",
      "Thái Hõa, Nghệ An, Vietnam",
      "Cầu Giát, Nghệ An, Vietnam",
      "Nam �Àn, Nghệ An, Vietnam",
      "Ky Son, Nghệ An, Vietnam",
      "Vin, Nghệ An, Vietnam",
      "Tương Dương, Nghệ An",
      "Thành phố Vinh",
      "Thanh Chương",
      "Quế Phong",
      "Yên Thành",
      "Con Cuông",
      "Diễn Châu",
      "Quỳ Châu",
      "Nghi Lộc",
      "Quỳ Hợp",
      "Anh Sơn",
      "Cửa Lò",
      "Tân Kỳ",
      "Vinh"
    ]
  },
  {
    name: "Hà Tĩnh",
    raws: [
      "Trường THPT Phan Đình Phùng - Hà Tĩnh",
      "Hương Khê, Hà Tĩnh, Vietnam",
      "Ã?Uc Tho, Hà Tĩnh, Vietnam",
      "Ha Tin', Hà Tĩnh, Vietnam",
      "Hà Tĩnh (thành phố)",
      "THPT Hương Sơn",
      "Nghi Xuân",
      "Hương Sơn",
      "Tĩnh Gia",
      "Kỳ Anh"
    ]
  },

  {
    name: "Cần Thơ",
    raws: [
      "Ap Binh Duong (1), Vietnam",
      "Thành phố Cần Thơ",
      "Thốt Nốt",
      "Cần Thơ",
      "Ô Môn"
    ]
  },
  { name: "Đà Nẵng", raws: ["Da Dang, Quang Nam-Da Nang, Vietnam", "Đà Nẵng"] },
  {
    name: "An Giang",
    raws: [
      "Long Xuyên",
      "Chau Phú, An Giang, Vietnam",
      "Chaudok, An Giang, Vietnam",
      "Angiang, An Giang, Vietnam",
      "Chợ Mới",
      "Tri Tôn (thị trấn)",
      "Tịnh Biên"
    ]
  },
  {
    name: "Đồng Nai",
    raws: [
      "Xuân Lộc, Ðồng Nai, Vietnam",
      "Xa Dau Giay, Vietnam",
      "Vĩnh Cửu, Đồng Nai",
      "Gia Kiem, Vietnam",
      "Tan Phu, Vietnam",
      "Là Ngà, Vietnam",
      "Long Khánh",
      "Long Thành",
      "Nhơn Trạch",
      "Trảng Bom",
      "Biên Hòa",
      "Tân Phú",
      "Bến Lức",
      "Cẩm Mỹ"
    ]
  },
  {
    name: "Bình Dương",
    raws: [
      "Binh Duong - Viet Nam",
      "Bến Cát",
      "Dầu Tiếng",
      "Dĩ An",
      "Lái Thiêu",
      "Phu Giáo, Vietnam",
      "Tân Uyên (huyện cũ)",
      "Thủ Dầu Một"
    ]
  },

  {
    name: "Tây Ninh",
    raws: [
      "Truông Mít, Tây Ninh, Vietnam",
      "Ap Ben Cau, Tây Ninh, Vietnam",
      "Gò Dầu Hạ, Tây Ninh, Vietnam",
      "An Thanh, Tây Ninh, Vietnam",
      "Suối Dây, Tây Ninh, Vietnam",
      "Cau Khoi, Tây Ninh, Vietnam",
      "Bau Don, Tây Ninh, Vietnam",
      "Tai Nin, Tây Ninh, Vietnam",
      "Bến Cầu, Tây Ninh, Vietnam",
      "Xa Mát, Tây Ninh, Vietnam",
      "Tha La, Tây Ninh, Vietnam",
      "Katum, Tây Ninh, Vietnam",
      "Trảng Bàng",
      "Tây Ninh"
    ]
  },
  {
    name: "Bình Phước",
    raws: [
      "Phuoc Binh, Bìn Phước, Vietnam",
      "Bình Long, Bìn Phước, Vietnam",
      "Phu Rieng, Bìn Phước, Vietnam",
      "Dong Xoa, Bìn Phước, Vietnam",
      "Hớn Quản, Bìn Phước, Vietnam",
      "Lộc Ninh, Bìn Phước, Vietnam",
      "Binh Phuoc, Vietnam",
      "Long Hai, Vietnam",
      "Bình Long",
      "Đồng Xoài"
    ]
  },
  {
    name: "Bà Rịa - Vũng Tàu",
    raws: [
      "Xa Vung Tau, Bà Rịa-Vũng Tàu, Vietnam",
      "Lang Phuoc Hai, Vietnam",
      "Long Điền",
      "Xuyên Mộc",
      "Vũng Tàu",
      "Đất Đỏ",
      "Bà Rịa"
    ]
  },
  {
    name: "Long An",
    raws: [
      "Can Gioc, Long An, Vietnam",
      "Cần Giuộc",
      "Thạnh Hóa",
      "Vĩnh Hưng",
      "Cần Đước",
      "Mộc Hóa",
      "Tân Trụ",
      "Tân An"
    ]
  },
  {
    name: "Tiền Giang",
    raws: [
      "Châu Thành, Tiền Giang, Vietnam",
      "Mitho, Tiền Giang, Vietnam",
      "Cai Lậy (huyện)",
      "Cái Bè",
      "Mỹ Tho",
      "Gò Công",
      "Chợ Gạo",
      "Long An, Tiền Giang, Vietnam",
      "Ap My Tho, Tiền Giang, Vietnam",
      "Huu An, Tiền Giang, Vietnam",
      "Vĩnh Bình (1), Tiền Giang, Vietnam"
    ]
  },
  { name: "Vĩnh Long", raws: ["Vĩnh Long (thành phố)", "Vũng Liêm"] },
  {
    name: "Bến Tre",
    raws: ["Ben, Bến Tre, Vietnam", "Chợ Lách", "Bến Tre", "Ba Tri"]
  },
  {
    name: "Đồng Tháp",
    raws: [
      "Dong Thap, Hoang Lien Son, Vietnam",
      "Thuong Phuoc, Ðồng Tháp, Vietnam",
      "Thuong Thoi, Ðồng Tháp, Vietnam",
      "Sóc Sa Rài, Ðồng Tháp, Vietnam",
      "Thanh Bình, Ðồng Tháp, Vietnam",
      "Long Thuan, Ðồng Tháp, Vietnam",
      "Long Khánh, Ðồng Tháp, Vietnam",
      "Binh Thanh, Ðồng Tháp, Vietnam",
      "Tràm Chim, Ðồng Tháp, Vietnam",
      "Tan Thanh, Ðồng Tháp, Vietnam",
      "Phu Thuan, Ðồng Tháp, Vietnam",
      "An Phong, Ðồng Tháp, Vietnam",
      "Tân Long, Ðồng Tháp, Vietnam",
      "Tan Binh, Ðồng Tháp, Vietnam",
      "Tân Huê, Ðồng Tháp, Vietnam",
      "Tân Phú, Ðồng Tháp, Vietnam",
      "Dinh Bà, Ðồng Tháp, Vietnam",
      "An Long, Ðồng Tháp, Vietnam",
      "An Hoa, Ðồng Tháp, Vietnam",
      "My Tho, Ðồng Tháp, Vietnam",
      "Hồng Ngự (thị xã)",
      "Tỉnh Đồng Tháp",
      "Tháp Mười",
      "Cao Lãnh",
      "Tân Châu",
      "Lai Vung",
      "Sa Đéc",
      "Lấp Vò"
    ]
  },
  {
    name: "Trà Vinh",
    raws: [
      "Huong Cau Ngang, Trà Vinh, Vietnam",
      "Huong Cau Ke, Trà Vinh, Vietnam",
      "Huong Tra Cu, Trà Vinh, Vietnam",
      "Tra Vinâ?, Trà Vinh, Vietnam",
      "Châu Thành, Trà Vinh, Vietnam",
      "Long Toan, Trà Vinh, Vietnam",
      "Long Vĩnh, Trà Vinh, Vietnam",
      "Cànglong, Trà Vinh, Vietnam",
      "Vinh Kim, Trà Vinh, Vietnam",
      "Long Huu, Trà Vinh, Vietnam",
      "Trà Vinh"
    ]
  },
  {
    name: "Sóc Trăng",
    raws: [
      "Sài Gòn, Sóc Trăng, Vietnam",
      "Tinh, Sóc Trăng, Vietnam",
      "Sóc Trăng (thành phố)",
      "Vĩnh Châu"
    ]
  },
  {
    name: "Bạc Liêu",
    raws: [
      "Huyện Thạnh Trị, Bạc Liêu, Vietnam",
      "Ấp Hô Phòng, Bạc Liêu, Vietnam",
      "Xom Gia Rai, Bạc Liêu, Vietnam",
      "Bach Lieu, Bạc Liêu, Vietnam",
      "Bak Lieu, Bạc Liêu, Vietnam",
      "Hòa Bình, Bạc Liêu, Vietnam",
      "Hô Phòng, Bạc Liêu, Vietnam",
      "Vinh Loi, Bạc Liêu, Vietnam",
      "Cay Gua, Bạc Liêu, Vietnam",
      "Bien, Bạc Liêu, Vietnam",
      "Bạc Liêu (thành phố)"
    ]
  },
  {
    name: "Kiên Giang",
    raws: [
      "Huyen Chau Thanh, Kiến Giang, Vietnam",
      "Vinh Thuan (1), Kiến Giang, Vietnam",
      "Phu Quoc, Kiến Giang, Vietnam",
      "Rach Soi, Kiến Giang, Vietnam",
      "Kiên Tân, Kiến Giang, Vietnam",
      "Kiên An, Kiến Giang, Vietnam",
      "Rach Gia, Vietnam",
      "Tỉnh Kiên Giang",
      "Rạch Giá City",
      "Giồng Riềng",
      "Kiên Lương",
      "Rạch Giá",
      "An Biên",
      "Hà Tiên",
      "Gò Quao"
    ]
  },
  { name: "Hậu Giang", raws: ["Phụng Hiệp", "Vị Thanh", "Long Mỹ", "Vị Thủy"] },
  { name: "Cà Mau", raws: ["Cà Mau", "Thới Bình, Cà Mau, Vietnam"] },

  {
    name: "Quảng Trị",
    raws: [
      "Thi Xã �Òng Hà, Quảng Trị, Vietnam",
      "Khe Sanh, Binh Tri Thien, Vietnam",
      "Huong Hoa, Quảng Trị, Vietnam",
      "Gio Lin, Quảng Trị, Vietnam",
      "Hồ Xá, Quảng Trị, Vietnam",
      "Lao Bảo (thị trấn)",
      "Quảng Trị (thị xã)",
      "Cam Lộ (huyện)",
      "Vĩnh Linh",
      "Hải Lăng",
      "Gio Linh",
      "Đông Hà"
    ]
  },
  { name: "Thừa Thiên - Huế", raws: ["Huế"] },
  {
    name: "Quảng Bình",
    raws: [
      "Quang Ninh, Binh Tri Thien, Vietnam",
      "Kwang Binh, Quảng Bình, Vietnam",
      "Hoàn Lão, Quảng Bình, Vietnam",
      "Le Thuy, Quảng Bình, Vietnam",
      "Lệ Thủy, Quảng Bình",
      "Quảng Trạch",
      "Tuyên Hóa",
      "Minh Hóa",
      "Đồng Hới",
      "Bố Trạch",
      "Ba Đồn"
    ]
  },

  {
    name: "Quảng Nam",
    raws: [
      "Binh Duong, Quang Nam-Da Nang, Vietnam",
      "Quang Nam, Quang Nam-Da Nang, Vietnam",
      "Phuoc Son, Quang Nam-Da Nang, Vietnam",
      "Nong Son, Quang Nam-Da Nang, Vietnam",
      "Ai Nghia, Quang Nam-Da Nang, Vietnam",
      "Quận Năm, Quang Nam-Da Nang, Vietnam",
      "Viet An, Quang Nam-Da Nang, Vietnam",
      "Chu Lai, Quang Nam-Da Nang, Vietnam",
      "Trà My, Quang Nam-Da Nang, Vietnam",
      "Hoi An, Quang Nam-Da Nang, Vietnam",
      "Ha Lam, Quang Nam-Da Nang, Vietnam",
      "Que Son, Quảng Nam, Vietnam",
      "Nam Giang, Quảng Nam",
      "Tiên Phước",
      "Duy Xuyên",
      "Đại Lộc",
      "Hội An",
      "Tam Kỳ"
    ]
  },
  {
    name: "Quảng Ngãi",
    raws: [
      "Kwang Ngai, Quảng Ngãi, Vietnam",
      "Binh Son, Quảng Ngãi, Vietnam",
      "Mộ Đức, Quảng Ngãi, Vietnam",
      "Quảng Ngãi (thành phố)"
    ]
  },
  {
    name: "Bình Định",
    raws: [
      "Binh Dinh, Nghia Binh, Vietnam",
      "Hoài Nhon, Bình Ðịnh, Vietnam",
      "Phú Phong, Bình Ðịnh, Vietnam",
      "Tam Quan, Bình Ðịnh, Vietnam",
      "Qui Nhon, Bình Ðịnh, Vietnam",
      "Bồng Sơn, Bình Ðịnh, Vietnam",
      "Hoài Ân, Bình Ðịnh, Vietnam",
      "Tuy Phước",
      "Tuy Phong",
      "Quy Nhơn",
      "Phù Cát",
      "An Nhơn"
    ]
  },

  {
    name: "Bình Thuận",
    raws: [
      "Xa Phan Thiet, Bình Thuận, Vietnam",
      "Phan Ri Cua, Thuin Hai, Vietnam",
      "Tánh Linh, Bình Thuận, Vietnam",
      "Fanthit, Bình Thuận, Vietnam",
      "Võ Xu, Thuin Hai, Vietnam",
      "Lagi, Thuin Hai, Vietnam",
      "Phan Rang - Tháp Chàm",
      "Phan Thiết",
      "Bắc Bình",
      "Hàm Tân",
      "Phú Quý",
      "Mũi Né"
    ]
  },
  {
    name: "Phú Yên",
    raws: [
      "Tuy Hòa",
      "Tuy An, Phú Yên, Vietnam",
      "Tây Hòa, Phú Yên",
      "Sông Cầu (thị xã)",
      "Sơn Hòa",
      "Đông Hòa, Phú Yên"
    ]
  },
  {
    name: "Khánh Hòa",
    raws: [
      "Cam Ranh Port, Khánh Hòa, Vietnam",
      "Diên Khánh, Khánh Hòa, Vietnam",
      "Khanh Hoa, Khánh Hòa, Vietnam",
      "Ninh Hòa, Khánh Hòa, Vietnam",
      "Cam Lâm, Khánh Hòa, Vietnam",
      "Vạn Ninh, Khánh Hòa",
      "Nha Trang",
      "Cam Ranh"
    ]
  },
  {
    name: "Ninh Thuận",
    raws: [
      "Phan Rang-Tháp Chàm, Ninh Thuận, Vietnam",
      "Ninh Thuân, Thuin Hai, Vietnam",
      "Phan Ranh, Ninh Thuận, Vietnam",
      "An Phuoc, Ninh Thuận, Vietnam"
    ]
  },

  {
    name: "Lâm Đồng",
    raws: [
      "Trường THPT chuyên Thăng Long - Đà Lạt",
      "Mâ?Kar Da Te, Lâm Ðồng, Vietnam",
      "Trường THPT Bùi Thị Xuân, Đà Lạt",
      "Trường THPT Đức Trọng - Lâm Đồng",
      "Phú Hội (1), Lâm Ðồng, Vietnam",
      "Ap Lac Vien, Lâm Ðồng, Vietnam",
      "Hiêp Thanh, Lâm Ðồng, Vietnam",
      "Tung Nghia, Lâm Ðồng, Vietnam",
      "B'Sar Dong, Lâm Ðồng, Vietnam",
      "Ấp Lạc Lâm, Lâm Ðồng, Vietnam",
      "Dong Thanh, Lâm Ðồng, Vietnam",
      "Thanh Bình, Lâm Ðồng, Vietnam",
      "Lac Nghiep, Lâm Ðồng, Vietnam",
      "Ap Tan Ha, Lâm Ðồng, Vietnam",
      "Phi Liêng, Lâm Ðồng, Vietnam",
      "Liên Hiệp, Lâm Ðồng, Vietnam",
      "D'Joe23, Lâm Ðồng, Vietnam",
      "Lac Xuan, Lâm Ðồng, Vietnam",
      "Lac Lam, Lâm Ðồng, Vietnam",
      "Ankroet, Lâm Ðồng, Vietnam",
      "Cau Dat, Lâm Ðồng, Vietnam",
      "Djrott, Lâm Ðồng, Vietnam",
      "Namban, Lâm Ðồng, Vietnam",
      "Kadô, Lâm Ðồng, Vietnam",
      "Lạc Dương, Lâm Đồng",
      "Thành phố Đà Lạt",
      "Dalat, Sarawak",
      "Bảo Lộc",
      "Di Linh",
      "Đà Lạt",
      "Lâm Hà"
    ]
  },
  {
    name: "Kon Tum",
    raws: [
      "Tinh Kontum, Kon Tum, Vietnam",
      "Kon Tum, Kon Tum, Vietnam",
      "Dak Tô, Kon Tum, Vietnam",
      "Kon Tum (thành phố)"
    ]
  },
  {
    name: "Đắk Nông",
    raws: ["THPT Phan Bội Châu - Cư Jut - Đăk Nông", "Gia Nghĩa", "Đắk Mil"]
  },
  {
    name: "Đắk Lắk",
    raws: [
      "Xuong Cua May Dak Song, Đắc Lắk, Vietnam",
      "Dinh Ã?Ien Thuan Hanh, Đắc Lắk, Vietnam",
      "Bon Bu Bo Dak Nong, Đắc Lắk, Vietnam",
      "Buôn Krông K'Mar, Đắc Lắk, Vietnam",
      "Buôn Dru Dak Mam, Đắc Lắk, Vietnam",
      "Buôn Krông Bông, Đắc Lắk, Vietnam",
      "Ban Krong Pack, Đắc Lắk, Vietnam",
      "Ban Krông Pach, Đắc Lắk, Vietnam",
      "Buôn Mrông (1), Đắc Lắk, Vietnam",
      "Buôn Ma Thuột, Đắc Lắk, Vietnam",
      "Ban Krong Buk, Đắc Lắk, Vietnam",
      "Buon A Rieng, Đắc Lắk, Vietnam",
      "Ban Me Thuot, Đắc Lắk, Vietnam",
      "Buôn Dak (1), Đắc Lắk, Vietnam",
      "Buôn Ya Soup, Đắc Lắk, Vietnam",
      "Ban M'Drack, Đắc Lắk, Vietnam",
      "Buôn Hô (1), Đắc Lắk, Vietnam",
      "Buôn Hô (2), Đắc Lắk, Vietnam",
      "Ban Ea Phe, Đắc Lắk, Vietnam",
      "Hà Lan (2), Đắc Lắk, Vietnam",
      "Ã?Uc Minh, Đắc Lắk, Vietnam",
      "Ban Kdrao, Đắc Lắk, Vietnam",
      "Trung Hòa, Đắc Lắk, Vietnam",
      "Buon Trap, Đắc Lắk, Vietnam",
      "�Ak Song, Đắc Lắk, Vietnam",
      "Buôn Kli, Đắc Lắk, Vietnam",
      "Phuoc An, Đắc Lắk, Vietnam",
      "Kim Chau, Đắc Lắk, Vietnam",
      "Buôn Hô, Đắc Lắk, Vietnam",
      "Ban Dak, Đắc Lắk, Vietnam",
      "Lak, Đắc Lắk, Vietnam",
      "DakLak Buon Ma Thuot",
      "THPT Krông Ana",
      "THPT Buôn Đôn",
      "Buôn Ma Thuột"
    ]
  },
  {
    name: "Gia Lai",
    raws: [
      "Nam thanh nữ tú trường THPT lê quý đôn gia lai",
      "Trường THPT Nguyễn Huệ, Đắk Đoa, Gia Lai",
      "Trường THPT Chuyên Hùng Vương - Gia Lai",
      "THPT Nguyễn Bỉnh Khiêm, Chư Sê, Gia Lai",
      "Phú Yên (1), Gia Lai-Cong Tum, Vietnam",
      "Plei Tpang, Gia Lai-Cong Tum, Vietnam",
      "Dak Ha (1), Gia Lai-Cong Tum, Vietnam",
      "Trường THPT Phan Bội Châu - Gia Lai",
      "THPT  Trần Phú, Chư Prông, Gia Lai",
      "THPT  Chư sê - Nguyễn Bỉnh Khiêm",
      "Trường THPT Trần Phú (Gia Lai)",
      "THPT Nguyễn Trường Tộ-Gia Lai",
      "Tinh Pleiku, Gia Lai, Vietnam",
      "THPT Mạc Đĩnh Chi - Gia Lai",
      "Trường THPT Hoàng Hoa Thám",
      "Phu Nhon, Gia Lai, Vietnam",
      "Plei Kly, Gia Lai, Vietnam",
      "Gia Lai, Gia Lai, Vietnam",
      "Phú Túc, Gia Lai, Vietnam",
      "Plây Ku, Gia Lai, Vietnam",
      "Plây Cu, Gia Lai, Vietnam",
      "An Khê, Gia Lai, Vietnam",
      "THPT Pleiku - Gia Lai",
      "THPT Nguyễn Chí Thanh",
      "THPT LÊ LỢI",
      "Pleiku"
    ]
  }
];
