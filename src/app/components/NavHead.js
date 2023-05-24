'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavHead = () => {
  const pathname = usePathname();
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between lg:flex border-b-4 pb-2">
      <Link className="text-2xl" href={'/'}>
        WAConverter
      </Link>
      {pathname !== '/templates' && (
        <Link className="text-xl" href={'/templates'}>
          Templates
        </Link>
      )}
      {pathname !== '/Form' && (
        <Link className="text-xl" href={'/Form'}>
          Upload CSV
        </Link>
      )}
    </div>
  );
};
