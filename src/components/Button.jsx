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
  const widthStyle = fullW ? "w-full" : "w-fit";

  const btnVariant = useMemo(() => {
    switch (variant) {
      case "primary":
        return `bg-primary-300 ${widthStyle} cursor-pointer font-GameOfSquid rounded-md border border-primary-300 hover:border-black hover:border-[2px] active:border-black active:border-[2px]`;
      case "secondary":
        return `bg-transparent ${widthStyle} cursor-pointer rounded-md border-primary-300 border-[3px] font-GameOfSquid text-primary-300 hover:border-black hover:border-[2px] active:border-black active:border-[2px]`;
      default:
        return;
    }
  }, [variant, widthStyle]);

  const btnSize = useMemo(() => {
    switch (size) {
      case "sm":
        return "px-[21px] py-[9px] text-[16px]";
      case "md":
        return "px-[30px] py-[16px]";
      case "lg":
        return "px-12 py-4";
      default:
        return;
    }
  }, [size]);

  if (!disabled) {
    return (
      <button
        className={`${btnVariant} ${btnSize} ${customClass}`}
        onClick={onClick}
      >
        <p>{text}</p>
      </button>
    );
  } else {
    return (
      <button
        className={`${btnVariant} ${btnSize} font-GameOfSquid font-semibold opacity-60 disabled:cursor-not-allowed ${customClass}`}
        disabled
      >
        <p>{text}</p>
      </button>
    );
  }
}
