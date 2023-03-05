import { ComponentProps, useContext } from "react";

import LeftArrowIcon from "/icons/left-arrow.svg";
import Button from "../Button";
import { WatchCarrouselContext } from "./WatchCarrousel";

interface WatchCarrouselEntryProps extends ComponentProps<"section"> {
  title: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
}

const WatchCarrouselEntry: React.FC<WatchCarrouselEntryProps> = ({
  title,
  imageUrl,
}) => {
  const { prevChild, nextChild } = useContext(WatchCarrouselContext);

  return (
    <div
      style={{ backgroundImage: `url('${imageUrl}')` }}
      className={
        "absolute w-full h-full rounded-2xl bg-contain bg-blend-darken"
      }
    >
      <div className="absolute left-0 top-0 w-full h-full bg-dark-2 opacity-25" />
      <h2 className="absolute text-5xl font-extrabold m-0 p-6 text-shadow">
        {title}
      </h2>
      <Button
        className="absolute left-0 top-1/2 -translate-y-1/2 mx-6"
        variant="semitransparent"
        shape="square"
        onClick={prevChild}
      >
        <LeftArrowIcon />
      </Button>
      <Button
        className="absolute right-0 top-1/2 -translate-y-1/2 mx-6"
        variant="semitransparent"
        shape="square"
        onClick={nextChild}
      >
        <LeftArrowIcon className="rotate-180" />
      </Button>
      <Button
        className="absolute left-0 bottom-0 m-6"
        variant="semitransparent"
      >
        Watchlist
      </Button>
      <Button className="absolute right-0 bottom-0 m-6" variant="green">
        Watch Now
      </Button>
    </div>
  );
};

WatchCarrouselEntry.displayName = "WatchCarrouselEntry";

export default WatchCarrouselEntry;
