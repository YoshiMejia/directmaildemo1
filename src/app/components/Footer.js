import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { useSession, signOut } from 'next-auth/react';

const Footer = () => {
  const { data } = useSession();

  console.log('log data, inside Footer:', data);

  return (
    <footer className="bg-white rounded-lg shadow mx-4 mt-32 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 ">
        <ul className="items-center mt-3 text-sm font-medium flex justify-between text-gray-500 dark:text-gray-400 sm:mt-0">
          {data?.user ? (
            <>
              <li>
                <span className="float-left">
                  <Image
                    src={data?.user?.image}
                    height="25"
                    width="25"
                    alt="user image"
                    className="inline mr-4"
                  ></Image>
                  Currently logged in.
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-500 sm:text-center relative -left-20 dark:text-gray-400">
                  © 2023 CSV Converter. All Rights Reserved.
                </span>
              </li>
              <li>
                <span
                  className="float-right cursor-pointer"
                  onClick={() => signOut()}
                >
                  Logout
                </span>
              </li>
            </>
          ) : (
            <>
              <li>
                <span className="text-sm float-left text-gray-500 sm:text-center dark:text-gray-400">
                  © 2023 CSV Converter. All Rights Reserved.
                </span>
              </li>
              <li>
                <span className="float-right">
                  <Link
                    href="/login"
                    className=" nav-link mr-4 hover:underline md:mr-6 "
                  >
                    Login
                  </Link>
                </span>
              </li>
            </>
          )}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
