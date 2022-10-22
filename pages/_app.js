import { ContextProvider } from '../context';
//import '../styles/globals.css'
import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }) {
  return (
  <ContextProvider>  
    <Component {...pageProps} />
  </ContextProvider>
    )
}


