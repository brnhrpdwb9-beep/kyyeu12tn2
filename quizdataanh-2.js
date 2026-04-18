const quizDataExam2 = {
  subject: "English 12",
  exam: "Đề tham khảo số 2",
  format: "mixed_reading_mcq",
  sections: [
    {
      type: "passage_mcq",
      title: "DISCOVER THE FUTURE OF LEARNING WITH SMARTLEARN!",
      instruction: "Read the following advertisement and choose the best answer for each blank from 1 to 6.",
      passage: `Are you ready to learn in a fun and easy way? Try SmartLearn - the app that makes studying (1) _____ for everyone! SmartLearn helps students of all ages learn (2) _____ and improve their grades. With SmartLearn, you can study anytime, anywhere! The app offers interactive lessons in many subjects like math, science, English, and history. You can play games, watch videos, and take quizzes to remember what you learn. The lessons (3) _____ by teachers are simple and enjoyable. Plus, SmartLearn is safe and family-friendly, so parents can trust it! Download the app today on your phone or tablet (4) _____ free. You can try basic lessons or (5) _____ premium access for more features, like personalized study plans and expert tips from (6) _____ with SmartLearn and see the difference. Don't wait - get smarter today!`,
      questions: [
        {
          id: 1,
          q: "Chọn đáp án đúng cho chỗ trống (1).",
          a: "A",
          o: ["exciting", "excited", "excitingly", "excitement"],
          r: {
            A: "Đúng. Sau 'makes studying' cần tính từ bổ nghĩa cho việc học: 'makes studying exciting'.",
            B: "Sai. 'excited' thường dùng cho cảm xúc của người.",
            C: "Sai. 'excitingly' là trạng từ, không hợp vị trí này.",
            D: "Sai. 'excitement' là danh từ."
          }
        },
        {
          id: 2,
          q: "Chọn đáp án đúng cho chỗ trống (2).",
          a: "D",
          o: [
            "new brand skills",
            "skills brand new",
            "new skills brand",
            "brand new skills"
          ],
          r: {
            A: "Sai. Trật tự từ không đúng.",
            B: "Sai. Danh từ chính không thể đứng đầu như vậy.",
            C: "Sai. Cụm này sai trật tự tự nhiên.",
            D: "Đúng. Cụm đúng là 'brand new skills'."
          }
        },
        {
          id: 3,
          q: "Chọn đáp án đúng cho chỗ trống (3).",
          a: "C",
          o: ["which designed", "are designed", "designed", "designing"],
          r: {
            A: "Sai. Cấu trúc sai.",
            B: "Sai. Có thể đúng trong câu khác, nhưng ở đây câu đã rút gọn mệnh đề quan hệ.",
            C: "Đúng. 'The lessons designed by teachers...' là cụm rút gọn đúng.",
            D: "Sai. 'designing' mang nghĩa chủ động, không phù hợp."
          }
        },
        {
          id: 4,
          q: "Chọn đáp án đúng cho chỗ trống (4).",
          a: "D",
          o: ["at", "in", "for", "do"],
          r: {
            A: "Sai. Không dùng 'at free'.",
            B: "Sai. Không dùng 'in free'.",
            C: "Đúng. Cụm đúng là 'for free'.",
            D: "Sai. 'do' không phải giới từ."
          }
        },
        {
          id: 5,
          q: "Chọn đáp án đúng cho chỗ trống (5).",
          a: "B",
          o: ["put", "get", "make", "do"],
          r: {
            A: "Sai. Không dùng 'put premium access'.",
            B: "Đúng. 'get premium access' là cụm tự nhiên.",
            C: "Sai. Không tự nhiên trong ngữ cảnh này.",
            D: "Sai. 'do premium access' là sai."
          }
        },
        {
          id: 6,
          q: "Chọn đáp án đúng cho chỗ trống (6).",
          a: "A",
          o: ["learning", "learnt", "to learning", "learn"],
          r: {
            A: "Đúng. Sau 'tips from' cần danh từ/gerund, 'learning with SmartLearn' hợp nghĩa nhất.",
            B: "Sai. 'learnt' là quá khứ/phân từ, không hợp.",
            C: "Sai. Cấu trúc sai.",
            D: "Sai. 'learn' nguyên mẫu không phù hợp sau 'from'."
          }
        }
      ]
    },
    {
      type: "passage_mcq",
      title: "STAY SAFE ON FACEBOOK",
      instruction: "Read the following leaflet and choose the best answer for each blank from 7 to 12.",
      passage: `Let's protect your privacy & security

1. Privacy risks: Facebook collects a large (7) _____ of personal information. This information is often used for targeted advertising but could also be accessed by unauthorized third parties. Always be (8) _____ of what you share like your phone number, address, or financial information.

What you can do:
- Adjust your privacy (9) _____ to limit who can see your posts and personal details.
- Think twice before sharing information that could be misused.

2. Security tips: Your Facebook account can be a target for hackers. Cybercriminals may attempt to steal your login information or infect your device with malware.

What you can do:
- Enable two-factor authentication (2FA): This adds an extra layer of security, making it harder for (10) _____ to access your account.
- Use strong, unique passwords: (11) _____ using the same password across multiple sites, make your Facebook password complex.
- Beware of scams: Don't click on suspicious links or download files from unknown sources. Always (12) _____ the sender's identity before responding to messages.`,
      questions: [
        {
          id: 7,
          q: "Chọn đáp án đúng cho chỗ trống (7).",
          a: "D",
          o: ["plenty", "pile", "number", "amount"],
          r: {
            A: "Sai. 'plenty' không đi trực tiếp với 'of personal information' ở cấu trúc này.",
            B: "Sai. 'a pile of' không phù hợp văn phong.",
            C: "Sai. 'number' dùng cho danh từ đếm được, còn 'information' không đếm được.",
            D: "Đúng. 'a large amount of personal information' là cụm chuẩn."
          }
        },
        {
          id: 8,
          q: "Chọn đáp án đúng cho chỗ trống (8).",
          a: "C",
          o: ["cautious", "unaware", "mindful", "careful"],
          r: {
            A: "Sai. Có thể gần nghĩa, nhưng cụm tự nhiên nhất là 'be mindful of'.",
            B: "Sai. 'unaware of' mang nghĩa không nhận thức được, trái ý câu.",
            C: "Đúng. 'be mindful of what you share' là cụm rất tự nhiên.",
            D: "Sai. 'careful of' không tự nhiên bằng 'mindful of' ở đây."
          }
        },
        {
          id: 9,
          q: "Chọn đáp án đúng cho chỗ trống (9).",
          a: "C",
          o: ["preferences", "tools", "settings", "options"],
          r: {
            A: "Sai. Không phải cụm quen thuộc trong Facebook.",
            B: "Sai. 'privacy tools' không khớp tự nhiên nhất với động từ 'adjust'.",
            C: "Đúng. Cụm chuẩn là 'adjust your privacy settings'.",
            D: "Sai. 'privacy options' có thể hiểu được nhưng không chuẩn bằng 'settings'."
          }
        },
        {
          id: 10,
          q: "Chọn đáp án đúng cho chỗ trống (10).",
          a: "B",
          o: ["another", "others", "the other", "other"],
          r: {
            A: "Sai. 'another' dùng cho một cái/người khác số ít.",
            B: "Đúng. 'harder for others to access your account' là đúng ngữ pháp và nghĩa.",
            C: "Sai. 'the other' không phù hợp ngữ cảnh chung.",
            D: "Sai. 'other' không đứng một mình như vậy ở đây."
          }
        },
        {
          id: 11,
          q: "Chọn đáp án đúng cho chỗ trống (11).",
          a: "B",
          o: ["With the purpose of", "Instead of", "As a result of", "Regardless of"],
          r: {
            A: "Sai. Không hợp nghĩa.",
            B: "Đúng. 'Instead of using the same password...' là tự nhiên và logic.",
            C: "Sai. Không đúng quan hệ nghĩa.",
            D: "Sai. Không phù hợp ngữ cảnh lời khuyên."
          }
        },
        {
          id: 12,
          q: "Chọn đáp án đúng cho chỗ trống (12).",
          a: "B",
          o: ["check in", "look up", "call off", "check out"],
          r: {
            A: "Sai. 'check in' không mang nghĩa xác minh ở đây.",
            B: "Đúng. 'look up the sender's identity' mang nghĩa kiểm tra/xác minh.",
            C: "Sai. 'call off' là hủy bỏ.",
            D: "Sai. 'check out' có thể hiểu là xem xét, nhưng không chuẩn bằng 'look up' trong ngữ cảnh xác minh."
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
            "a. Mai: Thanks, Lan! I've been taking some yoga classes recently.",
            "b. Lan: That's great! Yoga sounds interesting.",
            "c. Lan: Hello, Mai! It's been a while. You look amazing!"
          ],
          a: "C",
          o: ["c-a-b", "b-c-a", "a-b-c", "a-c-b"],
          r: {
            A: "Sai. Sau lời chào và khen, Mai phải đáp lại trước rồi Lan mới phản hồi tiếp.",
            B: "Sai. Không thể mở đầu bằng b.",
            C: "Đúng. c mở đầu cuộc gặp, a giải thích, b phản hồi hợp lý.",
            D: "Sai. Không tự nhiên khi Mai nói trước lời chào của Lan."
          }
        },
        {
          id: 14,
          prompt: "Question 14",
          stem: [
            "a. Anna: I'm planning to visit Spain next year.",
            "b. Tom: Why are you learning Spanish?",
            "c. Tom: Oh, that's exciting! How are your lessons going so far?",
            "d. Anna: They're going well. I'm learning a lot about Spanish culture too.",
            "e. Tom: That sounds fascinating!"
          ],
          a: "C",
          o: ["a-c-e-b-d", "a-b-c-e-d", "b-a-c-d-e", "d-e-a-b-c"],
          r: {
            A: "Sai. Tom không thể hỏi 'How are your lessons going' trước khi biết Anna học Spanish vì lý do gì.",
            B: "Sai. Sau c thì thường phải đến d rồi mới e.",
            C: "Đúng. Tom hỏi lý do, Anna trả lời, Tom hỏi tiếp về việc học, Anna trả lời, Tom kết lại.",
            D: "Sai. Mở đầu bằng d là vô lý."
          }
        },
        {
          id: 15,
          prompt: "Question 15: Hi Larry,",
          stem: [
            "a. Lately, I've been amazed by how quickly technology is evolving.",
            "b. The new smartphones are also incredible, especially their cameras.",
            "c. I'm thinking about upgrading; any recommendations?",
            "d. AI tools like chatbots and art creators are everywhere - have you tried any?",
            "e. I've also been reading about smart homes - imagine controlling everything with your voice!",
            "Tech is making life so exciting. Let me know what cool stuff you've come across lately!",
            "Take care,",
            "John"
          ],
          a: "D",
          o: ["d-a-c-b-e", "a-b-d-c-e", "d-c-a-b-e", "a-d-b-c-e"],
          r: {
            A: "Sai. Mở đầu bằng d hơi đột ngột so với email.",
            B: "Sai. Trật tự ý chưa mượt bằng D.",
            C: "Sai. Hỏi xin gợi ý điện thoại quá sớm trước khi dẫn vào mảng smartphone.",
            D: "Đúng. a mở ý chung, d mở rộng về AI, b chuyển sang smartphone, c hỏi xin gợi ý, e thêm ý về smart homes trước khi kết."
          }
        },
        {
          id: 16,
          prompt: "Question 16",
          stem: [
            "a. Arnel didn't make much money this way, but he never gave up on his passion.",
            "b. In 1982, at the age of fifteen, he joined a local band as a lead singer, singing pop songs by famous bands.",
            "c. He has been passionate about singing since he was five years old and has achieved great success as a professional singer.",
            "d. Arnel Pineda was born in Sampaloc, Manila, the Philippines in 1967, and he is an inspiring person.",
            "e. Arnel's success shows that anyone can achieve their dreams if they try hard enough."
          ],
          a: "A",
          o: ["d-c-b-a-e", "a-b-c-d-e", "b-c-d-a-e", "c-a-d-b-e"],
          r: {
            A: "Đúng. d giới thiệu nhân vật, c nói đam mê, b kể bước đầu sự nghiệp, a nêu khó khăn, e kết luận.",
            B: "Sai. Không thể mở đầu bằng a.",
            C: "Sai. b không nên đứng trước d.",
            D: "Sai. Trật tự tiểu sử không hợp lý."
          }
        },
        {
          id: 17,
          prompt: "Question 17",
          stem: [
            "a. The population of New Orleans had some fluctuation between 1950 and 2010. It had a slight growth between 1950 and 1970.",
            "b. During this time, Atlanta had the most significant change in population. The population of Atlanta in 1950 was around 500 thousand, and it rose significantly to 2.2 million by 1990.",
            "c. Similarly, Charlotte's population went up over the 60-year period. It grew steadily from 100 thousand to 500 thousand between 1950 and 1990.",
            "d. The chart shows how the populations of three major cities in the USA changed from 1950 to 2010. These cities are Atlanta, Charlotte, and New Orleans.",
            "e. In general, the population in each city increased over the 60-year period."
          ],
          a: "D",
          o: ["d-b-c-e-a", "d-c-a-b-e", "d-a-e-b-c", "d-e-b-c-a"],
          r: {
            A: "Sai. Thiếu câu tổng quát sau mở bài.",
            B: "Sai. Không hợp trình tự mô tả overview trước rồi chi tiết.",
            C: "Sai. Đưa New Orleans lên quá sớm trước overview hoàn chỉnh.",
            D: "Đúng. d mở bài, e nêu xu hướng chung, b-c-a lần lượt triển khai chi tiết."
          }
        }
      ]
    },
    {
      type: "passage_mcq",
      title: "Technology and personal relationships",
      instruction: "Read the following passage and mark the letter A, B, C or D on your answer sheet to indicate the option that best fits each of the numbered blanks from 18 to 22.",
      passage: `Technology can exert its power on almost every aspect of our lives, and personal relationships are no exception. We are now becoming more attached to technological devices and less connected to the people around us or even our loved ones, (18) _____.

We work longer hours on computers, meet fewer friends, text more often, and watch more videos than have a true conversation with friends or family members. Relationships at home and at work (19) _____. Social media links us all together, but we mistake them for a perfect replacement for relationships. It is time we realised that the power of connections is built from our own efforts. Choosing to stay technologically connected, (20) _____, listening, understanding, and sharing feelings, (21) _____.

It is not difficult to balance between connections through technology and those through real interactions. (22) _____. We should spend more time visiting our parents and siblings, besides keeping in touch with them on social media. We should learn to cherish the moments we spend with them. It is never too late to strengthen the bonds with school friends and teachers.`,
      questions: [
        {
          id: 18,
          q: "Chọn đáp án đúng cho chỗ trống (18).",
          a: "A",
          o: [
            "whose presence we sometimes overlook in favor of online connections",
            "influence our lives due to a lack of online connections",
            "are distant from us and require digital connections",
            "of which presence with our oversight in preference to online connections"
          ],
          r: {
            A: "Đúng. Mệnh đề quan hệ rút gọn ý nghĩa tự nhiên, bổ sung cho 'our loved ones'.",
            B: "Sai. Sai logic nghĩa.",
            C: "Sai. Không phù hợp nội dung câu.",
            D: "Sai. Cấu trúc ngữ pháp sai."
          }
        },
        {
          id: 19,
          q: "Chọn đáp án đúng cho chỗ trống (19).",
          a: "A",
          o: [
            "are enhanced by technology",
            "of which technology is enhanced",
            "that have technology enhance",
            "having been enhanced by technology"
          ],
          r: {
            A: "Đúng. Câu hoàn chỉnh và đúng ngữ pháp sau chủ ngữ 'Relationships at home and at work'.",
            B: "Sai. Cấu trúc bị động sai.",
            C: "Sai. Cấu trúc sai ngữ pháp.",
            D: "Sai. Không tạo thành mệnh đề chính hoàn chỉnh."
          }
        },
        {
          id: 20,
          q: "Chỗ trống (20) chưa có đáp án trong ảnh hiện tại.",
          a: null,
          incomplete: true,
          o: [
            "[Không nhìn rõ trong ảnh]",
            "[Không nhìn rõ trong ảnh]",
            "[Không nhìn rõ trong ảnh]",
            "[Không nhìn rõ trong ảnh]"
          ],
          r: {
            A: "Không đủ dữ liệu do ảnh chưa chụp phần đáp án.",
            B: "Không đủ dữ liệu do ảnh chưa chụp phần đáp án.",
            C: "Không đủ dữ liệu do ảnh chưa chụp phần đáp án.",
            D: "Không đủ dữ liệu do ảnh chưa chụp phần đáp án."
          }
        },
        {
          id: 21,
          q: "Chỗ trống (21) chưa có đáp án trong ảnh hiện tại.",
          a: null,
          incomplete: true,
          o: [
            "[Không nhìn rõ trong ảnh]",
            "[Không nhìn rõ trong ảnh]",
            "[Không nhìn rõ trong ảnh]",
            "[Không nhìn rõ trong ảnh]"
          ],
          r: {
            A: "Không đủ dữ liệu do ảnh chưa chụp phần đáp án.",
            B: "Không đủ dữ liệu do ảnh chưa chụp phần đáp án.",
            C: "Không đủ dữ liệu do ảnh chưa chụp phần đáp án.",
            D: "Không đủ dữ liệu do ảnh chưa chụp phần đáp án."
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
            A: "Không đủ dữ liệu do ảnh chưa chụp phần đáp án.",
            B: "Không đủ dữ liệu do ảnh chưa chụp phần đáp án.",
            C: "Không đủ dữ liệu do ảnh chưa chụp phần đáp án.",
            D: "Không đủ dữ liệu do ảnh chưa chụp phần đáp án."
          }
        }
      ]
    }
  ]
};



