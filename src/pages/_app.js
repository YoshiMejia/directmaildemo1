import { SessionProvider } from 'next-auth/react';
import '../app/globals.css';

function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
