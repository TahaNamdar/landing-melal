import { AnimatedTestimonials } from "../ui/animated-testimonials";

export function AnimatedTestimonialSection() {
  const testimonials = [
    {
      quote:
        "در زمانی کوتاه صاحب حساب کاربری شوید! مشتریان می‌توانند بدون مراجعه حضوری و تنها با چند کلیک، فرآیند احراز هویت و ثبت‌نام در کارگزاری را تکمیل کنند و عضوی از چوگان شوند.",
      name: "سامانه غیر حضوری",
      designation: "",
      src: "/online.png",
      url: "https://portal.melaltrader.ir/",
    },
    {
      quote:
        "با ورود به سیستم ملل تریدر، دسترسی کامل به امکانات پیشرفته معاملاتی و مدیریت سرمایه خود خواهید داشت. این پلتفرم با ارائه ابزارهای متنوع، تجربه معاملاتی بی‌نظیری را برای شما فراهم می‌کند.",
      name: "سامانه ملل تریدر",
      designation: "",
      src: "/melalll.png",
      url: "https://melaltrader.ir",
    },
    {
      quote:
        "مشتریان کارگزاری که قبلاً در سیستم‌ تدبیرپرداز فعالیت داشته‌اند، می‌توانند به راحتی حساب خود را به ملل تریدر منتقل کنند. این انتقال بدون نیاز به ثبت‌نام مجدد و با حفظ تمامی اطلاعات و سوابق معاملاتی انجام می‌شود.",
      name: "سامانه انتقال به ملل تریدر",
      designation: "",
      src: "/migiration.png",
      url: "https://melaltrader.ir/migration",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
