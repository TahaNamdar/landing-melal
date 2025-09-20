import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  MapPin,
  Eye,
  Users,
  Award,
  Briefcase,
  ExternalLink,
  TrendingUp,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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

      setScrollY(window.scrollY);

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
      className="bg-white/95 backdrop-blur-md  sticky top-0 z-50"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="text-xl font-bold text-black border-b border-gray-300 pb-2">
            اندیشه پردازان چوگان
          </div>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="relative mb-16 sm:mb-24 lg:mb-32">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-right space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-gray-900">
                  <span className="text-emerald-400 bg-clip-text">
                    ملل تریدر
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 leading-relaxed">
                  سفری هوشمند به قله‌های مالی
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4">
                  با پلتفرم پیشرفته ما، معاملات خود را سریع، امن و حرفه‌ای
                  مدیریت کنید
                </p>
              </div>

              {/* Mobile Phone Mockup */}
              <div className="relative flex justify-center lg:justify-start">
                <div className="relative w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  {/* Phone Frame */}
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="bg-gray-50 h-8 flex items-center justify-between px-4 text-xs font-medium text-gray-600">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="h-[calc(100%-2rem)] bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
                      {/* Trading Dashboard Sections */}
                      <div className="p-4 space-y-4">
                        {/* Header */}
                        <div className="text-center">
                          <h3 className="text-sm font-bold text-gray-800">
                            ملل تریدر
                          </h3>
                          <p className="text-xs text-gray-600">
                            پلتفرم معاملاتی
                          </p>
                        </div>

                        {/* Chart Section */}
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-semibold text-gray-700">
                              نمودار قیمت
                            </span>
                            <span className="text-xs text-green-600">
                              +2.5%
                            </span>
                          </div>
                          <div className="h-16 bg-gray-50 rounded flex items-end justify-between px-2">
                            <div className="w-1 bg-blue-500 h-8 rounded-t"></div>
                            <div className="w-1 bg-blue-500 h-12 rounded-t"></div>
                            <div className="w-1 bg-blue-500 h-6 rounded-t"></div>
                            <div className="w-1 bg-blue-500 h-10 rounded-t"></div>
                            <div className="w-1 bg-blue-500 h-14 rounded-t"></div>
                            <div className="w-1 bg-blue-500 h-8 rounded-t"></div>
                            <div className="w-1 bg-blue-500 h-11 rounded-t"></div>
                          </div>
                        </div>

                        {/* Trading Pairs */}
                        <div className="space-y-2">
                          <div className="bg-white rounded-lg p-3 shadow-sm flex justify-between items-center">
                            <div>
                              <span className="text-xs font-semibold text-gray-700">
                                EUR/USD
                              </span>
                              <p className="text-xs text-gray-500">1.0845</p>
                            </div>
                            <span className="text-xs text-green-600">
                              +0.12%
                            </span>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm flex justify-between items-center">
                            <div>
                              <span className="text-xs font-semibold text-gray-700">
                                GBP/USD
                              </span>
                              <p className="text-xs text-gray-500">1.2650</p>
                            </div>
                            <span className="text-xs text-red-600">-0.08%</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-2">
                          <button className="bg-green-500 text-white text-xs py-2 rounded-lg font-semibold">
                            خرید
                          </button>
                          <button className="bg-red-500 text-white text-xs py-2 rounded-lg font-semibold">
                            فروش
                          </button>
                        </div>

                        {/* Bottom Navigation */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200">
                          <div className="flex justify-around py-2">
                            <div className="text-center">
                              <div className="w-6 h-6 bg-blue-500 rounded mx-auto mb-1"></div>
                              <span className="text-xs text-blue-500">
                                معاملات
                              </span>
                            </div>
                            <div className="text-center">
                              <div className="w-6 h-6 bg-gray-300 rounded mx-auto mb-1"></div>
                              <span className="text-xs text-gray-400">
                                تحلیل
                              </span>
                            </div>
                            <div className="text-center">
                              <div className="w-6 h-6 bg-gray-300 rounded mx-auto mb-1"></div>
                              <span className="text-xs text-gray-400">
                                پروفایل
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Animated Elements */}
                      <div className="absolute top-20 right-4 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="absolute top-32 left-4 w-1 h-1 bg-blue-500 rounded-full animate-ping"></div>
                      <div className="absolute bottom-20 right-6 w-1 h-1 bg-purple-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Phone Shadow */}
                  <div className="absolute inset-0 bg-gray-900 rounded-[2.5rem] -z-10 transform translate-y-2"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce">
                  📈
                </div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
                  💰
                </div>
                <div className="absolute top-1/2 -right-8 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs animate-ping">
                  ⚡
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative z-10 mt-12">
            <div className="text-center bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl">
              {/* CTA Button */}
              <div className="flex justify-center items-center pt-6 sm:pt-8">
                <div
                  onClick={() => scrollToSection("portfolio")}
                  className="inline-flex cursor-pointer items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-8 hover:scale-105 transition-transform duration-300"
                >
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <span className="text-xs sm:text-sm font-semibold text-blue-700">
                    پلتفرم پیشرفته معاملات مالی
                  </span>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-16 max-w-4xl mx-auto px-4">
                {[
                  {
                    number: "۱۰+",
                    label: "سال تجربه",
                    icon: Award,
                    color: "text-yellow-500",
                  },
                  {
                    number: "۵۰+",
                    label: "تیم متخصص",
                    icon: Users,
                    color: "text-blue-500",
                  },
                  {
                    number: "۹۵%",
                    label: "رضایت مشتری",
                    icon: Shield,
                    color: "text-green-500",
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <div
                        className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300 group-hover:scale-110`}
                      >
                        <stat.icon
                          className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`}
                        />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Showcase */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24 mb-16 sm:mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative flex flex-col ${
                index % 2 === 0
                  ? "lg:flex-row "
                  : "lg:flex-row-reverse bg-gray-50 rounded-2xl sm:rounded-3xl"
              } items-center gap-8 sm:gap-12 lg:gap-20 px-4`}
            >
              {/* Image Section */}
              <div className="flex-1 relative w-full">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-72 lg:h-80 object-contain rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-700 shadow-2xl"
                  />
                  {/* Floating Number Badge */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-xl shadow-lg">
                    {index + 1}
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-xl"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-4 sm:space-y-6 w-full">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50 px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                      محصول {index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs sm:text-sm rounded-full font-medium border border-gray-300 hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-3 sm:pt-4">
                  <Button
                    variant="outline"
                    className="group/btn px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  >
                    <span className="relative z-10">مشاهده جزئیات</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap Section */}
        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              مسیر توسعه محصولات
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              مراحل تکامل و بهبود مستمر محصولات چوگان
            </p>
          </div>

          <div className="relative px-4">
            {/* Timeline Line - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 rounded-full"></div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  phase: "مرحله ۱",
                  title: "توسعه پلتفرم اصلی",
                  description: "ایجاد زیرساخت معاملاتی و رابط کاربری",
                  status: "completed",
                  year: "۲۰۲۲",
                },
                {
                  phase: "مرحله ۲",
                  title: "اضافه کردن تحلیل‌های پیشرفته",
                  description: "ابزارهای تحلیلی و پیش‌بینی بازار",
                  status: "completed",
                  year: "۲۰۲۳",
                },
                {
                  phase: "مرحله ۳",
                  title: "اپلیکیشن موبایل",
                  description: "دسترسی آسان از طریق موبایل",
                  status: "completed",
                  year: "۲۰۲۴",
                },
                {
                  phase: "مرحله ۴",
                  title: "هوش مصنوعی و یادگیری ماشین",
                  description: "الگوریتم‌های پیشرفته برای تحلیل و پیش‌بینی",
                  status: "in-progress",
                  year: "۲۰۲۵",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot - Mobile: Left aligned, Desktop: Centered */}
                  <div
                    className={`md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white ${
                      item.status === "completed"
                        ? "bg-green-500"
                        : item.status === "in-progress"
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    } ${
                      index === 0
                        ? "self-start md:self-center"
                        : "self-start md:self-center"
                    }`}
                  ></div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    } ${index === 0 ? "mt-2 md:mt-0" : "mt-2 md:mt-0"}`}
                  >
                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3">
                        <span className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-100 px-2 sm:px-3 py-1 rounded-full">
                          {item.phase}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
          {[
            { number: "۸+", label: "سال تجربه", icon: Briefcase },
            { number: "۵۰+", label: "تیم چوگان", icon: Users },
            { number: "۹۵%", label: "رضایت مشتری", icon: Award },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300">
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
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
                  className="w-full h-56 object-contain group-hover:scale-110 transition-transform duration-700"
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

  const Footer = () => (
    <section
      ref={contactRef}
      id="contact"
      className="relative bg-gray-100 "
      dir="rtl"
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            <span className=" text-emerald-500">تماس با ما</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            ما همیشه برای همکاری در پروژه‌های معناداری که تفاوت ایجاد می‌کنند
            هیجان‌زده هستیم. با ما در تماس باشید.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 sm:mb-20">
          {[
            {
              icon: Mail,
              title: "ایمیل",
              info: "info@chogan.ir",
              description: "برای سوالات و همکاری",
              color: "text-blue-600",
              bgColor: "bg-blue-50",
              borderColor: "border-blue-200",
            },
            {
              icon: MapPin,
              title: "موقعیت",
              info: "تهران، ایران",
              description: "دفتر مرکزی ما",
              color: "text-purple-600",
              bgColor: "bg-purple-50",
              borderColor: "border-purple-200",
            },
          ].map((contact, index) => (
            <div key={index} className="group">
              <div className=" bg-white rounded-2xl p-6 sm:px-6  border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 sm:p-4 rounded-xl ${contact.bgColor} ${contact.borderColor} border group-hover:scale-110 transition-transform duration-300`}
                  >
                    <contact.icon
                      className={`w-6 h-6 sm:w-8 sm:h-8 ${contact.color}`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
                      {contact.info}
                    </p>
                    <p className="text-sm sm:text-base text-gray-500">
                      {contact.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              اندیشه پردازان چوگان
            </div>
            <p className="text-sm sm:text-base text-gray-500">
              © ۲۰۲۴ تمامی حقوق محفوظ است
            </p>
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
        <Footer />
      </main>
    </div>
  );
};
