import { cn } from "@/lib/utils";
import { useState } from "react";

type Item = {
  id: number;
  title: string;
  description: string;
  image?: string;
  backgroundColor?: string;
  textColor?: string;
  link?: string;
};

const AnimatedSlideMobile = () => {
  const items: Item[] = [
    {
      id: 1,
      title: "Campus",
      description: "Explore our beautiful campus facilities and student life",
      image: "/slide1.png",
    },
    {
      id: 2,
      title: "Academics",
      description: "Discover our world-class academic programs",
      image: "/slide2.png",
    },
    {
      id: 3,
      title: "Research",
      description: "Cutting-edge research opportunities for students",
      image: "/slide3.png",
    },
  ];

  const [expandedItem, setExpandedItem] = useState<number | null>(1);

  const onClickHandler = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  // Lighter gradient colors for each card
  const gradients = [
    "from-purple-500/80 to-blue-900/80",
    "from-rose-500/80 to-amber-900/80",
    "from-emerald-500/80 to-teal-900/80",
    "from-red-500/80 to-orange-900/80",
    "from-indigo-500/80 to-violet-900/80",
    "from-cyan-500/80 to-sky-900/80",
    "from-pink-500/80 to-fuchsia-900/80",
  ];

  return (
    <>
      <div className="flex-col space-y-1 w-full max-w-6xl justify-center  items-center md:hidden">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "h-[60px] w-full rounded-2xl relative overflow-hidden",
              "transition-all duration-500 ease-in-out",
              "cursor-pointer",
              expandedItem === item.id ? "h-auto" : "hover:opacity-90"
            )}
            onClick={() => onClickHandler(item.id)}
          >
            {/* Background with gradient and blur */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-b",
                gradients[index % gradients.length],
                "backdrop-blur-sm"
              )}
            >
              {/* Light overlay that reduces on hover */}
              <div
                className={cn(
                  "absolute inset-0 bg-white/30 transition-all duration-500",
                  expandedItem === item.id ? "bg-white/20" : "hover:bg-white/40"
                )}
              />
            </div>

            {/* Content */}
            <div className="relative h-full p-6 flex flex-col items-end justify-center">
              <h3
                className={cn(
                  "text-xl font-bold text-gray-800", // Changed to dark text for better contrast
                  "transition-all duration-300 "
                )}
              >
                {item.title}
              </h3>

              {expandedItem === item.id && (
                <div className="flex-1 flex flex-col mt-4 space-y-4">
                  <p className="text-gray-700/80 text-sm animate-fade-in">
                    {" "}
                    {/* Darker text for readability */}
                    {item.description}
                  </p>
                  {item.image && (
                    <div className="flex-1 relative rounded-xl overflow-hidden mt-4">
                      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent z-10" />{" "}
                      {/* Lighter overlay */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover animate-fade-in"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimatedSlideMobile;