Object.assign(quizDataExam2.sections[3].questions[2], {
  a: "C",
  incomplete: false,
  o: [
    "a considerable amount of time doing activities together has to be spent",
    "doing activities together is very essential for us",
    "we have to spend a considerable amount of time doing activities together",
    "spending a considerable amount of time doing activities together"
  ],
  r: {
    A: "Sai. Cấu trúc bị động này không hòa hợp tự nhiên với phần còn lại của câu.",
    B: "Sai. Nghĩa tạm ổn nhưng nối câu không mượt bằng đáp án C.",
    C: "Đúng. Câu diễn đạt tự nhiên nhất về việc cần dành nhiều thời gian làm hoạt động cùng nhau.",
    D: "Sai. Dạng V-ing này làm câu thiếu vị ngữ chính."
  }
});

Object.assign(quizDataExam2.sections[3].questions[3], {
  a: "A",
  incomplete: false,
  o: [
    "This helps strengthen our mind and body, keeping us away from isolation and loneliness",
    "Strengthening our mind and body, isolation and loneliness keep us from feeling connected",
    "We strengthen our mind and body so that they keep us away from isolation and loneliness",
    "Without strengthening our mind and body, we can not keep away from isolation and loneliness"
  ],
  r: {
    A: "Đúng. Nghĩa hợp lý và nối tốt với ý trước về các tương tác thật giúp con người tránh cô lập và cô đơn.",
    B: "Sai. Quan hệ nghĩa bị đảo ngược và câu thiếu tự nhiên.",
    C: "Sai. Đại từ 'they' không rõ ràng và câu không tự nhiên.",
    D: "Sai. Nghĩa lệch so với mạch văn gốc."
  }
});

