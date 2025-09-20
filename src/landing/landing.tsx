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
  ExternalLink,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
      title: "پلتفرم معاملاتی ملل تریدر",
      description:
        "سیستم پیشرفته معاملات مالی با رابط کاربری مدرن و امنیت بالا",
      image: "/Moving.png",
      tags: ["معاملات مالی", "امنیت بالا", "رابط کاربری"],
    },
    {
      title: "سامانه تحلیل بازار",
      description: "ابزارهای تحلیلی پیشرفته برای تصمیم‌گیری هوشمند در بازار",
      image: "/Analysis.png",
      tags: ["تحلیل داده", "هوش مصنوعی", "پیش‌بینی"],
    },
    {
      title: "اپلیکیشن موبایل چوگان",
      description: "دسترسی آسان و سریع به تمام امکانات پلتفرم از طریق موبایل",
      image: "/online.png",
      tags: ["موبایل", "دسترسی آسان", "تجربه کاربری"],
    },
  ];

  const Header = () => (
    <header
      className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200/50"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="text-3xl font-bold text-gray-900">چوگان</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-reverse space-x-8">
            {navigation.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => scrollToSection(item.id)}
                className="font-medium"
              >
                {item.name}
              </Button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50">
            {navigation.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className="w-full justify-start mb-2"
              >
                {item.name}
              </Button>
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
      className="relative bg-white min-h-screen"
      dir="rtl"
    >
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                ملل تریدر
                <br />
                <span className="text-3xl lg:text-4xl font-semibold text-gray-600">
                  سفری هوشمند به قله‌های مالی
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                با پلتفرم پیشرفته ما، معاملات خود را سریع، امن و حرفه‌ای مدیریت
                کنید
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("portfolio")}
                size="lg"
                className="text-lg px-8 py-6"
              >
                مشاهده پروژه‌های چوگان
                <ChevronLeft className="mr-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/Analysis.png"
              alt="ملل تریدر"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 text-center bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-gray-900">۱۰+</div>
              <div className="text-gray-600 font-medium">پروژه موفق</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "۸+", label: "سال تجربه", icon: Briefcase },
              { number: "۵۰+", label: "تیم چوگان", icon: Users },
              { number: "۹۵%", label: "رضایت مشتری", icon: Award },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300">
                    <stat.icon className="h-6 w-6 text-gray-600" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
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
      className="bg-white min-h-screen"
      dir="rtl"
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              پروژه‌های برجسته
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            مجموعه‌ای از پروژه‌هایی که رویکرد ما را در حل چالش‌های پیچیده طراحی
            و ایجاد تجربه‌های کاربری معنادار نشان می‌دهند.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:-translate-y-4"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm rounded-full font-semibold border border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="group/btn text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300 flex items-center hover:translate-x-2">
                  مشاهده مطالعه موردی
                  <ExternalLink className="mr-2 h-5 w-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
            <span className="relative z-10">مشاهده همه پروژه‌ها</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>
    </section>
  );

  const ContactPage = () => (
    <section
      ref={contactRef}
      id="contact"
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen overflow-hidden"
      dir="rtl"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/bg.avif')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-indigo-900/90"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            ما همیشه برای همکاری در پروژه‌های معناداری که تفاوت ایجاد می‌کنند
            هیجان‌زده هستیم. چه به بازطراحی کامل محصول نیاز داشته باشید یا
            بخواهید تجربه کاربری موجودتان را بهبود دهید، دوست داریم از شما
            بشنویم.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {[
            {
              icon: Mail,
              title: "ایمیل",
              info: "info@chogan.ir",
              color: "from-blue-500 to-cyan-500",
              bgColor: "from-blue-500/20 to-cyan-500/20",
            },
            {
              icon: MapPin,
              title: "موقعیت",
              info: "تهران، ایران",
              color: "from-purple-500 to-pink-500",
              bgColor: "from-purple-500/20 to-pink-500/20",
            },
          ].map((contact, index) => (
            <div key={index} className="group relative">
              <div
                className={`relative bg-gradient-to-br ${contact.bgColor} backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${contact.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-blue-100 text-lg">{contact.info}</p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
            <h3 className="text-4xl font-bold text-white mb-6">
              آماده شروع پروژه بعدی‌تان هستید؟
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              با تیم چوگان همراه شوید و تجربه‌ای منحصر به فرد از طراحی و توسعه
              را تجربه کنید
            </p>
            <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
              <span className="relative z-10">شروع همکاری</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>
    </section>
  );

  return (
    <div className="min-h-screen bg-slate-900">
      <main>
        <HomePage />
        <PortfolioPage />
        <ContactPage />
      </main>
    </div>
  );
};
