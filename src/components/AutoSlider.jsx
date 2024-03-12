import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Prize from "../assets/Prize.png";

export default function AutoSlider() {
  const sliderTrackRef = useRef(null);
  let requestId = null;

  useEffect(() => {
    const sliderTrack = sliderTrackRef.current;

    const startAnimation = () => {
      if (sliderTrack) {
        const sliderWidth = sliderTrack.scrollWidth;
        let position = 0;

        const animate = () => {
          position += 1;
          if (position >= sliderWidth) {
            position = 0;
          }
          sliderTrack.style.transform = `translateX(-${position}px)`;
          requestId = requestAnimationFrame(animate);
        };

        animate();
      }
    };

    startAnimation();

    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <div className="w-full bg-background-skyblue overflow-hidden">
      <div className="slider">
        <div className="w-full border-y-8 border-[#92C2D0] overflow-hidden">
          <div
            ref={sliderTrackRef}
            className="sliderTrack flex gap-x-6 font-GameOfSquid text-[52.72px] py-3 whitespace-nowrap"
            style={{ width: "800vw" }} // Adjust the width according to your content
          >
            {[...Array(8)].map((_, index) => (
              <Image
                key={index}
                src={Prize}
                className="w-[120vw] md:w-[100vw] lg:w-[60vw]"
                alt="Win A Total Prize"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
