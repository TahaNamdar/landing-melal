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
  content?: string;
};

const AnimatedSlideMobile = () => {
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
      image: "/slide8.png",
    },
  ];

  const [expandedItem, setExpandedItem] = useState<number | null>(2);

  const onClickHandler = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  // Lighter gradient colors for each card
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
    <>
      <div className="flex-col space-y-1 w-full  justify-center  items-center md:hidden">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "h-[40px] w-full rounded-sm relative overflow-hidden",
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
            <div className="relative h-full p-6 flex flex-col   justify-center">
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
