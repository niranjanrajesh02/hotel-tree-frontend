import '../styles/globals.css'
import Navbar from '@components/Navbar'
import { useRouter } from 'next/router'
import axios from 'axios';

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = 'http://localhost:4000';
  const router = useRouter();
  return (
    <>
      {router.pathname === "/" ? null : <Navbar />}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
