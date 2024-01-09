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
        return `bg-primary-300 ${widthStyle} cursor-pointer font-GameOfSquid rounded-md hover:bg-primary-500`;
      case "secondary":
        return `bg-transparent ${widthStyle} cursor-pointer border-primary-500 border-[3px] font-GameOfSquid`;
      default:
        return;
    }
  }, [variant, widthStyle]);

  const btnSize = useMemo(() => {
    switch (size) {
      case "sm":
        return "px-[21px] py-[9px] h-[100px]";
      case "md":
        return "px-[30px] py-2";
      case "lg":
        return "px-12 py-4";
      default:
        return;
    }
  });

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
          className={`${widthStyle} h-min font-GameOfSquid font-semibold bg-transparent border-pink-200 rounded-full disabled:text-dark-100 drop-shadow-none shadow-transparent opacity-70 cursor-not-allowed ${customClass}`}
          disabled
        >
          <p className={btnSize}>{text}</p>
        </button>
      );
    }
  }
}
