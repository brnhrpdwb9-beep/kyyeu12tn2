const quizData =
[
   {
    q: "Công cụ nào trong Google Sites dùng để chèn bản đồ vào trang web?",
    a: "A",
    o: [
      "Maps",
      "Forms",
      "Charts",
      "Docs"
    ],
    r: {
      A: "Đúng. Công cụ Maps dùng để chèn bản đồ vào trang web.",
      B: "Sai. Forms dùng để chèn biểu mẫu, không phải bản đồ.",
      C: "Sai. Charts dùng để chèn biểu đồ.",
      D: "Sai. Docs dùng để chèn tài liệu Google Docs."
    }
  },
  {
    q: "Trong công cụ Forms, để chèn biểu mẫu vào trang web, bạn cần chọn tùy chọn nào?",
    a: "B",
    o: [
      "Select",
      "Insert",
      "Remove",
      "Publish"
    ],
    r: {
      A: "Sai. Select chỉ là thao tác chọn biểu mẫu.",
      B: "Đúng. Sau khi chọn biểu mẫu, cần dùng Insert để chèn vào trang web.",
      C: "Sai. Remove là xóa đối tượng.",
      D: "Sai. Publish là công bố trang web, không phải chèn biểu mẫu."
    }
  },
  {
    q: "Để chia sẻ và cộng tác chỉnh sửa nội dung trang web, ta sử dụng tính năng nào?",
    a: "A",
    o: [
      "Share with others",
      "Version history",
      "Make a copy",
      "Remove"
    ],
    r: {
      A: "Đúng. Share with others dùng để chia sẻ và cấp quyền cộng tác chỉnh sửa.",
      B: "Sai. Version history dùng để xem các phiên bản trước đó.",
      C: "Sai. Make a copy dùng để tạo bản sao trang web.",
      D: "Sai. Remove dùng để xóa đối tượng."
    }
  },
  {
    q: "Quyền nào cho phép người dùng chỉ xem nội dung đã phát hành trên Google Sites?",
    a: "D",
    o: [
      "Editor",
      "Viewer",
      "Publisher",
      "Published Viewer"
    ],
    r: {
      A: "Sai. Editor có quyền chỉnh sửa nội dung.",
      B: "Sai. Viewer là quyền xem trong ngữ cảnh chia sẻ chỉnh sửa, chưa diễn đạt đúng ý 'nội dung đã phát hành'.",
      C: "Sai. Publisher không phải quyền chỉ xem.",
      D: "Đúng. Published Viewer là quyền chỉ xem nội dung đã được phát hành."
    }
  },
  {
    q: "Làm thế nào để xem lịch sử thay đổi trang web trên Google Sites?",
    a: "B",
    o: [
      "Chọn Insert",
      "Chọn Version history",
      "Chọn Make a copy",
      "Chọn Remove"
    ],
    r: {
      A: "Sai. Insert dùng để chèn nội dung.",
      B: "Đúng. Version history cho phép xem lịch sử thay đổi của trang web.",
      C: "Sai. Make a copy dùng để tạo bản sao.",
      D: "Sai. Remove dùng để xóa nội dung."
    }
  },
  {
    q: "Tùy chọn nào cho phép khôi phục một phiên bản cũ của trang web trên Google Sites?",
    a: "A",
    o: [
      "Restore this version",
      "Name this version",
      "Make a copy",
      "Remove"
    ],
    r: {
      A: "Đúng. Restore this version dùng để khôi phục một phiên bản cũ.",
      B: "Sai. Name this version chỉ dùng để đặt tên phiên bản.",
      C: "Sai. Make a copy là tạo bản sao, không phải khôi phục.",
      D: "Sai. Remove là xóa."
    }
  },
  {
    q: "Khi tạo bản sao cho trang web, tùy chọn nào cho phép tạo bản sao cho toàn bộ trang?",
    a: "B",
    o: [
      "Selected page(s)",
      "Entire site",
      "Name this version",
      "Sharing"
    ],
    r: {
      A: "Sai. Selected page(s) chỉ sao chép các trang được chọn.",
      B: "Đúng. Entire site dùng để sao chép toàn bộ trang web.",
      C: "Sai. Name this version chỉ đặt tên phiên bản.",
      D: "Sai. Sharing liên quan đến chia sẻ, không phải sao chép."
    }
  },
  {
    q: "Để xóa một bản đồ đã chèn vào trang web, bạn cần chọn tùy chọn nào?",
    a: "A",
    o: [
      "Remove",
      "Insert",
      "Select",
      "Restore"
    ],
    r: {
      A: "Đúng. Remove dùng để xóa bản đồ đã chèn.",
      B: "Sai. Insert dùng để chèn thêm nội dung.",
      C: "Sai. Select chỉ là chọn đối tượng.",
      D: "Sai. Restore là khôi phục."
    }
  },
  {
    q: "Trong tùy chọn Copy site, mục nào cho phép đặt tên cho bản sao của trang web?",
    a: "A",
    o: [
      "File name",
      "Folder",
      "Sharing",
      "Pages"
    ],
    r: {
      A: "Đúng. File name dùng để đặt tên cho bản sao trang web.",
      B: "Sai. Folder dùng để chọn nơi lưu.",
      C: "Sai. Sharing liên quan quyền chia sẻ.",
      D: "Sai. Pages không phải mục đặt tên bản sao."
    }
  },
  {
    q: "Để xóa các trang sau khi sao chép, ta cần bật tính năng nào?",
    a: "A",
    o: [
      "Delete pages after copying",
      "Remove",
      "Make a copy",
      "Insert"
    ],
    r: {
      A: "Đúng. Delete pages after copying là tùy chọn xóa các trang sau khi sao chép.",
      B: "Sai. Remove là lệnh xóa chung, không phải tên tính năng này.",
      C: "Sai. Make a copy chỉ bắt đầu việc tạo bản sao.",
      D: "Sai. Insert là chèn nội dung."
    }
  },
  {
    q: "Công cụ dùng để chèn bản đồ vào trang web là?",
    a: "D",
    o: [
      "Address",
      "Chart",
      "Table",
      "Map"
    ],
    r: {
      A: "Sai. Address không phải công cụ chèn bản đồ.",
      B: "Sai. Chart dùng để chèn biểu đồ.",
      C: "Sai. Table là bảng, không phải bản đồ.",
      D: "Đúng. Map là công cụ dùng để chèn bản đồ vào trang web."
    }
  },
  {
    q: "Biểu mẫu được chèn từ đâu vào Google Sites?",
    a: "C",
    o: [
      "Excel",
      "Docs",
      "Forms",
      "Slides"
    ],
    r: {
      A: "Sai. Excel không phải công cụ Google Sites dùng để chèn biểu mẫu.",
      B: "Sai. Docs là tài liệu văn bản.",
      C: "Đúng. Biểu mẫu được chèn từ Google Forms.",
      D: "Sai. Slides là bản trình chiếu."
    }
  },
  {
    q: "Tính năng dùng để chia sẻ trang web cho người khác là?",
    a: "D",
    o: [
      "Connect",
      "Export",
      "Link",
      "Share"
    ],
    r: {
      A: "Sai. Connect không phải tên tính năng chia sẻ trong Google Sites.",
      B: "Sai. Export là xuất dữ liệu hoặc nội dung, không phải chia sẻ cộng tác.",
      C: "Sai. Link chỉ là liên kết, chưa phải tính năng chia sẻ quyền.",
      D: "Đúng. Share là tính năng dùng để chia sẻ trang web."
    }
  },
  {
    q: "Để xem lại các thay đổi trước đó trên trang web, em dùng?",
    a: "A",
    o: [
      "Version history",
      "Time edit",
      "Web view",
      "Change log"
    ],
    r: {
      A: "Đúng. Version history dùng để xem các thay đổi trước đó.",
      B: "Sai. Time edit không phải tên tính năng chuẩn.",
      C: "Sai. Web view chỉ liên quan việc xem trang.",
      D: "Sai. Change log không phải tên công cụ trong Google Sites."
    }
  },
  {
    q: "Khi muốn lưu bản sao trang web, em chọn?",
    a: "C",
    o: [
      "Duplicate view",
      "Create page",
      "Make a copy",
      "Save version"
    ],
    r: {
      A: "Sai. Duplicate view không phải tính năng đúng.",
      B: "Sai. Create page là tạo trang mới.",
      C: "Đúng. Make a copy dùng để tạo bản sao trang web.",
      D: "Sai. Save version là lưu phiên bản, không phải tạo bản sao độc lập."
    }
  },
  {
    q: "Mục “My Maps” trong công cụ Map cho phép?",
    a: "C",
    o: [
      "Tạo ảnh nền",
      "Chọn màu nền",
      "Chèn bản đồ đã lưu",
      "Thêm văn bản"
    ],
    r: {
      A: "Sai. My Maps không dùng để tạo ảnh nền.",
      B: "Sai. Không dùng để chọn màu nền.",
      C: "Đúng. My Maps cho phép chèn các bản đồ đã lưu trước đó.",
      D: "Sai. Nó không phải công cụ thêm văn bản."
    }
  },
  {
    q: "Để biểu mẫu hiển thị đúng, điều kiện là?",
    a: "D",
    o: [
      "Chọn chế độ ẩn",
      "Có hình ảnh",
      "Dùng link chia sẻ",
      "Đã thiết kế trên Google Forms"
    ],
    r: {
      A: "Sai. Chế độ ẩn không liên quan.",
      B: "Sai. Hình ảnh không phải điều kiện cần.",
      C: "Sai. Link chia sẻ có thể hữu ích, nhưng điều kiện cơ bản là biểu mẫu phải được tạo trên Google Forms.",
      D: "Đúng. Muốn chèn biểu mẫu thì trước hết biểu mẫu phải được thiết kế trên Google Forms."
    }
  },
  {
    q: "Khi chia sẻ, chọn “Editor” nghĩa là người được chia sẻ có thể?",
    a: "A",
    o: [
      "Chỉnh sửa nội dung",
      "Chỉ xem web",
      "Chia sẻ lại",
      "Tạo tài khoản"
    ],
    r: {
      A: "Đúng. Editor có quyền chỉnh sửa nội dung trang web.",
      B: "Sai. Chỉ xem web là quyền xem.",
      C: "Sai. Trọng tâm của Editor là chỉnh sửa nội dung.",
      D: "Sai. Không liên quan đến việc tạo tài khoản."
    }
  },
  {
    q: "Chức năng “Open in a new tab” giúp?",
    a: "D",
    o: [
      "Tắt chế độ xem",
      "Lưu trang",
      "Tải lại trang",
      "Xem nội dung ngoài trang"
    ],
    r: {
      A: "Sai. Không dùng để tắt chế độ xem.",
      B: "Sai. Không phải lệnh lưu trang.",
      C: "Sai. Không phải tải lại.",
      D: "Đúng. Open in a new tab giúp mở nội dung ở thẻ mới để xem ngoài trang hiện tại."
    }
  },
  {
    q: "Nếu muốn chèn bản đồ mới thay cho bản cũ, em cần?",
    a: "B",
    o: [
      "Thêm lớp phủ",
      "Xoá bản cũ",
      "Di chuyển vị trí",
      "Tắt trang"
    ],
    r: {
      A: "Sai. Thêm lớp phủ không phải thao tác thay bản đồ trong bài học cơ bản.",
      B: "Đúng. Muốn thay bản đồ cũ bằng bản mới thì cần xóa bản cũ rồi chèn bản đồ mới.",
      C: "Sai. Di chuyển vị trí không thay được nội dung bản đồ.",
      D: "Sai. Tắt trang thì chỉ làm mọi thứ biến mất, đúng kiểu giải quyết vấn đề bằng cách cho nó biến mất."
    }
  },
  {
    q: "Muốn cộng tác nhóm trên cùng trang web, em nên?",
    a: "A",
    o: [
      "Chia sẻ chỉnh sửa",
      "Khoá chỉnh sửa",
      "Tạo bản sao",
      "Nhúng mã"
    ],
    r: {
      A: "Đúng. Muốn cộng tác nhóm thì cần chia sẻ quyền chỉnh sửa.",
      B: "Sai. Khóa chỉnh sửa sẽ cản trở cộng tác.",
      C: "Sai. Tạo bản sao làm tách rời công việc, không phải cộng tác cùng lúc.",
      D: "Sai. Nhúng mã không liên quan."
    }
  },
  {
    q: "Khi muốn chỉ lưu một vài trang web riêng lẻ, em cần chọn?",
    a: "C",
    o: [
      "Entire site",
      "Full web",
      "Selected page(s)",
      "Partial list"
    ],
    r: {
      A: "Sai. Entire site là sao chép toàn bộ trang web.",
      B: "Sai. Full web không phải tên tùy chọn chuẩn.",
      C: "Đúng. Selected page(s) dùng để chọn chỉ một số trang cần sao chép.",
      D: "Sai. Partial list không phải tên tùy chọn trong Google Sites."
    }
  },
  {
    q: "Mục đích chính của việc chèn bản đồ Google Maps vào trang web là gì?",
    a: "B",
    o: [
      "Để trang trí cho trang web thêm sinh động.",
      "Để hiển thị vị trí địa lý của một địa điểm cụ thể.",
      "Để tạo hiệu ứng chuyển động cho trang web.",
      "Để chia sẻ thông tin cá nhân của người dùng."
    ],
    r: {
      A: "Sai. Bản đồ có thể làm trang sinh động hơn, nhưng mục đích chính là cung cấp vị trí.",
      B: "Đúng. Chèn Google Maps nhằm hiển thị vị trí địa lý của địa điểm cụ thể.",
      C: "Sai. Bản đồ không phải công cụ tạo hiệu ứng chuyển động.",
      D: "Sai. Không nhằm chia sẻ thông tin cá nhân."
    }
  },
  {
    q: "Để chèn một biểu mẫu Google Forms vào trang web, ta thực hiện qua bước nào?",
    a: "D",
    o: [
      "Vào mục \"Insert\" và chọn \"Image\".",
      "Vào mục \"Tools\" và chọn \"Forms\".",
      "Vào mục \"Page\" và chọn \"New page\".",
      "Vào mục \"Insert\" và chọn \"Forms\"."
    ],
    r: {
      A: "Sai. Image dùng để chèn hình ảnh.",
      B: "Sai. Trong Google Sites, thẻ chuẩn là Insert, không phải Tools theo ngữ cảnh SGK.",
      C: "Sai. New page là tạo trang mới.",
      D: "Đúng. Muốn chèn biểu mẫu thì vào Insert và chọn Forms."
    }
  },
  {
    q: "Khi chia sẻ trang web với người khác, ta có thể cấp quyền nào?",
    a: "C",
    o: [
      "Chỉ xem.",
      "Chỉ chỉnh sửa.",
      "Cả A và B.",
      "Không có quyền nào."
    ],
    r: {
      A: "Sai. Đây chỉ là một trong các quyền có thể cấp.",
      B: "Sai. Đây cũng chỉ là một trong các quyền có thể cấp.",
      C: "Đúng. Có thể cấp quyền xem hoặc quyền chỉnh sửa tùy đối tượng.",
      D: "Sai. Chia sẻ mà không có quyền nào thì đúng là chia sẻ theo kiểu tượng trưng."
    }
  },
  {
    q: "Để tạo một bản sao của trang web, ta thực hiện qua bước nào?",
    a: "B",
    o: [
      "Vào mục \"File\" và chọn \"Save as\".",
      "Vào mục \"More\" và chọn \"Make a copy\".",
      "Vào mục \"Edit\" và chọn \"Duplicate\".",
      "Vào mục \"View\" và chọn \"Clone\"."
    ],
    r: {
      A: "Sai. Đây không phải cách thao tác trong Google Sites.",
      B: "Đúng. Muốn tạo bản sao site thì vào More và chọn Make a copy.",
      C: "Sai. Duplicate không phải lệnh tạo bản sao toàn site theo ngữ cảnh này.",
      D: "Sai. Clone không phải lựa chọn chuẩn."
    }
  },
  {
    q: "Việc tạo một diễn đàn thảo luận trên Google Sites có thể thực hiện được không?",
    a: "D",
    o: [
      "Có, bằng cách sử dụng công cụ Forms.",
      "Có, bằng cách sử dụng công cụ Collapsible group.",
      "Không thể thực hiện được trên Google Sites.",
      "Có thể thực hiện được bằng cách tích hợp với các dịch vụ bên ngoài."
    ],
    r: {
      A: "Sai. Forms không tạo diễn đàn thảo luận đúng nghĩa.",
      B: "Sai. Collapsible group chỉ giúp tổ chức nội dung thu gọn.",
      C: "Sai. Không phải là hoàn toàn không thể.",
      D: "Đúng. Có thể tích hợp các dịch vụ bên ngoài để tạo chức năng gần như diễn đàn."
    }
  },
  {
    q: "Mục đích chính của việc sử dụng Google Sites là gì?",
    a: "B",
    o: [
      "Để tạo các ứng dụng di động.",
      "Để tạo các trang web đơn giản.",
      "Để thiết kế đồ họa.",
      "Để lập trình phần mềm."
    ],
    r: {
      A: "Sai. Google Sites không phải công cụ tạo ứng dụng di động.",
      B: "Đúng. Google Sites chủ yếu dùng để tạo các trang web đơn giản, dễ sử dụng.",
      C: "Sai. Không phải phần mềm thiết kế đồ họa chuyên dụng.",
      D: "Sai. Không phải công cụ lập trình phần mềm."
    }
  },
  {
    q: "Collapsible group có thể chứa loại nội dung nào?",
    a: "D",
    o: [
      "Chỉ chứa văn bản.",
      "Chỉ chứa hình ảnh.",
      "Chỉ chứa video.",
      "Có thể chứa nhiều loại nội dung khác nhau."
    ],
    r: {
      A: "Sai. Không chỉ giới hạn ở văn bản.",
      B: "Sai. Không chỉ chứa hình ảnh.",
      C: "Sai. Không chỉ chứa video.",
      D: "Đúng. Collapsible group có thể chứa nhiều loại nội dung khác nhau."
    }
  },
  {
    q: "Khi tạo một biểu mẫu Google Forms, ta có thể:",
    a: "C",
    o: [
      "Chỉ tạo các câu hỏi trắc nghiệm.",
      "Chỉ tạo các câu hỏi mở.",
      "Tạo cả câu hỏi trắc nghiệm và câu hỏi mở.",
      "Không thể tùy chỉnh loại câu hỏi."
    ],
    r: {
      A: "Sai. Google Forms không bị giới hạn chỉ ở trắc nghiệm.",
      B: "Sai. Cũng không chỉ giới hạn ở câu hỏi mở.",
      C: "Đúng. Google Forms cho phép tạo nhiều loại câu hỏi, gồm cả trắc nghiệm và tự luận.",
      D: "Sai. Người dùng hoàn toàn có thể tùy chỉnh loại câu hỏi."
    }
  },
  {
    q: "Để thay đổi giao diện của một trang web trên Google Sites, ta cần vào mục nào?",
    a: "B",
    o: [
      "Pages.",
      "Themes.",
      "More.",
      "Share."
    ],
    r: {
      A: "Sai. Pages dùng để quản lí các trang.",
      B: "Đúng. Themes dùng để thay đổi giao diện trang web.",
      C: "Sai. More chứa các tùy chọn khác như tạo bản sao, lịch sử phiên bản...",
      D: "Sai. Share dùng để chia sẻ."
    }
  },
  {
    q: "Để nhúng một video YouTube vào trang web Google Sites, ta cần sử dụng công cụ nào?",
    a: "B",
    o: [
      "Insert > Image.",
      "Insert > Video.",
      "Insert > Drive.",
      "Insert > Maps."
    ],
    r: {
      A: "Sai. Image dùng để chèn hình ảnh.",
      B: "Đúng. Theo ngữ cảnh câu hỏi này, video YouTube được chèn bằng công cụ video trong nhóm Insert.",
      C: "Sai. Drive dùng để chèn tệp từ Google Drive.",
      D: "Sai. Maps dùng để chèn bản đồ."
    }
  },
  {
    q: "Khi chia sẻ một trang web với quyền \"Viewer\", người được chia sẻ có thể thực hiện hành động nào sau đây?",
    a: "C",
    o: [
      "Chỉnh sửa nội dung.",
      "Xóa trang web.",
      "Chỉ xem nội dung.",
      "Tạo các trang mới."
    ],
    r: {
      A: "Sai. Viewer không có quyền chỉnh sửa.",
      B: "Sai. Viewer không có quyền xóa site.",
      C: "Đúng. Viewer chỉ có quyền xem nội dung.",
      D: "Sai. Viewer không thể tạo trang mới."
    }
  },
  {
    q: "Mục đích của việc tạo nhiều phiên bản cho một trang web là gì?",
    a: "B",
    o: [
      "Để dễ dàng xóa bỏ nội dung không cần thiết.",
      "Để lưu trữ các thay đổi khác nhau của trang web.",
      "Để chia sẻ trang web với nhiều người dùng khác nhau.",
      "Để tăng tốc độ tải trang."
    ],
    r: {
      A: "Sai. Phiên bản không sinh ra chủ yếu để xóa nội dung.",
      B: "Đúng. Tạo nhiều phiên bản giúp lưu lại các thay đổi khác nhau của trang web.",
      C: "Sai. Chia sẻ là chức năng khác.",
      D: "Sai. Không làm tăng tốc độ tải trang."
    }
  },
  {
    q: "Để tạo một trang web đa ngôn ngữ trên Google Sites, ta nên sử dụng cách nào?",
    a: "A",
    o: [
      "Tạo nhiều trang web khác nhau, mỗi trang một ngôn ngữ.",
      "Sử dụng tính năng dịch tự động của Google Sites.",
      "Tạo các collapsible group để chứa nội dung theo ngôn ngữ.",
      "Sử dụng các widget hỗ trợ đa ngôn ngữ."
    ],
    r: {
      A: "Đúng. Theo cách làm cơ bản và chắc ăn nhất, tạo nhiều site hoặc nhiều phiên bản riêng cho từng ngôn ngữ là phù hợp.",
      B: "Sai. Google Sites không có tính năng dịch tự động tích hợp như đáp án nêu.",
      C: "Sai. Collapsible group không phải giải pháp chuẩn cho site đa ngôn ngữ.",
      D: "Sai. Widget có thể hỗ trợ, nhưng không phải cách cơ bản và chuẩn trong ngữ cảnh SGK."
    }
  },
  {
    q: "Khi muốn thêm một ảnh bìa cho trang web của mình, ta nên thực hiện ở đâu?",
    a: "B",
    o: [
      "Trong phần thiết lập giao diện (Themes).",
      "Trong phần chỉnh sửa nội dung trang.",
      "Trong phần chia sẻ (Share).",
      "Trong phần cài đặt trang web (Settings)."
    ],
    r: {
      A: "Sai. Themes chủ yếu thay đổi phong cách giao diện chung.",
      B: "Đúng. Ảnh bìa thường được thêm trực tiếp trong vùng chỉnh sửa nội dung của trang.",
      C: "Sai. Share không liên quan.",
      D: "Sai. Settings không phải nơi chính để chèn ảnh bìa."
    }
  },
  {
    q: "Khi chèn một bản đồ Google Maps vào trang web, bạn muốn hiển thị các điểm đánh dấu (marker) với thông tin chi tiết. Bạn sẽ làm gì?",
    a: "B",
    o: [
      "Chỉ cần chèn bản đồ, các điểm đánh dấu sẽ tự động xuất hiện.",
      "Sử dụng công cụ của Google Maps để tạo điểm đánh dấu trước, sau đó chèn vào trang web.",
      "Chèn bản đồ rồi sử dụng các tùy chọn của Google Sites để thêm điểm đánh dấu.",
      "Không thể thêm điểm đánh dấu vào bản đồ đã chèn."
    ],
    r: {
      A: "Sai. Điểm đánh dấu không tự xuất hiện theo ý muốn nếu chưa được tạo.",
      B: "Đúng. Cần tạo marker trong Google Maps hoặc My Maps trước, rồi chèn bản đồ đó vào site.",
      C: "Sai. Google Sites không phải nơi chính để tạo marker chi tiết trên bản đồ.",
      D: "Sai. Có thể thực hiện được bằng cách chuẩn bị trước ở Google Maps."
    }
  },
  {
    q: "Mục đích chính của việc sử dụng \"Google Drive\" khi làm việc với Google Sites là gì?",
    a: "A",
    o: [
      "Để lưu trữ các tệp tin hình ảnh, văn bản.",
      "Để tạo các biểu mẫu.",
      "Để chia sẻ trang web với người khác.",
      "Để tạo các hiệu ứng chuyển động."
    ],
    r: {
      A: "Đúng. Google Drive dùng để lưu trữ và quản lí các tệp như hình ảnh, tài liệu, bảng tính...",
      B: "Sai. Tạo biểu mẫu là chức năng của Google Forms.",
      C: "Sai. Chia sẻ trang web là tính năng của Google Sites.",
      D: "Sai. Drive không dùng để tạo hiệu ứng chuyển động."
    }
  },
  {
    q: "Để chèn bản đồ Google Maps vào trang web, bạn cần thực hiện bước nào đầu tiên?",
    a: "B",
    o: [
      "Chọn công cụ Forms.",
      "Chọn công cụ Map từ thẻ Insert.",
      "Nhập địa chỉ bản đồ vào ô Enter a location.",
      "Nhấn vào biểu tượng Share with others."
    ],
    r: {
      A: "Sai. Forms dùng để chèn biểu mẫu.",
      B: "Đúng. Bước đầu tiên là chọn công cụ Map từ thẻ Insert.",
      C: "Sai. Nhập địa chỉ là bước sau khi đã mở công cụ Map.",
      D: "Sai. Share with others dùng để chia sẻ, không phải chèn bản đồ."
    }
  }
]
