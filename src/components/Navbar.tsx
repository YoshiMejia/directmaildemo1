import Link from 'next/link';
import MaxWidthWrapper from '../pages/components/MaxWidthWrapper';
import { buttonVariants } from '../../@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b boder-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-full items-center justify-between border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold ">
            <span>CSV Converter</span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}
                href="form"
              >
                Convert
              </Link>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
