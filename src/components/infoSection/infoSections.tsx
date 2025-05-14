// import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

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
}) => {
  const ImageContent = imageComponent || (
    <img
      src={imageSrc}
      alt={imageAlt}
      className="rounded-lg object-cover max-h-[400px]"
      style={{ maxHeight: maxImageHeight }}
      loading="lazy"
    />
  );

  const ImageSection = (
    <div
      className={` flex items-center justify-center  ${
        reverse ? "order-last md:order-first" : ""
      }`}
    >
      {ImageContent}
    </div>
  );

  const TextSection = (
    <div
      dir="rtl"
      className={`  bg-slate p-6    rounded-lg  ${
        reverse ? "order-first md:order-last" : ""
      }`}
    >
      <div>
        <h2 className="text-xl xl:text-2xl text-center mt-4 font-bold mb-8 text-primary">
          {title}
        </h2>
        {/* <ul className="list-disc list-inside mb-8 text-gray-800">
          {content.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul> */}
      </div>

      {/* <a href={linkHref} target="_blank" rel="noopener noreferrer">
        <button className="bg-primary mx-auto    cursor-pointer hover:opacity-60 flex items-center gap-4 text-white font-medium py-3 px-8 rounded-full transition duration-300">
          <p>{linkText}</p>
          <ArrowLeft size={18} />
        </button>
      </a> */}
    </div>
  );

  return (
    <a href={linkHref} target="_blank" rel="noopener noreferrer">
      <div
        className={cn(
          "shadow-sm  bg-white h-[140px] lg:h-[440px] flex justify-center lg:flex-col hover:opacity-85 md:flex-row gap-6 p-8 items-center mx-auto   mt-4 rounded-3xl  lg:rounded-[80px]   transition-all duration-300 ease-in-out hover:scale-[1.1]",
          reverse ? "2xl:w-[90%] 2xl:h-[380px] 2xl:mt-10" : ""
        )}
      >
        <>
          {ImageSection}
          {TextSection}
        </>
      </div>
    </a>
  );
};

export default InfoSection;
