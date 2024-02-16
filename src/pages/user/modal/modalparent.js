import React from "react";

const ModalParent = ({ children, customStyle }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-shade-black bg-opacity-10 backdrop-blur-sm z-[1000]">
      <div className={`rounded-md w-[90vw] md:w-[60vw] lg:w-[30vw] bg-text-placeholder-light ${customStyle ? customStyle : 'px-5 py-4'}`}>
        {children}
      </div>
    </div>
  );
};

export default ModalParent;
