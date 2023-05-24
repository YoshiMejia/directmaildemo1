import Image from 'next/image';
import { NavHead } from '@/app/components/NavHead';

const templates = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <NavHead />
      <div className="flex items-center justify-center py-10 font-mono">
        <h1>Available templates</h1>
      </div>
      <div className="grid grid-cols-3 relative left-8 gap-4">
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
