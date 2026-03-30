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
  }
];
