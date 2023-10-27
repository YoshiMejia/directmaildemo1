'use client';
import Link from 'next/link';
import { useSession, signIn } from 'next-auth/react';
import Image from 'next/image';

const LoginPage = () => {
  const { data } = useSession();

  return (
    <>
      <main className="flex flex-col items-center">
        <div className="cloud-img flex relative mt-20">
          <div className="relative text-xl text-slate-50 text-center top-64 max-w-xl left-12">
            <p>
              Only members of the WAC Google Organization will have access to
              this site.
            </p>
            {data?.user ? (
              <>
                <p className="mt-7">Hello, {data?.user?.name}</p>
              </>
            ) : (
              <>
                <div className="bg-white rounded-lg text-slate-500 pb-2 pl-4 pr-8 mt-6 w-fit relative left-40">
                  <Image
                    loading="lazy"
                    height="24"
                    className="initial mr-4"
                    width="24"
                    id="provider-logo"
                    alt="google logo"
                    src="https://authjs.dev/img/providers/google.svg"
                  ></Image>
                  <button className="text-xl" onClick={() => signIn('google')}>
                    Click to sign in
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
