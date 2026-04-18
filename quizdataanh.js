const quizData = {
  subject: "English 12",
  format: "mixed_reading_mcq",
  sections: [
    {
      type: "passage_mcq",
      title: "BASIC DIGITAL LITERACY FOR ADULTS",
      instruction: "Read the following advertisement and choose the best answer for each blank from 1 to 6.",
      passage: `Are you feeling overwhelmed by technology? Our beginner-friendly course (1) ___ to help you gain confidence in using (2) ___. You'll learn essential skills like sending emails, browsing (3) ___, and creating simple documents like resumes and letters.

Our (4) ___ classes are enjoyable and practical, thanks to the latest digital technology, (5) ___ learning more effective. Whether you're a senior citizen looking to connect (6) ___ loved ones or a job seeker aiming to improve your CV, this course is for you. Join us and unlock the potential of technology. Enroll today and take the first step towards a more confident digital future.`,
      questions: [
        {
          id: 1,
          q: "Chọn đáp án đúng cho chỗ trống (1).",
          a: "D",
          o: ["designs", "designed", "designing", "is designed"],
          r: {
            A: "Sai. 'designs' là dạng chủ động, không hợp nghĩa câu.",
            B: "Sai. 'designed' thiếu trợ động từ để tạo bị động.",
            C: "Sai. 'designing' không đúng cấu trúc ở vị trí này.",
            D: "Đúng. Cấu trúc đúng là 'is designed to + V'."
          }
        },
        {
          id: 2,
          q: "Chọn đáp án đúng cho chỗ trống (2).",
          a: "B",
          o: [
            "essential skills digital",
            "essential digital skills",
            "digital essential skills",
            "skills digital essential"
          ],
          r: {
            A: "Sai. Trật tự từ không đúng.",
            B: "Đúng. Cụm đúng là 'essential digital skills'.",
            C: "Sai. Trật tự tính từ không tự nhiên.",
            D: "Sai. Danh từ chính phải đứng cuối."
          }
        },
        {
          id: 3,
          q: "Chọn đáp án đúng cho chỗ trống (3).",
          a: "A",
          o: ["websites", "apps", "podcasts", "forums"],
          r: {
            A: "Đúng. Cụm tự nhiên là 'browse websites'.",
            B: "Sai. Không phù hợp nhất trong ngữ cảnh này.",
            C: "Sai. Thường dùng 'listen to podcasts'.",
            D: "Sai. Không phù hợp bằng 'websites'."
          }
        },
        {
          id: 4,
          q: "Chọn đáp án đúng cho chỗ trống (4).",
          a: "C",
          o: ["interaction", "interaction", "interactive", "interactively"],
          r: {
            A: "Sai. 'interaction' là danh từ.",
            B: "Sai. Trùng đáp án A và vẫn là danh từ.",
            C: "Đúng. 'interactive' là tính từ, phù hợp trong 'interactive classes'.",
            D: "Sai. 'interactively' là trạng từ."
          }
        },
        {
          id: 5,
          q: "Chọn đáp án đúng cho chỗ trống (5).",
          a: "B",
          o: ["makes", "making", "being made", "which make"],
          r: {
            A: "Sai. Sau dấu phẩy ở đây phù hợp với dạng rút gọn V-ing.",
            B: "Đúng. 'making learning more effective' là cụm rút gọn chỉ kết quả.",
            C: "Sai. Dạng bị động không phù hợp.",
            D: "Sai. Sai cấu trúc và chia động từ."
          }
        },
        {
          id: 6,
          q: "Chọn đáp án đúng cho chỗ trống (6).",
          a: "A",
          o: ["with", "to", "over", "of"],
          r: {
            A: "Đúng. Cụm đúng là 'connect with somebody'.",
            B: "Sai. Không phù hợp nhất trong ngữ cảnh này.",
            C: "Sai. Sai giới từ.",
            D: "Sai. Sai giới từ."
          }
        }
      ]
    },
    {
      type: "passage_mcq",
      title: "PROTECT GREETON'S WATER SOURCES!",
      instruction: "Read the following leaflet and choose the best answer for each blank from 7 to 12.",
      passage: `The water in our beautiful town of Greeton has become increasingly polluted, which poses a serious health risk. Therefore, we are going to start a community (7) ___ campaign to educate residents about water conservation. Over 300 people have already (8) ___, but we need more to make a real difference. (9) ___ working together can we protect our water and create a healthier environment for (10) ___. We'll be hosting workshops to teach people how to save water, distributing informative leaflets, and organising community clean-up (11) ___.

We need your help to make a positive impact. Join us and let's work together to safeguard our water for future generations. Remember that every (12) ___ counts!`,
      questions: [
        {
          id: 7,
          q: "Chọn đáp án đúng cho chỗ trống (7).",
          a: "D",
          o: ["custom", "spirit", "warning", "awareness"],
          r: {
            A: "Sai. 'custom' là phong tục.",
            B: "Sai. Không đi tự nhiên với 'campaign'.",
            C: "Sai. Không phù hợp nhất với ngữ cảnh giáo dục cộng đồng.",
            D: "Đúng. 'awareness campaign' là cụm quen thuộc."
          }
        },
        {
          id: 8,
          q: "Chọn đáp án đúng cho chỗ trống (8).",
          a: "B",
          o: ["checked in", "signed up", "caught on", "taken after"],
          r: {
            A: "Sai. 'checked in' thường là làm thủ tục hoặc điểm danh.",
            B: "Đúng. 'signed up' nghĩa là đã đăng ký tham gia.",
            C: "Sai. 'caught on' là hiểu ra hoặc trở nên phổ biến.",
            D: "Sai. 'taken after' là giống ai đó trong gia đình."
          }
        },
        {
          id: 9,
          q: "Chọn đáp án đúng cho chỗ trống (9).",
          a: "A",
          o: ["Only by", "In case of", "In addition to", "As long as"],
          r: {
            A: "Đúng. Cấu trúc đúng là 'Only by + V-ing ... can + S + V'.",
            B: "Sai. Không đúng nghĩa.",
            C: "Sai. Không hợp cấu trúc đảo ngữ ở đây.",
            D: "Sai. Không đúng ý câu."
          }
        },
        {
          id: 10,
          q: "Chọn đáp án đúng cho chỗ trống (10).",
          a: "D",
          o: ["someone", "none", "another", "everyone"],
          r: {
            A: "Sai. Nghĩa quá hẹp.",
            B: "Sai. Không phù hợp ngữ cảnh.",
            C: "Sai. Không hợp nghĩa cộng đồng.",
            D: "Đúng. 'for everyone' là hợp lý nhất."
          }
        },
        {
          id: 11,
          q: "Chọn đáp án đúng cho chỗ trống (11).",
          a: "B",
          o: ["intentions", "events", "brochures", "chances"],
          r: {
            A: "Sai. Không thể 'organise intentions'.",
            B: "Đúng. 'community clean-up events' là cụm đúng.",
            C: "Sai. 'brochures' không hợp với động từ 'organising' trong câu này.",
            D: "Sai. Không phù hợp nghĩa."
          }
        },
        {
          id: 12,
          q: "Chọn đáp án đúng cho chỗ trống (12).",
          a: "C",
          o: ["bit", "piece", "drop", "chunk"],
          r: {
            A: "Sai. Không hợp chủ đề nước bằng.",
            B: "Sai. Không đi tự nhiên với ngữ cảnh này.",
            C: "Đúng. Cụm cố định là 'Every drop counts'.",
            D: "Sai. Không dùng với nước."
          }
        }
      ]
    },
    {
      type: "arrangement_mcq",
      title: "Sentence / Utterance Arrangement",
      instruction: "Mark the letter A, B, C or D on your answer sheet to indicate the best arrangement of utterances or sentences to make a meaningful exchange or text.",
      groups: [
        {
          id: 13,
          prompt: "Câu 13",
          stem: [
            "a. Paula: I see. Maybe you could find a blended course that combines online and in-person lessons.",
            "b. Paula: There's a two-week online course about digital literacy. You should take it, Zack.",
            "c. Zack: That sounds interesting, but I would prefer a course with face-to-face interaction."
          ],
          a: "C",
          o: ["b-a-c", "a-c-b", "b-c-a", "c-b-a"],
          r: {
            A: "Sai. Paula không thể nói 'I see' trước khi Zack phản hồi.",
            B: "Sai. Câu mở đầu không tự nhiên.",
            C: "Đúng. Paula gợi ý khóa học, Zack phản hồi, rồi Paula đề xuất blended course.",
            D: "Sai. Zack không thể phản hồi trước khi Paula nói gì."
          }
        },
        {
          id: 14,
          prompt: "Câu 14",
          stem: [
            "a. Michelle: It can be, Alan, but it's also very rewarding. You get to solve problems and fix things.",
            "b. Michelle: Exactly! Besides, the satisfaction of getting a machine working again is great.",
            "c. Alan: I'm thinking of being a maintenance engineer, but it seems like a really tough job.",
            "d. Alan: I think I'd like the variety. You get to work with different tools and equipment every day.",
            "e. Alan: I guess you're right. It's kind of like being a detective, figuring out what's wrong."
          ],
          a: "B",
          o: ["a-d-b-c-d", "c-a-d-b-e", "c-a-e-d-b", "c-a-e-b-d"],
          r: {
            A: "Sai. Mở đầu bằng a không hợp vì Michelle đang đáp lại Alan.",
            B: "Đúng. Trình tự hợp lý nhất là c-a-d-b-e.",
            C: "Sai. Không tự nhiên bằng phương án B.",
            D: "Sai. Trật tự hội thoại không mượt bằng B."
          }
        },
        {
          id: 15,
          prompt: "Câu 15",
          stem: [
            "Hi Michael,",
            "a. Last month, I decided to stop buying bottled water at school.",
            "b. Plus, the flask keeps my water cold or hot for hours.",
            "c. Since then, I've been using a new refillable flask to carry my water.",
            "d. I hope you're doing well! I wanted to share a new habit with you.",
            "e. It's been great because I feel like I'm doing my part to avoid plastic containers.",
            "Take care,",
            "Josh"
          ],
          a: "A",
          o: ["d-a-c-e-b", "a-b-d-c-e", "c-a-d-e-b", "d-a-b-e-c"],
          r: {
            A: "Đúng. Mở đầu bằng lời chào và mục đích viết thư, rồi nói quyết định, thói quen mới, cảm nhận, cuối cùng thêm lợi ích.",
            B: "Sai. Không mở đầu tự nhiên cho một bức thư.",
            C: "Sai. 'Since then' không thể đứng trước khi chưa có mốc thời gian ở a.",
            D: "Sai. Trật tự ý chưa mượt."
          }
        },
        {
          id: 16,
          prompt: "Câu 16",
          stem: [
            "a. First, build a habit of carrying reusable bags, such as paper or cloth bags that can be used repeatedly.",
            "b. Reducing your carbon footprint when shopping is achievable with the following tips.",
            "c. Second, consider purchasing items with minimal packaging to further reduce waste.",
            "d. By adopting these practices, you can significantly decrease your reliance on plastic bags and contribute to environmental conservation.",
            "e. If you forget them, buy paper or cloth bags from the store as an alternative."
          ],
          a: "C",
          o: ["a-e-c-d-b", "a-e-b-c-d", "b-a-e-c-d", "b-d-e-c-a"],
          r: {
            A: "Sai. Thiếu câu mở đầu giới thiệu chủ đề.",
            B: "Sai. Đặt câu giới thiệu sai vị trí.",
            C: "Đúng. b mở đầu, a là bước thứ nhất, e bổ sung cho a, c là bước thứ hai, d kết luận.",
            D: "Sai. Câu kết luận không thể đứng ngay sau câu mở đầu."
          }
        },
        {
          id: 17,
          prompt: "Câu 17",
          stem: [
            "a. When we buy cheap, trendy clothes, we contribute to a cycle of waste in which clothes are poorly made and end up in landfills after just a few wears.",
            "b. The process of making these clothes also harms the environment, using lots of water and toxic chemicals.",
            "c. By choosing to avoid fast fashion, we can help protect our planet and support more sustainable practices.",
            "d. Today, fast fashion is a major issue for our environment.",
            "e. Additionally, many fast fashion items are made from synthetic materials like polyester, which don't break down easily and release tiny plastic particles into our water."
          ],
          a: "D",
          o: ["a-e-b-d-c", "c-a-e-b-d", "d-a-e-c-b", "d-a-b-e-c"],
          r: {
            A: "Sai. Không mở đầu bằng câu nêu chủ đề chung.",
            B: "Sai. Câu kết luận không thể đứng đầu.",
            C: "Sai. c nên là câu kết thúc, không nên đứng trước b.",
            D: "Đúng. d nêu vấn đề, a và b-e triển khai tác hại, c là kết luận kêu gọi hành động."
          }
        }
      ]
    },
    {
      type: "passage_mcq",
      title: "The transition from high school to college",
      instruction: "Read the following passage about the transition from high school to college and mark the letter A, B, C or D on your answer sheet to indicate the correct option that best fits each of the numbered blanks from 18 to 22.",
      passage: `The transition from high school to college is a significant time in a student's life. (18) _____. During this stage, they must balance the demands of coursework with the exploration of their passions and the development of essential life skills. First, academic expectations in college are higher. It is crucial that students manage their time effectively and take responsibility for their learning. Unlike high school, where teachers often guide students closely, (19) _____.

Second, students' social life changes as well. (20) _____. This diversity can enrich their experiences and help them develop new perspectives. They can become more open-minded and accept more different or even opposite viewpoints. Making new friends and building a social network (21) _____.

Third, living arrangements are different. Many students move away from home and live in dormitories or apartments. This independence offers a sense of freedom but requires learning new skills, such as cooking and budgeting.

Finally, extracurricular activities play a bigger role in college. Joining clubs, sports teams or volunteer groups can help students explore their interests and develop new skills. (22) _____ and help develop a well-rounded personality.

In summary, the transition from high school to college can be more complicated than many people think. By adapting to the transition effectively, students can thrive in their new educational environment.`,
      questions: [
        {
          id: 18,
          q: "Chọn đáp án đúng cho chỗ trống (18).",
          a: "C",
          o: [
            "They are new challenges and opportunities that are demanding and beneficial",
            "Although young people face challenges, they can have beneficial opportunities",
            "It brings new challenges and opportunities that can be both demanding and beneficial",
            "There are always demanding challenges and beneficial opportunities"
          ],
          r: {
            A: "Sai. 'They are' không rõ chủ ngữ tham chiếu.",
            B: "Sai. Câu không nối tự nhiên nhất với ngữ cảnh đoạn văn.",
            C: "Đúng. 'It' thay cho 'The transition' và diễn đạt trôi chảy, đúng ngữ pháp.",
            D: "Sai. Câu quá chung và không gắn chặt với chủ ngữ trước đó."
          }
        },
        {
          id: 19,
          q: "Chọn đáp án đúng cho chỗ trống (19).",
          a: "B",
          o: [
            "college students are still dependent on their teachers",
            "college requires more independent study and self-discipline",
            "it is independent study and self-discipline that are compulsory at high school",
            "what matters the most at high school is independent study and self-discipline"
          ],
          r: {
            A: "Sai. Trái nghĩa với ý so sánh trong câu.",
            B: "Đúng. Hợp nghĩa với 'Unlike high school...' và đúng ngữ pháp.",
            C: "Sai. Nội dung không đúng thực tế so sánh của đoạn.",
            D: "Sai. Không phù hợp với mạch ý."
          }
        },
        {
          id: 20,
          q: "Chọn đáp án đúng cho chỗ trống (20).",
          a: "D",
          o: [
            "College students from diverse backgrounds and cultures where they meet others",
            "Because college students meet people from diverse backgrounds and cultures",
            "Colleges where students meet people from diverse backgrounds and cultures",
            "College students meet people from diverse backgrounds and cultures"
          ],
          r: {
            A: "Sai. Sai cấu trúc ngữ pháp.",
            B: "Sai. Mở đầu bằng 'Because' làm câu thiếu mệnh đề chính phù hợp.",
            C: "Sai. Cấu trúc thiếu tự nhiên.",
            D: "Đúng. Câu hoàn chỉnh và nối nghĩa tốt với câu sau về sự đa dạng."
          }
        },
        {
          id: 21,
          q: "Chọn đáp án đúng cho chỗ trống (21).",
          a: "B",
          incomplete: true,
          o: [
            "significant contributions to college experiences",
            "contribute significantly to college experiences",
            "[Không nhìn rõ trong ảnh]",
            "[Không nhìn rõ trong ảnh]"
          ],
          r: {
            A: "Sai. Cụm danh từ không khớp cấu trúc sau chủ ngữ 'Making new friends and building a social network...'.",
            B: "Đúng. Cần động từ để hoàn thành vị ngữ: '... contribute significantly to college experiences.'",
            C: "Không đủ dữ liệu do ảnh bị cắt.",
            D: "Không đủ dữ liệu do ảnh bị cắt."
          }
        },
        {
          id: 22,
          q: "Chọn đáp án đúng cho chỗ trống (22).",
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



Object.assign(quizData.sections[3].questions[3], {
  incomplete: false,
  o: [
    "significant contributions to college experiences",
    "contribute significantly to college experiences",
    "that contribute significantly to college experiences",
    "whose significant contributions to college experiences"
  ],
  r: {
    A: "Sai. Đây là cụm danh từ, không thể làm vị ngữ hoàn chỉnh sau chủ ngữ 'Making new friends and building a social network'.",
    B: "Đúng. Cần một động từ để hoàn chỉnh câu: '... contribute significantly to college experiences.'",
    C: "Sai. Thiếu cấu trúc phù hợp vì chủ ngữ đã có sẵn, không cần mệnh đề quan hệ ở đây.",
    D: "Sai. Cấu trúc không hoàn chỉnh và không phù hợp ngữ pháp."
  }
});

Object.assign(quizData.sections[3].questions[4], {
  a: "C",
  incomplete: false,
  o: [
    "Leadership and teamwork skills improved by these activities",
    "Improving leadership and teamwork skills with these activities",
    "These activities also provide a break from academic pressures",
    "With these activities improving leadership and teamwork skills"
  ],
  r: {
    A: "Sai. Đây là cụm danh từ, không tạo thành mệnh đề hoàn chỉnh.",
    B: "Sai. Dạng V-ing này không nối mượt với cấu trúc câu đang có.",
    C: "Đúng. Câu hoàn chỉnh, đúng ngữ pháp và hợp nghĩa với đoạn văn về hoạt động ngoại khóa.",
    D: "Sai. Cấu trúc sai và không tự nhiên."
  }
});

quizData.sections.push(
  {
    type: "passage_qa_mcq",
    title: "Differences between college and university",
    instruction: "Read the following passage about the differences between college and university and mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions from 23 to 30.",
    passage: `Choosing between college and university can be a big decision for many high school students in Vietnam. Both offer unique opportunities, but they also have their own characteristics.

Colleges often specialise in specific fields or disciplines, such as technical skills and vocational training, which is aimed at providing practical skills and hands-on training. College programmes, such as diplomas and certificates, are shorter and can be completed in two to three years. This makes colleges a good choice for students who want to enter the workforce quickly. This shorter timeframe allows students to gain valuable practical skills and experience in a relatively short period. Many colleges have strong connections with local businesses that provide students with internships and job placements, so they can help guarantee students' future jobs.

Universities, on the other hand, offer a wider range of programmes, including bachelor's, master's, and doctoral degrees. These programmes usually take longer to complete, often four to four and a half years for a bachelor's degree. Universities are known for their research opportunities and academic resources. Students can participate in various research projects and access extensive libraries and laboratories. Universities also offer a vibrant campus life with many clubs, sports teams and cultural events. This can provide a rich social experience and help students develop a broad network of contacts.

Both colleges and universities have their own advantages. Colleges are ideal for students looking for practical skills and quick entry into the job market. Universities are better suited for those interested in comprehensive academic study and research opportunities. The choice depends on students' career goals and personal preferences. Therefore, it is recommended that students consider what they want to achieve and choose the path that best fits their needs.`,
    questions: [
      {
        id: 23,
        q: "Which of the following is NOT mentioned as a characteristic of college?",
        a: "C",
        o: [
          "shorter timeframe",
          "connections with businesses",
          "extensive laboratories",
          "specific practical skills"
        ],
        r: {
          A: "Sai. Đoạn 2 có nhắc college programmes ngắn hơn, hoàn thành trong 2 đến 3 năm.",
          B: "Sai. Đoạn 2 có nói colleges có strong connections with local businesses.",
          C: "Đúng. 'extensive libraries and laboratories' là đặc điểm của universities, không phải colleges.",
          D: "Sai. Colleges nhấn mạnh practical skills và hands-on training."
        }
      },
      {
        id: 24,
        q: "The word 'they' in paragraph 2 refers to ______.",
        a: "D",
        o: [
          "strong connections",
          "job placements",
          "internships",
          "local businesses"
        ],
        r: {
          A: "Sai. 'connections' không phải chủ thể hợp lý để 'help guarantee students' future jobs'.",
          B: "Sai. 'job placements' là danh từ chỉ sự sắp xếp việc làm, không phù hợp nhất với đại từ này.",
          C: "Sai. 'internships' không phải đối tượng được nhắc đến gần nhất theo nghĩa câu.",
          D: "Đúng. 'they' ở đây quy chiếu đến 'local businesses'."
        }
      },
      {
        id: 25,
        q: "The word 'vibrant' in paragraph 3 is OPPOSITE in meaning to ______.",
        a: "B",
        o: [
          "energetic",
          "tedious",
          "exhausting",
          "spectacular"
        ],
        r: {
          A: "Sai. 'energetic' gần nghĩa với 'vibrant'.",
          B: "Đúng. 'tedious' nghĩa là tẻ nhạt, trái nghĩa với 'vibrant'.",
          C: "Sai. 'exhausting' không phải nghĩa đối lập trực tiếp.",
          D: "Sai. 'spectacular' không trái nghĩa với 'vibrant'."
        }
      },
      {
        id: 26,
        q: "The word 'comprehensive' in paragraph 4 could be best replaced by ______.",
        a: "A",
        o: [
          "complete",
          "appropriate",
          "practical",
          "effective"
        ],
        r: {
          A: "Đúng. 'comprehensive academic study' gần nghĩa nhất với 'complete' hoặc toàn diện.",
          B: "Sai. 'appropriate' là phù hợp, không đúng sắc thái nghĩa.",
          C: "Sai. 'practical' là thực hành, gần với college hơn.",
          D: "Sai. 'effective' là hiệu quả, không phải nghĩa thay thế tốt nhất."
        }
      },
      {
        id: 27,
        q: "Which of the following best paraphrases the underlined sentence in paragraph 4?",
        a: "A",
        o: [
          "Whether to attend a university or a college is a decision based on a student's career path and personal choices.",
          "The choice between university and college should be only determined by students' personal preferences.",
          "Students shouldn't make the final decision on college or university until they understand what they desire.",
          "Only when students find out their future careers can they make the final decision on college or university."
        ],
        r: {
          A: "Đúng. Câu này diễn đạt lại đúng ý: lựa chọn phụ thuộc vào mục tiêu nghề nghiệp và sở thích cá nhân.",
          B: "Sai. Câu gốc không nói 'only' personal preferences mà còn có career goals.",
          C: "Sai. Câu này thêm ý 'không nên quyết định cho đến khi...' không có trong câu gốc.",
          D: "Sai. Câu gốc không nói chỉ khi xác định xong nghề nghiệp tương lai mới quyết định được."
        }
      },
      {
        id: 28,
        q: "Which of the following is TRUE according to the passage?",
        a: "B",
        o: [
          "College students can access more academic resources than university ones.",
          "Generally, colleges offer a quick entry into the workforce.",
          "University programmes are closely connected with lots of local businesses.",
          "University students are provided with more hands-on training than research opportunities."
        ],
        r: {
          A: "Sai. Academic resources như libraries và laboratories được gắn với universities.",
          B: "Đúng. Đoạn văn nói colleges là lựa chọn tốt cho học sinh muốn enter the workforce quickly.",
          C: "Sai. Strong connections with local businesses được nhắc ở colleges, không phải universities.",
          D: "Sai. Universities thiên về research opportunities hơn hands-on training."
        }
      },
      {
        id: 29,
        q: "In which paragraph does the writer mention different qualifications?",
        a: "C",
        o: [
          "Paragraph 1",
          "Paragraph 2",
          "Paragraph 3",
          "Paragraph 4"
        ],
        r: {
          A: "Sai. Đoạn 1 chỉ giới thiệu chung.",
          B: "Sai. Đoạn 2 nói về college programmes ngắn và practical skills.",
          C: "Đúng. Đoạn 3 nhắc bachelor's, master's, and doctoral degrees, tức là các loại bằng cấp khác nhau.",
          D: "Sai. Đoạn 4 là phần so sánh, kết luận và gợi ý cách chọn."
        }
      },
      {
        id: 30,
        q: "In which paragraph does the writer explain how to make a decision?",
        a: "D",
        o: [
          "Paragraph 1",
          "Paragraph 2",
          "Paragraph 3",
          "Paragraph 4"
        ],
        r: {
          A: "Sai. Đoạn 1 chỉ mở bài.",
          B: "Sai. Đoạn 2 tập trung vào colleges.",
          C: "Sai. Đoạn 3 tập trung vào universities.",
          D: "Đúng. Đoạn 4 nói lựa chọn phụ thuộc vào career goals, personal preferences và nên cân nhắc nhu cầu bản thân."
        }
      }
    ]
  },
  {
    type: "passage_qa_mcq",
    title: "The Future of Education",
    instruction: "Read the following passage about the future of education and mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions from 31 to 40.",
    passage: `[I] Education is evolving at a rapid pace, driven by new technologies and changing social needs. [II] In the future, classrooms may look very different from those we know today. [III] Moreover, rather than traditional chalkboards and textbooks, students might use interactive screens and digital textbooks. [IV] Online learning platforms allow students to learn from anywhere, making education more accessible to people across the world. This is especially important for students in remote areas who may not have access to quality schools.

In addition to technological changes, the future of education will likely focus more on personalised learning. Instead of a one-size-fits-all approach, teachers and software programs could tailor lessons to fit each student's needs, abilities, and interests. For example, some students might learn better through videos and interactive tasks, while others prefer reading or hands-on activities. This approach allows each student to progress at their own pace, which can help improve understanding and motivation.

Another trend in future education is the increased focus on skills for the 21st century. Subjects like coding, problem-solving, and teamwork are becoming essential. Schools might emphasise these skills more than memorising facts, preparing students for jobs that don't even exist yet. AI and automation are changing the workforce, and education must adapt to prepare young people for this new reality.

While these changes are promising, challenges remain. Issues such as data privacy, equal access to technology, and the cost of new educational tools need to be addressed to ensure that the benefits of modern education are available to all students.`,
    questions: [
      {
        id: 31,
        q: "Where in paragraph 1 does the following sentence best fit? 'This is expected to reduce the need for students to be physically present in a classroom.'",
        a: "D",
        o: [
          "[I]",
          "[II]",
          "[III]",
          "[IV]"
        ],
        r: {
          A: "Sai. Đặt ở đầu đoạn sẽ thiếu đối tượng mà 'This' quy chiếu.",
          B: "Sai. Vị trí này chưa có ý nào đủ rõ để 'This' thay thế.",
          C: "Sai. Vẫn chưa hợp bằng vị trí sau câu về online learning platforms.",
          D: "Đúng. 'This' hợp lý nhất khi quy chiếu về việc học trực tuyến cho phép học từ bất cứ đâu."
        }
      },
      {
        id: 32,
        q: "The word 'tailor' in paragraph 2 could be best replaced by ______.",
        a: "A",
        o: [
          "adjust",
          "ignore",
          "create",
          "teach"
        ],
        r: {
          A: "Đúng. 'tailor lessons to fit each student's needs' nghĩa là điều chỉnh bài học cho phù hợp.",
          B: "Sai. 'ignore' là bỏ qua, trái nghĩa.",
          C: "Sai. 'create' không sát nghĩa bằng 'adjust'.",
          D: "Sai. 'teach' không thay thế được trong ngữ cảnh này."
        }
      },
      {
        id: 33,
        q: "The word 'This' in paragraph 1 refers to ______.",
        a: "C",
        o: [
          "the use of traditional chalkboards",
          "the importance of access to quality schools",
          "the increased use of online learning platforms",
          "the change in classroom appearance"
        ],
        r: {
          A: "Sai. Câu trước không nói 'This' quy chiếu đến traditional chalkboards.",
          B: "Sai. Đây là ý ở câu sau, không phải thứ được 'This' thay thế.",
          C: "Đúng. 'This' chỉ việc online learning platforms make education more accessible.",
          D: "Sai. Câu về classroom appearance không phải ý gần nhất phù hợp nhất."
        }
      },
      {
        id: 34,
        q: "According to paragraph 1, which of the following is NOT mentioned as the benefits of online learning?",
        a: "C",
        o: [
          "Making education more accessible",
          "Reducing the need for physical classrooms",
          "Replacing teachers in the classroom",
          "Helping students in remote areas"
        ],
        r: {
          A: "Sai. Được nhắc trực tiếp trong đoạn.",
          B: "Sai. Được suy ra từ câu chèn ở Câu 31.",
          C: "Đúng. Đoạn văn không nói online learning sẽ thay thế giáo viên.",
          D: "Sai. Được nhắc rõ qua học sinh ở remote areas."
        }
      },
      {
        id: 35,
        q: "Which of the following best summarises paragraph 2?",
        a: "A",
        o: [
          "Personalised learning helps students go at their own pace.",
          "Teachers use videos and interactive tasks for all students.",
          "Technology will make traditional teaching unnecessary.",
          "Students should choose subjects that interest them."
        ],
        r: {
          A: "Đúng. Đây là ý chính của cả đoạn 2.",
          B: "Sai. Đây chỉ là một ví dụ trong đoạn.",
          C: "Sai. Đoạn không nói traditional teaching sẽ unnecessary.",
          D: "Sai. Đoạn nói về cá nhân hoá việc học, không phải chọn môn học."
        }
      },
      {
        id: 36,
        q: "The word 'essential' in paragraph 3 is OPPOSITE in meaning to ______.",
        a: "C",
        o: [
          "necessary",
          "helpful",
          "optional",
          "difficult"
        ],
        r: {
          A: "Sai. 'necessary' gần nghĩa với 'essential'.",
          B: "Sai. 'helpful' không phải nghĩa đối lập trực tiếp.",
          C: "Đúng. 'optional' là không bắt buộc, trái nghĩa với 'essential'.",
          D: "Sai. 'difficult' không phải đối nghĩa."
        }
      },
      {
        id: 37,
        q: "Which of the following is TRUE according to the passage?",
        a: "C",
        o: [
          "Online learning is predominantly useful for students in cities.",
          "Memorising facts is the main focus of future education.",
          "Education will focus more on skills like coding and teamwork.",
          "The future of education will not use digital tools."
        ],
        r: {
          A: "Sai. Đoạn nhấn mạnh lợi ích cho students in remote areas.",
          B: "Sai. Đoạn nói schools might emphasise these skills more than memorising facts.",
          C: "Đúng. Đây là ý chính của đoạn 3.",
          D: "Sai. Đoạn 1 nói rõ về interactive screens, digital textbooks và online learning."
        }
      },
      {
        id: 38,
        q: "Which of the following best paraphrases the underlined sentence in paragraph 3?",
        a: "B",
        o: [
          "Schools should focus only on new skills for existing jobs.",
          "Future education will prioritise practical skills over rote learning.",
          "Students must memorise facts before learning new skills.",
          "Teachers will stop teaching traditional subjects entirely."
        ],
        r: {
          A: "Sai. Câu gốc nói 'jobs that don't even exist yet', không phải existing jobs.",
          B: "Đúng. Câu này diễn đạt lại ý nhấn mạnh kỹ năng hơn học thuộc lòng.",
          C: "Sai. Trái ngược với ý câu gốc.",
          D: "Sai. Đoạn không nói sẽ bỏ hoàn toàn các môn truyền thống."
        }
      },
      {
        id: 39,
        q: "Which of the following can be inferred from the passage?",
        a: "B",
        o: [
          "Personalised learning requires more teachers per student.",
          "Not all students have access to new educational technology.",
          "Students prefer learning online rather than in traditional schools.",
          "AI is not expected to impact the job market significantly."
        ],
        r: {
          A: "Sai. Đoạn không nêu suy luận này.",
          B: "Đúng. Đoạn cuối nhắc đến equal access to technology như một thách thức, suy ra không phải ai cũng có quyền tiếp cận.",
          C: "Sai. Đoạn không nói học sinh thích online hơn.",
          D: "Sai. Đoạn 3 nói AI and automation are changing the workforce."
        }
      },
      {
        id: 40,
        q: "Which of the following best summarises the passage?",
        a: "A",
        o: [
          "The future of education will be more dependent on digital tools and personalised learning.",
          "Education systems will experience changes thanks to technology, helping more disadvantaged students.",
          "Students in remote areas are going to struggle to adapt to new learning methods.",
          "In the future, memorising facts is still the most important part of education."
        ],
        r: {
          A: "Đúng. Bao quát được toàn bộ bài: công nghệ, cá nhân hoá, kỹ năng mới và thách thức.",
          B: "Sai. Chỉ bao quát một phần, thiếu ý về personalised learning và 21st-century skills.",
          C: "Sai. Đây không phải ý chính của cả bài.",
          D: "Sai. Trái với nội dung đoạn 3."
        }
      }
    ]
  }
);
