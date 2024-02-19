import React, { useState, useEffect } from "react";
import Image from "next/image";


const Motif = ({ count = 10 }) => {
  const [positions, setPositions] = useState([]);


  useEffect(() => {
    const images = ["/assets/images/Rectangle1.png", "/assets/images/Rectangle2.png", "/assets/images/Rectangle3.png"];


    const newPositions = Array.from({ length: count }).map(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      return {
        image: images[randomIndex],
        top: Math.floor(Math.random() * 100) + "%",
        left: Math.floor(Math.random() * 100) + "%",
      };
    });
    setPositions(newPositions);
  }, [count]);


  return (
    <div className="absolute top-20 left-0 w-screen h-screen" style={{ zIndex: 0}}>
      {positions.map((position, index) => (
        <Image
          key={index}
          src={position.image}
          alt={`Rectangle${index + 1}`}
          width={14.36}
          height={10}
          className="absolute"
          style={{ top: position.top, left: position.left }}
        />
      ))}
    </div>
  );
};


export default Motif;
