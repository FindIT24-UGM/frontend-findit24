import * as React from "react";
const SVGComponent = ({ props }) => (
  <svg
    className="fill-current text-text-placeholder-light group-hover:text-text-placeholder-dark size-[52px] lg:size-[72px] group-hover:scale-110 transition duration-500 group-hover:transition group-hover:duration-500"
    width={73}
    height={72}
    viewBox="0 0 73 72"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      id="Vector"
      d="M0.938477 0.154297V71.2777H9.8289V0.154297H0.938477ZM18.7193 0.154297V35.716H36.5002V44.6064H72.0619L54.281 27.0923L72.0619 9.04472H45.3906V0.154297L18.7193 0.154297Z"
    />
  </svg>
);
export default SVGComponent;
