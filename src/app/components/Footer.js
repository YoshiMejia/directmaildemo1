import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { useSession, signOut } from 'next-auth/react';

const Footer = () => {
  const { data } = useSession();

  console.log('log data, inside Footer:', data);

  return (
    <footer className="relative left-44 max-w-5xl border-t-4 mt-20 mb-16 pt-2 font-mono">
      <div className="flex-row ">
        {data?.user ? (
          <>
            <span>
              <Image
                src={data?.user?.image}
                height="25"
                width="25"
                alt="user image"
                className="inline mr-4"
              ></Image>
              You are currently logged in.
            </span>
            <span
              className="float-right cursor-pointer"
              onClick={() => signOut()}
            >
              Logout
            </span>
          </>
        ) : (
          <span className="float-right">
            <Link className="nav-link" href="/login">
              Login
            </Link>
          </span>
        )}
      </div>
    </footer>
  );
};

export default Footer;
