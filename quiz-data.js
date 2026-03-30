const quizData = [
  {
    q: "Chủ tịch Hồ Chí Minh xuất thân trong một gia đình",
    a: "A",
    o: ["nhà nho yêu nước.", "tiểu tư sản trí thức.", "bần cố nông.", "tư sản dân tộc."],
    r: {
      A: "Đúng. Hồ Chí Minh sinh ra trong gia đình nhà nho yêu nước. Thân phụ là Nguyễn Sinh Sắc, một nhà nho đỗ Phó bảng, có tư tưởng thương dân, yêu nước; môi trường gia đình góp phần nuôi dưỡng chí hướng cứu nước của Người.",
      B: "Sai. 'Tiểu tư sản trí thức' là khái niệm xã hội hiện đại hơn, không phản ánh đúng thành phần gia đình Hồ Chí Minh lúc bấy giờ. Gia đình Người nổi bật ở truyền thống Nho học và lòng yêu nước.",
      C: "Sai. 'Bần cố nông' dùng để chỉ tầng lớp nông dân rất nghèo. Gia đình Hồ Chí Minh tuy không giàu nhưng không thuộc thành phần này, mà là gia đình nhà nho có học vấn.",
      D: "Sai. 'Tư sản dân tộc' là tầng lớp có hoạt động kinh doanh theo hướng tư bản dân tộc. Gia đình Hồ Chí Minh không thuộc nhóm xã hội này."
    }
  },
  {
    q: "Năm 1908, Nguyễn Tất Thành có hoạt động nào sau đây?",
    a: "B",
    o: ["Ra Lời kêu gọi toàn quốc kháng chiến.", "Tham gia phong trào chống thuế ở Huế.", "Tham gia Hội Liên hiệp thuộc địa ở Pa-ri.", "Bắt đầu hành trình tìm đường cứu nước."],
    r: {
      A: "Sai. 'Lời kêu gọi toàn quốc kháng chiến' thuộc năm 1946, khi Chủ tịch Hồ Chí Minh đứng đầu Nhà nước Việt Nam Dân chủ Cộng hòa.",
      B: "Đúng. Năm 1908, Nguyễn Tất Thành tham gia phong trào chống thuế ở Trung Kì, gắn với Huế. Điều này cho thấy Người sớm quan tâm đến đời sống nhân dân và con đường cứu nước.",
      C: "Sai. Nguyễn Ái Quốc tham gia Hội Liên hiệp thuộc địa ở Pa-ri vào năm 1921, sau khi đã hoạt động tại Pháp.",
      D: "Sai. Nguyễn Tất Thành bắt đầu hành trình tìm đường cứu nước vào năm 1911, khi rời Bến Nhà Rồng."
    }
  },
  {
    q: "Nội dung nào sau đây là nhân tố thúc đẩy Nguyễn Ái Quốc đi sang phương Tây tìm đường cứu nước (1911)?",
    a: "B",
    o: ["Thất bại bước đầu của phong trào Đông Du.", "Những đòi hỏi bức thiết của toàn dân tộc.", "Sự phát triển của hệ thống xã hội chủ nghĩa.", "Ách thống trị tàn bạo của chế độ phát xít."],
    r: {
      A: "Sai. Thất bại của phong trào Đông Du có tác động nhất định, nhưng đó chỉ là một biểu hiện cụ thể, chưa phải nguyên nhân khái quát và sâu xa nhất.",
      B: "Đúng. Việc đất nước mất độc lập, nhân dân bị áp bức, phong trào cứu nước lâm vào khủng hoảng đã đặt ra yêu cầu cấp bách phải tìm một con đường mới cho dân tộc.",
      C: "Sai. Năm 1911 chưa có sự phát triển của cả một hệ thống xã hội chủ nghĩa như về sau, nên không thể là nhân tố thúc đẩy trực tiếp.",
      D: "Sai. Chế độ phát xít chưa trở thành lực lượng thống trị vào năm 1911, nên không phù hợp với bối cảnh lịch sử câu hỏi."
    }
  },
  {
    q: "Trước khi Nguyễn Tất Thành ra đi tìm đường cứu nước (1911), tình hình Việt Nam có đặc điểm nổi bật nào sau đây?",
    a: "C",
    o: ["Mâu thuẫn giữa công nhân với địa chủ phong kiến và tay sai là cơ bản.", "Thực dân Pháp câu kết với tay sai mở đầu cuộc chiến tranh xâm lược.", "Phong trào chống Pháp và tay sai diễn ra sôi nổi nhưng đều bị thất bại.", "Khuynh hướng cứu nước phong kiến và dân chủ tư sản cùng xuất hiện."],
    r: {
      A: "Sai. Trước 1911, mâu thuẫn cơ bản là giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược và tay sai, chứ chưa phải mâu thuẫn riêng giữa công nhân với địa chủ.",
      B: "Sai. Thực dân Pháp mở đầu xâm lược Việt Nam từ năm 1858, không phải đặc điểm nổi bật riêng của giai đoạn ngay trước 1911.",
      C: "Đúng. Trước khi Nguyễn Tất Thành ra đi, các phong trào yêu nước diễn ra liên tiếp nhưng đều thất bại, khiến cách mạng Việt Nam rơi vào khủng hoảng về đường lối cứu nước.",
      D: "Sai. Đây là một đặc điểm có thật, nhưng chưa phải nét nổi bật nhất. Nổi bật hơn cả là các khuynh hướng ấy đều chưa đưa được dân tộc đến thắng lợi."
    }
  },
  {
    q: "Nội dung nào sau đây là một trong những yếu tố cơ bản tác động đến quyết định ra đi tìm đường cứu nước (1911) của Nguyễn Tất Thành?",
    a: "B",
    o: ["Phong trào yêu nước chống Pháp theo khuynh hướng tư sản đã chấm dứt.", "Đất nước bị mất độc lập, sự nghiệp cứu nước rơi vào khủng hoảng, bế tắc.", "Phong trào đấu tranh chống Pháp và phong kiến tay sai đã ngừng hoạt động.", "Nhân dân phản đối cuộc đấu tranh chống Pháp của các sĩ phu phong kiến."],
    r: {
      A: "Sai. Khuynh hướng tư sản chưa chấm dứt hẳn vào năm 1911; hơn nữa, đây không phải nguyên nhân bao quát nhất dẫn đến quyết định ra đi.",
      B: "Đúng. Việt Nam đã mất độc lập, còn các con đường cứu nước trước đó đều lâm vào bế tắc. Chính thực trạng ấy thôi thúc Nguyễn Tất Thành phải đi tìm một con đường mới.",
      C: "Sai. Phong trào chống Pháp không hề ngừng hoạt động; ngược lại vẫn diễn ra sôi nổi, chỉ là chưa thành công.",
      D: "Sai. Nhân dân không phản đối việc chống Pháp; họ rất yêu nước, chỉ có điều các con đường đấu tranh cũ chưa hiệu quả."
    }
  },
  {
    q: "Từ năm 1890 đến năm 1911, Nguyễn Tất Thành có hoạt động tiêu biểu nào sau đây?",
    a: "A",
    o: ["Dạy học ở Trường Dục Thanh (Phan Thiết).", "Hoạt động yêu nước ở Pháp, Liên Xô.", "Trình bày tham luận ở Hội nghị Véc-xai (Pháp).", "Mở lớp đào tạo cán bộ ở Trung Quốc."],
    r: {
      A: "Đúng. Trước khi ra đi tìm đường cứu nước, Nguyễn Tất Thành từng dạy học ở Trường Dục Thanh tại Phan Thiết. Đây là hoạt động tiêu biểu trong giai đoạn sống và hoạt động ở trong nước.",
      B: "Sai. Hoạt động ở Pháp và Liên Xô diễn ra chủ yếu sau năm 1911, khi Người đã rời Việt Nam.",
      C: "Sai. Hoạt động gắn với Hội nghị Véc-xai thuộc năm 1919, sau giai đoạn câu hỏi nêu ra.",
      D: "Sai. Mở lớp đào tạo cán bộ ở Trung Quốc là hoạt động của Nguyễn Ái Quốc trong những năm 1925–1927."
    }
  },
  {
    q: "Trong những năm 1911 - 1919, Nguyễn Tất Thành có hoạt động tiêu biểu nào sau đây?",
    a: "A",
    o: ["Tìm hiểu thực tiễn các nước trên thế giới.", "Sáng lập Đảng Cộng sản Việt Nam.", "Tham gia sáng lập Đảng Cộng sản Pháp.", "Thành lập Thanh niên Cộng sản đoàn."],
    r: {
      A: "Đúng. Từ 1911 đến 1919, Nguyễn Tất Thành bôn ba qua nhiều châu lục để lao động, học hỏi và khảo sát thực tế, từ đó tìm hiểu bản chất của chủ nghĩa thực dân và con đường giải phóng dân tộc.",
      B: "Sai. Đảng Cộng sản Việt Nam được thành lập năm 1930, không thuộc giai đoạn 1911–1919.",
      C: "Sai. Nguyễn Ái Quốc tham gia sáng lập Đảng Cộng sản Pháp vào cuối năm 1920.",
      D: "Sai. Phương án này không gắn với hoạt động tiêu biểu của Nguyễn Tất Thành trong giai đoạn 1911–1919."
    }
  },
  {
    q: "Trong những năm 1920 - 1930, hoạt động yêu nước và cách mạng của Nguyễn Ái Quốc - Hồ Chí Minh không có sự kiện nào sau đây?",
    a: "C",
    o: ["Xác định con đường cứu nước theo khuynh hướng cách mạng vô sản.", "Lựa chọn con đường cứu nước theo khuynh hướng cách mạng vô sản.", "Trở về nước và trực tiếp lãnh đạo cuộc vận động giải phóng dân tộc.", "Chuẩn bị các điều kiện cho việc thành lập Đảng Cộng sản Việt Nam."],
    r: {
      A: "Sai vì đây không phải đáp án cần chọn. Trong giai đoạn 1920–1930, Nguyễn Ái Quốc đã xác định con đường cứu nước theo khuynh hướng vô sản.",
      B: "Sai vì đây không phải đáp án cần chọn. Việc lựa chọn con đường cách mạng vô sản diễn ra từ năm 1920 và là dấu mốc rất quan trọng của giai đoạn này.",
      C: "Đúng. Nguyễn Ái Quốc chưa trở về nước để trực tiếp lãnh đạo phong trào giải phóng dân tộc trong những năm 1920–1930; việc này diễn ra từ đầu năm 1941.",
      D: "Sai vì đây không phải đáp án cần chọn. Trong giai đoạn 1920–1930, Người đã tích cực chuẩn bị về tư tưởng, chính trị và tổ chức cho sự ra đời của Đảng."
    }
  },
  {
    q: "Trong những năm kháng chiến chống thực dân Pháp (1945 - 1954), Chủ tịch Hồ Chí Minh có vai trò nổi bật nào sau đây?",
    a: "A",
    o: ["Hoạch định đường lối xây dựng và bảo vệ chế độ mới.", "Đề ra kế hoạch Tổng tiến công và nổi dậy ở Việt Bắc.", "Chủ trì Đại hội đại biểu toàn quốc lần thứ III của Đảng.", "Trực tiếp chỉ đạo xây dựng chủ nghĩa xã hội ở miền Bắc."],
    r: {
      A: "Đúng. Trong giai đoạn 1945–1954, Hồ Chí Minh cùng Trung ương Đảng lãnh đạo nhân dân vừa kháng chiến vừa kiến quốc, xây dựng và bảo vệ chính quyền cách mạng non trẻ.",
      B: "Sai. Cách diễn đạt này không phản ánh đúng một vai trò tiêu biểu, nổi bật và chuẩn xác gắn với Chủ tịch Hồ Chí Minh trong giai đoạn chống Pháp.",
      C: "Sai. Đại hội đại biểu toàn quốc lần thứ III của Đảng diễn ra năm 1960, thuộc thời kì chống Mĩ và xây dựng CNXH ở miền Bắc.",
      D: "Sai. Việc trực tiếp chỉ đạo xây dựng chủ nghĩa xã hội ở miền Bắc là nhiệm vụ nổi bật sau năm 1954, không phải trong toàn bộ giai đoạn 1945–1954."
    }
  },
  {
    q: "Nguyễn Ái Quốc tìm thấy con đường cứu nước cho dân tộc Việt Nam khi đang hoạt động ở quốc gia nào sau đây?",
    a: "C",
    o: ["Anh.", "Liên Xô.", "Pháp.", "Trung Quốc."],
    r: {
      A: "Sai. Ở Anh, Nguyễn Tất Thành chủ yếu lao động, học hỏi và tiếp tục quan sát xã hội tư bản, nhưng chưa phải nơi Người tìm ra con đường cứu nước.",
      B: "Sai. Liên Xô là nơi Nguyễn Ái Quốc tiếp tục học tập và hoạt động cách mạng quốc tế sau khi đã xác định con đường cứu nước.",
      C: "Đúng. Tại Pháp, đặc biệt sau khi đọc Sơ thảo Luận cương của Lênin năm 1920, Nguyễn Ái Quốc đã tìm ra con đường cứu nước đúng đắn cho dân tộc Việt Nam.",
      D: "Sai. Trung Quốc là nơi Người hoạt động để truyền bá lí luận, đào tạo cán bộ và chuẩn bị thành lập Đảng, chứ không phải nơi đầu tiên tìm ra con đường cứu nước."
    }
  },
  {
    q: "Nội dung nào sau đây không đúng về yếu tố gia đình ảnh hưởng đến cuộc đời và sự nghiệp cách mạng của Hồ Chí Minh?",
    a: "A",
    o: ["Nguyễn Sinh Sắc rút ra bài học về sự thất bại của con đường dân chủ tư sản.", "Truyền thống yêu nước và hiếu học của quê hương luôn được gia đình nuôi dưỡng.", "Thân mẫu của Hồ Chí Minh xuất thân trong một nhà nho yêu nước, sống chan hòa.", "Thân phụ của Hồ Chí Minh là một người thầy mẫu mực trong dạy chữ và dạy người."],
    r: {
      A: "Đúng. Đây là nhận định không đúng. Nguyễn Sinh Sắc là nhà nho yêu nước, gần gũi nhân dân, nhưng không thể quy kết một cách máy móc rằng ông rút ra bài học về sự thất bại của con đường dân chủ tư sản theo nghĩa hiện đại.",
      B: "Sai vì đây không phải đáp án cần chọn. Gia đình và quê hương Nghệ An thực sự đã nuôi dưỡng truyền thống yêu nước, hiếu học cho Hồ Chí Minh.",
      C: "Sai vì đây không phải đáp án cần chọn. Thân mẫu của Hồ Chí Minh là bà Hoàng Thị Loan, người phụ nữ đức hạnh, chịu thương chịu khó, xuất thân trong môi trường có truyền thống Nho học.",
      D: "Sai vì đây không phải đáp án cần chọn. Thân phụ Nguyễn Sinh Sắc là người có học vấn, nhân cách và ảnh hưởng lớn đến việc hình thành nhân sinh quan của Hồ Chí Minh."
    }
  },
  {
    q: "Cuộc hành trình tìm đường cứu nước của Nguyễn Ái Quốc đã kết thúc khi",
    a: "C",
    o: ["tham gia thành lập Hội Liên hiệp thuộc địa ở Pa-ri (1921).", "tham dự và sáng lập Đảng Cộng sản Pháp (12/1920).", "ủng hộ Quốc tế III và trở thành người cộng sản Việt Nam đầu tiên (12/1920).", "đọc Sơ thảo Luận cương của Lê-nin về vấn đề dân tộc và thuộc địa (7/1920)."],
    r: {
      A: "Sai. Việc tham gia thành lập Hội Liên hiệp thuộc địa năm 1921 diễn ra sau khi Nguyễn Ái Quốc đã cơ bản xác định được con đường cứu nước.",
      B: "Sai. Đây là một dấu mốc rất quan trọng, nhưng đáp án đầy đủ và chính xác hơn phải nhấn mạnh việc Người ủng hộ Quốc tế III và trở thành người cộng sản Việt Nam đầu tiên.",
      C: "Đúng. Tháng 12/1920, khi tán thành Quốc tế III và tham gia sáng lập Đảng Cộng sản Pháp, Nguyễn Ái Quốc đã hoàn tất bước chuyển từ người yêu nước thành người cộng sản, tức là kết thúc hành trình tìm đường cứu nước.",
      D: "Sai. Việc đọc Luận cương của Lênin là bước giúp Người tìm thấy ánh sáng về nhận thức, nhưng đến tháng 12/1920 sự lựa chọn mới được khẳng định dứt khoát về lập trường chính trị."
    }
  },
  {
    q: "Nội dung nào sau đây không phải là hoạt động của Nguyễn Ái Quốc tại Trung Quốc?",
    a: "D",
    o: ["Mở lớp huấn luyện đào tạo cán bộ ở Quảng Châu.", "Thành lập Hội Việt Nam Cách mạng Thanh niên.", "Xuất bản tác phẩm Đường Kách mệnh.", "Tham dự Hội nghị Quốc tế Nông dân."],
    r: {
      A: "Sai vì đây không phải đáp án cần chọn. Nguyễn Ái Quốc đã mở nhiều lớp huấn luyện chính trị để đào tạo cán bộ cách mạng ở Quảng Châu.",
      B: "Sai vì đây không phải đáp án cần chọn. Năm 1925, Nguyễn Ái Quốc thành lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu.",
      C: "Sai vì đây không phải đáp án cần chọn. 'Đường Kách mệnh' gắn với các bài giảng và hoạt động huấn luyện của Nguyễn Ái Quốc ở Trung Quốc.",
      D: "Đúng. Hội nghị Quốc tế Nông dân là hoạt động gắn với thời gian Nguyễn Ái Quốc hoạt động ở Liên Xô, không phải tại Trung Quốc."
    }
  },
  {
    q: "Quá trình phân hóa của Hội Việt Nam Cách mạng Thanh niên đã dẫn đến sự thành lập của tổ chức cộng sản nào trong năm 1929?",
    a: "A",
    o: ["Đông Dương Cộng sản đảng, An Nam Cộng sản đảng.", "An Nam Cộng sản đảng, Việt Nam Quốc dân đảng.", "Đông Dương Cộng sản đảng, Đông Dương Cộng sản liên đoàn.", "Đông Dương Cộng sản liên đoàn, An Nam Cộng sản đảng."],
    r: {
      A: "Đúng. Sự phân hóa trong Hội Việt Nam Cách mạng Thanh niên đã trực tiếp dẫn đến sự ra đời của Đông Dương Cộng sản đảng và An Nam Cộng sản đảng trong năm 1929.",
      B: "Sai. Việt Nam Quốc dân đảng không phải sản phẩm của sự phân hóa trong Hội Việt Nam Cách mạng Thanh niên.",
      C: "Sai. Đông Dương Cộng sản liên đoàn chủ yếu gắn với sự chuyển hóa của Tân Việt Cách mạng đảng, không trực tiếp từ Hội Thanh niên.",
      D: "Sai. Phương án này ghép một tổ chức xuất phát từ Tân Việt với một tổ chức tách ra từ Hội Thanh niên nên không chính xác."
    }
  },
  {
    q: "Nguyễn Ái Quốc chủ trì Hội nghị thành lập Đảng Cộng sản Việt Nam (1930) khi đang hoạt động ở",
    a: "D",
    o: ["Anh.", "Liên Xô.", "Pháp.", "Trung Quốc."],
    r: {
      A: "Sai. Anh là nơi Nguyễn Tất Thành từng lao động và học hỏi trước đó, không phải nơi chủ trì Hội nghị thành lập Đảng năm 1930.",
      B: "Sai. Liên Xô là nơi Nguyễn Ái Quốc học tập và hoạt động quốc tế trong một giai đoạn khác.",
      C: "Sai. Pháp là nơi Người tìm ra con đường cứu nước, nhưng không phải địa bàn gắn với Hội nghị thành lập Đảng năm 1930.",
      D: "Đúng. Hội nghị hợp nhất các tổ chức cộng sản đầu năm 1930 diễn ra tại Hương Cảng, gắn với địa bàn hoạt động cách mạng thuộc Trung Quốc lúc bấy giờ."
    }
  },
  {
    q: "Những vấn đề cơ bản về chiến lược và sách lược của cách mạng Việt Nam được Nguyễn Ái Quốc hoạch định hoàn chỉnh trong tài liệu nào sau đây?",
    a: "A",
    o: ["Cương lĩnh chính trị đầu tiên của Đảng (1930).", "Tác phẩm Đường Kách mệnh (1927).", "Luận cương chính trị của Đảng (10-1930).", "Cuốn Bản án chế độ thực dân Pháp (1925)."],
    r: {
      A: "Đúng. Cương lĩnh chính trị đầu tiên của Đảng do Nguyễn Ái Quốc khởi thảo đã xác định tương đối đầy đủ mục tiêu, nhiệm vụ, lực lượng và phương hướng phát triển của cách mạng Việt Nam.",
      B: "Sai. 'Đường Kách mệnh' rất quan trọng trong truyền bá lí luận cách mạng, nhưng chưa phải văn kiện hoàn chỉnh nhất về chiến lược và sách lược.",
      C: "Sai. Luận cương chính trị tháng 10-1930 không phải tài liệu do Nguyễn Ái Quốc hoạch định.",
      D: "Sai. 'Bản án chế độ thực dân Pháp' chủ yếu là tác phẩm tố cáo tội ác chủ nghĩa thực dân, không phải văn kiện xác định hoàn chỉnh chiến lược cách mạng Việt Nam."
    }
  },
  {
    q: "Sự kiện nào sau đây ghi nhận cuộc hành trình tìm đường cứu nước của Nguyễn Tất Thành - Nguyễn Ái Quốc cho dân tộc Việt Nam đã kết thúc?",
    a: "C",
    o: ["Gia nhập tổ chức Hội những người Việt Nam yêu nước tại Pháp (1917).", "Tham dự Đại hội thành lập Quốc tế III (Quốc tế Cộng sản) năm 1919.", "Lựa chọn con đường cứu nước theo khuynh hướng cách mạng vô sản (1920).", "Gửi tới Hội nghị Véc-xai (1919) bản Yêu sách của nhân dân An Nam."],
    r: {
      A: "Sai. Đây chỉ là một bước hoạt động yêu nước ở Pháp, chưa phải dấu mốc kết thúc hành trình tìm đường cứu nước.",
      B: "Sai. Mốc này không phản ánh đúng sự kiện quyết định cho việc Nguyễn Ái Quốc tìm ra con đường cứu nước.",
      C: "Đúng. Cuộc hành trình tìm đường cứu nước được xem là kết thúc khi Nguyễn Ái Quốc lựa chọn con đường cách mạng vô sản vào năm 1920.",
      D: "Sai. Bản Yêu sách của nhân dân An Nam cho thấy bước trưởng thành về chính trị, nhưng chưa phải lúc Người xác định dứt khoát con đường cứu nước."
    }
  },
  {
    q: "Trong thời gian hoạt động ở Liên Xô (1923 - 1924), Nguyễn Ái Quốc đã tham dự hội nghị",
    a: "A",
    o: ["Hội nghị Quốc tế Nông dân.", "Hội nghị thành lập Đảng Cộng sản Pháp.", "Hội nghị thành lập Đảng Thanh niên.", "Hội nghị thành lập Đảng Cộng sản."],
    r: {
      A: "Đúng. Trong thời gian hoạt động ở Liên Xô, Nguyễn Ái Quốc đã tham dự Hội nghị Quốc tế Nông dân, qua đó mở rộng thêm nhận thức về phong trào cách mạng thế giới.",
      B: "Sai. Hội nghị thành lập Đảng Cộng sản Pháp gắn với hoạt động của Nguyễn Ái Quốc ở Pháp vào năm 1920.",
      C: "Sai. Không có sự kiện lịch sử tiêu biểu nào như cách nêu này gắn với Nguyễn Ái Quốc trong giai đoạn 1923–1924 ở Liên Xô.",
      D: "Sai. Phương án quá chung chung và không phản ánh đúng một hội nghị cụ thể mà Nguyễn Ái Quốc tham dự trong giai đoạn này."
    }
  },
  {
    q: "Yếu tố nào sau đây quyết định đến việc Nguyễn Tất Thành ra đi tìm đường cứu nước?",
    a: "A",
    o: ["Đất nước bị khủng hoảng, bế tắc về con đường cứu nước.", "Những truyền thống của gia đình và quê hương xứ Nghệ.", "Mong muốn tìm hiểu, khám phá lịch sử văn minh thế giới.", "Chế độ phong kiến không còn phù hợp với dân tộc."],
    r: {
      A: "Đúng. Yếu tố quyết định là cách mạng Việt Nam đầu thế kỉ XX lâm vào khủng hoảng đường lối cứu nước, đòi hỏi phải tìm ra con đường mới để giải phóng dân tộc.",
      B: "Sai. Truyền thống gia đình và quê hương có ảnh hưởng lớn, nhưng đó là yếu tố quan trọng chứ chưa phải yếu tố quyết định nhất.",
      C: "Sai. Khát vọng hiểu biết thế giới có thật, nhưng chỉ là yếu tố hỗ trợ; cốt lõi vẫn là cứu nước, cứu dân.",
      D: "Sai. Sự lỗi thời của chế độ phong kiến là một phần của bối cảnh, nhưng không trực tiếp và đầy đủ bằng việc đất nước bế tắc về đường lối cứu nước."
    }
  },
  {
    q: "Giữa năm 1911, Nguyễn Tất Thành quyết định chọn hướng đi nào sau đây để mở đầu cuộc hành trình tìm đường cứu nước cho dân tộc Việt Nam?",
    a: "B",
    o: ["Hướng về phương Đông.", "Hướng sang phương Tây.", "Hướng về phương Nam.", "Hướng về phương Bắc."],
    r: {
      A: "Sai. Hướng đi về phương Đông đã được một số sĩ phu yêu nước đi trước lựa chọn, nhưng Nguyễn Tất Thành không đi theo lối đó.",
      B: "Đúng. Giữa năm 1911, Nguyễn Tất Thành quyết định sang phương Tây để trực tiếp tìm hiểu các nước tư bản, đế quốc và khảo sát con đường cứu nước mới cho dân tộc.",
      C: "Sai. 'Phương Nam' không phải cách xác định đúng hướng đi lịch sử của Nguyễn Tất Thành khi bắt đầu hành trình cứu nước.",
      D: "Sai. 'Phương Bắc' cũng không phản ánh lựa chọn thực tế của Nguyễn Tất Thành năm 1911."
    }
  }
];
