import { motion } from "framer-motion";
import { AnimatedTestimonialSection } from "@/components/AnimatedTestimonialSection/AnimatedTestimonialSection";
import InfoSection from "@/components/infoSection/infoSections";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Suspense, lazy } from "react";
import Autoplay from "embla-carousel-autoplay";

const LazyCarouselImage = lazy(
  () => import("@/components/lazyCarouselImage/lazyCarouselImage")
);
const LazyInfoImage = lazy(
  () => import("@/components/LazyInfoImage/LazyInfoImage")
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
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
      ease: "easeOut",
    },
  },
};

export const LandingPage: React.FC = () => {
  return (
    <div>
      <div className="lg:p-4 mx-auto w-[90%] xl:w-[96%]">
        {/* Header Section */}

        <div>
          <motion.div
            dir="rtl"
            className="text-gray-900 break-words   w-[80%] lg:w-full  mx-auto justify-center text-3xl md:text-2xl 2xl:text-[46px] font-bold text-center mb-4 mt-4 pt-10 lg:pt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            با ملل تریدر به اوج بازار سرمایه برسید!{" "}
          </motion.div>
          <p className="border-b border-border w-[60%] mx-auto text-center pb-6 2xl:text-xl font-medium text-primary">
            داستان موفقیت شما از اینجا آغاز می‌شود: سریع، امن، و حرفه‌ای
          </p>
        </div>

        {/* Info Sections */}
        <div className="flex   2xl:w-[85%] xl:mx-auto  lg:gap-8  2xl:gap-20 flex-wrap lg:flex-nowrap border-b py-10 ">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" w-full lg:w-1/3
            "
          >
            <InfoSection
              imageComponent={
                <Suspense
                  fallback={
                    <div className="w-full h-64 bg-gray-200 animate-pulse" />
                  }
                >
                  <LazyInfoImage
                    src="/Analysis.png"
                    alt="ملل تریدر"
                    className="w-[140px] lg:w-[140px]"
                  />
                </Suspense>
              }
              title="ورود به سامانه"
              content={[
                "مشتریان فعلی ملل تریدر، به حساب خود وارد شوید و از ابزارهای حرفه‌ای ما استفاده کنید.",
              ]}
              linkHref="https://melaltrader.ir"
              linkText="انتقال به سامانه"
              reverse
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:flex gap-6   w-full lg:w-1/3 "
          >
            <motion.div variants={itemVariants} className="flex-1">
              <InfoSection
                imageComponent={
                  <Suspense
                    fallback={
                      <div className="w-full h-64 bg-gray-200 animate-pulse" />
                    }
                  >
                    <LazyInfoImage
                      src="/Moving.png"
                      alt="انتقال به ملل تریدر"
                      className="w-[140px] lg:w-[160px]"
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

          <motion.div variants={itemVariants} className="w-full lg:w-1/3">
            <InfoSection
              reverse
              imageComponent={
                <Suspense
                  fallback={
                    <div className="w-full h-64 bg-gray-200 animate-pulse" />
                  }
                >
                  <LazyInfoImage
                    src="/login.png"
                    alt="ثبت‌نام غیرحضوری"
                    className="w-[140px] lg:w-[140px]"
                  />
                </Suspense>
              }
              title="ثبت‌نام غیرحضوری    "
              content={[
                "فرآیند ثبت‌نام ساده و سریع",
                "دسترسی به پلتفرم‌های پیشرفته",
                "پشتیبانی شبانه‌روزی",
              ]}
              linkHref="https://portal.melaltrader.ir/"
              linkText="انتقال به سامانه"
            />
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <Carousel
            className="w-full mb-4 rounded-xl overflow-hidden hidden lg:block "
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            dir="rtl"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {[1, 2, 3].map((imageNum) => (
                <CarouselItem key={imageNum}>
                  <div className="p-1">
                    <Suspense
                      fallback={
                        <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded-lg" />
                      }
                    >
                      <LazyCarouselImage
                        src={`/${imageNum}.png`}
                        alt={`Slide ${imageNum}`}
                        className="mx-auto w-full h-[40px] sm:h-[70px] lg:h-[120px]  lg:object-cover rounded-lg"
                      />
                    </Suspense>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="xl:flex flex-row-reverse  rounded-xl w-[100%] mx-auto gap-4 mt-6 mb-8  "
        >
          <div>
            <AnimatedTestimonialSection />
          </div>
        </motion.div>
      </div>
      <footer className="pb-6 flex justify-center text-primary">
        Provided By <span className="ml-1  font-semibold">Chogan</span>
      </footer>
    </div>
  );
};
