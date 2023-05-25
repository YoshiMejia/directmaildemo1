import { SessionProvider } from 'next-auth/react';
import '../app/globals.css';
import RootLayout from '@/app/layout';
import { NavHead } from '@/app/components/NavHead';
import Footer from '@/app/components/Footer';

function App({ Component, pageProps, session }) {
  return (
    // getting hydration error when using RootLayout. Need to figure out why.
    <SessionProvider session={session}>
      {/* <RootLayout> */}
      <NavHead />
      <Component {...pageProps} />
      <Footer />
      {/* </RootLayout> */}
    </SessionProvider>
  );
}

export default App;
