import { cards } from "@/landing/constants";
import { Card } from "../card/card";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function MobileSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleCardClick = (id: string) => {
    setSelectedId(id);
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardElement = document.getElementById(id);
    if (cardElement) {
      const containerRect = container.getBoundingClientRect();
      const cardRect = cardElement.getBoundingClientRect();
      const scrollPosition =
        cardRect.top - containerRect.top + container.scrollTop;
      container.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      dir="rtl"
      className={`hidden lg:flex flex-col items-center md:flex-row p-4 md:p-8 w-full mx-auto gap-8 rounded-xl  bg-gradient-to-r from-zinc-0 to-zinc-50 shadow 
    transition-opacity transition-transform duration-700 ease-out
    ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
    >
      <section className="lg:w-1/2">
        <section className="flex flex-wrap -mx-2">
          {cards.map(({ id, title, content, bgColor, englishName, imgUrl }) => (
            <Card
              key={id}
              title={title}
              content={content}
              onClick={() => handleCardClick(id)}
              bgColor={bgColor}
              selected={selectedId === id}
              englishName={englishName}
              imageUrl={imgUrl}
            />
          ))}
          <div></div>
        </section>
      </section>
      <section className="justify-center xl:w-1/2 hidden lg:flex bg-white rounded-r-3xl p-10">
        <div className="relative w-[280px] max-w-[340px] max-h-[500px] aspect-[1/2] rounded-[40px]  overflow-hidden shadow-2xl border-2 border-slate-600 flex flex-col items-center">
          {/* Top notch */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[100px] h-2 bg-gradient-to-b from-slate-900 to-slate-800 rounded-b-[45px] rounded-t-[20px] border border-slate-700 shadow-inner" />
          {/* Left side volume buttons */}
          <div className="absolute left-3 top-[140px] flex flex-col space-y-4">
            <div className="w-[6px] h-16 bg-gradient-to-b from-slate-200 to-slate-200 rounded-full shadow-inner" />
            <div className="w-[6px] h-12 bg-gradient-to-b from-slate-200 to-slate-200 rounded-full shadow-inner" />
          </div>
          {/* Right side power button */}
          <div className="absolute right-3 top-[180px] w-[6px] h-28 bg-gradient-to-b from-slate-100 to-slate-200 rounded-full shadow-inner" />
          {/* Screen area */}
          <div
            ref={scrollContainerRef}
            className="mt-24 mb-16 rounded-2xl   w-full max-w-[340px] h-[80%] max-h-[560px] overflow-y-auto scroll-smooth px-8 py-8 space-y-2 scroll-container"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#fefe transparent",
              ...({
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#fefe",
                  borderRadius: "4px",
                },
              } as React.CSSProperties),
            }}
          >
            {cards.map(({ id, title, content, bgColor }) => (
              <div
                key={id}
                id={id}
                className={`${bgColor} rounded-xl p-6  min-h-[180px] transition-transform duration-300 hover:scale-[1.03] ${
                  selectedId === id ? " border-amber-100" : ""
                }`}
                dir="rtl"
              >
                <h2
                  className={`text-xl   mb-3 ${
                    selectedId === id
                      ? "font-bold text-primary"
                      : "font-normal text-primary"
                  }`}
                >
                  {title}
                </h2>
                <p className="text-gray-800 text-sm leading-relaxed">
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
