import {
  Scale,
  Briefcase,
  FileText,
  Landmark,
  Gavel,
  Users,
  Car,
  Cog,
  Gauge,
  Zap,
  Wrench,
  Trophy,
  Building2,
  HardHat,
  Ruler,
  Paintbrush,
  TreePine,
  Award,
  Database,
  Brain,
  BarChart3,
  Server,
  ShieldCheck,
  Cpu,
  Clock,
  Handshake,
  Target,
  Lock,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface DivisionService {
  icon: LucideIcon;
  titleFa: string;
  titleEn: string;
  descFa: string;
  descEn: string;
}

export interface DivisionAdvantage {
  icon: LucideIcon;
  textFa: string;
  textEn: string;
}

export interface DivisionStat {
  valueFa: string;
  valueEn: string;
  labelFa: string;
  labelEn: string;
}

export interface DivisionContact {
  phone: string;
  email: string;
  addressFa: string;
  addressEn: string;
  hoursFa: string;
  hoursEn: string;
}

export interface Division {
  slug: string;
  /** Section id used on the home page so "back" can return to the right anchor. */
  sectionId: string;
  logo: string;
  image: string;
  eyebrowFa: string;
  eyebrowEn: string;
  nameFa: string;
  nameEn: string;
  taglineFa: string;
  taglineEn: string;
  introFa: string;
  introEn: string;
  descriptionFa: string[];
  descriptionEn: string[];
  services: DivisionService[];
  advantages: DivisionAdvantage[];
  stats: DivisionStat[];
  contact: DivisionContact;
}

const NOTICE = {
  eyebrowFa: 'تخصص‌های ما',
  eyebrowEn: 'Our Expertise',
};

export const divisions: Division[] = [
  {
    slug: 'legal',
    sectionId: 'legal',
    logo: 'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-16/sse3swicaiyq/logo-legal-division.png',
    image:
      'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-15/srajinycaiyq/legal-office-luxury.png',
    eyebrowFa: 'خدمات حقوقی',
    eyebrowEn: 'Legal Services',
    nameFa: 'موسسه حقوقی سعود رزاقی',
    nameEn: 'Saud Razaghi Law Firm',
    taglineFa: 'وکالت تخصصی، با تکیه بر دانش روز و اخلاق حرفه‌ای',
    taglineEn: 'Specialized advocacy grounded in modern knowledge and professional ethics',
    introFa:
      'بازوی حقوقی هولدینگ سعود؛ جایی که تحلیل دقیق حقوقی با مذاکره هوشمندانه و دفاع مستند در مراجع قضایی ترکیب می‌شود.',
    introEn:
      'The legal arm of Saud Holding, where precise legal analysis meets intelligent negotiation and documented advocacy before judicial authorities.',
    descriptionFa: [
      'موسسه حقوقی سعود رزاقی با بیش از دو دهه تجربه در عرصه وکالت و مشاوره حقوقی، به‌عنوان یکی از بازوهای تخصصی هولدینگ سعود فعالیت می‌کند. این موسسه از ابتدای فعالیت خود، اصل را بر «پیشگیری از اختلاف» گذاشته و در کنار آن، دفاع قدرتمند در مراجع قضایی را در دستور کار قرار داده است.',
      'تیم ما از وکلای پایه‌یکل، کارشناسان ارشد حقوقی و مشاوران متخصص در حوزه‌های تجاری، ملکی، خانواده، کیفری و داوری بین‌المللی تشکیل شده است. هر پرونده پیش از ورود به مرحله اقدام، در کارگروه تخصصی مربوط به خود بررسی و راهبرد دفاعی آن تدوین می‌شود.',
      'رویکرد ما ترکیبی است از تحلیل مستند، مذاکره حرفه‌ای و پیگیری پیوسته تا حصول نتیجه. موکل در تمام مراحل پرونده، گزارش شفاف و مستمر دریافت می‌کند و از جزئیات راهبرد حقوقی خود آگاه است. رعایت محرمانگی مطلق و پرهیز از هرگونه وعده غیرواقعی، اصول تغییرناپذیر این موسسه است.',
    ],
    descriptionEn: [
      'Saud Razaghi Law Firm operates as one of the specialized arms of Saud Holding, with more than two decades of experience in advocacy and legal consulting. From its earliest days the firm has placed "dispute prevention" at its core, while remaining fully prepared for robust representation before judicial authorities.',
      'Our team is composed of licensed attorneys, senior legal experts and specialists in commercial, property, family, criminal and international arbitration matters. Before any action is taken, every file is examined by the relevant specialist workgroup and a defence strategy is formulated.',
      'Our approach combines documented analysis, professional negotiation and continuous follow-up until a result is achieved. Clients receive transparent, ongoing reporting and remain fully aware of their legal strategy. Absolute confidentiality and the avoidance of unrealistic promises are non-negotiable principles of this firm.',
    ],
    services: [
      {
        icon: Scale,
        titleFa: 'دعاوی حقوقی و کیفری',
        titleEn: 'Civil & Criminal Litigation',
        descFa: 'طرح و پیگیری دعاوی و دفاع تخصصی در تمامی مراجع قضایی و شبه‌قضایی کشور.',
        descEn: 'Filing, pursuing and defending claims before all judicial and quasi-judicial authorities.',
      },
      {
        icon: Briefcase,
        titleFa: 'حقوق تجاری و شرکت‌ها',
        titleEn: 'Commercial & Corporate Law',
        descFa: 'تأسیس، تغییرات، ادغام و انحلال شرکت‌ها و مشاوره به هیئت‌مدیره و سهامداران.',
        descEn: 'Incorporation, restructuring, mergers and liquidation, plus board and shareholder advisory.',
      },
      {
        icon: FileText,
        titleFa: 'تنظیم و بازبینی قرارداد',
        titleEn: 'Contract Drafting & Review',
        descFa: 'نگارش و بررسی قراردادهای داخلی و بین‌المللی با پوشش کامل ریسک‌های حقوقی.',
        descEn: 'Drafting and reviewing domestic and international contracts with full legal risk coverage.',
      },
      {
        icon: Landmark,
        titleFa: 'املاک و مستغلات',
        titleEn: 'Real Estate & Property',
        descFa: 'معاملات ملکی، بررسی اسناد و مالکیت، و دعاوی مربوط به ملک و مشارکت در ساخت.',
        descEn: 'Property transactions, title and ownership due diligence, and real-estate litigation.',
      },
      {
        icon: Gavel,
        titleFa: 'داوری و میانجیگری',
        titleEn: 'Arbitration & Mediation',
        descFa: 'حل‌وفصل اختلافات تجاری از طریق داوری داخلی و بین‌المللی و میانجیگری حرفه‌ای.',
        descEn: 'Resolving commercial disputes through domestic and international arbitration and mediation.',
      },
      {
        icon: Users,
        titleFa: 'حقوق خانواده و ارث',
        titleEn: 'Family & Inheritance Law',
        descFa: 'پرونده‌های خانواده، انحصار وراثت و تقسیم ترکه با رویکردی محرمانه و کریمانه.',
        descEn: 'Family matters, probate and estate division handled with discretion and dignity.',
      },
    ],
    advantages: [
      { icon: Award, textFa: 'بیش از دو دهه تجربه پیوسته در وکالت و مشاوره', textEn: 'Over two decades of continuous advocacy and advisory practice' },
      { icon: Users, textFa: 'تیم چندتخصصی با وکلای پایه‌یکل و کارشناسان ارشد', textEn: 'A multi-disciplinary team of licensed attorneys and senior experts' },
      { icon: Lock, textFa: 'محرمانگی مطلق و امنیت کامل اطلاعات موکلین', textEn: 'Absolute confidentiality and full security of client information' },
      { icon: Handshake, textFa: 'اولویت حل‌وفصل مسالمت‌آمیز و کاهش هزینه‌های موکل', textEn: 'Preference for amicable settlement that reduces client costs' },
      { icon: TrendingUp, textFa: 'گزارش‌دهی شفاف و مستمر در تمام مراحل پرونده', textEn: 'Transparent and continuous reporting at every stage of the case' },
      { icon: Target, textFa: 'راهبرد اختصاصی برای هر پرونده، متناسب با شرایط آن', textEn: 'A dedicated strategy tailored to each individual case' },
    ],
    stats: [
      { valueFa: '+۲۰', valueEn: '20+', labelFa: 'سال تجربه حقوقی', labelEn: 'Years of Practice' },
      { valueFa: '+۸۵۰', valueEn: '850+', labelFa: 'پرونده موفق', labelEn: 'Cases Handled' },
      { valueFa: '٪۹۲', valueEn: '92%', labelFa: 'نرخ موفقیت', labelEn: 'Success Rate' },
      { valueFa: '+۱۵', valueEn: '15+', labelFa: 'وکیل و کارشناس', labelEn: 'Lawyers & Experts' },
    ],
    contact: {
      phone: '+98 26 3456 7890',
      email: 'legal@saud-holding.com',
      addressFa: 'کرج، عظیمیه، برج سعود، طبقه ۱۲',
      addressEn: 'Karaj, Azimiyeh, Saud Tower, 12th Floor',
      hoursFa: 'شنبه تا چهارشنبه، ۹ تا ۱۸',
      hoursEn: 'Saturday to Wednesday, 9:00 – 18:00',
    },
  },
  {
    slug: 'auto-parts',
    sectionId: 'autoparts',
    logo: 'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-16/sse3v5ycaiya/logo-autoparts-division.png',
    image:
      'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-15/sraji4icaiza/sport-car-parts-showroom.png',
    eyebrowFa: 'خودرو و اسپرت',
    eyebrowEn: 'Automotive & Sport',
    nameFa: 'قطعات اسپرت خودرو',
    nameEn: 'Sport Car Parts',
    taglineFa: 'عملکرد بی‌نقص، از قطعه تا پیست',
    taglineEn: 'Flawless performance, from component to track',
    introFa:
      'عرضه و نصب قطعات اسپرت و تیونینگ از معتبرترین برندهای جهانی، برای خودروهایی که شایسته عملکردی استثنایی هستند.',
    introEn:
      'Supply and installation of sport and tuning components from the world\u2019s most trusted brands, for cars that deserve exceptional performance.',
    descriptionFa: [
      'بخش قطعات اسپرت خودرو در هولدینگ سعود، با هدف ساده‌ای شکل گرفت: دسترسی مالکان خودروهای لوکس و اسپرت به قطعات اصیل، با ضمانت اصالت و نصب تخصصی. ما تنها محصولاتی را عرضه می‌کنیم که خودمان به عملکرد و دوام آن‌ها اطمینان داریم.',
      'مجموعه ما شامل سیستم‌های تعلیق و ترمز، قطعات موتور و انتقال قدرت، اگزوز و ورودی هوا، رینگ و لاستیک، و همچنین برق و الکترونیک خودرو است. همه قطعات از نمایندگی‌های رسمی یا مسیرهای تأمین تأییدشده تهیه می‌شوند و دارای ضمانت اصالت هستند.',
      'سالن تخصصی ما در برج سعود مجهز به تجهیزات نصب و تراز دقیق است. تیم فنی ما پس از بررسی خودرو و تعیین هدف مالک (کاربری روزمره، اسپرت یا پیست)، بسته پیشنهادی متناسب را ارائه می‌دهد و تا رسیدن به عملکرد مورد انتظار، پروژه را پیگیری می‌کند.',
    ],
    descriptionEn: [
      'The sport car parts division of Saud Holding was founded with a simple goal: giving owners of luxury and sport vehicles access to genuine components, backed by authenticity guarantees and expert installation. We only offer products whose performance and durability we trust ourselves.',
      'Our range covers suspension and braking systems, engine and drivetrain components, exhaust and intake systems, wheels and tyres, as well as automotive electrical and electronic parts. Every item is sourced through official dealers or verified supply channels and carries an authenticity guarantee.',
      'Our dedicated hall at Saud Tower is equipped for precision fitting and alignment. After inspecting the vehicle and understanding the owner\u2019s goal \u2014 daily driving, sport or track use \u2014 our technical team proposes a tailored package and follows the project through until the expected performance is achieved.',
    ],
    services: [
      {
        icon: Car,
        titleFa: 'فروش قطعات اسپرت',
        titleEn: 'Sport Parts Retail',
        descFa: 'عرضه قطعات اصیل اسپرت و پرفورمنس با ضمانت اصالت و فاکتور رسمی.',
        descEn: 'Genuine sport and performance parts with authenticity guarantee and official invoice.',
      },
      {
        icon: Cog,
        titleFa: 'تیونینگ موتور و انتقال قدرت',
        titleEn: 'Engine & Drivetrain Tuning',
        descFa: 'بهینه‌سازی موتور، گیربکس و سیستم انتقال قدرت مطابق استانداردهای ایمنی.',
        descEn: 'Optimising engine, gearbox and drivetrain within safety standards.',
      },
      {
        icon: Gauge,
        titleFa: 'تعلیق، ترمز و فرمان',
        titleEn: 'Suspension, Brakes & Steering',
        descFa: 'ارتقای سیستم تعلیق و ترمز برای کنترل بهتر و ایمنی بالاتر در سرعت.',
        descEn: 'Upgrading suspension and braking for better control and higher-speed safety.',
      },
      {
        icon: Zap,
        titleFa: 'برق و الکترونیک خودرو',
        titleEn: 'Automotive Electronics',
        descFa: 'نصب و کالیبراسیون ECU، سیستم صوتی و تجهیزات الکترونیکی پیشرفته.',
        descEn: 'ECU installation and calibration, audio systems and advanced electronic equipment.',
      },
      {
        icon: Wrench,
        titleFa: 'نصب و سرویس تخصصی',
        titleEn: 'Expert Fitting & Service',
        descFa: 'نصب دقیق قطعات، تراز‌سنجی و سرویس دوره‌ای در سالن مجهز برج سعود.',
        descEn: 'Precision fitting, alignment and periodic service in our fully equipped Saud Tower hall.',
      },
      {
        icon: Trophy,
        titleFa: 'مشاوره مسابقه‌ای',
        titleEn: 'Motorsport Consulting',
        descFa: 'آماده‌سازی خودرو برای پیست و مشاوره فنی تیم‌های ورزشی و مسابقات.',
        descEn: 'Track preparation and technical consulting for racing teams and competitions.',
      },
    ],
    advantages: [
      { icon: ShieldCheck, textFa: 'ضمانت اصالت تمامی قطعات عرضه‌شده', textEn: 'Authenticity guarantee on every component supplied' },
      { icon: Award, textFa: 'نمایندگی و همکاری با بیش از ۳۰ برند جهانی', textEn: 'Dealership and partnership with more than 30 global brands' },
      { icon: Wrench, textFa: 'تکنسین‌های آموزش‌دیده و تجهیزات نصب دقیق', textEn: 'Trained technicians and professional installation equipment' },
      { icon: Clock, textFa: 'تأمین سریع قطعات سفارشی و کمیاب', textEn: 'Fast sourcing of custom and rare components' },
      { icon: Target, textFa: 'بسته پیشنهادی متناسب با هدف و بودجه مالک', textEn: 'A package tailored to the owner\u2019s goal and budget' },
      { icon: TrendingUp, textFa: 'پشتیبانی و خدمات پس از نصب', textEn: 'Post-installation support and follow-up service' },
    ],
    stats: [
      { valueFa: '+۵۰۰', valueEn: '500+', labelFa: 'محصول فعال', labelEn: 'Active Products' },
      { valueFa: '+۳۰', valueEn: '30+', labelFa: 'برند جهانی', labelEn: 'Global Brands' },
      { valueFa: '+۱۰۰', valueEn: '100+', labelFa: 'تکنسین متخصص', labelEn: 'Expert Technicians' },
      { valueFa: '٪۹۸', valueEn: '98%', labelFa: 'رضایت مشتریان', labelEn: 'Customer Satisfaction' },
    ],
    contact: {
      phone: '+98 26 3456 7891',
      email: 'auto@saud-holding.com',
      addressFa: 'کرج، عظیمیه، برج سعود، نمایشگاه مرکزی',
      addressEn: 'Karaj, Azimiyeh, Saud Tower, Main Showroom',
      hoursFa: 'شنبه تا پنجشنبه، ۹ تا ۲۰',
      hoursEn: 'Saturday to Thursday, 9:00 – 20:00',
    },
  },
  {
    slug: 'construction',
    sectionId: 'construction',
    logo: 'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-16/sse3wkqcaizq/logo-construction-division.png',
    image:
      'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-15/srajjjacai2q/construction-luxury-building.png',
    eyebrowFa: 'عمران و ساختمان',
    eyebrowEn: 'Engineering & Construction',
    nameFa: 'گروه ساخت و ساز ساختمانی',
    nameEn: 'Saud Construction Group',
    taglineFa: 'معماری ماندگار، اجرای بی‌عیب',
    taglineEn: 'Enduring architecture, flawless execution',
    introFa:
      'از طراحی و مهندسی تا تحویل کلید؛ ساخت فضاهایی که سال‌ها پس از تحویل نیز شایسته نام سعود باقی می‌مانند.',
    introEn:
      'From design and engineering to key handover; building spaces that remain worthy of the Saud name long after delivery.',
    descriptionFa: [
      'گروه ساخت و ساز ساختمانی هولدینگ سعود، مسئولیت طراحی و اجرای پروژه‌های مسکونی، تجاری و ویلایی را بر عهده دارد. ما بر این باوریم که ساختمان ماندگار، حاصل هم‌نشینی سه عنصر است: طراحی هوشمند، مصالح اصیل و اجرای دقیق.',
      'در هر پروژه، مطالعه امکان‌سنجی و طراحی معماری با تحلیل شرایط زمین، اقلیم و نیاز بهره‌بردار آغاز می‌شود. سپس برنامه زمان‌بندی و برآورد هزینه شفاف تدوین و در اختیار کارفرما قرار می‌گیرد؛ بدون هزینه‌های پنهان و بدون وعده‌های غیرواقعی.',
      'اجرای پروژه‌ها با تیم‌های فنی مجرب، سرپرستان مقیم کارگاه و کنترل کیفیت مرحله‌به‌مرحله انجام می‌شود. استفاده از مصالح استاندارد، رعایت دقیق آیین‌نامه‌های ساختمانی و تحویل به‌موقع، تعهدی است که در تمام پروژه‌های گذشته خود به آن پایبند بوده‌ایم.',
    ],
    descriptionEn: [
      'The construction group of Saud Holding is responsible for the design and execution of residential, commercial and villa projects. We believe an enduring building is the result of three elements working together: intelligent design, genuine materials and precise execution.',
      'Every project begins with a feasibility study and architectural design informed by the site conditions, climate and the end user\u2019s needs. A transparent schedule and cost estimate is then prepared for the client \u2014 with no hidden costs and no unrealistic promises.',
      'Execution is carried out by experienced technical teams, resident site supervisors and stage-by-stage quality control. Standard-compliant materials, strict adherence to building regulations and on-time handover are commitments we have honoured across all of our completed projects.',
    ],
    services: [
      {
        icon: Building2,
        titleFa: 'ساخت برج و مجتمع مسکونی',
        titleEn: 'Towers & Residential Complexes',
        descFa: 'اجرای کامل پروژه‌های بلندمرتبه و مجتمع‌های مسکونی با استانداردهای روز.',
        descEn: 'Full delivery of high-rise and residential complex projects to current standards.',
      },
      {
        icon: HardHat,
        titleFa: 'پیمانکاری عمرانی',
        titleEn: 'Civil Contracting',
        descFa: 'اجرای سازه، سفت‌کاری و تأسیسات با مدیریت کارگاهی حرفه‌ای.',
        descEn: 'Structural, shell and MEP works with professional site management.',
      },
      {
        icon: Ruler,
        titleFa: 'طراحی و مهندسی',
        titleEn: 'Design & Engineering',
        descFa: 'طراحی معماری، محاسبات سازه و نقشه‌های اجرایی دقیق و قابل پیاده‌سازی.',
        descEn: 'Architectural design, structural calculations and accurate execution drawings.',
      },
      {
        icon: Paintbrush,
        titleFa: 'طراحی داخلی و نازک‌کاری',
        titleEn: 'Interior Design & Finishing',
        descFa: 'طراحی داخلی لوکس و اجرای نازک‌کاری با متریال ممتاز.',
        descEn: 'Luxury interior design and premium finishing with high-grade materials.',
      },
      {
        icon: TreePine,
        titleFa: 'محوطه‌سازی و فضای سبز',
        titleEn: 'Landscaping & Green Space',
        descFa: 'طراحی و اجرای محوطه، آبنما و فضای سبز متناسب با معماری پروژه.',
        descEn: 'Landscape, water feature and green space design matched to the architecture.',
      },
      {
        icon: Award,
        titleFa: 'بازسازی و نوسازی',
        titleEn: 'Renovation & Restoration',
        descFa: 'بازسازی ساختمان‌های قدیمی با حفظ هویت و ارتقای کیفیت سازه.',
        descEn: 'Restoring older buildings while preserving identity and upgrading structure quality.',
      },
    ],
    advantages: [
      { icon: Ruler, textFa: 'طراحی اختصاصی متناسب با زمین و اقلیم پروژه', textEn: 'Bespoke design adapted to each site and climate' },
      { icon: Award, textFa: 'بیش از ۱۵ سال تجربه اجرایی مستمر', textEn: 'More than 15 years of continuous execution experience' },
      { icon: HardHat, textFa: 'تیم فنی مقیم کارگاه و کنترل کیفیت مرحله‌ای', textEn: 'Resident technical team and stage-by-stage quality control' },
      { icon: Clock, textFa: 'تحویل به‌موقع با برنامه زمان‌بندی شفاف', textEn: 'On-time handover with a transparent schedule' },
      { icon: Lock, textFa: 'برآورد هزینه بدون هزینه‌های پنهان', textEn: 'Cost estimates with no hidden charges' },
      { icon: TreePine, textFa: 'توجه به پایداری و بهره‌وری انرژی در طراحی', textEn: 'Emphasis on sustainability and energy efficiency in design' },
    ],
    stats: [
      { valueFa: '+۸۵', valueEn: '85+', labelFa: 'پروژه تکمیل‌شده', labelEn: 'Completed Projects' },
      { valueFa: '+۵۰۰K', valueEn: '500K+', labelFa: 'متر مربع اجرا', labelEn: 'Square Metres Built' },
      { valueFa: '+۲۰۰', valueEn: '200+', labelFa: 'نیروی متخصص', labelEn: 'Skilled Workforce' },
      { valueFa: '+۱۵', valueEn: '15+', labelFa: 'سال تجربه', labelEn: 'Years of Experience' },
    ],
    contact: {
      phone: '+98 26 3456 7892',
      email: 'build@saud-holding.com',
      addressFa: 'کرج، عظیمیه، برج سعود، دفتر مرکزی پروژه‌ها',
      addressEn: 'Karaj, Azimiyeh, Saud Tower, Projects Head Office',
      hoursFa: 'شنبه تا چهارشنبه، ۸ تا ۱۷',
      hoursEn: 'Saturday to Wednesday, 8:00 – 17:00',
    },
  },
  {
    slug: 'data-center',
    sectionId: 'data',
    logo: 'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-16/sse3wxicaiza/logo-data-division.png',
    image:
      'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-15/srajjwacai2a/data-analytics-center.png',
    eyebrowFa: 'فناوری اطلاعات',
    eyebrowEn: 'Information Technology',
    nameFa: 'مرکز نرم‌افزاری تحلیل اطلاعات',
    nameEn: 'Data Analytics Software Center',
    taglineFa: 'داده، تصمیم، رشد',
    taglineEn: 'Data, Decision, Growth',
    introFa:
      'حکمرانی داده‌مبنا و توسعه راهکارهای نرم‌افزاری هوشمند، برای سازمان‌هایی که تصمیم‌هایشان را بر شواهد بنا می‌کنند.',
    introEn:
      'Data-driven governance and intelligent software solutions for organisations that base their decisions on evidence.',
    descriptionFa: [
      'مرکز نرم‌افزاری تحلیل اطلاعات، بازوی فناوری هولدینگ سعود است. مأموریت ما ساده اما دقیق است: تبدیل داده‌های خام سازمان به تصمیم‌های قابل اتکا. این کار از حکمرانی داده آغاز می‌شود و به داشبوردهای مدیریتی و سامانه‌های هوشمند می‌رسد.',
      'ما در حوزه‌هایی مانند معماری داده، کیفیت و پاک‌سازی داده، تحلیل کلان‌داده، یادگیری ماشین، پردازش زبان طبیعی و اتوماسیون فرآیندهای سازمانی فعالیت می‌کنیم. راهکارها بر پایه معماری مقیاس‌پذیر و اصول امنیت اطلاعات طراحی می‌شوند.',
      'روش کار ما مرحله‌ای و شفاف است: تحلیل نیاز، طراحی معماری، پیاده‌سازی، آزمون و در نهایت تحویل مستند. پس از تحویل نیز، پشتیبانی، پایش عملکرد و آموزش کاربران سازمان در برنامه ما قرار دارد تا سامانه در گذر زمان ارزش خود را حفظ کند.',
    ],
    descriptionEn: [
      'The Data Analytics Software Center is the technology arm of Saud Holding. Our mission is simple yet precise: turning an organisation\u2019s raw data into dependable decisions. It begins with data governance and extends to management dashboards and intelligent systems.',
      'We work across data architecture, data quality and cleansing, big data analytics, machine learning, natural language processing and business process automation. Solutions are designed on scalable architectures and information-security principles.',
      'Our delivery method is staged and transparent: requirements analysis, architecture design, implementation, testing and documented handover. After handover, support, performance monitoring and user training remain part of our programme so the system keeps its value over time.',
    ],
    services: [
      {
        icon: Database,
        titleFa: 'حکمرانی و معماری داده',
        titleEn: 'Data Governance & Architecture',
        descFa: 'تدوین چارچوب حکمرانی، انبار داده و خطوط انتقال داده سازمانی.',
        descEn: 'Defining governance frameworks, data warehouses and enterprise data pipelines.',
      },
      {
        icon: Brain,
        titleFa: 'هوش مصنوعی و یادگیری ماشین',
        titleEn: 'AI & Machine Learning',
        descFa: 'توسعه مدل‌های پیش‌بین، دسته‌بندی و پردازش زبان طبیعی متناسب با کسب‌وکار.',
        descEn: 'Predictive, classification and NLP models tailored to the business.',
      },
      {
        icon: BarChart3,
        titleFa: 'تحلیل کلان‌داده و داشبورد',
        titleEn: 'Big Data Analytics & Dashboards',
        descFa: 'تحلیل حجم عظیم داده و ساخت داشبوردهای مدیریتی تصمیم‌یار.',
        descEn: 'Large-scale data analysis and decision-support management dashboards.',
      },
      {
        icon: Server,
        titleFa: 'زیرساخت و سامانه‌های تحت وب',
        titleEn: 'Infrastructure & Web Platforms',
        descFa: 'طراحی معماری سرویس‌گرا، توسعه پلتفرم‌های تحت وب و مقیاس‌پذیر.',
        descEn: 'Service-oriented architecture and scalable web platform development.',
      },
      {
        icon: ShieldCheck,
        titleFa: 'امنیت اطلاعات',
        titleEn: 'Information Security',
        descFa: 'ارزیابی ریسک، حفاظت از داده‌های حساس و پیاده‌سازی استانداردهای امنیتی.',
        descEn: 'Risk assessment, protection of sensitive data and security standard implementation.',
      },
      {
        icon: Cpu,
        titleFa: 'اتوماسیون فرآیندها',
        titleEn: 'Process Automation',
        descFa: 'هوشمندسازی گردش‌کارها و کاهش کار دستی در فرآیندهای کلیدی سازمان.',
        descEn: 'Intelligent workflow automation that reduces manual effort in key processes.',
      },
    ],
    advantages: [
      { icon: Brain, textFa: 'تیم متخصص داده، هوش مصنوعی و مهندسی نرم‌افزار', textEn: 'A team specialised in data, AI and software engineering' },
      { icon: ShieldCheck, textFa: 'امنیت و محرمانگی داده در تمام مراحل پروژه', textEn: 'Data security and confidentiality at every project stage' },
      { icon: Server, textFa: 'معماری مقیاس‌پذیر آماده رشد سازمان', textEn: 'Scalable architecture ready for organisational growth' },
      { icon: BarChart3, textFa: 'تمرکز بر خروجی قابل اندازه‌گیری و تصمیم‌محور', textEn: 'Focus on measurable, decision-oriented outcomes' },
      { icon: Users, textFa: 'آموزش کاربران و تحویل مستندات کامل', textEn: 'User training and complete documentation on handover' },
      { icon: Clock, textFa: 'پشتیبانی و پایش عملکرد پس از تحویل', textEn: 'Support and performance monitoring after delivery' },
    ],
    stats: [
      { valueFa: '+۱۲۰', valueEn: '120+', labelFa: 'پروژه فناوری', labelEn: 'Technology Projects' },
      { valueFa: '+۴۰', valueEn: '40+', labelFa: 'متخصص داده', labelEn: 'Data Specialists' },
      { valueFa: '٪۹۹.۹', valueEn: '99.9%', labelFa: 'پایداری سامانه', labelEn: 'System Uptime' },
      { valueFa: '+۸', valueEn: '8+', labelFa: 'صنعت خدمت‌گیرنده', labelEn: 'Industries Served' },
    ],
    contact: {
      phone: '+98 26 3456 7893',
      email: 'data@saud-holding.com',
      addressFa: 'کرج، عظیمیه، برج سعود، طبقه ۱۸',
      addressEn: 'Karaj, Azimiyeh, Saud Tower, 18th Floor',
      hoursFa: 'شنبه تا چهارشنبه، ۹ تا ۱۸',
      hoursEn: 'Saturday to Wednesday, 9:00 – 18:00',
    },
  },
];

export const SERVICES_EYEBROW = NOTICE;

export function getDivision(slug: string): Division | undefined {
  return divisions.find((division) => division.slug === slug);
}
