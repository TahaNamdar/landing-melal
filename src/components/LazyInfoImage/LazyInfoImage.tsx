import { FC } from "react";

interface LazyInfoImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyInfoImage: FC<LazyInfoImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
};

export default LazyInfoImage;
