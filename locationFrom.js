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
      // "Trường THPT Nguyễn Thị Minh Khai - Hà Nội",
      // "THCS & THPT Lương Thế Vinh - Hà Nội",
      // "Trường THPT Trương Định - Hà Nội",
      // "THPT Trần Hưng Đạo - Thanh Xuân",
      // "Hanoi – Amsterdam High School",
      // "THPT Trần Nhân Tông - Hà Nội",
      // "THPT Nguyễn Trãi - Ba Đình",
      // "Tho Tang, Ha Noi, Vietnam",
      // "THPT Lê Quý Đôn - Đống Đa",
      // "THPT Trần Phú - Hoàn Kiếm",
      // "THPT Xuân Đỉnh ( Hà Nội )",
      // "Marie Curie Hanoi School",
      // "THPT Lê Quý Đôn-Hà Đông",
      // "THPT Cầu Giấy - Hà Nội",
      // "PTTH Đống Đa - Hà Nội",
      // "THPT Phan Đình Phùng",
      // "THPT Vân Nội",
      "Thanh Oai, Ha Son Binh, Vietnam",
      "Hoai Duc Phu, Ha Noi, Vietnam",
      "Ung Hoa, Ha Son Binh, Vietnam",
      "Phùng Khoang, Ha Noi, Vietnam",
      "Gia Lâm Pho, Ha Noi, Vietnam",
      "Ba Vì, Ha Son Binh, Vietnam",
      "Thanh Nhàn, Ha Noi, Vietnam",
      "Phú Xuyên, Ha Noi, Vietnam",
      "Khuong Ha, Ha Noi, Vietnam",
      "Hoang Cau, Ha Noi, Vietnam",
      "Trung Hà, Ha Noi, Vietnam",
      "Mai Dich, Ha Noi, Vietnam",
      "Yên Lac, Ha Noi, Vietnam",
      "Ngoc Ha, Ha Noi, Vietnam",
      "Me Tri, Ha Noi, Vietnam",
      "Kim Mã, Ha Noi, Vietnam",
      "Tay Ho, Ha Noi, Vietnam",
      "Ha Loi, Ha Noi, Vietnam",
      "Duc Tu, Ha Noi, Vietnam",
      "Sơn Tây (thị xã)",
      "Ha Noi, Vietnam",
      "Hà Nội Phố",
      "Xuân Mai",
      "Hà Đông",
      "Hà Nội"
    ]
  },
  {
    name: "Hồ Chí Minh",
    raws: [
      // "THPT Chuẩn Quốc Gia Võ Trường Toản - P. Hiệp Thành, Q12, TP. HCM",
      // "Trường THPT Trần Quang Khải TPHCM",
      // "Trường THPT Lê Thánh Tôn Q7 - ZIP",
      // "THPT Nguyễn Trãi , Q4 , Sài Gòn",
      // "Trường THPT Nguyễn Tất Thành Q6",
      // "THPT Nguyễn Hữu Thọ Q.4 Tp.HCM",
      // "THPT Nguyễn Thái Bình - TpHCM",
      // "Tran Van On secondary school",
      // "THPT Nguyễn An Ninh quận 10",
      // "Trường THCS Nguyễn Du - Q.1",
      // "Trường THPT Trần Phú TPHCM",
      // "Lê Hồng Phong High School",
      // "THPT Nguyễn Thượng Hiền",
      // "Trường THPT Marie Curie",
      // "Marie Curie High School",
      // "THPT Bình Phú (Quận 6)",
      // "THPT Nguyễn Khuyến Q10",
      // "Học sinh THPT Thủ Đức",
      // "Trường THPT Phú Nhuận",
      // "Trường THPT Thanh Đa",
      // "THPT Trưng Vương Q.1",
      // "THPT Nguyễn Công Trứ",
      // "Trường THPT Gia Định",
      // "THPT Nguyễn Thị Diệu",
      // "THPT Nguyễn Du"
      "Thành phố Hồ Chí Minh, Hồ Chí Minh, Vietnam",
      "Bình Chánh, Hồ Chí Minh, Vietnam",
      "Binh Thanh, Hồ Chí Minh, Vietnam",
      "Phu Nhuan, Hồ Chí Minh, Vietnam",
      "Thủ Đức, Hồ Chí Minh, Vietnam",
      "Cần Giờ, Hồ Chí Minh, Vietnam",
      "Hóc Môn, Hồ Chí Minh, Vietnam",
      "Da Kao, Ho Chi Minh, Vietnam",
      "Go Vap, Hồ Chí Minh, Vietnam",
      "Củ Chi, Hồ Chí Minh, Vietnam",
      "Nhà Bè, Hồ Chí Minh, Vietnam",
      "Thành Phố Hồ Chí Minh",
      "Thành phố Hồ Chí Minh",
      "Ho Chi Minh City",
      "Phú Nhuận",
      "Gò Vấp"
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
      "Mao Khe, Vietnam",
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
      "Don Dang, Lạng Sơn, Vietnam",
      "Mau Son, Lạng Sơn, Vietnam",
      "Bac Son, Lạng Sơn, Vietnam",
      "Xuat Le, Lạng Sơn, Vietnam",
      "Lạng Sơn"
    ]
  },
  {
    name: "Bắc Giang",
    raws: [
      "Phu Lang Thong, Bắc Giang, Vietnam",
      "Thuong, Bắc Giang, Vietnam",
      "Hiep Hoa, Hi Bac, Vietnam",
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
    raws: [
      "Phát Diệm, Ninh Bình, Vietnam",
      "Nho Quan, Ninh Bình, Vietnam",
      "Tam Điệp, Ninh Bình, Vietnam",
      "Nho Quan, Ninh Bình, Vietnam",
      "Ninbinh, Ninh Bình, Vietnam",
      "Ninh Bình (thành phố)"
    ]
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
      "Xuân Hòa, Vĩnh Phúc, Vietnam",
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
    raws: [
      "Son La Chau, Sơn La, Vietnam",
      "Ban Co Noi, Sơn La, Vietnam",
      "Muong Hung, Sơn La, Vietnam",
      "Mường Bu, Sơn La, Vietnam",
      "Sông Mã (huyện)",
      "Mộc Châu",
      "Phù Yên",
      "Sơn La"
    ]
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
      "Lào Cai (thành phố)",
      "Sa Pa"
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
      "Đoan Hùng, Phú Thọ, Vietnam",
      "Hoàng Xá, Phú Thọ, Vietnam",
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
    raws: [
      "Bắc Quang, Hà Giang, Vietnam",
      "Yên Minh, Hà Giang, Vietnam",
      "Dồng Văn, Hà Giang, Vietnam",
      "Vinh Tuy, Hà Giang, Vietnam",
      "Hà Giang (thành phố)"
    ]
  },
  {
    name: "Tuyên Quang",
    raws: ["Tuyên Quang, Tuyên Quang, Vietnam", "Chiêm Hóa"]
  },
  {
    name: "Cao Bằng",
    raws: [
      "Trung Khanh Phu, Cao Bằng, Vietnam",
      "Trùng Khánh, Cao Bằng",
      "Cao Bằng"
    ]
  },
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
      "Nông Cống",
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
      "Phu Dien Chau, Nghệ An, Vietnam",
      "Cho Do Luong, Nghệ An, Vietnam",
      "Thanh Hoa, Nghe Tinh, Vietnam",
      "Nghia Ã?An, Nghệ An, Vietnam",
      "Vinh Ang, Nghe Tinh, Vietnam",
      "Quynh Luu, Nghệ An, Vietnam",
      "Thái Hõa, Nghệ An, Vietnam",
      "Cầu Giát, Nghệ An, Vietnam",
      "Nam �Àn, Nghệ An, Vietnam",
      "Ky Son, Nghệ An, Vietnam",
      "Vin, Nghệ An, Vietnam",
      "Tương Dương, Nghệ An",
      "Thái Hòa, Nghệ An",
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
      "Long My, Cẩn Thỏ, Vietnam",
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
      "Ap An Phu (1), An Giang, Vietnam",
      "Vinh Hoi Dong, An Giang, Vietnam",
      "Ấp Tân Phú, An Giang, Vietnam",
      "Ap An Tinh, An Giang, Vietnam",
      "Ap Phu Hoa, An Giang, Vietnam",
      "Ap My Thoi, An Giang, Vietnam",
      "Binh Chanh, An Giang, Vietnam",
      "Châu Giang, An Giang, Vietnam",
      "Châu Phong, An Giang, Vietnam",
      "Dong Co Ki, An Giang, Vietnam",
      "Hiep Xuong, An Giang, Vietnam",
      "Can Thanh, An Giang, Vietnam",
      "Ap Phu An, An Giang, Vietnam",
      "Binh Thuy, An Giang, Vietnam",
      "Vinh Hau, An Giang, Vietnam",
      "Chau Phú, An Giang, Vietnam",
      "Nhà Bàng, An Giang, Vietnam",
      "Vinh Loc, An Giang, Vietnam",
      "Hoa Binh, An Giang, Vietnam",
      "An Thoi, An Giang, Vietnam",
      "Phu Huu, An Giang, Vietnam",
      "Phú Lâm, An Giang, Vietnam",
      "Hoa Hao, An Giang, Vietnam",
      "Hoa Lac, An Giang, Vietnam",
      "Kiên An, An Giang, Vietnam",
      "My Hiep, An Giang, Vietnam",
      "Ba Chuc, An Giang, Vietnam",
      "Chaudok, An Giang, Vietnam",
      "Angiang, An Giang, Vietnam",
      "Hoi An, An Giang, Vietnam",
      "Ba Thê, An Giang, Vietnam",
      "Phu My, An Giang, Vietnam",
      "Tri Tôn (thị trấn)",
      "Long Xuyên",
      "Tịnh Biên",
      "Chợ Mới"
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
      "Ho Nai, Vietnam",
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
      "Chơn Thành",
      "Bình Long",
      "Đồng Xoài"
    ]
  },
  {
    name: "Bà Rịa - Vũng Tàu",
    raws: [
      "Xa Vung Tau, Bà Rịa-Vũng Tàu, Vietnam",
      "Lang Phuoc Hai, Vietnam",
      "Phu My, Vietnam",
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
      "Ap Tan Thanh (1), Long An, Vietnam",
      "Xom Long Truong, Long An, Vietnam",
      "Ap Binh Ta (2), Long An, Vietnam",
      "Hòa Khánh (1), Long An, Vietnam",
      "Phuoc Van (1), Long An, Vietnam",
      "Ap Go Cao (1), Long An, Vietnam",
      "Ap Tho Mo (1), Long An, Vietnam",
      "Xóm Tân Thành, Long An, Vietnam",
      "Ấp Bình Thủy, Long An, Vietnam",
      "Cho Thu Thua, Long An, Vietnam",
      "An Nhut Tan, Long An, Vietnam",
      "Long Thanh, Long An, Vietnam",
      "Ap My Hanh, Long An, Vietnam",
      "Binh Phuoc, Long An, Vietnam",
      "Luong Hoa, Long An, Vietnam",
      "Nhựt Ninh, Long An, Vietnam",
      "Loc Giang, Long An, Vietnam",
      "Rach Kien, Long An, Vietnam",
      "Nhon Ninh, Long An, Vietnam",
      "Kien Binh, Long An, Vietnam",
      "Binh Hiep, Long An, Vietnam",
      "Ap Go Gon, Long An, Vietnam",
      "Bình Hòa, Long An, Vietnam",
      "Cau Tram, Long An, Vietnam",
      "Hiep Hoa, Long An, Vietnam",
      "Can Gioc, Long An, Vietnam",
      "Long Huu, Long An, Vietnam",
      "Long Hoa, Long An, Vietnam",
      "Long Khê, Long An, Vietnam",
      "Long Son, Long An, Vietnam",
      "Duc Hanh, Long An, Vietnam",
      "Ã?Uc Hoa, Long An, Vietnam",
      "Ã?Uc Lap, Long An, Vietnam",
      "Ã?Uc Hue, Long An, Vietnam",
      "An Thanh, Long An, Vietnam",
      "Ap Ã?Ao, Long An, Vietnam",
      "An Ninh, Long An, Vietnam",
      "Tan Phu, Long An, Vietnam",
      "Tan Buu, Long An, Vietnam",
      "My Yen, Long An, Vietnam",
      "My Qui, Long An, Vietnam",
      "Tan My, Long An, Vietnam",
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
      "Vĩnh Bình (1), Tiền Giang, Vietnam",
      "Châu Thành, Tiền Giang, Vietnam",
      "Ap My Tho, Tiền Giang, Vietnam",
      "Tan Hiep, Tiền Giang, Vietnam",
      "Long An, Tiền Giang, Vietnam",
      "Huu An, Tiền Giang, Vietnam",
      "Mitho, Tiền Giang, Vietnam",
      "Cai Lậy (huyện)",
      "Tan Phuoc",
      "Gò Công",
      "Chợ Gạo",
      "Cái Bè",
      "Mỹ Tho"
    ]
  },
  { name: "Vĩnh Long", raws: ["Vĩnh Long (thành phố)", "Vũng Liêm", "Trà Ôn"] },
  {
    name: "Bến Tre",
    raws: [
      "Huong Thanh Phu, Bến Tre, Vietnam",
      "Chợ Giồng Trôm, Bến Tre, Vietnam",
      "Ap Giong Trom, Bến Tre, Vietnam",
      "Ap Tan Nhuan, Bến Tre, Vietnam",
      "Thạnh Phong, Bến Tre, Vietnam",
      "Thanh Trieu, Bến Tre, Vietnam",
      "Trúc Giang, Bến Tre, Vietnam",
      "Giao Thanh, Bến Tre, Vietnam",
      "Thanh Ngãi, Bến Tre, Vietnam",
      "Tan Xuan, Bến Tre, Vietnam",
      "My Thanh, Bến Tre, Vietnam",
      "Châu Hòa, Bến Tre, Vietnam",
      "Xóm Bến, Bến Tre, Vietnam",
      "Phú Túc, Bến Tre, Vietnam",
      "An Thuy, Bến Tre, Vietnam",
      "Cai Mon, Bến Tre, Vietnam",
      "An Hóa, Bến Tre, Vietnam",
      "Ap Ba, Bến Tre, Vietnam",
      "Phú, Bến Tre, Vietnam",
      "Ben, Bến Tre, Vietnam",
      "Chợ Lách",
      "Bến Tre",
      "Ba Tri",
      "Mỏ Cày"
    ]
  },
  {
    name: "Đồng Tháp",
    raws: [
      "Dong Thap, Hoang Lien Son, Vietnam",
      "Thuong Phuoc, Ðồng Tháp, Vietnam",
      "Phong My (3), Ðồng Tháp, Vietnam",
      "Thuong Thoi, Ðồng Tháp, Vietnam",
      "Sóc Sa Rài, Ðồng Tháp, Vietnam",
      "Thanh Bình, Ðồng Tháp, Vietnam",
      "Long Thuan, Ðồng Tháp, Vietnam",
      "Long Khánh, Ðồng Tháp, Vietnam",
      "Binh Thanh, Ðồng Tháp, Vietnam",
      "Cai Tau Ha, Cuu Long, Vietnam",
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
      "My Xuyen, Sóc Trăng, Vietnam",
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
  {
    name: "Cà Mau",
    raws: [
      "Thới Bình, Cà Mau, Vietnam",
      "Cai Nuoc, Cà Mau, Vietnam",
      "Năm Căn (thị trấn)",
      "Cà Mau"
    ]
  },

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
      "Triệu Phong",
      "Vĩnh Linh",
      "Hải Lăng",
      "Gio Linh",
      "Đông Hà"
    ]
  },
  {
    name: "Thừa Thiên - Huế",
    raws: [
      "Bach Ma, Thừa Thiên-Huế, Vietnam ,Vietnam",
      "Bach Ma, Thừa Thiên-Huế, Vietnam",
      "Huong Ã?Ien, Thừa Thiên-Huế",
      "Huế"
    ]
  },
  {
    name: "Quảng Bình",
    raws: [
      "Quang Ninh, Binh Tri Thien, Vietnam",
      "Hàm Ninh, Quảng Ninh, Quảng Bình",
      "An Ninh, Quảng Ninh (Quảng Bình)",
      "Kwang Binh, Quảng Bình, Vietnam",
      "Roon, Binh Tri Thien, Vietnam",
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
      "Thăng Bình",
      "Tiên Phước",
      "Duy Xuyên",
      "Điện Bàn",
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
      "Vân Canh (1), Bình Ðịnh, Vietnam",
      "Binh Dinh, Nghia Binh, Vietnam",
      "Vinh Thanh, Bình Ðịnh, Vietnam",
      "Hoài Nhon, Bình Ðịnh, Vietnam",
      "Phú Phong, Bình Ðịnh, Vietnam",
      "Sa Huỳnh, Bình Ðịnh, Vietnam",
      "Tam Quan, Bình Ðịnh, Vietnam",
      "Qui Nhon, Bình Ðịnh, Vietnam",
      "Bồng Sơn, Bình Ðịnh, Vietnam",
      "Hoài Ân, Bình Ðịnh, Vietnam",
      "Phu My, Nghia Binh, Vietnam",
      "An Lão, Bình Ðịnh, Vietnam",
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
      "Vo Dat, Thuin Hai, Vietnam",
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
      "Songkau, Phú Yên, Vietnam",
      "Toy Hoa, Phú Yên, Vietnam",
      "Tuy An, Phú Yên, Vietnam",
      "Đông Hòa, Phú Yên",
      "Phú Hòa, Phú Yên",
      "Sông Cầu (thị xã)",
      "Tây Hòa, Phú Yên",
      "Tuy Hòa",
      "Sơn Hòa"
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
      "Ninh Hòa",
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
      // "Trường THPT chuyên Thăng Long - Đà Lạt",
      // "Trường THPT Bùi Thị Xuân, Đà Lạt",
      // "Trường THPT Đức Trọng - Lâm Đồng",
      "Mâ?Kar Da Te, Lâm Ðồng, Vietnam",
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
      "Madagui, Vietnam",
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
      "Dak Ha (1), Gia Lai-Cong Tum, Vietnam",
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
      // "Nam thanh nữ tú trường THPT lê quý đôn gia lai",
      // "Trường THPT Nguyễn Huệ, Đắk Đoa, Gia Lai",
      // "Trường THPT Chuyên Hùng Vương - Gia Lai",
      // "THPT Nguyễn Bỉnh Khiêm, Chư Sê, Gia Lai",
      // "Trường THPT Phan Bội Châu - Gia Lai",
      // "THPT  Trần Phú, Chư Prông, Gia Lai",
      // "THPT  Chư sê - Nguyễn Bỉnh Khiêm",
      // "Trường THPT Trần Phú (Gia Lai)",
      // "THPT Nguyễn Trường Tộ-Gia Lai",
      // "THPT Mạc Đĩnh Chi - Gia Lai",
      // "Trường THPT Hoàng Hoa Thám",
      // "THPT Pleiku - Gia Lai",
      // "THPT Nguyễn Chí Thanh",
      // "THPT LÊ LỢI",
      "Phú Yên (1), Gia Lai-Cong Tum, Vietnam",
      "Plei Tpang, Gia Lai-Cong Tum, Vietnam",
      "Tinh Pleiku, Gia Lai, Vietnam",
      "Phu Nhon, Gia Lai, Vietnam",
      "Plei Kly, Gia Lai, Vietnam",
      "Gia Lai, Gia Lai, Vietnam",
      "Phú Túc, Gia Lai, Vietnam",
      "Plây Ku, Gia Lai, Vietnam",
      "Plây Cu, Gia Lai, Vietnam",
      "An Khê, Gia Lai, Vietnam",
      "Phú Thiện",
      "Pleiku"
    ]
  }
];
