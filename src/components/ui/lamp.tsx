"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
// import { Palette } from "lucide-react";

export default function LampDemo() {
  const [lightColor, setLightColor] = useState("#06b6");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const colorPickerRef = useRef<HTMLDivElement>(null);

  const handleColorChange = (color: string) => {
    setLightColor(color);
    setShowColorPicker(false);
  };

  // Close color picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest("button")
      ) {
        setShowColorPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <LampContainer lightColor={lightColor}>
      <motion.h1
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center font-medium tracking-tight text-transparent text-md md:text-2xl"
      >
        <p dir="rtl" className={`w-[80%] lg:w-[50%] mx-auto text-blue-500  `}>
          سیستم آنلاین تریدینگ ملل تریدر، راهی آسان و مطمئن برای ورود به دنیای
          معاملات آنلاین. با ابزارهای پیشرفته و رابط کاربری ساده، تجربه‌ای
          متفاوت در معاملات خود داشته باشید
        </p>
      </motion.h1>

      <div className="relative mt-4">
        {/* <button
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="px-4 py-2 bg-slate-800 text-white rounded-lg cursor-pointer hover:bg-slate-700 transition-colors relative z-50"
          aria-label="Change light color"
        >
          <Palette />
        </button> */}

        {showColorPicker && (
          <div
            ref={colorPickerRef}
            className=" absolute top-full z-[999] left-1/2 transform w-[150px]   -translate-x-1/2 mt-2 p-3 bg-slate-800 rounded-lg shadow-lg  border border-slate-700"
          >
            <div className="grid grid-cols-3 ">
              {["#06b6d4", "#3b82f6", "#8b5cf6"].map((color) => (
                <button
                  key={color}
                  className="w-8 h-8 cursor-pointer rounded-full hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800"
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                  aria-label={`Color ${color}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </LampContainer>
  );
}

interface LampContainerProps {
  children: React.ReactNode;
  className?: string;
  lightColor?: string;
}

export const LampContainer = ({
  children,
  className,
  lightColor = "#06b6d4",
}: LampContainerProps) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[330px] flex-col items-center justify-center overflow-hidden bg-white w-full rounded-xl  ",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-100 items-center justify-center isolate z-0">
        {/* Left light beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto right-1/2 h-32 overflow-visible w-[16rem]"
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, ${lightColor} 0%, transparent 50%, transparent 100%)`,
          }}
        >
          <div className="absolute w-[100%] left-0 bg-white h-20 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-20 h-[100%] left-0 bg-white bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right light beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto left-1/2 h-32 w-[16rem]"
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, transparent 0%, transparent 50%, ${lightColor} 100%)`,
          }}
        >
          <div className="absolute w-20 h-[100%] right-0 bg-white bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-white h-20 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Light effects */}
        <div className="absolute top-1/2 h-24 w-full trangray-y-6 bg-white blur-xl"></div>
        <div className="absolute top-1/2 z-50 h-24 w-full bg-transparent opacity-10 backdrop-blur-md"></div>

        {/* Main light source */}
        <div
          className="absolute inset-auto z-50 h-18 w-[16rem] -trangray-y-1/2 rounded-full opacity-50 blur-xl"
          style={{ backgroundColor: lightColor }}
        ></div>

        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "10rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-14 w-40 -translate-y-[3rem] rounded-full blur-xl"
          style={{ backgroundColor: lightColor }}
        ></motion.div>

        <motion.div
          initial={{ width: "12rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[16rem] -translate-y-[3.5rem]"
          style={{ backgroundColor: lightColor }}
        ></motion.div>

        <div className="absolute inset-auto z-40 h-24 w-full -translate-y-[6.4rem] bg-white"></div>
      </div>

      <div className="relative z-50 flex -translate-y-20 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
