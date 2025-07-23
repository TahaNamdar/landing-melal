import { motion } from "framer-motion";
import { RefObject } from "react";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import {
  containerVariants,
  itemVariants,
  sectionVariants,
} from "../animations/variants";

interface TestimonialsSectionProps {
  sectionRef: RefObject<HTMLDivElement | null>;
  scrollToSection: (sectionNumber: number) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  sectionRef,
  scrollToSection,
}) => {
  const testimonials = [
    {
      quote:
        "این پلتفرم به من کمک کرد تا در زمان کمتری، کارهای بیشتری انجام دهم. ابزارهای مدیریت وظایف آن بسیار کاربردی هستند.",
      name: "بازخورد مشتریان",
      designation: "مدیر پروژه",
      src: "/testimonial1.jpg",
    },
    {
      quote:
        "استفاده از این سیستم تاثیر شگفت‌انگیزی بر بهره‌وری تیم ما داشته است. ما اکنون می‌توانیم پروژه‌ها را با سرعت بیشتری به اتمام برسانیم.",
      name: "تجربه کاربران",
      designation: "مدیر محصول",
      src: "/testimonial2.jpg",
    },
    {
      quote:
        "قابلیت‌های ویژه این سامانه در زمینه مدیریت زمان باعث شده تا بتوانم تمام فعالیت‌های روزانه خود را به صورت منظم برنامه‌ریزی کنم.",
      name: "نظرات مشتریان",
      designation: "توسعه‌دهنده نرم‌افزار",
      src: "/testimonial3.jpg",
    },
  ];

  return (
    <motion.div
      ref={sectionRef}
      className="min-h-screen pt-24 flex flex-col justify-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="lg:p-4 mx-auto w-[90%] xl:w-[96%]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">نظرات کاربران ما</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            آنچه کاربران و مشتریان ما درباره خدمات و محصولات ما می‌گویند
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full"
        >
          <motion.div variants={itemVariants}>
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => scrollToSection(6)}
            className="px-6 py-3 bg-sky-600 text-white rounded-full flex items-center cursor-pointer animate-bounce"
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
        </motion.div>
      </div>
    </motion.div>
  );
};
