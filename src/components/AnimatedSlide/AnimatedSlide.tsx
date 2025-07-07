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
      description: "",
      image: "/slide1.png",
    },
    {
      id: 2,
      title: "Campus",
      description: "",
      image: "/slide2.png",
    },
    {
      id: 3,
      title: "Campus",
      description: "",
      image: "/slide3.png",
    },
    {
      id: 4,
      title: "Campus",
      description: "",
      image: "/slide4.png",
    },
    {
      id: 5,
      title: "Campus",
      description: "",
      image: "/slide5.png",
    },
    {
      id: 6,
      title: "Campus",
      description: "",
      image: "/slide6.png",
    },
    {
      id: 7,
      title: "Campus",
      description: "",
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

  return (
    <div className=" mx-auto p-6 font-sans h-screen flex justify-center items-center bg-gradient-to-l from-gray-900 to-gray-950">
      <div className="flex gap-3   w-[50%] justify-center items-center">
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              "h-[400px] w-[120px] bg-accent rounded-lg ",
              "transition-all duration-300 ease-in-out",
              "overflow-hidden",
              "cursor-pointer",
              expandedItem === item.id ? "w-[400px]" : "hover:w-[220px]"
            )}
            onMouseEnter={() => onMouseEnterHandler(item.id)}
            onMouseLeave={onMouseLeaveHandler}
          >
            <div className="p-4">
              <h3 className="text-xl font-bold rotate-90 mt-10 ">
                {item.title}
              </h3>
              {expandedItem === item.id && (
                <p className="mt-2 text-sm opacity-0 animate-fade-in">
                  {item.description || "Additional details about this item..."}
                </p>
              )}
              {expandedItem === item.id && (
                <img src={item.image} alt={item.title} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedSlide;
