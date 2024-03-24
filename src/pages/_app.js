import "../styles/globals.css";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { LoadingWrapper } from "./loading.cjs";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <LoadingWrapper /> */}
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  );
}

export default createWrapper(() => store).withRedux(App);
