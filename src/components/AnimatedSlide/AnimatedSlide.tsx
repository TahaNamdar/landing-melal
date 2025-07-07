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

  // Gradient colors for each card
  const gradients = [
    "from-purple-900/80 to-blue-900/80",
    "from-rose-900/80 to-amber-900/80",
    "from-emerald-900/80 to-teal-900/80",
    "from-red-900/80 to-orange-900/80",
    "from-indigo-900/80 to-violet-900/80",
    "from-cyan-900/80 to-sky-900/80",
    "from-pink-900/80 to-fuchsia-900/80",
  ];

  return (
    <div className="mx-auto p-6 font-sans h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-950">
      <h2 className="text-white text-2xl font-bold mb-30">title website</h2>
      <div className="flex gap-4 w-full max-w-6xl justify-center items-center">
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
              {/* Dark overlay that reduces on hover */}
              <div
                className={cn(
                  "absolute inset-0 bg-black/60 transition-all duration-500",
                  expandedItem === item.id
                    ? "bg-black/30"
                    : "group-hover:bg-black/50"
                )}
              />
            </div>

            {/* Content */}
            <div className="relative h-full p-6 flex flex-col">
              <h3
                className={cn(
                  "text-xl font-bold text-white rotate-90 ml-20. origin-top-left mt-32 whitespace-nowrap",
                  "transition-all duration-300",
                  expandedItem === item.id
                    ? "rotate-0 mt-0"
                    : "group-hover:translate-x-2"
                )}
              >
                {item.title}
              </h3>

              {expandedItem === item.id && (
                <div className="flex-1 flex flex-col mt-4 space-y-4">
                  <p className="text-white/80 text-sm animate-fade-in">
                    {item.description}
                  </p>
                  {item.image && (
                    <div className="flex-1 relative rounded-xl overflow-hidden mt-4">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
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
    </div>
  );
};

export default AnimatedSlide;
