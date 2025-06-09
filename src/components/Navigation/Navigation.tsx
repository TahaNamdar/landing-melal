import { motion } from "framer-motion";

interface NavigationProps {
  scrollToSection: (sectionNumber: number) => void;
  activeSection: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  scrollToSection,
  activeSection,
}) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 text-sm 2xl:text-base right-0 z-50 bg-white/5 mx-auto backdrop-blur-md shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-center space-x-6" dir="rtl">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(1)}
            className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeSection === 1
                ? "font-medium border text-white"
                : "hover:bg-white/20"
            }`}
          >
            صفحه اصلی
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(2)}
            className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeSection === 2 ? "font-medium border" : "hover:bg-white/20"
            }`}
          >
            خدمات ویژه ملل تریدر
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(3)}
            className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeSection === 3 ? "font-medium border" : "hover:bg-white/20"
            }`}
          >
            معرفی محصولات
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};
