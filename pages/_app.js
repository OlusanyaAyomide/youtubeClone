import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { AuthContextProvider } from "../store/auth-context";

export default function App({ Component, pageProps }) {
  return(<SessionProvider session={pageProps.session}>
      <AuthContextProvider>
         <Component {...pageProps} />
      </AuthContextProvider>   
   </SessionProvider>
 );
}
