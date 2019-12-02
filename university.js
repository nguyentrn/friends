//
//
//
//
//
//
const pg = require("./database");

const formatUni = async function(university, stringArr) {
  try {
    const array = await pg("profiles")
      .update({ university })
      .whereIn("uid", function() {
        this.with(
          "unnestA",
          pg("profile_raws").select(pg.raw("uid,unnest(other) as other"))
        )
          .select("uid")
          .from("unnestA")
          .whereIn("other", stringArr);
      });
    console.log(university, array);
  } catch (err) {
    console.log(err);
    console.log(err.code, university);
  }
};

(async () => {
  await formatUni("Trung cấp Bách khoa Sài Gòn", [
    "Trường Trung Cấp Bách Khoa Sài Gòn - Official"
  ]);
  await formatUni("Trung cấp Du lịch và Khách sạn", [
    "STHC - Saigontourist Hospitality College",
    'Saigontourist Hospitality College'
  ]);

  await formatUni("Trung cấp Kinh tế Kỹ thuật Quận 12", [
    "Trường Trung Cấp KTKT Quận 12"
  ]);

  //----------------------------------------------------------------------------------------cd;

  await formatUni("Cao đẳng An ninh Mạng Ispace", [
    "Trường Cao Đẳng An Ninh Mạng Ispace"
  ]);
  await formatUni("Cao đẳng Bách khoa Nam Sài Gòn", [
    "Trường Cao đẳng Bách khoa Nam Sài Gòn"
  ]);

  await formatUni("Cao đẳng Bách Việt TP.HCM", [
    "Trường Cao Đẳng Bách Việt Tp. Hồ Chí Minh",
    "Trường Cao Đẳng Bách Việt",
    "Cao dang Bach Viet",
    'Bách Việt College'
  ]);

  await formatUni("Cao đẳng Bến Tre", [
    "Cao Dang Ben TRe",
    "Truong Cao Dang Ben Tre"
  ]);
  await formatUni("Cao đẳng Bình Định", ["Trường Cao Đẳng Bình Định"]);
  await formatUni("Cao đẳng Cần Thơ", [
    "Cao Đẳng Cần Thơ",
    "Cao Dang Can Tho",
    "Trường Cao đẳng Cần Thơ"
  ]);

  await formatUni("Cao đẳng Cộng đồng Đồng Tháp", [
    "Trường Cao Đẳng Cộng Đồng Đồng Tháp - Dong Thap Community College"
  ]);

  await formatUni("Cao đẳng Cộng đồng Bình Thuận", [
    "Trường Cao đẳng Cộng đồng Bình Thuận"
  ]);

  

  await formatUni("Cao đẳng Công nghệ Bách khoa Hà Nội", [
    "Trường Cao đẳng Công nghệ Bách khoa Hà Nội"
  ]);
  await formatUni("Cao đẳng Công nghệ Thông tin TP.HCM", [
    "Cao Đẳng Công Nghệ Thông Tin - TP.HCM"
  ]);

  await formatUni("Cao đẳng Công nghệ Thủ Đức", [
    "CAO ĐẲNG CÔNG NGHỆ THỦ ĐỨC",
    "TDC - Trường Cao Đẳng Công Nghệ Thủ Đức"
  ]);

  await formatUni("Cao đẳng Công nghệ cao Đồng An", [
    "Cao đẳng Công nghệ cao Đồng An"
  ]);

  await formatUni("Cao đẳng Công nghệ cao Đồng Nai", [
    "Trường Cao đẳng nghề Công nghệ cao Đồng Nai"
  ]);

  await formatUni("Cao đẳng Công nghệ cao Hà Nội", [
    "Trường Cao đẳng Nghề Công Nghệ Cao Hà Nội"
  ]);
  await formatUni("Cao đẳng Công nghệ và Quản trị Sonadezi", [
    "Trường Cao đẳng Công nghệ và Quản trị Sonadezi"
  ]);

  await formatUni("Cao đẳng Công nghệ và Thương mại Hà Nội", [
    "Trường Cao Đẳng Công Nghệ Và Thương Mại Hà Nội"
  ]);

  await formatUni("Cao đẳng Công Thương TP.HCM", [
    "HITU - Trường Cao Đẳng Công Thương TP.HCM",
    "Cao Dang Cong Thuong TP.HCM"
  ]);
  await formatUni("Cao đẳng Du lịch Đà Nẵng", [
    "Trường Cao đẳng Du lịch Đà Nẵng"
  ]);
  await formatUni("Cao đẳng Du lịch Hà Nội", [
    "Trường Cao đẳng Du lịch Hà Nội",
    "Cao đẳng Du Lịch Hà Nội",
    'Hanoi Tourism College'
  ]);
  

  await formatUni("Cao đẳng Du lịch Hải Phòng", [
    "Trường Cao Đẳng Du Lịch Hải Phòng"
  ]);
  await formatUni("Cao đẳng Du lịch Huế", [
    "Trường Cao Đẳng Du Lịch Huế",
    'Hue Tourism College'
  ]);

  await formatUni("Cao đẳng Du lịch Nha Trang", ["NHA TRANG Tourism College",'Trường Cao đẳng Du Lịch Nha Trang']);
  await formatUni("Cao đẳng Dược Hà Nội", ["Cao đẳng Dược Hà Nội",'Trường Cao Đẳng Dược Hà Nội']);
  await formatUni("Cao đẳng Dược Trung ương Hải Dương", [
    "Trường Cao Đẳng Dược Trung Ương Hải Dương"
  ]);
  await formatUni("Cao đẳng Đại Việt Sài Gòn", [
    "Trường Cao Đẳng Đại Việt Sài Gòn",
    "Trường Cao đẳng Đại Việt Sài Gòn - Khoa Y Dược"
  ]);
  await formatUni("Cao đẳng Điện lực TP.HCM", [
    "Trường Cao Đẳng Điện Lực TPHCM"
  ]);
  formatUni("Cao đẳng Đồng Khởi", ["Trường Cao Đẳng Đồng Khởi"]);
  formatUni("Cao đẳng Giao thông Vận tải TP.HCM", [
    "Cao Đẳng Giao Thông Vận Tải 3",
    "Trường CĐ Giao Thông Vận Tải TP.HCM"
  ]);
  formatUni("Cao đẳng Hải Dương", ["Trường Cao Đẳng Hải Dương"]);
  formatUni("Cao đẳng Hòa Bình Xuân Lộc", [
    "Trường Cao Đẳng HÒA BÌNH XUÂN LỘC"
  ]);
  formatUni("Cao đẳng Kiên Giang", ["Trường Cao đẳng Kiên Giang"]);
  formatUni("Cao đẳng Kinh tế Đối ngoại TP.HCM", [
    "Cao đẳng Kinh tế Đối ngoại TP.HCM",
    "Cao Đẳng Kinh Tế Đối Ngoại TP.HCM",
    "Cao Đẳng Kinh Tế Đối Ngoại",
    "Cao đẳng Kinh tế Đối ngoại - COFER",
    "Cao Đẳng Kinh Tế Đối Ngoại _ College Of Foreign Economic Relations (COFER)",
    "College Of Foreign Economic Relations (COFER)"
  ]);
  formatUni("Cao đẳng Kinh tế TP.HCM", [
    "HCE - Trường Cao đẳng Kinh Tế TP.HCM",
    "Trường Cao Đẳng Kinh Tế Thành Phố Hồ Chí Minh"
  ]);
  formatUni("Cao đẳng Kinh tế - Công nghệ TP.HCM", [
    "CAO ĐẲNG KINH TẾ - CÔNG NGHỆ TP.HCM - HIAST",
    "Trường Cao đẳng Kinh tế - Công nghệ TP.HCM - HIAST",
    "Trường Cao Đẳng KTCN TPHCM Cơ Sở Bình Dương"
  ]);
  formatUni("Cao đẳng Kinh tế Kế hoạch Đà Nẵng", [
    "Trường Cao Đẳng Kinh Tế Kế Hoạch Đà Nẵng"
  ]);
  formatUni("Cao đẳng Kinh tế - Kỹ thuật Cần Thơ", [
    "Trường Cao đẳng Kinh tế - Kỹ thuật Cần Thơ",
    "Cao Đẳng Kinh Tế Kỹ Thuật Cần Thơ",
    "TRƯỜNG CAO ĐẲNG KINH TẾ - KỸ THUẬT CẦN THƠ"
  ]);
  await formatUni("Cao đẳng Kinh tế - Kỹ thuật Thủ Đức", [
    "Cao Đẳng Kinh tế Kỹ thuật Thủ Đức"
  ]);
  await formatUni("Cao đẳng Kinh tế - Kỹ thuật TP.HCM", [
    "Trường Cao Đẳng Kinh Tế - Kỹ Thuật TP. Hồ Chí Minh",
    "Cao Đẳng Kinh Tế Kỹ Thuật Thành Phố Hồ Chí Minh"
  ]);
  await formatUni("Cao đẳng Kinh tế - Kỹ thuật Vinatex TP.HCM", [
    "Trường Cao Đẳng Kinh Tế - Kỹ Thuật Vinatex Thành Phố Hồ Chí Minh",
    "Trường Cao đẳng Kinh tế - Kỹ thuật Vinatex TP. Hồ Chí Minh",
    "Vinatex College"
  ]);
  await formatUni("Cao đẳng Kinh tế - Kỹ thuật Vĩnh Phúc", [
    "Trường Cao Đẳng Kinh Tế -  Kỹ Thuật Vĩnh Phúc"
  ]);
  await formatUni("Cao đẳng Kỹ nghệ 2", ["Trường Cao Đẳng Kỹ Nghệ II"]);

  await formatUni("Cao đẳng Kỹ thuật Cao Thắng", [
    "Cao Đẳng Kỹ Thuật Cao Thắng",
    "Cộng đồng Sinh viên Trường Cao Đẳng Kỹ Thuật Cao Thắng",
    "Trường Cao Đẳng Kỹ Thuật Cao Thắng",
    "Trường Cao đẳng Kỹ thuật Cao Thắng"
  ]);
  await formatUni("Cao đẳng Kỹ thuật Công nghệ Nha Trang", ["Trường Cao đẳng Kỹ thuật Công nghệ Nha Trang"]);

  

  await formatUni("Cao đẳng Kỹ thuật Đồng Nai", ["Kỹ thuật Đồng Nai"]);

  await formatUni("Cao đẳng Kỹ thuật Công nghệ Bà Rịa - Vũng Tàu", [
    "Trường Cao đẳng Kỹ thuật Công nghệ Bà Rịa - Vũng Tàu"
  ]);

  await formatUni("Cao đẳng Kỹ thuật Công nghệ Quy Nhơn", [
    "Khoa Điện Tử - Tin Học Trường Cao Đẳng kỹ thuật công nghệ Quy Nhơn"
  ]);

  await formatUni("Cao đẳng Kỹ thuật Công nghiệp Bắc Giang", [
    "Cao Đẳng Kỹ Thuật Công Nghiệp Bắc Giang - Students Corner"
  ]);

  await formatUni("Cao đẳng Lý Tự Trọng TP.HCM", [
    "Cao đẳng Lý Tự Trọng TP.HCM"
  ]);

  await formatUni("Cao đẳng Miền Nam", ["CMN Cao Đẳng Miền Nam"]);

  await formatUni("Cao đẳng Múa Việt Nam", ["Trường Cao đẳng múa VN"]);

  await formatUni("Cao đẳng Nghề An Giang", [
    "Trường Cao Đẳng Nghề An Giang",
    "Cao Dang Nghe an Giang"
  ]);
  await formatUni("Cao đẳng Nghề Bách khoa Hà Nội", [
    "Trường Cao đẳng nghề Bách Khoa Hà Nội - HACTECH"
  ]);
  await formatUni("Cao đẳng Nghề Cần Thơ", ["Trường Cao đẳng nghề Cần Thơ"]);

  await formatUni("Cao đẳng Nghề Du lịch Sài Gòn", [
    "Trường Cao đẳng nghề Du lịch Sài Gòn",
    "Cao Đẳng Nghề Du Lịch Sài Gòn",
    'Saigon Tourism Vocational College'
  ]);
  await formatUni("Cao đẳng Nghề Tây Ninh", ["Trường Cao Đẳng Nghề Tây Ninh"]);

  await formatUni("Cao đẳng Nghệ thuật Hà Nội", [
    "Ha Noi College Of Art(Cao Đẳng Nghệ Thuật Hà Nội)",
    "Trường Cao Đẳng Nghệ Thuật Hà Nội",
    "Khoa Thanh Nhạc Trường Cao Đẳng Nghệ Thuật Hà Nội-Số 7 Hai Bà Trưng",
    "Hanoi College of Art"
  ]);


  await formatUni("Cao đẳng Nông nghiệp Nam Bộ", [
    "Trường Cao đẳng Nông nghiệp Nam Bộ"
  ]);

  await formatUni("Cao đẳng Phát thanh Truyền hình 2", [
    "TRƯỜNG CAO ĐẲNG PHÁT THANH TRUYỀN HÌNH II",
    "Trường Cao đẳng Phát Thanh - Truyền Hình II"
  ]);
  await formatUni("Cao đẳng Phương Đông Đà Nẵng", [
    "Cao đẳng Phương Đông Đà Nẵng",
    "Cao Đẳng Phương Đông Đà Nẵng"
  ]);

  await formatUni("Cao đẳng Quân Y 2", [
    "Trường Cao Đẳng Quân Y 2 - Nơi Học Viên Chia Sẻ Thông Tin"
  ]);
  await formatUni("Cao đẳng Quốc tế TP.HCM", [
    "Trường Cao Đẳng Quốc Tế TP.HCM"
  ]);
  await formatUni("Cao đẳng Sân khấu Điện ảnh Sài Gòn", [
    "Cao đẳng Sân khấu Điện Ảnh Sài Gòn",
    "Cao Dang San Khau Dien Anh",
    "Cao dẳng sân khấu điện ảnh"
  ]);

  await formatUni("Cao đẳng Sư phạm Bà Rịa - Vũng Tàu", [
    "Truong Cao Dang Su pham Ba Ria Vung Tau"
  ]);

  await formatUni("Cao đẳng Sư phạm Đà Lạt", [
    "Cao Đẳng Sư Phạm Đà Lạt"
  ]);

  
  await formatUni("Cao đẳng Sư phạm Đắk Lắk", [
    "Trường Cao Đẳng Sư Phạm Đak Lak"
  ]);
  await formatUni("Cao đẳng Sư phạm Gia Lai", [
    "Cao Đẳng Sư Phạm Gia Lai",
    "Trường Cao Đẳng Sư Phạm Gia Lai",
    "CAO ĐẲNG SƯ PHẠM GIA LAI"
  ]);

  
  await formatUni("Cao đẳng Sư phạm Hà Nội", ["Trường Cao đẳng Sư phạm Hà Nội"]);
  await formatUni("Cao đẳng Sư phạm Hà Tây", ["Cao đẳng Sư phạm Hà Tây"]);
  
  await formatUni("Cao đẳng Sư phạm Huế", ["Cao Đẳng Sư Phạm Huế"]);
  await formatUni("Cao đẳng Sư phạm Nghệ An", [
    "Trường Cao Đẳng Sư Phạm Nghệ An"
  ]);

  await formatUni("Cao đẳng Sư phạm Nha Trang", ["Trường CĐSP Nha Trang"]);

  await formatUni("Cao đẳng Sư phạm Tây Ninh", [
    "Trường Cao Đẳng Sư Phạm Tây Ninh"
  ]);

  await formatUni("Cao đẳng Sư phạm Thái Nguyên", [
    "Cao đẳng Sư phạm Thái Nguyên"
  ]);

  await formatUni("Cao đẳng Sư phạm TP.HCM", ["Cao Đẳng Sư Phạm TPHCM"]);

  await formatUni("Cao đẳng Sư phạm Trung ương Nha Trang", [
    "TRƯỜNG CAO ĐẲNG SƯ PHẠM TRUNG ƯƠNG - NHA TRANG"
  ]);

  await formatUni("Cao đẳng Sư phạm Trung ương TP.HCM", [
    "Cao đẳng Sư Phạm Trung Ương TP.HCM",
    "Khoa Giáo dục mầm non - Trường Cao đẳng Sư phạm Trung ương",
    "Trường Cao đẳng Sư phạm Trung ương",
    "Tuyển sinh Cao đẳng Sư Phạm Trung Ương"
  ]);

  await formatUni("Cao đẳng Tài chính - Hải quan", [
    "Trường Cao đẳng Tài chính - Hải quan",
    "Cao đẳng Tài chính Hải quan TP.HCM"
  ]);

  await formatUni("Cao đẳng Thống kê", ["Cao đẳng thống kê"]);

  await formatUni("Cao đẳng Thực hành FPT Polytechnic", [
    "Cao đẳng thực hành FPT Polytechnic",
    "FPT Polytechnic"
  ]);
  await formatUni("Cao đẳng Thương mại", ["Trường Cao đẳng Thương mại"]);
  await formatUni("Cao đẳng Thương mại và Du lịch Hà Nội", [
    "Cao Đẳng Thương Mại và Du Lịch Hà Nội-HCCT"
  ]);

  await formatUni("Cao đẳng Truyền hình Hà Nội", [
    "Cao Đẳng Truyền Hình",
    "Cao đẳng truyền hình Hà Nội (CTV)"
  ]);


  await formatUni("Cao đẳng Văn hóa Nghệ thuật Cần Thơ", [
    "Trường Cao đẳng Văn hóa Nghệ thuật Cần Thơ"
  ]);



  await formatUni("Cao đẳng Văn hóa Nghệ thuật TP.HCM", [
    "Cao đẳng văn hóa nghệ thuật Tp.hcm",
    "Trường Cao đẳng Văn hóa Nghệ thuật HCM CVN",
    "Cao Đẳng Văn Hóa Nghệ Thuật TP.HCM",
    "Cao đẳng Văn hóa Nghệ thuật Thành phố Hồ Chí Minh",
    "Cao Đẳng Văn Hoá Nghệ Thuật TP.HCM Số 5 Nam Quốc Cang Q1"
  ]);
  


  
  await formatUni("Cao đẳng Văn hóa Nghệ thuật Việt Bắc", [
    "Trường Cao đẳng Văn hóa Nghệ thuật Việt Bắc"
  ]);
  
  
    await formatUni("Cao đẳng Văn hóa Nghệ thuật và Du lịch Nha Trang", [
      "Cao Dang van Hoa Nghe Thuat Va du Lich Nha Trang"
    ]);

  await formatUni("Cao đẳng Văn hoá Nghệ thuật và Du lịch Sài Gòn", [
    "Trường Cao đẳng Văn hoá Nghệ thuật và Du lịch Sài Gòn",
    "CAO ĐẲNG VĂN HÓA NGHỆ THUẬT VÀ DU LỊCH SÀI GÒN",
    'Cao Dang van Hoa Nghe Thuat Va du Lich Sai Gon'
  ]);


  await formatUni("Cao đẳng Viễn Đông", ["Cao đẳng Viễn Đông"]);
  await formatUni("Cao đẳng Việt Mỹ", [
    "Cao đẳng Việt Mỹ - American Polytechnic College"
  ]);

  await formatUni("Cao đẳng Vĩnh Phúc", ["Cao Đẳng Vĩnh Phúc"]);
  await formatUni("Cao đẳng Y Dược Asean", ["Trường Cao Đẳng Y Dược Asean"]);

  await formatUni("Cao đẳng Y Dược Hồng Đức", [
    "Trường Cao Đẳng Y Dược Hồng Đức"
  ]);
  await formatUni("Cao đẳng Y Dược Pasteur", [
    "Trường Cao đẳng Y Dược Pasteur CS TPHCM",
    "Trường Cao đẳng Y Dược Pasteur",
    "Trường Cao đẳng Y Dược Pasteur CS Tp.HCM"
  ]);
  await formatUni("Cao đẳng Y Dược Sài Gòn", [
    "Trường Cao Đẳng Y Dược Sài Gòn"
  ]);

  await formatUni("Cao đẳng Y tế Bạch Mai", ["Cao Đẳng Y Tế Bạch Mai"]);
  await formatUni("Cao đẳng Y tế Bình Định", [
    "Trường Cao đẳng Y tế Bình Định"
  ]);

  await formatUni("Cao đẳng Y tế Bình Dương", [
    "Trường Cao đẳng Y Tế Bình Dương",
    "Trường Cao Đẳng Y Tế Bình Dương-CBY 1978 nơi chia sẻ kỷ niệm",
    "Cao đẳng Y tế Bình Dương"
  ]);

  await formatUni("Cao đẳng Y tế Cà Mau", ["Trường Cao Đẳng Y Tế Cà Mau",'Cao Đẳng Y Tế Cà Mau']);
  await formatUni("Cao đẳng Y tế Cần Thơ", [
    "Trường Cao Đẳng Y Tế Cần Thơ",
    "Trường Cao đẳng Y tế Cần Thơ",
    "Cao đẳng Y tế Cần Thơ",
    'Can Tho Medical College'
  ]);

  await formatUni("Cao đẳng Y tế Đồng Nai", ["Trường Cao Đẳng Y Tế Đồng Nai"]);
  await formatUni("Cao đẳng Y tế Đồng Tháp", [
    "Trường Cao đẳng Y tế Đồng Tháp"
  ]);

  await formatUni("Cao đẳng Y tế Hà Đông", ["Trường Cao Đẳng Y Tế Hà Đông"]);
  await formatUni("Cao đẳng Y tế Hà Nội", [
    "Trường Cao Đẳng Y Tế Hà Nội",
    "Trường Cao đẳng Y Dược Hà Nội",
    'Cao đẳng Y tế Hà Nội (Hanoi Medical College - HMC)'
  ]);
  await formatUni("Cao đẳng Y tế Hải Phòng", [
    "Trường Cao Đẳng Y Tế Hải Phòng"
  ]);

  await formatUni("Cao đẳng Y tế Khánh Hòa", ["CĐ Y Tế Khánh Hòa"]);
  await formatUni("Cao đẳng Y tế Kiên Giang", ["Cao đẳng Y tế Kiên Giang"]);

  await formatUni("Cao đẳng Y tế Phú Thọ", ["Trường Cao đẳng Y tế Phú Thọ"]);
  await formatUni("Cao đẳng Y tế Sơn La", ["Cao Đẳng Y Tế Sơn La"]);

  await formatUni("Cao đẳng Y tế Quảng Ninh", ["Cao Đẳng Y tế Quảng Ninh"]);

  await formatUni("Cao đẳng Y tế Thanh Hóa", [
    "Trường Cao Đẳng Y Tế Thanh Hóa"
  ]);

  await formatUni("Cao đẳng Y tế Tiền Giang", [
    "Cao Đẳng Y Tế Tiền Giang - Tien Giang Medical College"
  ]);

  //----------------------------------------------------------------------------------------hoc vien
  await formatUni("Học viện Âm nhạc Huế", ["Học viện Âm nhạc Huế"]);
  await formatUni("Học viện Âm nhạc Quốc gia Việt Nam", [
    "Học Viện Âm Nhạc Quốc Gia Việt Nam - Vietnam National Academy Of Music",
    "Học Viện Âm Nhạc Quốc Gia",
    "Vietnam National Academy of Music - Học viện âm nhạc quốc gia Việt Nam",
    "Học Viện Âm Nhạc Quốc Gia Việt Nam - Vietnam National...",
    "Học Viện Âm Nhạc Quốc Gia Việt Nam",
    "VNAM - Học Viện Âm Nhạc Quốc Gia Việt Nam"
  ]);
  await formatUni("Học viện Báo chí và Tuyên truyền", [
    "Học viện Báo chí và Tuyên truyền",
    "Học viện Báo chí và Tuyên truyền - AJC",
    'Academy of Journalism and Communication',
    'Academy of Journalism and Communication (AJC)'
  ]);
  await formatUni("Học viện Biên phòng", ["HỌC VIỆN BIÊN PHÒNG"]);
  await formatUni("Học viện Cán bộ TP.HCM", [
    "Học Viện Cán Bộ Thành Phố Hồ Chí Minh"
  ]);

  await formatUni("Học viện Công nghệ Bưu chính Viễn thông", [
    "Học viện Công nghệ Bưu chính Viễn thông cơ sở tại TP.HCM",
    "Học viện Công nghệ Bưu chính Viễn thông",
    "Học Viện Công Nghệ Bưu Chính Viễn Thông - PTIT",
    "Học viện Công nghệ Bưu Chính Viễn Thông - PTIT"
  ]);

  await formatUni("Học viện Hải quân", [
    "Học viện Hải quân",
    "Học viện Hải Quân"
  ]);
  await formatUni("Học viện Cảnh sát Nhân dân", ["Học Viện Cảnh Sát Nhân Dân"]);
  await formatUni("Học viện Hàng không Việt Nam", [
    "Học viện Hàng không Việt Nam - Vietnam Aviation Academy",
    "Học Viện Hàng Không",
    "Học viện Hàng không Việt Nam"
  ]);
  await formatUni("Học viện Hành chính Quốc gia", [
    "Học viện Hành Chính Quốc Gia"
  ]);

  await formatUni("Học viện Hậu cần", [
    "Học Viện Hậu Cần- Military Academy of Logistics"
  ]);

  await formatUni("Học viện Kỹ thuật Quân sự", [
    "Học Viện Kỹ Thuật Quân Sự (MTA)"
  ]);
  await formatUni("Học viện Kỹ thuật Mật mã", ["Học viện Kỹ thuật mật mã"]);
  await formatUni("Học viện Múa Quốc gia Việt Nam", [
    "Học Viện Múa Quốc Gia Việt Nam"
  ]);

  await formatUni("Học viện Ngân hàng", [
    "Học viện ngân hàng",
    "Học viện Ngân hàng"
  ]);
  await formatUni("Học viện Ngoại giao", [
    "Diplomatic Academy of Vietnam",
    "Học viện Ngoại giao Việt Nam"
  ]);
  await formatUni("Học viện Nông nghiệp Việt Nam", [
    "Học viện Nông nghiệp Việt Nam",
    "Diễn Đàn Học viện Nông nghiệp Việt Nam",
    "Vietnam National University of Agriculture"
  ]);
  await formatUni("Học viện Phụ nữ Việt Nam", [
    "Học viện Phụ nữ Việt Nam - Vietnam Women's Academy"
  ]);
  await formatUni("Học viện Quản lý Giáo dục", [
    "Học viện Quản lý giáo dục - NAEM",
    "học viện quản lý giáo dục"
  ]);
  await formatUni("Học viện Quân y", ["Học viện Quân y"]);

  await formatUni("Học viện Tài chính", [
    "Học viện Tài Chính (Academy Of Finance)",
    "Học Viện Tài Chính"
  ]);

  await formatUni("Học viện Thanh thiếu niên Việt Nam", [
    "Học Viện Thanh Thiếu Niên Việt Nam"
  ]);
  await formatUni("Học viện Tòa án", ["HỌC VIỆN TÒA ÁN"]);
  await formatUni("Học viện Y Dược học Cổ truyền Việt Nam", [
    "Học Viện Y Dược Học Cổ Truyền Việt Nam"
  ]);
  await formatUni("Nhạc viện TP.HCM", [
    "Nhạc Viện TPHCM",
    "nhac vien tphcm",
    "Nhạc Viện",
    "Nhạc viện Thành phố Hồ Chí Minh"
  ]);

  //-------------------------------------------------------------------------------Bac


  await formatUni("Đại học Tân Trào", ["Đại Học Tân Trào"]);
  await formatUni("Đại học Nguyễn Huệ", ["Trường Sĩ Quan Lục Quân 2"]);
  await formatUni("Đại học Hòa Bình", ["Đại Học Hòa Bình"]);

  await formatUni("Đại học Tây Bắc", ["Đại Học Tây Bắc"]);

  await formatUni("Đại học Sao Đỏ ", ["Trường Đại học Sao Đỏ"]);

  await formatUni("Đại học Công nghệ thông tin & Truyền thông Thái Nguyên", [
    "Trường Đại học Công nghệ thông tin & Truyền thông, Thái Nguyên",
    'Trường Đại học Công nghệ Thông tin và Truyền thông  ICTU'
  ]);

  await formatUni("Đại học Kinh tế và Quản trị Kinh doanh Thái Nguyên", [
    "Trường Đại học Kinh tế và Quản trị Kinh doanh Thái Nguyên",
    "Đại học Kinh tế và quản trị kinh doanh Thái Nguyên"
  ]);

  await formatUni("Đại học Kỹ thuật Công nghiệp Thái Nguyên", [
    "Đại Học Kỹ Thuật Công Nghiệp Thái Nguyên - TNUT"
  ]);

  await formatUni("Đại học Y Dược - Đại học Thái Nguyên", [
    "Đại Học Y Dược Thái Nguyên"
  ]);
  await formatUni("Đại học Sư phạm - Đại học Thái Nguyên", [
    "Đại học Sư phạm Thái Nguyên",
    "Đại học Sư phạm Thái Nguyên ( Thai Nguyen University of education)",
    'Trường Đại học Sư phạm Thái Nguyên'
  ]);
  await formatUni("Đại học Nông Lâm - Đại học Thái Nguyên", [
    "Đại Học Nông Lâm Thái Nguyên"
  ]);
  await formatUni("Đại học Khoa học - Đại học Thái Nguyên", [
    "Trường Đại học Khoa học - Đại học Thái Nguyên"
  ]);
  await formatUni("Khoa Ngoại ngữ - Đại học Thái Nguyên", [
    "Faculty Of Foreign Languages-Thai Nguyen University"
  ]);
  
  await formatUni("Đại học Thể dục Thể thao Bắc Ninh", [
    "Đại Học TDTT Bắc Ninh"
  ]);

  await formatUni("Đại học Kinh Bắc", [
    "Đại học Kinh Bắc - Bắc Ninh"
  ]);
  await formatUni("Đại học Nông - Lâm Bắc Giang", [
    "Trường Đại học Nông - Lâm Bắc Giang"
  ]);
  await formatUni("Đại học Hùng Vương", [
    "Đại học Hùng Vương - Phú Thọ",
    "HVUH - Trường Đại Học Hùng Vương TP.HCM",
    'Hung Vuong University'
  ]);
  await formatUni("Đại học Công nghiệp Việt Trì", [
    "Trường Đại học Công Nghiệp Việt Trì (VUI)"
  ]);
  await formatUni("Đại học Công nghệ Giao thông Vận tải", [
    "Đại học Công nghệ Giao thông vận tải"
  ]);
  await formatUni("Đại học Hạ Long", ["Đại Học Hạ Long"]);
  await formatUni("Đại học Dân lập Hải Phòng", ["Đại học Dân lập Hải Phòng"]);
  await formatUni("Đại học Hải Phòng", [
    "Đại Học Hải Phòng",
    "Hai Phong University",
    'Trường Đại học Hải Phòng'
  ]);
  await formatUni("Đại học Y Dược Hải Phòng", [
    "Trường Đại Học Y Dược Hải Phòng"
  ]);

  await formatUni("Đại học Sư phạm Kỹ thuật Hưng Yên", [
    "Trường Đại Học Sư Phạm Kỹ Thuật Hưng Yên",
    'Đại học Sư Phạm Kỹ Thuật Hưng Yên'
  ]);
  await formatUni("Đại học Y Dược Thái Bình", ["Đại Học Y Dược Thái Bình"]);

  //-------------------------------------------------------------------------------Trung
  await formatUni("Đại học Văn hóa, Thể thao và Du lịch Thanh Hóa", [
    "Trường Đại học Văn hóa, Thể thao và Du lịch Thanh Hóa",
    "Trường Đại học Văn hóa Thể thao và Du lịch Thanh Hóa",
    "Đại Học VHTT&Dl Thanh Hóa"
  ]);

  await formatUni("Đại học Sư phạm Kỹ thuật Vinh", [
    "Trường Đại Học Sư Phạm Kỹ Thuật Vinh"
  ]);

  await formatUni("Đại học Hồng Đức", ["Đại học Hồng Đức", "Đại Học Hồng Đức"]);
  await formatUni("Đại học Vinh", [
    "Đại Học Vinh",
    "Trường Đại học Vinh - Vinh University",
    "ĐẠI HỌC VINH",
    'Đại Học Vinh - Vinh University'
  ]);
  await formatUni("Đại học Y khoa Vinh", ["Trường Đại học Y khoa Vinh"]);

  await formatUni("Đại học Hà Tĩnh", ["Trường Đại Học Hà Tĩnh"]);
  await formatUni("Đại học Đông Á", ["Đại học Đông Á"]);
  await formatUni("Đại học Sư phạm - Đại học Huế", [
    "Trường Đại học Sư phạm, Đại học Huế",
    "Đại Học Sư Phạm Huế"
  ]);
  await formatUni("Đại học Kinh tế - Đại học Huế", [
    "Trường Đại học Kinh tế Huế - HCE"
  ]);
  await formatUni("Đại học Luật - Đại học Huế", [
    "Trường Đại học Luật - Đại học Huế",
    "Đại học Luật Huế"
  ]);
  await formatUni("Đại học Ngoại ngữ - Đại học Huế", [
    "Trường Đại học Ngoại ngữ Huế",
    "Trường Đại Học Ngoại Ngữ - Đại Học Huế"
  ]);
  await formatUni("Đại học Khoa học - Đại học Huế", ["Đại học Khoa học Huế",'Hue University of Sciences']);
  await formatUni("Đại học Nông Lâm - Đại học Huế", [
    "Trường Đại Học Nông Lâm, Đại học Huế"
  ]);
  await formatUni("Đại học Y Dược - Đại học Huế", [
    "Đại Học Y Dược Huế",
    "Nghiên cứu Khoa học trong Y khoa"
  ]);
  await formatUni("Khoa Du lịch - Đại học Huế", [
    "Khoa DU LỊCH - Đại học Huế - HAT"
  ]);

  await formatUni("Đại học Ngoại ngữ - Đại học Đà Nẵng", [
    "Trường Đại học Ngoại ngữ - Đại học Đà Nẵng"
  ]);
  await formatUni("Đại học Sư phạm - Đại học Đà Nẵng", [
    "Trường Đại học Sư phạm Đà Nẵng",
    "Đại học Sư phạm Đà Nẵng"
  ]);
  await formatUni("Đại học Sư phạm Kỹ thuật - Đại học Đà Nẵng", [
    "Trường Đại học Sư phạm Kỹ thuật - Đại Học Đà Nẵng"
  ]);
  await formatUni("Đại học Kinh tế - Đại học Đà Nẵng", [
    "Trường Đại học Kinh tế Đà Nẵng",
    "Trường Đại Học Kinh Tế Đà Nẵng",
    "Trường Đại học Kinh tế - Đại học Đà Nẵng",
    "Da Nang University of Economics",
    "Alumni for Faculty of Accounting - Danang University of Economics",
    'Đại Học Kinh Tế Đà Nẵng'
  ]);
  await formatUni("Đại học Kiến trúc - Đại học Đà Nẵng", [
    "Trường Đại học Kiến trúc Đà Nẵng"
  ]);
  await formatUni("Đại học Bách khoa - Đại học Đà Nẵng", [
    "Trường Đại Học Bách Khoa - Đại Học Đà Nẵng",
    "Đại Học Bách Khoa Đà Nẵng - Danang University of Science and Technology"
  ]);
  await formatUni("Đại học Kỹ thuật Y - Dược Đà Nẵng", [
    "Trường Đại học Kỹ thuật Y - Dược Đà Nẵng",
    "Trường Đại học Kỹ thuật Y Dược - ĐÀ NẴNG"
  ]);
  await formatUni("Đại học Thể dục Thể thao Đà Nẵng", [
    "Trường Đại Học TDTT Đà Nẵng",
    "Đại học thể dục thể thao Đà Nẵng"
  ]);

  await formatUni("Đại học Duy Tân", [
    "Duy Tan University",
    "E-University Đại học Duy Tân",
    "Trường Đại học Duy Tân"
  ]);

  await formatUni("Đại học Quảng Nam", ["Dai Hoc Quang Nam"]);

  await formatUni("Đại học Quang Trung", ["Đại Học Quang Trung"]);
  await formatUni("Đại học Quy Nhơn", [
    "Trường Đại học Quy Nhơn",
    "Đại Học Quy Nhơn News",
    "QUY NHON UNIVERSITY",
    "Sinh Viên Đại học Quy Nhơn",
    "Dai Hoc Quy Nhon"
  ]);
  await formatUni("Đại học Phú Yên", ["Trường Đại học Phú Yên"]);

  await formatUni("Đại học Phạm Văn Đồng", ["Đại học Phạm Văn Đồng"]);
  await formatUni("Đại học Tài chính - Kế toán", [
    "Trường Đại học Tài chính - Kế toán"
  ]);

  await formatUni("Đại học Khánh Hòa", ["Đại học Khánh Hòa"]);
  await formatUni("Đại học Nha Trang", [
    "Trường Đại học Nha Trang",
    "Nha Trang University",
    "Đại học Nha Trang",
    "Trường Đại Học Nha Trang"
  ]);
  await formatUni("Đại học Thái Bình Dương", ["Trường Đại học Thái Bình Dương",'Asia Pacific College']);

  

  await formatUni("Đại học Phan Thiết", ["Đại Học Phan Thiết UPT"]);

  await formatUni("Đại học Buôn Ma Thuột", ["Đại học Buôn Ma Thuột"]);
  await formatUni("Đại học Tây Nguyên", [
    "Tay Nguyen University",
    "Trường Đại học Tây Nguyên",
    'Đại học Tây Nguyên'
  ]);
  await formatUni("Đại học Đà Lạt", [
    "Trường Đại học Đà Lạt",
    "Dalat University",
    "Đại học Đà Lạt"
  ]);
  await formatUni("Đại học Yersin Đà Lạt", ["Trường Đại học Yersin Đà Lạt"]);
  //-------------------------------------------------------------------------------Nam
  await formatUni("Đại học Đại Nam", ["Đại Học Đại Nam", "Dai Nam university"]);
  await formatUni("Đại học Thủ Dầu Một", [
    "Đại Học Thủ Dầu Một",
    "Đại học Thủ Dầu Một",
    "Trường Đại học Thủ Dầu Một",
    "Khoa Kinh Tế - Đại học Thủ Dầu Một"
  ]);
  await formatUni("Đại học Công nghệ Đồng Nai", [
    "Đại học Công nghệ Đồng Nai",
    "Trường Đại Học Công Nghệ Đồng Nai"
  ]);
  await formatUni("Đại học Đồng Nai", [
    "Đại học Đồng Nai",
    "ĐẠI HỌC ĐỒNG NAI",
    "Trường Đại học Đồng Nai"
  ]);
  await formatUni("Đại học Đồng Tháp", [
    "Đại học Đồng Tháp",
    "Trường Đại học Đồng Tháp",
    "Dai Hoc Dong Thap"
  ]);
  await formatUni("Đại học Lạc Hồng", [
    "Lac Hong University",
    "Đại Học Lạc Hồng",
    "Lạc Hồng University",
    "ĐẠI HỌC LẠC HỒNG",
    'Trường Đại Học Lạc Hồng'
  ]);
  await formatUni("Đại học Bà Rịa Vũng Tàu", [
    "BVU - Trường Đại Học Bà Rịa Vũng Tàu",
    "Trường Đại học Bà Rịa - Vũng Tàu"
  ]);

  await formatUni("Đại học Bình Dương", ["Đại học Bình Dương",'Binh Duong University']);
  await formatUni("Đại học Bạc Liêu", [
    "Bac Lieu University",
    "Đại Học Bạc Liêu"
  ]);
  await formatUni("Đại học Cần Thơ", [
    "Can Tho University",
    "Cần Thơ University",
    "Trường Đại học Cần Thơ",
    "Trường Đại học Cần Thơ - Can Tho University",
    "Đại học Cần Thơ",
    "Đại học Cần Thơ - Can Tho University",
    "Đại học Cần Thơ - CTU.VN",
    "Đại học Cần Thơ",
    "dai hoc can tho"
  ]);
  await formatUni("Đại học Cửu Long", [
    "Đại Học Cửu Long",
    "Trường Đại học Cửu Long"
  ]);

  await formatUni("Đại học Kinh tế - Kỹ thuật Bình Dương", [
    "Trường Đại học Kinh tế - Kỹ thuật Bình Dương",
    "Đại học Kinh tế Kĩ thuật Bình Dương",
    'Trường Đại học Kinh tế- Kỹ thuật Bình Dương'
  ]);

  await formatUni("Đại học Kinh tế Công nghiệp Long An", [
    "Đại học Kinh tế Công nghiệp Long An"
  ]);

  await formatUni("Đại học Nam Cần Thơ", [
    "Nam Can Tho University",
    "Truong Dai Hoc Nam Can Tho"
  ]);
  await formatUni("Đại học Quốc tế Miền Đông", [
    "Eastern International University",
    "EIU"
  ]);

  await formatUni("Đại học Tây Đô", [
    "Trường Đại Học Tây Đô",
    "Tay Do University",
    'Dai Hoc Tay Do'
  ]);

  await formatUni("Đại học Tiền Giang", [
    "Trường Đại học Tiền Giang",
    "DH Tien Giang"
  ]);
  await formatUni("Đại học Y Dược Cần Thơ", [
    "Trường Đại Học Y Dược Cần Thơ",
    "Đại Học Y Dược Cần Thơ",
    "Trường Đại học Y-Dược Cần Thơ"
  ]);
  await formatUni("Đại học Kỹ thuật - Công nghệ Cần Thơ", [
    "Trường Đại học Kỹ thuật - Công nghệ Cần Thơ"
  ]);
  await formatUni("Đại học FPT Cần Thơ", ["Đại Học FPT Cần Thơ"]);

  await formatUni("Đại học Sư phạm Kỹ thuật Vĩnh Long", [
    "Trường Đại Học - Sư Phạm Kỹ Thuật Vĩnh Long"
  ]);
  await formatUni("Đại học Trà Vinh", [
    "Trường Đại học Trà Vinh",
    "Tra Vinh University",
    "Trường Đại Học Trà Vinh"
  ]);
  await formatUni("Đại học Xây dựng Miền Tây", [
    "Trường Đại Học Xây Dựng Miền Tây - MienTay Construction University"
  ]);

  await formatUni("Đại học Xây dựng Miền Trung", [
    "Đại Học xây dựng miền trung"
  ]);

  await formatUni("Đại học Võ Trường Toản", [
    "Trường Đại học Võ Trường Toản",
    "Đại Học Võ Trường Toản"
  ]);
  //-------------------------------------------------------------------------------Hanoi
  await formatUni("Đại học Bách khoa Hà Nội", [
    "ĐẠI HỌC BÁCH KHOA HÀ NỘI - HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY",
    "Trường Đại học Bách Khoa Hà Nội",
    "Hanoi University of Science and Technology",
    'Hanoi University of Technology'
  ]);
  await formatUni("Đại học Công đoàn Việt Nam", [
    "Đại học Công đoàn Việt Nam",
    "Đại Học Công Đoàn Việt Nam",
    "Trường Đại Học Công Đoàn",
    "Đại học Công Đoàn",
    "Vietnam Trade Union University",
    "Trade Union University"
  ]);

  await formatUni("Đại học Công nghiệp Hà Nội", [
    "Đại Học Công Nghiệp Hà Nội (HaUI)",
    "Trường Đại học Công nghiệp Hà Nội",
    "Đại Học Công Nghiệp Hà Nôi",
    "Trường Đại Học Công nghiệp Hà Nội",
    "Đại Học Công Nghiệp Hà Nội",
    'Hanoi University of Industry'
  ]);

  await formatUni("Đại học Công nghiệp Dệt May Hà Nội", [
    "Trường Đại học Công nghiệp Dệt May Hà Nội"
  ]);
  await formatUni("Đại học Công nghiệp Việt - Hung", ["Đại Học Công Nghiệp Việt - Hung"]);

  
  await formatUni("Đại học Dược Hà Nội", ["Trường Đại học Dược Hà Nội"]);
  await formatUni("Đại học Điện lực", ["Trường Đại học Điện lực",'Đại Học Điện Lực']);
  await formatUni("Đại học Đông Đô", ["Dong Do University - Đại Học Đông Đô"]);

  await formatUni("Đại học FPT Hà Nội", ["Đại học FPT Hà Nội"]);
  await formatUni("Đại học Hà Nội", [
    "Hanoi University",
    "Trường Đại học Hà Nội",
    "Hanoi University (HANU)"
  ]);

  await formatUni("Đại học Hàng hải Việt Nam", [
    "Trường Đại học Hàng hải Việt Nam",
    "VIMARU Vietnam Maritime University",
    "Vietnam Maritime University",
    "Trường Đại học Hàng hải Việt Nam - VMU",
    "Đại Học Hàng Hải",
    "Trường Đại học Hàng Hải Việt Nam"
  ]);

  await formatUni("Đại học Khoa học và Công nghệ Hà Nội", [
    "Đại Học Khoa Học và Công Nghệ Hà Nội - USTH"
  ]);

  await formatUni("Đại học Kiểm sát Hà Nội", [
    "Trường Đại Học Kiểm Sát Hà Nội",
    "Đại học Kiểm Sát Hà Nội"
  ]);

  await formatUni("Đại học Kiến trúc Hà Nội", [
    "Trường Đại học Kiến trúc Hà Nội",
    "Đại Học Kiến Trúc Hà Nội",
    "Hanoi Architectural University",
    "Hanoi Architectural University (HAU)"
  ]);

  await formatUni("Đại học Kinh doanh và Công nghệ Hà Nội", [
    "Trường Đại học Kinh doanh và Công nghệ Hà Nội",
    "Hanoi University of Business and Technology - HUBT",
    "HUBT",
    "TRƯỜNG ĐẠI HỌC KINH DOANH VÀ CÔNG NGHỆ HÀ NỘI",
    "Đại Học Kinh Doanh và Công Nghệ Hà Nội",
    "Đại Học Kinh Doanh Và Công Nghệ Hà Nội - HUBT",
    "Hanoi university of Business and Technology (HUBT)",
    "Đại Học Kinh Doanh Và Công Nghệ Hà Nội",
    "ĐH Kinh Doanh Công Nghệ Hà Nội",
    "ĐH Kinh Doanh Và Công Nghệ Hà Nội"
  ]);
  await formatUni("Đại học Kinh tế - Kỹ thuật Công nghiệp", [
    "Đại học Kinh Tế-Kỹ thuật Công nghiệp ( UNETI)",
    "Đại Học Kinh Tế Kỹ Thuật Công Nghiệp",
    "UNETI",
    'Trường Đại học Kinh tế - Kỹ thuật Công nghiệp',
    'Đại Học Kinh Tế - Kỹ Thuật Công Nghiệp - UNETI'
  ]);
  await formatUni("Đại học Kinh tế Quốc dân", [
    "NEU - Đại học Kinh tế Quốc dân",
    "Đại học Kinh tế Quốc dân",
    "Trường Đại học Kinh tế Quốc dân",
    "Trường Đại Học Kinh Tế Quốc Dân",
    "Trường Đại học Kinh Tế Quốc Dân",
    "National Economics University",
    "Trường Đại học Kinh tế Quốc Dân - NEU",
    "Diễn Đàn Sinh Viên đại học Kinh Tế Quốc Dân",
    "National Economics University of Vietnam",
    "Chương trình Cử nhân Quốc tế (IBD@NEU)"
  ]);

  await formatUni("Đại học Lâm nghiệp", [
    "Đại học Lâm Nghiệp",
    "Trường Đại học Lâm nghiệp"
  ]);
  await formatUni("Đại học Lao động - Xã hội", [
    "Đại Học Lao Động - Xã Hội",
    "Trường Đại học Lao động - Xã hội"
  ]);

  await formatUni("Đại học Luật Hà Nội", [
    "Đại học Luật Hà Nội",
    "Trường Đại học Luật Hà Nội",
    'Hanoi Law University'
  ]);
  await formatUni("Đại học Mỏ - Địa chất", ["Trường Đại học Mỏ - Địa chất"]);

  await formatUni("Đại học Mở Hà Nội", [
    "Đại Học Mở Hà Nội - HOU",
    "Hà Nội Open University",
    "Open University - Postgraduate",
    "The Open University",
    "Viện Đại Học Mở Hà Nội",
    "Viện Đại Học Mở Hà Nội - Ha Noi Open University - HOU",
    "k17 interior class-design faculty-Ha Noi Open University",
    "Viện Đại học Mở Hà Nội",
    'Đại học Mở Hà Nội - Hanoi Open University'
  ]);
  await formatUni("Đại học Mỹ thuật Hà Nội", [
    "Đại học Mỹ thuật Hà Nội",
    "Trường Đại học Mỹ thuật Việt Nam"
  ]);

  await formatUni("Đại học Mỹ thuật Công nghiệp Hà Nội", [
    "Đại học Mĩ thuật công nghiệp Hà Nội",
    "Đại Học Mỹ Thuật Công Nghiệp Hà Nội .",
    "Ha noi University of Industrial Fine Arts",
    "Mỹ Thuật Công Nghiệp"
  ]);

  await formatUni("Đại học Ngoại thương", [
    "Foreign Trade University",
    "Trường Đại Học Ngoại Thương CS2",
    "Foreign Trade University of Vietnam",
    "Đại học Ngoại Thương - FTU",
    "Trường Đại học Ngoại thương",
    "Foreign Trade University HCMC",
    "Đại Học Ngoại Thương"
  ]);
  await formatUni("Đại học Nội vụ Hà Nội", [
    "Trường Đại học Nội vụ Hà Nội",
    "Đại học Nội Vụ Hà Nội"
  ]);
  await formatUni("Đại học Phòng cháy chữa cháy", [
    "Trường Đại học Phòng Cháy Chữa Cháy"
  ]);

  await formatUni("Đại học Phương Đông", [
    "Đại học Phương Đông - Phuong Dong University",
    "Đại Học Dân Lập Phương Đông",
    "Phuong Dong University"
  ]);

  await formatUni("Đại học Quản lý và Kinh doanh Hà Nội", [
    "Đại học Quản lý và kinh doanh Hà Nội"
  ]);

  await formatUni("Đại học Sân khấu Điện ảnh Hà Nội", [
    "Đại học sân khấu điện ảnh Hà Nội",
    "Đại Học Sân Khấu Điện Ảnh Hà Nội",
    "Trường Đại học Sân khấu và Điện ảnh Hà Nội",
    "Đại Học Sân Khấu - Điện Ảnh Hà Nội",
    "Trường Đại Học Sân Khấu - Điện Ảnh Hà Nội",
    "Khoa Sân Khấu - Đại học Sân khấu Điện ảnh Hà Nội",
    "ĐH Sân khấu Điện ảnh Hà Nội",
    'Hanoi Academy of Theatre & Cinema'
  ]);

  await formatUni("Đại học Sư phạm Hà Nội 2", ["Đại học Sư phạm Hà Nội 2",'Trường Đại học Sư phạm Hà Nội 2']);
  await formatUni("Đại học Sư phạm Hà Nội", [
    "Trường Đại Học Sư Phạm Hà Nội",
    "Đại học Sư phạm Hà Nội I",
    "Đại Học Sư Phạm Hà Nội",
    "Trường Đại học Sư phạm Hà Nội",
    "Đại học sư phạm Hà Nội",
    'Đại học Sư phạm Hà Nội 1',
    'Trường Đại học Sư Phạm Hà Nội'
  ]);
  await formatUni("Đại học Sư phạm Nghệ thuật Trung ương", [
    "Đại học Sư phạm Nghệ thuật Trung ương - NUAE",
    "Đại Học Sư Phạm Nghệ Thuật Trung Ương"
  ]);

  await formatUni("Đại học Sư phạm Thể dục Thể thao Hà Nội", [
    "Đại Học Sư Phạm Thể Dục Thể Thao Hà Nội"
  ]);

  await formatUni("Đại học Tài chính Ngân hàng Hà Nội", [
    "Đại học Tài chính - Ngân hàng Hà Nội",
    "Trường Đại học Tài chính - Ngân hàng Hà Nội",
    "Đại Học Tài Chính Ngân Hàng"
  ]);
  await formatUni("Đại học Tài nguyên và Môi trường Hà Nội", [
    "Đại học Tài nguyên và Môi trường Hà Nội - HUNRE"
  ]);

  

  await formatUni("Đại học Thành Đô", [
    "Đại Học Thành Đô"
  ]);
  await formatUni("Đại học Thăng Long", [
    "Thang Long University",
    "Trường Đại học Thăng Long"
  ]);
  await formatUni("Đại học Thủ đô Hà Nội", [
    "Trường Đại học Thủ đô Hà Nội",
    "Đại Học Thủ Đô Hà Nội"
  ]);
  await formatUni("Đại học Thương mại", [
    "Đại Học Thương Mại",
    "Vietnam University of Commerce",
    'Trường Đại học Thương mại',
    'Đại học Thương Mại'
  ]);
  await formatUni("Đại học Thủy lợi", [
    "Trường Đại học Thủy lợi",
    "Cơ sở 2 - Đại học Thủy Lợi"
  ]);

  await formatUni("Đại học Văn hóa Hà Nội", [
    "Đại Học Văn Hóa Hà Nội - HUC",
    "Trường Đại học Văn hóa Hà Nội",
    "Đại Học Văn Hóa Hà Nội",
    "Trường Đại học Văn hóa Hà Nội_Hanoi University Of Culture",
    "Đại học Văn hóa Hà Nội",
    "ĐH Văn Hóa"
  ]);
  await formatUni("Đại học Văn hoá Nghệ thuật Quân đội", [
    "Đại Học Văn Hoá Nghệ Thuật Quân Đội",
    "Đại học Văn hóa Nghệ thuật Quân đội",
    "Đại học Văn hoá - Nghệ thuật quân đội cs2",
    "Trường Đại học Văn hóa - Nghệ thuật Quân đội",
    "Trường Đại học Văn hóa Nghệ thuật Quân đội",
    "Trường Đại Học Văn Hóa Nghệ Thuật Quân Đội",
    "University of Military Art and Culture",
    "ĐHVH Nghệ Thuật Quân Đội",
    'Đại Học Văn hoá - Nghệ thuật quân đội, Tp.HCM'
  ]);
  

  await formatUni("Đại học Xây dựng", ["Đại học Xây dựng"]);
  await formatUni("Đại học Y Hà Nội", [
    "Đại học Y Hà Nội",
    "Đại Học Y Hà Nội",
    "Đại Học Y Dược Hà Nội",
    "Trường Đại Học Y Dược Hà Nội",
    "Trường Đại học Y Hà Nội"
  ]);

  //----------------------------------------------------------------------------------DHQGHN
  await formatUni(
    "Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc gia Hà Nội",
    ["Trường Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc gia Hà Nội"]
  );
  await formatUni("Đại học Khoa học Tự nhiên - Đại học Quốc gia Hà Nội", [
    "Sinh viên Trường Đại Học Khoa Học Tự Nhiên - Đại Học Quốc Gia Hà Nội"
  ]);

  await formatUni("Đại học Kinh tế - Đại học Quốc gia Hà Nội", [
    "Tuổi trẻ Đại học Kinh tế - ĐHQG HN",
    "Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội"
  ]);
  await formatUni("Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội", [
    "Trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội",
    'Trường Đại học Ngoại ngữ, Đại học Quốc gia Hà Nội'
  ]);
  await formatUni("Khoa Luật - Đại học Quốc gia Hà Nội", [
    "Khoa Luật - Đại học Quốc gia Hà Nội"
  ]);
  await formatUni("Khoa Quốc tế - Đại học Quốc gia Hà Nội", [
    "Khoa Quốc tế - Đại học Quốc gia Hà Nội (IS-VNU)"
  ]);

  //-------------------------------------------------------------------------------HCM

  await formatUni("Đại học Greenwich Việt Nam", [
    "Đại học Greenwich Việt Nam",
    "University of Greenwich"
  ]);
  await formatUni("Đại học Fulbright University Việt Nam", [
    "Fulbright University Vietnam"
  ]);
  await formatUni("Đại học Việt - Đức", ["Vietnamese-German University"]);

  await formatUni("Đại học RMIT Việt Nam", [
    "RMIT University Vietnam",
    "RMIT University"
  ]);
  await formatUni("Đại học Tài chính Quản trị Kinh doanh", [
    "Đại Học Tài Chính Quản Trị Kinh Doanh",
    "Đại học Tài chính - Quản trị kinh doanh"
  ]);
  await formatUni("Đại học Lao động Xã hội - Cơ sở 2", [
    "Trường Đại Học Lao Động - Xã Hội CSII",
    "Trường Đại học Lao động - Xã hội (CSII)"
  ]);

  await formatUni("Đại học Quốc tế Sài Gòn", [
    "Trường Đại học Quốc tế Sài Gòn - The Saigon International  University"
  ]);
  await formatUni("Đại học Thể dục Thể thao TP.HCM", [
    "Trường Đại Học Thể Dục Thể Thao Thành phố Hồ Chí Minh",
    "Trường Đại Học TDTT TP.HCM - Trung tâm huấn luyện thể thao Quốc Gia."
  ]);

  await formatUni("Đại học Sư phạm Thể dục Thể thao TP.HCM", [
    "Dai hoc Su pham The Duc The Thao TP HCM",
    "Trường Đại học Sư phạm Thể dục Thể thao Thành phố Hồ Chí Minh"
  ]);

  await formatUni("Đại học Sân khấu Điện ảnh TP.HCM", [
    "Trường Đại học Sân khấu - Điện ảnh Thành phố Hồ Chí Minh",
    "Đại Học Sân Khấu Điện Ảnh",
    "Đại học Sân Khấu Điện Ảnh TP. Hồ Chí Minh",
    "Đại học Sân khấu Điện ảnh",
    "Trường Đại học Sân khấu - Điện ảnh Tp. Hồ Chí Minh",
    "Movie and Stage University-Đại Học Sân Khấu Điện Ảnh Tp. HCM",
    "Film theater university",
    "Đại Học Nghệ Thuật Sân Khấu Điện Ảnh Hồ Chí Minh",
    "Trường Đại Học Sân Khấu Điện Ảnh Tp.Hcm",
    "Đại Học Sân Khấu Điện Ảnh",
    "ĐH Sân Khấu Điện Ảnh TP.HCM",
    "Trường ĐH Sân khấu - Điện ảnh TP. HCM",
    "DH San Khau Dien Anh TPHCM",
    "Sân Khấu Điện Ảnh",
    "Sân khấu - Điện ảnh - Truyền hình & Sự kiện"
  ]);
  // //
  // //
  // //
  // //
  // //--------------------------------------------------DAI HOC TUTU

  await formatUni("Đại học Công nghệ Sài Gòn", [
    "Đại học Công Nghệ Sài Gòn - SaiGon Technology University"
  ]);
  await formatUni("Đại học Công nghệ TP.HCM", [
    "HUTECH - Đại học Công nghệ Tp.HCM",
    "HUTECH - Trường Đại học Công nghệ TP.HCM",
    "Hutech University",
    "HUTECH - University of Technology",
    "HUTECH - Đại học Công nghệ Tp.HCM",
    "HUTECH University",
    "Trường ĐH Công Nghệ TP.HCM",
    "HUTECH - Đại học Công nghệ Tp.HCM"
  ]);

  await formatUni("Đại học FPT TP.HCM", [
    "FPT University",
    "FPT University HCM",
    "Đại học FPT",
    "Đại Học FPT"
  ]);
  await formatUni("Đại học Hoa Sen", [
    "Đại Học Hoa Sen",
    "Hoa Sen University",
    "Lotus University",
    "Ngành Marketing - Đại Học Hoa Sen"
  ]);
  await formatUni("Đại học Kinh tế Tài chính TP.HCM", [
    "UEF - Đại học Kinh tế Tài chính TP.HCM"
  ]);
  await formatUni("Đại học Mỹ thuật TP.HCM", [
    "Trường Đại học Mỹ thuật Thành phố Hồ Chí Minh",
    "Đại học Mỹ Thuật Tp.HCM",
    "Vietnam University of Fine Arts",
    "Đại học Mỹ thuật Tp. Hồ Chí Minh"
  ]);
  await formatUni("Đại học Nguyễn Tất Thành", [
    "NTTU - Đại học Nguyễn Tất Thành",
    "NTTU - Đại học Nguyễn Tất Thành",
    "Đại Học Nguyễn Tất Thành Cơ Sở Quận 12",
    "Trường Đại học Nguyễn Tất Thành NTTU",
    "Đại học Nguyễn Tất Thành",
    "NIIE (NTT Institute of International Education)",
    'Khoa Dược - Trường Đại học Nguyễn Tất Thành'
  ]);
  await formatUni("Đại học Quốc tế Hồng Bàng", [
    "HIU - Đại học Quốc tế Hồng Bàng",
    "Hồng Bàng International University",
    "Hong Bang University",
    "Hồng Bàng International University ( Đại Học Quốc Tế Hồng Bàng )",
    "Trường Đại học Quốc tế Hồng Bàng"
  ]);

  await formatUni("Đại học Tài nguyên và Môi trường TP.HCM", [
    "Đại Học Tài Nguyên và Môi Trường TPHCM",
    "Đại học Tài nguyên và Môi trường TP.HCM",
    "Trường Đại học Tài nguyên và Môi trường Tp. Hồ Chí Minh"
  ]);

  await formatUni("Đại học Văn Hiến", [
    "Đại học Văn Hiến",
    "Văn Hiến University",
    "Trường Đại Học Văn Hiến TP.HCM",
    "Trường Đại học Văn Hiến",
    "Van Hien University"
  ]);
  await formatUni("Đại học Văn Lang", [
    "Trường Đại học Văn Lang",
    "Faculty of Public Relations and Communication, Van Lang University",
    "Trường Đại học Văn Lang",
    "Vanlang University (VLU) - Đại học Dân lập Văn Lang",
    "Văn Lang University"
  ]);
  await formatUni("Đại học Văn hóa TP.HCM", [
    "Trường Đại học Văn hóa Thành phố Hồ Chí Minh",
    "Đại học Văn Hoá TP.HCM",
    "Đại học Văn Hóa",
    "Đại Học Văn Hóa TP. Hồ Chí Minh"
  ]);

  //
  //
  //
  //--------------------------------------------------DAI HOC CONG
  await formatUni("Đại học Công nghiệp TP.HCM", [
    "ĐH Công nghiệp TP.HCM - IUH - Đào tạo quốc tế",
    "IUH - Trường Đại học Công nghiệp TP.HCM",
    "Trường Đại Học Công Nghiệp TPHCM",
    "Industrial University of Ho Chi Minh City (IUH)",
    "Trường Đại Học Công Nghiệp TP-HCM",
    "Trường Đại học Công Nghiệp TP.HCM",
    "Đại Học Công Nghiệp TP.HCM",
    "Ho Chi Minh University Of Industry",
    "Dh Cong Nghiep Tphcm",
    "IUH"
  ]);

  await formatUni("Đại học Công nghiệp Thực phẩm TP.HCM", [
    "HUFI - Đại học Công nghiệp Thực phẩm Tp.HCM",
    "Đại học Công nghiệp Thực phẩm TP.HCM"
  ]);

  await formatUni("Đại học Giao thông vận tải TP.HCM", [
    "Trường Đại học Giao thông vận tải TP.HCM",
    "Đại học Giao thông Vận Tải - University of Transport and Communications",
    "University of Transport and Communications",
    "Hội Quán Sinh Viên Đại Học Giao Thông Vận Tải Phân hiệu tại TP.HCM",
    "Đại học Giao thông vận tải TpHCM",
    "Trường Đại học Giao thông Vận tải - Phân hiệu tại TP.HCM - UTC2"
  ]);
  await formatUni("Đại học Kiến trúc TP.HCM", [
    "Đại học Kiến trúc Thành phố Hồ Chí Minh",
    "Đại học Kiến trúc Thành phố Hồ Chí Minh",
    "Đại Học Kiến Trúc Thành Phố Hồ Chí Minh",
    "Đại học Kiến trúc TPHCM",
    "Đại học Kiến trúc TP.Hồ Chí Minh",
    "Ho Chi Minh City University of Architecture",
    "Trường Đại học Kiến trúc Thành phố Hồ Chí Minh"
  ]);
  await formatUni("Đại học Kinh tế TP.HCM", [
    "Đại học kinh tế TP.HCM",
    "Trường ĐH Kinh tế TP. Hồ Chí Minh - UEH",
    "Trường Đại Học Kinh Tế TP Hồ Chí Minh",
    "University of Economics Ho Chi Minh city - UEH",
    "University of Economics, Ho Chi Minh City, Vietnam",
    "University of Economics, HCMC",
    "Đại học Kinh tế Tp.HCM- UEH",
    "University of Economics, Ho Chi Minh City",
    "Đại học Kinh tế TPHCM",
    "ĐH Kinh Tế TP.HCM",
    "UEH",
    "Trường Đại Học Kinh Tế TP.HCM"
  ]);
  await formatUni("Đại học Luật TP.HCM", [
    "Trường Đại học Luật Tp. Hồ Chí Minh",
    "Trường Đại học Luật Thành phố Hồ Chí Minh",
    "Đại Học Luật Tp Hồ Chí Minh Cơ Sở Bình Triệu"
  ]);
  await formatUni("Đại học Mở TP. HCM", [
    "Trường Đại học Mở TP. HCM - Tư vấn tuyển sinh",
    "Đại Học Mở Thành Phố Hồ Chí Minh",
    "OU - Open University",
    "Ho Chi Minh City Open University",
    "Đại học Mở Thành phố Hồ Chí Minh",
    "Trường Đại Học Mở TP. HCM | Ho Chi Minh City Open University",
    "Đại học Mở TPHCM",
    "Đại Học Mở Tp.HCM",
    "Đại Học Mở Tphcm",
    "OU - Trường Đại học Mở TP.HCM"
  ]);
  await formatUni("Đại học Ngân hàng TP. HCM", [
    "Trường Đại học Ngân hàng Thành phố Hồ Chí Minh",
    "Trường Đại học Ngân hàng TP. Hồ Chí Minh - BUH",
    "Banking University",
    "Banking University of Ho Chi Minh City",
    "Đại học Ngân hàng Tp.HCM",
    'Đại Học Ngân Hàng TP.HCM'
  ]);
  await formatUni("Đại học Ngoại ngữ - Tin học TP.HCM", [
    "Trường Đại học Ngoại ngữ - Tin học TP. HCM - HUFLIT",
    "HUFLIT",
    "Huflit"
  ]);
  await formatUni("Đại học Nông Lâm TP.HCM", [
    "Trường Đại Học Nông Lâm TP.HCM",
    "ĐH Nông Lâm TP.HCM"
  ]);
  await formatUni("Đại học Sài Gòn", [
    "Trường Đại học Sài Gòn",
    "Đại học Sài Gòn",
    "Đại Học Sài Gòn",
    "Đại học Sài Gòn ( Saigon University - SGU )",
    "Saigon University",
    "SGU - Trường Đại học Sài Gòn"
  ]);
  await formatUni("Đại học Sư phạm TP.HCM", [
    "Trường Đại học Sư phạm TP.HCM - HCMUE",
    "Trường Đại học Sư Phạm TP. Hồ Chí Minh",
    "Trường Đại Học Sư Phạm Tphcm",
    "Trường Đại học Sư phạm Thành phố Hồ Chí Minh",
    "Đại học Sư phạm Thành phố Hồ Chí Minh",
    "Đại học Sư phạm Tp.HCM",
    "Đại học sư phạm TPHCM",
    "Trường Đại học Sư phạm TP. Hồ Chí Minh - HCMUE",
    "HCMC University of Pedagogy"
  ]);
  await formatUni("Đại học Sư phạm Kỹ thuật TP.HCM", [
    "Trường Đại học Sư phạm Kỹ thuật Thành phố Hồ Chí Minh",
    "Trường Đại Học Sư Phạm Kỹ Thuật Thành Phố Hồ Chí Minh",
    "Trường Đại Học Sư Phạm Kỹ Thuật Tp.HCM",
    "University of Technical Education",
    "Trường Đại học Sư Phạm Kĩ Thuật Tp.HCM",
    "Trường Đại Học Sư Phạm Kĩ Thuật Thành Phố Hcm",
    "HCMUTE - SPKT"
  ]);

  await formatUni("Đại học Tôn Đức Thắng", [
    "Đại học Tôn Đức Thắng",
    "Tôn Đức Thắng University",
    "Ton Duc Thang University - Vietnam",
    "Ton Duc Thang University",
    "Trường Đại học Tôn Đức Thắng",
    "Trường Đại Học Tôn Đức Thắng",
    "Ban Cao Đẳng - Trường ĐH Tôn Đức Thắng"
  ]);
  await formatUni("Đại học Tài chính - Marketing", [
    "Trường Đại học Tài chính - Marketing",
    "ĐH Tài chính - Marketing",
    "University of Finance and Marketing",
    "The University of Finance and Marketing (UFM)",
    "ĐẠI HỌC TÀI CHÍNH - MARKETING"
  ]);
  await formatUni("Đại học Y khoa Phạm Ngọc Thạch", [
    "Trường Đại học Y khoa Phạm Ngọc Thạch",
    "Đại học Y khoa Phạm Ngọc Thạch",
    "Pham Ngoc Thach University of Medicine"
  ]);

  await formatUni("Đại học Y Dược TP.HCM", [
    "Đại học Y Dược TP. HCM",
    "Đại học Y Dược Thành phố Hồ Chí Minh",
    "Đại Học Y Dược TP Hồ Chí Minh",
    "Đại học Y Dược TP.HCM",
    "Cổng Thông Tin Đại học Y dược TPHCM",
    "Đại học Y dược TP. HCM",
    "Trường Đại học Y Dược TP.HCM"
  ]);
  ///////////////////////////////////////////////////DHQGDHQG
  await formatUni("Đại học An Giang - Đại học Quốc gia TP.HCM", [
    "An Giang University (AGU)",
    "An Giang University",
    "Phòng Đào tạo - Trường Đại học An Giang",
    "Trường Đại học An Giang",
    "Trường Đại Học An Giang",
    "Đại Học An Giang",
    "dai hoc an giang",
    "Đại học An Giang"
  ]);

  await formatUni("Đại học Bách khoa - Đại học Quốc gia TP.HCM", [
    "Đại học Bách Khoa TP.HCM",
    "Đại học Bách Khoa TP. HCM",
    "Ho Chi Minh City University of Technology",
    "QUỐC TẾ BÁCH KHOA HCM",
    "Admission HCMUT Bach khoa",
    "Trường Đại học Bách khoa, Đại học Quốc gia Thành phố Hồ Chí Minh",
    "Đại học Bách khoa Thành phố Hồ Chí Minh"
  ]);

  await formatUni("Đại học Khoa học Tự nhiên - Đại học Quốc gia TP.HCM", [
    "Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia TP.HCM",
    "Trường Đại Học Khoa Học Tự Nhiên - Đại Học Quốc Gia TPHCM",
    "Đại Học Khoa Học Tự Nhiên",
    "Đại Học Khoa Học Tự Nhiên Tp. Hồ Chí Minh",
    "Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia Thành phố Hồ Chí Minh",
    "Trường Đại học Khoa học Tự nhiên - Đại học Quốc gia Tp. Hồ Chí Minh",
    "Ho Chi Minh City University of Natural Sciences",
    "Khoa Học Tự Nhiên"
  ]);
  await formatUni(
    "Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc gia TP.HCM",
    [
      "Trường Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc gia Tp. HCM",
      "Đại học Khoa học Xã hội và Nhân văn TP Hồ Chí Minh",
      "Ho Chi Minh City University of Social Sciences and Humanities",
      "Đại Học Khoa Học Xã Hội Và Nhân Văn - Đại Học Quốc Gia TP. HCM",
      "ĐH KHXH&NV",
      "Trường Đại học Khoa học Xã hội và Nhân văn, Đại học Quốc gia Thành phố Hồ Chí Minh",
      "HCM University of Social Sciences and Humanities (USSH)",
      "Trường Đại học Khoa học Xã hội và Nhân văn TpHCM"
    ]
  );
  await formatUni("Đại học Kinh tế - Luật - Đại học Quốc gia TP.HCM", [
    "Trường Đại học Kinh tế - Luật",
    "Đại Học Kinh Tế - Luật ( ĐH Quốc Gia Tp.HCM )",
    "University of Economics and Law",
    "Đại Học Kinh Tế - Luật - ĐHQG Tp.HCM",
    "Trường ĐH Kinh tế - Luật"
  ]);
  await formatUni("Đại học Quốc tế - Đại học Quốc gia TP.HCM", [
    "Trường Đại Học Quốc Tế - Đại học Quốc gia TP. HCM",
    "Ho Chi Minh City International University",
    "International University (IU-VNU)",
    "Trường Đại học Quốc tế, Đại học Quốc gia Thành phố Hồ Chí Minh"
  ]);
  await formatUni("Đại học Công nghệ Thông tin - Đại học Quốc gia TP.HCM", [
    "Trường Đại học Công nghệ Thông tin - Đại học Quốc gia TP.HCM",
    "Trường Đại học Công nghệ Thông tin, Đại học Quốc gia Thành phố Hồ Chí Minh"
  ]);

  await formatUni("Khoa Y - Đại học Quốc gia TP.HCM", [
    "Khoa Y- Đại Học Quốc Gia Thành Phố Hồ Chí Minh"
  ]);

  // (async function() {
  //   try {
  //     const res = await Profile.updateMany(
  //       {
  //         university: {
  //           $regex: 'Đại học Quốc gia TP.HCM'
  //         }
  //       },
  //       { isVnuer: true }
  //     );
  //     console.log('ĐHQG', res.n, res.nModified);
  //   } catch (err) {
  //     console.log(err.code, 'ĐHQG');
  //   }
  // })();

  // await formatUni("Đại học Bangkok", ["Bangkok University"]);

  // await formatUni("Đại học Quốc gia Lào", [
  //   "National University of Laos",
  //   "National University of Laos ມະຫາວິທະຍາໄລແຫ່ງຊາດ"
  // ]);

  // await formatUni("Đại học Queensland", ["The University of Queensland"]);

  // await formatUni("Đại học Assumption", ["Assumption University of Thailand"]);

  // await formatUni("Đại học Silpakorn", ["Silpakorn University"]);

  // await formatUni("Đại học La Trobe", ["La Trobe University"]);

  // await formatUni("Đại học Victoria Wellington", [
  //   "Victoria University of Wellington"
  // ]);

  // await formatUni("Đại học Công nghệ King Mongkut North Bangkok", [
  //   "King Mongkut\'s University of Technology North Bangkok"
  // ]);

  // await formatUni("Đại học Công nghệ Rajamangala Thanyaburi", [
  //   "Rajamangala University of Technology Thanyaburi (RMUTT)"
  // ]);

  // await formatUni("Đại học Macquarie", ["Macquarie University"]);

  // await formatUni("Đại học Sydney", ["University of Sydney"]);

  // await formatUni("Đại học Bang California", [
  //   "California State University, Northridge"
  // ]);

  // await formatUni("Đại học Chiang Mai", ["Chiang Mai University"]);

  // await formatUni("Đại học Troy", ["Troy University"]);

  // await formatUni("Đại học Chulalongkorn", ["Chulalongkorn University"]);
  // await formatUni("Đại học Khoa học Sức khỏe Lào", ["University of health sciences in Lao P.D.R"]);
  // await formatUni("Đại học Mahidol", ["Mahidol University"]);
  // await formatUni("Đại học Nam California", [
  //   "University of Southern California"
  // ]);
  // await formatUni("Đại học Naresuan", ["Naresuan University"]);
  // await formatUni("Đại học Sunderland", ["University of Sunderland"]);
  // await formatUni("Đại học Srinakharinwirot", ["Srinakharinwirot University"]);
  // await formatUni("Đại học Savannakhet", ["Savannakhet University"]);

  // await formatUni("Cao đẳng George Brown", ["George Brown College"]);
  // await formatUni("Cao đẳng Lào - Mỹ", ["Lao-American College"]);
})();
