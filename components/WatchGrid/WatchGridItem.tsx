import { ComponentProps } from "react";
import Image from "next/image";

import StarIcon from "/icons/star.svg";
import StarHalfIcon from "/icons/star-half.svg";

interface WatchGridItemProps extends ComponentProps<"section"> {
  title: string;
  imageUrl: string;
  vote: number;
  overview: string;
}

const WatchGridItem: React.FC<WatchGridItemProps> = ({
  title,
  vote,
  overview,
  imageUrl,
}) => {
  const numberStars = Math.round(vote / 2);
  const hasHalfStar = Math.round(vote * 2) / 2 - Math.floor(vote / 2) === 1;

  return (
    <li className="relative aspect-[2/3] group overflow-hidden rounded-b-2xl bg-transparent perspective p-4">
      <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-500">
        <div className="absolute backface-hidden w-full h-full">
          <Image
            className="w-full h-full rounded-2xl"
            src={imageUrl}
            alt="poster"
            fill
            loading="eager"
          />
        </div>
        <div className="absolute rotate-y-180 backface-hidden w-full h-full">
          <Image
            className="w-full h-full rounded-2xl"
            src={imageUrl}
            alt="poster"
            fill
            loading="eager"
          />
          <div className="p-4 flex flex-col h-full font-lato text-xl backdrop-blur-sm bg-semi-dark-1 rounded-2xl">
            <h3>{title}</h3>
            <div className="flex flex-row items-center text-sm">
              {new Array(numberStars).fill(0).map((_, index) => (
                <StarIcon key={index} />
              ))}
              {hasHalfStar && <StarHalfIcon />}
              <span className="ml-1">({vote})</span>
            </div>
            <div className="text-xs overflow-auto flex-1 custom-scrollbar -mr-4 pr-4">
              {overview}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

WatchGridItem.displayName = "WatchGridItem";

export default WatchGridItem;
