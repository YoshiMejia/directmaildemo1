import Image from 'next/image';
import { NavHead } from '@/app/components/NavHead';

const templates = () => {
  return (
    <main className="flex flex-col items-center">
      {/* <NavHead /> */}
      <div className="flex items-center justify-center py-10 text-2xl font-mono relative -left-4">
        <h1>Available templates</h1>
      </div>
      <div className="grid grid-cols-3  gap-4 max-w-7xl overflow-y-auto h-75 border-solid border-8 border-slate-400">
        <div className="image-container">
          <Image
            src="/701v2.png"
            width={450}
            height={375}
            alt="template named 701v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">701v2</span>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/../public/701v2.png"
            width={450}
            height={375}
            alt="template named 701v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">701v2</span>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/../public/701v2.png"
            width={450}
            height={375}
            alt="template named 701v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">701v2</span>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/../public/701v2.png"
            width={450}
            height={375}
            alt="template named 701v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">701v2</span>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/../public/701v2.png"
            width={450}
            height={375}
            alt="template named 701v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">701v2</span>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/../public/701v2.png"
            width={450}
            height={375}
            alt="template named 701v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">701v2</span>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/../public/701v2.png"
            width={450}
            height={375}
            alt="template named 701v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">701v2</span>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/../public/701v2.png"
            width={450}
            height={375}
            alt="template named 701v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">701v2</span>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/../public/701v2.png"
            width={450}
            height={375}
            alt="template named 701v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">701v2</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default templates;
