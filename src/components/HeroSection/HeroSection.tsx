import { motion } from "framer-motion";
import { RefObject } from "react";
import { sectionVariants } from "../animations/variants";
import AnimatedSlide from "../AnimatedSlide/AnimatedSlide";

interface HeroSectionProps {
  sectionRef: RefObject<HTMLDivElement | null>;
  scrollToSection: (sectionNumber: number) => void;
}
//bg-[url('/bg.avif')]  before:h-full before:bg-black/50 before:z-[1]
export const HeroSection: React.FC<HeroSectionProps> = ({ sectionRef }) => {
  return (
    <motion.div
      ref={sectionRef}
      className="h-screen   flex flex-col justify-center items-center bg-[#0c363cce] bg-cover bg-center bg-no-repeat bg-fixed relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full "
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="lg:p-4 mx-auto  w-[90%] xl:w-[96%] relative z-10">
        {/* Header Section */}
        <div className="mb-10">
          <motion.div
            dir="rtl"
            className="text-white break-words w-[90%] lg:w-full mx-auto justify-center text-3xl md:text-2xl 2xl:text-[46px] font-bold text-center mb-4 lg:mt-4  lg:pt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            ملل تریدر: سفری هوشمند به قله‌های مالی
          </motion.div>
          <p className="border-b border-white/30 w-[60%] mx-auto text-center pb-6 2xl:text-lg font-medium text-white">
            با پلتفرم پیشرفته ما، معاملات خود را سریع، امن و حرفه‌ای مدیریت کنید
          </p>
        </div>
        {/* 
        <motion.div
          className="w-full py-4 lg:py-12 relative z-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="relative flex flex-col-reverse md:flex-row justify-between items-center gap-4">
              <motion.div
                variants={itemVariants}
                className="flex flex-col z-30 items-center w-full md:w-1/3 border border-white/10  lg:h-[240px] p-10 rounded-4xl cursor-pointer"
              >
                <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  فصل جدیدی با ملل تریدر
                </h3>
                <p className="text-amber-50 text-center text-sm px-4">
                  کاربران سامانه تدبیر، با انتقال به ملل تریدر از امکانات
                  پیشرفته و تجربه‌ای بهتر لذت ببرید
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center w-full md:w-1/3 mb-8 md:mb-0 border border-white/10 h-[240px] p-10 rounded-4xl cursor-pointer"
              >
                <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  ادامه داستان شما
                </h3>
                <p className="text-amber-50 text-center text-sm px-4">
                  مشتریان فعلی ملل تریدر، به حساب خود وارد شوید و از ابزارهای
                  حرفه‌ای ما استفاده کنید{" "}
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center w-full md:w-1/3 mb-8 md:mb-0 border border-white/10 h-[240px] p-10 rounded-4xl cursor-pointer"
              >
                <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  شروع داستان سرمایه‌گذاری شما
                </h3>
                <p className="text-amber-50 text-center text-sm px-4">
                  با ثبت‌نام غیرحضوری در ملل تریدر، در کمتر از چند دقیقه به
                  دنیای معاملات حرفه‌ای قدم بگذارید
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div> */}

        <AnimatedSlide />

        {/* <motion.div
          className="mt-12 flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => scrollToSection(2)}
            className="px-6 mb-[40px]  py-3 bg-sky-600 text-white rounded-full cursor-pointer flex items-center animate-bounce"
          >
            <span>رفتن به بخش بعدی</span>
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </motion.div> */}
      </div>
    </motion.div>
  );
};
