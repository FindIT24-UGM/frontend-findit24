import Lottie from "react-lottie-player";
// import loadingJson from "../assets/loading.json";
import loadingJson from "../assets/loading.json";
import { useSelector } from "react-redux";
import { Spin } from "antd";

const LoadingWrapper = ({ children }) => {
  const loading = useSelector((state) => state.loading.val);

  const loadingIndicator = (
    <Lottie
      loop
      animationData={loadingJson}
      play
      style={{ width: 150, height: 150 }}
    />
  );

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
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin indicator={loadingIndicator} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LoadingWrapper;
