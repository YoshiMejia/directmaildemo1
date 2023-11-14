'use client';
import Link from 'next/link';
import { useSession, signIn } from 'next-auth/react';
import Image from 'next/image';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import Decoration from '../components/Decoration';

const LoginPage = () => {
  const { data } = useSession();

  return (
    <>
      <MaxWidthWrapper className="min-h-[40vh] sm:my-40 flex flex-col items-center justify-center text-center">
        <Decoration />
        <main className="">
          <div className="relative text-xl text-slate-50 text-center max-w-xl">
            <div className=" mx-auto mb-20 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 bg-white/50">
              <p className="text-sm font-semibold text-gray-700">
                Only members of the WAC Google Organization will have access to
                this site.
              </p>
            </div>
            {data?.user ? (
              <>
                <p className="mt-7">Hello, {data?.user?.name}</p>
              </>
            ) : (
              <>
                <div className="bg-white rounded-lg text-slate-500 p-4 mt-6 w-64 flex relative left-40">
                  <Image
                    loading="lazy"
                    height="24"
                    className="initial mr-4"
                    width="24"
                    id="provider-logo"
                    alt="google logo"
                    src="https://authjs.dev/img/providers/google.svg"
                  ></Image>
                  <button
                    className="text-xl pl-4"
                    onClick={() => signIn('google')}
                  >
                    Click to sign in
                  </button>
                </div>
              </>
            )}
          </div>
        </main>
      </MaxWidthWrapper>
    </>
  );
};

export default LoginPage;
