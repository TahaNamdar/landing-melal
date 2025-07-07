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
};

const AnimatedSlide = () => {
  const items: Item[] = [
    {
      id: 1,
      title: "سفارش‌گذاری",
      description: "ارسال سریع و مدیریت هوشمند سفارش",
      content:
        "زیرساخت معاملاتی ملل تریدر به‌گونه‌ای توسعه داده شده که امکان ارسال سفارش‌ها با سرعت بسیار بالا فراهم باشد. .",
      image: "/slide1.png",
    },
    {
      id: 2,
      title: "پرتفوی",
      description: "رصد لحظه‌ای سبد دارایی و تحلیل دقیق عملکرد معاملاتی",
      content:
        "                      کاربران در این بخش می‌توانند نمادهایی که در اختیار دارند را مشاهده کرده و از قیمت لحظه‌ای هر نماد، میانگین قیمت خرید، ارزش به‌روز شده کل سبد و همچنین میزان سود یا زیان حاصل از معاملات خود مطلع شوند.",
      image: "/slide2.png",
    },
    {
      id: 3,
      title: "آپشن",
      description: "معاملات آپشن در ملل‌تریدر؛ مدیریت حرفه‌ای موقعیت‌ها",
      content:
        "در بخش معاملات آپشن سامانه ملل‌تریدر، کاربران می‌توانند با تکیه بر اطلاعات جامع و ابزارهای تحلیلی پیشرفته، قراردادهای آپشن را بررسی کرده و با دقت موقعیت‌های خود را مدیریت کنند.   ",
      image: "/slide3.png",
    },
    {
      id: 4,
      title: "نمای بازار",
      description: "اطلاعات کلیدی شاخص‌ها و نمادها",
      content:
        "در سامانه ملل تریدر به نیاز شما برای دسترسی سریع و دقیق به اطلاعات بازار پاسخ دادیم. در بخش «نمای بازار» نمودار و اعداد شاخص بورس و فرابورس به صورت جداگانه نمایش داده می‌شود. همچنین نمادهای هر بازار دسته‌بندی شده و رنج قیمت فعلی آنها مشخص است.     ",
      image: "/slide4.png",
    },
    {
      id: 5,
      title: "تحلیل تکنیکال",
      description: "گذشته‌ی بازار",
      content:
        "      در سامانه ملل تریدر، ابزار پیشرفته‌ای در اختیار کاربران قرار گرفته که تحلیل تکنیکال را ساده‌تر، سریع‌تر و دقیق‌تر از قبل می‌سازد. این ابزار با رابط کاربری روان و اندیکاتورهای تحلیلی گسترده، مسیر تحلیل تکنیکال را برای همه کاربران – از مبتدی تا حرفه‌ای – هموار کرده و نقش مؤثری در ارتقاء سطح تصمیم‌گیری معاملاتی ایفا می‌کند.",
      image: "/slide5.png",
    },
    {
      id: 6,
      title: "دیده‌بان",
      description: "رصد سریع نمادهای دلخواه",
      content:
        "در ملل تریدر این امکان را دارید که نمادهای موردنظر خود را به دیده‌بان اضافه کنید تا همیشه در دسترس‌تان باشند و نیازی به جست‌وجوی مکرر نداشته باشید.    ",
      image: "/slide6.png",
    },
    {
      id: 7,
      title: "هشدار شرطی",
      description: "آگاهی به‌موقع از تحولات بازار",
      content:
        "در ملل تریدر ابزار «هشدار شرطی» به شما این امکان را می‌دهد تا با تعیین شرایط دلخواه، بازار را به‌طور هوشمندانه زیر نظر داشته باشید. کافی‌ست شرط‌های مورد نظر خود تعریف کنید تا به‌محض تحقق شرایط تعیین‌شده، سامانه از طریق پیام درون‌برنامه‌ای یا پیامک، شما را فوراً مطلع می‌سازد تا هیچ موقعیت مهمی را از دست ندهید.",
      image: "/slide7.png",
    },
    {
      id: 8,
      title: "عرضه اولیه",
      description: "ارسال آفلاین سفارش‌های عرضه اولیه",
      content:
        "در صورتی که به خرید عرضه‌های اولیه علاقه‌مند هستید اما فرصت سفارش‌گذاری در روز عرضه را ندارید، می‌توانید با استفاده از ملل تریدر، سفارش خرید خود را چند روز زودتر و به صورت آفلاین ثبت کنید. با این کار، سفارش شما در روز عرضه به شکل خودکار به هسته معاملات ارسال خواهد شد.",
      image: "/slide8.png", // Added missing image property
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
    "from-purple-300 to-blue-900",
    "from-rose-300 to-amber-900",
    "from-emerald-300 to-teal-900",
    "from-red-300 to-orange-900",
    "from-indigo-300 to-violet-900",
    "from-cyan-300 to-sky-900",
    "from-pink-300 to-fuchsia-900",
  ];

  return (
    <div
      dir="rtl"
      className="mx-auto p-6 font-sans h-screen  flex flex-col space-y-30 justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <h2 className="text-emerald-700 text-2xl font-bold">
        شرکت اندیشه پردازان چوگان
      </h2>
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
                "absolute inset-0  bg-gradient-to-b",
                gradients[index % gradients.length],
                "backdrop-blur-3xl"
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
                  "text-xl font-bold text-gray-800 rotate-90 mr-[-10px]  origin-top-right mt-32 whitespace-nowrap",
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
                  <p className="text-gray-700 font-bold animate-fade-in">
                    {item.description}
                  </p>{" "}
                  <p className="text-gray-700 text-sm animate-fade-in">
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
