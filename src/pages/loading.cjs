import { useState } from "react";
import { Spin } from "antd";

const customIndicator = (
  <svg width="50" height="50" viewBox="0 0 50 50">
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="5"
      stroke="#1890ff"
      strokeLinecap="round"
    />
  </svg>
);

const LoadingWrapper = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 9999,
            backgroundColor: "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin indicator={customIndicator} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LoadingWrapper;
