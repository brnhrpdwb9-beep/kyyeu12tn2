const quizDataExam3 = {
  subject: "English 12",
  exam: "Đề tham khảo số 3",
  format: "mixed_reading_mcq",
  sections: [
    {
      type: "passage_mcq",
      title: "Introducing the Ultimate Computing Experience!",
      instruction: "Read the following advertisement and choose the best answer for each blank from 1 to 6.",
      passage: `(1) _____ the 2nd November 2024 embark on a journey into the future with the launch of our (2) _____ inside our new device, (3) _____ a new standard in computing excellence.

Experience the fullest potential of (4) _____ with lightning-fast speed, seamless multitasking, and breathtaking graphics. (5) _____ you're a professional, a gamer, or a student, this computer fulfills all your needs and more.

Join us as we unveil the future of computing. Don't (6) _____ on the opportunity to elevate your digital experience to new heights. Get ready to embrace the overpower of your future!`,
      questions: [
        {
          id: 1,
          q: "Chọn đáp án đúng cho chỗ trống (1).",
          a: "C",
          o: ["in", "with", "on", "from"],
          r: {
            A: "Sai. Không dùng 'in the 2nd November 2024'.",
            B: "Sai. 'with' không phù hợp để chỉ mốc ngày.",
            C: "Đúng. Dùng 'on' với ngày cụ thể: 'on the 2nd November 2024'.",
            D: "Sai. 'from' không hợp ngữ cảnh."
          }
        },
        {
          id: 2,
          q: "Chọn đáp án đúng cho chỗ trống (2).",
          a: "A",
          o: [
            "latest innovation",
            "the latest innovation",
            "innovation the latest",
            "latest the innovation"
          ],
          r: {
            A: "Đúng. Cụm đúng và tự nhiên nhất là 'our latest innovation'.",
            B: "Sai. Có thể dùng trong ngữ cảnh khác, nhưng sau 'our' thì không thêm 'the'.",
            C: "Sai. Trật tự từ sai.",
            D: "Sai. Trật tự từ sai."
          }
        },
        {
          id: 3,
          q: "Chọn đáp án đúng cho chỗ trống (3).",
          a: "C",
          o: ["that set", "which set", "which sets", "that sets"],
          r: {
            A: "Sai. 'that set' chia động từ sai.",
            B: "Sai. 'which set' cũng sai chia động từ.",
            C: "Đúng. 'which sets a new standard' đúng ngữ pháp.",
            D: "Sai. Có thể đúng trong vài câu khác, nhưng ở đây phương án chuẩn được chọn là mệnh đề quan hệ không xác định với 'which sets'."
          }
        },
        {
          id: 4,
          q: "Chọn đáp án đúng cho chỗ trống (4).",
          a: "C",
          o: ["technological", "technologically", "technology", "technologist"],
          r: {
            A: "Sai. Sau 'potential of' cần danh từ.",
            B: "Sai. Trạng từ không phù hợp.",
            C: "Đúng. 'the fullest potential of technology' là cụm tự nhiên.",
            D: "Sai. 'technologist' là người làm công nghệ."
          }
        },
        {
          id: 5,
          q: "Chọn đáp án đúng cho chỗ trống (5).",
          a: "A",
          o: ["Whether", "Either", "Neither", "Regardless"],
          r: {
            A: "Đúng. Cấu trúc đúng là 'Whether you're A, B, or C...'.",
            B: "Sai. 'Either' không đi với ba lựa chọn như vậy.",
            C: "Sai. 'Neither' không phù hợp nghĩa.",
            D: "Sai. 'Regardless' không nối đúng cấu trúc câu này."
          }
        },
        {
          id: 6,
          q: "Chọn đáp án đúng cho chỗ trống (6).",
          a: "A",
          o: ["miss out", "get out", "go out", "check out"],
          r: {
            A: "Đúng. Cụm đúng là 'Don't miss out on the opportunity'.",
            B: "Sai. 'get out on' không đúng cụm.",
            C: "Sai. 'go out on' không hợp nghĩa.",
            D: "Sai. 'check out on' không đúng."
          }
        }
      ]
    },
    {
      type: "passage_mcq",
      title: "Tips for Better Time Management",
      instruction: "Read the following leaflet and choose the best answer for each blank from 7 to 12.",
      passage: `Want to get more done in less time? Follow these strategies for improving your productivity and focus!

Common Struggles:
Many people (7) _____ effective time management, leading to stress and unfinished tasks. Research shows that nearly 70% of workers feel overwhelmed by their workload.

Actionable Solutions!
- Prioritize your tasks! Start by making a to-do list and (8) _____ the most important tasks first.
- Break down big projects! Tackling a large project can be daunting, but breaking it into smaller, manageable parts helps (9) _____ progress without feeling overwhelmed.
- Avoid distractions! (10) _____ multitasking, focus on one task at a time to (11) _____ your efficiency.
- Take breaks! Give yourself regular breaks to rest and recharge, which can help maintain a higher (12) _____ of productivity.`,
      questions: [
        {
          id: 7,
          q: "Chọn đáp án đúng cho chỗ trống (7).",
          a: "A",
          o: ["lack", "excel", "organize", "have"],
          r: {
            A: "Đúng. 'Many people lack effective time management' là hợp nghĩa nhất.",
            B: "Sai. 'excel effective time management' sai cấu trúc.",
            C: "Sai. Không hợp nghĩa với phần sau.",
            D: "Sai. 'have effective time management' không hợp ngữ cảnh vì câu đang nói khó khăn phổ biến."
          }
        },
        {
          id: 8,
          q: "Chọn đáp án đúng cho chỗ trống (8).",
          a: "D",
          o: ["skip", "compete", "avoid", "tackle"],
          r: {
            A: "Sai. Không thể 'skip the most important tasks first'.",
            B: "Sai. 'compete the tasks' sai nghĩa.",
            C: "Sai. Trái với mục tiêu ưu tiên công việc.",
            D: "Đúng. 'tackle the most important tasks first' là cụm tự nhiên."
          }
        },
        {
          id: 9,
          q: "Chọn đáp án đúng cho chỗ trống (9).",
          a: "C",
          o: ["install", "pause", "ensure", "discourage"],
          r: {
            A: "Sai. Không hợp nghĩa.",
            B: "Sai. 'helps pause progress' trái nghĩa.",
            C: "Đúng. 'helps ensure progress' là tự nhiên và hợp nghĩa.",
            D: "Sai. 'discourage progress' là trái nghĩa."
          }
        },
        {
          id: 10,
          q: "Chọn đáp án đúng cho chỗ trống (10).",
          a: "A",
          o: ["Instead of", "Due to", "While", "In case of"],
          r: {
            A: "Đúng. 'Instead of multitasking, focus on one task...' là hợp lý nhất.",
            B: "Sai. 'Due to multitasking' không phù hợp cấu trúc lời khuyên.",
            C: "Sai. 'While multitasking' làm lệch nghĩa.",
            D: "Sai. Không đúng quan hệ ý."
          }
        },
        {
          id: 11,
          q: "Chọn đáp án đúng cho chỗ trống (11).",
          a: "B",
          o: ["slow", "boost", "limit", "stop"],
          r: {
            A: "Sai. Trái nghĩa.",
            B: "Đúng. 'boost your efficiency' là cụm tự nhiên.",
            C: "Sai. Trái mục đích câu.",
            D: "Sai. Không hợp nghĩa."
          }
        },
        {
          id: 12,
          q: "Chọn đáp án đúng cho chỗ trống (12).",
          a: "A",
          o: ["level", "drop", "decrease", "soar"],
          r: {
            A: "Đúng. Cụm đúng là 'a higher level of productivity'.",
            B: "Sai. 'a higher drop' không hợp.",
            C: "Sai. 'a higher decrease' vô lý.",
            D: "Sai. 'a higher soar' sai từ loại."
          }
        }
      ]
    },
    {
      type: "arrangement_mcq",
      title: "Sentence / Utterance Arrangement",
      instruction: "Mark the letter A, B, C or D on your answer sheet to indicate the best arrangement of utterances or sentences to make a meaningful exchange or text in each of the following questions from 13 to 17.",
      groups: [
        {
          id: 13,
          prompt: "Question 13",
          stem: [
            "a. Tom: Good morning, Alice! Did you sleep well?",
            "b. Alice: Yes, thank you. How about you?",
            "c. Alice: Good morning, Tom!"
          ],
          a: "D",
          o: ["a-b-c", "c-b-a", "b-c-a", "c-a-b"],
          r: {
            A: "Sai. Alice phải chào lại trước khi trả lời.",
            B: "Sai. Không thể trả lời trước khi Tom hỏi.",
            C: "Sai. Mở đầu bằng b là vô lý.",
            D: "Đúng. c là lời chào đáp lại, a là câu hỏi, b là câu trả lời tự nhiên."
          }
        },
        {
          id: 14,
          prompt: "Question 14",
          stem: [
            "a. Jack: Morning, Emily! It was good, thanks. I went hiking with some friends. How about you?",
            "b. Emily: Good morning, Jack! How was your weekend?",
            "c. Emily: Sounds fun! I had a relaxing weekend at home. Hey, have you seen the agenda?",
            "d. Emily: Alright, thanks. Oh, and don't forget, we have that client presentation at 2 PM.",
            "e. Jack: Not yet. Let me check my email."
          ],
          a: "C",
          o: ["a-b-c-d-e", "c-a-e-d-b", "b-a-c-e-d", "c-a-b-d-e"],
          r: {
            A: "Sai. Jack không thể trả lời trước khi Emily hỏi.",
            B: "Sai. Mở đầu bằng c là không tự nhiên.",
            C: "Đúng. Emily hỏi cuối tuần, Jack trả lời và hỏi lại, Emily đáp rồi hỏi agenda, Jack trả lời, Emily nhắc tiếp.",
            D: "Sai. Trật tự hội thoại không hợp logic."
          }
        },
        {
          id: 15,
          prompt: "Question 15: Dear Mr Trump,",
          stem: [
            "a. I ensure that all my duties are completed before my last day of work.",
            "b. Please accept this letter as my formal resignation from my position as the President.",
            "c. Please let me know if there is anything else I can do to assist with the transition.",
            "d. Thank you for the chance to be here and I am grateful for the experience and knowledge gained during my time.",
            "e. My last day of work will be Jan 19, 2025.",
            "Sincerely,",
            "Mr Biden"
          ],
          a: "B",
          o: ["a-b-c-d-e", "b-e-d-c-a", "c-d-e-b-a", "e-a-c-d-b"],
          r: {
            A: "Sai. Không thể mở thư xin nghỉ việc bằng cam kết hoàn tất nhiệm vụ.",
            B: "Đúng. b nêu mục đích, e nêu ngày nghỉ, d cảm ơn, c đề nghị hỗ trợ bàn giao, a cam kết hoàn tất nhiệm vụ.",
            C: "Sai. c không thể đứng đầu thư.",
            D: "Sai. e không nên mở đầu trước câu tuyên bố từ chức."
          }
        },
        {
          id: 16,
          prompt: "Question 16",
          stem: [
            "a. Also, volunteering makes students aware of the needs around them.",
            "b. Finally, doing volunteer work helps students feel good about supporting others.",
            "c. It is thought that high school students benefit from doing volunteer work in many ways.",
            "d. Additionally, students develop such important skills as teamwork and communication.",
            "e. It should be true. Firstly, students who do voluntary work gain valuable real-world experience."
          ],
          a: "D",
          o: ["c-a-b-d-e", "a-c-b-d", "c-a-b-d-e", "c-e-a-d-b"],
          r: {
            A: "Sai. Trật tự liệt kê chưa logic.",
            B: "Sai. Phương án này còn thiếu câu và sai cấu trúc.",
            C: "Sai. Trùng nội dung với A và vẫn không đúng trình tự tốt nhất.",
            D: "Đúng. c mở ý chung, e là firstly, a và d bổ sung thêm lợi ích, b là finally để kết."
          }
        },
        {
          id: 17,
          prompt: "Question 17",
          stem: [
            "a. Engaging in hobbies and personal interests can have a profound impact on overall well-being.",
            "b. These activities provide a much-needed break from the routine of daily life.",
            "c. Dear Sam, I've been reflecting on our discussion about balancing work and personal life.",
            "d. Hobbies also allow for personal growth and skill development.",
            "e. Gardening, painting, or playing a musical instrument can foster creativity and boost self-esteem."
          ],
          a: "C",
          o: ["c-a-b-d-e", "c-b-d-a-e", "c-e-b-d-a", "c-d-e-b-a"],
          r: {
            A: "Sai. Khá hợp nhưng không mượt bằng phương án đúng theo mạch thư và ví dụ.",
            B: "Sai. b không nên đứng ngay sau lời mở thư trước câu nêu ý chính.",
            C: "Đúng. c mở thư, e nêu ví dụ hoạt động, b nói lợi ích nghỉ ngơi, d nói phát triển bản thân, a làm câu kết khái quát.",
            D: "Sai. d đứng quá sớm trước ví dụ và câu nêu tác dụng trực tiếp."
          }
        }
      ]
    },
    {
      type: "passage_mcq",
      title: "Choosing a career",
      instruction: "Read the following passage about choosing a career and mark the letter A, B, C or D on your answer sheet to indicate the option that best fits each of the numbered blanks from 18 to 22.",
      passage: `Choosing a career is a significant decision that can impact one's life in many ways. (18) _____. To make an informed decision, it is essential to consider various factors, such as personal interests, skills, and values.

One of the most important factors to consider is personal interests. (19) _____. By pursuing a career that aligns with your passions, you are more likely to be motivated and satisfied.

Another important factor is skills and abilities. (20) _____. Identifying your strengths and weaknesses can help you choose a career path that suits your skills and talents.

In addition to personal interests and skills, it is crucial to consider the job market and industry trends. (21) _____. Researching different career paths and staying up-to-date on industry developments can help you make informed decisions.

To make the most of your career journey, it is essential to be proactive and take steps to develop your skills and network with professionals in your desired field. (22) _____. By continuously learning and adapting, you can increase your chances of success.`,
      questions: [
        {
          id: 18,
          q: "Chọn đáp án đúng cho chỗ trống (18).",
          a: "A",
          o: [
            "However, choosing a career can be a daunting task.",
            "It is important to choose a high-paying career.",
            "Most people find their dream job early in life.",
            "A college degree is necessary for success."
          ],
          r: {
            A: "Đúng. Câu này nối tự nhiên giữa việc career choice quan trọng và việc nó có thể khó khăn.",
            B: "Sai. Đoạn văn không nhấn mạnh tiền lương là yếu tố duy nhất.",
            C: "Sai. Không được hỗ trợ bởi ngữ cảnh.",
            D: "Sai. Quá tuyệt đối và không phù hợp."
          }
        },
        {
          id: 19,
          q: "Chọn đáp án đúng cho chỗ trống (19).",
          a: "C",
          o: [
            "A fulfilling career should provide financial security.",
            "A successful career requires hard work and dedication.",
            "Your career should align with your passions and values.",
            "It is important to choose a career that is in high demand."
          ],
          r: {
            A: "Sai. Không bám sát ý 'personal interests'.",
            B: "Sai. Quá chung chung.",
            C: "Đúng. Nối trực tiếp với câu sau về passions, motivation, and satisfaction.",
            D: "Sai. Đây hợp hơn với phần job market."
          }
        },
        {
          id: 20,
          q: "Chọn đáp án đúng cho chỗ trống (20).",
          a: "C",
          o: [
            "Your education level is the most important factor in choosing a career.",
            "Soft skills are less important than hard skills.",
            "Self-awareness is key to making informed career decisions.",
            "It is important to have a clear career plan from a young age."
          ],
          r: {
            A: "Sai. Đoạn đang nói về skills and abilities, không phải education level là quan trọng nhất.",
            B: "Sai. Không phù hợp và quá tuyệt đối.",
            C: "Đúng. Khớp với câu sau về identifying your strengths and weaknesses.",
            D: "Sai. Không nối trực tiếp với ý self-assessment."
          }
        },
        {
          id: 21,
          q: "Chỗ trống (21) chưa đầy đủ trong ảnh hiện tại.",
          a: null,
          incomplete: true,
          o: [
            "The job market is stable and predictable.",
            "The job market is constantly changing.",
            "[Không nhìn rõ trong ảnh]",
            "[Không nhìn rõ trong ảnh]"
          ],
          r: {
            A: "Sai. Trái với logic của câu sau về staying up-to-date on industry developments.",
            B: "Có vẻ đúng theo ngữ cảnh, nhưng chưa thể xác nhận hoàn toàn vì ảnh bị cắt phần còn lại.",
            C: "Không đủ dữ liệu do ảnh bị cắt.",
            D: "Không đủ dữ liệu do ảnh bị cắt."
          }
        },
        {
          id: 22,
          q: "Chỗ trống (22) chưa có đáp án trong ảnh hiện tại.",
          a: null,
          incomplete: true,
          o: [
            "[Không nhìn rõ trong ảnh]",
            "[Không nhìn rõ trong ảnh]",
            "[Không nhìn rõ trong ảnh]",
            "[Không nhìn rõ trong ảnh]"
          ],
          r: {
            A: "Không đủ dữ liệu do ảnh bị cắt phần đáp án.",
            B: "Không đủ dữ liệu do ảnh bị cắt phần đáp án.",
            C: "Không đủ dữ liệu do ảnh bị cắt phần đáp án.",
            D: "Không đủ dữ liệu do ảnh bị cắt phần đáp án."
          }
        }
      ]
    }
  ]
};
Object.assign(quizDataExam3.sections[3].questions[3], {
  a: "B",
  incomplete: false,
  o: [
    "The job market is stable and predictable.",
    "The job market is constantly changing.",
    "It is important to choose a career that is recession-proof.",
    "Most jobs require specialized skills."
  ],
  r: {
    A: "Sai. Trái với ý 'staying up-to-date on industry developments'.",
    B: "Đúng. Câu này nối rất tự nhiên với việc cần theo dõi xu hướng ngành nghề.",
    C: "Sai. Ý này không bám trực tiếp vào 'job market and industry trends'.",
    D: "Sai. Có thể đúng trong vài ngữ cảnh, nhưng không phải ý phù hợp nhất ở đây."
  }
});

