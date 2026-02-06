/* ============================================
   BizHan i18n — Internationalization System
   Supports: Vietnamese (vi) & English (en)
   ============================================ */

const i18n = {
    currentLang: 'vi',

    translations: {
        // ==========================================
        // VIETNAMESE
        // ==========================================
        vi: {
            // --- Navbar ---
            'nav.home': 'Trang chủ',
            'nav.about': 'Về chúng tôi',
            'nav.features': 'Tính năng',
            'nav.mission': 'Sứ mệnh',
            'nav.faq': 'FAQ',
            'nav.cta': '🧧 Nhận Lì Xì 8386',

            // --- Hero ---
            'hero.badge': 'LadiPage V1.0 — Exclusive Waitlist',
            'hero.title1': 'Học Tiếng Trung',
            'hero.title2': 'Thông Minh Với AI',
            'hero.subtitle': 'BizHan — Nền tảng học tiếng Trung ứng dụng <strong>AI OCR</strong> dịch ảnh tức thì &amp; <strong>AI Grammar</strong> phân tích ngữ pháp chuyên sâu. Chinh phục HSK nhanh gấp 3 lần.',
            'hero.cta1': '🧧 Nhận Lì Xì 8386 — Giảm 60% Trọn Đời',
            'hero.cta2': 'Khám phá tính năng →',
            'hero.scroll': 'Cuộn xuống',

            // --- About ---
            'about.tag': 'Về BizHan',
            'about.title': 'Tin Vào Sức Mạnh Của <span class="text-gradient">Ngôn Ngữ</span>',
            'about.lead': 'Mỗi chúng ta đều có thế giới riêng — nơi tiếng Trung không chỉ là một ngôn ngữ, mà là cánh cửa kết nối với hơn <strong>1.4 tỷ người</strong> và nền văn hóa hàng ngàn năm.',
            'about.p1': 'Với đội ngũ sáng lập BizHan, niềm đam mê này bắt đầu từ những ngày đầu tiên học những nét chữ Hán đầu tiên — từ 一 (yī) đến 龍 (lóng). Chúng tôi hiểu rằng học tiếng Trung không chỉ là ghi nhớ từ vựng, mà là <em>khám phá cả một vũ trụ văn hóa</em> ẩn sau mỗi ký tự.',
            'about.p2': 'Từ tình yêu đó, cùng khát vọng xây dựng một không gian học tập <strong>thông minh, chất lượng cao và thân thiện</strong>, BizHan ra đời. Đây là kết quả của hành trình nghiên cứu, cải tiến và lắng nghe cộng đồng — với mong muốn tạo ra một nền tảng dành riêng cho người yêu tiếng Trung.',
            'about.card_footer': '学中文 — Học tiếng Trung',

            // --- Features ---
            'features.tag': 'Tính Năng Cốt Lõi',
            'features.title': 'Tại Sao Chọn <span class="text-gradient">BizHan?</span>',
            'features.desc': 'Giữa hàng trăm ứng dụng học tiếng Trung, người học vẫn gặp nhiều bất tiện: bài học nhàm chán, không có AI hỗ trợ, và thiếu tính tương tác. BizHan ra đời để thay đổi điều đó.',

            'features.ocr.title': '🔍 AI OCR — Dịch Ảnh Tức Thì',
            'features.ocr.desc': 'Chụp ảnh bất kỳ văn bản tiếng Trung nào — biển hiệu, sách, menu, tin nhắn — AI OCR của BizHan sẽ <strong>nhận diện ký tự, dịch nghĩa, phiên âm Pinyin và phân tích ngữ pháp</strong> trong tích tắc. Không cần gõ từng chữ, chỉ cần chụp!',
            'features.ocr.f1': '✅ Nhận diện chữ Hán từ ảnh chụp với độ chính xác 99%',
            'features.ocr.f2': '✅ Dịch nghĩa + Pinyin tức thì',
            'features.ocr.f3': '✅ Phân tích cấu trúc câu tự động',
            'features.ocr.f4': '✅ Lưu từ vựng vào sổ tay thông minh',
            'features.ocr.demo': 'Xin chào thế giới',

            'features.grammar.title': '📝 AI Grammar — Phân Tích Ngữ Pháp',
            'features.grammar.desc': 'Nhập bất kỳ câu tiếng Trung nào, AI Grammar sẽ <strong>phân tích cấu trúc ngữ pháp, giải thích từng thành phần câu, và gợi ý cách dùng đúng</strong>. Như có một gia sư tiếng Trung riêng 24/7!',
            'features.grammar.f1': '✅ Phân tích chủ ngữ - vị ngữ - tân ngữ tự động',
            'features.grammar.f2': '✅ Giải thích ngữ pháp HSK 1-6',
            'features.grammar.f3': '✅ So sánh cấu trúc tương tự',
            'features.grammar.f4': '✅ Bài tập ngữ pháp cá nhân hóa bằng AI',
            'features.grammar.subject': 'Chủ ngữ',
            'features.grammar.adverb': 'Trạng từ',
            'features.grammar.verb': 'Động từ',
            'features.grammar.object': 'Tân ngữ',
            'features.grammar.translation': '🇻🇳 Tôi đang học tiếng Trung',

            'features.vocab.title': 'Từ Vựng Thông Minh',
            'features.vocab.desc': 'Hệ thống Spaced Repetition cá nhân hóa, giúp ghi nhớ 5000+ từ vựng HSK hiệu quả gấp 3 lần.',
            'features.hsk.title': 'Luyện HSK',
            'features.hsk.desc': 'Đề thi mô phỏng HSK 1-6 với AI chấm điểm tức thì và phân tích điểm yếu cần cải thiện.',
            'features.pronun.title': 'Luyện Phát Âm',
            'features.pronun.desc': 'AI nhận diện giọng nói và chấm điểm Pinyin, thanh điệu với độ chính xác đến từng âm tiết.',
            'features.writing.title': 'Tập Viết Chữ Hán',
            'features.writing.desc': 'Hướng dẫn nét bút từng bước với animation, nhận diện chữ viết tay và chấm điểm tự động.',

            // --- Waitlist ---
            'waitlist.badge': 'Exclusive Waitlist — Chỉ 8386 Suất',
            'waitlist.title': 'Nhận Lì Xì <span class="text-lucky">8386</span><br>Giảm <span class="text-discount">60%</span> Trọn Đời',
            'waitlist.desc': 'Đăng ký Waitlist ngay hôm nay để nhận mã <strong>"Lucky Lixi 8386"</strong> — giảm <strong>60% phí trọn đời</strong> khi BizHan chính thức ra mắt. Con số 8386 (发三发六) mang ý nghĩa phát tài, thịnh vượng!',
            'waitlist.urgency': '🧧 Đã có <span class="urgency-count" id="urgencyCount">6,248</span> / 8,386 người đăng ký',
            'waitlist.b1': '🧧 Mã giảm 60% Lifetime',
            'waitlist.b2': '🎯 Truy cập sớm AI OCR & Grammar',
            'waitlist.b3': '📚 Tài liệu HSK miễn phí',
            'waitlist.b4': '👥 Vào nhóm VIP Community',

            // --- Form ---
            'form.title': '🧧 Đăng Ký Nhận Lì Xì 8386',
            'form.name_label': 'Họ và tên',
            'form.name_placeholder': 'Nguyễn Văn A',
            'form.phone_label': 'Số điện thoại',
            'form.phone_placeholder': '0901 234 567',
            'form.level_label': 'Trình độ tiếng Trung',
            'form.level_default': '-- Chọn trình độ --',
            'form.level_beginner': 'Mới bắt đầu',
            'form.submit': '🧧 Nhận Lì Xì 8386 Ngay!',
            'form.note': '🔒 Thông tin của bạn được bảo mật tuyệt đối. Không spam.',
            'form.success_title': 'Chúc Mừng!',
            'form.success_desc': 'Bạn đã đăng ký thành công Waitlist BizHan!',
            'form.success_code': 'Mã Lì Xì của bạn:',
            'form.success_note': 'Kiểm tra email để nhận thông tin chi tiết 🧧',

            // --- Mission ---
            'mission.tag': 'Sứ Mệnh',
            'mission.title': 'Sứ Mệnh Của <span class="text-gradient">BizHan</span>',
            'mission.desc': 'BizHan ra đời với sứ mệnh kết nối cộng đồng yêu tiếng Trung với kho tàng ngôn ngữ phong phú và đầy cảm hứng. Trong thời đại công nghệ, chúng tôi tin rằng học tiếng Trung không chỉ là kỹ năng, mà còn là cách nuôi dưỡng tư duy và sáng tạo.',
            'mission.card1.title': 'Trải Nghiệm Học Hoàn Hảo',
            'mission.card1.desc': 'Cung cấp nền tảng học tập mượt mà, tốc độ cao, tương thích mọi thiết bị — để người học có thể chinh phục tiếng Trung mọi lúc, mọi nơi.',
            'mission.card2.title': 'Lan Tỏa Giá Trị Ngôn Ngữ',
            'mission.card2.desc': 'Mỗi ký tự Hán là một câu chuyện, mỗi thành ngữ là một bài học cuộc sống. BizHan mang những giá trị đó đến gần hơn với người học.',
            'mission.card3.title': 'Xây Dựng Cộng Đồng',
            'mission.card3.desc': 'BizHan không chỉ là một ứng dụng, mà là cộng đồng kết nối — nơi người học có thể trao đổi, thảo luận và cùng nhau tiến bộ.',
            'mission.quote': '"千里之行，始于足下" — Hành trình vạn dặm bắt đầu từ một bước chân.<br><small>— Lão Tử (老子)</small>',

            // --- FAQ ---
            'faq.title': 'Câu Hỏi <span class="text-gradient">Thường Gặp</span>',
            'faq.q1': '❓ BizHan là gì?',
            'faq.a1': 'BizHan là nền tảng học tiếng Trung thông minh sử dụng AI, với hai tính năng cốt lõi: <strong>AI OCR</strong> (dịch ảnh tức thì) và <strong>AI Grammar</strong> (phân tích ngữ pháp). Nền tảng hỗ trợ người học từ HSK 1 đến HSK 6.',
            'faq.q2': '❓ "Lucky Lixi 8386" là gì?',
            'faq.a2': 'Lucky Lixi 8386 là chương trình ưu đãi dành cho <strong>8,386 người đăng ký Waitlist đầu tiên</strong>. Con số 8386 (发三发六) mang ý nghĩa may mắn, phát tài. Bạn sẽ nhận được mã giảm giá <strong>60% trọn đời</strong> khi BizHan chính thức ra mắt!',
            'faq.q3': '❓ AI OCR hoạt động như thế nào?',
            'faq.a3': 'Bạn chỉ cần <strong>chụp ảnh</strong> bất kỳ văn bản tiếng Trung nào — biển hiệu, sách, menu, tin nhắn. AI OCR sẽ nhận diện ký tự với độ chính xác 99%, dịch nghĩa sang tiếng Việt, thêm phiên âm Pinyin, và phân tích cấu trúc ngữ pháp tự động.',
            'faq.q4': '❓ BizHan có miễn phí không?',
            'faq.a4': 'BizHan sẽ có gói <strong>Free</strong> với các tính năng cơ bản và gói <strong>Premium</strong> với đầy đủ tính năng AI. Đăng ký Waitlist ngay để nhận <strong>60% giảm giá trọn đời</strong> cho gói Premium!',
            'faq.q5': '❓ Khi nào BizHan ra mắt chính thức?',
            'faq.a5': 'BizHan dự kiến ra mắt phiên bản Beta vào <strong>Q3 2026</strong>. Người đăng ký Waitlist sẽ được <strong>truy cập sớm (Early Access)</strong> trước khi ra mắt công khai.',
            'faq.q6': '❓ Tôi có thể học offline không?',
            'faq.a6': 'Có! BizHan sẽ hỗ trợ <strong>tải bài học offline</strong> để bạn có thể học mọi lúc, mọi nơi. Tính năng AI OCR và AI Grammar yêu cầu kết nối internet để hoạt động.',

            // --- CTA ---
            'cta.title': 'Sẵn Sàng Chinh Phục Tiếng Trung?',
            'cta.desc': 'Đừng bỏ lỡ cơ hội nhận Lì Xì 8386 — Giảm 60% Trọn Đời. Chỉ còn giới hạn suất!',
            'cta.btn': '🧧 Đăng Ký Waitlist Ngay',

            // --- Footer ---
            'footer.desc': 'BizHan là nền tảng học tiếng Trung thông minh với AI, giúp người Việt chinh phục tiếng Trung nhanh hơn, hiệu quả hơn. Với AI OCR và AI Grammar, việc học trở nên dễ dàng và thú vị hơn bao giờ hết.',
            'footer.col1_title': 'Về BizHan',
            'footer.col1_link1': 'Giới thiệu',
            'footer.col1_link2': 'Tính năng',
            'footer.col1_link3': 'Sứ mệnh',
            'footer.col2_title': 'Theo Dõi',
            'footer.col3_title': 'Hỗ Trợ',
            'footer.col3_link1': 'Điều khoản sử dụng',
            'footer.col3_link2': 'Chính sách bảo mật',
            'footer.col3_link3': 'Liên hệ',

            // --- Meta ---
            '_meta.title': 'BizHan — Nền Tảng Học Tiếng Trung Thông Minh Với AI',
            '_meta.description': 'BizHan - Học tiếng Trung thông minh với AI OCR, AI Grammar. Tham gia Waitlist nhận Lì Xì 8386 - Giảm 60% Trọn Đời!',
        },

        // ==========================================
        // ENGLISH
        // ==========================================
        en: {
            // --- Navbar ---
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.features': 'Features',
            'nav.mission': 'Mission',
            'nav.faq': 'FAQ',
            'nav.cta': '🧧 Get Lucky Lixi 8386',

            // --- Hero ---
            'hero.badge': 'LadiPage V1.0 — Exclusive Waitlist',
            'hero.title1': 'Learn Chinese',
            'hero.title2': 'Smarter With AI',
            'hero.subtitle': 'BizHan — The AI-powered Chinese learning platform with <strong>AI OCR</strong> instant image translation &amp; <strong>AI Grammar</strong> deep analysis. Master HSK 3× faster.',
            'hero.cta1': '🧧 Get Lucky Lixi 8386 — 60% Lifetime Off',
            'hero.cta2': 'Explore features →',
            'hero.scroll': 'Scroll down',

            // --- About ---
            'about.tag': 'About BizHan',
            'about.title': 'Believe In The Power Of <span class="text-gradient">Language</span>',
            'about.lead': 'Each of us has our own world — where Chinese is not just a language, but a gateway connecting us to over <strong>1.4 billion people</strong> and a culture spanning thousands of years.',
            'about.p1': 'For the BizHan founding team, this passion began from the very first days of learning the first Chinese strokes — from 一 (yī) to 龍 (lóng). We understand that learning Chinese is not just about memorizing vocabulary, but <em>discovering an entire cultural universe</em> hidden behind each character.',
            'about.p2': 'From that love, combined with the aspiration to build a <strong>smart, high-quality, and friendly</strong> learning space, BizHan was born. It is the result of a journey of research, refinement, and community listening — with the desire to create a platform dedicated to Chinese language enthusiasts.',
            'about.card_footer': '学中文 — Learn Chinese',

            // --- Features ---
            'features.tag': 'Core Features',
            'features.title': 'Why Choose <span class="text-gradient">BizHan?</span>',
            'features.desc': 'Among hundreds of Chinese learning apps, learners still face many inconveniences: boring lessons, no AI support, and lack of interactivity. BizHan was created to change that.',

            'features.ocr.title': '🔍 AI OCR — Instant Image Translation',
            'features.ocr.desc': 'Snap a photo of any Chinese text — signs, books, menus, messages — BizHan\'s AI OCR will <strong>recognize characters, translate, add Pinyin, and analyze grammar</strong> in seconds. No typing needed, just snap!',
            'features.ocr.f1': '✅ Recognize Chinese characters from photos with 99% accuracy',
            'features.ocr.f2': '✅ Instant translation + Pinyin',
            'features.ocr.f3': '✅ Automatic sentence structure analysis',
            'features.ocr.f4': '✅ Save vocabulary to smart notebook',
            'features.ocr.demo': 'Hello World',

            'features.grammar.title': '📝 AI Grammar — Grammar Analysis',
            'features.grammar.desc': 'Enter any Chinese sentence, AI Grammar will <strong>analyze grammar structure, explain each component, and suggest correct usage</strong>. Like having a personal Chinese tutor 24/7!',
            'features.grammar.f1': '✅ Auto subject-predicate-object analysis',
            'features.grammar.f2': '✅ HSK 1-6 grammar explanations',
            'features.grammar.f3': '✅ Compare similar structures',
            'features.grammar.f4': '✅ AI-personalized grammar exercises',
            'features.grammar.subject': 'Subject',
            'features.grammar.adverb': 'Adverb',
            'features.grammar.verb': 'Verb',
            'features.grammar.object': 'Object',
            'features.grammar.translation': '🇬🇧 I am studying Chinese',

            'features.vocab.title': 'Smart Vocabulary',
            'features.vocab.desc': 'Personalized Spaced Repetition system, helping memorize 5000+ HSK words 3× more effectively.',
            'features.hsk.title': 'HSK Practice',
            'features.hsk.desc': 'Simulated HSK 1-6 exams with instant AI scoring and weakness analysis for improvement.',
            'features.pronun.title': 'Pronunciation Training',
            'features.pronun.desc': 'AI voice recognition scoring Pinyin and tones with syllable-level precision.',
            'features.writing.title': 'Hanzi Writing Practice',
            'features.writing.desc': 'Step-by-step stroke guidance with animation, handwriting recognition and auto-scoring.',

            // --- Waitlist ---
            'waitlist.badge': 'Exclusive Waitlist — Only 8386 Slots',
            'waitlist.title': 'Get Lucky Lixi <span class="text-lucky">8386</span><br><span class="text-discount">60%</span> Lifetime Discount',
            'waitlist.desc': 'Join the Waitlist today to receive the <strong>"Lucky Lixi 8386"</strong> code — <strong>60% lifetime discount</strong> when BizHan officially launches. The number 8386 (发三发六) symbolizes prosperity and fortune!',
            'waitlist.urgency': '🧧 Already <span class="urgency-count" id="urgencyCount">6,248</span> / 8,386 signed up',
            'waitlist.b1': '🧧 60% Lifetime Discount Code',
            'waitlist.b2': '🎯 Early Access to AI OCR & Grammar',
            'waitlist.b3': '📚 Free HSK Study Materials',
            'waitlist.b4': '👥 Join VIP Community Group',

            // --- Form ---
            'form.title': '🧧 Sign Up for Lucky Lixi 8386',
            'form.name_label': 'Full Name',
            'form.name_placeholder': 'John Doe',
            'form.phone_label': 'Phone Number',
            'form.phone_placeholder': '+1 (555) 000-0000',
            'form.level_label': 'Chinese Proficiency Level',
            'form.level_default': '-- Select level --',
            'form.level_beginner': 'Beginner',
            'form.submit': '🧧 Get Lucky Lixi 8386 Now!',
            'form.note': '🔒 Your information is absolutely secure. No spam.',
            'form.success_title': 'Congratulations!',
            'form.success_desc': 'You have successfully joined the BizHan Waitlist!',
            'form.success_code': 'Your Lucky Lixi Code:',
            'form.success_note': 'Check your email for details 🧧',

            // --- Mission ---
            'mission.tag': 'Mission',
            'mission.title': 'The Mission Of <span class="text-gradient">BizHan</span>',
            'mission.desc': 'BizHan was born with the mission of connecting the Chinese-loving community with a rich and inspiring language treasure. In the age of technology, we believe that learning Chinese is not just a skill, but also a way to nurture thinking and creativity.',
            'mission.card1.title': 'Perfect Learning Experience',
            'mission.card1.desc': 'Providing a smooth, fast, cross-device learning platform — so learners can conquer Chinese anytime, anywhere.',
            'mission.card2.title': 'Spreading Language Values',
            'mission.card2.desc': 'Every Chinese character tells a story, every idiom is a life lesson. BizHan brings these values closer to learners.',
            'mission.card3.title': 'Building Community',
            'mission.card3.desc': 'BizHan is not just an app, but a connected community — where learners can exchange, discuss, and grow together.',
            'mission.quote': '"千里之行，始于足下" — A journey of a thousand miles begins with a single step.<br><small>— Lao Tzu (老子)</small>',

            // --- FAQ ---
            'faq.title': 'Frequently Asked <span class="text-gradient">Questions</span>',
            'faq.q1': '❓ What is BizHan?',
            'faq.a1': 'BizHan is an AI-powered smart Chinese learning platform with two core features: <strong>AI OCR</strong> (instant image translation) and <strong>AI Grammar</strong> (grammar analysis). The platform supports learners from HSK 1 to HSK 6.',
            'faq.q2': '❓ What is "Lucky Lixi 8386"?',
            'faq.a2': 'Lucky Lixi 8386 is a special offer for the <strong>first 8,386 Waitlist registrants</strong>. The number 8386 (发三发六) symbolizes luck and prosperity. You will receive a <strong>60% lifetime discount</strong> code when BizHan officially launches!',
            'faq.q3': '❓ How does AI OCR work?',
            'faq.a3': 'Simply <strong>take a photo</strong> of any Chinese text — signs, books, menus, messages. AI OCR will recognize characters with 99% accuracy, translate to your language, add Pinyin pronunciation, and auto-analyze grammar structure.',
            'faq.q4': '❓ Is BizHan free?',
            'faq.a4': 'BizHan will have a <strong>Free</strong> plan with basic features and a <strong>Premium</strong> plan with full AI features. Sign up for the Waitlist now to get a <strong>60% lifetime discount</strong> on Premium!',
            'faq.q5': '❓ When will BizHan officially launch?',
            'faq.a5': 'BizHan is expected to launch its Beta version in <strong>Q3 2026</strong>. Waitlist members will get <strong>Early Access</strong> before the public launch.',
            'faq.q6': '❓ Can I study offline?',
            'faq.a6': 'Yes! BizHan will support <strong>offline lesson downloads</strong> so you can study anytime, anywhere. AI OCR and AI Grammar features require an internet connection to work.',

            // --- CTA ---
            'cta.title': 'Ready to Master Chinese?',
            'cta.desc': 'Don\'t miss the chance to get Lucky Lixi 8386 — 60% Lifetime Discount. Limited slots remaining!',
            'cta.btn': '🧧 Join Waitlist Now',

            // --- Footer ---
            'footer.desc': 'BizHan is an AI-powered smart Chinese learning platform, helping learners master Chinese faster and more effectively. With AI OCR and AI Grammar, learning becomes easier and more enjoyable than ever.',
            'footer.col1_title': 'About BizHan',
            'footer.col1_link1': 'Introduction',
            'footer.col1_link2': 'Features',
            'footer.col1_link3': 'Mission',
            'footer.col2_title': 'Follow Us',
            'footer.col3_title': 'Support',
            'footer.col3_link1': 'Terms of Service',
            'footer.col3_link2': 'Privacy Policy',
            'footer.col3_link3': 'Contact',

            // --- Meta ---
            '_meta.title': 'BizHan — AI-Powered Smart Chinese Learning Platform',
            '_meta.description': 'BizHan - Learn Chinese smarter with AI OCR, AI Grammar. Join the Waitlist and get Lucky Lixi 8386 - 60% Lifetime Discount!',
        }
    },

    /**
     * Initialize the i18n system
     */
    init() {
        // Load saved language from localStorage
        const savedLang = localStorage.getItem('bizhan_lang');
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        }

        // Set up language switcher
        const switcher = document.getElementById('langSwitcher');
        if (switcher) {
            switcher.addEventListener('click', () => this.toggle());
        }

        // Apply current language
        this.apply();
    },

    /**
     * Toggle between vi and en
     */
    toggle() {
        this.currentLang = this.currentLang === 'vi' ? 'en' : 'vi';
        localStorage.setItem('bizhan_lang', this.currentLang);
        this.apply();
    },

    /**
     * Set a specific language
     */
    setLang(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('bizhan_lang', lang);
            this.apply();
        }
    },

    /**
     * Get translation by key
     */
    t(key) {
        return this.translations[this.currentLang]?.[key] || this.translations['vi']?.[key] || key;
    },

    /**
     * Apply all translations to the DOM
     */
    apply() {
        const lang = this.currentLang;
        const dict = this.translations[lang];
        if (!dict) return;

        // Update <html lang>
        document.documentElement.lang = lang;

        // Update page title & meta
        if (dict['_meta.title']) {
            document.title = dict['_meta.title'];
        }
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && dict['_meta.description']) {
            metaDesc.setAttribute('content', dict['_meta.description']);
        }

        // Update all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        // Update all data-i18n-placeholder elements
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) {
                el.placeholder = dict[key];
            }
        });

        // Update hanzi character meanings
        document.querySelectorAll('.hanzi-char').forEach(el => {
            const meaningKey = lang === 'vi' ? 'data-meaning-vi' : 'data-meaning-en';
            const meaning = el.getAttribute(meaningKey) || el.getAttribute('data-meaning');
            if (meaning) {
                el.setAttribute('data-meaning', meaning);
            }
        });

        // Update language switcher button
        const langFlag = document.getElementById('langFlag');
        const langLabel = document.getElementById('langLabel');
        if (langFlag && langLabel) {
            if (lang === 'vi') {
                langFlag.textContent = '🇻🇳';
                langLabel.textContent = 'VI';
            } else {
                langFlag.textContent = '🇬🇧';
                langLabel.textContent = 'EN';
            }
        }

        // Add smooth transition class
        document.body.classList.add('lang-switching');
        setTimeout(() => {
            document.body.classList.remove('lang-switching');
        }, 300);
    }
};

// Auto-init when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});
