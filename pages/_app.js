import "../styles/globals.css";
import { AllcontextProvider } from "../store/Allcontext";

export default function App({ Component, pageProps }) {
  return (
    <AllcontextProvider>
      <Component {...pageProps} />
    </AllcontextProvider>
  );
}
