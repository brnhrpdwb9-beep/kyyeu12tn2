const quizData =
[


 {
    q: "Khi tạo mới băng chuyền hình ảnh bằng công cụ Image carousel, yêu cầu tối thiểu là bao nhiêu hình ảnh?",
    a: "B",
    o: [
      "1 hình ảnh",
      "2 hình ảnh",
      "3 hình ảnh",
      "4 hình ảnh"
    ],
    r: {
      A: "Sai. Một ảnh đơn lẻ không đúng bản chất băng chuyền hình ảnh.",
      B: "Đúng. Muốn tạo băng chuyền thì tối thiểu phải có 2 hình ảnh để có sự chuyển đổi.",
      C: "Sai. Không cần tối thiểu đến 3 ảnh.",
      D: "Sai. 4 ảnh chỉ là một số lượng lớn hơn mức tối thiểu."
    }
  },
  {
    q: "Tùy chọn nào sau đây không có trong hộp thoại Edit carousel của Image carousel?",
    a: "C",
    o: [
      "Show dots",
      "Auto start",
      "Show borders",
      "Transition speed"
    ],
    r: {
      A: "Sai. Show dots là tùy chọn có trong phần chỉnh sửa carousel.",
      B: "Sai. Auto start là tùy chọn để băng chuyền tự chạy.",
      C: "Đúng. Show borders không phải tùy chọn chuẩn trong hộp thoại Edit carousel.",
      D: "Sai. Transition speed là tùy chọn chỉnh tốc độ chuyển ảnh."
    }
  },
  {
    q: "Tùy chọn nào sau đây xuất hiện khi Auto start được chọn trong công cụ Image carousel?",
    a: "C",
    o: [
      "Show captions",
      "Show dots",
      "Transition speed",
      "Add image"
    ],
    r: {
      A: "Sai. Show captions không phải tùy chọn xuất hiện do Auto start.",
      B: "Sai. Show dots là tùy chọn độc lập.",
      C: "Đúng. Khi bật Auto start thì có thể chọn thêm tốc độ chuyển ở mục Transition speed.",
      D: "Sai. Add image là thao tác thêm ảnh, không phải tùy chọn phát sinh từ Auto start."
    }
  },
  {
    q: "Để nhúng một liên kết trang web vào Google Sites, công cụ nào được sử dụng?",
    a: "B",
    o: [
      "Image carousel",
      "Embed",
      "Button",
      "Divider"
    ],
    r: {
      A: "Sai. Image carousel dùng để trình chiếu ảnh.",
      B: "Đúng. Embed là công cụ dùng để nhúng liên kết hoặc mã HTML vào trang.",
      C: "Sai. Button chỉ tạo nút gắn liên kết.",
      D: "Sai. Divider chỉ tạo đường phân cách."
    }
  },
  {
    q: "Khi sử dụng Embed để nhúng mã HTML, tùy chọn nào cần nhập?",
    a: "B",
    o: [
      "Enter URL",
      "Embed code",
      "Upload file",
      "Select image"
    ],
    r: {
      A: "Sai. Enter URL dùng cho nhúng bằng liên kết.",
      B: "Đúng. Muốn nhúng mã HTML thì phải nhập Embed code.",
      C: "Sai. Upload file không phải cách nhúng mã HTML.",
      D: "Sai. Select image dùng cho hình ảnh, không phải mã nhúng."
    }
  },
  {
    q: "Trong tùy chọn Link Card Settings khi nhúng liên kết, tùy chọn nào sau đây không phải là tùy chọn bật/tắt?",
    a: "C",
    o: [
      "Show image",
      "Show title",
      "Show author",
      "Show description"
    ],
    r: {
      A: "Sai. Show image là tùy chọn bật hoặc tắt.",
      B: "Sai. Show title là tùy chọn bật hoặc tắt.",
      C: "Đúng. Show author không phải tùy chọn chuẩn trong Link Card Settings.",
      D: "Sai. Show description là tùy chọn bật hoặc tắt."
    }
  },
  {
    q: "Khi nhúng nội dung web bằng công cụ Embed, tùy chọn nào sau đây không được hiển thị?",
    a: "B",
    o: [
      "Show image",
      "Show link",
      "Show title",
      "Show description"
    ],
    r: {
      A: "Sai. Show image là tùy chọn có thể hiển thị.",
      B: "Đúng. Show link không phải tùy chọn chuẩn trong hộp cài đặt thẻ liên kết.",
      C: "Sai. Show title là tùy chọn có thể hiển thị.",
      D: "Sai. Show description là tùy chọn có thể hiển thị."
    }
  },
  {
    q: "Tốc độ chuyển đổi nào không phải là tùy chọn trong Transition speed của Image carousel?",
    a: "D",
    o: [
      "Very slow",
      "Slow",
      "Medium",
      "Ultra fast"
    ],
    r: {
      A: "Sai. Very slow là một mức tốc độ hợp lí trong nhóm tùy chọn.",
      B: "Sai. Slow là tùy chọn tốc độ quen thuộc.",
      C: "Sai. Medium là mức trung bình thường có trong nhóm tốc độ.",
      D: "Đúng. Ultra fast không phải tùy chọn chuẩn trong Transition speed."
    }
  },
  {
    q: "Khi nhúng liên kết vào Google Sites, nên hiển thị nội dung nào để người xem dễ nắm bắt?",
    a: "D",
    o: [
      "Chỉ hình ảnh",
      "Chỉ tiêu đề",
      "Chỉ mô tả ngắn",
      "Hình ảnh, tiêu đề và mô tả ngắn"
    ],
    r: {
      A: "Sai. Chỉ có hình ảnh thì thiếu ngữ cảnh.",
      B: "Sai. Chỉ tiêu đề chưa đủ trực quan.",
      C: "Sai. Chỉ mô tả ngắn thì thiếu điểm nhận diện.",
      D: "Đúng. Hiển thị đủ hình ảnh, tiêu đề và mô tả ngắn giúp người xem nắm nội dung nhanh hơn."
    }
  },
  {
    q: "Công cụ nào sau đây không thuộc nội dung bài học E5?",
    a: "C",
    o: [
      "Image carousel",
      "Embed",
      "Button",
      "Divider"
    ],
    r: {
      A: "Sai. Image carousel thuộc nội dung bài học này.",
      B: "Sai. Embed cũng thuộc nội dung bài học này.",
      C: "Đúng. Button thuộc phần kiến thức trước đó, không phải trọng tâm của E5 trong cụm câu này.",
      D: "Sai. Divider thường đi với nhóm công cụ chèn nội dung nhưng không phải đáp án đúng nhất ở đây."
    }
  },
  {
    q: "Công cụ nào sau đây dùng để trình chiếu hình ảnh trên trang web, các hình ảnh tự chuyển động theo dạng băng chuyền?",
    a: "C",
    o: [
      "Images carousel",
      "Image carous",
      "Image carousel",
      "Imae carousel"
    ],
    r: {
      A: "Sai. Tên công cụ viết không đúng.",
      B: "Sai. Đây là cách viết thiếu chữ.",
      C: "Đúng. Image carousel là công cụ tạo băng chuyền hình ảnh.",
      D: "Sai. Tên công cụ bị viết sai."
    }
  },
  {
    q: "Để sử dụng công cụ Image carousel, em cần thao tác như thế nào?",
    a: "B",
    o: [
      "Nháy chọn thẻ Add → Image carousel",
      "Nháy chọn thẻ Insert → Image carousel",
      "Nháy chọn thẻ Insert → Image",
      "Nháy chọn thẻ Add → Image"
    ],
    r: {
      A: "Sai. Trong Google Sites dùng thẻ Insert, không phải Add.",
      B: "Đúng. Muốn chèn băng chuyền ảnh thì vào Insert rồi chọn Image carousel.",
      C: "Sai. Insert → Image chỉ chèn ảnh đơn lẻ.",
      D: "Sai. Add không phải tên thẻ chuẩn."
    }
  },
  {
    q: "Muốn chọn tải hình ảnh lên, ta chọn nút lệnh nào?",
    a: "C",
    o: [
      "Selection image",
      "Up image",
      "Upload image",
      "Image"
    ],
    r: {
      A: "Sai. Đây không phải tên nút chuẩn.",
      B: "Sai. Không phải cách gọi đúng.",
      C: "Đúng. Upload image là lựa chọn để tải ảnh lên.",
      D: "Sai. Image quá chung chung, không phải nút lệnh tải ảnh."
    }
  },
  {
    q: "Trong hộp thoại Insert images, có những lựa chọn nào?",
    a: "D",
    o: [
      "Add image",
      "Delete image",
      "Remove image",
      "Upload image hoặc Select image"
    ],
    r: {
      A: "Sai. Add image không phải cặp lựa chọn chính trong hộp thoại này.",
      B: "Sai. Delete image không phải lựa chọn chèn ảnh.",
      C: "Sai. Remove image là thao tác xóa, không phải lựa chọn trong hộp thoại chèn ban đầu.",
      D: "Đúng. Hộp thoại Insert images thường có các lựa chọn Upload image hoặc Select image."
    }
  },
  {
    q: "Để thêm văn bản mô tả vào hình ảnh, em chọn nút lệnh nào?",
    a: "B",
    o: [
      "Add image",
      "Add text",
      "Remove image",
      "Remove text"
    ],
    r: {
      A: "Sai. Add image là thêm ảnh mới.",
      B: "Đúng. Add text dùng để thêm văn bản mô tả cho ảnh.",
      C: "Sai. Remove image là xóa ảnh.",
      D: "Sai. Remove text là xóa phần chữ."
    }
  },
  {
    q: "Nút lệnh Remove image có chức năng gì?",
    a: "C",
    o: [
      "Thêm hình ảnh",
      "Chèn hình ảnh",
      "Xóa hình ảnh",
      "Tạo mới hình ảnh"
    ],
    r: {
      A: "Sai. Remove image không phải để thêm ảnh.",
      B: "Sai. Chèn ảnh là thao tác khác.",
      C: "Đúng. Remove image dùng để xóa hình ảnh khỏi carousel.",
      D: "Sai. Nó không tạo ảnh mới."
    }
  },
  {
    q: "Nút lệnh nào cần dùng để kết thúc việc chèn băng chuyền hình ảnh vào trang web?",
    a: "C",
    o: [
      "Insert",
      "Stop",
      "Done",
      "Next"
    ],
    r: {
      A: "Sai. Insert là thao tác chèn, nhưng nút xác nhận kết thúc theo ngữ cảnh SGK là Done.",
      B: "Sai. Stop không phải nút hoàn tất.",
      C: "Đúng. Done dùng để kết thúc việc chèn băng chuyền hình ảnh.",
      D: "Sai. Next không phải nút xác nhận cuối cùng."
    }
  },
  {
    q: "Để hiệu chỉnh băng chuyền hình ảnh, em chọn hình ảnh trên băng chuyền rồi nháy chọn nút lệnh nào?",
    a: "B",
    o: [
      "Insert",
      "Settings",
      "Remove",
      "Add"
    ],
    r: {
      A: "Sai. Insert dùng để chèn nội dung mới.",
      B: "Đúng. Muốn chỉnh băng chuyền thì chọn Settings để mở hộp thoại chỉnh sửa.",
      C: "Sai. Remove dùng để xóa.",
      D: "Sai. Add dùng để thêm nội dung."
    }
  },
  {
    q: "Ở hộp thoại Edit carousel có thể có những tùy chọn nào?",
    a: "C",
    o: [
      "Xóa văn bản",
      "Chỉnh sửa hình ảnh",
      "Thêm, xóa hình ảnh hoặc thêm văn bản",
      "Chỉnh sửa văn bản"
    ],
    r: {
      A: "Sai. Chỉ nói xóa văn bản là quá hẹp.",
      B: "Sai. Hộp thoại không chỉ chỉnh hình ảnh.",
      C: "Đúng. Edit carousel cho phép thêm, xóa hình ảnh và thêm văn bản mô tả.",
      D: "Sai. Không chỉ là chỉnh sửa văn bản."
    }
  },
  {
    q: "Phần tốc độ chuyển đổi có mấy tùy chọn?",
    a: "B",
    o: [
      "2",
      "3",
      "4",
      "5"
    ],
    r: {
      A: "Sai. Hai mức là quá ít cho nhóm tốc độ chuyển.",
      B: "Đúng. Theo ngữ cảnh SGK, phần Transition speed có 3 tùy chọn.",
      C: "Sai. Không phải 4.",
      D: "Sai. Không phải 5."
    }
  },
  {
    q: "Công cụ dùng để tạo băng chuyền hình ảnh là?",
    a: "C",
    o: [
      "Photo scroll",
      "Image viewer",
      "Image carousel",
      "Slide bar"
    ],
    r: {
      A: "Sai. Đây không phải tên công cụ trong Google Sites.",
      B: "Sai. Image viewer không phải tên công cụ chuẩn.",
      C: "Đúng. Image carousel là công cụ tạo băng chuyền hình ảnh.",
      D: "Sai. Slide bar không phải tên công cụ."
    }
  },
  {
    q: "Để chèn đoạn mã HTML vào trang web, em dùng công cụ?",
    a: "C",
    o: [
      "Code view",
      "Insert",
      "Embed",
      "Link"
    ],
    r: {
      A: "Sai. Code view không phải công cụ dùng để nhúng mã HTML trong Google Sites.",
      B: "Sai. Insert là thẻ chứa nhóm công cụ, không phải công cụ trực tiếp để nhập mã.",
      C: "Đúng. Embed dùng để nhúng mã HTML hoặc liên kết web.",
      D: "Sai. Link không phải công cụ nhúng mã."
    }
  },
  {
    q: "Chế độ nào giúp băng chuyền tự chạy khi mở trang?",
    a: "B",
    o: [
      "Manual run",
      "Auto start",
      "Auto scroll",
      "Slide active"
    ],
    r: {
      A: "Sai. Manual run là chạy thủ công.",
      B: "Đúng. Auto start giúp băng chuyền tự chạy khi mở trang.",
      C: "Sai. Auto scroll không phải tên tùy chọn chuẩn trong bài.",
      D: "Sai. Slide active không phải tên chức năng."
    }
  },
  {
    q: "Tuỳ chọn “Show dots” trên Image carousel dùng để?",
    a: "A",
    o: [
      "Hiển thị dấu chấm",
      "Thêm nút",
      "Làm mờ ảnh",
      "Hiện khung chữ"
    ],
    r: {
      A: "Đúng. Show dots dùng để hiển thị các dấu chấm chỉ vị trí ảnh trong carousel.",
      B: "Sai. Nó không thêm nút.",
      C: "Sai. Không dùng để làm mờ ảnh.",
      D: "Sai. Không phải để hiện khung chữ."
    }
  },
  {
    q: "Tốc độ “fast” trong băng chuyền có nghĩa là?",
    a: "C",
    o: [
      "Rất chậm",
      "Chậm",
      "Nhanh",
      "Vừa"
    ],
    r: {
      A: "Sai. Fast không thể là rất chậm được, dù một số website đúng là chậm như thế thật.",
      B: "Sai. Fast không phải chậm.",
      C: "Đúng. Fast có nghĩa là nhanh.",
      D: "Sai. Vừa tương ứng kiểu trung bình hơn."
    }
  },
  {
    q: "Để chèn nhiều ảnh vào Image carousel, em cần?",
    a: "D",
    o: [
      "Gộp thư mục",
      "Nhập mã",
      "Chạy lại trang",
      "Chọn nhiều ảnh"
    ],
    r: {
      A: "Sai. Không cần gộp thư mục.",
      B: "Sai. Không cần nhập mã.",
      C: "Sai. Không cần chạy lại trang.",
      D: "Đúng. Muốn có nhiều ảnh trong carousel thì chọn nhiều ảnh."
    }
  },
  {
    q: "Khi dùng Embed, “By URL” nghĩa là?",
    a: "A",
    o: [
      "Dán liên kết",
      "Viết đoạn mã",
      "Tải ảnh",
      "Nhúng video"
    ],
    r: {
      A: "Đúng. By URL nghĩa là nhúng nội dung bằng cách dán liên kết.",
      B: "Sai. Viết đoạn mã là cách Embed code.",
      C: "Sai. Tải ảnh không thuộc By URL.",
      D: "Sai. Nhúng video chỉ là một trường hợp nội dung, không phải nghĩa của By URL."
    }
  },
  {
    q: "Để thay đổi nội dung trong carousel, em chọn?",
    a: "B",
    o: [
      "Delete",
      "Settings",
      "Filter",
      "Sort"
    ],
    r: {
      A: "Sai. Delete chỉ xóa.",
      B: "Đúng. Settings mở phần chỉnh sửa nội dung và tùy chọn carousel.",
      C: "Sai. Filter không phải công cụ ở đây.",
      D: "Sai. Sort không phải lệnh chỉnh carousel trong Google Sites."
    }
  },
  {
    q: "Tại hộp thoại nhúng trang web, tuỳ chọn “Show description” giúp?",
    a: "B",
    o: [
      "Tô nền bài viết",
      "Hiển thị mô tả",
      "Tăng chữ to",
      "Hiện biểu tượng"
    ],
    r: {
      A: "Sai. Không liên quan đến nền.",
      B: "Đúng. Show description giúp hiển thị phần mô tả của liên kết nhúng.",
      C: "Sai. Không phải chức năng tăng cỡ chữ.",
      D: "Sai. Không phải để hiện biểu tượng."
    }
  },
  {
    q: "Để làm trang Tin tức sinh động, em nên?",
    a: "D",
    o: [
      "Viết đoạn mã",
      "Tạo video",
      "Xoá nền",
      "Nhúng bài viết"
    ],
    r: {
      A: "Sai. Không cần viết mã cho nhu cầu này.",
      B: "Sai. Tạo video không phải giải pháp trực tiếp nhất.",
      C: "Sai. Xóa nền không liên quan.",
      D: "Đúng. Nhúng bài viết giúp trang Tin tức sinh động và cập nhật hơn."
    }
  },
  {
    q: "Nếu muốn người xem biết nội dung trang nhúng, em cần?",
    a: "B",
    o: [
      "Xoá hình ảnh",
      "Hiện đủ 3 phần",
      "Giấu tiêu đề",
      "Tắt mô tả"
    ],
    r: {
      A: "Sai. Xóa hình ảnh sẽ làm giảm khả năng nhận biết.",
      B: "Đúng. Nên hiển thị đủ hình ảnh, tiêu đề và mô tả để người xem dễ hiểu nội dung trang nhúng.",
      C: "Sai. Giấu tiêu đề làm người xem khó nắm nội dung.",
      D: "Sai. Tắt mô tả cũng làm giảm thông tin."
    }
  },
  {
    q: "Trong thiết kế trang Sản phẩm, băng chuyền giúp?",
    a: "A",
    o: [
      "Trình chiếu ảnh",
      "Xoá nút",
      "Tăng dung lượng",
      "Giảm tốc độ"
    ],
    r: {
      A: "Đúng. Băng chuyền giúp trình chiếu nhiều ảnh sản phẩm trên cùng một khu vực.",
      B: "Sai. Nó không dùng để xóa nút.",
      C: "Sai. Tăng dung lượng không phải chức năng.",
      D: "Sai. Giảm tốc độ không phải mục đích chính."
    }
  }
]



