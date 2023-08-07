import '@/styles/globals.css'
import { AuthProvider } from '@/contexts/auth'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homeStyling.css';


export default function App({ Component, pageProps }) {

  return <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
}
