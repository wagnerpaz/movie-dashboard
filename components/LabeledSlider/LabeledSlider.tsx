import { ComponentProps } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

interface LabeledSliderProps extends ComponentProps<"div"> {}

const LabeledSlider: React.FC<LabeledSliderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={classNames("grid grid-cols-4 gap-4 font-lato", className)}>
      {children}
    </div>
  );
};

LabeledSlider.displayName = "LabeledSlider";

export default LabeledSlider;
