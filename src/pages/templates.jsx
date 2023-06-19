import Image from 'next/image';

const templates = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="flex items-center justify-center py-10 text-2xl font-mono relative -left-4">
        <h1>Available templates</h1>
      </div>
      <div className="grid grid-cols-3  gap-4 max-w-7xl overflow-y-auto h-75 border-solid border-8 border-slate-400">
        <div className="image-container">
          <Image
            src="/700V2.png"
            width={450}
            height={375}
            alt="template named 700v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">700v2</span>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/702V2.png"
            width={450}
            height={375}
            alt="template named 702v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">702v2</span>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/704V2.png"
            width={450}
            height={375}
            alt="template named 704v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">704v2</span>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/706V2.png"
            width={450}
            height={375}
            alt="template named 706v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">706v2</span>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/712V2.png"
            width={450}
            height={375}
            alt="template named 712v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">712v2</span>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/720V2.png"
            width={450}
            height={375}
            alt="template named 720v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">720v2</span>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/721V2.png"
            width={450}
            height={375}
            alt="template named 721v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">721v2</span>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/731V2.png"
            width={450}
            height={375}
            alt="template named 731v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">731v2</span>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/740V2.png"
            width={450}
            height={375}
            alt="template named 740v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">740v2</span>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/741V2.png"
            width={450}
            height={375}
            alt="template named 741v2"
          />
          <div className="image-overlay">
            <span className="image-text font-mono">741v2</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default templates;
