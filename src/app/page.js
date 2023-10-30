import Image from 'next/image';
// import LoginModal from '../pages/components/LoginModal';
// import { NavHead } from '../app/components/NavHead';
import MaxWidthWrapper from '../pages/components/MaxWidthWrapper';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '../../@/components/ui/button';

export default function Home() {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700">
          CSV Converter is under construction
        </p>
      </div>
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        Convert your CSV files to HTML{' '}
        <span className="text-orange-500">in seconds!</span>
      </h1>
      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
        CSV Converter is perfect for any size CSV file! Simply upload your CSV
        and select one of our templates. You&apos;ll have a folder full of
        conversions in a second!
      </p>

      <Link className={buttonVariants()} href="/form">
        Get started! <ArrowRight className="ml-2 h-5 w-5" />
      </Link>

      {/* <LoginModal /> */}
    </MaxWidthWrapper>
  );
}
