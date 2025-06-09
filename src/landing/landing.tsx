import { useRef, useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation/Navigation";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { ServicesSection } from "@/components/ServicesSection/ServicesSection";
import { ProductsSection } from "@/components/ProductsSection/ProductsSection";

export const LandingPage: React.FC = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
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

      const offset = 100;

      if (position < section2Position - offset) {
        setActiveSection(1);
      } else if (position < section3Position - offset) {
        setActiveSection(2);
      } else {
        setActiveSection(3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navigation
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      <HeroSection sectionRef={section1Ref} scrollToSection={scrollToSection} />

      <ServicesSection
        sectionRef={section2Ref}
        scrollToSection={scrollToSection}
      />

      <ProductsSection
        sectionRef={section3Ref}
        scrollToSection={scrollToSection}
      />
    </div>
  );
};
