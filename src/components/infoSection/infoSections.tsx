import { cn } from "@/lib/utils";
import React from "react";

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

  return (
    <>
      <div>
        <div
          className={cn(
            " flex-col  md:flex justify-around  md:flex-row shadow-xl  p-8 items-center mx-auto mt-4 min-h-[400px] h-[400px] rounded-4xl transition-all duration-300 ease-in-out ",
            dark ? " bg-neutral-800 " : " bg-neutral-200  "
          )}
        >
          <>
            {ImageSection}
            {TextSection}
          </>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
