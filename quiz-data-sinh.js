const quizData = [
  {
    q: "Tập hợp toàn bộ các nhân tố bao quanh sinh vật, ảnh hưởng đến sự sinh trưởng, phát triển và tồn tại của sinh vật gọi là gì?",
    a: "A",
    o: ["Môi trường sống.", "Nhân tố sinh thái.", "Giới hạn sinh thái.", "Ổ sinh thái."],
    r: {
      A: "Đúng. Môi trường sống là tập hợp toàn bộ các nhân tố bao quanh sinh vật, ảnh hưởng đến sự sinh trưởng, phát triển và tồn tại của sinh vật.",
      B: "Sai. Nhân tố sinh thái chỉ là từng yếu tố riêng lẻ của môi trường tác động đến sinh vật.",
      C: "Sai. Giới hạn sinh thái là khoảng giá trị xác định của một nhân tố sinh thái mà sinh vật có thể tồn tại.",
      D: "Sai. Ổ sinh thái là nơi ở và cách sống đặc trưng của loài trong môi trường."
    }
  },
  {
    q: "Giun đũa sống ký sinh trong ruột non của người, môi trường sống của giun đũa là gì?",
    a: "C",
    o: ["Môi trường trên cạn.", "Môi trường nước.", "Môi trường sinh vật.", "Môi trường đất."],
    r: {
      A: "Sai. Giun đũa không sống tự do trên cạn mà sống ký sinh trong cơ thể người.",
      B: "Sai. Giun đũa không sống trong môi trường nước.",
      C: "Đúng. Giun đũa sống trong cơ thể người nên thuộc môi trường sinh vật.",
      D: "Sai. Môi trường đất không phải nơi sống ký sinh của giun đũa trưởng thành."
    }
  },
  {
    q: "Khi nói về nhân tố sinh thái, phát biểu nào sau đây là đúng?",
    a: "D",
    o: [
      "Nhân tố sinh thái là những yếu tố của môi trường ảnh hưởng trực tiếp đến đời sống sinh vật.",
      "Các nhân tố sinh thái vô sinh không gây ảnh hưởng đến sự tồn tại, sinh trưởng và phát triển của sinh vật.",
      "Nhân tố sinh thái được chia thành nhân tố vô sinh, hữu sinh và con người.",
      "Nhân tố con người ảnh hưởng mạnh đến môi trường cũng như đời sống của các sinh vật khác."
    ],
    r: {
      A: "Sai. Nhân tố sinh thái có thể ảnh hưởng trực tiếp hoặc gián tiếp đến sinh vật, không chỉ trực tiếp.",
      B: "Sai. Nhân tố vô sinh như nhiệt độ, ánh sáng, nước... ảnh hưởng rất lớn đến sinh vật.",
      C: "Sai. Nhân tố sinh thái thường được chia thành hai nhóm chính là vô sinh và hữu sinh; con người thuộc nhóm hữu sinh.",
      D: "Đúng. Con người tác động rất mạnh đến môi trường và đời sống của nhiều loài sinh vật."
    }
  },
  {
    q: "Yếu tố nào sau đây là thành phần hữu sinh của môi trường?",
    a: "B",
    o: [
      "Ánh sáng.",
      "Hệ vi khuẩn trong đường tiêu hoá của người.",
      "Các chất hữu cơ con người hấp thụ qua thức ăn.",
      "Nhiệt độ."
    ],
    r: {
      A: "Sai. Ánh sáng là nhân tố vô sinh.",
      B: "Đúng. Hệ vi khuẩn là các sinh vật sống nên là thành phần hữu sinh của môi trường.",
      C: "Sai. Các chất hữu cơ là vật chất, không phải sinh vật sống.",
      D: "Sai. Nhiệt độ là nhân tố vô sinh."
    }
  },
  {
    q: "Nhân tố nào sau đây không phải là nhân tố vô sinh?",
    a: "A",
    o: [
      "Sự cạnh tranh giữa các cá thể cùng loài.",
      "Xác sinh vật, cành lá rụng.",
      "Nhiệt độ, độ ẩm, cường độ ánh sáng.",
      "Nước, khí oxygen, thổ nhưỡng."
    ],
    r: {
      A: "Đúng. Sự cạnh tranh giữa các cá thể cùng loài là mối quan hệ giữa các sinh vật nên thuộc nhân tố hữu sinh.",
      B: "Sai. Xác sinh vật và cành lá rụng là thành phần không còn sống, thường được xếp vào yếu tố vô sinh của môi trường.",
      C: "Sai. Nhiệt độ, độ ẩm, cường độ ánh sáng đều là các nhân tố vô sinh.",
      D: "Sai. Nước, oxygen và thổ nhưỡng là các nhân tố vô sinh."
    }
  },
  {
    q: "Nhân tố sinh thái nào sau đây là nhân tố hữu sinh?",
    a: "D",
    o: [
      "Nhiệt độ ảnh hưởng đến sự nở trứng của loài kiến.",
      "Ánh sáng tác động lên các thảm thực vật.",
      "Chất dinh dưỡng của đất.",
      "Cỏ dại và đậu cạnh tranh chất dinh dưỡng."
    ],
    r: {
      A: "Sai. Nhiệt độ là nhân tố vô sinh.",
      B: "Sai. Ánh sáng là nhân tố vô sinh.",
      C: "Sai. Chất dinh dưỡng của đất thuộc môi trường vô sinh.",
      D: "Đúng. Sự cạnh tranh giữa cỏ dại và đậu là mối quan hệ giữa các sinh vật sống nên là nhân tố hữu sinh."
    }
  },
  {
    q: "Virus Corona gây bệnh viêm đường hô hấp cấp tính ở người. Trong một thành phố đông dân cư, nếu có người bị nhiễm virus gây bệnh thì tốc độ lây lan của bệnh này cho con người rất nhanh. Nhân tố sinh thái gây ra hiện tượng trên là gì?",
    a: "A",
    o: [
      "Nhân tố hữu sinh.",
      "Nhân tố vô sinh.",
      "Nhân tố không phụ thuộc nhiệt độ.",
      "Nhân tố phụ thuộc nhiệt độ."
    ],
    r: {
      A: "Đúng. Sự lây lan bệnh liên quan đến virus và con người, đều thuộc yếu tố sống nên đây là nhân tố hữu sinh.",
      B: "Sai. Hiện tượng này không do các yếu tố vật lí, hoá học của môi trường gây ra.",
      C: "Sai. Đây không phải cách phân loại phù hợp trong trường hợp này.",
      D: "Sai. Tốc độ lây lan ở đây chủ yếu do mối quan hệ giữa các sinh vật sống trong quần thể người."
    }
  },
  {
    q: "Phát biểu nào sau đây đúng về ánh sáng trong môi trường nước?",
    a: "A",
    o: [
      "Nước phản xạ và hấp thụ có chọn lọc các bước sóng ánh sáng nhất định.",
      "Các sinh vật quang hợp sống ở vùng nước sâu có thể sử dụng ánh sáng đỏ.",
      "Ánh sáng không ảnh hưởng đến sự phân bố của các loài có khả năng quang hợp.",
      "Hầu hết các sinh vật quang hợp đều tránh bề mặt nơi có ánh sáng quá mạnh."
    ],
    r: {
      A: "Đúng. Trong môi trường nước, các bước sóng ánh sáng bị phản xạ và hấp thụ khác nhau nên ánh sáng thay đổi theo độ sâu.",
      B: "Sai. Ánh sáng đỏ bị hấp thụ mạnh ở tầng nước nông, khó xuống sâu.",
      C: "Sai. Ánh sáng ảnh hưởng rõ rệt đến sự phân bố của sinh vật quang hợp trong nước.",
      D: "Sai. Nhiều sinh vật quang hợp tập trung ở tầng nước mặt hoặc gần mặt nước vì nơi đó có nhiều ánh sáng hơn."
    }
  },
  {
    q: "Phát biểu nào sau đây khi nói về môi trường sống của sinh vật là sai?",
    a: "A",
    o: [
      "Môi trường bao gồm tất cả các nhân tố xung quanh có tác động trực tiếp tới đời sinh vật.",
      "Môi trường là nơi sinh vật thu nhận nguồn sống để tồn tại và phát triển.",
      "Các nhân tố trong môi trường bao gồm nhân tố hữu sinh và nhân tố vô sinh.",
      "Các nhân tố trong môi trường có ảnh hưởng trực tiếp hoặc gián tiếp lên sinh vật."
    ],
    r: {
      A: "Đúng. Đây là phương án sai vì môi trường tác động lên sinh vật không chỉ trực tiếp mà còn gián tiếp.",
      B: "Sai. Đây là phát biểu đúng về vai trò của môi trường sống.",
      C: "Sai. Đây là phát biểu đúng vì môi trường gồm nhân tố hữu sinh và vô sinh.",
      D: "Sai. Đây là phát biểu đúng vì các nhân tố môi trường có thể ảnh hưởng trực tiếp hoặc gián tiếp."
    }
  },
  {
    q: "Nội dung của quy luật giới hạn sinh thái đề cập tới",
    a: "B",
    o: [
      "khả năng thích ứng của sinh vật với môi trường.",
      "giới hạn phản ứng của sinh vật với môi trường.",
      "mức độ thuận lợi của môi trường đối với sinh vật.",
      "giới hạn phát triển có mức độ của sinh vật trước môi trường."
    ],
    r: {
      A: "Sai. Khả năng thích ứng là hệ quả liên quan, nhưng nội dung trực tiếp của quy luật giới hạn sinh thái nói về giới hạn chịu đựng của sinh vật trước các nhân tố môi trường.",
      B: "Đúng. Quy luật giới hạn sinh thái đề cập đến giới hạn phản ứng hay giới hạn chịu đựng của sinh vật đối với một nhân tố sinh thái nhất định.",
      C: "Sai. Mức độ thuận lợi của môi trường chỉ là một phần khi xét khoảng cực thuận, không phản ánh đầy đủ nội dung quy luật.",
      D: "Sai. Cách diễn đạt này không chính xác về mặt khái niệm sinh thái học."
    }
  },
  {
    q: "Khi nói về giới hạn sinh thái của một sinh vật, phát biểu nào sau đây đúng?",
    a: "C",
    o: [
      "Khi một nhân tố sinh thái không thuận lợi thì giới hạn sinh thái của các nhân tố khác thường được mở rộng.",
      "Sinh vật càng có giới hạn sinh thái rộng với nhiều nhân tố sinh thái thì có vùng phân bố càng hẹp.",
      "Ở giai đoạn sinh sản hoặc bị bệnh lí thì giới hạn sinh thái của nhiều nhân tố bị thu hẹp.",
      "Ở lứa tuổi non hay già, sinh vật thường có giới hạn sinh thái rộng hơn các sinh vật có độ tuổi trung bình."
    ],
    r: {
      A: "Sai. Khi một nhân tố không thuận lợi, giới hạn sinh thái của các nhân tố khác thường bị thu hẹp chứ không mở rộng.",
      B: "Sai. Sinh vật có giới hạn sinh thái rộng thường có vùng phân bố rộng hơn.",
      C: "Đúng. Ở giai đoạn sinh sản hoặc khi bị bệnh, sinh vật thường kém chịu đựng hơn nên giới hạn sinh thái bị thu hẹp.",
      D: "Sai. Ở lứa tuổi non hoặc già, sinh vật thường có giới hạn sinh thái hẹp hơn giai đoạn trưởng thành."
    }
  },
  {
    q: "Cá chép có giới hạn chịu đựng về nhiệt độ là: 2 °C – 44 °C, cá rô phi có giới hạn chịu đựng về nhiệt độ là: 5,6 °C – 42 °C. Phát biểu nào sau đây đúng?",
    a: "A",
    o: [
      "Cá chép có vùng phân bố về nhiệt độ rộng hơn cá rô phi do có giới hạn dưới thấp.",
      "Cá chép có vùng phân bố về nhiệt độ rộng hơn cá rô phi do có giới hạn chịu nhiệt rộng hơn.",
      "Cá rô phi có vùng phân bố về nhiệt độ rộng hơn cá chép do có giới hạn trên thấp hơn.",
      "Cá rô phi có vùng phân bố về nhiệt độ rộng hơn cá chép do có giới hạn dưới cao hơn."
    ],
    r: {
      A: "Đúng. Cá chép chịu được nhiệt độ thấp hơn cá rô phi nên có khả năng phân bố ở vùng nhiệt độ lạnh hơn, làm vùng phân bố về nhiệt độ rộng hơn.",
      B: "Sai. Cách nói 'giới hạn chịu nhiệt rộng hơn' không chính xác bằng việc so sánh trực tiếp khoảng nhiệt độ chịu đựng; ở đây điểm nổi bật là cá chép có giới hạn dưới thấp hơn và cả khoảng chịu đựng cũng rộng hơn.",
      C: "Sai. Giới hạn trên thấp hơn không làm vùng phân bố rộng hơn.",
      D: "Sai. Giới hạn dưới cao hơn nghĩa là kém chịu lạnh hơn, nên vùng phân bố về nhiệt độ hẹp hơn."
    }
  },
  {
    q: "Khi thiếu nước, cây trồng dù được bón đủ phân cũng không hấp thụ được. Đây là ví dụ về quy luật sinh thái nào sau đây?",
    a: "B",
    o: [
      "Quy luật giới hạn sinh thái.",
      "Quy luật tác động tổng hợp của các nhân tố sinh thái.",
      "Quy luật tác động không đồng đều của các nhân tố sinh thái.",
      "Quy luật về sinh trưởng và phát triển theo giai đoạn."
    ],
    r: {
      A: "Sai. Ví dụ này không nhấn mạnh giới hạn chịu đựng mà nhấn mạnh sự phối hợp của nhiều nhân tố.",
      B: "Đúng. Cây muốn hấp thụ phân tốt phải có đủ nước, cho thấy các nhân tố sinh thái tác động tổng hợp lên sinh vật.",
      C: "Sai. Tác động không đồng đều là khi mỗi nhân tố ảnh hưởng khác nhau theo từng chức năng hay giai đoạn sống, không phải trọng tâm của ví dụ này.",
      D: "Sai. Ví dụ không nói về các giai đoạn phát triển của cây."
    }
  },
  {
    q: "“Ở giai đoạn trưởng thành, tôm he (Penaeus merguiensis) thích nghi với nồng độ muối cao từ 3,2 – 3,3 % nên giai đoạn này chúng sống ở biển khơi. Giai đoạn sau ấu trùng, chúng thích nghi với nồng độ muối thấp hơn, chỉ 1,0 – 2,5% gần bờ và sống trong rừng ngập mặn. Khi đạt kích thước trưởng thành chúng lại di cư ra biển”. Ví dụ nêu trên mô tả đặc điểm nào của các quy luật sinh thái?",
    a: "B",
    o: [
      "Quy luật giới hạn sinh thái của nhân tố nồng độ muối của nước biển.",
      "Quy luật tác động không đồng đều của các nhân tố sinh thái.",
      "Quy luật tác động tổng hợp của các nhân tố sinh thái.",
      "Quy luật tác động qua lại giữa sinh vật với môi trường."
    ],
    r: {
      A: "Sai. Ví dụ không chỉ nói về giới hạn chịu đựng mà nhấn mạnh sự thay đổi mức thích nghi theo từng giai đoạn sống.",
      B: "Đúng. Cùng một nhân tố là nồng độ muối nhưng tác động khác nhau ở các giai đoạn phát triển khác nhau của tôm he, thể hiện quy luật tác động không đồng đều.",
      C: "Sai. Ví dụ không nhấn mạnh sự phối hợp của nhiều nhân tố cùng lúc.",
      D: "Sai. Dù có liên hệ sinh vật với môi trường, nội dung chính vẫn là mức tác động khác nhau của cùng một nhân tố theo giai đoạn sống."
    }
  },
  {
    q: "Nước có vai trò rất quan trọng đối với cây lúa khi còn non nhưng không quá quan trọng ở giai đoạn lúa chín; ánh sáng có ảnh hưởng nhiều hơn tới chức năng quang hợp của cây so với chức năng hô hấp. Ví dụ trên cho thấy các nhân tố sinh thái tác động",
    a: "D",
    o: [
      "tổng hợp tới sinh vật.",
      "riêng rẽ tới sinh vật.",
      "trực tiếp hoặc gián tiếp tới sinh vật.",
      "không đồng đều tới sinh vật."
    ],
    r: {
      A: "Sai. Ví dụ không nhấn mạnh nhiều nhân tố cùng phối hợp mà nhấn mạnh mức tác động khác nhau.",
      B: "Sai. Trong thực tế các nhân tố không tác động hoàn toàn riêng rẽ.",
      C: "Sai. Đây không phải ý chính của ví dụ.",
      D: "Đúng. Cùng một nhân tố nhưng ảnh hưởng khác nhau theo giai đoạn sống hoặc theo chức năng sinh lí, thể hiện tác động không đồng đều."
    }
  },
  {
    q: "Nhóm động vật nào sau đây gồm toàn các động vật biến nhiệt?",
    a: "C",
    o: [
      "Cá sấu, ếch đồng, giun đất, mèo.",
      "Cá voi, cá heo, mèo, chim bồ câu.",
      "Thằn lằn bóng đuôi dài, tắc kè, cá chép.",
      "Cá rô phi, tôm đồng, cá thu, thỏ."
    ],
    r: {
      A: "Sai. Mèo là động vật hằng nhiệt nên nhóm này không gồm toàn động vật biến nhiệt.",
      B: "Sai. Cá voi, cá heo, mèo, chim bồ câu đều là động vật hằng nhiệt.",
      C: "Đúng. Thằn lằn, tắc kè và cá chép đều là động vật biến nhiệt.",
      D: "Sai. Thỏ là động vật hằng nhiệt."
    }
  },
  {
    q: "“Nhịp sinh học là những phản ứng một cách nhịp nhàng của …….(1)…….dưới sự thay đổi có tính chu kỳ của các …..(2)…….” Vị trí (1) và (2) lần lượt là",
    a: "C",
    o: [
      "(1) nhân tố vô sinh, (2) nhân tố hữu sinh.",
      "(1) nhân tố hữu sinh, (2) nhân tố vô sinh.",
      "(1) cơ thể sinh vật, (2) nhân tố sinh thái.",
      "(1) nhân tố sinh thái, (2) cơ thể sinh vật."
    ],
    r: {
      A: "Sai. Nhịp sinh học không phải là phản ứng của nhân tố vô sinh.",
      B: "Sai. Cách ghép này không đúng với định nghĩa nhịp sinh học.",
      C: "Đúng. Nhịp sinh học là phản ứng nhịp nhàng của cơ thể sinh vật trước sự thay đổi có tính chu kì của các nhân tố sinh thái.",
      D: "Sai. Nhân tố sinh thái không phải chủ thể tạo ra phản ứng sinh học."
    }
  },
  {
    q: "Hiện tượng nào sau đây không phải là ví dụ về nhịp sinh học?",
    a: "D",
    o: [
      "Nhịp thở của con người giảm khi ngủ.",
      "Hoa mười giờ thường nở vào 10 giờ sáng",
      "Chu kì kinh nguyệt của phụ nữ.",
      "Phản ứng bắt mồi của con ếch."
    ],
    r: {
      A: "Sai. Đây là một biểu hiện có tính nhịp điệu sinh học theo trạng thái ngày đêm.",
      B: "Sai. Hoa nở theo thời điểm nhất định trong ngày là ví dụ điển hình của nhịp sinh học.",
      C: "Sai. Chu kì kinh nguyệt là một dạng nhịp sinh học theo chu kì thời gian.",
      D: "Đúng. Phản ứng bắt mồi của con ếch là phản ứng tức thời trước kích thích, không phải nhịp sinh học."
    }
  },
  {
    q: "Hiện tượng nào sau đây không phải là nhịp sinh học?",
    a: "C",
    o: [
      "Ở những vùng có băng tuyết, vào mùa đông phần lớn cây xanh thường rụng lá và sống tiềm sinh.",
      "Ban ngày loài nhím thường cuộn mình nằm bất động, ban đêm lại hoạt động kiếm mồi và tìm bạn.",
      "Trong điều kiện ánh sáng chỉ chiếu từ 1 phía, thân và ngọn cây uốn cong về phía có ánh sáng.",
      "Vào mùa đông, chim én thường di cư sang các khu vực ấm áp, có nhiều thức ăn."
    ],
    r: {
      A: "Sai. Rụng lá và tiềm sinh theo mùa là một dạng nhịp sinh học theo chu kì năm.",
      B: "Sai. Hoạt động ngày đêm của nhím là nhịp sinh học.",
      C: "Đúng. Cây uốn cong về phía có ánh sáng là hướng sáng, không phải nhịp sinh học.",
      D: "Sai. Chim di cư theo mùa là một biểu hiện của nhịp sinh học."
    }
  },



  {
    q: "Tập hợp nào sau đây không phải là tổ chức quần thể?",
    a: "D",
    o: [
      "Các con voi châu phi tại công viên quốc gia.",
      "Các cây tre trong bụi tre đầu làng.",
      "Đàn cá mòi sống trong đại dương.",
      "Các con chim trong khu rừng."
    ],
    r: {
      A: "Sai. Các con voi châu Phi trong cùng một khu vực có thể được xem là một quần thể nếu cùng loài và cùng sống trong một khoảng không gian xác định.",
      B: "Sai. Các cây tre trong một bụi tre thường là tập hợp cùng loài sống gần nhau, thuộc tổ chức quần thể.",
      C: "Sai. Đàn cá mòi là tập hợp các cá thể cùng loài sống trong môi trường xác định.",
      D: "Đúng. Các con chim trong khu rừng thường gồm nhiều loài khác nhau nên không phải là một quần thể."
    }
  },
  {
    q: "Tập hợp sinh vật nào sau đây là ví dụ về một quần thể?",
    a: "D",
    o: [
      "Các con cá trong một hồ nước.",
      "Các con voi trong một vườn thú",
      "Các cây trong một khu rừng.",
      "Các con kiến trong một tổ kiến."
    ],
    r: {
      A: "Sai. Các con cá trong một hồ thường gồm nhiều loài khác nhau nên không phải một quần thể.",
      B: "Sai. Các con voi trong một vườn thú không phải ví dụ điển hình của quần thể trong tự nhiên.",
      C: "Sai. Các cây trong một khu rừng thường gồm nhiều loài khác nhau.",
      D: "Đúng. Các con kiến trong một tổ kiến là tập hợp cùng loài, sống chung trong một không gian xác định."
    }
  },
  {
    q: "Hiện tượng nào sau đây không phải là biểu hiện của quan hệ cạnh tranh trong quần thể?",
    a: "D",
    o: [
      "Ong chúa mới nở giết chết các ấu trùng chưa nở.",
      "Trong vườn rau cải gieo quá dày, những cây cải nhỏ, yếu sẽ bị chết.",
      "Con sói đầu đàn bị đuổi ra khỏi đàn khi già yếu.",
      "Trên các bãi chăn thả ở Australia, thỏ phát triển mạnh giành hết thức ăn của cừu."
    ],
    r: {
      A: "Sai. Đây là biểu hiện cạnh tranh trong cùng loài để giành quyền sinh sản và vị trí trong đàn.",
      B: "Sai. Cây cải gieo quá dày sẽ cạnh tranh ánh sáng, nước và chất dinh dưỡng.",
      C: "Sai. Sói già yếu bị đuổi khỏi đàn là biểu hiện cạnh tranh trong quần thể.",
      D: "Đúng. Thỏ và cừu là hai loài khác nhau nên đây là cạnh tranh khác loài, không phải cạnh tranh trong quần thể."
    }
  },
  {
    q: "Ví dụ nào sau đây minh hoạ cho mối quan hệ hỗ trợ giữa các cá thể trong quần thể",
    a: "B",
    o: [
      "Cá quả ăn thịt đồng loại khi mật độ tăng cao.",
      "Đàn trâu rừng khi ngủ xếp thành vòng tròn, vòng ngoài là những con đực to, khoẻ.",
      "Hươu đực đánh nhau giành con cái vào mùa giao phối.",
      "Chim hải âu đánh nhau giành chỗ làm tổ."
    ],
    r: {
      A: "Sai. Đây là hiện tượng ăn thịt đồng loại, không phải hỗ trợ.",
      B: "Đúng. Trâu rừng xếp vòng tròn để bảo vệ đàn là biểu hiện hỗ trợ giữa các cá thể trong quần thể.",
      C: "Sai. Hươu đực đánh nhau là quan hệ cạnh tranh.",
      D: "Sai. Chim hải âu đánh nhau giành chỗ làm tổ cũng là cạnh tranh."
    }
  },
  {
    q: "Phát biểu nào sau đây về mối quan hệ giữa các cá thể của quần thể sinh vật trong tự nhiên là đúng?",
    a: "A",
    o: [
      "Quan hệ hỗ trợ giữa các cá thể trong quần thể đảm bảo cho quần thể thích nghi tốt hơn với điều kiện môi trường.",
      "Quan hệ cạnh tranh giữa các cá thể trong quần thể sinh vật chỉ xảy ra ở các quần thể động vật, không xảy ra ở các quần thể thực vật.",
      "Quan hệ cạnh tranh giữa các cá thể trong quần thể sinh vật thường làm cho quần thể suy thoái dẫn đến diệt vong.",
      "Sự cạnh tranh giữa các cá thể trong quần thể sinh vật sẽ làm cho số lượng cá thể của quần thể giảm xuống dưới mức tối thiểu."
    ],
    r: {
      A: "Đúng. Quan hệ hỗ trợ giúp các cá thể tồn tại tốt hơn, tăng khả năng thích nghi của quần thể với môi trường.",
      B: "Sai. Cạnh tranh xảy ra ở cả động vật và thực vật.",
      C: "Sai. Cạnh tranh là hiện tượng tự nhiên giúp điều chỉnh số lượng cá thể, không phải lúc nào cũng làm quần thể diệt vong.",
      D: "Sai. Cạnh tranh có thể làm giảm số lượng cá thể nhưng không nhất thiết xuống dưới mức tối thiểu."
    }
  },
  {
    q: "Cá pecca châu âu (Perca fluviatilis) ăn thịt các con cá cùng loài có kích thước nhỏ hơn, thậm chí là con của mình để tồn tại. Đây là ví dụ về mối quan hệ nào giữa các cá thể trong quần thể?",
    a: "B",
    o: [
      "Hỗ trợ nhau trong kiếm ăn.",
      "Ăn thịt đồng loại.",
      "Ký sinh đồng loại.",
      "Cạnh tranh giành nguồn sống."
    ],
    r: {
      A: "Sai. Hành vi này không phải hỗ trợ mà là làm hại cá thể cùng loài.",
      B: "Đúng. Cá ăn những cá thể nhỏ hơn cùng loài là hiện tượng ăn thịt đồng loại.",
      C: "Sai. Ký sinh là sống nhờ trên hoặc trong cơ thể vật chủ, không phải trường hợp này.",
      D: "Sai. Dù có liên quan đến nguồn sống, ví dụ này được xác định trực tiếp là ăn thịt đồng loại."
    }
  },
  {
    q: "Nếu kích thước của quần thể xuống dưới mức tối thiểu thì quần thể sẽ suy thoái và dễ bị diệt vong. Ý nào dưới đây không phải là nguyên nhân gây ra hiện tượng trên?",
    a: "D",
    o: [
      "Mất hiệu quả nhóm.",
      "Sức sinh sản giảm.",
      "Tăng giao phối cận huyết.",
      "Không kiếm đủ thức ăn."
    ],
    r: {
      A: "Sai. Khi quần thể quá nhỏ, mất hiệu quả nhóm là một nguyên nhân làm quần thể suy thoái.",
      B: "Sai. Kích thước quá nhỏ làm giảm cơ hội gặp gỡ và sinh sản, nên sức sinh sản giảm.",
      C: "Sai. Quần thể nhỏ dễ tăng giao phối cận huyết, làm suy giảm sức sống.",
      D: "Đúng. Khi quần thể xuống quá thấp thì nguyên nhân chính không phải do thiếu thức ăn, vì lúc này áp lực cạnh tranh thức ăn thường không lớn."
    }
  },
  {
    q: "Khi nói về kích thước quần thể, phát biểu nào sau đây là đúng?",
    a: "B",
    o: [
      "Hai quần thể của cùng một loài sống ở hai môi trường khác nhau thường có kích thước tối đa giống nhau.",
      "Kích thước tối đa là số lượng cá thể nhiều nhất mà quần thể có thể đạt được, cân bằng với sức chứa của môi trường.",
      "Khi kích thước quần thể xuống dưới mức tối thiểu và nguồn sống dồi dào thì khả năng sinh sản của quần thể tăng lên.",
      "Nếu kích thước quá lớn và khan hiếm nguồn sống thì cạnh tranh cùng loài diễn ra khốc liệt làm giảm kích thước quần thể xuống mức tối thiểu."
    ],
    r: {
      A: "Sai. Kích thước tối đa phụ thuộc vào sức chứa của từng môi trường, nên không nhất thiết giống nhau.",
      B: "Đúng. Kích thước tối đa là số lượng cá thể lớn nhất mà môi trường có thể duy trì ổn định cho quần thể.",
      C: "Sai. Khi quần thể dưới mức tối thiểu, khả năng sinh sản thường giảm do khó gặp nhau và dễ giao phối cận huyết.",
      D: "Sai. Cạnh tranh có thể làm giảm kích thước quần thể, nhưng không nhất thiết giảm xuống mức tối thiểu."
    }
  },
  {
    q: "Điều gì sẽ xảy ra khi kích thước quần thể vượt quá mức tối đa?",
    a: "A",
    o: [
      "Có sự cạnh tranh gay gắt giữa các cá thể trong quần thể.",
      "Khả năng sinh sản của quần thể tăng do cơ hội gặp nhau giữa các cá thể đực với các cá thể cái nhiều hơn.",
      "Sự hỗ trợ giữa các cá thể tăng, quần thể có khả năng chống chọi với những thay đổi của môi trường tốt hơn nhiều.",
      "Quần thể bị suy thoái và dẫn tới diệt vong."
    ],
    r: {
      A: "Đúng. Khi số lượng cá thể vượt quá sức chứa của môi trường, cạnh tranh về thức ăn, nơi ở và các nguồn sống sẽ trở nên gay gắt.",
      B: "Sai. Khi mật độ quá cao, cạnh tranh tăng lên nên khả năng sinh sản thường không tăng bền vững.",
      C: "Sai. Vượt quá mức tối đa không làm hỗ trợ tăng theo hướng có lợi mà thường làm cạnh tranh tăng mạnh.",
      D: "Sai. Quần thể có thể bị giảm số lượng do cạnh tranh, nhưng không phải lúc nào cũng dẫn ngay đến diệt vong."
    }
  },
  {
    q: "Để tăng sự đa dạng di truyền cho một quần thể giao phối đang đứng trước nguy cơ tuyệt chủng do độ đa dạng di truyền thấp, biện pháp đề xuất nào dưới đây là đúng?",
    a: "D",
    o: [
      "Bắt tất cả các cá thể còn lại của quần thể cho sinh sản bắt buộc rồi thả ra môi trường tự nhiên.",
      "Thiết lập một khu bảo tồn để bảo vệ môi trường sống của quần thể.",
      "Kiểm soát quần thể ăn thịt và cạnh tranh với quần thể đang bị nguy hiểm.",
      "Du nhập các cá thể mới cùng loài từ quần thể khác tới."
    ],
    r: {
      A: "Sai. Cách này không giải quyết trực tiếp tình trạng nghèo đa dạng di truyền.",
      B: "Sai. Bảo vệ môi trường sống là cần thiết nhưng không trực tiếp làm tăng đa dạng di truyền.",
      C: "Sai. Giảm áp lực từ quần thể khác có thể giúp bảo tồn số lượng, nhưng không trực tiếp tăng vốn gen.",
      D: "Đúng. Du nhập cá thể mới cùng loài từ quần thể khác sẽ bổ sung alen mới, làm tăng đa dạng di truyền."
    }
  },
  {
    q: "Phát biểu nào dưới đây về sự tăng trưởng của quần thể sinh vật là đúng?",
    a: "D",
    o: [
      "Khi môi trường bị giới hạn, kích thước quần thể luôn nhỏ hơn sức chứa của môi trường.",
      "Khi môi trường bị giới hạn, biểu đồ tăng trưởng có hình chữ J.",
      "Mức độ cản trở của môi trường giảm khi kích thước của quần thể tăng.",
      "Khi môi trường không bị giới hạn, mức sinh sản của quần thể là tối đa, mức tử vong là tối thiểu."
    ],
    r: {
      A: "Sai. Trong môi trường bị giới hạn, kích thước quần thể thường dao động quanh sức chứa môi trường chứ không phải luôn nhỏ hơn.",
      B: "Sai. Khi môi trường bị giới hạn, quần thể thường tăng trưởng theo đường cong chữ S.",
      C: "Sai. Khi kích thước quần thể tăng, mức độ cản trở của môi trường thường tăng lên.",
      D: "Đúng. Khi môi trường không bị giới hạn, quần thể có điều kiện sinh sản cao và tử vong thấp nên tăng trưởng rất nhanh."
    }
  },
  {
    q: "Khi kích thước quần thể dưới mức tối thiểu thì các cá thể trong quần thể trải qua sự biến động nào sau đây?",
    a: "B",
    o: [
      "Tăng ăn thịt đồng loại.",
      "Tăng giao phối gần.",
      "Bùng phát dịch bệnh.",
      "Tăng sự cạnh tranh cùng loài."
    ],
    r: {
      A: "Sai. Ăn thịt đồng loại thường tăng khi mật độ quá cao hoặc thiếu thức ăn, không phải đặc trưng khi quần thể quá nhỏ.",
      B: "Đúng. Khi quần thể quá nhỏ, số cá thể ít nên dễ xảy ra giao phối gần.",
      C: "Sai. Dịch bệnh thường dễ bùng phát hơn khi mật độ quần thể cao.",
      D: "Sai. Khi kích thước quần thể thấp, cạnh tranh cùng loài thường không tăng mạnh."
    }
  },
  {
    q: "Ở một số loài động vật không xương sống (hàu, tôm,…) có sự chuyển đổi giới tính tùy thuộc vào điều kiện môi trường sống. Khi môi trường thuận lợi, các cá thể cái tăng số lượng, còn khi môi trường bất lợi chúng sẽ chuyển sang giới tính đực để tăng khả năng chống chịu. Tỉ lệ giới tính của các quần thể loài này sẽ",
    a: "D",
    o: [
      "luôn luôn là 1: 1.",
      "đực nhiều hơn cái.",
      "cái nhiều hơn đực.",
      "có thể là 0: 1 hoặc 1: 0."
    ],
    r: {
      A: "Sai. Ở những loài có thể chuyển đổi giới tính theo môi trường, tỉ lệ giới tính không cố định 1 : 1.",
      B: "Sai. Có lúc đực nhiều hơn cái nhưng không phải luôn luôn như vậy.",
      C: "Sai. Có lúc cái nhiều hơn đực nhưng cũng không phải luôn luôn như vậy.",
      D: "Đúng. Tỉ lệ giới tính ở các loài này có thể biến đổi rất mạnh theo điều kiện môi trường, thậm chí lệch hẳn về một phía."
    }
  },
  {
    q: "Khi xây dựng tháp tuổi, có thể đánh giá được",
    a: "B",
    o: [
      "tỉ lệ đực: cái của các cá thể trong quần thể.",
      "quần thể đang phát triển, ổn định hay suy thoái.",
      "dạng kiểu phân bố cá thể trong quần thể.",
      "đường cong tăng trưởng của quần thể"
    ],
    r: {
      A: "Sai. Tháp tuổi chủ yếu phản ánh cơ cấu nhóm tuổi, không phải trực tiếp là tỉ lệ đực cái.",
      B: "Đúng. Dựa vào tháp tuổi có thể biết quần thể đang phát triển, ổn định hay suy giảm.",
      C: "Sai. Kiểu phân bố cá thể là vấn đề khác, không xác định trực tiếp bằng tháp tuổi.",
      D: "Sai. Tháp tuổi không cho biết trực tiếp đường cong tăng trưởng của quần thể."
    }
  },
  
  
  
  {
    q: "Tùy theo từng giai đoạn phát triển hoặc đặc điểm của loài, một quần thể có thể thay đổi hình thức tăng trưởng. Điều nào sau đây tác động làm quần thể đang tăng trưởng theo tiềm năng sinh học sang tăng trưởng logistic?",
    a: "D",
    o: [
      "Điều kiện khí hậu thuận lợi.",
      "Loại bỏ động vật ăn thịt.",
      "Giảm tỷ lệ tử vong.",
      "Cạnh tranh về điều kiện sống."
    ],
    r: {
      A: "Sai. Điều kiện khí hậu thuận lợi thường làm quần thể tăng trưởng nhanh hơn theo tiềm năng sinh học, không phải chuyển sang logistic.",
      B: "Sai. Loại bỏ động vật ăn thịt thường làm giảm sức cản môi trường, quần thể càng dễ tăng nhanh.",
      C: "Sai. Giảm tỉ lệ tử vong cũng làm quần thể tăng nhanh hơn, chưa phải nguyên nhân chuyển sang logistic.",
      D: "Đúng. Khi cạnh tranh về thức ăn, nơi ở và các điều kiện sống tăng lên, sức cản môi trường xuất hiện rõ hơn, quần thể chuyển từ tăng trưởng theo tiềm năng sinh học sang tăng trưởng logistic."
    }
  },
  {
    q: "Biểu thức nào sau đây mô tả đúng sự thay đổi kích thước quần thể trong một khoảng thời gian? (Với N = số cá thể; B = số cá thể được sinh ra; I = số cá thể nhập cư vào quần thể đó; D = số cá thể bị chết; E = số cá thể di cư ra khỏi quần thể đang xét)",
    a: "D",
    o: [
      "N = B + D – E +I.",
      "N = (B + D) – (I +E).",
      "N = B + I – D +E.",
      "N = (B + I) – (D +E)."
    ],
    r: {
      A: "Sai. Công thức này cộng cả số chết vào quy mô quần thể nên không đúng.",
      B: "Sai. Nhập cư không làm giảm mà làm tăng kích thước quần thể.",
      C: "Sai. Xuất cư làm giảm kích thước quần thể nên không thể cộng thêm.",
      D: "Đúng. Kích thước quần thể thay đổi theo số cá thể được sinh ra và nhập cư trừ đi số cá thể chết và xuất cư."
    }
  },
  {
    q: "Một nhà sinh thái học quan sát và ghi chép được ở trên cánh đồng một quần thể bướm hổ vằn là 20 con/m2, trong khi đó ở bìa rừng là 35 con/m2. Nhà sinh thái học đang nghiên cứu về đặc trưng nào của quần thể?",
    a: "B",
    o: [
      "Kích thước quần thể.",
      "Mật độ cá thể trong quần thể.",
      "Kiểu phân bố của quần thể.",
      "Kiểu tăng trưởng của quần thể"
    ],
    r: {
      A: "Sai. Kích thước quần thể là tổng số cá thể của quần thể, không phải số cá thể trên một đơn vị diện tích.",
      B: "Đúng. Số con trên 1 mét vuông là số đo mật độ cá thể trong quần thể.",
      C: "Sai. Kiểu phân bố nói về cách các cá thể sắp xếp trong không gian, không phải số lượng trên đơn vị diện tích.",
      D: "Sai. Dữ liệu này không phản ánh tốc độ hay dạng tăng trưởng của quần thể."
    }
  },
  {
    q: "Các yếu tố ảnh hưởng đến tăng trưởng của quần thể sinh vật là gì?",
    a: "C",
    o: [
      "Tập tính sinh sản của loài và sự hỗ trợ của cá thể trong loài.",
      "Đặc điểm sinh học của loài và sự thay đổi môi trường sống.",
      "Mức sinh sản, mức tử vong, mức nhập cư, mức xuất cư.",
      "Mức độ cạnh tranh và hỗ trợ nhau của các cá thể trong quần thể."
    ],
    r: {
      A: "Sai. Đây chỉ là một số yếu tố gián tiếp, chưa phải các yếu tố trực tiếp quyết định tăng trưởng quần thể.",
      B: "Sai. Đây là các yếu tố ảnh hưởng chung, không phải các đại lượng trực tiếp làm thay đổi kích thước quần thể.",
      C: "Đúng. Tăng trưởng quần thể phụ thuộc trực tiếp vào số sinh ra, số chết, số nhập cư và số xuất cư.",
      D: "Sai. Cạnh tranh và hỗ trợ có ảnh hưởng nhưng không phải là bốn yếu tố trực tiếp của công thức tăng trưởng quần thể."
    }
  },
  {
    q: "Nếu mức nhập cư tương đương với xuất cư thì quần thể tăng trưởng khi",
    a: "B",
    o: [
      "tỉ lệ sinh bằng tỉ lệ tử vong.",
      "tỉ lệ sinh cao hơn tit lệ tử vong.",
      "tỉ lệ sinh thấp hơn tỉ lệ tử vong.",
      "tỉ lệ sinh và tỉ lệ tử vong đều tăng."
    ],
    r: {
      A: "Sai. Khi tỉ lệ sinh bằng tỉ lệ tử vong và nhập cư bằng xuất cư thì quần thể ổn định, không tăng trưởng.",
      B: "Đúng. Nếu nhập cư bằng xuất cư thì quần thể chỉ tăng khi số sinh ra lớn hơn số chết.",
      C: "Sai. Khi tỉ lệ sinh thấp hơn tử vong thì quần thể giảm số lượng.",
      D: "Sai. Chỉ biết cùng tăng là chưa đủ để kết luận quần thể tăng trưởng."
    }
  },
  {
    q: "Trong điều kiện môi trường không bị giới hạn, sự tăng trưởng của quần thể sinh vật có đặc điểm nào sau đây?",
    a: "B",
    o: [
      "Tỉ lệ sinh bằng với tỉ lệ tử vong.",
      "Tỉ lệ sinh cao hơn tỉ lệ tử vong.",
      "Các cá thể có sự cạnh tranh gay gắt về thức ăn.",
      "Các cá thể có sự cay cạnh tranh gay gắt về nơi ở."
    ],
    r: {
      A: "Sai. Nếu sinh bằng tử thì quần thể không tăng nhanh.",
      B: "Đúng. Trong môi trường không bị giới hạn, tỉ lệ sinh thường cao hơn tỉ lệ tử vong nên quần thể tăng nhanh.",
      C: "Sai. Khi môi trường không bị giới hạn, cạnh tranh về thức ăn chưa gay gắt.",
      D: "Sai. Khi còn nhiều nơi ở, cạnh tranh nơi ở cũng chưa gay gắt."
    }
  },
  {
    q: "Nội dung nào sau đây không đúng khi giải thích quần thể sinh vật được coi là một cấp độ tổ chức sống?",
    a: "B",
    o: [
      "Quần thể sinh vật có đặc trưng cơ bản riêng.",
      "Quần thể là một hệ thống kín, có khả năng tự điều chỉnh.",
      "Giữa các cá thể có mối quan hệ mật thiết với nhau.",
      "Quần thể và môi trường liên tục tương tác qua lại lẫn nhau."
    ],
    r: {
      A: "Sai. Đây là nội dung đúng vì quần thể có những đặc trưng riêng như mật độ, tỉ lệ giới tính, nhóm tuổi.",
      B: "Đúng. Đây là phát biểu không đúng vì quần thể không phải hệ thống kín mà là hệ thống mở, luôn trao đổi vật chất và năng lượng với môi trường.",
      C: "Sai. Đây là nội dung đúng vì các cá thể trong quần thể có quan hệ hỗ trợ, cạnh tranh, sinh sản.",
      D: "Sai. Đây là nội dung đúng vì quần thể luôn tác động qua lại với môi trường sống."
    }
  },
  {
    q: "Khi nói về sự biến động cá thể trong quần thể, phát biểu nào sau đây không đúng?",
    a: "D",
    o: [
      "Các cá thể trong quần thể có thể biến động theo chu kì biến động của tự nhiên.",
      "Dưới tác động tiêu cực của con người, quần thể có thể biến động rất mạnh.",
      "Sự biến động của quần thể dưới tác động của yếu tố thiên tai có thể theo chu kì.",
      "Sau biến động số lượng cá thể có tính chu kì, quần thể sinh vật thường không phục hồi."
    ],
    r: {
      A: "Sai. Đây là phát biểu đúng vì số lượng cá thể có thể biến động theo mùa, theo năm.",
      B: "Sai. Đây là phát biểu đúng vì hoạt động khai thác, phá hủy môi trường có thể làm quần thể biến động mạnh.",
      C: "Sai. Đây là phát biểu đúng vì một số yếu tố tự nhiên có thể lặp lại theo chu kì.",
      D: "Đúng. Đây là phát biểu không đúng vì sau biến động có tính chu kì, quần thể thường có khả năng phục hồi."
    }
  },
  {
    q: "Số lượng cá thể của quần thể sinh vật có thể bị biến động do hoạt động khai thác quá mức của con người. Đây là kiểu biến động",
    a: "C",
    o: [
      "theo mùa.",
      "theo chu kì ngày đêm.",
      "không theo chu kì.",
      "theo chu kì nhiều năm."
    ],
    r: {
      A: "Sai. Khai thác quá mức của con người không phải biến động theo mùa.",
      B: "Sai. Đây không phải biến động theo chu kì ngày đêm.",
      C: "Đúng. Tác động khai thác quá mức của con người thường làm số lượng cá thể biến động bất thường, không theo chu kì.",
      D: "Sai. Hoạt động khai thác của con người không nhất thiết lặp lại theo chu kì nhiều năm."
    }
  },
  {
    q: "Sự tăng trưởng số lượng quần thể như thế nào ở các quốc gia trên thế giới?",
    a: "C",
    o: [
      "Các quốc gia có nền kinh tế kém phát triển có sự gia tăng dân số rất chậm.",
      "Các quốc gia có nền kinh tế phát triển có sự gia tăng dân số rất nhanh.",
      "Các quốc gia có nền kinh tế phát triển có xu hướng già hóa dân số.",
      "Các quốc gia có nền kinh tế kém phát triển có xu hướng già hóa dân số."
    ],
    r: {
      A: "Sai. Nhiều quốc gia kém phát triển thường có mức tăng dân số khá cao.",
      B: "Sai. Các quốc gia phát triển thường có mức sinh thấp, dân số tăng chậm.",
      C: "Đúng. Các quốc gia phát triển thường có xu hướng già hóa dân số do tỉ lệ sinh thấp và tuổi thọ cao.",
      D: "Sai. Già hóa dân số thường rõ hơn ở các quốc gia phát triển."
    }
  },
  {
    q: "Quần xã sinh vật là",
    a: "C",
    o: [
      "tập hợp các quần thể sinh vật, cùng chung sống trong một khoảng không gian và thời gian xác định, gắn bó với nhau như một thể thống nhất thông qua mối quan hệ dinh dưỡng và nơi ở.",
      "một tổ chức sống gồm quần thể sinh vật và sinh cảnh.",
      "nhóm các quần thể sinh vật khác loài, cùng chung sống trong một khoảng không gian và thời gian xác định, gắn bó với nhau như một thể thống nhất thông qua mối quan hệ dinh dưỡng và nơi ở.",
      "tập hợp các quần thể sinh vật cùng loài, cùng chung sống trong một khoảng không gian và thời gian xác định, gắn bó với nhau như một thể thống nhất thông qua mối quan hệ sinh sản, cạnh tranh và hỗ trợ."
    ],
    r: {
      A: "Sai. Phương án này thiếu ý quan trọng là các quần thể phải thuộc các loài khác nhau.",
      B: "Sai. Đây là mô tả của hệ sinh thái vì có cả quần thể và sinh cảnh.",
      C: "Đúng. Quần xã là tập hợp các quần thể thuộc nhiều loài khác nhau cùng sống trong một không gian, thời gian xác định và có quan hệ chặt chẽ với nhau.",
      D: "Sai. Cùng loài là đặc trưng của quần thể, không phải quần xã."
    }
  },
  {
    q: "Những tập hợp sinh vật nào sau đây là quần xã sinh vật? 1. Tập hợp các loài sinh vật ở Hồ Tây. 2. Tập hợp các cây tràm trong rừng U Minh Hạ. 3. Tập hợp các sinh vật trong vườn thú Thủ Lệ. 4. Tập hợp các sinh vật trên một đồng cỏ.",
    a: "D",
    o: ["1, 2.", "2, 3.", "3, 4.", "1, 4."],
    r: {
      A: "Sai. Mục 1 là quần xã, nhưng mục 2 chỉ gồm cây tràm, tức chủ yếu là một quần thể.",
      B: "Sai. Mục 2 không phải quần xã, còn mục 3 trong vườn thú không phải quần xã tự nhiên điển hình.",
      C: "Sai. Mục 3 không được xem là quần xã tự nhiên ổn định.",
      D: "Đúng. Hồ Tây và đồng cỏ đều có nhiều loài cùng sống, có quan hệ sinh thái với nhau nên là quần xã."
    }
  },
  {
    q: "Ví dụ nào dưới đây mô tả về một quần xã sinh vật?",
    a: "B",
    o: [
      "Tập hợp loài cá rô phi dưới hồ.",
      "Tập hợp các con chim trong vườn.",
      "Tập hợp các cây thông trong rừng.",
      "Tập hợp các con voi trong vườn quốc gia."
    ],
    r: {
      A: "Sai. Cá rô phi là một loài nên đây là quần thể.",
      B: "Đúng. Các con chim trong vườn thường gồm nhiều loài chim cùng sống trong một khu vực, phù hợp với khái niệm quần xã.",
      C: "Sai. Các cây thông là cùng loài nên là quần thể.",
      D: "Sai. Các con voi trong vườn quốc gia là một quần thể, không phải quần xã."
    }
  },
  {
    q: "Quần xã sinh vật không có đặc điểm nào dưới đây?",
    a: "D",
    o: [
      "Giữa các loài trong quần xã có sự tương tác với nhau và với môi trường.",
      "Mỗi quần xã có các đặc trưng cơ bản của riêng nó.",
      "Các loại trong quần xã có sự trao đổi chất và chuyển hóa năng lượng.",
      "Là một hệ thống kín có khả năng tự điều chỉnh để duy trì mức độ cân bằng."
    ],
    r: {
      A: "Sai. Đây là đặc điểm đúng của quần xã.",
      B: "Sai. Mỗi quần xã có đặc trưng riêng về thành phần loài, phân bố không gian, độ đa dạng.",
      C: "Sai. Các loài trong quần xã có trao đổi vật chất và năng lượng thông qua quan hệ dinh dưỡng.",
      D: "Đúng. Quần xã không phải là hệ thống kín mà là hệ thống mở, luôn tương tác với môi trường."
    }
  },
  {
    q: "Đặc trưng cơ bản nào không phải là của quần xã sinh vật?",
    a: "C",
    o: [
      "Đặc trưng về thành phần loài.",
      "Đặc trưng về độ đa dạng.",
      "Đặc trưng về tỷ lệ giới tính.",
      "Đặc trưng về cấu trúc không gian."
    ],
    r: {
      A: "Sai. Thành phần loài là đặc trưng cơ bản của quần xã.",
      B: "Sai. Độ đa dạng là đặc trưng quan trọng của quần xã.",
      C: "Đúng. Tỉ lệ giới tính là đặc trưng của quần thể, không phải của quần xã.",
      D: "Sai. Cấu trúc không gian là một đặc trưng cơ bản của quần xã."
    }
  },
  {
    q: "Để đánh giá sự đa dạng về thành phần loài của quần xã, các nhà khoa học thường dùng chỉ số sinh học nào?",
    a: "A",
    o: [
      "Chỉ số đa dạng và độ phong phú tương đối của các loài.",
      "Chỉ số đa dạng và độ thường gặp của một loài.",
      "Độ phong phú tương đối và độ thường gặp của một loài.",
      "Độ giàu loài và độ thường gặp của một loài."
    ],
    r: {
      A: "Đúng. Để đánh giá sự đa dạng thành phần loài của quần xã, người ta thường dùng chỉ số đa dạng và độ phong phú tương đối của các loài.",
      B: "Sai. Độ thường gặp của một loài không phản ánh đầy đủ sự đa dạng thành phần loài của quần xã.",
      C: "Sai. Hai chỉ số này chưa đủ để đánh giá toàn diện mức đa dạng.",
      D: "Sai. Độ giàu loài có ý nghĩa, nhưng ghép với độ thường gặp của một loài vẫn chưa phải cách diễn đạt chuẩn nhất trong chương trình phổ thông."
    }
  },
  {
    q: "Độ phong phú tương đối của mỗi loài là gì?",
    a: "B",
    o: [
      "Tỉ lệ số cá thể của mỗi quần thể trên tổng số cá thể có trong loài.",
      "Tỉ lệ số cá thể của mỗi loài trên tổng số cá thể có trong quần xã.",
      "Tỉ lệ số cá thể của mỗi loài trên tổng số cá thể có trong quần thể.",
      "Tỉ lệ số quần thể trên tổng số quần thể có trong quần xã."
    ],
    r: {
      A: "Sai. Cách diễn đạt này sai đối tượng so sánh.",
      B: "Đúng. Độ phong phú tương đối là tỉ lệ số cá thể của một loài so với tổng số cá thể của toàn quần xã.",
      C: "Sai. Quần thể chỉ gồm một loài nên cách nói này không đúng ngữ cảnh.",
      D: "Sai. Đây không phải định nghĩa của độ phong phú tương đối."
    }
  },
  
  

  {
    q: "Cá hề ẩn náu khỏi kẻ thù bằng các xúc tu có chứa chất độc của hải quỳ, mối quan hệ giữa cá hề và hải quỳ là gì?",
    a: "A",
    o: ["Cộng sinh.", "Kí sinh.", "Hội sinh.", "Cạnh tranh."],
    r: {
      A: "Đúng. Cá hề và hải quỳ là ví dụ điển hình của quan hệ cộng sinh, trong đó cả hai loài đều có lợi.",
      B: "Sai. Cá hề không sống bám và gây hại cho hải quỳ nên không phải kí sinh.",
      C: "Sai. Quan hệ này không phải chỉ một loài có lợi, mà cả hai loài đều có lợi.",
      D: "Sai. Cá hề và hải quỳ không tranh giành nguồn sống với nhau."
    }
  },
  {
    q: "Vai trò sinh thái của các loài trong quần xã nào sau đây là không đúng?",
    a: "B",
    o: [
      "Loài ưu thế là loài có số lượng cá thể lớn hoặc có sinh khối cao nhất, có ảnh hưởng mạnh đến các loài khác trong quần xã.",
      "Loài chủ chốt chi phối mạnh đến quần xã bằng số lượng cá thể lớn và tác động của chúng đến các loài khác trong quần xã.",
      "Loài đặc trưng có thể là loài ưu thế trong quần xã có số lượng lớn và ảnh hưởng mạnh đến các loài khác.",
      "Loài chủ chốt trong quần xã có số lượng cá thể ít nhưng tác động mạnh đến các loài trong quần xã"
    ],
    r: {
      A: "Sai. Đây là mô tả đúng về loài ưu thế.",
      B: "Đúng. Đây là phương án không đúng vì loài chủ chốt không nhất thiết có số lượng cá thể lớn, nhưng vẫn có ảnh hưởng rất mạnh đến quần xã.",
      C: "Sai. Loài đặc trưng trong một số trường hợp có thể đồng thời là loài ưu thế.",
      D: "Sai. Đây là mô tả đúng về loài chủ chốt."
    }
  },
  {
    q: "Trong một vùng thủy triều, khi tiến hành loại bỏ 1 loài ra khỏi quần xã, từ 15 loài động vật không xương sống bị giảm xuống còn 8 loài. Loài bị loại bỏ có khả năng là",
    a: "C",
    o: ["một sinh vật gây bệnh.", "loài đặc trưng.", "loài chủ chốt.", "động vật ăn thực vật phù du."],
    r: {
      A: "Sai. Sinh vật gây bệnh không phải đối tượng điển hình làm sụp giảm mạnh cấu trúc quần xã như vậy.",
      B: "Sai. Loài đặc trưng giúp nhận biết quần xã nhưng không nhất thiết chi phối mạnh số lượng loài khác.",
      C: "Đúng. Khi loại bỏ một loài mà số loài khác giảm mạnh, loài đó nhiều khả năng là loài chủ chốt.",
      D: "Sai. Chưa đủ cơ sở để xác định đó chỉ là động vật ăn thực vật phù du."
    }
  },
  {
    q: "Đáp án nào sau đây là ví dụ về quần xã có cấu trúc không gian theo phương thẳng đứng?",
    a: "A",
    o: [
      "Phân bố của các loài thực vật trong rừng mưa nhiệt đới.",
      "Phân bố của các loài thực vật trong rừng ngập mặn.",
      "Phân bố của các loài sinh vật từ chân núi lên đỉnh núi.",
      "Phân bố của các loài sinh vật từ đất liền ra ngoài khơi xa."
    ],
    r: {
      A: "Đúng. Rừng mưa nhiệt đới có sự phân tầng rõ rệt từ tầng vượt tán, tán rừng, tầng dưới tán đến tầng cây bụi và thảm cỏ.",
      B: "Sai. Rừng ngập mặn thường được nhắc nhiều hơn ở sự phân bố theo chiều ngang gắn với độ ngập nước và độ mặn.",
      C: "Sai. Từ chân núi lên đỉnh núi là sự phân bố theo độ cao, không phải phân tầng thẳng đứng trong cùng một quần xã điển hình.",
      D: "Sai. Từ đất liền ra khơi là sự phân bố theo phương ngang."
    }
  },
  {
    q: "Sự khác nhau giữa sinh vật sản xuất và sinh vật tiêu thụ là",
    a: "A",
    o: [
      "khả năng chuyển hóa năng lượng ánh sáng hoặc hóa học để tổng hợp chất hữu cơ.",
      "sử dụng năng lượng ATP được tạo ra trong hô hấp để thực hiện các hoạt động sống cơ bản.",
      "có thể bị các sinh vật khác như nấm, vi khuẩn,… phân giải thành các hợp chất đơn giản hơn.",
      "có đầy đủ các quá trình sống cơ bản như: sinh trưởng, phát triển, cảm ứng, sinh sản,…"
    ],
    r: {
      A: "Đúng. Sinh vật sản xuất có khả năng tự tổng hợp chất hữu cơ từ chất vô cơ nhờ năng lượng ánh sáng hoặc hóa năng, còn sinh vật tiêu thụ thì không.",
      B: "Sai. Cả sinh vật sản xuất và tiêu thụ đều sử dụng ATP cho hoạt động sống.",
      C: "Sai. Hầu hết sinh vật sau khi chết đều có thể bị phân giải.",
      D: "Sai. Đây là đặc điểm chung của cơ thể sống, không phải điểm khác nhau giữa hai nhóm."
    }
  },
  {
    q: "Sinh vật nào sau đây có khả năng phân giải chất hữu cơ từ xác chết hoặc chất thải sinh vật thành chất vô cơ đơn giản?",
    a: "C",
    o: ["Sinh vật sản xuất.", "Sinh vật tiêu thụ và sinh vật sản xuất.", "Sinh vật phân giải.", "Sinh vật sản xuất và sinh vật phân giải."],
    r: {
      A: "Sai. Sinh vật sản xuất chủ yếu tổng hợp chất hữu cơ.",
      B: "Sai. Sinh vật tiêu thụ không có vai trò chính là phân giải thành chất vô cơ đơn giản.",
      C: "Đúng. Sinh vật phân giải như vi khuẩn, nấm có khả năng biến chất hữu cơ thành chất vô cơ đơn giản.",
      D: "Sai. Vai trò này thuộc chủ yếu về sinh vật phân giải."
    }
  },
  {
    q: "Phát biểu nào sau đây về các đặc trưng của quần xã sinh vật là đúng?",
    a: "D",
    o: [
      "Mỗi quần xã sinh vật đặc trưng bởi kiểu phân bố cá thể trong không gian quần xã, thành phần loài và cấu trúc dinh dưỡng.",
      "Trong quần xã sinh vật đồng cỏ, các loài cỏ là loài ưu thế; Sư tử là loài thứ yếu.",
      "Quần thể có độ đa dạng càng cao thì sự cạnh tranh giữa các loài và giữa các cá thể diễn ra càng gay gắt dẫn đến nguy cơ suy thoái của quần xã ngày càng lớn.",
      "Cấu trúc dinh dưỡng của mỗi quần xã sinh vật thường gồm ba thành phần: Sinh vật sản xuất, sinh vật phân giải và sinh vật tiêu thụ."
    ],
    r: {
      A: "Sai. Kiểu phân bố cá thể là đặc trưng cơ bản của quần thể; với quần xã thường nói đến cấu trúc không gian của các loài.",
      B: "Sai. Vế đầu có thể đúng với đồng cỏ, nhưng nêu sư tử là loài thứ yếu không phải mô tả chuẩn, phổ quát cho quần xã đồng cỏ.",
      C: "Sai. Độ đa dạng cao thường làm quần xã ổn định hơn, không phải làm tăng nguy cơ suy thoái.",
      D: "Đúng. Cấu trúc dinh dưỡng của quần xã gồm sinh vật sản xuất, sinh vật tiêu thụ và sinh vật phân giải."
    }
  },
  {
    q: "Ở miền Đông Nam Hoa Kỳ và Nam Mỹ, thường thấy diệc trên đồng cỏ chăn nuôi. Chúng đi theo đàn gia súc, khi đàn gia súc gặm cỏ trên đồng, côn trùng bị đuổi hoặc buộc phải bay lên, diệc săn bắt các loài côn trùng này. Mối quan hệ giữa diệc với các loài gia súc và côn trùng là gì?",
    a: "C",
    o: [
      "Kí sinh; sinh vật này ăn sinh vật khác.",
      "Hội sinh; cạnh tranh.",
      "Hội sinh; sinh vật này ăn sinh vật khác.",
      "Kí sinh; cạnh tranh."
    ],
    r: {
      A: "Sai. Diệc không kí sinh trên gia súc.",
      B: "Sai. Diệc không cạnh tranh với côn trùng mà bắt ăn côn trùng.",
      C: "Đúng. Diệc hưởng lợi từ hoạt động của gia súc còn gia súc hầu như không bị ảnh hưởng nên là hội sinh; diệc ăn côn trùng là quan hệ sinh vật này ăn sinh vật khác.",
      D: "Sai. Cả hai quan hệ nêu trong phương án này đều không đúng."
    }
  },
  {
    q: "Người Boran ở Châu Phi dựa vào sự chỉ đường của một loài chim gọi là chim dẫn đường mật ong, chúng dẫn người đến các đàn ong. Nhờ việc dẫn đường này mà ở các khu vực xa lạ, thời gian tìm kiếm trung bình là 8.9 giờ (khi không có chim) giảm xuống 3.2 giờ (khi được chim dẫn đường). Con người dùng lửa và khói để đuổi ong, phá tổ và lấy mật nhưng để lại ấu trùng và sáp. Chim sử dụng ấu trùng và sáp. Việc sử dụng lửa và khói làm giảm nguy cơ bị ong đốt và con người tăng khả năng tiếp cận tổ. Mối quan hệ sinh thái giữa con người và loài chim dẫn đường mật ong trong trường hợp này là gì?",
    a: "C",
    o: ["Hội sinh.", "Cộng sinh.", "Hợp tác.", "Kí sinh."],
    r: {
      A: "Sai. Không phải chỉ một phía có lợi, cả người và chim đều có lợi.",
      B: "Sai. Đây không phải quan hệ bắt buộc sống gắn bó lâu dài kiểu cộng sinh.",
      C: "Đúng. Cả con người và chim đều có lợi nhưng không phụ thuộc bắt buộc vào nhau, nên là quan hệ hợp tác.",
      D: "Sai. Không có loài nào sống bám và gây hại loài kia."
    }
  },
  {
    q: "Trên đồng cỏ, các con bò đang ăn cỏ. Bò tiêu hoá được cỏ nhờ các vi khuẩn sống trong dạ cỏ. Các con chim sáo đang tìm ăn các con rận sống trên da bò. Khi nói về quan hệ giữa các sinh vật trên, phát biểu nào sau đây đúng?",
    a: "A",
    o: [
      "Bò và vi khuẩn là quan hệ cộng sinh.",
      "Chim sáo và rận là quan hệ hội sinh.",
      "Vi khuẩn và rận là quan hệ cạnh tranh.",
      "Rận và bò là quan hệ hợp tác."
    ],
    r: {
      A: "Đúng. Vi khuẩn giúp bò tiêu hóa cỏ, còn bò cung cấp môi trường sống và thức ăn cho vi khuẩn nên đây là cộng sinh.",
      B: "Sai. Chim sáo ăn rận là quan hệ sinh vật này ăn sinh vật khác.",
      C: "Sai. Vi khuẩn trong dạ cỏ và rận trên da bò không cạnh tranh trực tiếp với nhau.",
      D: "Sai. Rận hút máu hoặc chất dinh dưỡng từ bò nên là quan hệ kí sinh, không phải hợp tác."
    }
  },
  {
    q: "Một loài nấm (Phytophthora ramorum) gây bệnh cho cây sồi, làm cho cây chết đột ngột, căn bệnh do loài nấm này gây ra trong 10 năm đã lây lan ra xa khoảng 650 km. Trong khi đó, bệnh do virus West Nile lây lan ở New York tới 46 bang khác trong 5 năm. Sự khác biệt về tốc độ lây lan có khả năng cao liên quan đến",
    a: "B",
    o: [
      "tỉ lệ gây tử vong của từng mầm bệnh.",
      "tính di động của vật chủ.",
      "kích thước của virus nhỏ hơn nấm.",
      "sức đề kháng của vật chủ."
    ],
    r: {
      A: "Sai. Tỉ lệ gây tử vong không phải nguyên nhân chính giải thích tốc độ lan xa khác nhau.",
      B: "Đúng. Virus West Nile có thể phát tán nhanh hơn nhờ các vật chủ hoặc vật trung gian có khả năng di chuyển xa, nên tính di động của vật chủ là yếu tố quan trọng.",
      C: "Sai. Kích thước nhỏ hơn không tự động làm tốc độ lan truyền trên phạm vi địa lí nhanh hơn.",
      D: "Sai. Sức đề kháng vật chủ có ảnh hưởng nhưng chưa giải thích rõ khác biệt lớn về tốc độ lan xa."
    }
  },
  {
    q: "Phát biểu nào dưới đây về mối quan hệ giữa các loài trong quần xã là đúng?",
    a: "A",
    o: [
      "Trong tất cả các mối quan hệ thuộc nhóm quan hệ hỗ trợ đều có ít nhất một loài có lợi và không có loài nào bị hại.",
      "Trong quan hệ cộng sinh và hợp tác, tất cả các loài tham gia đều có lợi nhưng mức độ phụ thuộc lẫn nhau giữa các loài trong quan hệ cộng sinh thấp hơn so với quan hệ hợp tác.",
      "Trong tất cả các mối quan hệ thuộc nhóm quan hệ đối kháng đều có một loài có lợi và một loài bị hại.",
      "Mức độ đối kháng giữa các loài trong quan hệ kí sinh cao hơn so với quan hệ sinh vật ăn sinh vật."
    ],
    r: {
      A: "Đúng. Các quan hệ hỗ trợ như cộng sinh, hợp tác, hội sinh đều có ít nhất một loài có lợi và không có loài nào bị hại.",
      B: "Sai. Trong cộng sinh, mức độ phụ thuộc lẫn nhau thường chặt chẽ hơn hợp tác.",
      C: "Sai. Có quan hệ đối kháng như cạnh tranh khiến cả hai loài đều bị ảnh hưởng bất lợi.",
      D: "Sai. Sinh vật ăn sinh vật thường có mức độ đối kháng mạnh hơn vì một loài bị ăn chết hoặc bị tiêu diệt trực tiếp."
    }
  },
  {
    q: "Khi nói về ổ sinh thái, phát biểu nào sau đây đúng?",
    a: "C",
    o: [
      "Ổ sinh thái là một địa điểm mà ở đó có các nhân tố sinh thái phù hợp cho sinh vật phát triển bền vững, lâu dài.",
      "Các loài có ổ sinh thái trùng nhau thì chung sống hoà bình, không có sự cạnh tranh với nhau.",
      "Trong tự nhiên, các loài gần nhau về nguồn gốc, cùng sống trong một sinh cảnh và sử dụng nguồn sống giống nhau thì có xu hướng phân li ổ sinh thái.",
      "Các loài sống trong cùng một nơi ở nghĩa là chúng có ổ sinh thái trùng khít lên nhau, dẫn đến cạnh tranh."
    ],
    r: {
      A: "Sai. Đây là mô tả về nơi ở hay sinh cảnh, không phải ổ sinh thái.",
      B: "Sai. Ổ sinh thái trùng nhau nhiều sẽ làm cạnh tranh gay gắt hơn.",
      C: "Đúng. Các loài gần nhau về nguồn gốc, sống cùng sinh cảnh và dùng nguồn sống giống nhau thường có xu hướng phân li ổ sinh thái để giảm cạnh tranh.",
      D: "Sai. Cùng nơi ở không đồng nghĩa ổ sinh thái trùng khít vì chúng vẫn có thể khác nguồn thức ăn, thời gian hoạt động hay vị trí kiếm ăn."
    }
  },
  {
    q: "Ba loài rắn cạp nong, cạp nia và rắn hổ mang cùng kiếm ăn trên một đồng ruộng nhưng thức ăn của chúng khác nhau. Rắn cạp nong ăn bò sát; rắn cạp nia ăn cá, chạch; rắn hổ mang ăn thức ăn đa dạng hơn nhưng chủ yếu là chuột. Do đó chúng có thể cùng nhau sinh sống trên một thửa ruộng. Ví dụ trên mô tả về hiện tượng gì?",
    a: "B",
    o: ["Hình thành loài mới.", "Phân chia nguồn sống.", "Cạnh tranh cùng loài.", "Hỗ trợ cùng loài."],
    r: {
      A: "Sai. Ví dụ không nói đến quá trình hình thành loài mới.",
      B: "Đúng. Các loài cùng sống trong một nơi nhưng sử dụng nguồn thức ăn khác nhau, đó là phân chia nguồn sống.",
      C: "Sai. Đây là quan hệ giữa các loài khác nhau, không phải cùng loài.",
      D: "Sai. Đây không phải hiện tượng hỗ trợ cùng loài."
    }
  },
  {
    q: "Tại sao một mầm bệnh do sinh vật gây bệnh tạo ra thường độc hại hơn ở môi trường sống mới?",
    a: "D",
    o: [
      "Môi trường thường có diện tích nhỏ hơn nên việc truyền mầm bệnh giữa các vật chủ dễ dàng thực hiện.",
      "Các loài vật chủ trung gian có khả năng di chuyển xa hơn và vận chuyển mầm bệnh đến khu vực mới tốt hơn.",
      "Các sinh vật gây bệnh mầm thường xuất hiện nhiều hình thức sinh sản mới và hiệu quả hơn trong môi trường mới.",
      "Vật chủ trong môi trường mới không có cơ hội kháng lại mầm bệnh thông qua chọn lọc tự nhiên."
    ],
    r: {
      A: "Sai. Diện tích môi trường không phải nguyên nhân chung giải thích tính độc hại cao hơn.",
      B: "Sai. Đây có thể ảnh hưởng đến phạm vi lây lan, nhưng không phải lí do chính làm mầm bệnh độc hơn.",
      C: "Sai. Không có cơ sở chung để khẳng định mầm bệnh sẽ xuất hiện hình thức sinh sản mới trong môi trường mới.",
      D: "Đúng. Vật chủ ở môi trường mới thường chưa có lịch sử tiến hóa cùng mầm bệnh nên chưa hình thành khả năng chống chịu thích nghi."
    }
  },
  {
    q: "Hai loài không thể tồn tại lâu dài trong một quần xã nếu chúng có",
    a: "A",
    o: [
      "ổ sinh thái giống hệt nhau.",
      "nơi ở giống hệt nhau.",
      "dùng chung một nguồn thức ăn.",
      "chung một kẻ địch."
    ],
    r: {
      A: "Đúng. Hai loài có ổ sinh thái trùng khít sẽ cạnh tranh gay gắt, khó cùng tồn tại lâu dài trong một quần xã.",
      B: "Sai. Có thể cùng nơi ở nhưng khác ổ sinh thái nên vẫn cùng tồn tại được.",
      C: "Sai. Dùng chung một nguồn thức ăn chưa đủ để kết luận không thể cùng tồn tại, vì chúng có thể khác thời gian kiếm ăn hoặc nguồn sống khác.",
      D: "Sai. Chung kẻ địch không làm chúng chắc chắn bị loại trừ lẫn nhau."
    }
  },
  {
    q: "Có bao nhiêu biện pháp dưới đây là để bảo vệ quần xã sinh vật? (1) Hạn chế gây ô nhiễm môi trường. (2) Du nhập các loài ngoại lai để tăng đa dạng các loài sinh vật. (3) Xây dựng các khu bảo tồn sinh học. (4) Tăng cường nghiên cứu tạo các sinh vật biến đổi gene.",
    a: "B",
    o: ["1.", "2.", "3.", "4."],
    r: {
      A: "Sai. Không phải chỉ có một biện pháp đúng.",
      B: "Đúng. Có 2 biện pháp đúng là (1) hạn chế ô nhiễm môi trường và (3) xây dựng khu bảo tồn sinh học.",
      C: "Sai. Không có ba biện pháp đúng vì du nhập loài ngoại lai có thể gây hại quần xã tự nhiên.",
      D: "Sai. Không phải cả bốn biện pháp đều nhằm bảo vệ quần xã sinh vật."
    }
  },
  
  
  {
    q: "Tập hợp các loài sinh vật khác loài và môi trường sống của chúng, trong đó các sinh vật có tác động qua lại với nhau và với môi trường là tổ chức sinh thái nào?",
    a: "C",
    o: ["Quần thể sinh vật.", "Quần xã sinh vật.", "Hệ sinh thái.", "Nhóm các quần thể."],
    r: {
      A: "Sai. Quần thể chỉ gồm các cá thể cùng loài sống trong một khu vực xác định.",
      B: "Sai. Quần xã chỉ gồm các quần thể sinh vật khác loài, chưa bao gồm đầy đủ môi trường sống vô sinh.",
      C: "Đúng. Hệ sinh thái gồm quần xã sinh vật và môi trường sống của chúng, giữa chúng có sự tác động qua lại với nhau.",
      D: "Sai. Nhóm các quần thể chưa phản ánh đầy đủ thành phần môi trường vô sinh của hệ sinh thái."
    }
  },
  {
    q: "Ví dụ nào sau đây là hệ sinh thái?",
    a: "C",
    o: ["Tập hợp các con chim trong rừng.", "Tập hợp các cây thông trên đồi thông.", "Ruộng lúa nước.", "Đàn voi trong sở thú."],
    r: {
      A: "Sai. Đây chỉ là một nhóm sinh vật, chưa bao gồm đầy đủ môi trường sống và các thành phần sinh thái khác.",
      B: "Sai. Đây chủ yếu là một quần thể thực vật, chưa phải hệ sinh thái.",
      C: "Đúng. Ruộng lúa nước có sinh vật và môi trường sống tác động qua lại với nhau nên là một hệ sinh thái.",
      D: "Sai. Đàn voi chỉ là một quần thể động vật, không phải hệ sinh thái."
    }
  },
  {
    q: "Thành phần hữu sinh của hệ sinh thái không bao gồm",
    a: "D",
    o: ["sinh vật phân giải.", "sinh vật tiêu thụ.", "sinh vật sản xuất.", "sinh vật đã chết."],
    r: {
      A: "Sai. Sinh vật phân giải là thành phần hữu sinh.",
      B: "Sai. Sinh vật tiêu thụ là thành phần hữu sinh.",
      C: "Sai. Sinh vật sản xuất là thành phần hữu sinh.",
      D: "Đúng. Sinh vật đã chết không còn là thành phần hữu sinh sống của hệ sinh thái."
    }
  },
  {
    q: "Nhân tố nào sau đây là thành phần vô sinh của hệ sinh thái?",
    a: "A",
    o: ["Chiếc lá rụng.", "Cây hoa.", "Con rệp.", "Con kiến."],
    r: {
      A: "Đúng. Chiếc lá rụng là vật chất không còn sống nên thuộc thành phần vô sinh.",
      B: "Sai. Cây hoa là sinh vật sống.",
      C: "Sai. Con rệp là sinh vật sống.",
      D: "Sai. Con kiến là sinh vật sống."
    }
  },
  {
    q: "Hệ sinh thái nào sau đây không phải là hệ sinh thái nhân tạo?",
    a: "D",
    o: ["Ruộng lúa.", "Công viên.", "Ao cá.", "Rừng tràm."],
    r: {
      A: "Sai. Ruộng lúa là hệ sinh thái nhân tạo do con người tạo lập và duy trì.",
      B: "Sai. Công viên là hệ sinh thái nhân tạo.",
      C: "Sai. Ao cá nuôi là hệ sinh thái nhân tạo.",
      D: "Đúng. Rừng tràm là hệ sinh thái tự nhiên."
    }
  },
  {
    q: "Phát biểu nào dưới đây về hệ sinh thái là đúng?",
    a: "C",
    o: [
      "Hệ sinh thái là một cấp độ tổ chức sống có quy mô lớn và tính ổn định cao.",
      "Trong các hệ sinh thái dưới nước, sinh vật sản xuất chủ yếu là san hô.",
      "Một hệ sinh thái có thể chỉ gồm các thành phần: Sinh cảnh, sinh vật sản xuất và sinh vật phân giải.",
      "Hệ sinh thái rừng Cúc Phương có độ đa dạng thấp hơn hệ sinh thái rừng ngập mặn Cần Giờ."
    ],
    r: {
      A: "Sai. Hệ sinh thái không nhất thiết luôn có quy mô lớn và tính ổn định cao.",
      B: "Sai. Trong hệ sinh thái nước, sinh vật sản xuất chủ yếu là tảo và thực vật thủy sinh, không phải san hô.",
      C: "Đúng. Một hệ sinh thái có thể chỉ cần sinh cảnh, sinh vật sản xuất và sinh vật phân giải vẫn duy trì được trao đổi vật chất và năng lượng.",
      D: "Sai. Rừng Cúc Phương có độ đa dạng sinh học cao hơn rừng ngập mặn Cần Giờ."
    }
  },
  {
    q: "“Chuỗi thức ăn là....(1).... dãy gồm nhiều loài sinh vật có quan hệ...(2)... với nhau, trong đó loài này là thức ăn của loài khác và loài khác lại là thức ăn của loài tiếp theo”. Vị trí (1) và (2) lần lượt là",
    a: "B",
    o: ["(1) nhiều, (2) dinh dưỡng.", "(1) một, (2) dinh dưỡng.", "(1) một, (2) năng lượng.", "(1) nhiều, (2) năng lượng."],
    r: {
      A: "Sai. Chuỗi thức ăn được định nghĩa là một dãy, không phải nhiều dãy.",
      B: "Đúng. Chuỗi thức ăn là một dãy gồm nhiều loài sinh vật có quan hệ dinh dưỡng với nhau.",
      C: "Sai. Chuỗi thức ăn phản ánh quan hệ dinh dưỡng, không phải chỉ đơn thuần là năng lượng.",
      D: "Sai. Cả vị trí (1) và (2) đều không chính xác."
    }
  },
  {
    q: "Mắt xích nào trong chuỗi thức ăn sau đây nếu bị tiêu diệt sẽ gây hậu quả lớn nhất? Lúa → Châu chấu → Ếch → Rắn → Diều hâu.",
    a: "C",
    o: ["Châu chấu.", "Rắn.", "Ếch.", "Diều hâu."],
    r: {
      A: "Sai. Nếu châu chấu bị tiêu diệt thì các mắt xích phía trên giảm mạnh, nhưng tác động dây chuyền chưa lớn bằng mắt xích giữa chuỗi.",
      B: "Sai. Nếu rắn bị tiêu diệt, chủ yếu ảnh hưởng đến diều hâu và ếch.",
      C: "Đúng. Ếch là mắt xích ở giữa chuỗi, nếu bị tiêu diệt sẽ làm châu chấu tăng mạnh, lúa giảm và đồng thời rắn, diều hâu cũng suy giảm.",
      D: "Sai. Diều hâu là mắt xích cuối, mất đi chủ yếu ảnh hưởng xuống mắt xích phía dưới theo mức độ hẹp hơn."
    }
  },
  {
    q: "Trong một hệ sinh thái, mỗi loài sinh vật",
    a: "A",
    o: [
      "có thể tham gia đồng thời vào nhiều chuỗi thức ăn khác nhau.",
      "chỉ có thể tham gia vào một chuỗi thức ăn nhất định.",
      "chỉ thuộc một bậc dinh dưỡng nhất định.",
      "có thể thuộc nhiều mắt xích khác nhau của một chuỗi thức ăn."
    ],
    r: {
      A: "Đúng. Một loài có thể tham gia vào nhiều chuỗi thức ăn khác nhau trong lưới thức ăn.",
      B: "Sai. Trong thực tế, một loài thường tham gia nhiều chuỗi thức ăn.",
      C: "Sai. Một loài có thể đứng ở những bậc dinh dưỡng khác nhau trong các chuỗi thức ăn khác nhau.",
      D: "Sai. Trong một chuỗi thức ăn cụ thể, một loài chỉ giữ một vị trí nhất định."
    }
  },
  {
    q: "Nguyên nhân chính làm hạn chế số lượng mắt xích trong chuỗi thức ăn là",
    a: "B",
    o: [
      "các mắt xích càng nhiều thì sự cạnh tranh càng tăng lên khiến cho mắt xích yếu không tồn tại được.",
      "do dòng năng lượng bị thất thoát rất lớn qua mỗi mắt xích nên năng lượng tích luỹ ở mắt xích càng về sau càng ít.",
      "do biến động môi trường làm cho chuỗi thức ăn dài, kém ổn định, vì thế không tồn tại được.",
      "do sự tiến hoá chậm chạp nên chưa hình thành các mắt xích mới trong chuỗi thức ăn."
    ],
    r: {
      A: "Sai. Đây không phải nguyên nhân chính giới hạn độ dài chuỗi thức ăn.",
      B: "Đúng. Qua mỗi bậc dinh dưỡng, phần lớn năng lượng bị thất thoát nên càng lên cao năng lượng càng ít, làm số mắt xích bị hạn chế.",
      C: "Sai. Đây chỉ là yếu tố phụ, không phải nguyên nhân chính.",
      D: "Sai. Số lượng mắt xích không bị quyết định theo cách này."
    }
  },
  {
    q: "Trong các phát biểu sau về chuỗi thức ăn và lưới thức ăn trong quần xã sinh vật, phát biểu nào đúng?",
    a: "A",
    o: [
      "Quần xã sinh vật càng đa dạng về thành phần loài thì lưới thức ăn trong quần xã càng phức tạp.",
      "Trong một chuỗi thức ăn, mỗi loài có thể thuộc nhiều mắt xích khác nhau.",
      "Chuỗi và lưới thức ăn phản ánh mối quan hệ cạnh tranh giữa các loài trong quần xã.",
      "Trong các quần xã sinh vật trên cạn, chỉ có loại chuỗi thức ăn được khởi đầu bằng sinh vật tự dưỡng."
    ],
    r: {
      A: "Đúng. Quần xã càng đa dạng loài thì quan hệ dinh dưỡng càng nhiều, lưới thức ăn càng phức tạp.",
      B: "Sai. Trong một chuỗi thức ăn cụ thể, mỗi loài chỉ thuộc một mắt xích.",
      C: "Sai. Chuỗi và lưới thức ăn phản ánh quan hệ dinh dưỡng, không phải quan hệ cạnh tranh.",
      D: "Sai. Trên cạn vẫn có chuỗi thức ăn khởi đầu từ mùn bã hữu cơ."
    }
  },
  {
    q: "Trong hệ sinh thái, nguồn năng lượng ánh sáng mặt trời đi vào quần xã chủ yếu thông qua quá trình quang hợp ở sinh vật sản xuất, sau đó truyền qua các bậc dinh dưỡng. Phát biểu nào sau đây về dòng năng lượng trong hệ sinh thái là đúng?",
    a: "B",
    o: [
      "Ở mỗi bậc dinh dưỡng, năng lượng được sử dụng chủ yếu để tích lũy dưới dạng sinh khối, một phần thất thoát qua vật chất rơi rụng (cành, lá rụng; lông rụng;...).",
      "Ở mỗi bậc dinh dưỡng, năng lượng được sử dụng chủ yếu để duy trì thân nhiệt và các hoạt động sống (hô hấp tế bào), một phần tích lũy dưới dạng sinh khối.",
      "Trong chuỗi thức ăn, mức năng lượng tích lũy ở bậc dinh dưỡng cao nhất là cao nhất.",
      "Trong hệ sinh thái, sinh vật phân giải có mức tích lũy năng lượng là cao nhất"
    ],
    r: {
      A: "Sai. Năng lượng không chủ yếu tích lũy thành sinh khối mà chủ yếu được dùng cho hoạt động sống.",
      B: "Đúng. Phần lớn năng lượng được dùng cho hô hấp và duy trì hoạt động sống, chỉ một phần nhỏ tích lũy thành sinh khối.",
      C: "Sai. Năng lượng tích lũy giảm dần qua các bậc dinh dưỡng cao hơn.",
      D: "Sai. Sinh vật sản xuất mới là nhóm có năng lượng tích lũy lớn nhất."
    }
  },
  {
    q: "Hình tháp số lượng với đỉnh lớn, đáy nhỏ xảy ra trong hệ sinh thái có chuỗi thức ăn nào sau đây?",
    a: "A",
    o: ["Cây thông → rệp → kiến.", "Cỏ → thỏ → cáo.", "Tảo → động vật nổi → cá nhỏ → cá lớn.", "Lúa → châu chấu → ếch → rắn."],
    r: {
      A: "Đúng. Một cây thông có thể nuôi sống rất nhiều rệp và nhiều kiến, tạo tháp số lượng có đáy nhỏ, đỉnh lớn.",
      B: "Sai. Chuỗi này thường cho tháp số lượng chuẩn với đáy lớn hơn đỉnh.",
      C: "Sai. Chuỗi này không tạo dạng đỉnh lớn, đáy nhỏ điển hình.",
      D: "Sai. Chuỗi này cũng thường có số lượng giảm dần từ đáy lên đỉnh."
    }
  },
  {
    q: "Kiến bảo vệ rệp khỏi động vật săn mồi, ngược lại, kiến nhận được chất dinh dưỡng từ các con rệp. Trong hệ sinh thái khác vẫn ghi nhận được các trường hợp kiến và rệp không sống cùng nhau. Mối quan hệ này là một ví dụ về.",
    a: "B",
    o: ["quan hệ cộng sinh.", "quan hệ hợp tác.", "quan hệ hội sinh.", "quan hệ kí sinh"],
    r: {
      A: "Sai. Cộng sinh là quan hệ hai loài cùng có lợi và thường gắn bó chặt chẽ, khó tách rời.",
      B: "Đúng. Kiến và rệp cùng có lợi nhưng không bắt buộc phải luôn sống cùng nhau nên đây là quan hệ hợp tác.",
      C: "Sai. Hội sinh là một loài có lợi, loài kia không bị ảnh hưởng.",
      D: "Sai. Không có loài nào gây hại loài kia trong trường hợp này."
    }
  },
  {
    q: "Trong hệ sinh thái, nguồn năng lượng giải phóng ra môi trường vô sinh từ hoạt động của nhóm sinh vật nào sau đây có nguồn gốc từ tất cả các sinh vật trong quần xã?",
    a: "C",
    o: ["Sinh vật tiêu thụ bậc 1.", "Sinh vật tiêu thụ bậc cao nhất.", "Sinh vật phân giải.", "Sinh vật sản xuất."],
    r: {
      A: "Sai. Sinh vật tiêu thụ bậc 1 chỉ nhận năng lượng chủ yếu từ sinh vật sản xuất.",
      B: "Sai. Sinh vật tiêu thụ bậc cao nhất chỉ nhận năng lượng qua một số mắt xích nhất định.",
      C: "Đúng. Sinh vật phân giải phân hủy xác và chất thải của tất cả các nhóm sinh vật trong quần xã nên nguồn năng lượng của chúng có nguồn gốc từ toàn bộ quần xã.",
      D: "Sai. Sinh vật sản xuất nhận năng lượng chủ yếu từ ánh sáng hoặc hóa năng, không phải từ tất cả sinh vật trong quần xã."
    }
  },
  {
    q: "Cho chuỗi thức ăn: Thực vật phù du → cá nhỏ → cá lớn → bồ nông. Nếu hệ sinh thái trên bị nhiễm DDT thì DDT tập trung cao nhất ở",
    a: "D",
    o: ["động, thực vật phù du.", "cá nhỏ.", "cá lớn.", "bồ nông."],
    r: {
      A: "Sai. Chất độc tích lũy sinh học tăng dần qua các bậc dinh dưỡng.",
      B: "Sai. Cá nhỏ tích lũy DDT ít hơn sinh vật ở bậc cao hơn.",
      C: "Sai. Cá lớn tích lũy nhiều nhưng vẫn thấp hơn bồ nông.",
      D: "Đúng. Bồ nông ở bậc dinh dưỡng cao nhất nên DDT tập trung cao nhất do hiện tượng khuếch đại sinh học."
    }
  },
  {
    q: "Cho một chuỗi thức ăn sau: A→B→C→D→E. Theo lí thuyết, phát biểu nào sau đây sai?",
    a: "D",
    o: [
      "Loài A có thể là sinh vật tự dưỡng hoặc sinh vật ăn mùn bã hữu cơ.",
      "Nếu số lượng cá thể loài C giảm xuống thì số lượng cá thể của các loài A và D cũng giảm theo.",
      "Hiệu suất sinh thái giữa hai bậc dinh dưỡng liền kề là khoảng 10%.",
      "Nếu số lượng cá thể của loài E giảm xuống thì số lượng cá thể của các loài A, B, C và D đều tăng lên."
    ],
    r: {
      A: "Sai. Đây là phát biểu đúng vì mắt xích đầu có thể là sinh vật sản xuất hoặc sinh vật ăn mùn bã.",
      B: "Sai. Đây là phát biểu đúng theo lí thuyết: C giảm làm D giảm, B tăng, từ đó A bị khai thác mạnh hơn nên giảm.",
      C: "Sai. Đây là phát biểu đúng theo lí thuyết về hiệu suất sinh thái trung bình.",
      D: "Đúng. Đây là phát biểu sai vì nếu E giảm thì D có thể tăng, nhưng C sẽ giảm, B tăng và A có xu hướng giảm chứ không phải tất cả đều tăng."
    }
  },
  {
    q: "Phát biểu nào sau đây về quá trình trao đổi chất và chuyển hoá năng lượng trong hệ sinh thái là đúng?",
    a: "D",
    o: [
      "Năng lượng đầu vào cung cấp cho các sinh vật trong hệ sinh thái chủ yếu có nguồn gốc từ năng lượng từ các phản ứng hóa học; sau khi luân chuyển trong quần xã, toàn bộ nguồn năng lượng này được giải phóng ra ngoài dưới dạng nhiệt năng.",
      "Quá trình trao đổi vật chất và chuyển hoá năng lượng trong hệ sinh thái luôn đi kèm với nhau và diễn ra theo chu trình khép kín.",
      "Mỗi loài sinh vật có thể đứng ở các bậc dinh dưỡng khác nhau trong một chuỗi thức ăn.",
      "Trong quá trình truyền năng lượng giữa các bậc dinh dưỡng, phần lớn năng lượng bị thất thoát qua hô hấp, vật chất rơi rụng và chất thải, chỉ một phần nhỏ năng lượng được tích luỹ thành sinh khối ở bậc dinh dưỡng cao hơn."
    ],
    r: {
      A: "Sai. Nguồn năng lượng đầu vào chủ yếu của phần lớn hệ sinh thái là ánh sáng mặt trời, không phải năng lượng hóa học.",
      B: "Sai. Vật chất vận động theo chu trình, còn năng lượng truyền theo dòng một chiều và thất thoát dần.",
      C: "Sai. Trong một chuỗi thức ăn cụ thể, mỗi loài chỉ đứng ở một bậc dinh dưỡng nhất định.",
      D: "Đúng. Phần lớn năng lượng bị mất qua hoạt động sống và chất thải, chỉ một phần nhỏ được tích lũy ở bậc cao hơn."
    }
  },
  {
    q: "Trong một ao, người ta thường nuôi kết hợp nhiều loại cá: Mè trắng, mè hoa, trắm cỏ, trắm đen, trôi, chép,... nhằm mục đích gì?",
    a: "B",
    o: [
      "Tăng sự cạnh tranh giữa các loài, giúp cá ăn khoẻ hơn, cho năng suất cao,",
      "Tận dụng tối đa được nguồn sống trong ao, giúp giảm chi phí, tăng hiệu quả kinh tế.",
      "Tạo sự đa dạng loài trong hệ sinh thái ao, đáp ứng nhu cầu đa dạng của người mua khi thu hoạch.",
      "Tăng sự hỗ trợ giữa các loài, giúp cá lớn nhanh, cho năng suất cao."
    ],
    r: {
      A: "Sai. Mục tiêu không phải tăng cạnh tranh mà là giảm cạnh tranh, tận dụng nguồn sống khác nhau.",
      B: "Đúng. Các loài cá sử dụng các nguồn thức ăn khác nhau nên giúp khai thác tối đa nguồn sống trong ao, tăng hiệu quả kinh tế.",
      C: "Sai. Tăng đa dạng loài không phải mục tiêu chính về sinh thái và kinh tế trong mô hình này.",
      D: "Sai. Quan hệ giữa các loài cá ở đây chủ yếu là phân chia nguồn sống, không phải tăng hỗ trợ."
    }
  },
  {
    q: "Sau thảm họa núi lửa năm 1883, toàn bộ quần xã rừng mưa nhiệt đới trên đảo Krakatoa (Indonesia) bị hủy diệt. Hơn 50 năm sau, quần xã sinh vật trên đảo này đã được phục hồi. Đây là ví dụ về loại diễn thế sinh thái nào?",
    a: "A",
    o: ["Diễn thế nguyên sinh.", "Diễn thế thứ sinh.", "Diễn thế phân hủy.", "Diễn thế cục bộ."],
    r: {
      A: "Đúng. Sau núi lửa, khu vực gần như trở về nền trơ trụi, quần xã được hình thành lại từ đầu nên đây là diễn thế nguyên sinh.",
      B: "Sai. Diễn thế thứ sinh xảy ra khi khu vực vẫn còn nền sống hoặc đất và tàn dư sinh học tương đối rõ.",
      C: "Sai. Đây không phải tên một kiểu diễn thế chuẩn trong ngữ cảnh này.",
      D: "Sai. Đây không phải khái niệm phù hợp để mô tả trường hợp trên."
    }
  },
  
  
  
  {
    q: "Nguyên nhân nào sau đây không gây ra diễn thế sinh thái?",
    a: "D",
    o: [
      "Biến đổi khí hậu gây hạn hán, lũ lụt.",
      "Khai thác tài nguyên quá mức của con người.",
      "Sự cạnh tranh gay gắt của các loài trong quần xã.",
      "Sự hỗ trợ giữa các cá thể đực và cái trong chăm sóc con non."
    ],
    r: {
      A: "Sai. Biến đổi khí hậu và thiên tai có thể làm thay đổi quần xã, từ đó gây ra diễn thế sinh thái.",
      B: "Sai. Hoạt động khai thác quá mức của con người có thể làm quần xã bị biến đổi và dẫn đến diễn thế.",
      C: "Sai. Sự cạnh tranh giữa các loài là một trong những nguyên nhân nội tại có thể làm quần xã thay đổi theo thời gian.",
      D: "Đúng. Sự hỗ trợ giữa các cá thể đực và cái trong chăm sóc con non không phải nguyên nhân gây diễn thế sinh thái."
    }
  },
  {
    q: "Cho các quần xã sinh vật sau: 1. Rừng thưa cây gỗ nhỏ ưa sáng. 2. Cây bụi và cây cỏ chiếm ưu thế. 3. Cây gỗ nhỏ và cây bụi. 4. Rừng lim nguyên sinh. 5. Trảng cỏ. Sơ đồ đúng về quá trình diễn thế thứ sinh dẫn đến quần xã bị suy thoái là:",
    a: "D",
    o: [
      "1 → 2 → 3 → 4 → 5.",
      "2 → 1 → 3 → 4 → 5.",
      "1 → 2 → 5 → 4 → 3.",
      "4 → 1 → 3 → 2 → 5."
    ],
    r: {
      A: "Sai. Trình tự này không phản ánh đúng chiều suy thoái của quần xã.",
      B: "Sai. Trình tự này không hợp lí về diễn thế thứ sinh dẫn đến suy thoái.",
      C: "Sai. Quần xã không thể từ trảng cỏ lại phát triển ngược lên rừng lim nguyên sinh trong mạch suy thoái này.",
      D: "Đúng. Quần xã bị suy thoái thường đi từ rừng lim nguyên sinh đến rừng thưa cây gỗ nhỏ ưa sáng, rồi cây gỗ nhỏ và cây bụi, tiếp theo cây bụi và cây cỏ chiếm ưu thế, cuối cùng là trảng cỏ. Lưu ý: phương án D là phương án được phục dựng vì đề bạn gửi bị thiếu đáp án này."
    }
  },
  {
    q: "Sinh quyển là",
    a: "A",
    o: [
      "tập hợp sinh vật và các nhân tố môi trường vô sinh trên Trái Đất hoạt động như một hệ sinh thái lớn nhất.",
      "tất cả hệ sinh thái trên cạn và dưới nước.",
      "tập hợp tất cả các quyển của Trái Đất.",
      "tập hợp các khu sinh học trên cạn và dưới nước."
    ],
    r: {
      A: "Đúng. Sinh quyển là toàn bộ sinh vật cùng môi trường sống của chúng trên Trái Đất, được xem như hệ sinh thái lớn nhất.",
      B: "Sai. Cách nói này chưa đầy đủ vì sinh quyển không chỉ là phép cộng các hệ sinh thái mà còn bao gồm sự tương tác tổng thể giữa sinh vật với môi trường.",
      C: "Sai. Không phải toàn bộ các quyển của Trái Đất đều thuộc sinh quyển.",
      D: "Sai. Các khu sinh học chỉ là một phần, chưa diễn tả đầy đủ khái niệm sinh quyển."
    }
  },
  {
    q: "Khu sinh học nào có nhiều tán lá rộng che phủ và có nhiều tầng thực vật?",
    a: "D",
    o: ["Rừng thông.", "Đài nguyên.", "Đồng cỏ ôn đới.", "Rừng mưa nhiệt đới."],
    r: {
      A: "Sai. Rừng thông chủ yếu có lá kim và số tầng thực vật không phong phú bằng rừng mưa nhiệt đới.",
      B: "Sai. Đài nguyên có điều kiện lạnh khắc nghiệt, thực vật thấp và ít tầng.",
      C: "Sai. Đồng cỏ ôn đới chủ yếu là cây cỏ, ít tầng thực vật.",
      D: "Đúng. Rừng mưa nhiệt đới có cây lá rộng, tán che phủ lớn và cấu trúc phân tầng rất rõ."
    }
  },
  {
    q: "Trong chu trình sinh – địa – hoá,",
    a: "B",
    o: [
      "các chất sau khi tham gia chu trình đều được trả lại môi trường ở dạng ban đầu.",
      "chu trình nước không phụ thuộc trực tiếp vào hoạt động của các vi sinh vật.",
      "hoạt động của con người là nguyên nhân duy nhất gây mất cân bằng chu trình carbon khiến lượng CO2 trong khí quyển tăng lên.",
      "vi khuẩn nốt sần cây họ Đậu chuyển NO3 thành N2 trả lại môi trường không khí"
    ],
    r: {
      A: "Sai. Vật chất sau chu trình không nhất thiết luôn trở lại đúng dạng ban đầu ngay lập tức.",
      B: "Đúng. Chu trình nước chủ yếu diễn ra nhờ bốc hơi, ngưng tụ, mưa và dòng chảy, không phụ thuộc trực tiếp vào vi sinh vật như chu trình nitơ.",
      C: "Sai. Hoạt động của con người là nguyên nhân rất quan trọng, nhưng không phải nguyên nhân duy nhất làm biến động chu trình carbon.",
      D: "Sai. Vi khuẩn nốt sần cây họ Đậu có vai trò cố định nitơ từ khí quyển, không phải chuyển NO3 thành N2."
    }
  },
  {
    q: "Khi nói về chu trình carbon, phát biểu nào sau đây đúng?",
    a: "C",
    o: [
      "Tất cả lượng carbon của quần xã sinh vật được trao đổi liên tục theo vòng tuần hoàn kín.",
      "Trong hệ sinh thái, carbon chỉ tồn tại trong các hợp chất hữu cơ.",
      "Khí CO2 tăng lên trong không khí có thể gây hiệu ứng nhà kính, làm khí hậu Trái Đất nóng lên.",
      "Carbon từ môi trường ngoài vào quần xã sinh vật chủ yếu thông qua quá trình hô hấp."
    ],
    r: {
      A: "Sai. Chu trình carbon không phải vòng tuần hoàn kín hoàn toàn trong phạm vi quần xã sinh vật.",
      B: "Sai. Carbon tồn tại cả trong hợp chất hữu cơ và vô cơ như CO2, HCO3−, CaCO3.",
      C: "Đúng. CO2 là khí gây hiệu ứng nhà kính, khi tăng lên có thể làm Trái Đất nóng lên.",
      D: "Sai. Carbon đi vào quần xã chủ yếu qua quá trình quang hợp của sinh vật sản xuất."
    }
  },
  
  {
    q: "Phú dưỡng xảy ra khi ao, hồ bị dư thừa chất dinh dưỡng nào từ các loại phân bón hoặc nước cống rãnh?",
    a: "A",
    o: [
      "Nitrate và phosphate.",
      "Nitrate và carbohydrate.",
      "Phosphate và carbohydrate.",
      "Carbohydrate và sulphate."
    ],
    r: {
      A: "Đúng. Phú dưỡng thường do dư thừa nitrat và photphat từ phân bón, nước thải sinh hoạt.",
      B: "Sai. Carbohydrate không phải tác nhân chính gây phú dưỡng.",
      C: "Sai. Carbohydrate không phải chất dinh dưỡng khoáng gây phú dưỡng điển hình.",
      D: "Sai. Sulphate và carbohydrate không phải cặp chất gây phú dưỡng điển hình."
    }
  },
  {
    q: "Sự phân bố các khu sinh học trên cạn theo nhiệt độ giảm dần nào dưới đây là hợp lí?",
    a: "C",
    o: [
      "Vùng Bắc Cực  vùng cận cực Bắc  vùng cận ôn đới  vùng nhiệt đới.",
      "Vùng nhiệt đới  vùng ôn đới  vùng Bắc Cực  vùng cận cực Bắc.",
      "Vùng nhiệt đới  vùng ôn đới  vùng cận cực Bắc  vùng Bắc Cực.",
      "Vùng nhiệt đới  vùng cận cực Bắc  vùng ôn đới  vùng Bắc Cực."
    ],
    r: {
      A: "Sai. Đây là thứ tự tăng dần nhiệt độ, không phải giảm dần.",
      B: "Sai. Vùng Bắc Cực phải lạnh hơn vùng cận cực Bắc.",
      C: "Đúng. Nhiệt độ giảm dần hợp lí từ vùng nhiệt đới đến ôn đới, cận cực Bắc rồi Bắc Cực.",
      D: "Sai. Vùng ôn đới phải nóng hơn vùng cận cực Bắc."
    }
  }
]
