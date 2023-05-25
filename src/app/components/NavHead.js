'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavHead = () => {
  const pathname = usePathname();

  return (
    <nav className="relative w-full max-w-5xl items-center justify-between font-mono lg:flex border-b-4 pb-2 mt-8 left-64">
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
    </nav>
  );
};
