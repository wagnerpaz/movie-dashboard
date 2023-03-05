import { ComponentProps } from "react";
import classNames from "classnames";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "green" | "semitransparent";
  shape?: "square" | "rectangle";
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant = "green",
  shape = "rectangle",
  ...props
}) => {
  return (
    <button
      className={classNames(
        "rounded-2xl font-bold text-dark-2 shadow-md",
        {
          "bg-green-1": variant === "green",
          "bg-semi-white-1 text-white-1 text-shadow backdrop-blur-sm":
            variant === "semitransparent",
          "p-4": shape === "square",
          "py-4 px-10": shape === "rectangle",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
