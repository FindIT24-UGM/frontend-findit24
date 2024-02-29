import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        // Memastikan window tersedia
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    // Panggil handleResize setiap kali window diubah ukurannya
    window.addEventListener("resize", handleResize);

    // Bersihkan event listener saat komponen unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Penambahan dependensi kosong agar efek hanya dijalankan sekali saat mounting

  return windowSize;
};

export default useWindowSize;
