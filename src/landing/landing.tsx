import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Mail,
  MapPin,
  Phone,
  Eye,
  Users,
  Award,
  Briefcase,
  Code,
  Palette,
  Smartphone,
  Layers,
  TestTube,
  ExternalLink,
  ChevronLeft,
} from "lucide-react";

export const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: "خانه", id: "home", ref: homeRef },
    { name: "درباره من", id: "about", ref: aboutRef },
    { name: "نمونه کارها", id: "portfolio", ref: portfolioRef },
    { name: "تماس", id: "contact", ref: contactRef },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = navigation.find((nav) => nav.id === sectionId);
    if (section?.ref.current) {
      setIsScrolling(true);
      section.ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const sections = [
        { id: "home", ref: homeRef },
        { id: "about", ref: aboutRef },
        { id: "portfolio", ref: portfolioRef },
        { id: "contact", ref: contactRef },
      ];

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const sectionTop = section.ref.current.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  const projects = [
    {
      title: "بازطراحی پلتفرم فروشگاهی",
      description: "بهبود تجربه کاربری که منجر به افزایش ۴۰٪ تبدیل شد",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tags: ["تحقیق کاربری", "نمونه‌سازی", "تست A/B"],
    },
    {
      title: "اپلیکیشن بانکداری موبایل",
      description: "مدیریت مالی شهودی برای کاربران مدرن",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      tags: ["طراحی موبایل", "تست کاربری", "دسترسی‌پذیری"],
    },
    {
      title: "داشبورد SaaS",
      description: "تجسم داده‌های پیچیده به شکل ساده و قابل اجرا",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["تجسم داده", "UX سازمانی", "سیستم طراحی"],
    },
  ];

  const skills = [
    { name: "تحقیق کاربری", level: 95, icon: Users },
    { name: "نمونه‌سازی", level: 90, icon: Layers },
    { name: "طراحی بصری", level: 85, icon: Palette },
    { name: "طراحی تعامل", level: 92, icon: Smartphone },
    { name: "سیستم طراحی", level: 88, icon: Code },
    { name: "تست قابلیت استفاده", level: 90, icon: TestTube },
  ];

  const Header = () => (
    <header
      className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="text-2xl font-bold text-gray-900">چوگان</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-reverse space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-right py-3 px-4 font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );

  const HomePage = () => (
    <section
      ref={homeRef}
      id="home"
      className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen"
      dir="rtl"
    >
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-4xl font-bold text-gray-900 mb-6">
              ملل تریدر: سفری هوشمند به قله‌های مالی
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              با پلتفرم پیشرفته ما، معاملات خود را سریع، امن و حرفه‌ای مدیریت
              کنید
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="bg-indigo-600 text-white cursor-pointer px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center"
              >
                مشاهده پروژه‌های چوگان
                <ChevronLeft className="mr-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/bg.avif"
              alt="img"
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 text-center bg-white p-6 rounded-xl shadow-lg w-[100px] h-[100px]">
              <div className="text-2xl font-bold text-indigo-600">۱0+</div>
              <div className="text-gray-600">پروژه </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "+۸", label: "سال تجربه", icon: Briefcase },
              { number: "+۵۰", label: "تیم چوگان", icon: Users },
              { number: "٪۹۵", label: "رضایت مشتری", icon: Award },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );

  const PortfolioPage = () => (
    <section
      ref={portfolioRef}
      id="portfolio"
      className="bg-gray-50 min-h-screen"
      dir="rtl"
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            کارهای برجسته
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            مجموعه‌ای از پروژه‌هایی که رویکرد من را در حل چالش‌های پیچیده طراحی
            و ایجاد تجربه‌های کاربری معنادار نشان می‌دهند.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-indigo-600 bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition-all duration-300">
                  <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-200 flex items-center hover:translate-x-1">
                  مشاهده مطالعه موردی
                  <ExternalLink className="mr-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 hover:scale-105">
            مشاهده همه پروژه‌ها
          </button>
        </div>
      </section>
    </section>
  );

  const ContactPage = () => (
    <section
      ref={contactRef}
      id="contact"
      className="bg-white min-h-screen"
      dir="rtl"
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1  gap-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              بیایید با هم کار کنیم
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              من همیشه برای همکاری در پروژه‌های معناداری که تفاوت ایجاد می‌کنند
              هیجان‌زده هستم. چه به بازطراحی کامل محصول نیاز داشته باشید یا
              بخواهید تجربه کاربری موجودتان را بهبود دهید، دوست دارم از شما
              بشنوم.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, title: "ایمیل", info: "sara.ahmadi@email.com" },
                { icon: MapPin, title: "موقعیت", info: "تهران، ایران" },
                { icon: Phone, title: "تلفن", info: "۰۹۱۲۳۴۵۶۷۸۹" },
              ].map((contact, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 text-indigo-600 mt-1 ml-4">
                    <contact.icon className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {contact.title}
                    </h3>
                    <p className="text-gray-600">{contact.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HomePage />
        <PortfolioPage />
        <ContactPage />
      </main>
    </div>
  );
};
