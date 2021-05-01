import { AuthProvider } from "@/context/AuthContext";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
