import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
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
} from "lucide-react";

export const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const navigation = [
    { name: "خانه", id: "home" },
    { name: "درباره من", id: "about" },
    { name: "نمونه کارها", id: "portfolio" },
    { name: "تماس", id: "contact" },
  ];

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

  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const Header = () => (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-sm sticky top-0 z-50"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-gray-900"
          >
            چوگان
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-reverse space-x-8">
            {navigation.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setCurrentPage(item.id)}
                className={`font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-gray-200"
            >
              {navigation.map((item) => (
                <motion.button
                  key={item.id}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-right py-3 px-4 font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );

  const HomePage = () => (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-gradient-to-br from-indigo-50 via-white to-purple-50"
      dir="rtl"
    >
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              خلق تجربه‌های
              <span className="text-indigo-600"> دیجیتال</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              طراح ارشد UI/UX با بیش از ۸ سال تجربه در ایجاد طراحی‌های کاربر
              محور که نتایج کسب‌وکار را به همراه دارند و کاربران را خوشحال
              می‌کنند.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage("portfolio")}
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center"
              >
                مشاهده کارهای من
                <ChevronRight className="mr-2 h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage("contact")}
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200"
              >
                تماس با من
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616c64c29bf?w=500&h=600&fit=crop&crop=face"
              alt="سارا احمدی"
              className="rounded-2xl shadow-2xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-2xl font-bold text-indigo-600">+۱۵۰</div>
              <div className="text-gray-600">پروژه تکمیل شده</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { number: "+۸", label: "سال تجربه", icon: Briefcase },
              { number: "+۱۵۰", label: "پروژه تکمیل شده", icon: Eye },
              { number: "+۵۰", label: "مشتری راضی", icon: Users },
              { number: "٪۹۵", label: "رضایت مشتری", icon: Award },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-center mb-4"
                >
                  <stat.icon className="h-8 w-8 text-indigo-600" />
                </motion.div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );

  const AboutPage = () => (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-white"
      dir="rtl"
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 mb-8"
            >
              درباره من
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="prose prose-lg text-gray-600 mb-8"
            >
              <p>
                من یک طراح ارشد UI/UX پرشور با بیش از ۸ سال تجربه در تبدیل مسائل
                پیچیده به تجربه‌های دیجیتال شهودی و زیبا هستم. رویکرد من ترکیبی
                از تحقیق کاربری، بینش‌های مبتنی بر داده و طراحی خلاق برای ایجاد
                محصولاتی است که کاربران دوست دارند و کسب‌وکارها آن‌ها را ارزشمند
                می‌دانند.
              </p>
              <p>
                من این افتخار را داشته‌ام که با استارتاپ‌ها، شرکت‌های فورچون ۵۰۰
                و همه چیز در این بین کار کنم و به آن‌ها کمک کنم تا اهدافشان را
                از طریق طراحی دقیق و استراتژی تجربه کاربری محقق کنند.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                فلسفه طراحی من
              </h3>
              <div className="space-y-4">
                {[
                  "طراحی کاربر محور اختیاری نیست—ضروری است",
                  "داده و همدلی باید هر تصمیم طراحی را راهنمایی کنند",
                  "سادگی، نهایت پیچیدگی است",
                  "طراحی عالی تا زمانی که گم نشود نامرئی است",
                ].map((principle, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 ml-4 flex-shrink-0"></div>
                    <p className="text-gray-600">{principle}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 mb-8"
            >
              مهارت‌ها و تخصص‌ها
            </motion.h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <skill.icon className="h-5 w-5 text-indigo-600 ml-2" />
                      <span className="font-medium text-gray-900">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-indigo-600 font-medium">
                      ٪{skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-indigo-600 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ابزارهای من
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  "فیگما",
                  "اسکچ",
                  "ادوبی XD",
                  "پرینسیپل",
                  "ایین‌ویژن",
                  "میرو",
                  "هاتجار",
                  "میز",
                  "یوزرتستینگ",
                ].map((tool, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 p-3 rounded-lg text-center text-sm font-medium text-gray-700"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );

  const PortfolioPage = () => (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-gray-50"
      dir="rtl"
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            کارهای برجسته
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            مجموعه‌ای از پروژه‌هایی که رویکرد من را در حل چالش‌های پیچیده طراحی
            و ایجاد تجربه‌های کاربری معنادار نشان می‌دهند.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-indigo-600 bg-opacity-20 flex items-center justify-center"
                >
                  <Eye className="h-8 w-8 text-white" />
                </motion.div>
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
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-200 flex items-center"
                >
                  مشاهده مطالعه موردی
                  <ExternalLink className="mr-2 h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
          >
            مشاهده همه پروژه‌ها
          </motion.button>
        </motion.div>
      </section>
    </motion.div>
  );

  const ContactPage = () => (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-white"
      dir="rtl"
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 mb-8"
            >
              بیایید با هم کار کنیم
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8"
            >
              من همیشه برای همکاری در پروژه‌های معناداری که تفاوت ایجاد می‌کنند
              هیجان‌زده هستم. چه به بازطراحی کامل محصول نیاز داشته باشید یا
              بخواهید تجربه کاربری موجودتان را بهبود دهید، دوست دارم از شما
              بشنوم.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {[
                { icon: Mail, title: "ایمیل", info: "sara.ahmadi@email.com" },
                { icon: MapPin, title: "موقعیت", info: "تهران، ایران" },
                { icon: Phone, title: "تلفن", info: "۰۹۱۲۳۴۵۶۷۸۹" },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="w-6 h-6 text-indigo-600 mt-1 ml-4">
                    <contact.icon className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {contact.title}
                    </h3>
                    <p className="text-gray-600">{contact.info}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  نام کامل
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="نام کامل شما"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  آدرس ایمیل
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  نوع پروژه
                </label>
                <select
                  id="project"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                >
                  <option value="">انتخاب نوع پروژه</option>
                  <option value="web-design">طراحی وب</option>
                  <option value="mobile-app">اپلیکیشن موبایل</option>
                  <option value="ui-ux-audit">بررسی UI/UX</option>
                  <option value="design-system">سیستم طراحی</option>
                  <option value="other">سایر</option>
                </select>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  جزئیات پروژه
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                  placeholder="درباره پروژه، زمان‌بندی و نیازهای خاص خود بگویید..."
                ></textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
              >
                ارسال پیام
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "portfolio":
        return <PortfolioPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AnimatePresence mode="wait">{renderCurrentPage()}</AnimatePresence>
      </main>
    </div>
  );
};
