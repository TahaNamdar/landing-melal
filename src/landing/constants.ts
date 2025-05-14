type Card = {
  id: string;
  title: string;
  content: string;
  bgColor: string;
  englishName?: string;
  imgUrl?: string;
};

export const cards: Card[] = [
  {
    id: "card1",
    title: "سامانه ملل تریدر",
    content: "اگر مشتری کارگزاری ملل نیستید اینجا کلیک کنید",
    bgColor: "bg-white",
    englishName: "melaltrader.ir",
    imgUrl: "/melall.png",
  },
  {
    id: "card2",
    title: "سامانه غیر حضوری",
    content:
      "کاربران موجود می‌توانند با استفاده از نام کاربری و رمز عبور خود، به سادگی وارد سیستم شوند و از امکانات پیشرفته ملل تریدر بهره‌مند گردند. دسترسی سریع به پورتفوی، اطلاعات بازار و ابزارهای معاملاتی تنها با یک کلیک امکان‌پذیر است.",
    bgColor: "bg-white",
    englishName: "portal.melaltrader.ir",
    imgUrl: "/online.png",
  },
  {
    id: "card3",
    title: "سامانه انتقال به ملل تریدر",
    content:
      "مشتریان کارگزاری که قبلاً در سیستم‌ تدبیرپرداز فعالیت داشته‌اند، می‌توانند به راحتی حساب خود را به ملل تریدر منتقل کنند. این انتقال بدون نیاز به ثبت‌نام مجدد و با حفظ تمامی اطلاعات و سوابق معاملاتی انجام می‌شود.",
    bgColor: "bg-white",
    englishName: "melaltrader.ir/migration",
    imgUrl: "/transformimage.png",
  },
];
