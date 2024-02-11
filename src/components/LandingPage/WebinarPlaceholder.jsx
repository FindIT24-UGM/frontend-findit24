import React, { useEffect, useState } from "react";
import Image from "next/image";

import webinarLogoDesktop from "../../assets/Logo/AssetWebinarDesktop.svg";
import webinarLogoTablet from "../../assets/Logo/AssetWebinarTablet.svg";
import webinarLogoMobile from "../../assets/Logo/AssetWebinarMobile.svg";

const WebinarPlaceholder = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const updateWindowsWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWindowsWidth();

    return () => {
      window.addEventListener("resize", updateWindowsWidth);
    };
  }, []);

  return (
    <div>
      <div>
        <div className="absolute">
          <Image
            src={
              windowWidth < 400
                ? webinarLogoMobile
                : windowWidth > 860
                ? webinarLogoDesktop
                : webinarLogoTablet
            }
          />
        </div>
      </div>
    </div>
  );
};

export default WebinarPlaceholder;
