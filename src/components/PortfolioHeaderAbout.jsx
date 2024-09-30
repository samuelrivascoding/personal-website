import PropTypes from "prop-types";

const PortfolioHeaderAbout = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start py-0 px-space-2400 text-left text-37xl text-delft-blue font-text-regular-normal ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-20 px-0">
        <div className="flex-1 flex flex-col items-start justify-start gap-[80px]">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[80px]">
            <div className="flex-1 box-border flex flex-col items-start justify-start py-9 px-0 gap-[36px] min-w-[224px] border-b-[1px] border-solid border-sapphire">
              <div className="self-stretch flex flex-row items-center justify-center py-4 px-0 box-border min-w-[224px]">
                <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-bold font-inherit">
                  Hello a second time!
                </h1>
              </div>
              <div className="self-stretch box-border flex flex-row items-start justify-start py-0 pr-4 pl-0 min-w-[224px] text-lg border-r-[1px] border-solid border-sapphire">
                <div className="flex-1 relative leading-[150%]">
                  <p className="m-0">
                    Some more information about me is that I love exploring new
                    areas and new ideas.
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    Outside of school or work I enjoy playing the guitar,
                    coding, and exploring ideas that I can implement in my life,
                    such as interesting cooking recipes. I enjoy meeting new
                    people.
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    I also really enjoy designing websites and software using
                    the UI/UX tool Figma and implementing it into front end
                    code.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[405px] h-[327px] flex flex-col items-start justify-start">
            <img
  className="w-[300px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-17xl bg-gray box-border h-[300px] border-[10px] border-solid border-periwinkle"
  src="/photoofMe.jpg"
  alt="Your Image"
          />            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[80px] text-xl">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-4 px-0 gap-[24px_64px] border-b-[1px] border-solid border-sapphire">
              <div className="w-[373px] flex flex-col items-center justify-start py-0 px-24 box-border gap-[24px] min-w-[304px]">
                <div className="w-[181px] relative leading-[150%] font-extrabold inline-block">
                  Location
                </div>
                <div className="w-[181px] relative text-lg leading-[150%] inline-block">
                  El Paso, Texas
                </div>
              </div>
              <div className="w-[374px] box-border flex flex-col items-center justify-start py-0 px-24 gap-[24px] min-w-[304px] border-r-[1px] border-solid border-sapphire border-l-[1px]">
                <div className="w-[182px] relative leading-[150%] font-extrabold inline-block">
                  Favorite Book:
                </div>
                <div className="w-[182px] relative text-lg leading-[150%] inline-block">
                  <p className="m-0">How the World Works</p>
                  <p className="m-0">by Noam Chomsky</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start py-0 px-24 box-border gap-[24px] min-w-[304px]">
                <div className="self-stretch relative leading-[150%] font-extrabold">
                  My most valuable skill:
                </div>
                <div className="self-stretch relative text-lg leading-[150%]">
                  Out of the Box Thinking
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px_16px] border-b-[1px] border-solid border-sapphire">
              <div className="flex-1 box-border flex flex-col items-start justify-start pt-0 pb-4 pr-4 pl-0 gap-[24px] min-w-[200px] border-r-[1px] border-solid border-sapphire">
                <div className="self-stretch relative leading-[150%] font-extrabold">
                  Experience:
                </div>
                <div className="w-full relative text-lg leading-[150%] whitespace-pre-wrap inline-block max-w-[504px]">{`2 years of experience coding with Java, Javascript, and CSS.  Specializing in using the Javascript framework React. `}</div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-0 px-4 pb-4 box-border gap-[24px] min-w-[200px]">
                <div className="self-stretch relative leading-[150%] font-extrabold">
                  Main Volunteering activities:
                </div>
                <div className="self-stretch relative text-lg leading-[150%]">
                  Volunteered doing clerk work for El Paso Child Protective
                  Services, where I got to curate care packages, school supplies
                  and Christmas presents for foster kids
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PortfolioHeaderAbout.propTypes = {
  className: PropTypes.string,
};

export default PortfolioHeaderAbout;
