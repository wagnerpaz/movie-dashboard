import { ComponentProps } from "react";

interface WatchGridProps extends ComponentProps<"ul"> {}

const WatchGrid: React.FC<WatchGridProps> = ({ children }) => {
  return <ul className="relative grid grid-cols-3 gap-2">{children}</ul>;
};

WatchGrid.displayName = "WatchGrid";

export default WatchGrid;
