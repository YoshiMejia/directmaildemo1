import Image from 'next/image';
import LoginModal from '@/pages/components/LoginModal';
import { NavHead } from '@/app/components/NavHead';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <LoginModal />
    </main>
  );
}
