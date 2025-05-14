interface ICardProps {
  title: string;
  content?: string;
  onClick?: () => void;
  bgColor?: string;
  selected?: boolean;
  englishName?: string;
  imageUrl?: string;
}

export function Card({
  title,
  onClick,
  selected,
  englishName,
  imageUrl,
}: ICardProps) {
  return (
    <div
      className="hidden lg:block w-full p-2 md:w-1/2 lg:w-1/2"
      onClick={onClick}
    >
      <div
        dir="rtl"
        className="lg:h-[260px] overflow-hidden shadow cursor-pointer rounded-3xl bg-white flex flex-col gap-2 justify-center  relative hover:opacity-85 hover:border-2"
      >
        {imageUrl && (
          <div className="absolute  inset-0 flex items-center justify-center">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <div className="relative z-20 bg-white shadow-xl border-1    text-center w-full ">
          <p
            className={`text-xl ${
              selected ? "font-bold text-gray-800" : "font-normal text-gray-900"
            }`}
          ></p>
          <p className="text-gray-800 text-sm mt-1">{englishName}</p>
        </div>
      </div>
    </div>
  );
}
