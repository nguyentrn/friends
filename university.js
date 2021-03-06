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
  await formatUni("Trung cấp Đại Việt TP.HCM", [
    "Trường Trung Cấp Đại Việt TP HCM"
  ]);
  await formatUni("Trung cấp Du lịch và Khách sạn", [
    "STHC - Saigontourist Hospitality College",
    "Saigontourist Hospitality College"
  ]);
  await formatUni("Trung cấp Kinh tế Kỹ thuật Quận 12", [
    "Trường Trung Cấp KTKT Quận 12"
  ]);
  await formatUni("Trung cấp nghề Ninh Hòa", [
    "Trường Trung Cấp Nghề Ninh Hòa"
  ]);
  await formatUni("Trung cấp Quân Y II", ["Trường Trung Cấp Quân Y II"]);
  await formatUni("Trung cấp Quốc tế Mekong", [
    "Trường Trung Cấp Quốc Tế Mekong"
  ]);
  await formatUni("Trung cấp Sư phạm Mầm non Đắk Lắk", [
    "Trường Trung Cấp Sư Phạm Mầm Non Daklak"
  ]);
  await formatUni("Trung cấp Sư phạm Mẫu giáo - Nhà trẻ Hà Nội", [
    "Trường Trung cấp Sư phạm Mẫu giáo - Nhà trẻ Hà Nội"
  ]);
  await formatUni("Trung cấp Tây Nguyên", ["Trường Trung Cấp Tây Nguyên"]);
  await formatUni("Trung cấp Y Dược Hà Nội", [
    "Trường trung cấp Y Dược Hà Nội"
  ]);
  await formatUni("Trung cấp Y tế Bến Tre", ["Trung Cấp Y Tế Bến Tre"]);
  await formatUni("Trung cấp Y tế Đắk Lắk", ["Truong Trung Cap Y te Daklak"]);
  await formatUni("Trung cấp Y tế Gia Lai", ["Trường Trung Cấp Y Tế Gia Lai"]);
  await formatUni("Trung cấp Y tế Sóc Trăng", [
    "Trường Trung cấp y tế Sóc Trăng"
  ]);
  await formatUni("Trung cấp Y tế Tây Ninh", [
    "Trường Trung cấp Y tế Tây Ninh"
  ]); // //----------------------------------------------------------------------------------------cd;
  await formatUni("Cao đẳng An ninh Mạng Ispace", [
    "Trường Cao Đẳng An Ninh Mạng Ispace"
  ]);
  await formatUni("Cao đẳng Bách khoa Đà Nẵng", ["Cao đẳng Bách Khoa Đà Nẵng"]);
  await formatUni("Cao đẳng Bách khoa Nam Sài Gòn", [
    "Trường Cao đẳng Bách khoa Nam Sài Gòn"
  ]);
  await formatUni("Cao đẳng Bách Việt TP.HCM", [
    "Trường Cao Đẳng Bách Việt Tp. Hồ Chí Minh",
    "Trường Cao Đẳng Bách Việt",
    "Cao đẳng Bách Việt",
    "Cao dang Bach Viet",
    "Bách Việt College"
  ]);
  await formatUni("Cao đẳng Bến Tre", [
    "Truong Cao Dang Ben Tre",
    'Trường Cao Đẳng Bến Tre',
    "Cao Dang Ben TRe",
  ]);
  await formatUni("Cao đẳng Bình Định", [
    "Trường Cao Đẳng Bình Định",
    "Cao Dang Binh Dinh"
  ]);
  await formatUni("Cao đẳng Cần Thơ", [
    "Trường Cao đẳng Cần Thơ",
    "Cao Đẳng Cần Thơ",
    "Cao đẳng Cần Thơ",
    "Cao Dang Can Tho"
  ]);
  await formatUni("Cao đẳng Cộng đồng Bình Thuận", [
    "Trường Cao đẳng Cộng đồng Bình Thuận"
  ]);
  await formatUni("Cao đẳng Cộng đồng Cà Mau", [
    "Trường Cao Đẳng Cộng Đồng Cà Mau",
    "CAO DANG CONG DONG CA MAU"
  ]);
  await formatUni("Cao đẳng Cộng đồng Đồng Tháp", [
    "Trường Cao Đẳng Cộng Đồng Đồng Tháp - Dong Thap Community College"
  ]);
  await formatUni("Cao đẳng Cộng đồng Hà Nội", [
    "Cao Đẳng Cộng Đồng Hà Nội"
  ]);
  await formatUni("Cao đẳng Cộng đồng Hà Tây", [
    "Trường Cao đẳng Cộng đồng Hà Tây"
  ]);
  await formatUni("Cao đẳng Cộng đồng Hải Phòng", [
    "Trường Cao Đẳng Cộng Đồng Hải Phòng"
  ]);
  await formatUni("Cao đẳng Cộng đồng Hậu Giang", [
    "Cao Đẳng Cộng Đồng Hậu Giang"
  ]);
  await formatUni("Cao đẳng Cộng đồng Sóc Trăng", [
    "Cao Dang Cong Dong Soc Trang"
  ]);
  await formatUni("Cao đẳng Công nghệ Bắc Hà", [
    "Trường Cao đẳng Công nghệ Bắc Hà"
  ]);
  await formatUni("Cao đẳng Công nghệ Bách khoa Hà Nội", [
    "Trường Cao đẳng Công nghệ Bách khoa Hà Nội"
  ]);
  await formatUni("Cao đẳng Công nghệ - Kinh tế Hà Nội", [
    "Cao đẳng công nghệ và kinh tế Hà Nội"
  ]);
  await formatUni("Cao đẳng Công nghệ Tây Nguyên", [
    "Trường Cao Đẳng Công Nghệ Tây Nguyên"
  ]);


  

  await formatUni("Cao đẳng Công nghệ Thông tin TP.HCM", [
    'Cao Đẳng Công Nghệ Thông Tin TP.HCM(ITC)',
    "Cao Đẳng Công Nghệ Thông Tin - TP.HCM",
  ]);
  await formatUni("Cao đẳng Công nghệ Thủ Đức", [
    "CAO ĐẲNG CÔNG NGHỆ THỦ ĐỨC",
    "TDC - Trường Cao Đẳng Công Nghệ Thủ Đức"
  ]);
  await formatUni("Cao đẳng Công nghệ cao Đồng An", [
    "Cao đẳng Công nghệ cao Đồng An"
  ]);
  await formatUni("Cao đẳng Công nghệ và Quản trị Sonadezi", [
    "Trường Cao đẳng Công nghệ và Quản trị Sonadezi"
  ]);
  await formatUni("Cao đẳng Công nghệ và Thương mại Hà Nội", [
    "Trường Cao Đẳng Công Nghệ Và Thương Mại Hà Nội",
    "Cao đẳng Công nghệ và Thương mại Hà Nội"
  ]);
  await formatUni("Cao đẳng Công nghiệp Huế", [
    "Trường Cao đẳng Công nghiệp Huế"
  ]);

  await formatUni("Cao đẳng Công nghiệp Hưng Yên", [
    "Trường Cao đẳng Công nghiệp Hưng Yên"
  ]);
 

  await formatUni("Cao đẳng Công nghiệp Nam Định", [
    "Trường Cao Đẳng Công Nghiệp Nam Định"
  ]);
  await formatUni("Cao đẳng Công nghiệp Phúc Yên", [
    "Cao đẳng công nghiệp phúc yên"
  ]);
  await formatUni("Cao đẳng Công nghiệp Tuy Hòa", [
    "Cao Dang Cong Nghiep Tuy Hoa"
  ]);
  await formatUni("Cao đẳng Công Thương Hà Nội", [
    "Trường Cao Đẳng Công Thương Hà Nội"
  ]);

  await formatUni("Cao đẳng Công Thương Miền Trung", [
    "Trường Cao Đẳng Công Thương Miền Trung"
  ]);

  await formatUni("Cao đẳng Công Thương TP.HCM", [
    "Trường Cao Đẳng Công Thương Thành Phố Hồ Chí Minh",
    "HITU - Trường Cao Đẳng Công Thương TP.HCM",
    'Trường Cao Đẳng Công Thương Việt Nam',
    "Cao Dang Cong Thuong TP.HCM"
  ]);


  await formatUni("Cao đẳng Cơ điện Hà Nội", [
    "Trường Cao đẳng  Cơ điện Hà Nội - HCEM"
  ]);
  await formatUni("Cao đẳng Cơ giới Và Thủy lợi", [
    "Trường Cao Đẳng Cơ Giới Và Thủy Lợi"
  ]);
  await formatUni("Cao đẳng Cơ khí Nông nghiệp", [
    "Trường Cao đẳng Cơ khí nông nghiệp - CAM"
  ]);
  await formatUni("Cao đẳng Du lịch Cần Thơ", [
    "Trường Cao đẳng Du lịch Cần Thơ - CTC"
  ]);
  await formatUni("Cao đẳng Du lịch Đà Nẵng", [
    "Trường Cao đẳng Du lịch Đà Nẵng"
  ]);
  await formatUni("Cao đẳng Du lịch Hà Nội", [
    "Trường Cao đẳng Du lịch Hà Nội",
    "Cao đẳng Du Lịch Hà Nội",
    "Cao Đẳng Du lịch Hà Nội",
    "cao dang du lich ha noi",
    "Hanoi Tourism College"
  ]);
  await formatUni("Cao đẳng Du lịch Hải Phòng", [
    "Trường Cao Đẳng Du Lịch Hải Phòng"
  ]);
  await formatUni("Cao đẳng Du lịch Huế", [
    "Trường Cao Đẳng Du Lịch Huế",
    "Hue Tourism College"
  ]);
  await formatUni("Cao đẳng Du lịch Nha Trang", [
    "Trường Cao đẳng Du Lịch Nha Trang",
    "NHA TRANG Tourism College"
  ]);
  await formatUni("Cao đẳng Du lịch - Thương mại Nghệ An", [
    "Trường Cao Đẳng Du Lịch - Thương Mại Nghệ  An",
    "Trường Cao đẳng Du lịch và Thương mại"
  ]);
  await formatUni("Cao đẳng Dược Hà Nội", [
    "Cao đẳng Dược Hà Nội",
    "Trường Cao Đẳng Dược Hà Nội"
  ]);
  await formatUni("Cao đẳng Dược Phú Thọ", ["cao dang duoc phu tho"]);
  await formatUni("Cao đẳng Dược Trung ương Hải Dương", [
    "Trường Cao Đẳng Dược Trung Ương Hải Dương",
    "Cao Đẳng Dược Trung Ương - Hải Dương",
    "Cao Đẳng Dược TW Hải Dương"
  ]);
  await formatUni("Cao đẳng Đại Việt Sài Gòn", [
    "Trường Cao đẳng Đại Việt Sài Gòn - Khoa Y Dược",
    "Trường Cao Đẳng Đại Việt Sài Gòn",
    "Cao Đẳng Đại Việt Sài Gòn"
  ]);
  await formatUni("Cao đẳng Điện lực TP.HCM", [
    "Trường Cao Đẳng Điện Lực TPHCM"
  ]);
  formatUni("Cao đẳng Đồng Khởi", ["Trường Cao Đẳng Đồng Khởi"]);
  formatUni("Cao đẳng Giao thông Vận tải TP.HCM", [
    "Cao Đẳng Giao Thông Vận Tải 3",
    "Trường CĐ Giao Thông Vận Tải TP.HCM"
  ]);
  formatUni("Cao đẳng Hải Dương", [
    "Trường Cao Đẳng Hải Dương",
    "Trường Cao Đẳng Hải Dương",
    "Cao Đẳng Hải Dương"
  ]);
  formatUni("Cao đẳng Hàng hải I", [
    "Cao đẳng Hàng Hải 1"
  ]);
  formatUni("Cao đẳng Hòa Bình Xuân Lộc", [
    "Trường Cao Đẳng HÒA BÌNH XUÂN LỘC"
  ]);
  formatUni("Cao đẳng Kiên Giang", ["Trường Cao đẳng Kiên Giang"]);
  formatUni("Cao đẳng Kinh tế Đối ngoại TP.HCM", [
    "Cao Đẳng Kinh Tế Đối Ngoại _ College Of Foreign Economic Relations (COFER)",
    "College Of Foreign Economic Relations (COFER)",
    "Trường Cao Đẳng Kinh Tế Đối Ngoại TP.HCM",
    "College of Foreign Economic Relations",
    "Cao đẳng Kinh tế Đối ngoại - COFER",
    "Cao đẳng Kinh tế Đối ngoại TP.HCM",
    "Cao Đẳng Kinh Tế Đối Ngoại TP.HCM",
    "Trường Cao đẳng Kinh tế Đối ngoại",
    "Cao Đẳng Kinh Tế Đối Ngoại",
    "cao dang kinh te doi ngoai"
  ]);
  formatUni("Cao đẳng Kinh tế Huế", ["Hue College of Economics"]);
  formatUni("Cao đẳng Kinh tế TP.HCM", [
    "Trường Cao Đẳng Kinh Tế Thành Phố Hồ Chí Minh",
    "HCE - Trường Cao đẳng Kinh Tế TP.HCM",
    "Trường Cao đẳng Kinh Tế Tp.HCM",
    "Cao đẳng kinh tế Tp.HCM (HCE)",
    "CAO DANG KINH TE TPHCM",
    "cao dang kinh te"
  ]);
  formatUni("Cao đẳng Kinh tế - Công nghệ TP.HCM", [
    "Trường Cao đẳng Kinh tế - Công nghệ Tp. Hồ Chí Minh",
    'Trường Cao đẳng Kinh tế - Công nghệ Tp. Hồ Chí Minh',
    "Trường Cao đẳng Kinh tế - Công nghệ TP.HCM - HIAST",
    "Cao đẳng Kinh tế - Công nghệ Tp. Hồ Chí Minh",
    "CAO ĐẲNG KINH TẾ - CÔNG NGHỆ TP.HCM - HIAST",
    "Trường Cao Đẳng KTCN TPHCM Cơ Sở Bình Dương"
  ]);
  formatUni("Cao đẳng Kinh tế - Công nghiệp Hà Nội", [
    "Cao Đẳng Kinh Tế Công Nghiệp Hà Nội - Hiec",
    "Cao đẳng kinh tế công nghiệp Hà Nội",
    "Cao dang kinh te cong nghiep Ha Noi",
    "cao dang kinh te cong nghiep ha noi"
  ]);
  formatUni("Cao đẳng Kinh tế Kế hoạch Đà Nẵng", [
    "Trường Cao Đẳng Kinh Tế Kế Hoạch Đà Nẵng",
    "cao dang kinh te ke hoach da nang"
  ]);
  formatUni("Cao đẳng Kinh tế - Kỹ thuật Cần Thơ", [
    "TRƯỜNG CAO ĐẲNG KINH TẾ - KỸ THUẬT CẦN THƠ",
    "Trường Cao đẳng Kinh tế - Kỹ thuật Cần Thơ",
    "Cao Đẳng Kinh Tế Kỹ Thuật Cần Thơ"
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
  await formatUni("Cao đẳng Kinh tế - Kỹ thuật Thương mại", [
    "Trường Cao Đẳng Kinh Tế - Kỹ Thuật Thương Mại",
    "cao dang kinh te ky thuat thuong mai"
  ]);
  await formatUni("Cao đẳng Kinh tế - Tài chính Thái Nguyên", [
    'Trường Cao Đẳng Kinh Tế - Tài Chính Thái Nguyên (TCEF)',
    "trường cao đẳng kinh tế tài chính thái nguyên",
    "Cao Đẳng Kinh Tế Tài Chính Thái Nguyên",
    "cao đẳng kinh tế tài chính thái nguyên",
  ]);
  await formatUni("Cao đẳng Kinh tế - Tài chính Vĩnh Long", [
    "Trường Cao Đẳng Kinh tế - Tài chính Vĩnh Long",
    "Cao Dang Kinh Te Tai Chinh Vinh Long"
  ]);
  await formatUni("Cao đẳng Kỹ nghệ 2", ["Trường Cao Đẳng Kỹ Nghệ II"]);
  await formatUni("Cao đẳng Kỹ thuật Cao Thắng", [
    "Cao Đẳng Kỹ Thuật Cao Thắng",
    "Cộng đồng Sinh viên Trường Cao Đẳng Kỹ Thuật Cao Thắng",
    "Trường Cao Đẳng Kỹ Thuật Cao Thắng",
    "Trường Cao đẳng Kỹ thuật Cao Thắng"
  ]);
  await formatUni("Cao đẳng Kỹ thuật Công nghệ Nha Trang", [
    "Trường Cao đẳng Kỹ thuật Công nghệ Nha Trang"
  ]);
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
  await formatUni("Cao đẳng Lương thực - Thực phẩm", [
    "Trường Cao đẳng Lương thực - Thực phẩm"
  ]);
  await formatUni("Cao đẳng Lý Tự Trọng TP.HCM", [
    "Cao đẳng Lý Tự Trọng TP.HCM"
  ]);
  await formatUni("Cao đẳng Miền Nam", ["CMN Cao Đẳng Miền Nam"]);
  await formatUni("Cao đẳng Múa Việt Nam", [
    "Trường Cao Đẳng Múa Việt Nam",
    "Trường Cao đẳng múa VN"
  ]);
  await formatUni("Cao đẳng nghề An Giang", [
    "Trường Cao Đẳng Nghề An Giang",
    "Cao Dang Nghe an Giang"
  ]);
  await formatUni("Cao đẳng nghề Bách khoa Hà Nội", [
    "Trường Cao đẳng nghề Bách Khoa Hà Nội - HACTECH"
  ]);
  await formatUni("Cao đẳng nghề Cần Thơ", ["Trường Cao đẳng nghề Cần Thơ"]);
  await formatUni("Cao đẳng nghề Công nghệ cao Đồng Nai", [
    "Trường Cao đẳng nghề Công nghệ cao Đồng Nai"
  ]);
  await formatUni("Cao đẳng nghề Công nghệ cao Hà Nội", [
    "Trường Cao đẳng Nghề Công Nghệ Cao Hà Nội"
  ]);
  await formatUni("Cao đẳng nghề Công nghệ Việt - Hàn Bắc Giang", [
    "Cao đẳng nghề công nghệ Việt-Hàn Bắc Giang"
  ]);
  await formatUni("Cao đẳng nghề Công nghệ Viettronics Hải Phòng", [
    "Trường Cao đẳng Công nghệ Viettronics Hải Phòng"
  ]);
  await formatUni("Cao đẳng nghề Du lịch Sài Gòn", [
    "Trường Cao đẳng nghề Du lịch Sài Gòn",
    "Saigon Tourism Vocational College",
    "Cao Đẳng Nghề Du Lịch Sài Gòn"
  ]);
  await formatUni("Cao đẳng nghề Du lịch Vũng Tàu", [
    "Trường Cao Đẳng Nghề Du Lịch Vũng Tàu",
    "Trường Cao đẳng nghề du lịch Vũng Tàu"
  ]);

  
  await formatUni("Cao đẳng nghề Đà Lạt", [
    "Cao đẳng Nghề Đà Lạt"
  ]);

  await formatUni("Cao đẳng nghề Kiên Giang", [
    "Trường Cao Đẳng Nghề Kiên Giang"
  ]);
  await formatUni("Cao đẳng nghề Phú Thọ", [
    "Trường Cao Đẳng Nghề Phú Thọ"
  ]);

  
  await formatUni("Cao đẳng nghề Số 8", [
    "Trường Cao Đẳng Nghề Số 8 - Bộ Quốc Phòng",
    "Truong Cao Dang Nghe So 8"
  ]);
  await formatUni("Cao đẳng nghề Tây Ninh", ["Trường Cao Đẳng Nghề Tây Ninh"]);
  await formatUni("Cao đẳng Nghệ thuật Hà Nội", [
    "Ha Noi College Of Art(Cao Đẳng Nghệ Thuật Hà Nội)",
    "Trường Cao Đẳng Nghệ Thuật Hà Nội",
    "Khoa Thanh Nhạc Trường Cao Đẳng Nghệ Thuật Hà Nội-Số 7 Hai Bà Trưng",
    "Hanoi College of Art"
  ]);
  await formatUni("Cao đẳng Ngoại ngữ - Công nghệ Việt Nhật", [
    "Trường Cao đẳng Ngoại ngữ - Công nghệ Việt Nhật"
  ]);
  await formatUni("Cao đẳng Nông nghiệp Nam Bộ", [
    "Trường Cao đẳng Nông nghiệp Nam Bộ"
  ]);
  await formatUni("Cao đẳng Phát thanh Truyền hình 1", [
    "Trường Cao Đẳng Phát Thanh Truyền Hình 1"
  ]);
  await formatUni("Cao đẳng Phát thanh Truyền hình 2", [
    "TRƯỜNG CAO ĐẲNG PHÁT THANH TRUYỀN HÌNH II",
    "Trường Cao đẳng Phát Thanh - Truyền Hình II"
  ]);
  await formatUni("Cao đẳng Phương Đông Đà Nẵng", [
    "Cao đẳng Phương Đông Đà Nẵng",
    "Cao Đẳng Phương Đông Đà Nẵng",
    "Cao dang Phuong Dong Da Nang"
  ]);
  await formatUni("Cao đẳng Quân Y 1", ["Trường Cao Đẳng Quân Y I"]);
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
  await formatUni("Cao đẳng Sơn La", ["Trường Cao Đẳng Sơn La"]);
  await formatUni("Cao đẳng Sư phạm Bà Rịa - Vũng Tàu", [
    "Truong Cao Dang Su pham Ba Ria Vung Tau",
    "Trường Cao đẳng Sư phạm Bà Rịa-Vũng Tàu"
  ]);
  await formatUni("Cao đẳng Sư phạm Bình Phước", [
    "Trường cao đẳng sư phạm Bình Phước",
    "Trường Cao đẳng Sư phạm Bình Phước",
    "CAO DANG SU PHAM BINH PHUOC"
  ]);
  await formatUni("Cao đẳng Sư phạm Cao Bằng", [
    "Trường Cao đẳng Sư phạm Cao Bằng"
  ]);
  await formatUni("Cao đẳng Sư phạm Đà Lạt", [
    "Trường Cao đẳng Sư phạm Đà Lạt",
    "Cao Đẳng Sư Phạm Đà Lạt"
  ]);
  await formatUni("Cao đẳng Sư phạm Đắk Lắk", [
    "Trường Cao Đẳng Sư Phạm Đak Lak",
    "Cao Đẳng Sư Phạm Đăk lăk"
  ]);
  await formatUni("Cao đẳng Sư phạm Điện Biên", [
    "Cao Đẳng sư phạm Điện Biên"
  ]);
  
  await formatUni("Cao đẳng Sư phạm Gia Lai", [
    "Cao Đẳng Sư Phạm Gia Lai",
    "Trường Cao Đẳng Sư Phạm Gia Lai",
    "CAO ĐẲNG SƯ PHẠM GIA LAI"
  ]);
  await formatUni("Cao đẳng Sư phạm Hà Giang", [
    "Trường Cao Đẳng Sư Phạm Hà Giang"
  ]);
  await formatUni("Cao đẳng Sư phạm Hà Nội", [
    "Trường Cao đẳng Sư phạm Hà Nội",
    "Cao đẳng sư phạm Hà Nội",
    "cao dang su pham ha noi"
  ]);
  await formatUni("Cao đẳng Sư phạm Hà Tây", [
    "Trường Cao đẳng sư phạm Hà Tây",
    "Cao đẳng Sư phạm Hà Tây"
  ]);
  await formatUni("Cao đẳng Sư phạm Hải Dương", [
    "Cao Đẳng Sư Phạm Hải Dương",
    "cao đẳng sư phạm Hải Dương"
  ]);
  await formatUni("Cao đẳng Sư phạm Hoà Bình", [
    "Trường Cao đẳng Sư phạm Hoà Bình"
  ]);
  await formatUni("Cao đẳng Sư phạm Huế", [
    "Trường Cao đẳng Sư phạm Thừa Thiên Huế",
    "Cao Đẳng Sư Phạm Huế"
  ]); 
  await formatUni("Cao đẳng Sư phạm Hưng Yên", [
    "Cao Đẳng Sư Phạm Hưng Yên"
  ]);
  await formatUni("Cao đẳng Sư phạm Lạng Sơn", [
    "Trường Cao Đẳng Sư Phạm Lạng Sơn",
    'Cao Đẳng Sư Phạm Lạng Sơn'
  ]);
  await formatUni("Cao đẳng Sư phạm Long An", ["Cao đẳng Sư phạm Long An"]);
  await formatUni("Cao đẳng Sư phạm Nam Định", ["Cao Đẳng Sư Phạm Nam Định"]);
  await formatUni("Cao đẳng Sư phạm Nghệ An", [
    "Trường Cao Đẳng Sư Phạm Nghệ An"
  ]);
  await formatUni("Cao đẳng Sư phạm Ngô Gia Tự Bắc Giang", [
    "Cao đẳng sư phạm ngô gia tự Bắc Giang",
    "Trường Cao Đẳng Ngô Gia Tự Bắc Giang"
  ]);
  await formatUni("Cao đẳng Sư phạm Nha Trang", ['Cao đẳng Sư phạm Nha Trang',"Trường CĐSP Nha Trang"]);
  await formatUni("Cao đẳng Sư phạm Ninh Thuận", [
    "Trường Cao Đẳng Sư Phạm Ninh Thuận"
  ]);
  await formatUni("Cao đẳng Sư phạm Quảng Ninh", [
    "Trường Cao đẳng Sư phạm Quảng Ninh"
  ]);
  await formatUni("Cao đẳng Sư phạm Quảng Trị", [
    "Trường Cao đẳng Sư phạm Quảng Trị",
    "Cao đẳng Sư phạm Quảng Trị"
  ]);
  await formatUni("Cao đẳng Sư phạm Tây Ninh", [
    "Trường Cao Đẳng Sư Phạm Tây Ninh"
  ]);
  await formatUni("Cao đẳng Sư phạm Thái Bình", ["Cao Đẳng Sư Phạm Thái Bình"]);
  await formatUni("Cao đẳng Sư phạm Thái Nguyên", [
    "Cao đẳng Sư phạm Thái Nguyên",
    'Cao đẳng sư phạm Thái nguyên'
  ]);
  await formatUni("Cao đẳng Sư phạm TP.HCM", ["Cao Đẳng Sư Phạm TPHCM"]);
  await formatUni("Cao đẳng Sư phạm Trung ương Hà Nội", [
    "Cao Đẳng sư phạm Trung ương-Hà Nội"
  ]);
  await formatUni("Cao đẳng Sư phạm Trung ương Nha Trang", [
    "TRƯỜNG CAO ĐẲNG SƯ PHẠM TRUNG ƯƠNG - NHA TRANG",
    "Truong Cao Dang Su Pham Trung Uong Nha Trang"
  ]);
  await formatUni("Cao đẳng Sư phạm Trung ương TP.HCM", [
    "Khoa Giáo dục mầm non - Trường Cao đẳng Sư phạm Trung ương",
    "Trường Cao đẳng Sư phạm Mầm non Trung Ương",
    "Tuyển sinh Cao đẳng Sư Phạm Trung Ương",
    "Trường Cao đẳng Sư phạm Trung ương",
    "Cao đẳng Sư Phạm Trung Ương TP.HCM",
    "Cao Đẳng Sư Phạm Trung Ương TPHCM",
    "Cao đẳng Sư Phạm Trung Ương",
    "Cao đẳng Sư phạm Trung Ương"
  ]);
  await formatUni("Cao đẳng Sư phạm Vĩnh Phúc", [
    "Trường Cao Đẳng Sư Phạm Vĩnh Phúc"
  ]);
  await formatUni("Cao đẳng Sư phạm Yên Bái", ["Cao đẳng sư phạm Yên Bái"]);
  await formatUni("Cao đẳng Tài chính - Hải quan", [
    "Trường Cao đẳng Tài chính - Hải quan",
    "Cao đẳng Tài chính Hải quan TP.HCM",
    "The College Of Finance and Customs",
    "cao dang tai chinh hai quan"
  ]);
  await formatUni("Cao đẳng Thống kê", [
    "Trường Cao đẳng Thống kê",
    "Cao đẳng thống kê"
  ]);

  

  await formatUni("Cao đẳng FPT Tây Nguyên", [
    "Cao Đẳng FPT Tây Nguyên"
  ]);
  await formatUni("Cao đẳng Thực hành FPT Polytechnic", [
    "Cao đẳng thực hành FPT Polytechnic",
    "FPT Polytechnic"
  ]);
  await formatUni("Cao đẳng Thương mại", [
    "Cao Đẳng Thương Mại - Đà Nẵng",
    "Cao Dang thuong mai da nang",
    "Trường Cao đẳng Thương mại",
    "Cao Đẳng Thương Mại"
  ]);
  await formatUni("Cao đẳng Thương mại và Du lịch Hà Nội", [
    'Trường Cao Đẳng Thương Mại Và Du Lịch Hà Nội',
    "Cao Đẳng Thương Mại và Du Lịch Hà Nội-HCCT",
    "Trường Cao đẳng Thương mại và Du lịch"
  ]);
  await formatUni("Cao đẳng Truyền hình Hà Nội", [
    "Cao Đẳng Truyền Hình",
    "Cao đẳng truyền hình Hà Nội (CTV)"
  ]);
  await formatUni("Cao đẳng Văn hóa Nghệ thuật Cần Thơ", [
    "Trường Cao đẳng Văn hóa Nghệ thuật Cần Thơ"
  ]);

  await formatUni("Cao đẳng Văn hóa Nghệ thuật Đà Nẵng", [
    "Trường Cao đẳng Văn hóa Nghệ thuật Đà Nẵng"
  ]);

  await formatUni("Cao đẳng Văn hóa Nghệ thuật Tây Bắc", [
    "Cao Đẳng Văn Hóa Nghệ Thuật Tây Bắc"
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
    "Cao Dang van Hoa Nghe Thuat Va du Lich Nha Trang",
    "Cao Đẳng Văn Hóa Nghệ Thuật Và Du Lịch Nha Trang"
  ]);
  await formatUni("Cao đẳng Văn hoá Nghệ thuật và Du lịch Sài Gòn", [
    "Trường Cao đẳng Văn hoá Nghệ thuật và Du lịch Sài Gòn",
    "CAO ĐẲNG VĂN HÓA NGHỆ THUẬT VÀ DU LỊCH SÀI GÒN",
    "Cao Dang van Hoa Nghe Thuat Va du Lich Sai Gon"
  ]);
  await formatUni("Cao đẳng Viễn Đông", [
    "Cao Đẳng Viễn Đông - Vido College",
    "Cao đẳng Viễn Đông"
  ]);
  await formatUni("Cao đẳng Việt Mỹ", [
    "Cao đẳng Việt Mỹ - American Polytechnic College"
  ]);
  await formatUni("Cao đẳng Vĩnh Phúc", ['Trường Cao Đẳng Vĩnh Phúc',"Cao Đẳng Vĩnh Phúc"]);
  await formatUni("Cao đẳng Y Dược Asean", [
    "Trường Cao Đẳng Y Dược Asean",
    "Cao đẳng Y Dược ASEAN"
  ]);
  await formatUni("Cao đẳng Y Dược Hồng Đức", [
    "Trường Cao Đẳng Y Dược Hồng Đức"
  ]);
  await formatUni("Cao đẳng Y Dược Hà Nội", [
    "Trường Cao đẳng Y Dược Hà Nội",
    "Cao Đẳng Y Dược Hà Nội"
  ]);
  await formatUni("Cao đẳng Y Dược Phú Thọ", [
    "Truong cao dang y duoc phu tho",
    'Cao Đẳng Y Dược Phú Thọ'
  ]);
  await formatUni("Cao đẳng Y Dược Pasteur", [
    "Trường Cao đẳng Y Dược Pasteur CS TPHCM",
    "Trường Cao đẳng Y Dược Pasteur",
    "Trường Cao đẳng Y Dược Pasteur CS Tp.HCM"
  ]);
  await formatUni("Cao đẳng Y Dược Sài Gòn", [
    "Trường Cao Đẳng Y Dược Sài Gòn"
  ]);
  await formatUni("Cao đẳng Y tế Bắc Ninh", [
    "Tôi yêu Cao đẳng Sư Phạm Bắc Ninh",
    "Trường Cao Đẳng Sư Phạm Bắc Ninh",
    "Cao Đẳng Y Tế Bắc Ninh"
  ]);
  await formatUni("Cao đẳng Y tế Bạch Mai", ["Cao Đẳng Y Tế Bạch Mai"]);
  await formatUni("Cao đẳng Y tế Bình Định", [
    "Trường Cao đẳng Y tế Bình Định"
  ]);
  await formatUni("Cao đẳng Y tế Bình Dương", [
    "Trường Cao Đẳng Y Tế Bình Dương-CBY 1978 nơi chia sẻ kỷ niệm",
    "Trường Cao đẳng Y Tế Bình Dương",
    "truong cao dang y te binh duong",
    "Cao đẳng Y tế Bình Dương"
  ]);
  await formatUni("Cao đẳng Y tế Bình Thuận", [
    "Trường Cao Đẳng Y Tế Bình Thuận"
  ]);

  await formatUni("Cao đẳng Y tế Cà Mau", [
    "Trường Cao Đẳng Y Tế Cà Mau",
    "Cao Đẳng Y Tế Cà Mau"
  ]);
  await formatUni("Cao đẳng Y tế Cần Thơ", [
    "Trường Cao Đẳng Y Tế Cần Thơ",
    "Trường Cao đẳng Y tế Cần Thơ",
    "Cao đẳng Y tế Cần Thơ",
    "Can Tho Medical College"
  ]);
  await formatUni("Cao đẳng Y tế Đắk Lắk", [
    "Trường Cao đẳng Y tế Đắk Lắk",
    "Trường Cao Đẳng Y Tế DakLak"
  ]);
  await formatUni("Cao đẳng Y tế Đặng Thùy Trâm", [
    "Trường Cao Đẳng Y Tế Đặng Thùy Trâm"
  ]);
  await formatUni("Cao đẳng Y tế Điện Biên", [
    "Trường Cao Đẳng Y Tế Điện Biên"
  ]);
  await formatUni("Cao đẳng Y tế Đồng Nai", [
    "Trường Cao Đẳng Y Tế Đồng Nai",
    "Cao Đẳng Y Tế Đồng Nai"
  ]);
  await formatUni("Cao đẳng Y tế Đồng Tháp", [
    "Trường Cao đẳng Y tế Đồng Tháp",
    "Cao Đẳng Y Tế Đồng Tháp"
  ]);
  await formatUni("Cao đẳng Y tế Hà Đông", [
    "Trường Cao Đẳng Y Tế Hà Đông",
    "Cao đẳng y tế Hà Đông",
    "Cao đẳng Y tế Hà Đông"
  ]);
  await formatUni("Cao đẳng Y tế Hà Nội", [
    "Cao đẳng Y tế Hà Nội (Hanoi Medical College - HMC)",
    "Trường Cao Đẳng Y Tế Hà Nội",
    "Trường Cao đẳng Y tế Hà Nội",
    "Cao Đẳng Y Tế Hà Nội",
    "Cao Đẳng Y tế Hà Nội"
  ]);
  await formatUni("Cao đẳng Y tế Hà Tĩnh", [
    "Trường Cao Đẳng Y Tế Hà Tĩnh",
    "Trường CaoĐẳng Y Tế Hà Tĩnh",
    "Cao Đẳng Y tế Hà Tĩnh"
  ]);
  await formatUni("Cao đẳng Y tế Hải Phòng", [
    "Trường Cao Đẳng Y Tế Hải Phòng",
    "Cao Đẳng Y tế Hải Phòng"
  ]);
  await formatUni("Cao đẳng Y tế Huế", [
    "Truong Cao Dang Y Te Hue",
    "Trường Cao Đẳng Y Tế Huế"
  ]);
  await formatUni("Cao đẳng Y tế Khánh Hòa", [
    "Trường Cao Đẳng Y tế Khánh Hoà",
    "CĐ Y Tế Khánh Hòa"
  ]);
  await formatUni("Cao đẳng Y tế Kiên Giang", ["Cao đẳng Y tế Kiên Giang"]);
  await formatUni("Cao đẳng Y tế Lạng Sơn", ["Cao Đẳng Y Tế Lạng Sơn"]);
  await formatUni("Cao đẳng Y tế Ninh Bình", [
    "Phòng Đào tạo - Trường Cao đẳng Y tế Ninh Bình"
  ]);
  await formatUni("Cao đẳng Y tế Phú Thọ", [
    "Trường Cao đẳng Y tế Phú Thọ",
    "cao dang y te phu tho"
  ]);
  await formatUni("Cao đẳng Y tế Phú Yên", ["Trường Cao đẳng Y tế Phú Yên"]);
  await formatUni("Cao đẳng Y tế Sơn La", ["Cao Đẳng Y Tế Sơn La"]);
  await formatUni("Cao đẳng Y tế Quảng Nam", ["Cao Dang Y te Quang Nam"]);
  await formatUni("Cao đẳng Y tế Quảng Ninh", ["Cao Đẳng Y tế Quảng Ninh"]);
  await formatUni("Cao đẳng Y tế Quảng Trị", [
    "Trường Cao đẳng Y tế Quảng Trị"
  ]);
  await formatUni("Cao đẳng Y tế Thái Bình", [
    "Sinh Viên Cao Đẳng Y Tế Thái Bình",
    "Cộng đồng Cao đẳng Y tế Thái Bình"
  ]);
  await formatUni("Cao đẳng Y tế Thái Nguyên", [
    "Trường Cao Đẳng Y Tế Thái Nguyên",
    "Cao Đẳng Y Tế Thái Nguyên",
    "Cao Dang y te thai nguyen"
  ]);
  await formatUni("Cao đẳng Y tế Thanh Hóa", [
    "Trường Cao Đẳng Y Tế Thanh Hóa",
    "Trường Cao Đẳng Y Tế Thanh Hoá",
    "Trường Cao đẳng Y tế Thanh Hóa",
    "Cao Đẳng Y Tế Thanh Hóa",
    "Cao đẳng Y Tế Thanh Hóa",
    "cao dang y te thanh hoa"
  ]);
  await formatUni("Cao đẳng Y tế Tiền Giang", [
    "Cao Đẳng Y Tế Tiền Giang - Tien Giang Medical College",
    "cao dang y te tien giang"
  ]);
  await formatUni("Cao đẳng Y tế Trà Vinh", ["Truong Cao Dang Y Te Tra Vinh"]);

  // //----------------------------------------------------------------------------------------hoc vien
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
    "Academy of Journalism and Communication (AJC)",
    "Academy of Journalism and Communication",
    "Học viện Báo chí và Tuyên truyền - AJC",
    "Học viện Báo chí và Tuyên truyền"
  ]);
  await formatUni("Học viện Biên phòng", ["HỌC VIỆN BIÊN PHÒNG"]);
  await formatUni("Học viện Cán bộ TP.HCM", [
    "Học Viện Cán Bộ Thành Phố Hồ Chí Minh"
  ]);
  await formatUni("Học viện Chính sách và Phát triển", [
    "Academy of Policy and Development - Học Viện Chính sách và Phát triển",
    "Học viện Chính sách và Phát triển"
  ]);
  await formatUni("Học viện Công nghệ Bưu chính Viễn thông", [
    "Học viện Công nghệ Bưu chính Viễn thông cơ sở tại TP.HCM",
    "Học viện Công nghệ Bưu chính Viễn thông",
    "Học Viện Công Nghệ Bưu Chính Viễn Thông - PTIT",
    "Học viện Công nghệ Bưu Chính Viễn Thông - PTIT"
  ]);
  await formatUni("Học viện Cảnh sát Nhân dân", [
    "Học viện Cảnh sát Nhân dân",
    "Học Viện Cảnh Sát Nhân Dân"
  ]);
  await formatUni("Học viện Hải quân", [
    "Học viện Hải quân",
    "Học viện Hải Quân"
  ]);
  await formatUni("Học viện Hàng không Việt Nam", [
    "Học viện Hàng không Việt Nam - Vietnam Aviation Academy",
    "Học Viện Hàng Không",
    "Học viện Hàng không Việt Nam"
  ]);
  await formatUni("Học viện Hành chính Quốc gia", [
    "National Academy of Public Administration",
    "Học viện Hành Chính Quốc Gia",
    "Học viện Hành chính Quốc gia"
  ]);
  await formatUni("Học viện Hậu cần", [
    "Học Viện Hậu Cần- Military Academy of Logistics",
    "Học Viện Hậu Cần"
  ]);
  await formatUni("Học viện Kỹ thuật Quân sự", [
    "Học Viện Kỹ Thuật Quân Sự (MTA)"
  ]);
  await formatUni("Học viện Kỹ thuật Mật mã", ["Học viện Kỹ thuật mật mã"]);
  await formatUni("Học viện Múa Quốc gia Việt Nam", [
    "Học Viện Múa Quốc Gia Việt Nam"
  ]);
  await formatUni("Học viện Ngân hàng", [
    "Học Viện Ngân Hàng - Banking Academy of Viet Nam",
    "Học viện ngân hàng",
    "Học viện Ngân hàng"
  ]);
  await formatUni("Học viện Ngoại giao", [
    "Diplomatic Academy of Vietnam",
    "Học viện Ngoại Giao Việt Nam",
    "Học viện Ngoại giao Việt Nam"
  ]);
  await formatUni("Học viện Nông nghiệp Việt Nam", [
    "Vietnam National University of Agriculture",
    "Diễn Đàn Học viện Nông nghiệp Việt Nam",
    "Học viện Nông nghiệp Việt Nam",
    "Học Viện Nông Nghiệp Việt Nam"
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
    "Học Viện Tài Chính",
    "Học viện Tài chính"
  ]);
  await formatUni("Học viện Thanh thiếu niên Việt Nam", [
    "Học Viện Thanh Thiếu Niên Việt Nam",
    "Học viện Thanh Thiếu Niên Việt Nam"
  ]);
  await formatUni("Học viện Tòa án", ["HỌC VIỆN TÒA ÁN"]);
  await formatUni("Học viện Tư pháp", ["Học viện Tư pháp"]);
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
  await formatUni("Đại học Hòa Bình", [
    "Đại Học Hòa Bình",
    "Hoa Binh University"
  ]);
  await formatUni("Đại học Tây Bắc", [
    'Hội Sinh viên Trường Đại Học Tây Bắc',
    "Trường Đại học Tây Bắc",
    "Đại Học Tây Bắc"
  ]);
  await formatUni("Đại học Sao Đỏ ", [
    "Trường Đại học Sao Đỏ",
    "Dai Hoc Sao Do"
  ]);
  await formatUni("Đại học Công nghệ thông tin & Truyền thông Thái Nguyên", [
    "Trường Đại học Công nghệ thông tin & Truyền thông, Thái Nguyên",
    "Trường Đại học Công nghệ Thông tin và Truyền thông  ICTU",
    "Đại học Công nghệ thông tin và truyền thông Thái Nguyên"
  ]);
  await formatUni("Đại học Kinh tế và Quản trị Kinh doanh Thái Nguyên", [
    "Trường Đại học Kinh tế và Quản trị kinh doanh, Đại học Thái Nguyên",
    "Đại học Kinh tế và Quản trị kinh doanh, Đại học Thái Nguyên",
    "Trường Đại học Kinh tế và Quản trị Kinh doanh Thái Nguyên",
    "Trường Đại học Kinh tế và Quản trị kinh doanh Thái Nguyên",
    "Đại học Kinh tế và quản trị kinh doanh Thái Nguyên",
    "Trường Đại học Kinh tế và Quản trị Kinh doanh"
  ]);
  await formatUni("Đại học Kỹ thuật Công nghiệp Thái Nguyên", [
    "Đại Học Kỹ Thuật Công Nghiệp Thái Nguyên - TNUT",
    "Đại Học Kỹ Thuật Công Nghiệp Thái Nguyên",
    "Đại học kĩ thuật công nghiệp Thái Nguyên",
    "Thai Nguyen University of Technology"
  ]);
  await formatUni("Đại học Y Dược - Đại học Thái Nguyên", [
    "Trường Đại học Y Dược, Đại học Thái Nguyên",
    "Đại Học Y Dược - Đại Học Thái Nguyên",
    "Trường Đại học Y - Dược Thái Nguyên",
    "Đại Học Y Dược Thái Nguyên"
  ]);
  await formatUni("Đại học Sư phạm - Đại học Thái Nguyên", [
    "Đại học Sư phạm Thái Nguyên ( Thai Nguyen University of education)",
    "Khoa Giáo dục Tiểu học - Trường Đại học Sư Phạm Thái Nguyên",
    "Khoa Giáo dục Tiểu học Trường Đại học Sư phạm Thái Nguyên",
    "Khoa Giáo dục mầm non trường Đại học sư phạm Thái Nguyên",
    "Khoa Giáo Dục Chính Trị - Đại Học Sư Phạm Thái Nguyên",
    "Trường Đại học Sư phạm, Đại học Thái Nguyên",
    "Trường Đại Học Sư Phạm Thái Nguyên",
    "Trường Đại học Sư phạm Thái Nguyên",
    "Đại học Sư Phạm Thái Nguyên",
    "Đại học Sư phạm Thái Nguyên",
    "DHSP Thai Nguyen"
  ]);
  await formatUni("Đại học Nông Lâm - Đại học Thái Nguyên", [
    "Đồng hành cùng sinh viên Trường Đại học Nông lâm Thái Nguyên",
    "Thai Nguyen University of Agriculture and Forestry",
    "Đại Học Nông Lâm Thái Nguyên Confessions",
    "Trường Đại Học Nông Lâm Thái Nguyên",
    "Trường Đại học Nông Lâm Thái Nguyên",
    "Đại Học Nông Lâm Thái Nguyên"
  ]);
  await formatUni("Đại học Khoa học - Đại học Thái Nguyên", [
    "Trường Đại học Khoa học - Đại học Thái Nguyên",
    "Trường Đại học Khoa học, Đại học Thái Nguyên",
    "Bộ môn Luật Đại học Khoa học Thái Nguyên",
    "Đại Học Khoa Học - Đại Học Thái Nguyên",
    "Trường Đại Học Khoa học Thái Nguyên"
  ]);
  await formatUni("Khoa Ngoại ngữ - Đại học Thái Nguyên", [
    "Khoa Ngoại Ngữ Đại  - Học Thái Nguyên( School Of Foregin Language - Thai Nguyen University )",
    "Khoa Ngoại Ngữ Đại - Học Thái Nguyên( School Of Foregin...",
    "Khoa Ngoại Ngữ -Đại Học Thái Nguyên( School Of Foregin...",
    "Faculty Of Foreign Languages-Thai Nguyen University",
    "Trường Đại học Thái Nguyên Khoa Ngoại Ngữ",
    "Khoa Ngoại ngữ - Đại học Thái Nguyên",
    "Khoa Ngoại ngữ, Đại học Thái Nguyên"
  ]);
  await formatUni("Khoa Quốc tế - Đại học Thái Nguyên", [
    "Khoa Quốc Tế - Đại Học Thái Nguyên"
  ]);
  await formatUni("Đại học Thể dục Thể thao Bắc Ninh", [
    'Đại học thể dục thể thao từ sơn Bắc Ninh',
    'Trường Đại Học TDTT -Từ Sơn-Bắc Ninh',
    "Đại Học TDTT Bắc Ninh"
  ]);
  await formatUni("Đại học Kinh Bắc", ["Đại học Kinh Bắc - Bắc Ninh"]);
  await formatUni("Đại học Nông - Lâm Bắc Giang", [
    "Trường Đại học Nông - Lâm Bắc Giang"
  ]);
  await formatUni("Đại học Công nghiệp Quảng Ninh", [
    "Đại học Công Nghiệp Quảng Ninh",
    'Đại Học Công Nghiệp Quảng Ninh'
  ]);

  
  await formatUni("Đại học Kinh tế - Kỹ thuật Hải Dương", [
    "Đại học Kinh tế - Kỹ thuật Hải Dương"
  ]);

  await formatUni("Đại học Kỹ thuật Y tế Hải Dương", [
    "Đại học kỹ thuật y tế Hải Dương (HMTU)",
    "Trường Đại học Kỹ thuật Y tế Hải Dương"
  ]);
  await formatUni("Đại học Thành Đông", [
    "Trường Đại Học Thành Đông"
  ]);
  
  await formatUni("Đại học Hùng Vương", [
    "HVUH - Trường Đại Học Hùng Vương TP.HCM",
    "Trường Đại học Hùng Vương - Phú Thọ",
    "Trường Đại Học Hùng Vương Phú Thọ",
    "Đại học Hùng Vương - Phú Thọ",
    "Trường Đại học Hùng Vương",
    "Hung Vuong University",
    "Đại Học Hùng Vương",
    "Đại học Hùng Vương"
  ]);
  await formatUni("Đại học Công nghiệp Việt Trì", [
    "Trường Đại học Công Nghiệp Việt Trì (VUI)"
  ]);
  await formatUni("Đại học Công nghệ Giao thông Vận tải", [
    "Đại học Công nghệ GTVT-University of Transport Technology",
    "Trường Đại học Công nghệ Giao thông Vận tải",
    "Đại học Công nghệ Giao thông vận tải"
  ]);
  await formatUni("Đại học Hạ Long", [
    "Sinh viên Đại học Hạ Long",
    "Trường Đại học Hạ Long",
    "Đại Học Hạ Long"
  ]);
  await formatUni("Đại học Dân lập Hải Phòng", [
    "Đại Học Dân Lập Hải Phòng -  Haiphong Private University",
    "Trường Đại học Dân lập Hải Phòng",
    "Đại Học Dân Lập Hải Phòng",
    "Đại học Dân lập Hải Phòng"
  ]);
  await formatUni("Đại học Hải Phòng", [
    "Trường Đại Học Hải Phòng",
    "Trường Đại học Hải Phòng",
    "Hai Phong University",
    "Đại Học Hải Phòng",
    "Dai Hoc Hai Phong"
  ]);
  await formatUni("Đại học Sư phạm Hải Phòng", ["Đại Học Sư Phạm Hải Phòng"]);
  await formatUni("Đại học Y Dược Hải Phòng", [
    "Trường Đại Học Y Dược Hải Phòng",
    "Trường Đại học Y Dược Hải Phòng",
    "Đại Học Y Dược Hải phòng",
    "Đại Học Y Hải Phòng",
    "Đại học Y Hải Phòng"
  ]);
  await formatUni("Đại học Điều dưỡng Nam Định", [
    "Trường Đại học Điều dưỡng Nam Định",
    "Đại học Điều Dưỡng Nam Định"
  ]);
  await formatUni("Đại học Sư phạm Kỹ thuật Nam Định", [
    "Đại học Sư Phạm Kỹ Thuật Nam Định"
  ]);
  await formatUni("Đại học Sư phạm Kỹ thuật Hưng Yên", [
    "Hung Yen University of Technology and Education",
    'Đại Học Sư Phạm Kỹ Thuật Hưng Yên - UTEHY',
    "Trường Đại Học Sư Phạm Kỹ Thuật Hưng Yên",
    "Đại học Sư Phạm Kỹ Thuật Hưng Yên",
  ]);
  await formatUni("Đại học Y Dược Thái Bình", ["Đại Học Y Dược Thái Bình"]);
  await formatUni("Đại học Thái Bình", ["Đại học Thái Bình"]);

  

  await formatUni("Đại học Chu Văn An", ["Trường Đại học Chu Văn An"]);
  await formatUni("Đại học Hoa Lư Ninh Bình", [
    "Trường Đại Học Hoa Lư Ninh Bình",
    "Đại học Hoa Lư Ninh Bình"
  ]);
  //-------------------------------------------------------------------------------Trung
  await formatUni("Đại học Văn hóa, Thể thao và Du lịch Thanh Hóa", [
    "Trường Đại học Văn hóa, Thể thao và Du lịch Thanh Hóa",
    "Trường Đại học Văn hóa Thể thao và Du lịch Thanh Hóa",
    "Đại Học VHTT&Dl Thanh Hóa"
  ]);

  await formatUni("Đại học Sư phạm Kỹ thuật Vinh", [
    "Trường Đại Học Sư Phạm Kỹ Thuật Vinh"
  ]);

  await formatUni("Đại học Hồng Đức", [
    "Khoa Kinh tế - Quản trị kinh doanh, Đại học Hồng Đức",
    "Sinh Viên Đại Học Hồng Đức",
    "Trường Đại học Hồng Đức",
    "Đại học Hồng Đức",
    "Đại Học Hồng Đức"
  ]);
  await formatUni("Đại học Vinh", [
    "Trường Đại học Vinh - Vinh University",
    "Đại Học Vinh - Vinh University",
    "ĐẠI HỌC VINH",
    "Đại Học Vinh",
    "DH Vinh"
  ]);
  await formatUni("Đại học Y khoa Vinh", [
    "Trường ĐẠI HỌC Y KHOA VINH - VINH Medical University",
    "Trường Đại học Y khoa Vinh",
    "Đại Học Y Khoa Vinh"
  ]);
  await formatUni("Đại học Kinh tế Nghệ An", [
    "Trường Đại Học Kinh Tế Nghệ An",
    "Sinh Viên Đại Học Kinh Tế Nghệ An"
  ]);

  await formatUni("Đại học Hà Tĩnh", ["Trường Đại Học Hà Tĩnh"]);
  await formatUni("Đại học Quảng Bình", [
    "Sinh Viên Đại Học Quảng Bình",
    "Trường Đại học Quảng Bình",
    "Quảng Bình University",
    'Đại Học Quảng Bình',
    'Đại học Quảng Bình'
  ]);

  await formatUni("Đại học Đông Á", [
    "Trung tâm tuyển sinh - Trường Đại học Đông Á Đà Nẵng",
    "Đại học Đông Á"
  ]);

  await formatUni("Đại học Nghệ thuật Huế", [
    "Trường Đại học Nghệ thuật Huế",
    "Đại học Nghệ thuật Huế"
  ]);

  await formatUni("Đại học Phú Xuân", ["Đại học Phú Xuân"]);

  await formatUni("Đại học Sư phạm - Đại học Huế", [
    "Khoa Giáo dục Mầm non - Trường Đại học Sư phạm Huế",
    "Trường Đại học Sư phạm, Đại học Huế",
    "Trường Đại học Sư phạm Huế",
    "Trường Đại Học Sư Phạm Huế",
    "Đại Học Sư Phạm Huế",
    "DHSP Hue"
  ]);
  await formatUni("Đại học Kinh tế - Đại học Huế", [
    "Đội Công tác xã hội Trường Đại học kinh tế Huế",
    "Đại Học Kinh Tế Huế - Hue College of Economics",
    "Ngành Marketing- Đại học Kinh Tế Huế",
    "Trường Đại học Kinh tế Huế - HCE",
    "Trường Đại học Kinh tế Huế (HCE)",
    "Đào tạo Đại học - ĐH Kinh tế Huế",
    "Trường Đại Học Kinh Tế Huế",
    "Đại học Kinh tế Huế",
    "Đại học kinh tế huế"
  ]);
  await formatUni("Đại học Luật - Đại học Huế", [
    "Trường Đại học Luật - Đại học Huế",
    "Trường Đại Học Luật - Đại Học Huế",
    "Trường Đại học Luật Huế",
    "Khoa luật - Đại học Huế",
    "Đại học Luật Huế"
  ]);
  await formatUni("Đại học Ngoại ngữ - Đại học Huế", [
    "Đại học Ngoại Ngữ, Đại học Huế - Trung tâm Tư vấn Hỗ trợ Học sinh,Sinh viên",
    "Hue University of Foreign Languages (Trường Đại học Ngoại ngữ Huế)",
    "Hue University College of Foreign Languages",
    "HUE UNIVERSITY COLLEGE OF FOREIGN LANGUAGES",
    "Trường Đại Học Ngoại Ngữ - Đại Học Huế",
    "Khoa Hàn Đại Học Ngoại Ngữ Huế",
    "Trường Đại học Ngoại ngữ Huế",
    "Đại Học Ngoại Ngữ Huế"
  ]);
  await formatUni("Đại học Khoa học - Đại học Huế", [
    "Trường Đại học Khoa học Huế",
    "Hue University of Sciences",
    "Đại học khoa học - ĐH Huế",
    "Khoa Luật-Đại học Huế",
    "Đại học Khoa học Huế"
  ]);
  await formatUni("Đại học Nông Lâm - Đại học Huế", [
    "Trường Đại Học Nông Lâm, Đại học Huế",
    "Đại Học Nông Lâm Huế",
    "Đại học Nông Lâm Huế"
  ]);
  await formatUni("Đại học Y Dược - Đại học Huế", [
    "Đại Học Y Dược Huế - Hue University of Medicine and Pharmacy",
    "Hue University of Medicine and Pharmacy",
    "Nghiên cứu Khoa học trong Y khoa",
    "Trường Đại học Y Dược Huế",
    "Trường Đại Học Y Dược Huế",
    "Đại Học Y Dược Huế"
  ]);
  await formatUni("Khoa Du lịch - Đại học Huế", [
    "Khoa DU LỊCH - Đại học Huế - HAT",
    "Khoa Du lịch - Đại học Huế - HAT",
    "Khoa du lịch - Đại học Huế",
    "Khoa Du Lịch - Đại học Huế"
  ]);

  await formatUni("Đại học Ngoại ngữ - Đại học Đà Nẵng", [
    "Trường Đại học Ngoại ngữ - Đại học Đà Nẵng",
    "CFL -Đại Học Ngoại Ngữ -Đại Học Đà Nẵng",
    "Danang University of Foreign Languages",
    "Đại học Ngoại Ngữ - Đại học Đà Nẵng",
    "Đại học Ngoại Ngữ - Đại học Đà nẵng",
    "Trường Đại học Ngoại ngữ Đà Nẵng",
    "Đại học Ngoại Ngữ Đà Nẵng"
  ]);
  await formatUni("Đại học Sư phạm - Đại học Đà Nẵng", [
    "Trường Đại học Sư phạm - Đại học Đà Nẵng",
    "Trường Đại học Sư phạm - ĐH Đà nẵng",
    "Đại học Sư Phạm - Đại học Đà Nẵng",
    "Trường Đại học Sư phạm Đà Nẵng",
    "Dai Hoc Su pham Da Nang",
    "Đại học Sư phạm Đà Nẵng"
  ]);
  await formatUni("Đại học Sư phạm Kỹ thuật - Đại học Đà Nẵng", [
    "Trường Đại học Sư phạm Kỹ thuật - Đại Học Đà Nẵng"
  ]);
  await formatUni("Đại học Kinh tế - Đại học Đà Nẵng", [
    "DUE - Trường Đại Học Kinh Tế Đà Nẵng - Da Nang University of Economics",
    "Khoa Quản trị Kinh doanh - Trường Đại học Kinh tế - Đại học Đà Nẵng",
    "Alumni for Faculty of Accounting - Danang University of Economics",
    "Khoa Marketing - Đại học Kinh Tế, Đại học Đà Nẵng",
    "Tuổi trẻ Trường Đại học Kinh tế - Đại học Đà Nẵng",
    "Khoa Luật, Trường ĐH Kinh tế - Đại học Đà Nẵng",
    "Trường Đại học Kinh tế - Đại học Đà Nẵng",
    "Câu Lạc Bộ C-RES Đại Học Kinh Tế Đà Nẵng",
    "Đại học Kinh Tế - Đại học Đà Nẵng",
    "Da Nang University of Economics",
    "Da Nang University of Economics",
    "Trường Đại học Kinh tế Đà Nẵng",
    "Trường Đại Học Kinh Tế Đà Nẵng",
    "Danang University of Economics",
    "Đại Học Kinh Tế Đà Nẵng",
    "Đại học kinh tế Đà Nẵng"
  ]);
  await formatUni("Đại học Kiến trúc - Đại học Đà Nẵng", [
    "Hội Cựu Sinh viên Đại học Kiến trúc Đà Nẵng",
    "Trường Đại học Kiến trúc Đà Nẵng",
    "Da Nang Architecture University"
  ]);
  await formatUni("Đại học Bách khoa - Đại học Đà Nẵng", [
    "Đại Học Bách Khoa Đà Nẵng - Danang University of Science and Technology",
    "Đại Học Bách Khoa Đà Nẵng - Polytechnic University of Da Nang",
    "Trường Đại Học Bách Khoa - Đại Học Đà Nẵng",
    "Trường Đại học Bách khoa, Đại học Đà Nẵng",
    "Đại Học Bách Khoa-Đại Học Đà Nẵng",
    "Trường Đại Học Bách Khoa Đà Nẵng",
    "Da Nang University of Technology"
  ]);

  await formatUni("Khoa Y Dược - Đại học Đà Nẵng", [
    "Khoa Y Dược - Đại học Đà Nẵng"
  ]);
  await formatUni("Cao đẳng Công nghệ Thông tin - Đại học Đà Nẵng", [
    "Trường Cao đẳng Công Nghệ Thông Tin - Đại học Đà Nẵng"
  ]);
 

  await formatUni("Đại học Kỹ thuật Y - Dược Đà Nẵng", [
    "YDN - Tuổi trẻ Đại học Kỹ thuật Y - Dược Đà Nẵng",
    "Trường Đại học Kỹ thuật Y - Dược Đà Nẵng",
    "Trường Đại học Kỹ thuật Y Dược - ĐÀ NẴNG",
    "Trường Đại Học Kĩ Thuật Y Dược Đà Nẵng"
  ]);
  await formatUni("Đại học Thể dục Thể thao Đà Nẵng", [
    "Trường Đại học Thể dục Thể thao Đà Nẵng",
    "Đại học thể dục thể thao Đà Nẵng",
    "Trường Đại Học TDTT Đà Nẵng"
  ]);

  await formatUni("Đại học Duy Tân", [
    "Đoàn Viện Đào Tạo & Nghiên Cứu Du Lịch - Đại học Duy Tân",
    "International School -  Duy Tan University",
    "Đại Học Duy Tân Đà Nẵng - D.T.U",
    "khoa Du Lịch - Đại học Duy Tân",
    "E-University Đại học Duy Tân",
    "Sinh Viên Đại Học Duy Tân",
    "Đại Học Duy Tân, Đà Nẵng",
    "Đại Học Duy Tân Đà Nẵng",
    "Trường Đại học Duy Tân",
    "Duy Tan University",
    "Dai hoc Duy Tan"
  ]);
  await formatUni("Đại học FPT Đà Nẵng", ["FPT University Da Nang"]);

  await formatUni("Đại học Xây dựng Miền Trung", [
    "Trường Đại học Xây dựng Miền Trung"
  ]);
  await formatUni("Đại học Quảng Nam", [
    "Trường Đại học Quảng Nam",
    "Trường Đại học Quảng nam",
    "Quang Nam University",
    "Dai Hoc Quang Nam"
  ]);

  await formatUni("Đại học Quang Trung", [
    "Đại Học Quang Trung",
    "Quang Trung college"
  ]);
  await formatUni("Đại học Quy Nhơn", [
    "Sinh Viên Đại học Quy Nhơn",
    "Trường Đại học Quy Nhơn",
    "Đại Học Quy Nhơn News",
    "QUY NHON UNIVERSITY",
    "TRƯỜNG ĐH QUY NHƠN",
    "Dai Hoc Quy Nhon",
    "Đại Học Quy Nhơn",
    "ĐH Quy Nhơn",
    "DH Quy Nhon"
  ]);
  await formatUni("Đại học Phú Yên", ["Trường Đại học Phú Yên"]);

  await formatUni("Đại học Phạm Văn Đồng", ["Đại học Phạm Văn Đồng"]);
  await formatUni("Đại học Tài chính - Kế toán", [
    "Trường Đại học Tài chính - Kế toán"
  ]);

  await formatUni("Đại học Khánh Hòa", [
    "Trường Đại học Khánh Hòa",
    "Đại học Khánh Hòa"
  ]);
  await formatUni("Đại học Nha Trang", [
    "Trường Đại học Nha Trang",
    "Trường Đại Học Nha Trang",
    "Nha Trang University",
    "Đại học Nha Trang",
    "Dai hoc Nha Trang"
  ]);
  await formatUni("Đại học Thái Bình Dương", [
    "Trường Đại học Thái Bình Dương",
    "Asia Pacific College"
  ]);

  await formatUni("Đại học Phan Thiết", ["Đại Học Phan Thiết UPT"]);

  await formatUni("Đại học Buôn Ma Thuột", ["Đại học Buôn Ma Thuột"]);
  await formatUni("Đại học Tây Nguyên", [
    "Trường Đại học Tây Nguyên",
    "Tây Nguyên University",
    "Tay Nguyen University",
    "Đại học Tây Nguyên",
    "dai hoc tay nguyen"
  ]);
  await formatUni("Đại học Đà Lạt", [
    "The University of Da Lat",
    "Trường Đại học Đà Lạt",
    "Trường Đại Học Đà Lạt",
    "Dalat University",
    "Đại học Đà Lạt",
    "Dai Hoc Da Lat"
  ]);
  await formatUni("Đại học Yersin Đà Lạt", ["Trường Đại học Yersin Đà Lạt"]);
  //-------------------------------------------------------------------------------Nam
  await formatUni("Đại học Đại Nam", [
    "Khoa Y Dược trường Đại học Đại Nam",
    'Trường Đại học Đại Nam',
    "Dai Nam university",
    "Đại học Đại Nam",
    "Đại Học Đại Nam",
  ]);
  await formatUni("Đại học Thủ Dầu Một", [
    "Khoa Kinh Tế - Đại học Thủ Dầu Một",
    "Trường Đại học Thủ Dầu Một",
    "Thu Dau Mot University",
    "Đại Học Thủ Dầu Một",
    "Đại học Thủ Dầu Một",
    "Dai Hoc Thu Dau Mot",
    "ĐH Thủ Dầu Một",
    "DH thu dau mot"
  ]);
  await formatUni("Đại học Công nghệ Đồng Nai", [
    'Trường Đại học Công nghệ Đồng Nai dntu',
    "Dong Nai University of Technology",
    "Trường Đại Học Công Nghệ Đồng Nai",
    "Đại học Công nghệ Đồng Nai",
  ]);
  await formatUni("Đại học Công nghệ Miền Đông", [
    "Trường Đại Học Công Nghệ Miền Đông"
  ]);

  await formatUni("Đại học Đồng Nai", [
    "Trường Đại học Đồng Nai",
    "Trường Đại Học Đồng Nai",
    "Dong Nai University",
    "Đại học Đồng Nai",
    "ĐẠI HỌC ĐỒNG NAI"
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
    "Trường Đại Học Lạc Hồng"
  ]);
  await formatUni("Đại học Bà Rịa Vũng Tàu", [
    "BVU - Trường Đại Học Bà Rịa Vũng Tàu",
    "Trường Đại học Bà Rịa - Vũng Tàu"
  ]);

  await formatUni("Đại học Bình Dương", [
    'Đại Học Bình Dương - Cà Mau',
    "Binh Duong University",
    "Đại học Bình Dương",
    "dai hoc binh duong"
  ]);
  await formatUni("Đại học Bạc Liêu", [
    "Bac Lieu University",
    "Đại Học Bạc Liêu"
  ]);
  await formatUni("Đại học Cần Thơ", [
    "Trường Đại học Cần Thơ - Can Tho University",
    "Đại học Cần Thơ - Can Tho University",
    "Đoàn khoa Kinh tế - Đại học Cần Thơ",
    "Dai hoc Can Tho / Đại học Cần Thơ",
    "Đại học Cần Thơ - CTU.VN",
    "Trường Đại học Cần Thơ",
    "Can Tho University",
    "Cần Thơ University",
    "Đại Học Cần Thơ",
    "Đại học Cần Thơ",
    "dai hoc can tho"
  ]);
  await formatUni("Đại học Cửu Long", [
    "Trường Đại Học Cửu Long - Mekong University",
    "Trường Đại học Cửu Long",
    "Mekong University",
    "Đại Học Cửu Long",
    "Đại học Cửu Long"
  ]);

  await formatUni("Đại học Kinh tế - Kỹ thuật Bình Dương", [
    "Trường Đại học Kinh tế - Kỹ thuật Bình Dương",
    "Trường Đại học Kinh tế- Kỹ thuật Bình Dương",
    'Trường Đại Học Kinh Tế Kỹ Thuật Bình Dương',
    "Đại học Kinh tế Kĩ thuật Bình Dương",
    "dai hoc kinh te ky thuat binh duong"
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
    "Dai Hoc Tay Do"
  ]);

  await formatUni("Đại học Tiền Giang", [
    "Trường Đại học Tiền Giang",
    "Tien Giang University",
    "dai hoc tien giang",
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
    "Trường Đại Học Trà Vinh",
    "Tra Vinh University"
  ]);
  await formatUni("Đại học Xây dựng Miền Tây", [
    "Trường Đại Học Xây Dựng Miền Tây - MienTay Construction University"
  ]);

  await formatUni("Đại học Võ Trường Toản", [
    "Trường Đại học Võ Trường Toản",
    "Đại Học Võ Trường Toản"
  ]);
  //////////////////-------------------------------------------------------------------------------Hanoi
  await formatUni("Đại học Bách khoa Hà Nội", [
    "ĐẠI HỌC BÁCH KHOA HÀ NỘI - HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY",
    "Hanoi University of Science and Technology",
    "Trường Đại học Bách Khoa Hà Nội",
    "Trường Đại học Bách khoa Hà Nội",
    "Trường Đại Học Bách Khoa Hà Nội",
    "Hanoi University of Technology",
    "Hanoi University of Science",
    "Đại học Bách Khoa Hà Nội",
    "Đại Học Bách Khoa Hà Nội"
  ]);
  await formatUni("Đại học Công đoàn Việt Nam", [
    "Đại học Công đoàn Việt Nam",
    "Đại Học Công Đoàn Việt Nam",
    "Trường Đại Học Công Đoàn",
    "Đại học Công Đoàn",
    "Vietnam Trade Union University",
    "Trade Union University"
  ]);

  await formatUni("Đại học Công nghệ Đông Á", ["Đại Học Công Nghệ Đông Á"]);

  await formatUni("Đại học Công nghiệp Hà Nội", [
    "Đại Học Công Nghiệp Hà Nội (HaUI)",
    "Trường Đại học Công nghiệp Hà Nội",
    "Trường Đại Học Công nghiệp Hà Nội",
    "Hanoi University of Industry",
    "Dai Hoc Cong Nghiep Ha Noi",
    "Đại Học Công Nghiệp Hà Nôi",
    "Đại Học Công Nghiệp Hà Nội",
    'đại học công nghiệp hà nội',
  ]);

  await formatUni("Đại học Công nghiệp Dệt May Hà Nội", [
    "Trường Đại học Công nghiệp Dệt May Hà Nội",
    "Đại Học Công Nghiệp Dệt May Hà Nội"
  ]);
  await formatUni("Đại học Công nghiệp Việt - Hung", [
    "Đại Học Công Nghiệp Việt - Hung",
    "Đại học Công nghiệp Việt - Hung"
  ]);

  await formatUni("Đại học Dược Hà Nội", ["Trường Đại học Dược Hà Nội"]);
  await formatUni("Đại học Điện lực", [
    "Trường Đại Học Điện Lực Hà Nội - Electric Power University",
    "Trường Đại Học Điện Lực - EPU",
    "Electric Power University",
    "Đại Học Điện Lực Hà Nội",
    "Trường Đại học Điện lực",
    "Đại học điện lực Hà nội",
    "Đại học Điện lực - EPU",
    "Đại Học Điện Lực"
  ]);
  await formatUni("Đại học Đông Đô", [
    "Dong Do University - Đại Học Đông Đô",
    "Dong Do University of Science and Technology(Trường Đại Học Đông Đô)"
  ]);

  await formatUni("Đại học FPT Hà Nội", ["Đại học FPT Hà Nội"]);
  await formatUni("Đại học Giao thông Vận tải Hà Nội", [
    "Đại Học Giao Thông Vận Tải Hà Nội"
  ]);
  await formatUni("Đại học Hà Nội", [
    "Hanoi University (HANU)",
    "Trường Đại học Hà Nội",
    "Hanoi University",
    'Đại học Hà Nội',
    "Đại Học Hà Nội"
  ]);

  await formatUni("Đại học Hàng hải Việt Nam", [
    "Trường Đại học Hàng hải Việt Nam",
    "VIMARU Vietnam Maritime University",
    "Vietnam Maritime University",
    "Trường Đại học Hàng hải Việt Nam - VMU",
    "Đại Học Hàng Hải",
    "Trường Đại học Hàng Hải Việt Nam",
    "ĐẠI HỌC HÀNG HẢI VIỆT NAM - VietNam Maritime University"
  ]);

  await formatUni("Đại học Khoa học và Công nghệ Hà Nội", [
    "Đại Học Khoa Học và Công Nghệ Hà Nội - USTH"
  ]);

  await formatUni("Đại học Kiểm sát Hà Nội", [
    "Trường Đại Học Kiểm Sát Hà Nội",
    "Đại học Kiểm Sát Hà Nội"
  ]);

  await formatUni("Đại học Kiến trúc Hà Nội", [
    "Hanoi Architectural University (HAU)",
    "Trường Đại học Kiến trúc Hà Nội",
    'Trường Đại Học Kiến Trúc Hà Nội',
    "Hanoi Architectural University",
    "Đại Học Kiến Trúc Hà Nội",
  ]);

  await formatUni("Đại học Kinh doanh và Công nghệ Hà Nội", [
    "Hanoi university of Business and Technology (HUBT)",
    "Hanoi University of Business and Technology - HUBT",
    "Trường Đại học Kinh doanh và Công nghệ Hà Nội",
    "TRƯỜNG ĐẠI HỌC KINH DOANH VÀ CÔNG NGHỆ HÀ NỘI",
    "Đại Học Kinh Doanh Và Công Nghệ Hà Nội - HUBT",
    "Đại Học Kinh Doanh và Công Nghệ Hà Nội",
    "Đại Học Kinh Doanh Và Công Nghệ Hà Nội",
    "Dai hoc Kinh doanh va Cong nghe Ha Noi",
    "ĐH Kinh Doanh Và Công Nghệ Hà Nội",
    "ĐH Kinh Doanh Công Nghệ Hà Nội",
    "HUBT"
  ]);
  await formatUni("Đại học Kinh tế - Kỹ thuật Công nghiệp", [
    "Đại Học Kinh Tế - Kỹ Thuật Công Nghiệp - UNETI",
    "Đại học Kinh Tế-Kỹ thuật Công nghiệp ( UNETI)",
    "Trường Đại học Kinh tế - Kỹ thuật Công nghiệp",
    "Đại Học Kinh Tế Kĩ Thuật Công Nghiệp (UNETI)",
    "Đại Học Kinh Tế Kỹ Thuật Công Nghiệp",
    'Đại Học Kinh tế kĩ thuật công nghiệp',
    "UNETI"
  ]);
  await formatUni("Đại học Kinh tế Quốc dân", [
    "Diễn Đàn Sinh Viên đại học Kinh Tế Quốc Dân",
    "National Economics University of Vietnam",
    "Chương trình Cử nhân Quốc tế (IBD@NEU)",
    'Trường Đại Học Kinh Tế Quốc Dân Hà Nội',
    "Trường Đại học Kinh tế Quốc Dân - NEU",
    "Tuyển sinh Đại Học Kinh Tế Quốc Dân",
    "NEU - National Economic University",
    "Trường Đại học Kinh tế Quốc dân",
    "Trường Đại Học Kinh Tế Quốc Dân",
    "Trường Đại học Kinh Tế Quốc Dân",
    "NEU - Đại học Kinh tế Quốc dân",
    "Đại học Kinh Tế Quốc Dân - NEU",
    "National Economics University",
    "Dai Hoc Kinh Te Quoc Dan",
    "Đại học Kinh tế Quốc dân",
    "ĐH Kinh tế quốc dân"
  ]);

  await formatUni("Đại học Lâm nghiệp", [
    "Trường Đại Học Lâm Nghiệp - Cơ Sở 2",
    "Phân hiệu trường Đại học Lâm nghiệp",
    "Đại Học Lâm Nghiệp Việt Nam",
    "Đại Học Lâm Nghiệp Cơ Sơ II",
    "Trường Đại học Lâm nghiệp",
    "Đại học Lâm Nghiệp",
    "Đại Học Lâm Nghiệp",
    "VFU-ĐH Lâm Nghiệp"
  ]);
  await formatUni("Đại học Lao động Xã hội", [
    "Đại Học Lao Động - Xã Hội",
    "Trường Đại học Lao động - Xã hội",
    "ULSA - University of Laboratory and Social Affairs",
    "University of Labour and Social Affairs"
  ]);

  await formatUni("Đại học Luật Hà Nội", [
    "Đại học Luật Hà Nội",
    "Trường Đại học Luật Hà Nội",
    "Hanoi Law University",
    "Hanoi Law University"
  ]);
  await formatUni("Đại học Mỏ - Địa chất", [
    "Giao tiếp tiếng Anh với người nước ngoài University of Mining and Geology",
    "Trường Đại học Mỏ - Địa chất",
    "Đại học Mỏ Địa Chất Hà Nội",
    "Đại học Mỏ - Địa chất"
  ]);

  await formatUni("Đại học Mở Hà Nội", [
    "k17 interior class-design faculty-Ha Noi Open University",
    "Viện Đại Học Mở Hà Nội - Ha Noi Open University - HOU",
    "Faculty Of Tourism - Hanoi Open University",
    "Đại học Mở Hà Nội - Hanoi Open University",
    "Khoa Du lịch - Đại học Mở Hà Nội",
    "Open University - Postgraduate",
    "Khoa Luật - Đại Học Mở Hà Nội",
    "Trường Viện Đại học Mở Hà Nội",
    "Đại Học Mở Hà Nội - HOU",
    "Hà Nội Open University",
    "Hà Nội Open University",
    "Viện Đại Học Mở Hà Nội",
    "Viện Đại học Mở Hà Nội",
    "vien dai hoc mo ha noi",
    "Hanoi Open University",
    "The Open University"
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
    "Trường Đại học Ngoại thương - Trung tâm Feretco",
    "Foreign Trade University FTU - ĐH Ngoại Thương",
    "Đại học Ngoại thương Liên kết Đào tạo Quốc tế",
    "Foreign Trade University of Vietnam",
    "Foreign Trade University - FTU",
    "Foreign Trade University HCMC",
    "Đại Học Ngoại Thương Hà Nội",
    "Trường Đại học Ngoại thương",
    "Đại học Ngoại Thương - FTU",
    "Foreign Trade University",
    "Đại Học Ngoại Thương"
  ]);

  await formatUni("Đại học Nguyễn Trãi", ["Đại học Nguyễn Trãi"]);

  await formatUni("Đại học Nội vụ Hà Nội", [
    "Phân hiệu Trường Đại học Nội vụ Hà Nội tại TP. Hồ Chí Minh",
    "Đại học Nội vụ Hà Nội - Hanoi University of Home Affairs",
    "Hanoi University of Home Affairs",
    "Đại Học Nội Vụ Hà Nội_Cơ sở 2",
    "Trường Đại học Nội vụ Hà Nội",
    "Đại học Nội Vụ Hà Nội"
  ]);

  await formatUni("Đại học Nông nghiệp Hà Nội", [
    "Đại Học Nông Nghiệp Hà Nội"
  ]);

  
  await formatUni("Đại học Phòng cháy chữa cháy", [
    "Trường Đại học Phòng Cháy Chữa Cháy"
  ]);

  await formatUni("Đại học Phương Đông", [
    "Đại học Phương Đông - Phuong Dong University",
    "Đại Học Dân Lập Phương Đông",
    "Phuong Dong University",
    "Đại học Phương Đông - Phuong Dong University"
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
    "Hanoi Academy of Theatre & Cinema"
  ]);

  await formatUni("Đại học Sư phạm Hà Nội 2", [
    "Trường Đại học Sư phạm Hà Nội 2",
    "Trường Đại Học Sư Phạm Hà Nội 2",
    "Hanoi Pedagogical University 2",
    "Đại học Sư phạm Hà Nội 2"
  ]);
  await formatUni("Đại học Sư phạm Hà Nội", [
    "Hanoi National University of Education (HNUE)",
    "Hanoi National University of Education",
    "Trường Đại học Sư Phạm Hà Nội",
    "Trường Đại học Sư phạm Hà Nội",
    "Trường Đại Học Sư Phạm Hà Nội",
    'ĐẠI HỌC SƯ PHẠM HÀ NỘI',
    "Đại học Sư phạm Hà Nội I",
    "Đại học Sư phạm Hà Nội 1",
    "Đại Học Sư Phạm Hà Nội",
    "Đại học sư phạm Hà Nội",
    "Dai Hoc Su Pham Ha Noi"
  ]);
  await formatUni("Đại học Sư phạm Nghệ thuật Trung ương", [
    "Đại học Sư phạm Nghệ thuật Trung ương - NUAE",
    "Đại Học Sư Phạm Nghệ Thuật Trung Ương",
    'Đại học Sư phạm Nghệ Thuật TW',
  ]);

  await formatUni("Đại học Sư phạm Thể dục Thể thao Hà Nội", [
    "Đại Học Sư Phạm Thể Dục Thể Thao Hà Nội"
  ]);

  await formatUni("Đại học Tài chính Ngân hàng Hà Nội", [
    "Trường Đại học Tài chính - Ngân hàng Hà Nội",
    "Đại học Tài chính - Ngân hàng Hà Nội",
    'Đại Học Tài Chính Ngân Hàng Hà Nội',
    "Đại Học Tài Chính Ngân Hàng"
  ]);
  await formatUni("Đại học Tài nguyên và Môi trường Hà Nội", [
    "Đại học Tài nguyên và Môi trường Hà Nội - HUNRE",
    "Đại học Tài nguyên và Môi trường Hà Nội"
  ]);

  await formatUni("Đại học Thành Đô", [
    "Trường Đại học Thành Đô",
    "Đại Học Thành Đô",
    'Đại học Thành Đô'
  ]);
  await formatUni("Đại học Thăng Long", [
    "Trường Đại học Thăng Long",
    "Thang Long University",
    "Thăng Long University",
    "Đại học Thăng Long"
  ]);
  await formatUni("Đại học Thủ đô Hà Nội", [
    "Trường Đại học Thủ đô Hà Nội",
    "Đại Học Thủ Đô Hà Nội"
  ]);
  await formatUni("Đại học Thương mại", [
    "Viện Hợp tác Quốc tế - Trường Đại học Thương mại",
    "Vietnam University of Commerce",
    "Vietnam Commercial University",
    "Trường Đại học Thương mại",
    "Đại học Thương Mại",
    "Đại Học Thương Mại",
    "ĐH Thương Mại"
  ]);
  await formatUni("Đại học Thủy lợi", [
    "ĐẠI HỌC THUỶ LỢI HÀ NỘI - Water Resources University",
    "Water Resources University",
    "Sinh viên Đại học Thủy Lợi",
    "Cơ sở 2 - Đại học Thủy Lợi",
    "Đại học Thủy Lợi Hà Nội",
    "Trường Đại học Thủy lợi"
  ]);

  await formatUni("Đại học Văn hóa Hà Nội", [
    "Trường Đại học Văn hóa Hà Nội_Hanoi University Of Culture",
    "Trường Đại học Văn hóa Hà Nội",
    "Đại Học Văn Hóa Hà Nội - HUC",
    "Hanoi University Of Culture",
    "Đại học Văn Hóa Hà Nội.",
    "Đại Học Văn Hóa Hà Nội",
    "Đại học Văn hóa Hà Nội",
    "ĐH Văn Hóa"
  ]);
  await formatUni("Đại học Văn hoá Nghệ thuật Quân đội", [
    "Đại Học Văn hoá - Nghệ thuật quân đội, Tp.HCM",
    "Trường Đại học Văn hóa - Nghệ thuật Quân đội",
    "Trường Đại học Văn hóa Nghệ thuật Quân đội",
    "Trường Đại Học Văn Hóa Nghệ Thuật Quân Đội",
    "Đại học Văn hoá - Nghệ thuật quân đội cs2",
    "University of Military Art and Culture",
    "Đại Học Văn Hoá Nghệ Thuật Quân Đội",
    "Đại học Văn hóa Nghệ thuật Quân đội",
    'Đại học Văn hóa Nghệ thuật Quân Đội',
    "ĐHVH Nghệ Thuật Quân Đội",
  ]);

  await formatUni("Đại học Xây dựng", [
    "National University Of Civil Engineering",
    "Đại Học Xây Dựng Hà Nội",
    'Trường Đại học Xây dựng',
    "Đại học Xây dựng"
  ]);
  await formatUni("Đại học Y Hà Nội", [
    "Đại học Y Hà Nội",
    "Đại Học Y Hà Nội",
    "Đại Học Y Dược Hà Nội",
    "Trường Đại Học Y Dược Hà Nội",
    "Trường Đại học Y Hà Nội",
    "ĐẠI HỌC Y HÀ NỘI (Hanoi Medical University)",
    "Hanoi Medical University"
  ]);

  await formatUni("Đại học Y tế Công cộng", ["Trường Đại học Y tế công cộng"]);

  //----------------------------------------------------------------------------------DHQGHN

  await formatUni("Đại học Công nghệ - Đại học Quốc gia Hà Nội", [
    "Trường Đại học Công Nghệ - Đại học Quốc Gia Hà Nội (UET - VNU)",
    "Đại học Công nghệ - Đại học Quốc gia Hà Nội"
  ]);
  await formatUni("Đại học Khoa học Tự nhiên - Đại học Quốc gia Hà Nội", [
    "Sinh viên Trường Đại Học Khoa Học Tự Nhiên - Đại Học Quốc Gia Hà Nội",
    "Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia Hà Nội",
    "Đại Học Khoa Học Tự Nhiên - ĐHQG Hà Nội",
    "Đại học Khoa Học Tự Nhiên (ĐHQGHN)"
  ]);

  await formatUni("Đại học Kinh tế - Đại học Quốc gia Hà Nội", [
    "Tuổi trẻ Đại học Kinh tế - ĐHQG HN",
    "Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội",
    "University of Economics and Business - VNU"
  ]);
  await formatUni("Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội", [
    "VNU Hanoi University of Languages and International Studies",
    "Trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội",
    "Trường Đại học Ngoại ngữ, Đại học Quốc gia Hà Nội",
    "University of Languages and International Studies",
    "Trường Đại Học Ngoại Ngữ, Đại Học Quốc Gia Hà Nội"
  ]);
  await formatUni(
    "Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc gia Hà Nội",
    [
      "Viện Đào tạo Báo chí và Truyền thông, Trường ĐH KH Xã hội & Nhân Văn Hà Nội",
      "Trường Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc gia Hà Nội",
      "Trường Đại học Khoa học Xã hội và Nhân văn, Đại học Quốc gia Hà Nội",
      "Trường Đại học Khoa học Xã hội và Nhân văn Hà Nội"
    ]
  );
  await formatUni("Khoa Luật - Đại học Quốc gia Hà Nội", [
    "Khoa Luật - Đại học Quốc gia Hà Nội"
  ]);
  await formatUni("Khoa Quốc tế - Đại học Quốc gia Hà Nội", [
    "Khoa Quốc tế - Đại học Quốc gia Hà Nội (IS-VNU)"
  ]);

  // //-------------------------------------------------------------------------------HCM

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
    "RMIT University",
    "Đại học RMIT"
  ]);
  await formatUni("Đại học Tài chính Quản trị Kinh doanh", [
    "Đại học Tài chính - Quản trị kinh doanh",
    "Đại học Tài chính - Quản trị kinh doanh",
    "Đại Học Tài Chính Quản Trị Kinh Doanh"
  ]);
  await formatUni("Đại học Lao động Xã hội - Cơ sở 2", [
    "Trường Đại Học Lao Động - Xã Hội CSII",
    "Trường Đại học Lao động - Xã hội (CSII)"
  ]);

  await formatUni("Đại học Quốc tế Sài Gòn", [
    "Trường Đại học Quốc tế Sài Gòn - The Saigon International  University",
    "Đại Học Quốc Tế Sài Gòn - SIU"
  ]);
  await formatUni("Đại học Thể dục Thể thao TP.HCM", [
    "Trường Đại Học TDTT TP.HCM - Trung tâm huấn luyện thể thao Quốc Gia.",
    "Trường Đại Học Thể Dục Thể Thao Thành phố Hồ Chí Minh",
    "Trường Đại học Thể dục Thể thao TP.HCM"
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

  await formatUni("Đại học An ninh Nhân dân TP.HCM", [
    "Đại học An ninh nhân dân TP.Hồ Chí Minh",
    "Trường Đại học An ninh nhân dân"
  ]);
  await formatUni("Đại học Cảnh sát Nhân dân TP.HCM", [
    "Đại Học Cảnh Sát Nhân Dân - T48 Bộ Công An",
    "Trường Đại Học Cảnh Sát Nhân Dân",
    "Đại Học Cảnh Sát Nhân Dân TPHCM",
    "Đại Học Cảnh Sát Nhân Dân"
  ]);
  // // //--------------------------------------------------DAI HOC TUTU

  await formatUni("Đại học Công nghệ Sài Gòn", [
    "Đại học Công Nghệ Sài Gòn - SaiGon Technology University",
    "STU - Trường Đại Học Công Nghệ Sài Gòn",
    "Saigon Technology University"
  ]);
  await formatUni("Đại học Công nghệ TP.HCM", [
    "Viện Đào Tạo Quốc Tế Hutech - Lincoln University",
    "Hutech - Đại Học Công Nghệ Thành Phố Hồ Chí Minh",
    "HUTECH - Chương trình Đại học chuẩn Nhật Bản",
    "HUTECH - Trường Đại học Công nghệ TP.HCM",
    "HUTECH - University of Technology",
    "HUTECH - Đại học Công nghệ Tp.HCM",
    "Trường ĐH Công Nghệ TP.HCM",
    "Hutech University",
    "HUTECH University",
    "Sinh viên Hutech"
  ]);

  await formatUni("Đại học FPT TP.HCM", [
    "FPT University",
    "FPT University HCM",
    "Đại học FPT",
    "Đại Học FPT",
    "FPT University Vietnam"
  ]);
  await formatUni("Đại học Hoa Sen", [
    "Ngành Marketing - Đại Học Hoa Sen",
    "Hoa Sen University",
    "Lotus University",
    "Đại Học Hoa Sen",
    "Đại học Hoa Sen"
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
    "Khoa Du lịch và Việt Nam học - Trường Đại học Nguyễn Tất Thành",
    "NIIE (NTT Institute of International Education)",
    "Khoa Dược - Trường Đại học Nguyễn Tất Thành",
    "Khoa Dược Trường Đại Học Nguyễn Tất Thành",
    "Đại Học Nguyễn Tất Thành Cơ Sở Quận 12",
    "Trường Đại học Nguyễn Tất Thành NTTU",
    "NTTU - Đại học Nguyễn Tất Thành",
    "NTTU - Đại học Nguyễn Tất Thành",
    "Dai hoc nguyen tat thanh",
    "Đại học Nguyễn Tất Thành",
    "Đại Học Nguyễn Tất Thành",
    "dh nguyen tat thanh"
  ]);
  await formatUni("Đại học Quốc tế Hồng Bàng", [
    "Hồng Bàng International University ( Đại Học Quốc Tế Hồng Bàng )",
    "Hong Bang University International (HBUI) - Đại học Quốc tế Hồng Bàng",
    "Trường Đại học Quốc tế Hồng Bàng - HIU",
    "Hồng Bàng International University",
    "Trường Đại học Quốc tế Hồng Bàng",
    "HIU - Đại học Quốc tế Hồng Bàng",
    "Đại Học Quốc Tế Hồng Bàng",
    "Dai Hoc Quoc te Hong Bang",
    "Hong Bang University"
  ]);

  await formatUni("Đại học Tài nguyên và Môi trường TP.HCM", [
    "Trường Đại học Tài nguyên và Môi trường Tp. Hồ Chí Minh",
    "Đại học Tài nguyên và Môi trường TP.HCM",
    "Đại Học Tài Nguyên Và Môi Trường TP.HCM",
    "Đại Học Tài Nguyên và Môi Trường TPHCM"
  ]);

  await formatUni("Đại học Văn Hiến", [
    "Đại học Văn Hiến",
    "Văn Hiến University",
    "Trường Đại Học Văn Hiến TP.HCM",
    "Trường Đại học Văn Hiến",
    "Van Hien University"
  ]);
  await formatUni("Đại học Văn Lang", [
    "Faculty of Public Relations and Communication, Van Lang University",
    "Vanlang University (VLU) - Đại học Dân lập Văn Lang",
    "Van Lang University, HCMC",
    "Đại Học Dân Lập Văn Lang",
    "Trường Đại học Văn Lang",
    "Trường Đại học Văn Lang",
    "Văn Lang University"
  ]);
  await formatUni("Đại học Văn hóa TP.HCM", [
    "Trường Đại học Văn hóa Thành phố Hồ Chí Minh",
    "Ho Chi Minh City University of Culture",
    "Đại Học Văn Hóa TP. Hồ Chí Minh",
    "Đại học Văn Hóa TP HCM - VHS",
    "Đại học Văn Hoá TP.HCM",
    "Đại học Văn hóa Tp.HCM",
    "Đại Học Văn Hóa",
    "Đại học Văn Hóa"
  ]);

  // //
  // //
  // //
  // //--------------------------------------------------DAI HOC CONG
  await formatUni("Đại học Công nghiệp TP.HCM", [
    "Đại Học Công Nghiệp TPHCM _ Industrial University of Ho Chi Minh City - IUH",
    "Khoa Ngoại Ngữ - Trường Đại học Công Nghiệp TP.HCM",
    "Trường Đại học Công nghiệp Thành phố Hồ Chí Minh",
    "Industrial University of Ho Chi Minh City (IUH)",
    "IUH - Trường Đại học Công Nghiệp Tp Hồ Chí Minh",
    "Ho Chi Minh City University of Industry - HUI",
    "ĐH Công nghiệp TP.HCM - IUH - Đào tạo quốc tế",
    "Industrial University of Ho Chi Minh City",
    "IUH - Trường Đại học Công nghiệp TP.HCM",
    "Ho Chi Minh University Of Industry",
    "Trường Đại Học Công Nghiệp TP-HCM",
    "Trường Đại học Công Nghiệp TP.HCM",
    "Đại Học Công Nghiệp TP.HCM (HUI)",
    "Trường Đại Học Công Nghiệp TPHCM",
    "HCM University of Industry",
    "Đại Học Công Nghiệp Tp.HCM",
    "Đại Học Công Nghiệp TP.HCM",
    "Dh Cong Nghiep Tphcm",
    "ĐH Công Nghiệp TPHCM",
    "IUH"
  ]);

  await formatUni("Đại học Công nghiệp Thực phẩm TP.HCM", [
    "Trường Đại học Công nghiệp Thực phẩm Thành phố Hồ Chí Minh",
    "Ho Chi Minh City University of Food Industry",
    "HUFI - Đại học Công nghiệp Thực phẩm Tp.HCM",
    "Đại học Công nghiệp Thực phẩm TP.HCM",
    "DAI HOC CONG NGHIEP THUC PHAM TP.HCM",
    "Trường Đại Học Công Nghệ Thực Phẩm",
    "DH Cong nghiep thuc pham TPHCM",
    "HUFI"
  ]);

  await formatUni("Đại học Giao thông vận tải TP.HCM", [
    "Đại học Giao thông Vận Tải - University of Transport and Communications",
    "Hội Quán Sinh Viên Đại Học Giao Thông Vận Tải Phân hiệu tại TP.HCM",
    "Trường Đại học Giao thông Vận tải - Phân hiệu tại TP.HCM - UTC2",
    "Trường Đại học Giao thông vận tải Thành phố Hồ Chí Minh",
    "University of Transport and Communications",
    "Trường Đại học Giao thông vận tải TP.HCM",
    "Trường Đại Học Giao Thông Vận Tải TP.HCM",
    "Trường Đại Học Giao Thông Vận Tải",
    "Trường Đại học Giao thông Vận tải",
    "Đại học Giao thông vận tải TpHCM",
    "HCM City University of Transport",
    "Đại Học Giao Thông Vận Tải",
    "Đại học GTVT HCM"
  ]);
  await formatUni("Đại học Kiến trúc TP.HCM", [
    "Trường Đại học Kiến trúc Thành phố Hồ Chí Minh",
    "Trường Đại Học Kiến Trúc Thành phố Hồ Chí Minh",
    "Ho Chi Minh City University of Architecture",
    "University of Architecture, Hochiminh city",
    "Đại học Kiến trúc Thành phố Hồ Chí Minh",
    "Đại Học Kiến Trúc Thành Phố Hồ Chí Minh",
    "Đoàn-Hội Trường Đại Học Kiến Trúc TPHCM",
    "Đại học Kiến trúc TP.Hồ Chí Minh",
    "Đại Học Kiến Trúc TP Hồ Chí Minh",
    "Trường Đại Học Kiến Trúc TP.HCM",
    "HCMC University of Architecture",
    "University Of Architecture HCMC",
    "Đại học Kiến trúc Tp.HCM",
    "Đại học Kiến trúc TPHCM"
  ]);
  await formatUni("Đại học Kinh tế TP.HCM", [
    "Trường Đại học Kinh tế Thành phố Hồ Chí Minh (University of...",
    "University of Economics, Ho Chi Minh City, Vietnam",
    "University of Economics Ho Chi Minh city - UEH",
    "University of Economics, Hochiminh City - UEH",
    "Trường Đại học Kinh tế Thành phố Hồ Chí Minh",
    "Đại học Kinh tế Thành phố Hồ Chí Minh - UEH",
    "Trường Đại học Kinh tế TP Hồ Chí Minh - UEH",
    "University of Economics, Ho Chi Minh City",
    "Trường ĐH Kinh tế TP. Hồ Chí Minh - UEH",
    "Trường Đại Học Kinh Tế TP Hồ Chí Minh",
    "UEH - Đại học Kinh tế TP. Hồ Chí Minh",
    "University of Economics, HCMC",
    "University of Economics, HCMC",
    "Trường Đại học Kinh tế TP.HCM",
    "Trường Đại Học Kinh Tế TP.HCM",
    "Tài liệu Đại Học Kinh tế HCM",
    "University of Economics HCMC",
    "Đại học Kinh tế Tp.HCM- UEH",
    "Đại học Kinh tế TP HCM UEH",
    "Đại học kinh tế TP.HCM",
    "Đại học Kinh tế TPHCM",
    "Đại Học Kinh Tế TPHCM",
    "dai hoc kinh te tphcm",
    "ĐH Kinh Tế TP.HCM",
    "Dai Hoc Kinh Te",
    "UEH"
  ]);
  await formatUni("Đại học Luật TP.HCM", [
    "Cựu sinh viên Đại học Luật thành phố Hồ Chí Minh",
    "Đại Học Luật Tp Hồ Chí Minh Cơ Sở Bình Triệu",
    "Trường Đại học Luật Thành phố Hồ Chí Minh",
    "Trường Đại học Luật Tp. Hồ Chí Minh",
    "Ho Chi Minh City University of Law",
    "Đại học Luật Thành phố Hồ Chí Minh",
    "Đại học Luật TP. Hồ Chí Minh",
    "Trường Đại Học Luật TP.HCM",
    "Đại Học Luật Tp.HCM",
    "Đại học Luật Tp.HCM"
  ]);
  await formatUni("Đại học Mở TP. HCM", [
    "Trường Đại Học Mở TP. HCM | Ho Chi Minh City Open University",
    "Đại học Mở Tp. HCM - HoChiMinh Open University",
    "Trường Đại học Mở TP. HCM - Tư vấn tuyển sinh",
    "Ho Chi Minh City Open University - HCMOU",
    "Trường Đại học Mở Thành phố Hồ Chí Minh",
    "Trường Đại học Mở Tp. Hồ Chí Minh",
    "Đại Học Mở Thành Phố Hồ Chí Minh",
    "Ho Chi Minh City Open University",
    "Đại học Mở Thành phố Hồ Chí Minh",
    "OU - Trường Đại học Mở TP.HCM",
    "Đại Học Mở ! Khoa Bát Đĩa.",
    "Trường Đại học Mở TP. HCM",
    "Trường Đại Học Mở TP.HCM",
    "Trường Đại Học Mở TPHCM",
    "Open University TPHCM",
    "OU - Open University",
    "Đại Học Mở Tp.HCM",
    "Đại học Mở TPHCM",
    "Đại Học Mở Tphcm",
    "Đại học Mở"
  ]);
  await formatUni("Đại học Ngân hàng TP. HCM", [
    "Banking University of Ho Chi Minh City (Trường Đại học Ngân...",
    "Trường Đại Học Ngân Hàng Thành Phố Hồ Chí Minh",
    "Trường Đại học Ngân hàng Thành phố Hồ Chí Minh",
    "Trường Đại học Ngân hàng TP. Hồ Chí Minh - BUH",
    "BUH-Banking University of Ho Chi Minh City",
    "Banking University of Ho Chi Minh City",
    "Đại học Ngân hàng Tp.HCM",
    "Đại Học Ngân Hàng TP.HCM",
    "Đại Học Ngân Hàng TPHCM",
    "Banking University HCMC",
    "Banking University"
  ]);
  await formatUni("Đại học Ngoại ngữ - Tin học TP.HCM", [
    "Ho Chi Minh City University of Foreign Languages and Information Technology",
    "HCMC University of Foreign Languages and Information Technology (HUFLIT)",
    "Trường Đại học Ngoại ngữ Tin học Thành phố Hồ Chí Minh",
    "Trường Đại học Ngoại ngữ - Tin học TP. HCM - HUFLIT",
    "Đại học Ngoại ngữ Tin học Thành phố Hồ Chí Minh",
    "Đại học ngoại ngữ tin học TPHCM ( HUFLIT)",
    "HUFLIT",
    "Huflit"
  ]);

  await formatUni("Đại học Ngoại thương Cơ sở 2", [
    "Trường Đại học Ngoại thương cơ sở 2, Thành phố Hồ Chí Minh",
    "Đại học Ngoại Thương CS2, TP.HCM - FTU",
    "Trường Đại học Ngoại Thương cơ sở 2",
    "Trường Đại Học Ngoại Thương CS2",
    "Foreign Trade University HCMC",
    "Đại học Ngoại thương Tp.HCM"
  ]);

  await formatUni("Đại học Nông Lâm TP.HCM", [
    "Trường Đại học Nông Lâm Thành phố Hồ Chí Minh",
    "Nong Lam University in Ho Chi Minh city",
    "Đại học Nông Lâm Thành phố Hồ Chí Minh",
    "Trường Đại Học Nông Lâm TP.HCM",
    "Đại Học Nông Lâm TPHCM",
    "Dai hoc Nong Lam TPHCM",
    "Nong Lam University",
    "ĐH Nông Lâm TP.HCM"
  ]);
  await formatUni("Đại học Sài Gòn", [
    "Đại học Sài Gòn ( Saigon University - SGU )",
    "SGU - Trường Đại học Sài Gòn",
    "Đại học Sài Gòn - Tuyển sinh",
    "Trường Đại học Sài Gòn",
    "Sai Gon University",
    "Saigon University",
    "Đại học Sài Gòn",
    "Đại Học Sài Gòn",
    "dai hoc sai gon",
    "ĐH Sài Gòn",
    "DH Sai Gon"
  ]);
  await formatUni("Đại học Sư phạm TP.HCM", [
    "Khoa Tiếng Nhật Trường Đại Học Sư Phạm TP Hồ Chí Minh【ホーチミン市師範大学日本語学部】",
    "Đại học sư phạm TP.HCM - TUYỂN GIA SƯ, GIÁO VIÊN",
    "Ho Chi Minh City University of Pedagogy (HCMUP)",
    "Trường Đại học Sư phạm TP. Hồ Chí Minh - HCMUE",
    "Trường Đại học Sư phạm Thành phố Hồ Chí Minh.",
    "Trường Đại học Sư phạm Thành phố Hồ Chí Minh",
    "Ho Chi Minh City University of Education",
    "Trường Đại học Sư Phạm TP. Hồ Chí Minh",
    "Đại học Sư phạm Thành phố Hồ Chí Minh",
    "Trường Đại học Sư phạm TP.HCM - HCMUE",
    "Đại Học Sư Phạm TP Hồ Chí MInh",
    "Trường Đại Học Sư Phạm Tphcm",
    "HCMC University of Pedagogy",
    "Đại học Sư phạm Tp.HCM",
    "Dai hoc Su Pham TPHCM",
    "Đại học sư phạm TPHCM"
  ]);
  await formatUni("Đại học Sư phạm Kỹ thuật TP.HCM", [
    "University of Technology and Education - Đại học Sư phạm Kỹ thuật Tp.HCM",
    "Ho Chi Minh City University of Technology and Education",
    "Trường Đại học Sư phạm Kỹ thuật Thành phố Hồ Chí Minh",
    "Trường Đại Học Sư Phạm Kỹ Thuật Thành Phố Hồ Chí Minh",
    "Đại Học Sư Phạm Kỹ Thuật Thành Phố Hồ Chí Minh",
    "Trường Đại Học Sư Phạm Kĩ Thuật Thành Phố Hcm",
    "Hcmute - Đại Học Sư Phạm Kỹ Thuật Tp.HCM",
    "Trường Đại Học Sư Phạm Kỹ Thuật Tp.HCM",
    "Trường Đại học Sư Phạm Kĩ Thuật Tp.HCM",
    "University of Technical Education",
    "Đại học Sư phạm Kỹ thuật Tp.HCM",
    "Đại Học Sư Phạm Kỹ Thuật TP.HCM",
    "Đại Học Sư Phạm Kĩ Thuật TP.HCM",
    "HCMUTE - SPKT"
  ]);

  await formatUni("Đại học Tôn Đức Thắng", [
    "Đại học Tôn Đức Thắng - Phân hiệu Nha Trang",
    "Ban Cao Đẳng - Trường ĐH Tôn Đức Thắng",
    "Ton Duc Thang University - Vietnam",
    "Sinh viên Đại Học Tôn Đức Thắng",
    "Trường Đại học Tôn Đức Thắng",
    "Trường Đại Học Tôn Đức Thắng",
    "Tôn Đức Thắng University",
    "Ton Duc Thang University",
    "Đại học Tôn Đức Thắng",
    "DH Ton Duc Thang"
  ]);
  await formatUni("Đại học Tài chính - Marketing", [
    "Sinh viên Trường Đại học Tài Chính - Marketing",
    "The University of Finance and Marketing (UFM)",
    "Trường Đại học Tài chính - Marketing",
    "University of Finance and Marketing",
    "University of Finace and Marketing",
    "University of Finance & Marketing",
    "ĐẠI HỌC TÀI CHÍNH - MARKETING",
    "Đại học Tài chính - Marketing",
    "Đại Học Tài Chính-Marketing",
    "ĐH Tài chính - Marketing",
    "DH Tai Chinh Marketing"
  ]);
  await formatUni("Đại học Y khoa Phạm Ngọc Thạch", [
    "Trường Đại học Y khoa Phạm Ngọc Thạch",
    "Đại học Y khoa Phạm Ngọc Thạch",
    "Pham Ngoc Thach University of Medicine"
  ]);

  await formatUni("Đại học Y Dược TP.HCM", [
    "Trường Đại Học Y Dược TPHCM - Khoa kỹ thuật y học-Điều dưỡng",
    "Ho Chi Minh City Medicine and Pharmacy University",
    "Đại học Y dược Thành phố Hồ Chí Minh",
    "Đại học Y Dược Thành phố Hồ Chí Minh",
    "Cổng Thông Tin Đại học Y dược TPHCM",
    "Khoa Dược - Đại học Y Dược TP.HCM",
    "Đại Học Y Dược TP Hồ Chí Minh",
    "Trường Đại học Y Dược TP.HCM",
    "Đại học Y Dược TP. HCM",
    "Đại học Y dược TP. HCM",
    "Đại học Y Dược TP.HCM",
    "Đại Học Y Dược Tp.HCM",
    "Đại Học Y Dược TP.HCM"
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
    "HCMC University of Technology - Đại học Bách Khoa Thành phố Hồ Chí Minh",
    "Trường Đại học Bách khoa, Đại học Quốc gia Thành phố Hồ Chí Minh",
    "Khoa Kỹ thuật Xây dựng - Đại học Bách Khoa Tp HCM",
    "Khoa Quản Lý Công Nghiệp - Đại Học Bách Khoa",
    "Đại học Bách Khoa - Đại học Quốc gia Tp.HCM",
    "Ho Chi Minh City University of Technology",
    "Ho Chi Minh city University of Technology",
    "Đại học Bách khoa Thành phố Hồ Chí Minh",
    "Trường Đại học Bách Khoa Tp.HCM (HCMUT)",
    "Trường Đại Học Bách Khoa - ĐHQG Tp.HCM",
    "Trường Đại học Bách Khoa Tp.HCM",
    "HCM University of Technology",
    "Đại học Bách Khoa TP. HCM",
    "Admission HCMUT Bach khoa",
    "Đại học Bách Khoa TP.HCM",
    "Đại Học Bách Khoa TP.HCM",
    "Đại học Bách Khoa TPHCM",
    "Đại Học Bách Khoa TPHCM",
    "QUỐC TẾ BÁCH KHOA HCM"
  ]);

  await formatUni("Đại học Khoa học Tự nhiên - Đại học Quốc gia TP.HCM", [
    "Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia Thành phố Hồ Chí Minh",
    "Trường Đại học Khoa học Tự nhiên - Đại học Quốc gia Tp. Hồ Chí Minh",
    "Trường Đại Học Khoa Học Tự Nhiên (Đại Học Quốc Gia Tp.hcm)",
    "Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia TP.HCM",
    "Trường Đại Học Khoa Học Tự Nhiên - Đại Học Quốc Gia TPHCM",
    "Trường Đại Học Khoa Học Tự Nhiên Thành Phố Hồ Chí Minh",
    "Ho Chi Minh City University of Natural Sciences",
    "Trường Đại Học Khoa Học Tự Nhiên - ĐHQG TP.HCM",
    "Đại học Khoa học Tự nhiên-ĐH Quốc Gia TPHCM",
    "Đại Học Khoa Học Tự Nhiên Tp. Hồ Chí Minh",
    "Ho Chi Minh City University of Science",
    "Trường Đại Học Khoa Học Tự Nhiên",
    "Đại Học Khoa Học Tự Nhiên TP HCM",
    "University of Natural Sciences",
    "Đại Học Khoa Học Tự Nhiên",
    "University of Science",
    "Khoa Học Tự Nhiên"
  ]);
  await formatUni(
    "Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc gia TP.HCM",
    [
      "Trường Đại học Khoa học Xã hội và Nhân văn, Đại học Quốc gia Thành phố Hồ Chí Minh",
      "Khoa Báo Chí & truyền thông - Trường Đại học Khoa học Xã hội và Nhân văn",
      "Ho Chi Minh City University of Social Sciences and Humanities HCM USSH",
      "Trường Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc gia Tp. HCM",
      "Đại Học Khoa Học Xã Hội Và Nhân Văn - Đại Học Quốc Gia TP. HCM",
      "Trường Đại Học Khoa Học Xã Hội Và Nhân Văn _Đh Quốc Gia TP.HCM",
      "Ho Chi Minh City University of Social Sciences and Humanities",
      "Đại học Khoa học Xã hội và Nhân văn Thành phố Hồ Chí Minh",
      "Trường Đại học Khoa học xã hội và Nhân văn - ĐHQG TP.HCM",
      "HCM University of Social Sciences and Humanities (USSH)",
      "Đại học Khoa học Xã hội và Nhân văn - TP. Hồ Chí Minh",
      "USSH - University of Social Sciences and Humanities",
      "University of Social Sciences and Humanities - VNU",
      "Đại học Khoa học Xã hội và Nhân văn TP Hồ Chí Minh",
      "Trường Đại học Khoa học Xã hội và Nhân văn Tp.HCM",
      "Trường Đại học Khoa học Xã hội và Nhân văn TpHCM",
      "University of Social Sciences and Humanities",
      "Thư viện Đại học Khoa học Xã hội và Nhân văn",
      "University Of Social Science And Humanities",
      "Trường Đại học Khoa học Xã hội và Nhân văn",
      "Đại học khoa học xã hội và nhân văn",
      "Đại học Khoa học Xã hội và Nhân văn",
      "Đại Học Khoa Học Xã Hội và Nhân văn",
      "Đại học KHXH&NV Tp. HCM",
      "ĐH KHXH&NV"
    ]
  );
  await formatUni("Đại học Kinh tế - Luật - Đại học Quốc gia TP.HCM", [
    "University of Economics and Law - Vietnam National University HCMC",
    "Trường Đại học Kinh tế - Luật, Đại học Quốc gia TP. Hồ Chí Minh",
    "Đại Học Kinh Tế - Luật ( ĐH Quốc Gia Tp.HCM )",
    "Đại Học Kinh Tế - Luật - ĐHQG Tp.HCM",
    "UEL - Trường Đại học Kinh tế - Luật",
    "Đại học Kinh tế - Luật ĐHQG TPHCM",
    "University of Economics and Law",
    "Trường Đại học Kinh tế - Luật",
    "Trường ĐH Kinh tế - Luật",
    "Đại Học Kinh Tế - Luật"
  ]);
  await formatUni("Đại học Quốc tế - Đại học Quốc gia TP.HCM", [
    "Trường Đại Học Quốc Tế - Đại học Quốc gia TP. HCM",
    "Ho Chi Minh City International University",
    "International University (IU-VNU)",
    "Trường Đại học Quốc tế, Đại học Quốc gia Thành phố Hồ Chí Minh",
    "School of Business, International University - VNU HCMC",
    "International University (HCMIU) - Vietnam National University",
    "International University - Vietnam National University HCMC",
    "International University - Vietnam National University",
    "International University - VNU"
  ]);
  await formatUni("Đại học Công nghệ Thông tin - Đại học Quốc gia TP.HCM", [
    "Trường Đại học Công nghệ Thông tin - Đại học Quốc gia TP.HCM",
    "Trường Đại học Công nghệ Thông tin, Đại học Quốc gia Thành phố Hồ Chí Minh",
    "University of Information Technology (UIT)",
    "Ho Chi Minh City University of Information Technology"
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
