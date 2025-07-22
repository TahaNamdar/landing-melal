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
  content?: string;
  height?: string;
};

const AnimatedSlide = () => {
  const items: Item[] = [
    {
      id: 1,
      title: "سفارش‌گذاری",
      description: "ارسال سریع و مدیریت هوشمند سفارش",
      content:
        "زیرساخت معاملاتی ملل تریدر به‌گونه‌ای توسعه داده شده که امکان ارسال سفارش‌ها با سرعت بسیار بالا فراهم باشد.",
      image: "/slide1.png",
      height: "500px",
    },
    {
      id: 2,
      title: "پرتفوی",
      description: "رصد لحظه‌ای سبد دارایی و تحلیل دقیق عملکرد معاملاتی",
      content:
        "کاربران در این بخش می‌توانند نمادهایی که در اختیار دارند را مشاهده کرده و از قیمت لحظه‌ای هر نماد، میانگین قیمت خرید، ارزش به‌روز شده کل سبد و همچنین میزان سود یا زیان حاصل از معاملات خود مطلع شوند.",
      image: "/slide2.png",
      height: "460px",
    },
    {
      id: 3,
      title: "آپشن",
      description: "معاملات آپشن در ملل‌تریدر؛ مدیریت حرفه‌ای موقعیت‌ها",
      content:
        "در بخش معاملات آپشن سامانه ملل‌تریدر، کاربران می‌توانند با تکیه بر اطلاعات جامع و ابزارهای تحلیلی پیشرفته، قراردادهای آپشن را بررسی کرده و با دقت موقعیت‌های خود را مدیریت کنند.",
      image: "/slide3.png",
      height: "440px",
    },
    {
      id: 4,
      title: "نمای بازار",
      description: "اطلاعات کلیدی شاخص‌ها و نمادها",
      content:
        "در سامانه ملل تریدر به نیاز شما برای دسترسی سریع و دقیق به اطلاعات بازار پاسخ دادیم. در بخش «نمای بازار» نمودار و اعداد شاخص بورس و فرابورس به صورت جداگانه نمایش داده می‌شود.",
      image: "/slide4.png",
      height: "440px",
    },
    {
      id: 5,
      title: "تحلیل تکنیکال",
      description: "گذشته‌ی بازار",
      content:
        "در سامانه ملل تریدر، ابزار پیشرفته‌ای در اختیار کاربران قرار گرفته که تحلیل تکنیکال را ساده‌تر، سریع‌تر و دقیق‌تر از قبل می‌سازد.",
      image: "/slide5.png",
      height: "440px",
    },
    {
      id: 6,
      title: "دیده‌بان",
      description: "رصد سریع نمادهای دلخواه",
      content:
        "در ملل تریدر این امکان را دارید که نمادهای موردنظر خود را به دیده‌بان اضافه کنید تا همیشه در دسترس‌تان باشند و نیازی به جست‌وجوی مکرر نداشته باشید.",
      image: "/slide6.png",
      height: "440px",
    },
    {
      id: 7,
      title: "هشدار شرطی",
      description: "آگاهی به‌موقع از تحولات بازار",
      content:
        "در ملل تریدر ابزار «هشدار شرطی» به شما این امکان را می‌دهد تا با تعیین شرایط دلخواه، بازار را به‌طور هوشمندانه زیر نظر داشته باشید.",
      image: "/slide7.png",
      height: "460px",
    },
    {
      id: 8,
      title: "عرضه اولیه",
      description: "ارسال آفلاین سفارش‌های عرضه اولیه",
      content:
        "در صورتی که به خرید عرضه‌های اولیه علاقه‌مند هستید اما فرصت سفارش‌گذاری در روز عرضه را ندارید، می‌توانید با استفاده از ملل تریدر، سفارش خرید خود را چند روز زودتر و به صورت آفلاین ثبت کنید.",
      image: "/slide8.png",
      height: "500px",
    },
  ];

  const [expandedItem, setExpandedItem] = useState<number | null>(4);

  const onMouseEnterHandler = (id: number) => {
    setExpandedItem(id);
  };

  const onMouseLeaveHandler = () => {
    setExpandedItem(null);
  };

  // Light theme gradient colors for each card
  const gradients = [
    "from-emerald-200 to-teal-300",
    "from-rose-200 to-amber-200",
    "from-emerald-200 to-teal-300",
    "from-rose-300 to-amber-200",
    "from-emerald-200 to-teal-300",
    "from-blue-200 to-blue-300",
    "from-emerald-200 to-teal-300",
    "from-blue-200 to-blue-300",
  ];

  return (
    <div
      dir="rtl"
      className="mx-auto mt-6 font-sans w-[75%] flex flex-col space-y-20 justify-center items-center  "
    >
      <AnimatedSlideMobile />
      <div className="gap-3 w-full justify-center items-center hidden md:flex">
        {items.map((item, index) => (
          <div
            //height
            key={item.id}
            className={cn(
              "rounded-2xl   relative overflow-hidden",
              "transition-all duration-500 ease-in-out",
              "cursor-pointer group",
              expandedItem === item.id
                ? "w-[400px] flex-[2]"
                : "hover:w-32 flex-1"
            )}
            onMouseEnter={() => onMouseEnterHandler(item.id)}
            onMouseLeave={onMouseLeaveHandler}
            style={{ height: item.height || "400px" }}
          >
            {/* Background with gradient and blur */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-b",
                gradients[index % gradients.length],
                "backdrop-blur-3xl opacity-80"
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
                  "text-xl font-bold text-gray-800 rotate-90 mr-[-10px] origin-top-right mt-32 whitespace-nowrap",
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
                  <p className="text-gray-800 font-bold animate-fade-in">
                    {item.description}
                  </p>
                  <p className="text-gray-600 text-sm animate-fade-in">
                    {item.content}
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
