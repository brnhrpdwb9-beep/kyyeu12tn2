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
  },
  
  {
    q: "\"Ở đâu chủ nghĩa thực dân đế quốc cũng tàn bạo, ở đâu những người lao động cũng bị áp bức cùng cực\" là nhận định của Nguyễn Tất Thành sau khi",
    a: "D",
    o: [
      "thành lập Hội Việt Nam Cách mạng Thanh niên.",
      "tham gia hoạt động trong Đảng Xã hội Pháp.",
      "lựa chọn con đường theo khuynh hướng vô sản.",
      "tìm hiểu và qua thực tiễn hoạt động ở nhiều nước."
    ],
    r: {
      A: "Sai. Thành lập Hội Việt Nam Cách mạng Thanh niên là hoạt động năm 1925 ở Quảng Châu, diễn ra sau khi Nguyễn Ái Quốc đã có nhận thức khá đầy đủ về chủ nghĩa thực dân.",
      B: "Sai. Tham gia Đảng Xã hội Pháp là một bước quan trọng trong quá trình hoạt động ở Pháp, nhưng nhận định này được hình thành chủ yếu từ quá trình quan sát thực tế rộng lớn ở nhiều nước thuộc địa và tư bản.",
      C: "Sai. Việc lựa chọn con đường cách mạng vô sản là kết quả phát triển cao hơn về nhận thức chính trị, còn câu nói này phản ánh kết luận rút ra từ thực tiễn khảo sát thế giới trước đó.",
      D: "Đúng. Sau nhiều năm đi qua nhiều nước, trực tiếp chứng kiến cảnh áp bức ở cả thuộc địa lẫn chính quốc, Nguyễn Tất Thành rút ra kết luận rằng chủ nghĩa thực dân ở đâu cũng tàn bạo, người lao động ở đâu cũng bị bóc lột."
    }
  },
  {
    q: "Những hoạt động yêu nước ban đầu của Nguyễn Tất Thành (1911 - 1919) có ý nghĩa quan trọng nào sau đây?",
    a: "A",
    o: [
      "Đặt cơ sở cho việc lựa chọn con đường cứu nước mới sau này.",
      "Xác lập mối quan hệ của cách mạng Việt Nam với các nước tư bản.",
      "Chuẩn bị điều kiện về tổ chức cho sự ra đời của Đảng Cộng sản.",
      "Đặt cơ sở cho việc xác định cuộc tư sản dân quyền cách mạng."
    ],
    r: {
      A: "Đúng. Giai đoạn 1911–1919 là quá trình Nguyễn Tất Thành bôn ba, khảo sát thực tiễn thế giới, từ đó tích lũy nhận thức và kinh nghiệm để sau này lựa chọn con đường cứu nước đúng đắn.",
      B: "Sai. Hoạt động của Nguyễn Tất Thành không nhằm xác lập quan hệ giữa cách mạng Việt Nam với các nước tư bản, mà chủ yếu để tìm hiểu bản chất của xã hội tư bản và chủ nghĩa thực dân.",
      C: "Sai. Chuẩn bị điều kiện tổ chức cho sự ra đời của Đảng là nhiệm vụ nổi bật của giai đoạn 1925–1930, không phải 1911–1919.",
      D: "Sai. Khái niệm 'tư sản dân quyền cách mạng' gắn với cương lĩnh, luận cương sau này; giai đoạn 1911–1919 mới là bước chuẩn bị nhận thức ban đầu."
    }
  },
  {
    q: "\"Muốn cứu nước và giải phóng dân tộc, không con đường nào khác ngoài con đường cách mạng vô sản\" là quyết định của Nguyễn Ái Quốc khi đọc",
    a: "A",
    o: [
      "Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lê-nin.",
      "báo Đời sống công nhân, báo Nhân đạo và cuốn Bản án chế độ thực dân Pháp.",
      "báo Thanh niên - cơ quan ngôn luận của Hội Việt Nam Cách mạng Thanh niên.",
      "tác phẩm Đường Kách mệnh và các bài viết của Lê-nin đăng trên Tạp chí Thư tín quốc tế"
    ],
    r: {
      A: "Đúng. Khi đọc Sơ thảo Luận cương của Lê-nin về vấn đề dân tộc và thuộc địa năm 1920, Nguyễn Ái Quốc đã tìm thấy con đường giải phóng dân tộc: cách mạng vô sản.",
      B: "Sai. Những tài liệu này có ảnh hưởng đến nhận thức của Nguyễn Ái Quốc, nhưng không phải văn kiện trực tiếp dẫn tới quyết định nổi tiếng về con đường cách mạng vô sản.",
      C: "Sai. Báo Thanh niên là cơ quan tuyên truyền do Nguyễn Ái Quốc lập ra sau khi Người đã xác định con đường cứu nước, không phải nguyên nhân dẫn tới quyết định đó.",
      D: "Sai. Tác phẩm Đường Kách mệnh ra đời năm 1927, muộn hơn nhiều so với thời điểm Nguyễn Ái Quốc đưa ra quyết định lựa chọn con đường cách mạng vô sản."
    }
  },
  {
    q: "Sự kiện nào sau đây đánh dấu Nguyễn Ái Quốc chuyển từ lập trường yêu nước sang lập trường cộng sản?",
    a: "D",
    o: [
      "Ra báo Người cùng khổ, sáng lập Hội Liên hiệp các dân tộc bị áp bức Á Đông (1921).",
      "Dạy học ở Trường Tiểu học Pháp - Việt Đông Ba, Trường Quốc học Huế (1906).",
      "Quyết định dừng chân tại Pháp để bắt đầu hoạt động cách mạng (1917).",
      "Bỏ phiếu tán thành Quốc tế Cộng sản, tham gia sáng lập Đảng Cộng sản Pháp (1920)."
    ],
    r: {
      A: "Sai. Đây là hoạt động sau mốc chuyển biến lập trường. Đến năm 1921, Nguyễn Ái Quốc đã đứng trên lập trường cộng sản.",
      B: "Sai. Đây là hoạt động thời niên thiếu, chưa phản ánh sự chuyển biến từ lập trường yêu nước sang lập trường cộng sản.",
      C: "Sai. Dừng chân ở Pháp chỉ là một bước trong hành trình tìm đường cứu nước, chưa phải dấu mốc xác lập lập trường cộng sản.",
      D: "Đúng. Việc bỏ phiếu tán thành Quốc tế Cộng sản và tham gia sáng lập Đảng Cộng sản Pháp cuối năm 1920 đánh dấu Nguyễn Ái Quốc chuyển hẳn từ người yêu nước thành người cộng sản."
    }
  },
  {
    q: "Trong quá trình chuẩn bị và lãnh đạo Cách mạng tháng Tám năm 1945, nội dung nào sau đây thể hiện vai trò của Nguyễn Ái Quốc trong việc chuẩn bị lực lượng chính trị?",
    a: "C",
    o: [
      "Xây dựng và mở rộng căn cứ địa cách mạng.",
      "Ra Chỉ thị thành lập Khu giải phóng Việt Bắc.",
      "Sáng lập và mở rộng Việt Nam Độc lập Đồng minh.",
      "Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân."
    ],
    r: {
      A: "Sai. Xây dựng căn cứ địa là chuẩn bị về địa bàn, hậu phương và điều kiện vật chất, chưa trực tiếp phản ánh việc chuẩn bị lực lượng chính trị.",
      B: "Sai. Thành lập Khu giải phóng Việt Bắc là bước xây dựng căn cứ và chính quyền cách mạng ở một vùng, không phải biểu hiện tiêu biểu nhất của việc chuẩn bị lực lượng chính trị.",
      C: "Đúng. Việt Nam Độc lập Đồng minh (Việt Minh) là hình thức tập hợp, giác ngộ, đoàn kết quần chúng rộng rãi nhất; việc sáng lập và mở rộng Việt Minh thể hiện rõ vai trò chuẩn bị lực lượng chính trị cho Tổng khởi nghĩa.",
      D: "Sai. Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân là chuẩn bị về lực lượng vũ trang, không phải lực lượng chính trị."
    }
  },
  {
    q: "Hội nghị Ban Chấp hành Trung ương Đảng Cộng sản Đông Dương (5-1941) do Nguyễn Ái Quốc chủ trì xác định nhiệm vụ trực tiếp, trước mắt là",
    a: "D",
    o: [
      "giải phóng giai cấp.",
      "cải cách ruộng đất.",
      "xóa bỏ tàn dư phong kiến.",
      "giải phóng dân tộc."
    ],
    r: {
      A: "Sai. Trong bối cảnh 1941, nhiệm vụ cấp bách nhất không phải là giải phóng giai cấp, mà là giải quyết vấn đề dân tộc đang đặt ra gay gắt.",
      B: "Sai. Cải cách ruộng đất là nhiệm vụ quan trọng nhưng chưa phải nhiệm vụ trực tiếp, trước mắt mà Hội nghị 5-1941 xác định.",
      C: "Sai. Xóa bỏ tàn dư phong kiến thuộc nội dung cách mạng xã hội sâu hơn, không phải nhiệm vụ số một trong bối cảnh đất nước bị phát xít Nhật và thực dân Pháp thống trị.",
      D: "Đúng. Hội nghị Trung ương 8 (5-1941) do Nguyễn Ái Quốc chủ trì đã đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, coi đây là nhiệm vụ trực tiếp, trước mắt của cách mạng Việt Nam."
    }
  },
  {
    q: "Khi Nhật Bản đầu hàng quân Đồng minh (15-8-1945), Hồ Chí Minh và Đảng Cộng sản Đông Dương đã lãnh đạo nhân dân giành chính quyền bằng hình thức nào sau đây?",
    a: "D",
    o: [
      "Sử dụng các lực lượng vũ trang làm nòng cốt trong suốt quá trình khởi nghĩa.",
      "Kết hợp lực lượng ba thứ quân trong tổng tiến công và nổi dậy trên toàn quốc.",
      "Tổng khởi nghĩa trong cả nước trước khi Nhật Bản đầu hàng quân Đồng minh.",
      "Tổng khởi nghĩa trong cả nước trước khi quân Đồng minh vào Đông Dương."
    ],
    r: {
      A: "Sai. Lực lượng vũ trang có vai trò quan trọng nhưng Cách mạng tháng Tám không phải quá trình thuần túy quân sự; đây là cuộc tổng khởi nghĩa của toàn dân với lực lượng chính trị quần chúng là chủ yếu.",
      B: "Sai. Cụm từ 'ba thứ quân' phù hợp hơn với chiến tranh nhân dân sau này, không phản ánh chuẩn xác hình thức giành chính quyền trong tháng Tám 1945.",
      C: "Sai. Nhật đã đầu hàng ngày 15-8-1945 rồi cuộc Tổng khởi nghĩa mới diễn ra; vì vậy không thể nói là khởi nghĩa trước khi Nhật đầu hàng.",
      D: "Đúng. Hồ Chí Minh và Đảng đã kịp thời phát động Tổng khởi nghĩa trên cả nước trong khoảng trống quyền lực sau khi Nhật đầu hàng nhưng trước khi quân Đồng minh vào Đông Dương."
    }
  },
  {
    q: "Trong quá trình lãnh đạo Cách mạng tháng Tám năm 1945, Hồ Chí Minh và Đảng Cộng sản Đông Dương đã",
    a: "A",
    o: [
      "tận dụng thời cơ để đẩy lùi nguy cơ.",
      "kết hợp đấu tranh chính trị và ngoại giao.",
      "tiến hành tổng tiến công và nổi dậy.",
      "tổng khởi nghĩa từ khi Nhật đảo chính Pháp."
    ],
    r: {
      A: "Đúng. Thành công lớn của Hồ Chí Minh và Đảng trong Cách mạng tháng Tám là nhận diện đúng thời cơ sau khi Nhật đầu hàng, nhanh chóng phát động toàn dân nổi dậy, qua đó đẩy lùi các nguy cơ bất lợi cho cách mạng.",
      B: "Sai. Trong Cách mạng tháng Tám, yếu tố quyết định là nắm bắt thời cơ và phát động khởi nghĩa, không phải kết hợp đấu tranh chính trị với ngoại giao như ở các giai đoạn sau.",
      C: "Sai. 'Tổng tiến công và nổi dậy' là khái niệm thường gắn với chiến tranh cách mạng sau này, không phản ánh thật chuẩn hình thức tháng Tám 1945.",
      D: "Sai. Sau khi Nhật đảo chính Pháp ngày 9-3-1945, Đảng mới chuyển hướng mạnh mẽ để chuẩn bị khởi nghĩa từng phần; chưa phát động tổng khởi nghĩa ngay."
    }
  },
  {
    q: "Thành công của Cách mạng tháng Tám năm 1945 ở Việt Nam do Chủ tịch Hồ Chí Minh và Đảng Cộng sản Đông Dương lãnh đạo đã",
    a: "D",
    o: [
      "làm phá sản chiến lược toàn cầu của Mỹ.",
      "xóa bỏ được mọi tàn dư của chế độ phong kiến.",
      "xóa bỏ chủ nghĩa thực dân mới trên thế giới.",
      "khai sinh ra nước Việt Nam Dân chủ Cộng hòa."
    ],
    r: {
      A: "Sai. Năm 1945 chưa có vấn đề 'chiến lược toàn cầu của Mỹ' theo cách hiểu của thời kì Chiến tranh lạnh sau này.",
      B: "Sai. Cách mạng tháng Tám đã lật đổ chế độ phong kiến tồn tại hàng nghìn năm, nhưng không thể nói là xóa bỏ mọi tàn dư phong kiến ngay lập tức.",
      C: "Sai. Cách mạng tháng Tám có ảnh hưởng lớn tới phong trào giải phóng dân tộc thế giới, nhưng không thể nói nó xóa bỏ chủ nghĩa thực dân mới trên toàn thế giới.",
      D: "Đúng. Kết quả trực tiếp, lớn nhất và rõ nhất của Cách mạng tháng Tám là sự ra đời của nước Việt Nam Dân chủ Cộng hòa ngày 2-9-1945."
    }
  },
  {
    q: "Trong việc giải quyết mối quan hệ Việt - Pháp (từ đầu tháng 3 đến trước ngày 19-12-1946), Chủ tịch Hồ Chí Minh và Ban Thường vụ Trung ương Đảng đã",
    a: "A",
    o: [
      "thực hiện chủ trương \"hòa để tiến\".",
      "nhận viện trợ của các nước xã hội chủ nghĩa.",
      "đối đầu quân sự với thực dân Pháp.",
      "từ chối thiết lập quan hệ với phương Tây."
    ],
    r: {
      A: "Đúng. Từ sau Hiệp định Sơ bộ 6-3-1946 đến trước Toàn quốc kháng chiến, Hồ Chí Minh và Đảng thực hiện sách lược 'hòa để tiến', tranh thủ thời gian hòa hoãn để củng cố lực lượng, chuẩn bị cho cuộc kháng chiến lâu dài.",
      B: "Sai. Giai đoạn 1946 Việt Nam chưa thể nhận viện trợ từ các nước xã hội chủ nghĩa như về sau.",
      C: "Sai. Trước 19-12-1946, chủ trương chủ yếu là hòa hoãn, nhân nhượng có nguyên tắc để tránh cùng lúc đối phó nhiều kẻ thù, không phải đối đầu quân sự trực diện ngay từ đầu.",
      D: "Sai. Chính sách đối ngoại của Việt Nam thời kì này không phải khước từ phương Tây, mà là mềm dẻo, tranh thủ mọi khả năng có lợi cho nền độc lập non trẻ."
    }
  },
  
  
  {
    q: "Những hoạt động của Chủ tịch Hồ Chí Minh (từ đầu tháng 3 đến tháng 12-1946) có tác dụng nào sau đây đối với cách mạng Việt Nam?",
    a: "C",
    o: [
      "Buộc thực dân Pháp thi hành nghiêm túc Hiệp định Sơ bộ.",
      "Tránh được cuộc chiến tranh với thực dân Pháp sau này.",
      "Kéo dài thời gian hòa bình để chuẩn bị kháng chiến lâu dài.",
      "Chuẩn bị trực tiếp cho Đại hội đại biểu lần thứ II của Đảng."
    ],
    r: {
      A: "Sai. Thực dân Pháp không thi hành nghiêm túc Hiệp định Sơ bộ 6-3-1946 mà liên tiếp có hành động lấn tới, gây hấn. Hoạt động của Hồ Chí Minh không thể buộc Pháp thực hiện đầy đủ cam kết.",
      B: "Sai. Chủ trương hòa hoãn chỉ có tác dụng tạm thời, không thể ngăn chặn hoàn toàn cuộc chiến tranh xâm lược của Pháp. Cuối cùng, kháng chiến toàn quốc vẫn bùng nổ ngày 19-12-1946.",
      C: "Đúng. Từ tháng 3 đến tháng 12-1946, Hồ Chí Minh và Đảng thực hiện sách lược mềm dẻo để kéo dài thời gian hòa bình, tranh thủ củng cố chính quyền, xây dựng lực lượng và chuẩn bị cho cuộc kháng chiến lâu dài.",
      D: "Sai. Đại hội đại biểu lần thứ II của Đảng diễn ra năm 1951, không phải mục tiêu trực tiếp của các hoạt động đối ngoại và hòa hoãn trong năm 1946."
    }
  },
  {
    q: "Nội dung nào sau đây không phải là vai trò của Chủ tịch Hồ Chí Minh trong giai đoạn từ tháng 12-1946 đến tháng 7-1954 của cuộc kháng chiến chống thực dân Pháp?",
    a: "B",
    o: [
      "Ra Lời kêu gọi toàn quốc kháng chiến.",
      "Chủ động kí với Pháp bản Hiệp định Sơ bộ.",
      "Họp bàn, chỉ đạo các chiến dịch quan trọng.",
      "Chủ trì Đại hội đại biểu lần thứ II của Đảng."
    ],
    r: {
      A: "Sai vì đây không phải đáp án cần chọn. Ngày 19-12-1946, Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến, mở đầu cuộc kháng chiến chống Pháp trên phạm vi cả nước.",
      B: "Đúng. Việc kí Hiệp định Sơ bộ với Pháp diễn ra ngày 6-3-1946, thuộc giai đoạn trước toàn quốc kháng chiến, nên không phải vai trò của Hồ Chí Minh trong khoảng từ tháng 12-1946 đến tháng 7-1954.",
      C: "Sai vì đây không phải đáp án cần chọn. Trong kháng chiến chống Pháp, Hồ Chí Minh giữ vai trò quan trọng trong bàn bạc chủ trương và chỉ đạo các chiến dịch lớn.",
      D: "Sai vì đây không phải đáp án cần chọn. Đại hội đại biểu toàn quốc lần thứ II của Đảng năm 1951 do Hồ Chí Minh chủ trì là sự kiện quan trọng trong thời kì kháng chiến chống Pháp."
    }
  },
  {
    q: "Việc Chủ tịch Hồ Chí Minh đẩy mạnh hoạt động ngoại giao với nhân dân Pháp tiến bộ, Trung Quốc, Liên Xô và các nước Đông Âu (1949-1950) đem lại tác dụng nào sau đây?",
    a: "A",
    o: [
      "Tranh thủ được sự ủng hộ, giúp đỡ của các nước đối với cuộc kháng chiến.",
      "Đặt cơ sở cho Việt Nam gia nhập Hiệp hội các quốc gia Đông Nam Á.",
      "Buộc Chính phủ Trung Hoa Dân quốc rút hết quân ra khỏi Việt Nam.",
      "Tạo điều kiện thuận lợi để miền Bắc Việt Nam đi lên chủ nghĩa xã hội."
    ],
    r: {
      A: "Đúng. Hoạt động ngoại giao của Hồ Chí Minh giai đoạn 1949-1950 đã giúp cuộc kháng chiến của Việt Nam tranh thủ được sự công nhận, ủng hộ và giúp đỡ quốc tế, nhất là từ các nước xã hội chủ nghĩa.",
      B: "Sai. ASEAN chỉ ra đời năm 1967, nên hoàn toàn không liên quan đến hoạt động ngoại giao của Việt Nam trong giai đoạn 1949-1950.",
      C: "Sai. Quân Trung Hoa Dân quốc đã rút khỏi Việt Nam từ năm 1946 sau các dàn xếp ngoại giao, không phải kết quả trực tiếp của hoạt động ngoại giao 1949-1950.",
      D: "Sai. Miền Bắc đi lên chủ nghĩa xã hội là nhiệm vụ nổi bật sau năm 1954. Hoạt động ngoại giao 1949-1950 chủ yếu phục vụ cuộc kháng chiến chống Pháp."
    }
  },
  {
    q: "Tháng 6 năm 1925 đánh dấu sự ra đời của tổ chức cách mạng nào sau đây ở Việt Nam?",
    a: "D",
    o: [
      "Tân Việt Cách mạng đảng.",
      "Việt Nam Quốc dân đảng.",
      "Đông Dương Cộng sản đảng.",
      "Hội Việt Nam Cách mạng Thanh niên."
    ],
    r: {
      A: "Sai. Tân Việt Cách mạng đảng ra đời sau đó từ sự phát triển của Hội Phục Việt, không phải tổ chức được thành lập vào tháng 6-1925.",
      B: "Sai. Việt Nam Quốc dân đảng được thành lập năm 1927, không phải năm 1925.",
      C: "Sai. Đông Dương Cộng sản đảng ra đời năm 1929, gắn với sự phân hóa của Hội Việt Nam Cách mạng Thanh niên.",
      D: "Đúng. Tháng 6-1925, Nguyễn Ái Quốc thành lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu, đánh dấu bước chuẩn bị quan trọng về tổ chức cho cách mạng Việt Nam."
    }
  },
  {
    q: "Một trong những lí do Hồ Chí Minh sống mãi trong lòng nhân dân Việt Nam vì Người",
    a: "A",
    o: [
      "có tinh thần quốc tế vô sản, cần, kiệm, liêm, chính, chí công vô tư.",
      "đã xây dựng nền kinh tế tri thức, tự chủ để nâng cao đời sống nhân dân.",
      "đã góp phần phát triển nền giáo dục hiện đại, vươn ra tầm cao thế giới.",
      "đưa đất nước thoát khỏi tình trạng bị các nước bao vây cấm vận kinh tế."
    ],
    r: {
      A: "Đúng. Hồ Chí Minh sống mãi trong lòng nhân dân trước hết bởi nhân cách lớn, đạo đức trong sáng, lối sống giản dị và tinh thần suốt đời vì nước vì dân.",
      B: "Sai. Khái niệm xây dựng nền kinh tế tri thức, tự chủ là nội dung của thời kì phát triển sau này, không phải đóng góp lịch sử trực tiếp của Hồ Chí Minh.",
      C: "Sai. Hồ Chí Minh rất coi trọng giáo dục, nhưng phương án này diễn đạt không đúng trọng tâm và tầm mức lịch sử thường được dùng để lí giải việc Người sống mãi trong lòng dân.",
      D: "Sai. Việc đất nước thoát bao vây cấm vận là kết quả của giai đoạn sau này, không phải lí do trực tiếp để giải thích vị trí của Hồ Chí Minh trong lòng nhân dân."
    }
  },
  {
    q: "Những quốc gia nào sau đây ở châu Âu có nhiều hoạt động vinh danh Chủ tịch Hồ Chí Minh?",
    a: "A",
    o: [
      "Pháp, Nga.",
      "Pháp, Đức.",
      "Nga, Thụy Sĩ, Đức.",
      "Pháp, Hà Lan."
    ],
    r: {
      A: "Đúng. Trong các nước châu Âu, Pháp và Nga là hai nơi có nhiều hoạt động tưởng niệm, nghiên cứu, trưng bày, đặt tên đường hoặc dựng tượng đài gắn với Chủ tịch Hồ Chí Minh.",
      B: "Sai. Đức có những hoạt động tưởng niệm nhất định, nhưng không tiêu biểu và phổ biến bằng Pháp và Nga trong các tài liệu lịch sử phổ thông về vinh danh Hồ Chí Minh.",
      C: "Sai. Nga có nhiều hoạt động vinh danh, nhưng Thụy Sĩ và Đức không phải cặp tiêu biểu thường được nhấn mạnh như Pháp và Nga.",
      D: "Sai. Hà Lan không phải nước thường được nhắc đến nổi bật trong hệ thống tư liệu phổ thông về các hoạt động vinh danh Chủ tịch Hồ Chí Minh ở châu Âu."
    }
  },
  {
    q: "Thế giới vinh danh Chủ tịch Hồ Chí Minh xuất phát từ một trong những lí do cơ bản nào sau đây?",
    a: "B",
    o: [
      "Là đặc phái viên của Quốc tế Cộng sản, tham gia bảo vệ hòa bình thế giới.",
      "Chủ tịch Hồ Chí Minh đã cống hiến trọn đời mình cho dân tộc Việt Nam.",
      "Chủ tịch Hồ Chí Minh ủng hộ nhân dân Nam Phi chống chế độ A-pác-thai.",
      "Có đóng góp trực tiếp vào giải quyết mâu thuẫn cuộc đối đầu Đông - Tây."
    ],
    r: {
      A: "Sai. Hồ Chí Minh có hoạt động trong phong trào cộng sản và công nhân quốc tế, nhưng đây không phải lí do cơ bản nhất khiến thế giới vinh danh Người.",
      B: "Đúng. Hồ Chí Minh được thế giới vinh danh vì cuộc đời cống hiến trọn vẹn cho độc lập dân tộc, tự do của nhân dân Việt Nam, đồng thời có ảnh hưởng lớn đến phong trào giải phóng dân tộc và các giá trị văn hóa tiến bộ.",
      C: "Sai. Đây không phải nguyên nhân cơ bản và tiêu biểu nhất thường được dùng để lí giải việc thế giới vinh danh Hồ Chí Minh.",
      D: "Sai. Hồ Chí Minh có ảnh hưởng quốc tế rộng lớn, nhưng không trực tiếp nổi bật ở vai trò giải quyết mâu thuẫn Đông - Tây như cách nêu trong phương án."
    }
  },
  {
    q: "Năm 1987, cuộc họp Đại hội đồng UNESCO lần thứ 24 tại Pa-ri (Pháp) đã ra Nghị quyết số 24C/18.65, ghi nhận Chủ tịch Hồ Chí Minh là",
    a: "C",
    o: [
      "một nhà ngoại giao có tầm ảnh hưởng lớn ở châu Á trong thế kỉ XX.",
      "nhà chính trị, quân sự, nhà thơ nổi tiếng của Việt Nam thời phong kiến.",
      "Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam.",
      "người vận dụng xuất sắc chủ nghĩa Mác - Lê-nin vào thực tiễn Việt Nam."
    ],
    r: {
      A: "Sai. UNESCO không ghi nhận Hồ Chí Minh theo cách diễn đạt hẹp là một nhà ngoại giao có ảnh hưởng ở châu Á, mà tôn vinh Người trên tầm vóc lớn hơn nhiều.",
      B: "Sai. Hồ Chí Minh là nhân vật lịch sử hiện đại, không thuộc thời phong kiến Việt Nam.",
      C: "Đúng. Nghị quyết của UNESCO năm 1987 đã ghi nhận Hồ Chí Minh là 'Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất của Việt Nam'. Đây là cách tôn vinh chính thức, nổi tiếng và chuẩn xác nhất.",
      D: "Sai. Đây là một nhận xét đúng về tư tưởng và đóng góp của Hồ Chí Minh, nhưng không phải nội dung ghi nhận chính thức trong Nghị quyết của UNESCO."
    }
  },
  {
    q: "Hoạt động tưởng niệm Chủ tịch Hồ Chí Minh của nhân dân các nước trên thế giới không có hình thức nào sau đây?",
    a: "C",
    o: [
      "Xây dựng tượng đài Hồ Chí Minh.",
      "Xây dựng quảng trường.",
      "Xây dựng Lăng Chủ tịch.",
      "Xây dựng nhà lưu niệm."
    ],
    r: {
      A: "Sai vì đây không phải đáp án cần chọn. Nhiều nước trên thế giới có xây dựng tượng đài hoặc tượng Hồ Chí Minh để tưởng niệm Người.",
      B: "Sai vì đây không phải đáp án cần chọn. Một số nơi có quảng trường, công viên, đường phố mang tên Hồ Chí Minh như một hình thức vinh danh và tưởng niệm.",
      C: "Đúng. Lăng Chủ tịch Hồ Chí Minh là công trình đặc biệt ở Việt Nam; các nước trên thế giới không có hình thức tưởng niệm phổ biến bằng việc xây lăng Chủ tịch như phương án nêu.",
      D: "Sai vì đây không phải đáp án cần chọn. Nhà lưu niệm, phòng trưng bày hoặc địa điểm kỉ niệm về Hồ Chí Minh là hình thức tưởng niệm đã xuất hiện ở một số nơi."
    }
  },
  {
    q: "Chủ tịch Hồ Chí Minh sống mãi trong lòng nhân dân Việt Nam vì một trong những lí do cơ bản nào sau đây?",
    a: "A",
    o: [
      "Là tấm gương sáng về đạo đức, phẩm chất, lối sống cho các thế hệ.",
      "Góp phần vào xây dựng thành công chủ nghĩa xã hội ở miền Bắc.",
      "Là người Việt Nam đầu tiên xuất dương tìm đường cứu nước.",
      "Là Tổng Bí thư và Chủ tịch nước đầu tiên của nước Việt Nam."
    ],
    r: {
      A: "Đúng. Một lí do cơ bản khiến Hồ Chí Minh sống mãi trong lòng nhân dân là Người để lại tấm gương mẫu mực về đạo đức cách mạng, nhân cách, lối sống giản dị và tinh thần suốt đời vì dân vì nước.",
      B: "Sai. Hồ Chí Minh có công lao to lớn với sự nghiệp xây dựng miền Bắc, nhưng đây không phải lí do khái quát và cơ bản nhất để giải thích vị trí của Người trong lòng nhân dân.",
      C: "Sai. Hồ Chí Minh không phải người Việt Nam đầu tiên ra nước ngoài tìm đường cứu nước; trước đó đã có các sĩ phu như Phan Bội Châu.",
      D: "Sai. Hồ Chí Minh là Chủ tịch nước đầu tiên của Việt Nam Dân chủ Cộng hòa, nhưng không phải Tổng Bí thư đầu tiên của Đảng."
    }
  },
  {
    q: "Sau khi Chủ tịch Hồ Chí Minh qua đời (9-1969), nội dung nào sau đây phản ánh việc nhân dân miền Nam đã làm để tưởng nhớ Người?",
    a: "D",
    o: [
      "Tấn công chống chính quyền Diệm.",
      "Cử các đại biểu ra Bắc dâng hương.",
      "Xây dựng nhiều khu tưởng niệm.",
      "Nhân dân đã đồng loạt tưởng niệm Người."
    ],
    r: {
      A: "Sai. Chính quyền Diệm đã sụp đổ từ năm 1963, nên phương án này sai cả về thời gian lẫn nội dung.",
      B: "Sai. Trong bối cảnh chiến tranh năm 1969, việc cử đại biểu miền Nam ra Bắc dâng hương không phải biểu hiện tiêu biểu và phổ biến nhất được nhấn mạnh trong lịch sử phổ thông.",
      C: "Sai. Việc xây dựng nhiều khu tưởng niệm diễn ra về sau, không phản ánh ngay hành động tiêu biểu của nhân dân miền Nam sau khi Bác qua đời.",
      D: "Đúng. Sau khi Chủ tịch Hồ Chí Minh qua đời, nhân dân miền Nam đã đồng loạt tổ chức tưởng niệm, bày tỏ lòng tiếc thương sâu sắc và biến đau thương thành hành động cách mạng."
    }
  },
  {
    q: "Nội dung nào sau đây là hành động thể hiện sự sống mãi của Chủ tịch Hồ Chí Minh trong lòng nhân dân Việt Nam?",
    a: "D",
    o: [
      "Xây dựng Lăng Chủ tịch Hồ Chí Minh ở các thành phố lớn trong cả nước.",
      "Vận động bạn bè quốc tế xây dựng các trường học mang tên Hồ Chí Minh.",
      "Giữ nguyên tuyến đường mòn Hồ Chí Minh để ghi dấu ấn lịch sử về Người.",
      "Phát động phong trào: \"Học tập và làm theo tấm gương đạo đức Hồ Chí Minh\"."
    ],
    r: {
      A: "Sai. Việt Nam chỉ có một Lăng Chủ tịch Hồ Chí Minh tại Hà Nội, không có việc xây lăng ở nhiều thành phố lớn trong cả nước.",
      B: "Sai. Đây không phải hành động tiêu biểu, phổ biến và trực tiếp nhất thể hiện việc Hồ Chí Minh sống mãi trong lòng nhân dân Việt Nam.",
      C: "Sai. Tuyến đường mòn Hồ Chí Minh là di tích lịch sử quan trọng, nhưng việc 'giữ nguyên' nó không phải biểu hiện tiêu biểu nhất về sự tiếp nối giá trị tinh thần của Bác.",
      D: "Đúng. Phong trào 'Học tập và làm theo tấm gương đạo đức Hồ Chí Minh' là biểu hiện rõ ràng của việc nhân dân Việt Nam tiếp tục noi gương, kế thừa và phát huy giá trị tư tưởng, đạo đức của Người."
    }
  },
  {
    q: "Chủ tịch Hồ Chí Minh có cống hiến nào sau đây đối với nhân dân thế giới?",
    a: "D",
    o: [
      "Đánh giá đúng vai trò lãnh đạo cách mạng của giai cấp công nhân và nông dân.",
      "Gây dựng quan hệ với giai cấp vô sản thông qua việc sáng lập Quốc tế Cộng sản.",
      "Xây dựng được mối quan hệ giữa cách mạng Việt Nam với mọi tổ chức quốc tế.",
      "Góp phần xây dựng và phát huy sức mạnh của các tổ chức cách mạng, tiến bộ."
    ],
    r: {
      A: "Sai. Đây là đóng góp về nhận thức lí luận đối với cách mạng Việt Nam, nhưng chưa phản ánh trực tiếp và đầy đủ cống hiến của Hồ Chí Minh đối với nhân dân thế giới.",
      B: "Sai. Hồ Chí Minh không phải người sáng lập Quốc tế Cộng sản; vì vậy phương án này sai về mặt lịch sử.",
      C: "Sai. Cách diễn đạt 'mọi tổ chức quốc tế' là quá tuyệt đối và không chính xác.",
      D: "Đúng. Hồ Chí Minh có đóng góp cho phong trào cách mạng và tiến bộ thế giới thông qua việc xây dựng, cổ vũ và phát huy sức mạnh của các lực lượng đấu tranh vì độc lập dân tộc, dân chủ và hòa bình."
    }
  },
  {
    q: "Nội dung nào sau đây lí giải vì sao Chủ tịch Hồ Chí Minh sống mãi trong lòng nhân dân Việt Nam?",
    a: "A",
    o: [
      "Người đã cống hiến trọn đời cho độc lập dân tộc, tự do, hạnh phúc của nhân dân.",
      "Những tư tưởng lớn của Người để lại mang tầm vóc vĩ nhân của thế giới.",
      "Người hội tụ tinh hoa, giá trị văn hóa phương Đông và văn hóa phương Tây.",
      "Người là biểu tượng của sức mạnh đoàn kết các dân tộc bị áp bức trên thế giới."
    ],
    r: {
      A: "Đúng. Lí do cơ bản nhất là Hồ Chí Minh đã hi sinh, cống hiến trọn đời cho sự nghiệp độc lập dân tộc, tự do và hạnh phúc của nhân dân Việt Nam, nên được nhân dân đời đời kính yêu, tưởng nhớ.",
      B: "Sai. Đây là một nhận xét đúng về tầm vóc tư tưởng của Hồ Chí Minh, nhưng chưa phải cách lí giải trực tiếp, cơ bản nhất về tình cảm sâu nặng của nhân dân Việt Nam dành cho Người.",
      C: "Sai. Việc hội tụ tinh hoa văn hóa Đông - Tây góp phần làm nên tầm vóc Hồ Chí Minh, nhưng không phải lí do cơ bản nhất để giải thích Người sống mãi trong lòng nhân dân Việt Nam.",
      D: "Sai. Đây là giá trị quốc tế rất lớn của Hồ Chí Minh, nhưng câu hỏi nhấn vào tình cảm của nhân dân Việt Nam, nên cần chọn phương án gắn trực tiếp với sự cống hiến cho dân tộc Việt Nam."
    }
  },
  
  
  
  
    {
    q: `Cho đoạn tư liệu sau đây:
"Tôi [Hồ Chí Minh] tuyệt nhiên không ham muốn công danh phú quý nào. Bây giờ phải gánh chức Chủ tịch là vì đồng bào uỷ thác thì tôi phải gắng sức làm, cũng như một người lính vâng mệnh lệnh của quốc dân ra trước mặt trận. Bao giờ đồng bào cho tôi lui, thì tôi rất vui lòng lui."
(Chủ tịch Hồ Chí Minh trả lời báo chí, báo Cứu quốc, số 147, ngày 21-1-1946)

Xác định các nhận định sau:`,
    statements: [
      {
        text: "Đoạn tư liệu khẳng định nguyên tắc của nhà lãnh đạo là phải trung thành tuyệt đối với nhân dân.",
        answer: true,
        explanation: "Tư liệu cho thấy Hồ Chí Minh nhận nhiệm vụ vì 'đồng bào uỷ thác' và xem mình như người lính vâng mệnh lệnh quốc dân, thể hiện rõ tinh thần vì dân, chịu trách nhiệm trước nhân dân."
      },
      {
        text: "Chủ tịch Hồ Chí Minh khẳng định luôn cống hiến trọn đời mình cho nhân dân và Tổ quốc.",
        answer: false,
        explanation: "Đoạn tư liệu này không trực tiếp nói tới việc 'cống hiến trọn đời', mà nhấn mạnh tinh thần nhận và làm tròn nhiệm vụ do nhân dân giao phó."
      },
      {
        text: "Chủ tịch Hồ Chí Minh trả lời báo chí về quá trình lãnh đạo cách mạng giải phóng dân tộc.",
        answer: false,
        explanation: "Nội dung tư liệu không nói về quá trình lãnh đạo cách mạng giải phóng dân tộc mà nói về quan điểm của Hồ Chí Minh khi đảm nhận chức vụ Chủ tịch."
      },
      {
        text: "Chủ tịch Hồ Chí Minh giáo dục lịch sử cho chiến sĩ, động viên quân đội trước giờ ra trận.",
        answer: false,
        explanation: "Đoạn tư liệu là lời trả lời báo chí về trách nhiệm với nhân dân, không phải lời huấn thị cho chiến sĩ hay quân đội."
      }
    ]
  },
  {
    q: `Cho đoạn tư liệu sau đây:
"Trung ương đã quyết định cần tích cực chuẩn bị cho cuộc họp Hội nghị toàn quốc của Đảng và Quốc dân đại hội đại biểu. Bác [Hồ Chí Minh] giục chuẩn bị cho kịp họp hai hội nghị quan trọng này từ tháng 7... Giữa lúc công việc bộn bề như thế, Bác bỗng bị mệt. Lúc nào tỉnh, Bác chỉ nói chuyện tình hình: 'Lúc này thời cơ thuận lợi đã tới, dù hi sinh tới đâu, dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập'."
(Theo Đại tướng Võ Nguyên Giáp, Tổng tập hồi kí)

Xác định các nhận định sau:`,
    statements: [
      {
        text: "Đoạn tư liệu ghi nhận vai trò của Chủ tịch Hồ Chí Minh và Đảng Cộng sản Đông Dương trong việc chớp thời cơ, lãnh đạo Cách mạng tháng Tám năm 1945.",
        answer: true,
        explanation: "Tư liệu phản ánh rõ sự chuẩn bị của Trung ương, của Hồ Chí Minh và quyết tâm giành độc lập khi thời cơ đến, gắn trực tiếp với vai trò lãnh đạo Cách mạng tháng Tám."
      },
      {
        text: "Hồ Chí Minh xác định thời cơ Tổng khởi nghĩa giành chính quyền trên toàn quốc từ khi Nhật đầu hàng quân Đồng minh đến trước khi quân Đồng minh vào Đông Dương.",
        answer: true,
        explanation: "Đây là khoảng thời gian thuận lợi nhất để phát động tổng khởi nghĩa vì bộ máy cai trị cũ tan rã, còn lực lượng Đồng minh chưa kịp kéo vào Đông Dương."
      },
      {
        text: "Thời cơ của Tổng khởi nghĩa trong Cách mạng tháng Tám năm 1945 ở Việt Nam được tính từ khi Nhật tiến hành đảo chính Pháp trên toàn Đông Dương (9-3-1943).",
        answer: false,
        explanation: "Sai cả mốc thời gian lẫn nội dung. Nhật đảo chính Pháp diễn ra ngày 9-3-1945, và đó chưa phải thời cơ tổng khởi nghĩa chín muồi nhất."
      },
      {
        text: "Bối cảnh nổ ra cuộc Tổng khởi nghĩa trong Cách mạng tháng Tám năm 1945 ở Việt Nam có sự đan xen giữa thời cơ và nguy cơ.",
        answer: true,
        explanation: "Đúng vì bên cạnh thời cơ rất thuận lợi sau khi Nhật đầu hàng, cách mạng cũng đứng trước nguy cơ nếu chậm trễ thì quân Đồng minh vào, tình hình sẽ phức tạp hơn."
      }
    ]
  },
  {
    q: `Cho đoạn tư liệu sau đây:
"... Chủ tịch Hồ Chí Minh, một biểu tượng xuất sắc về sự tự khẳng định dân tộc, đã cống hiến trọn đời mình cho sự nghiệp giải phóng dân tộc của nhân dân Việt Nam, góp phần vào cuộc đấu tranh chung của các dân tộc vì hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội."
(Tập biên bản của Đại Hội đồng UNESCO)

Xác định các nhận định sau:`,
    statements: [
      {
        text: "Chủ tịch Hồ Chí Minh đã cống hiến trọn đời mình cho dân tộc Việt Nam.",
        answer: true,
        explanation: "Nhận định này đúng sát với nội dung tư liệu khi UNESCO khẳng định Hồ Chí Minh đã cống hiến trọn đời cho sự nghiệp giải phóng dân tộc của nhân dân Việt Nam."
      },
      {
        text: "Chủ tịch Hồ Chí Minh được UNESCO ghi nhận có nhiều đóng góp cho nhân loại.",
        answer: true,
        explanation: "Ngoài đóng góp cho Việt Nam, tư liệu còn nhấn mạnh vai trò của Người đối với cuộc đấu tranh chung của các dân tộc vì hòa bình, độc lập, dân chủ và tiến bộ xã hội."
      },
      {
        text: "Liên hợp quốc đã ghi nhận Chủ tịch Hồ Chí Minh là 'Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam'.",
        answer: false,
        explanation: "Trong ngữ cảnh này, chủ thể được nêu là UNESCO. Cách diễn đạt gán chung cho 'Liên hợp quốc' là không chính xác theo nội dung tư liệu."
      },
      {
        text: "Nhân dân Việt Nam và thế giới vinh danh và tri ân Chủ tịch Hồ Chí Minh bằng nhiều hình thức khác nhau và nối tiếp qua nhiều thế hệ.",
        answer: true,
        explanation: "Nhận định này phù hợp với ý nghĩa của việc UNESCO tôn vinh và thực tế lịch sử khi Hồ Chí Minh được tưởng niệm, nghiên cứu và vinh danh rộng rãi ở Việt Nam cũng như trên thế giới."
      }
    ]
  },
  {
    q: `Cho đoạn tư liệu sau đây:
"Từ buổi thiếu niên cho đến phút cuối cùng, Hồ Chủ tịch đã cống hiến trọn đời mình cho sự nghiệp cách mạng của nhân dân ta và nhân dân thế giới. Người đã trải qua một cuộc đời oanh liệt, đầy gian khổ hi sinh, vô cùng cao thượng và phong phú, vô cùng trong sáng và đẹp đẽ."
(Điếu văn của Ban Chấp hành Trung ương Đảng Lao động Việt Nam trong Lễ truy điệu Chủ tịch Hồ Chí Minh ngày 9-9-1969)

Xác định các nhận định sau:`,
    statements: [
      {
        text: "Theo đoạn tư liệu, không chỉ tham gia sự nghiệp giải phóng dân tộc và nhân loại, Chủ tịch Hồ Chí Minh còn đóng góp quan trọng trên các lĩnh vực tư tưởng, văn hóa, giáo dục.",
        answer: false,
        explanation: "Đoạn tư liệu chỉ nhấn mạnh sự cống hiến trọn đời cho sự nghiệp cách mạng của nhân dân Việt Nam và nhân dân thế giới, không nêu trực tiếp các lĩnh vực tư tưởng, văn hóa, giáo dục."
      },
      {
        text: "Chủ tịch Hồ Chí Minh có nhiều đóng góp cho sự nghiệp cách mạng của dân tộc Việt Nam và thế giới.",
        answer: true,
        explanation: "Đây là nội dung được thể hiện trực tiếp trong tư liệu qua cụm 'cống hiến trọn đời mình cho sự nghiệp cách mạng của nhân dân ta và nhân dân thế giới'."
      },
      {
        text: "UNESCO ghi nhận Chủ tịch Hồ Chí Minh là Anh hùng giải phóng dân tộc vào đúng dịp kỷ niệm 100 năm thành lập Đảng Cộng sản Việt Nam.",
        answer: false,
        explanation: "UNESCO gắn việc tôn vinh Hồ Chí Minh với dịp kỷ niệm 100 năm ngày sinh của Người, không phải 100 năm thành lập Đảng Cộng sản Việt Nam."
      },
      {
        text: "UNESCO ra nghị quyết yêu cầu các nước thống nhất việc xây dựng tượng đài Chủ tịch Hồ Chí Minh.",
        answer: false,
        explanation: "Không có nội dung nào như vậy. Đây là nhận định sai và không phản ánh quyết nghị tôn vinh của UNESCO."
      }
    ]
  },
  
  {
    q: `Cho đoạn tư liệu sau đây:
"... Cuốn sách không đề tên tác giả và được lưu hành trong Việt kiều ở Quảng Châu, cuốn sách tóm tắt những bài giảng của đồng chí ấy về chủ nghĩa Mác - Lê-nin và nhiệm vụ của cách mạng Việt Nam. Cuốn 'Đường Kách mệnh' là sự tiếp theo một cách lô-gic cuốn 'Bản án chế độ thực dân Pháp'. Nếu trong cuốn 'Bản án chế độ thực dân Pháp', Nguyễn Ái Quốc thẳng tay vạch trần những tội ác của đế quốc Pháp trong những lãnh thổ thuộc địa bao la của chúng thì trong cuốn 'Đường Kách mệnh', Nguyễn Ái Quốc vạch ra con đường cụ thể giải phóng dân tộc".
(E. Cô-bê-lép, Đồng chí Hồ Chí Minh, NXB Tiến bộ, Mát-xcơ-va, 1985, tr. 142)

Xác định các nhận định sau:`,
    statements: [
      {
        text: "Cùng với báo Thanh niên, cuốn sách Đường Kách mệnh về sau trở thành Cương lĩnh chính trị đầu tiên của Đảng Cộng sản Việt Nam.",
        answer: false,
        explanation: "Đường Kách mệnh và báo Thanh niên là những tài liệu quan trọng chuẩn bị về tư tưởng, chính trị cho sự ra đời của Đảng, nhưng không phải là Cương lĩnh chính trị đầu tiên của Đảng. Cương lĩnh đầu tiên được thông qua đầu năm 1930 gồm Chánh cương vắn tắt, Sách lược vắn tắt và các văn kiện liên quan."
      },
      {
        text: "Tác phẩm Bản án chế độ thực dân Pháp và cuốn Đường Kách mệnh đều do Nguyễn Ái Quốc soạn thảo, phục vụ cho hoạt động cách mạng.",
        answer: true,
        explanation: "Cả hai tác phẩm đều do Nguyễn Ái Quốc biên soạn và đều phục vụ trực tiếp cho mục tiêu tuyên truyền, giác ngộ và định hướng con đường cách mạng."
      },
      {
        text: "Trong cuốn Đường Kách mệnh, Nguyễn Ái Quốc đã bước đầu vạch ra phương hướng, con đường cụ thể để giải phóng dân tộc Việt Nam.",
        answer: true,
        explanation: "Đường Kách mệnh là tác phẩm thể hiện rõ việc Nguyễn Ái Quốc truyền bá chủ nghĩa Mác - Lê-nin và bước đầu xác định con đường cứu nước theo khuynh hướng cách mạng vô sản cho Việt Nam."
      },
      {
        text: "Cuốn Đường Kách mệnh được xuất bản ở Quảng Châu (Trung Quốc), do Nguyễn Ái Quốc xuất bản để phục vụ cách mạng.",
        answer: false,
        explanation: "Đường Kách mệnh được xuất bản tại Quảng Châu, nhưng nói 'do Nguyễn Ái Quốc xuất bản' là không chính xác. Nguyễn Ái Quốc là người biên soạn nội dung, còn việc xuất bản gắn với tổ chức cách mạng lúc bấy giờ."
      }
    ]
  },
  {
    q: `Cho đoạn tư liệu sau đây:
"... Luận cương của Lê-nin làm cho tôi rất cảm động, phấn khởi, sáng tỏ, tin tưởng biết bao! Tôi vui mừng đến phát khóc lên. Ngồi một mình trong buồng mà tôi nói to lên như đang nói trước quần chúng đông đảo: 'Hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta! Từ đó tôi hoàn toàn tin theo Lê-nin, tin theo Quốc tế thứ ba'."
(Hồ Chí Minh, "Con đường dẫn tôi đến chủ nghĩa Mác - Lê-nin", trích trong: Hồ Chí Minh, Toàn tập, Tập 12, NXB Chính trị quốc gia Sự thật, Hà Nội, 2011, tr.562)

Xác định các nhận định sau:`,
    statements: [
      {
        text: "Lúc đầu, chính là chủ nghĩa yêu nước, chứ chưa phải là chủ nghĩa cộng sản đã đưa Nguyễn Ái Quốc đến với Lê-nin, tin theo Quốc tế thứ ba.",
        answer: true,
        explanation: "Nhận định này phù hợp với quá trình nhận thức của Nguyễn Ái Quốc. Từ lòng yêu nước, thương dân, Người đi tìm con đường cứu nước và đến với chủ nghĩa Mác - Lê-nin."
      },
      {
        text: "Sự kiện Nguyễn Ái Quốc 'hoàn toàn tin theo Lê-nin, tin theo Quốc tế thứ ba' đã mở ra cơ hội mới trong cuộc hành trình tìm đường cứu nước.",
        answer: true,
        explanation: "Sự kiện này đánh dấu bước chuyển lớn trong nhận thức của Nguyễn Ái Quốc, giúp Người tìm ra con đường cứu nước đúng đắn và mở ra chặng đường mới trong hành trình giải phóng dân tộc."
      },
      {
        text: "Cụm từ 'đây là con đường giải phóng chúng ta' trong đoạn tư liệu trên chính là con đường cứu nước theo khuynh hướng cách mạng vô sản.",
        answer: true,
        explanation: "Sau khi tiếp cận Luận cương của Lê-nin, Nguyễn Ái Quốc xác định con đường giải phóng dân tộc phải gắn với cách mạng vô sản, đi theo chủ nghĩa Mác - Lê-nin."
      },
      {
        text: "Nguyễn Ái Quốc hoàn toàn tin theo Lê-nin, tin theo Quốc tế thứ ba vì đó là con đường cứu nước gắn giải phóng dân tộc với tiến bộ xã hội.",
        answer: true,
        explanation: "Con đường cách mạng vô sản mà Nguyễn Ái Quốc lựa chọn không chỉ nhằm giải phóng dân tộc mà còn hướng tới giải phóng xã hội, giải phóng con người, phù hợp với xu thế tiến bộ của thời đại."
      }
    ]
  },
  {
    q: `Cho đoạn tư liệu sau đây:
"... Luận cương của Lênin làm cho tôi rất cảm động, phấn khởi, sáng tỏ, tin tưởng biết bao! Tôi vui mừng đến phát khóc lên. Ngồi một mình trong buồng mà tôi nói to như đang nói trước quần chúng đông đảo: 'Hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta!' Từ đó tôi hoàn toàn tin theo Lênin, tin theo Quốc tế thứ ba."
(Hồ Chí Minh, Con đường dẫn tôi đến chủ nghĩa Mác - Lênin, trích trong: Hồ Chí Minh toàn tập, tập 12, NXB Chính trị quốc gia Sự thật, Hà Nội, 2011, tr. 562)

Xác định các nhận định sau:`,
    statements: [
      {
        text: "Nguyễn Ái Quốc đọc Luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lê-nin trong thời gian Người đang hoạt động tại Liên Xô.",
        answer: false,
        explanation: "Nguyễn Ái Quốc đọc Luận cương của Lê-nin khi đang hoạt động ở Pháp, không phải tại Liên Xô. Đây là mốc rất hay bị ra bẫy vì đề Sử thích làm cuộc đời học sinh thêm phần phong phú."
      },
      {
        text: "Sự kiện đọc Luận cương đã đưa Nguyễn Ái Quốc từ người thanh niên yêu nước trở thành một chiến sĩ cộng sản quốc tế.",
        answer: true,
        explanation: "Việc tiếp cận Luận cương của Lê-nin có ý nghĩa quyết định đối với bước chuyển biến tư tưởng của Nguyễn Ái Quốc, từ chủ nghĩa yêu nước đến với chủ nghĩa Mác - Lê-nin và lập trường cộng sản."
      },
      {
        text: "Con đường cách mạng vô sản mà Nguyễn Ái Quốc khẳng định đã gắn cách mạng Việt Nam với phong trào cộng sản quốc tế.",
        answer: true,
        explanation: "Việc lựa chọn con đường cách mạng vô sản đã đặt cách mạng Việt Nam trong mối liên hệ với phong trào cách mạng thế giới, đặc biệt là phong trào cộng sản và công nhân quốc tế."
      },
      {
        text: "Việc Nguyễn Ái Quốc tìm thấy con đường cứu nước đã đánh dấu bước ngoặt của cách mạng Việt Nam.",
        answer: false,
        explanation: "Sự kiện này trước hết đánh dấu bước ngoặt trong tư tưởng và hoạt động cách mạng của Nguyễn Ái Quốc. Nó tạo cơ sở rất quan trọng cho bước ngoặt của cách mạng Việt Nam, nhưng không nên đồng nhất trực tiếp hai việc này."
      }
    ]
  },
  

  {
    q: "Hoạt động của Nguyễn Ái Quốc - Hồ Chí Minh trong những năm 1945 - 1954 có điểm khác biệt nào sau đây so với thời kì 1930 - 1945?",
    a: "B",
    o: [
      "Lãnh đạo cuộc tổng khởi nghĩa giành chính quyền ở Việt Nam.",
      "Góp phần xây dựng cơ sở cho chế độ xã hội mới ở Việt Nam.",
      "Kêu gọi nhân dân Việt Nam kháng chiến chống Pháp xâm lược.",
      "Thành lập Mặt trận dân tộc thống nhất đầu tiên của Việt Nam."
    ],
    r: {
      A: "Sai. Nội dung này gắn trực tiếp với thắng lợi của Cách mạng tháng Tám năm 1945, không phải nét khác biệt tiêu biểu của cả giai đoạn 1945 - 1954 so với 1930 - 1945.",
      B: "Đúng. Từ sau khi giành chính quyền, Hồ Chí Minh cùng Đảng và Nhà nước vừa lãnh đạo kháng chiến vừa xây dựng nền móng của chế độ mới. Đây là điểm khác biệt rõ so với thời kì trước 1945.",
      C: "Sai. Đây là hoạt động tiêu biểu của giai đoạn 1945 - 1954, nhưng chưa thể hiện rõ bằng nhiệm vụ xây dựng cơ sở cho chế độ xã hội mới.",
      D: "Sai. Mặt trận dân tộc thống nhất đầu tiên được thành lập trước giai đoạn này, nên không phải điểm khác biệt của thời kì 1945 - 1954."
    }
  },
  {
    q: "Nội dung nào sau đây phản ánh đúng vai trò của Hồ Chí Minh trong những năm 1945 đến năm 1969?",
    a: "C",
    o: [
      "Chủ trì Hội nghị thành lập Đảng Cộng sản Việt Nam.",
      "Lãnh đạo nhân dân miền Bắc chống chiến tranh phá hoại lần thứ 2 của Mỹ.",
      "Lãnh đạo nhân dân kháng chiến chống Pháp và chống Mỹ.",
      "Lãnh đạo nhân dân cả nước xây dựng chủ nghĩa xã hội."
    ],
    r: {
      A: "Sai. Sự kiện này diễn ra đầu năm 1930, ngoài phạm vi 1945 - 1969.",
      B: "Sai. Chiến tranh phá hoại lần thứ hai của Mỹ diễn ra năm 1972, khi Hồ Chí Minh đã qua đời.",
      C: "Đúng. Từ 1945 đến 1969, Hồ Chí Minh gắn liền với hai cuộc kháng chiến lớn của dân tộc: chống Pháp và chống Mỹ.",
      D: "Sai. Trong thời kì này chỉ miền Bắc xây dựng chủ nghĩa xã hội, không phải cả nước."
    }
  },
  {
    q: "Trong cuộc hành trình tìm đường cứu nước (1911 - 1920), nhận thức nào sau đây của Nguyễn Tất Thành có sự khác biệt so với các nhà yêu nước đi trước?",
    a: "B",
    o: [
      "Chỉ có đoàn kết mới đánh đuổi được đế quốc, giải phóng dân tộc thoát khỏi áp bức.",
      "Muốn cứu nước và giải phóng dân tộc phải đi theo khuynh hướng cách mạng vô sản.",
      "Mâu thuẫn hàng đầu trong xã hội Việt Nam là giữa toàn thể dân tộc với đế quốc Pháp.",
      "Muốn cứu nước và giải phóng dân tộc, trước tiên phải trở thành một người yêu nước."
    ],
    r: {
      A: "Sai. Đây là nhận thức đúng nhưng không phải điểm khác biệt cơ bản nhất so với các nhà yêu nước trước đó.",
      B: "Đúng. Nguyễn Ái Quốc là người đầu tiên tìm ra con đường cứu nước theo khuynh hướng cách mạng vô sản, khác hẳn khuynh hướng phong kiến và dân chủ tư sản trước đó.",
      C: "Sai. Đây là nhận thức về tính chất xã hội và mâu thuẫn dân tộc, không phải nét khác biệt nổi bật nhất trong hành trình tìm đường cứu nước.",
      D: "Sai. Lòng yêu nước là điểm chung của nhiều nhà yêu nước, không phải điểm riêng của Nguyễn Tất Thành."
    }
  },
  {
    q: "Con đường cứu nước của dân tộc Việt Nam do Nguyễn Ái Quốc xác định có sự khác biệt hoàn toàn so với các con đường cứu nước trước đó về điểm nào sau đây?",
    a: "D",
    o: [
      "Hình thức, phương pháp đấu tranh.",
      "Mục tiêu trực tiếp, trước mắt.",
      "Xác định đối tượng cách mạng.",
      "Phương hướng tiến lên."
    ],
    r: {
      A: "Sai. Hình thức và phương pháp đấu tranh có thể khác nhau nhưng chưa phải điểm khác biệt hoàn toàn.",
      B: "Sai. Mục tiêu trực tiếp trước mắt của các phong trào yêu nước đều là giành độc lập dân tộc.",
      C: "Sai. Việc xác định đối tượng cách mạng có điểm kế thừa nhất định, không phải sự khác biệt hoàn toàn.",
      D: "Đúng. Điểm mới căn bản là Nguyễn Ái Quốc xác định con đường phát triển của cách mạng Việt Nam theo khuynh hướng vô sản, gắn độc lập dân tộc với chủ nghĩa xã hội."
    }
  },
  {
    q: "Nội dung nào sau đây không phải là ý nghĩa sự kiện Nguyễn Ái Quốc tìm thấy con đường cứu nước cho dân tộc Việt Nam?",
    a: "B",
    o: [
      "Góp phần giải quyết khủng hoảng về con đường cứu nước ở Việt Nam.",
      "Chuẩn bị trực tiếp cho sự ra đời các tổ chức cộng sản ở Việt Nam.",
      "Chuẩn bị các điều kiện cho sự ra đời của Đảng Cộng sản Việt Nam.",
      "Gắn phong trào cách mạng của Việt Nam với cách mạng thế giới."
    ],
    r: {
      A: "Sai. Việc tìm ra con đường cứu nước góp phần giải quyết cuộc khủng hoảng đường lối ở Việt Nam.",
      B: "Đúng. Sự kiện này chưa trực tiếp dẫn đến sự ra đời các tổ chức cộng sản; đó là kết quả của cả quá trình chuẩn bị sau này, nhất là giai đoạn 1925 - 1929.",
      C: "Sai. Đây là một ý nghĩa đúng vì sự kiện đó mở đầu cho quá trình chuẩn bị về tư tưởng, chính trị cho sự ra đời của Đảng.",
      D: "Sai. Nguyễn Ái Quốc tìm ra con đường cứu nước theo khuynh hướng vô sản đã gắn cách mạng Việt Nam với cách mạng thế giới."
    }
  },
  {
    q: "Trong quá trình chuẩn bị về tư tưởng, chính trị để thành lập Đảng Cộng sản Việt Nam (1919 - 1929), Nguyễn Ái Quốc có vai trò nổi bật nào sau đây?",
    a: "A",
    o: [
      "Xây dựng lí luận cách mạng giải phóng dân tộc kết hợp với giải phóng giai cấp.",
      "Thành lập tổ chức cộng sản trên cơ sở phong trào công nhân đã đấu tranh tự giác.",
      "Ra báo Thanh niên để phục vụ cho Hội Liên hiệp các dân tộc bị áp bức ở Á Đông.",
      "Viết Cương lĩnh chính trị trước khi sáng lập Hội Việt Nam Cách mạng Thanh niên."
    ],
    r: {
      A: "Đúng. Nguyễn Ái Quốc có vai trò nổi bật trong việc truyền bá chủ nghĩa Mác - Lênin, xây dựng lí luận giải phóng dân tộc theo khuynh hướng vô sản.",
      B: "Sai. Các tổ chức cộng sản ở Việt Nam năm 1929 không phải do Nguyễn Ái Quốc trực tiếp thành lập.",
      C: "Sai. Báo Thanh niên là cơ quan ngôn luận của Hội Việt Nam Cách mạng Thanh niên, không phải của Hội Liên hiệp các dân tộc bị áp bức ở Á Đông.",
      D: "Sai. Cương lĩnh chính trị đầu tiên được soạn thảo đầu năm 1930, sau khi Hội Việt Nam Cách mạng Thanh niên đã ra đời."
    }
  },
  {
    q: "Trong quá trình chuẩn bị về tổ chức để thành lập Đảng Cộng sản Việt Nam (1919 - 1929), Nguyễn Ái Quốc có sự sáng tạo nào sau đây?",
    a: "C",
    o: [
      "Chủ nhiệm, kiêm chủ bút cho tờ báo Người cùng khổ để tuyên truyền cách mạng.",
      "Xuất bản cuốn Đường Kách mệnh, bí mật gửi về nước để tuyên truyền cách mạng.",
      "Thành lập các tổ chức tiền cộng sản trước khi thành lập Đảng Cộng sản Việt Nam.",
      "Viết tác phẩm Bản án chế độ thực dân Pháp để tố cáo những tội ác của thực dân Pháp."
    ],
    r: {
      A: "Sai. Đây là hoạt động tuyên truyền có ý nghĩa lớn nhưng không thể hiện rõ nhất sự sáng tạo về tổ chức.",
      B: "Sai. Đường Kách mệnh là tài liệu quan trọng về tư tưởng, chính trị hơn là sự sáng tạo về tổ chức.",
      C: "Đúng. Nguyễn Ái Quốc không thành lập ngay Đảng Cộng sản mà lập tổ chức tiền thân để huấn luyện cán bộ, truyền bá lí luận, chuẩn bị cho sự ra đời của Đảng.",
      D: "Sai. Đây là hoạt động tố cáo chủ nghĩa thực dân, không phải biểu hiện nổi bật nhất của sự sáng tạo về tổ chức."
    }
  },
  {
    q: "Những hoạt động của Nguyễn Ái Quốc trong giai đoạn từ năm 1920 đến năm 1930 có đóng góp nào sau đây đối với cách mạng Việt Nam?",
    a: "C",
    o: [
      "Tạo ra nhân tố chuẩn bị đầu tiên, quyết định mọi bước phát triển nhảy vọt của lịch sử dân tộc.",
      "Đưa Việt Nam chính thức đứng vào hàng ngũ các nước dân chủ và phong trào cộng sản quốc tế.",
      "Hoàn chỉnh đường lối chiến lược và sách lược của cuộc cách mạng giải phóng dân tộc.",
      "Vạch ra phương hướng và chỉ đạo toàn dân tiến hành cuộc cách mạng dân tộc dân chủ nhân dân."
    ],
    r: {
      A: "Sai. Cách diễn đạt này quá chung và thường dùng để nói về vai trò của Đảng Cộng sản Việt Nam sau khi ra đời.",
      B: "Sai. Nhận định này không đúng với đóng góp trực tiếp của Nguyễn Ái Quốc giai đoạn 1920 - 1930.",
      C: "Đúng. Trong giai đoạn này, Nguyễn Ái Quốc xác lập và hoàn chỉnh những nét cơ bản của đường lối chiến lược, sách lược cho cách mạng giải phóng dân tộc ở Việt Nam.",
      D: "Sai. Nội dung này gắn với giai đoạn lãnh đạo cách mạng sau khi Đảng ra đời, không phản ánh đúng trọng tâm đóng góp của giai đoạn 1920 - 1930."
    }
  },
  {
    q: "Hoạt động của Hồ Chí Minh trong những năm 1954 - 1969 có điểm khác biệt nào sau đây so với thời kì 1945 - 1954?",
    a: "C",
    o: [
      "Lãnh đạo cuộc chiến tranh giải phóng và bảo vệ Tổ quốc Việt Nam.",
      "Góp phần mở rộng quan hệ ngoại giao Nhà nước của Việt Nam với thế giới.",
      "Lãnh đạo công cuộc xây dựng chủ nghĩa xã hội ở miền Bắc Việt Nam.",
      "Lãnh đạo cách mạng Việt Nam chống thực dân Pháp và can thiệp Mỹ."
    ],
    r: {
      A: "Sai. Đây là nội dung rộng, bao quát cả hai thời kì nên không thể hiện điểm khác biệt rõ nhất.",
      B: "Sai. Hoạt động ngoại giao diễn ra ở cả hai giai đoạn, không phải điểm khác biệt nổi bật nhất.",
      C: "Đúng. Từ sau năm 1954, nhiệm vụ mới nổi bật là lãnh đạo xây dựng chủ nghĩa xã hội ở miền Bắc, đồng thời tiếp tục đấu tranh giải phóng miền Nam.",
      D: "Sai. Nội dung này nghiêng về giai đoạn 1945 - 1954 hơn, không phải nét đặc trưng riêng của 1954 - 1969."
    }
  },
  {
    q: "Nguyễn Tất Thành không tiếp tục hoạt động ở trong nước mà quyết định ra nước ngoài vào năm 1911 vì lí do chủ yếu nào sau đây?",
    a: "A",
    o: [
      "Vì trong nước đang bế tắc về đường lối cứu nước và giai cấp lãnh đạo.",
      "Vì Nguyễn Tất Thành tiếp thu truyền thống yêu nước của quê hương.",
      "Vì phương Tây là nơi có khoa học kĩ thuật phát triển, có tư tưởng tiến bộ.",
      "Vì Nguyễn Tất Thành nhận thức được sức mạnh của đoàn kết quốc tế."
    ],
    r: {
      A: "Đúng. Các phong trào yêu nước cuối thế kỉ XIX đầu thế kỉ XX đều thất bại, đường lối cứu nước bế tắc, nên Nguyễn Tất Thành quyết định ra đi tìm con đường mới.",
      B: "Sai. Đây là cơ sở hình thành lòng yêu nước, nhưng không phải lí do chủ yếu dẫn tới quyết định ra đi năm 1911.",
      C: "Sai. Đây chỉ là một yếu tố tác động, không phải nguyên nhân chủ yếu nhất.",
      D: "Sai. Nhận thức về đoàn kết quốc tế được hình thành rõ hơn trong quá trình hoạt động sau này."
    }
  },
  {
    q: "Từ hành trình ra đi tìm đường cứu nước của Nguyễn Tất Thành, thế hệ trẻ ngày nay cần rút ra bài học thực tiễn nào sau đây trong việc lựa chọn hướng đi cho bản thân?",
    a: "B",
    o: [
      "Mạnh dạn đổi mới tư duy và hành động, duy trì thành tựu của thế hệ trước.",
      "Chủ động tiếp thu tri thức hiện đại, góp phần vào sự phát triển của đất nước.",
      "Nắm bắt cơ hội để hưởng thụ điều kiện sống và làm việc tốt ở các nước phát triển.",
      "Ưu tiên chọn những ngành nghề có thể đảm bảo tương lai tài chính ổn định."
    ],
    r: {
      A: "Sai. Ý này đúng một phần nhưng còn chung chung, chưa thể hiện rõ bài học thực tiễn sâu sắc nhất từ hành trình tìm đường cứu nước của Nguyễn Tất Thành.",
      B: "Đúng. Bài học nổi bật là phải chủ động học hỏi, tiếp thu tri thức mới của thời đại để phục vụ đất nước, chứ không chỉ vì lợi ích cá nhân.",
      C: "Sai. Mục đích ra đi của Nguyễn Tất Thành là tìm đường cứu nước, không phải mưu cầu đời sống cá nhân tốt hơn.",
      D: "Sai. Đây là định hướng cá nhân thuần túy, không phản ánh đúng tinh thần dấn thân và trách nhiệm với đất nước."
    }
  },
  {
    q: "Nội dung nào sau đây là một trong những đóng góp của Chủ tịch Hồ Chí Minh trong cuộc kháng chiến chống Mỹ cứu nước thời kì 1965 - 1968?",
    a: "A",
    o: [
      "Cùng với Trung ương Đảng phân tích, dự báo tình hình và quyết tâm đánh thắng quân Mỹ.",
      "Cùng với các tướng lĩnh trực tiếp xuống trận địa để chỉ huy các trận đánh của quân đội Việt Nam.",
      "Đi thăm các nước trong khối xã hội chủ nghĩa, tranh thủ các nước nhờ giúp Việt Nam đánh Mỹ.",
      "Cùng với Trung ương Đảng hoạch định đường lối chiến lược cho cách mạng hai miền Nam - Bắc."
    ],
    r: {
      A: "Đúng. Trong giai đoạn 1965 - 1968, Hồ Chí Minh cùng Trung ương Đảng phân tích tình hình, khẳng định quyết tâm đánh thắng đế quốc Mỹ.",
      B: "Sai. Hồ Chí Minh không trực tiếp xuống trận địa chỉ huy các trận đánh như một vị tướng ngoài mặt trận.",
      C: "Sai. Hoạt động tranh thủ quốc tế là quan trọng, nhưng phương án này không phản ánh đúng nét tiêu biểu nhất của vai trò của Người trong giai đoạn 1965 - 1968.",
      D: "Sai. Đường lối chiến lược cho cách mạng hai miền được xác định từ sớm hơn, không riêng cho giai đoạn 1965 - 1968."
    }
  },
  {
    q: "Từ thực tiễn về vai trò của Hồ Chí Minh đối với thắng lợi của Cách mạng tháng Tám năm 1945 có thể rút ra bài học nào sau đây cho công cuộc xây dựng đất nước hiện nay?",
    a: "A",
    o: [
      "Phát huy vai trò của tổ chức tập hợp quần chúng để thực hiện thắng lợi mục tiêu chung.",
      "Đánh giá và tận dụng thời cơ trong điều kiện các cường quốc tham gia chiến tranh thế giới.",
      "Xây dựng lực lượng vũ trang và tham gia các liên minh quân sự của các cường quốc.",
      "Phát huy vai trò của hậu phương trong việc đảm bảo vật chất, tinh thần cho kháng chiến."
    ],
    r: {
      A: "Đúng. Bài học lớn là phải phát huy vai trò lãnh đạo, tập hợp và tổ chức quần chúng để thực hiện mục tiêu chung của đất nước.",
      B: "Sai. Yếu tố thời cơ là quan trọng trong Cách mạng tháng Tám, nhưng cách diễn đạt này quá gắn với bối cảnh chiến tranh thế giới, không phù hợp trực tiếp với công cuộc xây dựng đất nước hiện nay.",
      C: "Sai. Việt Nam hiện nay không theo đường lối tham gia liên minh quân sự với các cường quốc.",
      D: "Sai. Phương án này nghiêng về bối cảnh chiến tranh hơn là bài học chủ yếu cho xây dựng đất nước hiện nay."
    }
  },
  {
    q: "Nguyễn Ái Quốc đã rút ra bài học chủ yếu nào sau đây từ thất bại của việc gửi bản Yêu sách của nhân dân An Nam đến Hội nghị Véc-xai (1919)?",
    a: "D",
    o: [
      "Phân biệt được bạn và thù của dân tộc.",
      "Nhận thức rõ vai trò của sự đoàn kết trong công cuộc giải phóng.",
      "Sự đúng đắn của con đường cách mạng vô sản.",
      "Muốn giải phóng chỉ có thể dựa vào sức lực của chính mình."
    ],
    r: {
      A: "Sai. Việc phân biệt bạn - thù được nhận thức rõ dần trong quá trình hoạt động, nhưng không phải bài học chủ yếu trực tiếp rút ra từ thất bại ở Véc-xai.",
      B: "Sai. Đoàn kết là yếu tố quan trọng, nhưng chưa phải kết luận chủ yếu rút ra từ sự kiện này.",
      C: "Sai. Đến năm 1919, Nguyễn Ái Quốc chưa hoàn toàn tiếp cận và khẳng định con đường cách mạng vô sản.",
      D: "Đúng. Thất bại của bản Yêu sách cho thấy không thể trông chờ các nước đế quốc trao trả độc lập, mà phải tự mình đấu tranh giành lấy."
    }
  },
  {
    q: "Lý luận giải phóng dân tộc của Nguyễn Ái Quốc được truyền bá vào Việt Nam trong những năm 1921 - 1929 có điểm mới nào sau đây?",
    a: "A",
    o: [
      "Gắn độc lập dân tộc với chủ nghĩa xã hội.",
      "Giải phóng dân tộc khỏi sự áp bức của thực dân.",
      "Gắn vấn đề dân tộc với dân chủ, dân quyền.",
      "Giành độc lập gắn với khôi phục chế độ quân chủ."
    ],
    r: {
      A: "Đúng. Điểm mới nổi bật trong lý luận của Nguyễn Ái Quốc là gắn giải phóng dân tộc với con đường đi lên chủ nghĩa xã hội.",
      B: "Sai. Mục tiêu giải phóng dân tộc khỏi ách thực dân không phải mới, vì các nhà yêu nước trước đó cũng hướng tới mục tiêu này.",
      C: "Sai. Đây là nội dung tiến bộ nhưng chưa phải điểm mới cơ bản nhất so với các khuynh hướng cứu nước trước.",
      D: "Sai. Nguyễn Ái Quốc không chủ trương khôi phục chế độ quân chủ."
    }
  },
  {
    q: "Con đường cứu nước của Nguyễn Ái Quốc có gì mới và khác so với con đường truyền thống của lớp người đi trước?",
    a: "C",
    o: [
      "Gửi yêu sách đòi Pháp thừa nhận các quyền dân tộc của Việt Nam.",
      "Tiếp thu nền văn minh phương Tây để giúp đất nước đến phú cường.",
      "Hướng về phương Tây, khảo sát thực tiễn, tìm hiểu cách mạng thế giới.",
      "Nhờ các nước phương Tây đào tạo lực lượng để chuẩn bị chống Pháp."
    ],
    r: {
      A: "Sai. Đây chỉ là một hoạt động cụ thể trong quá trình đấu tranh của Nguyễn Ái Quốc, không phải nét mới tiêu biểu của cả con đường cứu nước.",
      B: "Sai. Tiếp thu văn minh phương Tây là một hướng tiếp cận, nhưng chưa nêu bật bản chất mới và khác.",
      C: "Đúng. Nguyễn Ái Quốc chọn đi sang phương Tây để khảo sát thực tiễn, nghiên cứu các cuộc cách mạng, từ đó tìm ra con đường cứu nước đúng đắn.",
      D: "Sai. Nguyễn Ái Quốc không chủ trương dựa vào phương Tây để đào tạo lực lượng chống Pháp."
    }
  },
  {
    q: "Năm 2006, Bộ Chính trị Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam phát động cuộc vận động 'Học tập và làm theo tấm gương đạo đức Hồ Chí Minh' để",
    a: "C",
    o: [
      "Phát động thế hệ trẻ đi học theo phong cách Hồ Chí Minh.",
      "Xây dựng hình tượng Chủ tịch Hồ Chí Minh trong văn học.",
      "Phát huy giá trị to lớn của tư tưởng, đạo đức Hồ Chí Minh.",
      "Nâng cao năng lực học tập của nhân dân trong thời đại mới."
    ],
    r: {
      A: "Sai. Cuộc vận động không chỉ hướng tới thế hệ trẻ và cũng không chỉ nhấn vào phong cách.",
      B: "Sai. Đây không phải mục đích của một cuộc vận động chính trị - tư tưởng trong toàn Đảng, toàn dân.",
      C: "Đúng. Cuộc vận động nhằm phát huy giá trị to lớn của tư tưởng, đạo đức Hồ Chí Minh trong đời sống chính trị và xã hội.",
      D: "Sai. Nâng cao năng lực học tập là ý nghĩa gián tiếp, không phải mục tiêu trực tiếp của cuộc vận động."
    }
  },
  {
    q: "Nhận định nào sau đây là đúng về vị trí của Chủ tịch Hồ Chí Minh với phong trào cộng sản và công nhân quốc tế?",
    a: "A",
    o: [
      "Chủ tịch Hồ Chí Minh là một chiến sĩ lỗi lạc.",
      "Người lãnh đạo cao nhất của Quốc tế cộng sản.",
      "Hoạch định đường lối cho các dân tộc thuộc địa.",
      "Biểu tượng cho nền hòa bình an ninh của thế giới."
    ],
    r: {
      A: "Đúng. Hồ Chí Minh là một chiến sĩ cộng sản lỗi lạc, có đóng góp quan trọng đối với phong trào cộng sản và công nhân quốc tế.",
      B: "Sai. Hồ Chí Minh không phải là người lãnh đạo cao nhất của Quốc tế cộng sản.",
      C: "Sai. Người có đóng góp quan trọng về lý luận và thực tiễn cho phong trào giải phóng dân tộc, nhưng không phải là người hoạch định đường lối cho toàn bộ các dân tộc thuộc địa.",
      D: "Sai. Cách diễn đạt này quá chung chung và không đúng với vị trí lịch sử cụ thể của Hồ Chí Minh."
    }
  },
  {
    q: "Đối với Việt Nam hiện nay, phong cách, đạo đức Hồ Chí Minh có giá trị nào sau đây?",
    a: "A",
    o: [
      "Góp phần xây dựng nhà nước pháp quyền xã hội chủ nghĩa trong sạch, vững mạnh.",
      "Nhận được viện trợ lớn của thế giới trong công cuộc xây dựng và bảo vệ Tổ quốc.",
      "Bổ sung, hoàn chỉnh đường lối Đổi mới nhằm phát huy được thời cơ và thách thức.",
      "Tập hợp được sức mạnh của nhân dân trong việc xây dựng chế độ dân chủ cộng hòa."
    ],
    r: {
      A: "Đúng. Việc học tập và làm theo phong cách, đạo đức Hồ Chí Minh góp phần quan trọng vào xây dựng bộ máy nhà nước trong sạch, vững mạnh.",
      B: "Sai. Đây không phải giá trị trực tiếp của phong cách, đạo đức Hồ Chí Minh đối với Việt Nam hiện nay.",
      C: "Sai. Phong cách, đạo đức Hồ Chí Minh có ý nghĩa định hướng và giáo dục, không trực tiếp bổ sung hay hoàn chỉnh đường lối Đổi mới.",
      D: "Sai. Chế độ dân chủ cộng hòa là khái niệm gắn với giai đoạn lịch sử trước, không phù hợp để diễn đạt giá trị hiện nay."
    }
  },
  {
    q: "Tại Hội nghị thành lập Đảng Cộng sản Việt Nam (đầu năm 1930), vai trò nào sau đây của Nguyễn Ái Quốc thể hiện sự vận dụng sáng tạo chủ nghĩa Mác - Lênin ở Việt Nam?",
    a: "C",
    o: [
      "Xác định phương hướng tiến lên.",
      "Xác định lực lượng nòng cốt.",
      "Xác định lực lượng cách mạng.",
      "Xác định giai cấp lãnh đạo."
    ],
    r: {
      A: "Sai. Phương hướng tiến lên chủ nghĩa xã hội là nguyên lí chung của chủ nghĩa Mác - Lênin, chưa thể hiện rõ nhất sự vận dụng sáng tạo ở Việt Nam.",
      B: "Sai. Lực lượng nòng cốt là công nhân và nông dân, đây là điểm cơ bản của lí luận Mác - Lênin.",
      C: "Đúng. Nguyễn Ái Quốc xác định lực lượng cách mạng rất rộng, không chỉ công - nông mà còn tranh thủ nhiều tầng lớp khác, thể hiện sự vận dụng sáng tạo vào hoàn cảnh Việt Nam.",
      D: "Sai. Việc xác định giai cấp công nhân là giai cấp lãnh đạo là nguyên tắc chung của cách mạng vô sản."
    }
  },
  {
    q: "Nội dung nào sau đây thể hiện vai trò của Hồ Chí Minh trong hoạt động ngoại giao từ năm 1954 đến năm 1969?",
    a: "D",
    o: [
      "Giữ vững quan điểm tự do, tự chủ của cách mạng Đông Dương.",
      "Khéo léo trong việc cân bằng quan hệ Mỹ - Trung Quốc.",
      "Khéo léo trong việc cân bằng quan hệ Liên Xô - Mỹ.",
      "Giữ vững đường lối độc lập, tự chủ của cách mạng Việt Nam."
    ],
    r: {
      A: "Sai. Cách diễn đạt này không phản ánh đúng trọng tâm hoạt động ngoại giao của Hồ Chí Minh trong giai đoạn 1954 - 1969.",
      B: "Sai. Quan hệ Mỹ - Trung Quốc không phải trục chính để đánh giá vai trò ngoại giao của Hồ Chí Minh trong giai đoạn này.",
      C: "Sai. Đây không phải nội dung tiêu biểu phản ánh đúng vai trò ngoại giao của Hồ Chí Minh.",
      D: "Đúng. Trong hoạt động ngoại giao, Hồ Chí Minh luôn giữ vững đường lối độc lập, tự chủ, tranh thủ sự ủng hộ quốc tế nhưng không để cách mạng Việt Nam lệ thuộc."
    }
  },
  {
    q: "Việc Nguyễn Ái Quốc tìm ra con đường cứu nước cho dân tộc Việt Nam đã",
    a: "C",
    o: [
      "Mở ra kỉ nguyên độc lập, tự do, đưa cả nước đi lên chủ nghĩa xã hội.",
      "Chấm dứt thời kì khủng hoảng về đường lối cứu nước ở Việt Nam.",
      "Mở ra thời kì giải quyết khủng hoảng về đường lối cứu nước ở Việt Nam.",
      "Tạo nên bước ngoặt vĩ đại trong lịch sử cách mạng Việt Nam."
    ],
    r: {
      A: "Sai. Nội dung này gắn với thắng lợi của Cách mạng tháng Tám năm 1945 chứ không phải với việc Nguyễn Ái Quốc tìm ra con đường cứu nước.",
      B: "Sai. Sự kiện này chưa chấm dứt ngay cuộc khủng hoảng đường lối cứu nước mà mới mở ra quá trình giải quyết cuộc khủng hoảng đó.",
      C: "Đúng. Nguyễn Ái Quốc tìm ra con đường cứu nước đã mở ra thời kì mới, từng bước giải quyết cuộc khủng hoảng về đường lối cứu nước ở Việt Nam.",
      D: "Sai. Nhận định này quá rộng; phương án C chính xác và chặt chẽ hơn."
    }
  },
  {
    q: "Nội dung nào sau đây là một trong những điểm giống nhau về hoạt động của Phan Bội Châu và Nguyễn Ái Quốc ở những thập kỉ đầu của thế kỉ XX?",
    a: "B",
    o: [
      "Xây dựng quan hệ giữa những người cộng sản với nhân dân các nước thuộc địa.",
      "Viết, sử dụng sách báo để tuyên truyền, chú trọng đào tạo lực lượng cách mạng.",
      "Dựa vào Pháp và Nhật Bản tiến hành cải cách, nâng cao dân trí, dân quyền.",
      "Phê phán chính quyền thực dân, thức tỉnh dư luận Pháp về tình hình Việt Nam."
    ],
    r: {
      A: "Sai. Nội dung này chỉ phù hợp với Nguyễn Ái Quốc, không phải điểm giống với Phan Bội Châu.",
      B: "Đúng. Cả Phan Bội Châu và Nguyễn Ái Quốc đều dùng sách báo để tuyên truyền, đồng thời chú ý đến việc chuẩn bị, đào tạo lực lượng cách mạng.",
      C: "Sai. Phan Bội Châu từng có xu hướng cầu viện Nhật, nhưng Nguyễn Ái Quốc không đi theo con đường này.",
      D: "Sai. Hoạt động thức tỉnh dư luận Pháp gắn nổi bật hơn với Nguyễn Ái Quốc, không phải điểm giống tiêu biểu."
    }
  }

  
];
