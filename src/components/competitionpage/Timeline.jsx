import React from "react";
import Opreg_Container from "../../assets/compepage/Opreg_Container.png";
import styles from "./Timeline.module.css";

function HexagonDot() {
  return (
    <div className="w-[1.875vw]">
      <div className={`${styles.timelinedotContainer} rotate-30`}>
        <div className={styles.timelinedotLayer}></div>
      </div>
    </div>
  );
}

function LineH1() {
  return (
    <div className="w-full flex items-center">
      <HexagonDot />
      <div className="w-full h-[0.75vw] bg-gradient-to-l -ml-2 from-[#FF8C5A] to-[#F95949]"></div>
    </div>
  );
}

export default function Timeline() {
  return (
    <div className="w-full">
      <LineH1 />
    </div>
  );
}
