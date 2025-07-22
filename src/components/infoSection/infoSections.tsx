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
  dark?: boolean;
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
  dark = false,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const ImageContent = imageComponent || (
    <img
      src={imageSrc}
      alt={imageAlt}
      className={`rounded-lg object-cover max-h-[400px] transition-opacity duration-300`}
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
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 `}
      ></div>
    </div>
  );

  const TextSection = (
    <div
      dir="rtl"
      className={`bg-slate mt-6  rounded-lg ${
        reverse ? "order-first md:order-last" : ""
      }`}
    >
      <div>
        <h2
          className={cn(
            "text-xl xl:text-2xl font-bold mb-8",
            dark ? "text-white" : "text-primary"
          )}
        >
          {title}

          <ul className="mt-4">
            {content?.map((item, index) => (
              <li
                key={index}
                className={cn(
                  "text-sm text-justify mt-1",
                  dark ? "text-white" : "text-gray-800"
                )}
              >
                {item}
              </li>
            ))}
          </ul>
        </h2>
        <Button
          className="bg-sky-600 text-white md:h-12 h-10   w-full md:w-[200px] mx-auto cursor-pointer"
          onClick={() => window.open(linkHref, "_blank")}
        >
          مشاهده سامانه
        </Button>
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
          <Button
            asChild
            className="bg-sky-600 text-white h-14 w-[40%] mx-auto cursor-pointer"
            onClick={() => window.open(linkHref, "_blank")}
          >
            مشاهده سامانه
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

  return (
    <>
      <div>
        <div
          className={cn(
            " flex-col   md:flex justify-around  md:flex-row  p-8 items-center mx-auto mt-4 min-h-[400px] h-[400px] rounded-4xl transition-all duration-300 ease-in-out "
          )}
        >
          <>
            {ImageSection}
            {TextSection}
          </>
        </div>
      </div>
      {MobileContent}
    </>
  );
};

export default InfoSection;
