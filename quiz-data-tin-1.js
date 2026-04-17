
const quizData = [

  {
    q: "Phần mềm Google Sites là gì?",
    a: "C",
    o: [
      "Một trình duyệt web",
      "Một công cụ chỉnh sửa ảnh",
      "Một ứng dụng trực tuyến tạo trang web miễn phí",
      "Một ứng dụng quản lý tài liệu"
    ],
    r: {
      A: "Sai. Trình duyệt web là phần mềm dùng để truy cập Internet như Chrome, không phải Google Sites.",
      B: "Sai. Google Sites không phải công cụ chỉnh sửa ảnh.",
      C: "Đúng. Google Sites là ứng dụng trực tuyến dùng để tạo trang web miễn phí.",
      D: "Sai. Quản lý tài liệu là chức năng gần với Google Drive hơn, không phải vai trò chính của Google Sites."
    }
  },
  {
    q: "Trong Google Sites, vai trò của “Owners” là gì?",
    a: "C",
    o: [
      "Xem nội dung trang web",
      "Sửa đổi nội dung nhưng không thể xóa trang web",
      "Quản lý trang web và có quyền tối đa",
      "Chỉ tạo và chỉnh sửa giao diện"
    ],
    r: {
      A: "Sai. Đây chỉ là quyền xem, không phải quyền của Owners.",
      B: "Sai. Đây gần với quyền biên tập hơn, chưa phải quyền tối đa.",
      C: "Đúng. Owners là người quản lý trang web và có quyền cao nhất.",
      D: "Sai. Owners không chỉ chỉnh giao diện mà còn quản lý toàn bộ site."
    }
  },
  {
    q: "Để chèn nội dung và các đối tượng vào trang web, sử dụng thẻ chức năng nào?",
    a: "A",
    o: [
      "Insert",
      "Pages",
      "Themes",
      "Settings"
    ],
    r: {
      A: "Đúng. Thẻ Insert dùng để chèn văn bản, hình ảnh, video, tệp Google và nhiều đối tượng khác.",
      B: "Sai. Pages dùng để tạo và quản lý các trang.",
      C: "Sai. Themes dùng để đổi giao diện.",
      D: "Sai. Settings không phải thẻ chính để chèn nội dung."
    }
  },
  {
    q: "Tính năng nào cho phép nhiều người cùng làm việc trên một trang web Google Sites?",
    a: "A",
    o: [
      "Phân quyền (Permissions)",
      "Chế độ xem trước (Preview)",
      "Nhúng nội dung (Embed)",
      "Tạo giao diện (Themes)"
    ],
    r: {
      A: "Đúng. Muốn nhiều người cùng chỉnh sửa thì phải chia sẻ và phân quyền.",
      B: "Sai. Preview chỉ để xem trước trang web.",
      C: "Sai. Embed chỉ để nhúng nội dung từ nơi khác.",
      D: "Sai. Themes chỉ liên quan đến giao diện."
    }
  },
  {
    q: "Để tạo trang web mới trên Google Sites, bạn có thể bắt đầu bằng cách nào?",
    a: "B",
    o: [
      "Mở một tệp văn bản",
      "Sử dụng địa chỉ sites.google.com",
      "Mở Google Drive",
      "Chọn ứng dụng Google Photos"
    ],
    r: {
      A: "Sai. Tệp văn bản không dùng để khởi tạo Google Sites.",
      B: "Đúng. Có thể vào sites.google.com để bắt đầu tạo trang web mới.",
      C: "Sai. Trong thực tế cũng có thể tạo từ Google Drive, nhưng với dạng câu hỏi một đáp án, phương án chuẩn trực tiếp nhất là vào Google Sites.",
      D: "Sai. Google Photos không phải nơi tạo website."
    }
  },
  {
    q: "Chức năng của thẻ “Themes” trong Google Sites là gì?",
    a: "C",
    o: [
      "Chỉnh sửa nội dung trang web",
      "Tạo và quản lý các trang",
      "Tùy chỉnh giao diện trang web",
      "Thêm liên kết và hình ảnh"
    ],
    r: {
      A: "Sai. Chỉnh sửa nội dung chủ yếu ở vùng soạn thảo và thẻ Insert.",
      B: "Sai. Đây là chức năng của Pages.",
      C: "Đúng. Themes dùng để thay đổi màu sắc, phông chữ và giao diện tổng thể.",
      D: "Sai. Liên kết và hình ảnh thường được chèn qua Insert."
    }
  },
  {
    q: "Để xem trước trang web trên các thiết bị khác nhau, bạn nên sử dụng chức năng nào?",
    a: "B",
    o: [
      "Settings",
      "Preview",
      "Share",
      "Exit"
    ],
    r: {
      A: "Sai. Settings không phải chức năng xem trước.",
      B: "Đúng. Preview cho phép xem thử giao diện trên các thiết bị khác nhau.",
      C: "Sai. Share dùng để chia sẻ quyền truy cập.",
      D: "Sai. Exit là để thoát, không phải để xem trước."
    }
  },
  {
    q: "Chức năng “Import Theme” trong Google Sites được dùng để làm gì?",
    a: "B",
    o: [
      "Tạo một trang web mới",
      "Nhập giao diện đã tạo sẵn",
      "Thêm hình ảnh vào trang web",
      "Chỉnh sửa nội dung trang web"
    ],
    r: {
      A: "Sai. Import Theme không tạo site mới.",
      B: "Đúng. Import Theme dùng để nhập một giao diện có sẵn từ site khác.",
      C: "Sai. Thêm hình ảnh là chức năng khác.",
      D: "Sai. Đây không phải công cụ chỉnh sửa nội dung."
    }
  },
  {
    q: "Một lợi ích của Google Sites là gì?",
    a: "B",
    o: [
      "Không cần kết nối Internet để sử dụng",
      "Tích hợp với các ứng dụng của Google",
      "Không hỗ trợ nhiều ngôn ngữ",
      "Chỉ có thể tạo trang web cá nhân"
    ],
    r: {
      A: "Sai. Google Sites là công cụ trực tuyến nên thường cần Internet.",
      B: "Đúng. Google Sites tích hợp tốt với Drive, Docs, Sheets, Slides, Forms, YouTube...",
      C: "Sai. Google hỗ trợ nhiều ngôn ngữ.",
      D: "Sai. Có thể tạo nhiều loại website khác nhau, không chỉ trang cá nhân."
    }
  },
  {
    q: "Để thoát khỏi chế độ xem trước trong Google Sites, bạn làm gì?",
    a: "B",
    o: [
      "Nhấn nút Save",
      "Nhấn nút Exit preview",
      "Tắt trình duyệt",
      "Đăng xuất tài khoản Google"
    ],
    r: {
      A: "Sai. Save không phải nút thoát chế độ xem trước.",
      B: "Đúng. Muốn thoát khỏi Preview thì nhấn Exit preview hoặc Exit.",
      C: "Sai. Tắt trình duyệt là cách thô bạo, không phải thao tác chức năng.",
      D: "Sai. Đăng xuất tài khoản không liên quan."
    }
  },
  {
    q: "Google Sites là",
    a: "B",
    o: [
      "một công cụ tạo bảng tính trực tuyến",
      "một công cụ tạo trang web trực tuyến miễn phí",
      "một phần mềm chỉnh sửa ảnh",
      "một dịch vụ lưu trữ đám mây"
    ],
    r: {
      A: "Sai. Công cụ bảng tính là Google Sheets.",
      B: "Đúng. Google Sites là công cụ tạo website trực tuyến miễn phí.",
      C: "Sai. Nó không phải phần mềm chỉnh sửa ảnh.",
      D: "Sai. Lưu trữ đám mây là vai trò chính của Google Drive."
    }
  },
  {
    q: "Khi bắt đầu tạo một trang web mới trên Google Sites, bạn cần thực hiện bước nào trước tiên?",
    a: "A",
    o: [
      "Chọn một mẫu thiết kế (template)",
      "Thêm các plugin và tiện ích",
      "Đăng ký tài khoản Google",
      "Xác định tên miền riêng"
    ],
    r: {
      A: "Đúng. Khi bắt đầu tạo site, người dùng thường chọn Blank hoặc một template.",
      B: "Sai. Google Sites không bắt đầu bằng bước thêm plugin.",
      C: "Sai. Muốn dùng Google Sites thì cần có tài khoản Google từ trước, nhưng đây không phải bước đầu trong quy trình tạo site.",
      D: "Sai. Tên miền riêng là bước nâng cao, không phải bước đầu tiên."
    }
  },
  {
    q: "Khi tạo một trang mới trong Google Sites, bạn có thể thêm các phần tử nào sau đây?",
    a: "D",
    o: [
      "Chỉ liên kết và tài liệu",
      "Chỉ văn bản và hình ảnh",
      "Chỉ video và âm thanh",
      "Văn bản, hình ảnh, video"
    ],
    r: {
      A: "Sai. Google Sites không bị giới hạn ở liên kết và tài liệu.",
      B: "Sai. Ngoài văn bản và hình ảnh còn có video.",
      C: "Sai. Ngoài video còn có nhiều loại nội dung khác.",
      D: "Đúng. Có thể thêm văn bản, hình ảnh, video và nhiều đối tượng khác."
    }
  },
  {
    q: "Để chỉnh sửa nội dung trên một trang trong Google Sites, bạn cần phải:",
    a: "A",
    o: [
      "Nhấp vào biểu tượng bút chì để chỉnh sửa",
      "Xóa trang và tạo lại",
      "Đăng nhập lại vào tài khoản Google",
      "Tải trang web xuống và chỉnh sửa bằng phần mềm khác"
    ],
    r: {
      A: "Đúng. Muốn chỉnh sửa thì vào chế độ biên tập, thường được biểu diễn bằng biểu tượng bút chì hoặc giao diện soạn thảo.",
      B: "Sai. Không cần xóa rồi tạo lại.",
      C: "Sai. Đăng nhập lại không phải thao tác chỉnh sửa nội dung.",
      D: "Sai. Google Sites được chỉnh sửa trực tiếp trên nền web."
    }
  },
  {
    q: "Làm thế nào để thêm một liên kết đến một trang khác trong cùng một trang web trên Google Sites?",
    a: "B",
    o: [
      "Sử dụng tính năng “Nhúng” để chèn liên kết",
      "Sử dụng công cụ “Thêm liên kết” để chèn liên kết",
      "Thêm mã HTML vào trang web",
      "Tạo một trang mới và thêm liên kết trực tiếp"
    ],
    r: {
      A: "Sai. Embed chủ yếu để nhúng nội dung hoặc website.",
      B: "Đúng. Dùng công cụ chèn liên kết là cách phù hợp để tạo link tới trang khác.",
      C: "Sai. Google Sites không yêu cầu viết HTML cho thao tác cơ bản này.",
      D: "Sai. Tạo trang mới không phải là bản chất của việc thêm liên kết."
    }
  },
  {
    q: "Khi bạn muốn xem trước trang web của mình trên Google Sites, bạn nên làm gì?",
    a: "A",
    o: [
      "Nhấp vào nút “Xem trước” trong thanh công cụ",
      "Đăng xuất và truy cập trang web",
      "Tạo một bản sao trang web và kiểm tra",
      "Xuất trang web ra định dạng PDF và kiểm tra"
    ],
    r: {
      A: "Đúng. Nút Preview/Xem trước là công cụ chuyên dùng để xem thử site.",
      B: "Sai. Không cần đăng xuất.",
      C: "Sai. Không cần tạo bản sao chỉ để xem trước.",
      D: "Sai. Xuất PDF không phải cách xem trước chuẩn."
    }
  },
  {
    q: "Để thay đổi giao diện của trang web trong Google Sites, bạn nên làm gì?",
    a: "D",
    o: [
      "Thay đổi mã HTML của trang",
      "Thay đổi cài đặt trong trình duyệt web",
      "Sử dụng công cụ lập trình JavaScript",
      "Chọn một mẫu giao diện khác từ thư viện mẫu"
    ],
    r: {
      A: "Sai. Google Sites không yêu cầu sửa HTML để đổi giao diện.",
      B: "Sai. Cài đặt trình duyệt không quyết định giao diện site.",
      C: "Sai. Không cần JavaScript cho thao tác này.",
      D: "Đúng. Có thể đổi theme hoặc chọn mẫu giao diện phù hợp để thay đổi diện mạo trang web."
    }
  },
  {
    q: "Để thay đổi màu nền của trang trong Google Sites, bạn nên:",
    a: "B",
    o: [
      "Chỉnh sửa mã HTML của trang",
      "Sử dụng công cụ chỉnh sửa giao diện để chọn màu nền mới",
      "Cài đặt màu nền trong trình duyệt",
      "Tải lên một hình nền mới từ máy tính"
    ],
    r: {
      A: "Sai. Không cần đụng vào HTML.",
      B: "Đúng. Muốn đổi màu nền thì dùng phần chỉnh giao diện/theme.",
      C: "Sai. Trình duyệt không quyết định màu nền site.",
      D: "Sai. Hình nền và màu nền là hai chuyện khác nhau."
    }
  },
  {
    q: "Để xem trước trang web mà bạn đang tạo trên Google Sites, bạn nên:",
    a: "A",
    o: [
      "Nhấp vào nút “Xem trước” trong thanh công cụ",
      "Đăng xuất và kiểm tra trang web từ một trình duyệt khác",
      "Xuất trang web ra định dạng PDF",
      "Tải xuống trang web và mở bằng phần mềm chỉnh sửa"
    ],
    r: {
      A: "Đúng. Preview là công cụ chuẩn để xem thử site trước khi xuất bản.",
      B: "Sai. Không cần dùng trình duyệt khác.",
      C: "Sai. Xuất PDF không phải chức năng xem trước site.",
      D: "Sai. Google Sites không làm việc theo kiểu tải xuống để xem."
    }
  },
  {
    q: "Để điều chỉnh khoảng cách giữa các phần tử trên trang web, bạn nên:",
    a: "A",
    o: [
      "Sử dụng công cụ bố cục để điều chỉnh khoảng cách",
      "Thay đổi cài đặt khoảng cách trong trình duyệt",
      "Sửa đổi mã CSS của trang",
      "Chỉnh sửa nội dung văn bản để điều chỉnh khoảng cách"
    ],
    r: {
      A: "Đúng. Trong Google Sites, bố cục và cách sắp xếp khối nội dung là cách gần đúng nhất để điều chỉnh khoảng cách.",
      B: "Sai. Trình duyệt không phải nơi chỉnh khoảng cách của site.",
      C: "Sai. Google Sites không yêu cầu sửa CSS cho thao tác cơ bản.",
      D: "Sai. Chỉnh văn bản không giải quyết bố cục tổng thể."
    }
  },
  {
    q: "Để thay đổi hình nền của trang trên Google Sites, bạn cần:",
    a: "A",
    o: [
      "Chọn “Thay đổi hình nền” trong phần cài đặt trang",
      "Thay đổi mã CSS của trang",
      "Tải một hình nền mới từ máy tính của bạn",
      "Chọn “Thiết kế” và chọn hình nền từ thư viện mẫu"
    ],
    r: {
      A: "Đúng. Trong các lựa chọn, đây là phương án gần đúng nhất với thao tác đổi ảnh nền/header trong Google Sites.",
      B: "Sai. Không cần chỉnh CSS.",
      C: "Sai. Chỉ tải ảnh lên thôi chưa đủ, còn phải dùng công cụ đổi nền.",
      D: "Sai. Themes chủ yếu quản lí giao diện tổng thể, không diễn đạt chuẩn bằng thao tác đổi hình nền."
    }
  },
  {
    q: "Khi chia sẻ trang web đã tạo trên Google Sites với người khác, bạn có thể thực hiện điều gì để kiểm soát quyền truy cập?",
    a: "B",
    o: [
      "Đặt mật khẩu cho trang web",
      "Thay đổi cài đặt quyền truy cập và chia sẻ trong phần “Cài đặt chia sẻ”",
      "Gửi mã xác nhận cho người truy cập",
      "Tạo liên kết chỉ đọc cho trang web"
    ],
    r: {
      A: "Sai. Google Sites không dùng cách đặt mật khẩu như vậy trong thao tác cơ bản.",
      B: "Đúng. Bạn kiểm soát quyền truy cập bằng cách chỉnh quyền chia sẻ.",
      C: "Sai. Không có bước gửi mã xác nhận kiểu này.",
      D: "Sai. Liên kết chỉ đọc chỉ là một dạng kết quả của việc thiết lập quyền, không bao quát bằng đáp án B."
    }
  },
  {
    q: "Khi thiết lập giao diện trang web, bạn có thể điều chỉnh các yếu tố nào sau đây?",
    a: "B",
    o: [
      "Chỉ màu sắc và phông chữ",
      "Màu sắc, phông chữ, hình nền và bố cục",
      "Chỉ hình nền và nội dung",
      "Chỉ tiêu đề và liên kết"
    ],
    r: {
      A: "Sai. Không chỉ có màu sắc và phông chữ.",
      B: "Đúng. Khi thiết lập giao diện, người dùng thường quan tâm đến màu sắc, chữ, nền và cách bố trí tổng thể.",
      C: "Sai. Nội dung không phải yếu tố giao diện duy nhất.",
      D: "Sai. Tiêu đề và liên kết là quá hẹp."
    }
  },
  {
    q: "Khi bạn muốn thêm một tiêu đề vào trang web của mình, bạn nên:",
    a: "D",
    o: [
      "Nhập tiêu đề vào phần cài đặt trang",
      "Thay đổi tiêu đề của trang trong phần quản lý trang",
      "Tạo một trang mới với tiêu đề cụ thể",
      "Chèn một ô văn bản và định dạng nó thành tiêu đề"
    ],
    r: {
      A: "Sai. Cài đặt trang không phải nơi chuẩn để chèn tiêu đề nội dung.",
      B: "Sai. Đổi tên trang không đồng nghĩa với thêm tiêu đề hiển thị trong nội dung.",
      C: "Sai. Không cần tạo trang mới chỉ để thêm tiêu đề.",
      D: "Đúng. Có thể chèn hộp văn bản rồi định dạng thành tiêu đề."
    }
  },
  {
    q: "Google Sites cho phép tạo trang web bằng cách?",
    a: "B",
    o: [
      "Dùng bảng tính",
      "Kéo thả",
      "Viết mã",
      "Tạo hình"
    ],
    r: {
      A: "Sai. Bảng tính không phải cách tạo site.",
      B: "Đúng. Google Sites hoạt động chủ yếu theo kiểu kéo thả, rất thân thiện cho người dùng.",
      C: "Sai. Không cần viết mã để tạo site cơ bản.",
      D: "Sai. Tạo hình không phải phương thức xây dựng trang web."
    }
  },
  {
    q: "Để chèn hình ảnh vào trang web, em dùng thẻ nào?",
    a: "D",
    o: [
      "Pages",
      "Themes",
      "Menu",
      "Insert"
    ],
    r: {
      A: "Sai. Pages dùng để quản lí trang.",
      B: "Sai. Themes dùng để đổi giao diện.",
      C: "Sai. Menu không phải thẻ chính để chèn ảnh.",
      D: "Đúng. Insert là thẻ dùng để chèn hình ảnh."
    }
  },
  {
    q: "Giao diện có thể được chọn từ thẻ nào trong Google Sites?",
    a: "D",
    o: [
      "Format",
      "Content",
      "Layout",
      "Themes"
    ],
    r: {
      A: "Sai. Google Sites không dùng thẻ Format như vậy để chọn theme.",
      B: "Sai. Content không phải thẻ giao diện chuẩn.",
      C: "Sai. Layout liên quan bố cục hơn là chọn chủ đề.",
      D: "Đúng. Themes là nơi chọn và thay đổi giao diện."
    }
  },
  {
    q: "Chế độ xem trang web trên điện thoại là?",
    a: "B",
    o: [
      "Smart",
      "Phone",
      "Desktop",
      "Screen"
    ],
    r: {
      A: "Sai. Smart không phải tên chế độ xem chuẩn.",
      B: "Đúng. Khi xem trước, Google Sites có chế độ Phone.",
      C: "Sai. Desktop là chế độ máy tính, không phải điện thoại.",
      D: "Sai. Screen không phải tên chế độ xem."
    }
  },
  {
    q: "Tính năng “Import Theme” cho phép người dùng?",
    a: "A",
    o: [
      "Nhập giao diện",
      "Gắn video",
      "Tạo tài khoản",
      "Lưu bản nháp"
    ],
    r: {
      A: "Đúng. Import Theme nghĩa là nhập giao diện từ site khác.",
      B: "Sai. Gắn video là chức năng chèn nội dung.",
      C: "Sai. Tạo tài khoản Google không liên quan.",
      D: "Sai. Lưu bản nháp không phải chức năng này."
    }
  },
  {
    q: "Một ưu điểm của Google Sites là?",
    a: "B",
    o: [
      "Nặng dữ liệu",
      "Miễn phí",
      "Không đồng bộ",
      "Yêu cầu cài đặt"
    ],
    r: {
      A: "Sai. Đây không phải ưu điểm.",
      B: "Đúng. Google Sites có ưu điểm lớn là miễn phí và dễ dùng.",
      C: "Sai. Không đồng bộ là nhược điểm, mà Google Sites lại tích hợp tốt với hệ sinh thái Google.",
      D: "Sai. Google Sites không cần cài đặt phần mềm riêng."
    }
  },
  {
    q: "Để tạo một trang web mới, cần làm gì đầu tiên?",
    a: "A",
    o: [
      "Đăng nhập",
      "Gắn logo",
      "Xem trước",
      "Đặt tên"
    ],
    r: {
      A: "Đúng. Trước hết phải đăng nhập tài khoản Google để dùng Google Sites.",
      B: "Sai. Gắn logo là bước sau.",
      C: "Sai. Chưa có site thì chưa có gì để xem trước.",
      D: "Sai. Đặt tên là bước sau khi đã vào giao diện tạo site."
    }
  },
  {
    q: "Chức năng của Preview là để?",
    a: "B",
    o: [
      "Tìm kiếm",
      "Xem trước",
      "Xuất bản",
      "Lưu ảnh"
    ],
    r: {
      A: "Sai. Preview không phải công cụ tìm kiếm.",
      B: "Đúng. Preview dùng để xem thử trang web.",
      C: "Sai. Xuất bản là Publish.",
      D: "Sai. Không phải chức năng lưu ảnh."
    }
  },
  {
    q: "Nếu muốn tạo trang web bán trái cây, em cần?",
    a: "D",
    o: [
      "Thêm bài hát",
      "Gắn bảng tính",
      "Nhúng bài giảng",
      "Chèn hình ảnh"
    ],
    r: {
      A: "Sai. Bài hát không phải nội dung cốt lõi cho trang bán trái cây.",
      B: "Sai. Bảng tính có thể hữu ích nhưng chưa trực quan bằng hình ảnh sản phẩm.",
      C: "Sai. Bài giảng không phù hợp mục đích bán hàng.",
      D: "Đúng. Muốn giới thiệu trái cây thì hình ảnh là nội dung rất cần thiết."
    }
  },
  {
    q: "Khi hình ảnh bìa chưa cân đối, em nên dùng?",
    a: "D",
    o: [
      "Chart menu",
      "Table format",
      "Title box",
      "Anchor image"
    ],
    r: {
      A: "Sai. Chart menu không liên quan ảnh bìa.",
      B: "Sai. Table format dùng cho bảng.",
      C: "Sai. Title box là vùng tiêu đề, không phải công cụ căn chỉnh ảnh.",
      D: "Đúng. Anchor image là lựa chọn phù hợp nhất trong các đáp án để điều chỉnh điểm neo của ảnh bìa."
    }
  },
  {
    q: "Để người khác cùng chỉnh sửa trang, em cần?",
    a: "C",
    o: [
      "Gắn mã QR",
      "Gửi email",
      "Phân quyền",
      "Đổi chủ đề"
    ],
    r: {
      A: "Sai. Mã QR chỉ hỗ trợ truy cập nhanh, không cấp quyền sửa.",
      B: "Sai. Gửi email thôi chưa đủ, phải cấp quyền.",
      C: "Đúng. Muốn người khác cùng chỉnh sửa thì phải phân quyền chia sẻ.",
      D: "Sai. Đổi chủ đề không liên quan quyền truy cập."
    }
  }
]