Object.assign(quizDataExam2.sections[3].questions[4], {
  a: "B",
  incomplete: false,
  o: [
    "Improved the bonds, we can start nurturing the relationships within our family",
    "We can start by nurturing the relationships within our family",
    "Our family can start nurturing the relationships",
    "People in our family can nurture the relationships"
  ],
  r: {
    A: "Sai. Cấu trúc sai ngữ pháp.",
    B: "Đúng. Câu hoàn chỉnh, tự nhiên và phù hợp với lời khuyên ở đoạn cuối.",
    C: "Sai. Nghĩa hẹp hơn và không tự nhiên bằng.",
    D: "Sai. Câu đúng ngữ pháp nhưng không sát ý và không tự nhiên bằng đáp án B."
  }
});

quizDataExam2.sections.push(
  {
    type: "passage_qa_mcq",
    title: "Working and happiness",
    instruction: "Read the following passage about working and mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions from 23 to 30.",
    passage: `Some people love working so much that it doesn't feel like work. But most people are not so lucky. They need money to live, so they need a job. However, they don't love their work, and they feel unhappy. And because they are unhappy, they may not work hard. Luckily, some people and companies are trying to improve things.

Dan Price is the CEO of a company based in Seattle. In 2015, he raised the salaries of all of his workers to $70,000 a year, much higher than the average income in the United States. To pay for this, he cut his own salary to the same amount. Interestingly, according to a study by Princeton University in 2010 about salaries, people who make around $75,000 each year are happier and feel more satisfaction than those who make less or more money. Since Price made his decision, his workers have been happier and his company has been more successful.

Money is one reason why some workers are unhappy with their jobs. Another reason is working too many hours. Perpetual Guardian, a company based in New Zealand, wanted staff to have a better work-life balance. The company came up with a plan. Its staff were paid for five days, but they only had to work four days each week. Not surprisingly, workers were happier and more satisfied.

Many studies show that people who do things are happier than people who buy things. For example, going on a road trip or learning to play the guitar is better than buying a car or guitar. The famous company Airbnb wants its staff to have great experiences. Workers get $2,000 each year to stay at Airbnb properties anywhere in the world. As a result, many people who work at Airbnb love their jobs.`,
    questions: [
      {
        id: 23,
        q: "Which of the following is NOT MENTIONED in the passage?",
        a: "D",
        o: [
          "Dan Price reduced his own salary to increase his workers' pay.",
          "Perpetual Guardian reduced working hours to improve employees' happiness.",
          "Airbnb offers employees money for travel experiences.",
          "Companies that pay employees more than $75,000 are always more successful."
        ],
        r: {
          A: "Sai. Ý này được nhắc rõ ở đoạn 2.",
          B: "Sai. Được nhắc ở đoạn 3 về Perpetual Guardian.",
          C: "Sai. Đoạn 4 nói nhân viên Airbnb được $2,000 mỗi năm để ở tại các Airbnb properties.",
          D: "Đúng. Đoạn văn không hề khẳng định các công ty trả trên $75,000 thì luôn thành công hơn."
        }
      },
      {
        id: 24,
        q: "The word 'unhappy' in paragraph 1 is OPPOSITE in meaning to ______.",
        a: "B",
        o: [
          "sad",
          "satisfied",
          "stressed",
          "annoyed"
        ],
        r: {
          A: "Sai. 'sad' gần nghĩa với 'unhappy'.",
          B: "Đúng. 'satisfied' là hài lòng, trái nghĩa phù hợp nhất.",
          C: "Sai. 'stressed' không phải đối nghĩa trực tiếp.",
          D: "Sai. 'annoyed' chỉ là một sắc thái cảm xúc tiêu cực."
        }
      },
      {
        id: 25,
        q: "The word 'cut' in paragraph 2 could be best replaced by ______.",
        a: "A",
        o: [
          "reduced",
          "abandoned",
          "removed",
          "avoided"
        ],
        r: {
          A: "Đúng. 'cut his own salary' nghĩa là giảm lương của chính mình.",
          B: "Sai. 'abandoned' là từ bỏ, không đúng nghĩa.",
          C: "Sai. 'removed' không sát nghĩa trong ngữ cảnh này.",
          D: "Sai. 'avoided' là tránh né."
        }
      },
      {
        id: 26,
        q: "The word 'they' in paragraph 3 refers to ______.",
        a: "A",
        o: [
          "staff",
          "company",
          "hours",
          "jobs"
        ],
        r: {
          A: "Đúng. 'they' trong câu 'they only had to work four days' chỉ 'Its staff'.",
          B: "Sai. 'company' là số ít và không phù hợp nghĩa.",
          C: "Sai. 'hours' không thể là chủ thể của hành động đó.",
          D: "Sai. 'jobs' không khớp ngữ cảnh."
        }
      },
      {
        id: 27,
        q: "Which of the following best paraphrases the underlined sentence in paragraph 2?",
        a: "A",
        o: [
          "People earning approximately $75,000 annually tend to feel more content than those earning less or more.",
          "Earning exactly $75,000 per year ensures complete happiness and satisfaction for everyone.",
          "People making over $75,000 annually are less happy and satisfied than those earning under this amount.",
          "Happiness and satisfaction are unrelated to how much money people earn yearly."
        ],
        r: {
          A: "Đúng. Diễn đạt lại đúng ý câu gốc.",
          B: "Sai. Câu gốc không nói 'exactly' và cũng không nói đảm bảo hạnh phúc hoàn toàn cho mọi người.",
          C: "Sai. Câu gốc nói khoảng $75,000 hạnh phúc hơn cả người kiếm ít hơn lẫn nhiều hơn.",
          D: "Sai. Trái với nội dung nghiên cứu được nêu."
        }
      },
      {
        id: 28,
        q: "Which of the following is TRUE according to the passage?",
        a: "B",
        o: [
          "Airbnb's $2,000 yearly benefit is only for international travel experiences.",
          "Workers who focus on experiences rather than possessions tend to be happier.",
          "Perpetual Guardian increased working hours while raising salaries equally.",
          "Dan Price's salary changes caused dissatisfaction among his employees."
        ],
        r: {
          A: "Sai. Đoạn văn chỉ nói ở Airbnb properties anywhere in the world, không giới hạn như đáp án nêu.",
          B: "Đúng. Đoạn 4 nói people who do things are happier than people who buy things.",
          C: "Sai. Perpetual Guardian giảm số ngày làm việc, không tăng.",
          D: "Sai. Nhân viên của Dan Price hạnh phúc hơn sau thay đổi đó."
        }
      },
      {
        id: 29,
        q: "In which paragraph does the writer NOT mention a present causal relationship?",
        a: "C",
        o: [
          "Paragraph 1",
          "Paragraph 2",
          "Paragraph 3",
          "Paragraph 4"
        ],
        r: {
          A: "Sai. Đoạn 1 có quan hệ nguyên nhân-kết quả hiện tại: vì không hạnh phúc nên có thể không làm việc chăm chỉ.",
          B: "Sai. Đoạn 2 có kết quả hiện tại sau quyết định của Dan Price: workers have been happier and company has been more successful.",
          C: "Đúng. Đoạn 3 kể lại sự việc trong quá khứ về Perpetual Guardian, không nhấn mạnh quan hệ nhân quả hiện tại.",
          D: "Sai. Đoạn 4 có quan hệ nhân quả hiện tại: As a result, many people who work at Airbnb love their jobs."
        }
      },
      {
        id: 30,
        q: "In which paragraph does the writer mention the impact of reduced working hours on employees' happiness?",
        a: "C",
        o: [
          "Paragraph 1",
          "Paragraph 2",
          "Paragraph 3",
          "Paragraph 4"
        ],
        r: {
          A: "Sai. Đoạn 1 chỉ nêu vấn đề chung.",
          B: "Sai. Đoạn 2 nói về lương.",
          C: "Đúng. Đoạn 3 nói nhân viên được trả cho 5 ngày nhưng chỉ làm 4 ngày và hạnh phúc hơn.",
          D: "Sai. Đoạn 4 nói về trải nghiệm ở Airbnb."
        }
      }
    ]
  },
  {
    type: "passage_qa_mcq",
    title: "TikTok",
    instruction: "Read the following passage about TikTok and mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions from 31 to 40.",
    passage: `TikTok is a popular social media app where people can create and share short videos [I]. It started in China in 2016 as Douyin [II]. The app is known for its easy-to-use tools that let users add music, effects, and filters to their videos [III]. People of all ages enjoy making and watching TikTok videos, which can be funny, educational, or creative [IV].

One of the reasons TikTok is so popular is because of its algorithm, which shows users videos that match their interests. When you open the app, you see a personalized feed called the "For You" page. This page is different for everyone and updates with new videos all the time. Users can also follow their favorite creators to see more of their content.

TikTok has become a platform for trends and challenges. Many users participate in dance challenges, lip-syncing, and other viral activities. These trends can spread quickly, reaching millions of people in a short time. Because of this, TikTok has influenced music charts, fashion, and even language. Songs that go viral on TikTok often become hits on other platforms too.

The app is also a space for education and advocacy. Many creators use TikTok to share knowledge about various topics, such as science, history, cooking, and fitness. Others use the platform to raise awareness about social issues and promote positive change.

In addition to individual creators, many brands and businesses use TikTok for marketing. They create content to engage with their audience, often using popular trends and challenges to promote their products.

However, TikTok has faced some criticism and challenges. Concerns about privacy and data security have led to scrutiny from governments. Despite these issues, TikTok still remains one of the most downloaded apps in the world.`,
    questions: [
      {
        id: 31,
        q: "Where in paragraph 1 does the following sentence best fit? 'but became TikTok when it launched internationally in 2018'",
        a: "B",
        o: [
          "[I]",
          "[II]",
          "[III]",
          "[IV]"
        ],
        r: {
          A: "Sai. Đặt ở đây làm câu mở đầu thiếu mạch nghĩa.",
          B: "Đúng. Nó nối tự nhiên sau câu 'It started in China in 2016 as Douyin'.",
          C: "Sai. Đặt ở đây sẽ tách rời thông tin về Douyin khỏi phần bổ sung liên quan.",
          D: "Sai. Quá xa vị trí cần tham chiếu."
        }
      },
      {
        id: 32,
        q: "The phrase 'match their interests' in paragraph 2 could best be replaced by ______.",
        a: "B",
        o: [
          "ignore their preferences",
          "fit their needs",
          "oppose their opinions",
          "reduce their choices"
        ],
        r: {
          A: "Sai. Trái nghĩa.",
          B: "Đúng. 'match their interests' gần nghĩa nhất với 'fit their needs/interests'.",
          C: "Sai. Không đúng nghĩa.",
          D: "Sai. Không liên quan."
        }
      },
      {
        id: 33,
        q: "The word 'their' in paragraph 2 refers to ______.",
        a: "D",
        o: [
          "creators'",
          "videos'",
          "everyone's",
          "users'"
        ],
        r: {
          A: "Sai. 'their interests' là của users, không phải creators.",
          B: "Sai. Videos không có 'interests'.",
          C: "Sai. Không phải quy chiếu chung chung cho everyone.",
          D: "Đúng. 'their' chỉ người dùng."
        }
      },
      {
        id: 34,
        q: "According to paragraph 2, which of the following is NOT true about TikTok's algorithm?",
        a: "C",
        o: [
          "It personalizes the feed for each user.",
          "It updates with new videos frequently.",
          "It prohibits hot content from all creators.",
          "It helps users discover content they enjoy."
        ],
        r: {
          A: "Sai. Đúng theo đoạn văn.",
          B: "Sai. Đoạn văn nói feed updates with new videos all the time.",
          C: "Đúng. Đoạn văn không nói thuật toán cấm nội dung nổi bật từ các creators.",
          D: "Sai. Thuật toán hiển thị video phù hợp sở thích người dùng."
        }
      },
      {
        id: 35,
        q: "Which of the following best summarises paragraph 3?",
        a: "B",
        o: [
          "TikTok trends often fail to gain popularity on other platforms.",
          "TikTok trends quickly influence music, fashion, and language.",
          "TikTok challenges are mainly focused on educational content.",
          "TikTok trends are limited to dance and lip-syncing music videos."
        ],
        r: {
          A: "Sai. Đoạn nói các xu hướng lan nhanh và còn ảnh hưởng sang nền tảng khác.",
          B: "Đúng. Bao quát đúng ý chính của đoạn 3.",
          C: "Sai. Đoạn 3 nói về trends and challenges, không tập trung vào giáo dục.",
          D: "Sai. Đoạn nói dance và lip-syncing chỉ là ví dụ."
        }
      },
      {
        id: 36,
        q: "The word 'viral' in paragraph 3 is OPPOSITE in meaning to ______.",
        a: "B",
        o: [
          "infectious",
          "unpopular",
          "famous",
          "catchy"
        ],
        r: {
          A: "Sai. 'infectious' gần sắc thái lan truyền.",
          B: "Đúng. 'viral' trái nghĩa nhất với 'unpopular'.",
          C: "Sai. 'famous' gần nghĩa hơn là trái nghĩa.",
          D: "Sai. 'catchy' không phải đối nghĩa trực tiếp."
        }
      },
      {
        id: 37,
        q: "Which of the following is TRUE according to the passage?",
        a: "B",
        o: [
          "TikTok's algorithm shows the same content to all mobile users.",
          "Many creators use TikTok to share knowledge on various topics.",
          "TikTok trends rarely influence music or fashion outside the app.",
          "Brands avoid using TikTok for marketing due to privacy concerns."
        ],
        r: {
          A: "Sai. Feed is different for everyone.",
          B: "Đúng. Đoạn 4 nêu rõ nhiều creators chia sẻ kiến thức về nhiều chủ đề.",
          C: "Sai. Đoạn 3 nói TikTok ảnh hưởng đến music charts, fashion, and even language.",
          D: "Sai. Đoạn 5 nói many brands and businesses use TikTok for marketing."
        }
      },
      {
        id: 38,
        q: "Which of the following best paraphrases the underlined sentence in paragraph 4?",
        a: "C",
        o: [
          "Many creators use TikTok to share basic entertainment content.",
          "TikTok is mainly a platform for dance and music videos.",
          "Creators on TikTok can also share educational content.",
          "TikTok is used mostly for promotional and advertising purposes."
        ],
        r: {
          A: "Sai. Câu gốc nói về kiến thức và nhiều chủ đề giáo dục.",
          B: "Sai. Quá hẹp và không đúng trọng tâm câu gốc.",
          C: "Đúng. Đây là cách diễn đạt lại sát nhất.",
          D: "Sai. Đây là ý của đoạn marketing, không phải câu được gạch chân."
        }
      },
      {
        id: 39,
        q: "Which of the following can be inferred from the passage?",
        a: "A",
        o: [
          "TikTok's growth continues despite facing criticism and challenges.",
          "TikTok's popularity is declining gradually due to privacy concerns.",
          "TikTok's influence on music and culture is limited to Southeast Asia.",
          "The algorithm of TikTok makes it difficult for trends to spread quickly."
        ],
        r: {
          A: "Đúng. Đoạn cuối nói dù có chỉ trích và thách thức, TikTok vẫn là một trong những app được tải nhiều nhất.",
          B: "Sai. Trái với ý đoạn cuối.",
          C: "Sai. Đoạn văn không giới hạn ảnh hưởng ở Southeast Asia.",
          D: "Sai. Đoạn 3 cho thấy trends spread quickly."
        }
      },
      {
        id: 40,
        q: "Which of the following best summarises the passage?",
        a: "D",
        o: [
          "Although popular among teenagers, TikTok is a platform known mainly for its privacy issues and lack of engaging content.",
          "TikTok's popularity is due entirely to its effective marketing strategies and brand collaborations because its contents are heavily criticised.",
          "Because of the trending content, TikTok is primarily focused on providing educational and beneficial content for its users.",
          "TikTok has become a significant platform for trends, education, and marketing, despite facing some criticism."
        ],
        r: {
          A: "Sai. Tóm tắt lệch trọng tâm và quá tiêu cực.",
          B: "Sai. Bài không nói popularity is due entirely to marketing strategies.",
          C: "Sai. TikTok không chỉ tập trung chủ yếu vào nội dung giáo dục.",
          D: "Đúng. Bao quát được các ý lớn của toàn bài."
        }
      }
    ]
  }
);
