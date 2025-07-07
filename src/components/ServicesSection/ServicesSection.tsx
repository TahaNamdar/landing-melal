import { motion } from "framer-motion";
import { Suspense, RefObject, lazy } from "react";
import InfoSection from "@/components/infoSection/infoSections";
import {
  containerVariants,
  itemVariants,
  sectionVariants,
} from "../animations/variants";

const LazyInfoImage = lazy(
  () => import("@/components/LazyInfoImage/LazyInfoImage")
);

interface ServicesSectionProps {
  sectionRef: RefObject<HTMLDivElement | null>;
  scrollToSection: (sectionNumber: number) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  sectionRef,
  scrollToSection,
}) => {
  return (
    <motion.div
      ref={sectionRef}
      className="min-h-screen pt-24 flex flex-col justify-center bg-gray-800"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="lg:p-4 mx-auto w-[90%] xl:w-[96%]">
        {/* Info Sections */}
        <div className="flex 2xl:w-[60%] xl:mx-auto gap-4 flex-wrap lg:flex-nowrap border-b py-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full"
          >
            <motion.div variants={itemVariants}>
              <InfoSection
                reverse
                imageComponent={
                  <Suspense
                    fallback={
                      <div className="w-full h-64 bg-gray-200 animate-pulse" />
                    }
                  >
                    <LazyInfoImage
                      src="/Moving.png"
                      alt="انتقال به ملل تریدر"
                      className="w-[140px] lg:w-[300px]"
                    />
                  </Suspense>
                }
                title="انتقال به ملل تریدر"
                content={[
                  "کاربران سامانه تدبیر، با انتقال به ملل تریدر از امکانات پیشرفته و تجربه‌ای بهتر لذت ببرید.",
                ]}
                linkHref="https://melaltrader.ir/migration"
                linkText="انتقال به سامانه"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => scrollToSection(3)}
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