Object.assign(quizDataExam3.sections[3].questions[4], {
  a: "C",
  incomplete: false,
  o: [
    "Networking is not important for career success.",
    "It is important to focus on one's own strengths and weaknesses.",
    "Lifelong learning is essential for career advancement.",
    "It is important to choose a career that offers job security."
  ],
  r: {
    A: "Sai. Trái với câu trước về networking with professionals.",
    B: "Sai. Ý này hợp hơn với đoạn nói về self-awareness.",
    C: "Đúng. Nối tự nhiên với câu sau: 'By continuously learning and adapting...'.",
    D: "Sai. Không khớp mạch ý về phát triển kỹ năng lâu dài."
  }
});

quizDataExam3.sections.push(
  {
    type: "passage_qa_mcq",
    title: "Human life expectancy / Milu",
    instruction: "Read the following passage about human life expectancy and mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions from 23 to 30.",
    passage: `Milu was born in a small village in the north of India, and never had the chance of going to school, because her family needed her to work. So she grew up never having learned to read or write. She was a little sad about it, but she didn't let it upset her too much, and tried to think about other things.

She went through life, never being able to do what she wanted, because she felt that if she couldn't read, then she was somehow less than everybody else. This meant that she didn't make many friends and didn't go out much. She thought people would think she was stupid, and she didn't want them to laugh at her.

When she was fifty-six, she got a job cleaning a school and when she had finished her work, she used to sit and watch the little kids do their lessons. She didn't realise that one of the teachers watched her while she watched the kids, and one day, as she was about to leave, the teacher asked her to sit in the class. The kids thought it was very funny, but the teacher patiently started Milu on her first lesson to learn to read. That was a few years ago, and now Milu can read and write as well as any of the other kids. She still cleans the school because she likes her job, but she doesn't feel less than everybody else anymore. The teacher, who is now her friend, sometimes gives her a book to read and she learns about people living in other parts of the world.

She has a granddaughter who studies at the same school, and sometimes she helps her with her homework. Being able to do that makes her feel so happy that when she stays alone she has a little cry. When she was in her little village as a child, she would never have dreamt that one day she would be able to help her granddaughter with her homework. She owes gratitude to her teacher friend for the gift she was given.`,
    questions: [
      {
        id: 23,
        q: "Which of the following is NOT what Milu gains from learning?",
        a: "D",
        o: [
          "Knowing more about the world.",
          "Reading some books.",
          "Becoming a friend of the teacher's.",
          "Feeling interested in her cleaning job."
        ],
        r: {
          A: "Sai. Được nhắc qua việc cô ấy learns about people living in other parts of the world.",
          B: "Sai. Teacher gives her a book to read.",
          C: "Sai. The teacher, who is now her friend.",
          D: "Đúng. Cô ấy vẫn thích công việc dọn trường, nhưng đó không phải điều cô ấy 'gains from learning'."
        }
      },
      {
        id: 24,
        q: "What does the phrase 'the gift' refer to?",
        a: "D",
        o: [
          "the money Milu owes to the teacher",
          "what Milu could do to her granddaughter",
          "Milu's childhood dream",
          "what the teacher could teach her"
        ],
        r: {
          A: "Sai. Không có chi tiết nào về tiền bạc.",
          B: "Sai. Đây là hệ quả, không phải 'the gift' trực tiếp.",
          C: "Sai. Không phải giấc mơ thời thơ ấu.",
          D: "Đúng. 'The gift' chính là món quà được học đọc và viết mà cô giáo đã trao cho Milu."
        }
      },
      {
        id: 25,
        q: "The words 'went through' can be replaced with ______.",
        a: "B",
        o: [
          "felt bored with",
          "experienced",
          "started",
          "felt happy with"
        ],
        r: {
          A: "Sai. Không đúng nghĩa.",
          B: "Đúng. 'went through life' gần nghĩa với 'experienced life/lived through life'.",
          C: "Sai. Không phù hợp.",
          D: "Sai. Trái với mạch ý đoạn văn."
        }
      },
      {
        id: 26,
        q: "The word 'patiently' in paragraph 3 is OPPOSITE in meaning to ______.",
        a: "A",
        o: [
          "irritably",
          "irregularly",
          "irrelevantly",
          "irrationally"
        ],
        r: {
          A: "Đúng. 'patiently' đối lập với 'irritably'.",
          B: "Sai. 'irregularly' không phải đối nghĩa.",
          C: "Sai. 'irrelevantly' không liên quan.",
          D: "Sai. 'irrationally' không phải đối nghĩa trực tiếp."
        }
      },
      {
        id: 27,
        q: "Which of the following best paraphrases the underlined sentence in paragraph 4?",
        a: "C",
        o: [
          "Milu likes cleaning the school and she doesn't want to learn how to read and write any longer.",
          "Milu likes cleaning the school but she wants to become a teacher so that everyone admires her.",
          "Milu likes cleaning the school but she no longer feels socially inferior as she has learnt how to read and write.",
          "Milu likes cleaning the school and she doesn't want to change her job as she feels socially inferior."
        ],
        r: {
          A: "Sai. Trái với nội dung câu gốc.",
          B: "Sai. Không có chi tiết nào về việc muốn trở thành giáo viên.",
          C: "Đúng. Diễn đạt lại chính xác ý cô ấy vẫn thích công việc nhưng აღარ cảm thấy kém cỏi.",
          D: "Sai. Câu gốc nói cô ấy không còn cảm thấy kém hơn người khác nữa."
        }
      },
      {
        id: 28,
        q: "Which of the following is TRUE according to the passage?",
        a: "A",
        o: [
          "Milu, an Indian woman, has changed her life since she was taught how to read and write.",
          "Milu, an Indian woman, has become a teacher though she had no education in her childhood.",
          "Milu, an Indian woman, has been socially inferior since she has no education in her life.",
          "Milu, an Indian woman, has learnt a lot from the children in the school where she works as a cleaner."
        ],
        r: {
          A: "Đúng. Toàn bộ đoạn cho thấy cuộc đời Milu thay đổi sau khi được học đọc viết.",
          B: "Sai. Cô ấy không trở thành giáo viên.",
          C: "Sai. Cô ấy không còn cảm thấy less than everybody else anymore.",
          D: "Sai. Người dạy cô là teacher, không phải bọn trẻ."
        }
      },
      {
        id: 29,
        q: "In which paragraph does the writer mention Milu's inferiority?",
        a: "B",
        o: [
          "Paragraph 1",
          "Paragraph 2",
          "Paragraph 3",
          "Paragraph 4"
        ],
        r: {
          A: "Sai. Đoạn 1 nói về tuổi thơ và việc không được đi học.",
          B: "Đúng. Đoạn 2 nói cô ấy felt less than everybody else.",
          C: "Sai. Đoạn 3 nói về việc bắt đầu được học.",
          D: "Sai. Đoạn 4 nói về cuộc sống sau khi biết đọc viết."
        }
      },
      {
        id: 30,
        q: "In which paragraph does the writer mention that Milu feels grateful to her teacher?",
        a: "D",
        o: [
          "Paragraph 2",
          "Paragraph 3",
          "Paragraph 4",
          "Paragraph 5"
        ],
        r: {
          A: "Sai. Không có ý biết ơn ở đó.",
          B: "Sai. Đoạn này kể việc cô giáo bắt đầu dạy Milu.",
          C: "Sai. Đoạn này chưa nói trực tiếp đến gratitude.",
          D: "Đúng. Câu cuối nói rõ 'She owes gratitude to her teacher friend...'."
        }
      }
    ]
  },
  {
    type: "passage_qa_mcq",
    title: "Wildlife conservation",
    instruction: "Read the following passage about wildlife conservation and mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions from 31 to 40.",
    passage: `[I] Wildlife conservation refers to the efforts made to protect and preserve wild animal species and their habitats. [II] It is crucial for maintaining biodiversity, which plays a vital role in ecosystem stability and health (Smith & Jones, 2018). [III] Unfortunately, many species are threatened due to habitat destruction, poaching, and climate change, making conservation efforts more urgent than ever. [IV]

One of the primary reasons for wildlife conservation is the preservation of biodiversity. A diverse range of species contributes to ecosystem services, such as pollination, water purification, and climate regulation. The loss of a single species can disrupt these services and lead to ecological imbalances. For instance, the decline of pollinators like bees has serious implications for food production and agriculture (Global Biodiversity Outlook, 2020).

Moreover, wildlife conservation has significant economic benefits. Many communities depend on ecotourism, which relies on healthy wildlife populations and intact ecosystems. According to a study by the World Wildlife Fund (WWF), ecotourism can generate billions of dollars in revenue, providing jobs and supporting local economies (WWF, 2021). Protecting wildlife not only safeguards natural resources but also creates sustainable livelihoods for local populations.

However, effective wildlife conservation requires a collaborative approach. Governments, non-governmental organizations, and local communities must work together to implement policies and strategies that promote conservation efforts. Community-based conservation initiatives, where local people actively participate in protecting their natural resources, have shown promising results. These initiatives empower communities and ensure that conservation efforts are tailored to local needs and contexts (Bennett & Dearden, 2014).`,
    questions: [
      {
        id: 31,
        q: "Where in paragraph 1 does the following sentence best fit? 'Conservation measures are essential for the survival of many endangered species.'",
        a: "D",
        o: [
          "[I]",
          "[II]",
          "[III]",
          "[IV]"
        ],
        r: {
          A: "Sai. Đặt ở đầu đoạn sẽ thiếu mạch giới thiệu.",
          B: "Sai. Chưa hợp bằng sau khi nêu ra các mối đe dọa.",
          C: "Sai. Đặt tại đây chưa hoàn chỉnh ý bằng vị trí cuối đoạn.",
          D: "Đúng. Câu này hợp nhất sau câu nói nhiều loài đang bị đe dọa."
        }
      },
      {
        id: 32,
        q: "The phrase 'ecosystem services' in paragraph 2 could be best replaced by ______.",
        a: "B",
        o: [
          "benefits provided by the economy",
          "functions that ecosystems perform for humanity",
          "services offered by wildlife organizations",
          "economic services provided by local communities"
        ],
        r: {
          A: "Sai. Không phải 'economy'.",
          B: "Đúng. Đây là cách giải thích sát nhất của 'ecosystem services'.",
          C: "Sai. Không liên quan đến wildlife organizations.",
          D: "Sai. Không đúng phạm vi nghĩa."
        }
      },
      {
        id: 33,
        q: "The word 'their' in paragraph 4 refers to ______.",
        a: "C",
        o: [
          "ecosystem stability",
          "biodiversity",
          "local people",
          "ecological imbalance"
        ],
        r: {
          A: "Sai. 'their natural resources' không thể quy chiếu đến ecosystem stability.",
          B: "Sai. Biodiversity không sở hữu tài nguyên theo cách này.",
          C: "Đúng. 'their' chỉ 'local people'.",
          D: "Sai. Không hợp nghĩa."
        }
      },
      {
        id: 34,
        q: "According to paragraph 2, which of the following is NOT a reason for wildlife conservation?",
        a: "C",
        o: [
          "To maintain biodiversity",
          "To ensure food production",
          "To promote industrial development",
          "To support ecosystem stability"
        ],
        r: {
          A: "Sai. Được nhắc trực tiếp.",
          B: "Sai. Ví dụ về pollinators and food production cho thấy điều này.",
          C: "Đúng. Đoạn không nói conservation nhằm thúc đẩy phát triển công nghiệp.",
          D: "Sai. Ecosystem stability được nêu rõ."
        }
      },
      {
        id: 35,
        q: "Which of the following best summarizes paragraph 3?",
        a: "C",
        o: [
          "Ecotourism negatively affects local economies.",
          "Wildlife conservation primarily benefits large corporations.",
          "Protecting wildlife can create economic opportunities for local communities.",
          "Wildlife conservation is not economically beneficial."
        ],
        r: {
          A: "Sai. Trái ngược với đoạn văn.",
          B: "Sai. Đoạn nhấn mạnh local communities.",
          C: "Đúng. Đây là ý chính của đoạn 3.",
          D: "Sai. Đoạn 3 nói rõ có significant economic benefits."
        }
      },
      {
        id: 36,
        q: "The word 'collaborative' in paragraph 4 is CLOSEST in meaning to ______.",
        a: "B",
        o: [
          "independent",
          "cooperative",
          "competitive",
          "isolated"
        ],
        r: {
          A: "Sai. Trái nghĩa.",
          B: "Đúng. 'collaborative' gần nghĩa nhất với 'cooperative'.",
          C: "Sai. Không đúng sắc thái.",
          D: "Sai. Trái nghĩa."
        }
      },
      {
        id: 37,
        q: "Which of the following is TRUE according to the passage?",
        a: "C",
        o: [
          "Only governments are responsible for wildlife conservation.",
          "Ecotourism has no connection to wildlife conservation efforts.",
          "Community involvement is essential for successful conservation initiatives.",
          "Wildlife conservation is solely focused on endangered species."
        ],
        r: {
          A: "Sai. Đoạn 4 nói governments, NGOs, and local communities must work together.",
          B: "Sai. Đoạn 3 gắn ecotourism trực tiếp với conservation.",
          C: "Đúng. Đây là ý rõ ràng của đoạn 4.",
          D: "Sai. Wildlife conservation rộng hơn nhiều."
        }
      },
      {
        id: 38,
        q: "Which of the following best paraphrases the underlined sentence in paragraph 4?",
        a: "C",
        o: [
          "Collaborative efforts lead to better conservation policies.",
          "Local communities must manage their resources without external help.",
          "Wildlife conservation can only succeed with the involvement of different groups.",
          "Conservation initiatives do not require local participation."
        ],
        r: {
          A: "Sai. Chưa diễn đạt đủ ý 'different groups must work together'.",
          B: "Sai. Trái với câu gốc.",
          C: "Đúng. Đây là cách diễn đạt lại sát nhất.",
          D: "Sai. Trái hẳn với nội dung đoạn."
        }
      },
      {
        id: 39,
        q: "Which of the following can be inferred from the passage?",
        a: "C",
        o: [
          "Wildlife conservation is primarily a global issue that does not affect local communities.",
          "The economic benefits of conservation are negligible compared to its ecological impact.",
          "Without wildlife conservation, both biodiversity and local economies may suffer.",
          "Habitat destruction has little impact on wildlife populations."
        ],
        r: {
          A: "Sai. Đoạn 3 và 4 đều cho thấy ảnh hưởng rõ lên local communities.",
          B: "Sai. Đoạn 3 nhấn mạnh economic benefits là significant.",
          C: "Đúng. Có thể suy ra từ các ý về biodiversity, ecosystem services, ecotourism, and local livelihoods.",
          D: "Sai. Trái với đoạn 1."
        }
      },
      {
        id: 40,
        q: "Which of the following best summarizes the passage?",
        a: "A",
        o: [
          "Wildlife conservation is essential for protecting species and habitats, maintaining biodiversity, and providing economic benefits through ecotourism, requiring collaborative efforts for effectiveness.",
          "The primary focus of wildlife conservation is on endangered species and their immediate habitats.",
          "Wildlife conservation is not necessary as most species are thriving in their environments.",
          "Ecotourism is the only reason for wildlife conservation efforts globally."
        ],
        r: {
          A: "Đúng. Bao quát đầy đủ các ý chính của toàn bài.",
          B: "Sai. Quá hẹp.",
          C: "Sai. Trái với nội dung đoạn văn.",
          D: "Sai. Ecotourism chỉ là một lợi ích, không phải lý do duy nhất."
        }
      }
    ]
  }
);
