import { motion } from "framer-motion";
import { Suspense, RefObject, lazy } from "react";
import { AnimatedTestimonialSection } from "@/components/AnimatedTestimonialSection/AnimatedTestimonialSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  containerVariants,
  itemVariants,
  sectionVariants,
} from "../animations/variants";

const LazyCarouselImage = lazy(
  () => import("@/components/lazyCarouselImage/lazyCarouselImage")
);

interface ProductsSectionProps {
  sectionRef: RefObject<HTMLDivElement | null>;
  scrollToSection: (sectionNumber: number) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  sectionRef,
  scrollToSection,
}) => {
  return (
    <motion.div
      ref={sectionRef}
      className="min-h-screen pt-2 flex flex-col justify-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="lg:p-4 mx-auto w-[90%] xl:w-[96%]">
        <motion.div variants={itemVariants}>
          <Carousel
            className="w-full mb-4 rounded-xl overflow-hidden hidden lg:block"
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
                        className="mx-auto w-full h-[40px] sm:h-[70px] lg:h-[120px] lg:object-cover rounded-lg"
                      />
                    </Suspense>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="xl:flex flex-row-reverse rounded-xl w-[100%] mx-auto gap-4 mt-6 mb-8"
        >
          <div>
            <AnimatedTestimonialSection />
          </div>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => scrollToSection(1)}
            className="px-6 py-3 bg-sky-600 text-white rounded-full flex items-center cursor-pointer animate-bounce"
          >
            <span>بازگشت به بالا</span>
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
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
