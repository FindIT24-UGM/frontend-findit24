import { useMemo } from "react";

export default function Button({
  variant = "primary",
  size = "sm",
  text = "Button",
  color,
  fullW = false,
  disabled = false,
  customClass,
  onClick = () => {},
}) {
  // variant: primary, secondary, tertiary,
  // color: blue, pink
  // size : sm, md, lg
  // text : text to display
  // onClick : function to call on click

  // fullW: set width of button (either full or fit)
  const widthStyle = fullW ? "w-full" : "w-fit";

  const btnVariant = useMemo(() => {
    switch (variant) {
      case "primary":
        return `bg-primary-300 ${widthStyle} cursor-pointer font-GameOfSquid rounded-md hover:border-black hover:border-[2px] active:bg-primary-500 active:border-[4px]`;
      case "secondary":
        return `bg-transparent ${widthStyle} cursor-pointer rounded-md border-primary-300 border-[3px] font-GameOfSquid text-primary-300 hover:opacity-[80%] hover:border-2 active:border-[3px] active:border-primary-500 active:opacity-[100%] active:text-primary-500`;
      default:
        return;
    }
  }, [variant, widthStyle]);

  const btnSize = useMemo(() => {
    switch (size) {
      case "sm":
        return "flex justify-center items-center px-[21px] py-[9px] text-[16px]";
      case "md":
        return "flex justify-center items-center px-[30px] py-[16px]";
      case "lg":
        return "flex justify-center items-center px-12 py-4";
      default:
        return;
    }
  }, [size]);

  if (!disabled) {
    return (
      <button className={`${btnVariant} ${customClass}`} onClick={onClick}>
        <p className={btnSize}>{text}</p>
      </button>
    );
  } else {
    if (variant == "primary") {
      return (
        <button
          className={`${btnVariant} font-GameOfSquid font-semibold opacity-60 disabled:cursor-not-allowed ${customClass}`}
          disabled
        >
          <p className={btnSize}>{text}</p>
        </button>
      );
    } else {
      return (
        <button
          className={`${
            widthStyle + btnVariant
          } font-GameOfSquid font-semibold opacity-60 disabled:text-dark-100 opacity-70 disabled:cursor-not-allowed ${customClass}`}
          disabled
        >
          <p className={btnSize}>{text}</p>
        </button>
      );
    }
  }
}
