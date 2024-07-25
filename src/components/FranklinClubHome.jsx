import PropTypes from "prop-types";

const FranklinClubHome = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start py-10 px-space-2400 gap-[40px] text-left text-37xl text-delft-blue font-text-regular-normal ${className}`}
    >
      <img
        className="self-stretch max-w-full overflow-hidden h-[502px] shrink-0 object-cover"
        alt=""
        src="/picture@2x.png"
      />
      <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-start py-20 px-0 gap-[48px] border-t-[1px] border-solid border-sapphire border-b-[1px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[240px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit">
            Franklin High School STEM Club
          </h1>
          <div className="self-stretch relative text-lg leading-[150%]">
            I started the Franklin High school STEM Club and raised over 500
            dollars to start a merit-based scholarship to encourage STEM interest in my community. To view
            the scholarship I started, click here. To view the website I coded,
            click to the right.
          </div>
        </div>
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start min-w-[176px] text-xl">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[32px]">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <b className="self-stretch relative leading-[140%]">Date</b>
              <div className="self-stretch relative text-base leading-[150%]">
                April 2024
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] min-w-[120px] max-w-[224px]">
              <b className="self-stretch relative leading-[140%]">Role</b>
              <div className="self-stretch relative text-base leading-[150%]">
                Club President and Founder
              </div>
            </div>
            <div className="w-[120px] flex flex-col items-start justify-start gap-[8px] min-w-[120px]">
              <b className="self-stretch relative leading-[140%]">Website</b>
              <a
                className="self-stretch relative text-base [text-decoration:underline] leading-[150%] text-[inherit]"
                href="https://franklin-stem-club.netlify.app"
                target="_blank"
              >
                Franklin High school STEM Club
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FranklinClubHome.propTypes = {
  className: PropTypes.string,
};

export default FranklinClubHome;
