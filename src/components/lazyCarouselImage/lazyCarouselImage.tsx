import { FC } from "react";

interface LazyCarouselImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyCarouselImage: FC<LazyCarouselImageProps> = ({
  src,
  alt,
  className,
}) => {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
};

export default LazyCarouselImage;
