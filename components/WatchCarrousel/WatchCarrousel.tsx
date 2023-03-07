import React, {
  ComponentProps,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import classNames from "classnames";
import { Transition } from "@headlessui/react";

interface WatchCarrouselProps extends ComponentProps<"section"> {
  autoScroll?: boolean;
}
interface WatchCarrouselContextValue {
  currentChildIndex: number;
  setCurrentChildIndex: Dispatch<SetStateAction<number>>;
  prevChild: () => void;
  nextChild: () => void;
}

export const WatchCarrouselContext =
  React.createContext<WatchCarrouselContextValue>({
    currentChildIndex: 0,
    setCurrentChildIndex: () => {},
    prevChild: () => {},
    nextChild: () => {},
  });

const WatchCarrousel: React.FC<WatchCarrouselProps> = ({
  className,
  children,
  autoScroll = false,
}) => {
  const childrenArray = React.Children.toArray(children);
  const [currentChildIndex, setCurrentChildIndex] = useState(0);
  const nextChildIndex =
    currentChildIndex < childrenArray.length - 1 ? currentChildIndex + 1 : 0;

  useEffect(() => {
    if (!autoScroll) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentChildIndex((currentChildIndex) =>
        currentChildIndex < childrenArray.length - 1 ? currentChildIndex + 1 : 0
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [childrenArray, autoScroll]);

  return (
    <WatchCarrouselContext.Provider
      value={{
        currentChildIndex,
        setCurrentChildIndex,
        prevChild: () => {
          setCurrentChildIndex(
            currentChildIndex > 0
              ? currentChildIndex - 1
              : childrenArray.length - 1
          );
        },
        nextChild: () => {
          setCurrentChildIndex(
            currentChildIndex < childrenArray.length - 1
              ? currentChildIndex + 1
              : 0
          );
        },
      }}
    >
      <section
        className={classNames("relative font-lato aspect-video", className)}
      >
        {childrenArray.map((child, index) => (
          <Transition
            key={index}
            show={index === currentChildIndex}
            enter="transition-opacity duration-2000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-2000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {child}
          </Transition>
        ))}
      </section>
    </WatchCarrouselContext.Provider>
  );
};

WatchCarrousel.displayName = "WatchCarrousel";

export default WatchCarrousel;
