import { ComponentProps } from "react";
import Image from "next/image";

interface WatchGridItemProps extends ComponentProps<"section"> {
  title: string;
  imageUrl: string;
}

const WatchGridItem: React.FC<WatchGridItemProps> = ({
  children,
  title,
  imageUrl,
}) => {
  return (
    <li className="relative aspect-[2/3]">
      <Image
        className="w-full h-full rounded-2xl"
        src={imageUrl}
        alt="poster"
        fill
        loading="eager"
      />
      {children}
    </li>
  );
};

WatchGridItem.displayName = "WatchGridItem";

export default WatchGridItem;
