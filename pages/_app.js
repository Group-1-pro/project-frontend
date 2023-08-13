import '@/styles/globals.css'
import { AuthProvider } from '@/contexts/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homeStyling.css';
import '../styles/postStyling.css';
import '../styles/sliderStyling.css';
import '../styles/footerStyling.css';
import '../styles/navBarStyling.css';
import '../styles/aboutStyling.css';

export default function App({ Component, pageProps }) {

  return <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
}
