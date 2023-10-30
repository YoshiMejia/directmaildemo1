import Image from 'next/image';
import LoginModal from '@/pages/components/LoginModal';
import { NavHead } from '@/app/components/NavHead';
import MaxWidthWrapper from '../pages/components/MaxWidthWrapper';

export default function Home() {
  return (
    <MaxWidthWrapper>
      <main className="flex flex-col items-center">
        <LoginModal />
      </main>
    </MaxWidthWrapper>
  );
}
