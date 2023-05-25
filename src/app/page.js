import Image from 'next/image';
import LoginModal from '@/containers/LoginModal';
import { NavHead } from '@/app/components/NavHead';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavHead />
      {/* <div className="relative flex place-items-center "> */}
      <LoginModal />
      {/* </div> */}
    </main>
  );
}
