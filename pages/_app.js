import '../styles/globals.css'
import Navbar from '@components/Navbar'
import { useRouter } from 'next/router'
import axios from 'axios';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = 'http://localhost:4000';
  const router = useRouter();
  return (
    <UserProvider>
      {router.pathname === "/" ? null : <Navbar />}
      <Component {...pageProps} />

    </UserProvider>
  )
}

export default MyApp
