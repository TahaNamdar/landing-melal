import { useRef, useEffect, useState } from "react";
import { ServicesSection } from "@/components/ServicesSection/ServicesSection";
import { ServicesSection2 } from "@/components/ServicesSection2/ServicesSection";
import { ServicesSection3 } from "@/components/ServicesSection3/ServicesSection";
import AnimatedSlide from "@/components/AnimatedSlide/AnimatedSlide";

export const LandingPage: React.FC = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<number>(0);

  const scrollToSection = (sectionNumber: number) => {
    let ref;
    switch (sectionNumber) {
      case 1:
        ref = section1Ref;
        break;
      case 2:
        ref = section2Ref;
        break;
      case 3:
        ref = section3Ref;
        break;
      case 4:
        ref = section4Ref;
        break;
      case 5:
        ref = section5Ref;
        break;
      default:
        ref = section1Ref;
    }

    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
    setActiveSection(sectionNumber);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const section2Position = section2Ref.current?.offsetTop || 0;
      const section3Position = section3Ref.current?.offsetTop || 0;
      const section4Position = section4Ref.current?.offsetTop || 0;
      const section5Position = section5Ref.current?.offsetTop || 0;
      const offset = 100;

      if (position < section2Position - offset) {
        setActiveSection(1);
      } else if (position < section3Position - offset) {
        setActiveSection(2);
      } else if (position < section4Position - offset) {
        setActiveSection(3);
      } else if (position < section5Position - offset) {
        setActiveSection(4);
      } else {
        setActiveSection(5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* <Navigation
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      /> */}

      <AnimatedSlide />

      {/* <HeroSection sectionRef={section1Ref} scrollToSection={scrollToSection} /> */}

      <ServicesSection
        sectionRef={section2Ref}
        scrollToSection={scrollToSection}
      />

      <ServicesSection2
        sectionRef={section3Ref}
        scrollToSection={scrollToSection}
      />

      <ServicesSection3
        sectionRef={section4Ref}
        scrollToSection={scrollToSection}
      />

      {/* <ProductsSection
        sectionRef={section5Ref}
        scrollToSection={scrollToSection}
      /> */}
    </div>
  );
};
