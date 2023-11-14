import Image from 'next/image';
import Decoration from '../app/components/Decoration';
import MaxWidthWrapper from '../app/components/MaxWidthWrapper';

const templates = () => {
  return (
    <>
      <MaxWidthWrapper>
        <Decoration />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className=" mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 bg-white/50">
                <p className="text-sm font-semibold text-gray-700">
                  These are the templates which are available to you on our
                  Convert page!
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 rounded-xl p-2 max-w-7xl overflow-y-auto h-75 border-solid border-8 border-slate-200">
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
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default templates;
