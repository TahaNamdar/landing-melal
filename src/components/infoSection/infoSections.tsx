// import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface InfoSectionProps {
  imageSrc?: string;
  imageAlt?: string;
  imageComponent?: React.ReactNode;
  title: string;
  content?: string[];
  linkHref: string;
  linkText?: string;
  reverse?: boolean;
  maxImageHeight?: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  imageSrc,
  imageAlt = "",
  imageComponent,
  title,
  linkHref,
  reverse = false,
  maxImageHeight = "400px",
  content,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const ImageContent = imageComponent || (
    <img
      src={imageSrc}
      alt={imageAlt}
      className={`rounded-lg object-cover max-h-[400px] transition-opacity duration-300 ${
        isHovered ? "opacity-0" : "opacity-100"
      }`}
      style={{ maxHeight: maxImageHeight }}
      loading="lazy"
    />
  );

  const ImageSection = (
    <div
      className={`flex items-center justify-center relative ${
        reverse ? "order-last md:order-first" : ""
      }`}
    >
      {ImageContent}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );

  const TextSection = (
    <div
      dir="rtl"
      className={`bg-slate  rounded-lg ${
        reverse ? "order-first md:order-last" : ""
      }`}
    >
      <div>
        <h2
          className={cn(
            "text-xl xl:text-2xl text-center font-bold mb-8 text-primary",
            isHovered && "text-sky-600 text-xl"
          )}
        >
          {title}

          <ul className="hidden lg:block mt-4">
            {content?.map((item, index) => (
              <li
                key={index}
                className="text-gray-800 text-sm text-justify px-6 mt-1 "
              >
                {item}
              </li>
            ))}
          </ul>
        </h2>
      </div>
    </div>
  );

  const MobileContent = (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerContent className="h-[40vh]">
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>
            <ul className="text-gray-900 text-sm px-6 mt-4">
              {content?.map((item, index) => (
                <li dir="rtl" key={index} className="mt-2 text-justify">
                  {item}
                </li>
              ))}
            </ul>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button asChild className="bg-sky-600 text-white h-14">
            <a href={linkHref} target="_blank" rel="noopener noreferrer">
              مشاهده سامانه
            </a>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

  const handleClick = (e: React.MouseEvent) => {
    if (window.innerWidth < 1024) {
      e.preventDefault();
      setIsDrawerOpen(true);
    }
  };

  return (
    <>
      <a
        href={linkHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <div
          className={cn(
            "shadow-sm bg-white  flex justify-center lg:flex-col hover:opacity-85 md:flex-row gap-6 p-8 items-center mx-auto mt-4 min-h-[400px] h-[400px] rounded-4xl transition-all duration-300 ease-in-out hover:scale-[1.01]"
          )}
        >
          <>
            {ImageSection}
            {TextSection}
          </>
        </div>
      </a>
      {MobileContent}
    </>
  );
};

export default InfoSection;
