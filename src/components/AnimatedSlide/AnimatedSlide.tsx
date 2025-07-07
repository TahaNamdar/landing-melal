import { cn } from "@/lib/utils";
import { useState } from "react";
import AnimatedSlideMobile from "./AnimatedSlideMobile";

type Item = {
  id: number;
  title: string;
  description: string;
  image?: string;
  backgroundColor?: string;
  textColor?: string;
  link?: string;
};

const AnimatedSlide = () => {
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
    {
      id: 4,
      title: "Athletics",
      description: "State-of-the-art sports facilities and teams",
      image: "/slide4.png",
    },
    {
      id: 5,
      title: "Arts",
      description: "Vibrant arts and cultural programs",
      image: "/slide5.png",
    },
    {
      id: 6,
      title: "Community",
      description: "Join our diverse and inclusive community",
      image: "/slide6.png",
    },
    {
      id: 7,
      title: "Admissions",
      description: "Start your journey with us today",
      image: "/slide7.png",
    },
  ];

  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const onMouseEnterHandler = (id: number) => {
    setExpandedItem(id);
  };

  const onMouseLeaveHandler = () => {
    setExpandedItem(null);
  };

  // Light theme gradient colors for each card
  const gradients = [
    "from-purple-300 to-blue-800",
    "from-rose-300 to-amber-800",
    "from-emerald-300 to-teal-800",
    "from-red-300 to-orange-800",
    "from-indigo-300 to-violet-800",
    "from-cyan-300 to-sky-800",
    "from-pink-300 to-fuchsia-800",
  ];

  return (
    <div className="mx-auto p-6 font-sans h-screen flex flex-col space-y-30 justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100">
      <h2 className="text-gray-800 text-2xl font-bold">title website</h2>
      <AnimatedSlideMobile />
      <div className="gap-4 w-full max-w-6xl justify-center items-center hidden md:flex">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "h-[500px] w-20 rounded-2xl relative overflow-hidden",
              "transition-all duration-500 ease-in-out",
              "cursor-pointer group",
              expandedItem === item.id
                ? "w-[400px] flex-[2]"
                : "hover:w-32 flex-1"
            )}
            onMouseEnter={() => onMouseEnterHandler(item.id)}
            onMouseLeave={onMouseLeaveHandler}
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
                  "absolute inset-0 bg-white/60 transition-all duration-500",
                  expandedItem === item.id
                    ? "bg-white/30"
                    : "group-hover:bg-white/50"
                )}
              />
            </div>

            {/* Content */}
            <div className="relative h-full p-6 flex flex-col">
              <h3
                className={cn(
                  "text-xl font-bold text-gray-800 rotate-90  origin-top-left mt-32 whitespace-nowrap",
                  "transition-all duration-300",
                  expandedItem === item.id
                    ? "rotate-0 mt-0"
                    : "group-hover:translate-x-2 ml-3"
                )}
              >
                {item.title}
              </h3>

              {expandedItem === item.id && (
                <div className="flex-1 flex flex-col mt-4 space-y-4">
                  <p className="text-gray-700 text-sm animate-fade-in">
                    {item.description}
                  </p>
                  {item.image && (
                    <div className="flex-1 relative rounded-xl overflow-hidden mt-4">
                      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent z-10" />
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain animate-fade-in"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedSlide;
