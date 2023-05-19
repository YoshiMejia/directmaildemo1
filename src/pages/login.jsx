import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const Login = () => {
  const { data: session } = useSession({ required: true });
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Login;
