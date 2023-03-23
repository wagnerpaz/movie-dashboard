import { ComponentProps } from "react";
import classNames from "classnames";
import Image from "next/image";

interface LabeledSliderItemProps extends ComponentProps<"div"> {
  label: string;
  imageUrl: string;
}

const LabeledSliderItem: React.FC<LabeledSliderItemProps> = ({
  className,
  label,
  imageUrl,
}) => {
  return (
    <div className="relative aspect-square hover:scale-110">
      <Image className="backdrop-blur-[1px]" src={imageUrl} fill alt={label} />
      <div className="absolute left-0 top-0 w-full h-full bg-dark-2 opacity-25" />
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-dark-2 to-[transparent] backdrop-blur-[1px]" />
      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 uppercase text-white-1">
        {label}
      </span>
    </div>
  );
};

LabeledSliderItem.displayName = "LabeledSliderItem";

export default LabeledSliderItem;
