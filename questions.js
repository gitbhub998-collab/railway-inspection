const quizData = [
    {
        question: 'What is a "train roll by inspection"?',
        arabicQuestion: "ما المقصود بفحص القطار أثناء مروره؟",
        options: { A: "A process where a moving train is visually inspected to identify defects", B: "A process of repairing train engines", C: "A process of loading cargo onto trains", D: "A process of cleaning train windows" },
        arabicOptions: { A: "فحص بصري لقطار متحرك لاكتشاف العيوب", B: "عملية إصلاح محركات القطارات", C: "عملية تحميل البضائع على القطارات", D: "عملية تنظيف نوافذ القطارات" },
        correctAnswer: "A",
        hint: "The train is inspected while it passes by.",
        arabicHint: "يتم الفحص أثناء مرور القطار."
    },
    {
        question: "Rail inspection is the practice of examining rail tracks for:",
        arabicQuestion: "يهدف فحص السكك الحديدية إلى البحث عن:",
        options: { A: "Paint quality", B: "Flaws that could lead to catastrophic failures", C: "Ballast color", D: "Passenger comfort" },
        arabicOptions: { A: "جودة الطلاء", B: "عيوب قد تؤدي إلى إخفاقات كارثية", C: "لون حصى السكة", D: "راحة الركاب" },
        correctAnswer: "B",
        hint: "Consider the safety risk that rail inspection is meant to prevent.",
        arabicHint: "فكر في مخاطر السلامة التي يهدف فحص السكة إلى منعها."
    },
    {
        question: "Which of the following is a defect due to contact stresses or rolling contact fatigue (RCF)?",
        arabicQuestion: "أي مما يلي يُعد عيباً ناتجاً عن إجهادات التلامس أو إجهاد التلامس المتدحرج (RCF)؟",
        options: { A: "Corrosion", B: "Squats", C: "Inclusions", D: "Seams" },
        arabicOptions: { A: "التآكل", B: "التقعرات (Squats)", C: "الشوائب", D: "اللحامات الطولية" },
        correctAnswer: "B",
        hint: "This defect develops on the rail surface under repeated wheel contact.",
        arabicHint: "يتطور هذا العيب على سطح السكة بسبب تكرار تلامس العجلات."
    },
    {
        question: "Which part of the rail contains the majority of flaws?",
        arabicQuestion: "أي جزء من السكة يحتوي على معظم العيوب؟",
        options: { A: "Web", B: "Foot", C: "Head", D: "Bolt holes" },
        arabicOptions: { A: "جسم السكة", B: "قاعدة السكة", C: "رأس السكة", D: "ثقوب البراغي" },
        correctAnswer: "C",
        hint: "This is the part that directly contacts the train wheels.",
        arabicHint: "هذا هو الجزء الذي يلامس عجلات القطار مباشرة."
    },
    {
        question: "Which NDT method is the most popular for detecting flaws in rails?",
        arabicQuestion: "ما أكثر طرق الاختبار غير الإتلافي استخداماً لاكتشاف عيوب السكك؟",
        options: { A: "Radiography", B: "Ultrasound", C: "Liquid Penetrant Inspection", D: "Eddy current inspection" },
        arabicOptions: { A: "الفحص بالأشعة", B: "الفحص بالموجات فوق الصوتية", C: "الفحص بالسوائل المتغلغلة", D: "فحص التيارات الدوامية" },
        correctAnswer: "B",
        hint: "This method sends sound waves through the rail.",
        arabicHint: "ترسل هذه الطريقة موجات صوتية داخل السكة."
    },
    {
        question: "Which method is used for manual inspection of joint bars and rail ends?",
        arabicQuestion: "ما الطريقة المستخدمة للفحص اليدوي لوصلات القضبان ونهايات السكك؟",
        options: { A: "Magnetic Particle Inspection (MPI)", B: "Liquid Penetrant Inspection (LPI)", C: "EMAT", D: "Radiography" },
        arabicOptions: { A: "الفحص بالجسيمات المغناطيسية (MPI)", B: "الفحص بالسوائل المتغلغلة (LPI)", C: "محول صوتي كهرومغناطيسي (EMAT)", D: "الفحص بالأشعة" },
        correctAnswer: "A",
        hint: "A visible dye helps reveal surface-breaking cracks.",
        arabicHint: "تساعد الصبغة المرئية على كشف الشقوق المفتوحة على السطح."
    },
    {
        question: "Which method is great for surface flaws and near-surface flaws?",
        arabicQuestion: "ما الطريقة المناسبة لاكتشاف العيوب السطحية والقريبة من السطح؟",
        options: { A: "Ultrasound", B: "Eddy current inspection", C: "Radiography", D: "Magnetic induction" },
        arabicOptions: { A: "الموجات فوق الصوتية", B: "فحص التيارات الدوامية", C: "الفحص بالأشعة", D: "الحث المغناطيسي" },
        correctAnswer: "B",
        hint: "This electromagnetic method is sensitive to near-surface defects.",
        arabicHint: "تتميز هذه الطريقة الكهرومغناطيسية بحساسيتها للعيوب القريبة من السطح."
    },
    {
        question: "The earliest method used to locate unseen flaws in the railway industry is:",
        arabicQuestion: "ما أقدم طريقة استُخدمت لتحديد العيوب غير المرئية في صناعة السكك الحديدية؟",
        options: { A: "Ultrasound", B: "Magnetic induction or Magnetic flux leakage", C: "Radiography", D: "EMAT" },
        arabicOptions: { A: "الموجات فوق الصوتية", B: "الحث المغناطيسي أو تسرب الفيض المغناطيسي", C: "الفحص بالأشعة", D: "محول صوتي كهرومغناطيسي (EMAT)" },
        correctAnswer: "B",
        hint: "This early approach relies on changes in a magnetic field.",
        arabicHint: "تعتمد هذه الطريقة المبكرة على التغيرات في المجال المغناطيسي."
    },
    {
        question: "What does EMAT stand for?",
        arabicQuestion: "إلى ماذا يشير الاختصار EMAT؟",
        options: { A: "Electromagnetic Acoustic Transducer", B: "Electric Magnetic Analysis Tool", C: "Electronic Measurement and Testing", D: "Electromagnetic Analysis Technique" },
        arabicOptions: { A: "محول صوتي كهرومغناطيسي", B: "أداة التحليل الكهربائي المغناطيسي", C: "القياس والاختبار الإلكتروني", D: "تقنية التحليل الكهرومغناطيسي" },
        correctAnswer: "A",
        hint: "The name describes an electromagnetic device that generates acoustic waves.",
        arabicHint: "يشير الاسم إلى جهاز كهرومغناطيسي يولد موجات صوتية."
    },
    {
        question: "What is the future of rail inspection likely to use?",
        arabicQuestion: "ما التقنية التي يُرجح استخدامها مستقبلاً في فحص السكك؟",
        options: { A: "Steam-powered sensors", B: "Laser-optical transmitting transducers in ultrasonic testing", C: "Manual visual inspection only", D: "Magnetic compasses" },
        arabicOptions: { A: "مستشعرات تعمل بالبخار", B: "محولات إرسال بصرية ليزرية في الاختبار بالموجات فوق الصوتية", C: "الفحص البصري اليدوي فقط", D: "بوصلات مغناطيسية" },
        correctAnswer: "B",
        hint: "Look for the advanced optical technology mentioned in the option.",
        arabicHint: "ابحث عن التقنية البصرية المتقدمة المذكورة ضمن الخيارات."
    },
    {
        question: "What is the main purpose of a train roll-by inspection?",
        arabicQuestion: "ما الغرض الرئيسي من فحص القطار أثناء مروره؟",
        options: { A: "To repair the train", B: "To identify abnormal conditions such as equipment problems and unsafe load conditions", C: "To refuel the train", D: "To clean the train" },
        arabicOptions: { A: "إصلاح القطار", B: "اكتشاف الحالات غير الطبيعية مثل مشكلات المعدات والحمولات غير الآمنة", C: "إعادة تزويد القطار بالوقود", D: "تنظيف القطار" },
        correctAnswer: "B",
        hint: "The inspection is for observing and reporting, not carrying out repairs.",
        arabicHint: "الغرض هو الملاحظة والإبلاغ، وليس إجراء الإصلاحات."
    },
    {
        question: "During Phase 1: Preparation, what should an inspector gather?",
        arabicQuestion: "ما الأدوات التي ينبغي للمفتش تجهيزها خلال المرحلة الأولى: التحضير؟",
        options: { A: "A flashlight, notebook, tape or chalk, and a defect reporting form", B: "A hammer and nails", C: "A cooking kit", D: "A camera only" },
        arabicOptions: { A: "مصباح يدوي ودفتر وشريط أو طباشير ونموذج للإبلاغ عن العيوب", B: "مطرقة ومسامير", C: "أدوات للطهي", D: "كاميرا فقط" },
        correctAnswer: "A",
        hint: "The inspector needs tools for observing, marking, and recording defects.",
        arabicHint: "يحتاج المفتش أدوات لملاحظة العيوب وتحديدها وتسجيلها."
    },
    {
        question: "What should be checked during a train roll inspection regarding the body?",
        arabicQuestion: "ما الذي ينبغي فحصه في جسم القطار أثناء فحص مروره؟",
        options: { A: "Paint color", B: "Structural damage like dents, cracks, or holes", C: "Passenger seats", D: "Window tint" },
        arabicOptions: { A: "لون الطلاء", B: "الأضرار الهيكلية مثل الانبعاجات أو الشقوق أو الثقوب", C: "مقاعد الركاب", D: "تظليل النوافذ" },
        correctAnswer: "B",
        hint: "Look for damage that could affect the structure.",
        arabicHint: "ابحث عن الأضرار التي قد تؤثر في سلامة الهيكل."
    },
    {
        question: "During Phase 2: Train Roll Inspection, what should be looked for on the ground?",
        arabicQuestion: "ما الذي ينبغي البحث عنه على الأرض خلال المرحلة الثانية: فحص مرور القطار؟",
        options: { A: "Litter", B: "Fluid leaks (oil, fuel, coolant)", C: "Flowers", D: "Passengers" },
        arabicOptions: { A: "القمامة", B: "تسرب السوائل مثل الزيت أو الوقود أو سائل التبريد", C: "الزهور", D: "الركاب" },
        correctAnswer: "B",
        hint: "Check beneath the train for fluid escaping from equipment.",
        arabicHint: "تحقق أسفل القطار من وجود سوائل متسربة من المعدات."
    },
    {
        question: "What is a train roll-by inspection?",
        arabicQuestion: "ما هو فحص القطار أثناء مروره؟",
        options: { A: "A visual inspection performed while a train is moving past an inspector", B: "A mechanical repair process", C: "A fueling procedure", D: "A cleaning process" },
        arabicOptions: { A: "فحص بصري يُجرى أثناء مرور القطار أمام المفتش", B: "عملية إصلاح ميكانيكي", C: "إجراء للتزود بالوقود", D: "عملية تنظيف" },
        correctAnswer: "A",
        hint: "The train is in motion as it passes the inspector.",
        arabicHint: "يكون القطار متحركاً أثناء مروره أمام المفتش."
    },
    {
        question: "Which of the following is NOT a purpose of a roll-by inspection?",
        arabicQuestion: "أي مما يلي ليس من أهداف فحص القطار أثناء مروره؟",
        options: { A: "Identify equipment problems", B: "Identify damaged components", C: "Replace faulty parts immediately", D: "Identify unsafe load conditions" },
        arabicOptions: { A: "تحديد مشكلات المعدات", B: "تحديد المكونات التالفة", C: "استبدال الأجزاء المعطوبة فوراً", D: "تحديد حالات الحمولة غير الآمنة" },
        correctAnswer: "C",
        hint: "A roll-by inspection identifies problems; it does not replace parts.",
        arabicHint: "يكشف الفحص المشكلات، لكنه لا يستبدل القطع."
    },
    {
        question: "What may inspectors listen for during a roll-by inspection?",
        arabicQuestion: "ما الأصوات التي قد يستمع إليها المفتشون أثناء فحص مرور القطار؟",
        options: { A: "Music", B: "Unusual sounds or air leaks", C: "Passenger conversations", D: "Radio signals" },
        arabicOptions: { A: "الموسيقى", B: "الأصوات غير المعتادة أو تسرب الهواء", C: "أحاديث الركاب", D: "إشارات الراديو" },
        correctAnswer: "B",
        hint: "Listen for sounds that could indicate a mechanical or pneumatic problem.",
        arabicHint: "استمع إلى ما قد يدل على مشكلة ميكانيكية أو تسرب هواء."
    },
    {
        question: "A roll-by inspection is primarily:",
        arabicQuestion: "يُعد فحص القطار أثناء مروره في الأساس:",
        options: { A: "A detailed mechanical inspection", B: "A visual and observational inspection", C: "An NDT technique", D: "A repair procedure" },
        arabicOptions: { A: "فحصاً ميكانيكياً تفصيلياً", B: "فحصاً بصرياً ورصدياً", C: "تقنية اختبار غير إتلافي", D: "إجراءً للإصلاح" },
        correctAnswer: "B",
        hint: "The inspector observes the train as it passes.",
        arabicHint: "يراقب المفتش القطار أثناء مروره."
    },
    {
        question: "What is the purpose of rail inspection?",
        arabicQuestion: "ما الغرض من فحص السكك الحديدية؟",
        options: { A: "To identify defects before they become critical", B: "To paint the rails", C: "To replace all rails", D: "To measure rail length" },
        arabicOptions: { A: "اكتشاف العيوب قبل أن تصبح خطيرة", B: "طلاء القضبان", C: "استبدال جميع القضبان", D: "قياس طول القضبان" },
        correctAnswer: "A",
        hint: "Early detection helps prevent a defect from becoming a serious safety issue.",
        arabicHint: "يساعد الاكتشاف المبكر على منع تحول العيب إلى خطر جسيم."
    },
    {
        question: "Which of the following is a critical part of a rail for inspection?",
        arabicQuestion: "أي مما يلي يُعد جزءاً مهماً من السكة يجب فحصه؟",
        options: { A: "Rail Head", B: "Rail Web", C: "Rail Foot", D: "All of the above" },
        arabicOptions: { A: "رأس السكة", B: "جسم السكة", C: "قاعدة السكة", D: "جميع ما سبق" },
        correctAnswer: "D",
        hint: "Defects can occur in more than one part of the rail.",
        arabicHint: "قد تظهر العيوب في أكثر من جزء من السكة."
    },
    {
        question: "A train roll-by inspection can be performed from the ground or on the train itself.",
        arabicQuestion: "يمكن إجراء فحص مرور القطار من الأرض أو من على متن القطار.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "B",
        hint: "The statement includes both possible inspection positions.",
        arabicHint: "تتضمن العبارة موضعي الفحص الممكنين."
    },
    {
        question: "Inspectors may listen for air leaks or unusual noises during a roll-by inspection.",
        arabicQuestion: "قد يستمع المفتشون إلى تسرب الهواء أو الأصوات غير المعتادة أثناء فحص مرور القطار.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "A",
        hint: "Sound can help reveal problems that may not be immediately visible.",
        arabicHint: "قد تساعد الأصوات في كشف مشكلات لا تظهر بوضوح."
    },
    {
        question: "Rail inspection only examines the head of the rail.",
        arabicQuestion: "يقتصر فحص السكك الحديدية على رأس السكة فقط.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "B",
        hint: "The web, foot, and other areas can also contain defects.",
        arabicHint: "قد توجد العيوب أيضاً في جسم السكة وقاعدتها وأجزاء أخرى."
    },
    {
        question: "Squats start as small surface-breaking cracks.",
        arabicQuestion: "تبدأ التقعرات (Squats) على شكل شقوق صغيرة مفتوحة على السطح.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "A",
        hint: "These defects begin at the rail surface.",
        arabicHint: "تبدأ هذه العيوب عند سطح السكة."
    },
    {
        question: "Handheld inspection devices are considered very fast and efficient for thousands of miles of track.",
        arabicQuestion: "تُعد أجهزة الفحص المحمولة سريعة وفعالة جداً لفحص آلاف الأميال من السكك.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "B",
        hint: "Consider how practical handheld devices are over very long distances.",
        arabicHint: "فكر في مدى عملية الأجهزة المحمولة عند فحص مسافات طويلة جداً."
    },
    {
        question: "Radiography is used on specific locations such as bolt holes and where thermite welding was used.",
        arabicQuestion: "يُستخدم الفحص بالأشعة في مواضع محددة مثل ثقوب البراغي ومناطق اللحام الحراري.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "A",
        hint: "Radiography can be applied to selected areas of concern.",
        arabicHint: "يمكن تطبيق الفحص بالأشعة على مناطق محددة موضع اهتمام."
    },
    {
        question: "Defects in rails can only be found in the head.",
        arabicQuestion: "لا يمكن العثور على عيوب السكك إلا في رأس السكة.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "B",
        hint: "The entire rail should be inspected, not only its head.",
        arabicHint: "ينبغي فحص السكة بالكامل، وليس رأسها فقط."
    },
    {
        question: "Corrosion, inclusions, seams, shelling, transverse fissures, and wheel burn are all forms of surface and internal defects.",
        arabicQuestion: "يُعد التآكل والشوائب واللحامات والتقشر والكسور المستعرضة واحتراق العجلات أنواعاً من العيوب السطحية والداخلية.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "A",
        hint: "The listed items are recognized types of rail defects.",
        arabicHint: "العناصر المذكورة تُعد من أنواع عيوب السكك المعروفة."
    },
    {
        question: "The entire rail needs to be inspected because flaws can occur in different parts.",
        arabicQuestion: "يجب فحص السكة بالكامل لأن العيوب قد تظهر في أجزاء مختلفة منها.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "A",
        hint: "Defects are not limited to a single part of the rail.",
        arabicHint: "لا تقتصر العيوب على جزء واحد من السكة."
    },
    {
        question: "Visual Inspection is primarily used to detect broken or cracked joint bars in bolted rail.",
        arabicQuestion: "يُستخدم الفحص البصري أساساً لاكتشاف قضبان الوصل المكسورة أو المتشققة في السكك المثبتة بالبراغي.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "A",
        hint: "Joint bars are accessible for direct visual examination.",
        arabicHint: "يمكن فحص قضبان الوصل مباشرةً بالنظر."
    },
    {
        question: "A train roll-by inspection is performed while the train is parked in a yard.",
        arabicQuestion: "يُجرى فحص مرور القطار بينما يكون القطار متوقفاً في الساحة.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "B",
        hint: "A roll-by inspection observes a train as it passes.",
        arabicHint: "يراقب فحص المرور القطار أثناء تحركه أمام المفتش."
    },
    {
        question: "During preparation, the train must be properly secured with brakes applied and wheels chocked if necessary.",
        arabicQuestion: "أثناء التحضير، يجب تأمين القطار جيداً باستخدام المكابح ووضع موانع للعجلات عند الحاجة.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "A",
        hint: "Safety precautions are part of the preparation phase.",
        arabicHint: "تُعد احتياطات السلامة جزءاً من مرحلة التحضير."
    },
    {
        question: "A flashlight is only needed during night inspections.",
        arabicQuestion: "لا تكون هناك حاجة إلى المصباح اليدوي إلا أثناء الفحص الليلي.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "B",
        hint: "A flashlight can help inspect poorly lit areas at any time.",
        arabicHint: "قد يساعد المصباح في فحص الأماكن ضعيفة الإضاءة في أي وقت."
    },
    {
        question: "During a roll inspection, you should check for broken or cracked springs on the suspension.",
        arabicQuestion: "أثناء فحص المرور، ينبغي التحقق من وجود نوابض تعليق مكسورة أو متشققة.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "A",
        hint: "Suspension components are among the parts to observe.",
        arabicHint: "تُعد مكونات نظام التعليق من الأجزاء التي ينبغي مراقبتها."
    },
    {
        question: "A roll-by inspection replaces detailed mechanical inspection or NDT techniques.",
        arabicQuestion: "يحل فحص مرور القطار محل الفحص الميكانيكي التفصيلي أو تقنيات الاختبار غير الإتلافي.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "B",
        hint: "A roll-by inspection is an early observational check, not a replacement for detailed testing.",
        arabicHint: "فحص المرور ملاحظة أولية، وليس بديلاً عن الفحوصات التفصيلية."
    },
    {
        question: "Inspectors may listen for unusual sounds or air leaks during a roll-by inspection.",
        arabicQuestion: "قد يستمع المفتشون إلى الأصوات غير المعتادة أو تسرب الهواء أثناء فحص مرور القطار.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "A",
        hint: "Listening is one way to identify possible equipment issues.",
        arabicHint: "يُعد الاستماع إحدى طرق تحديد المشكلات المحتملة في المعدات."
    },
    {
        question: "A roll-by inspection can act as an early warning inspection.",
        arabicQuestion: "يمكن أن يعمل فحص مرور القطار كفحص إنذار مبكر.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "A",
        hint: "It can reveal abnormal conditions before they become more serious.",
        arabicHint: "قد يكشف الحالات غير الطبيعية قبل أن تصبح أكثر خطورة."
    },
    {
        question: "Rail inspection examines railway rails for defects or discontinuities that could affect safety.",
        arabicQuestion: "يفحص فحص السكك القضبان بحثاً عن العيوب أو الانقطاعات التي قد تؤثر في السلامة.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "A",
        hint: "Safety-related defects are the focus of rail inspection.",
        arabicHint: "تركز عملية فحص السكك على العيوب التي تمس السلامة."
    },
    {
        question: "Defects in rails can occur in different parts of the rail.",
        arabicQuestion: "قد تظهر عيوب السكك في أجزاء مختلفة من السكة.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "A",
        hint: "The rail head is not the only area that may contain flaws.",
        arabicHint: "رأس السكة ليس المنطقة الوحيدة التي قد تحتوي على عيوب."
    },
    {
        question: "The main areas for rail inspection include Rail Head, Rail Web, Rail Foot, Switch Blades, Welds, and Bolt Holes.",
        arabicQuestion: "تشمل المناطق الرئيسية لفحص السكك رأس السكة وجسمها وقاعدتها ولسان التحويلات واللحامات وثقوب البراغي.",
        options: { A: "True", B: "False" },
        arabicOptions: { A: "صح", B: "خطأ" },
        correctAnswer: "A",
        hint: "The inspection covers multiple rail sections and connection features.",
        arabicHint: "يشمل الفحص أجزاء متعددة من السكة ومواضع التوصيل."
    }
];
