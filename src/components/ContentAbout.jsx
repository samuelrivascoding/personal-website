import PropTypes from "prop-types";

const ContentAbout = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start py-0 px-space-2400 text-left text-29xl text-delft-blue font-text-regular-normal ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px_64px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[336px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit">
            Awards:
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
              <div className="self-stretch relative leading-[150%]">
                <p className="m-0">
                  All medals are from regional competitions that I won
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  From left to right, top to bottom, the medals are:
                </p>
                <p className="m-0">
                  1st place in UIL Computer Science in 11th grade
                </p>
                <p className="m-0">
                  1st place in UIL Number Sense in 10th grade
                </p>
                <p className="m-0">
                  1st place in UIL Social Studies in 8th grade. I got the
                  highest score ever achieved at my Middle School for this
                  event.
                </p>
                <p className="m-0">
                  1st place in FBLA Website Coding and Development in 11th grade
                </p>
                <p className="m-0">
                  2nd place in UIL Team Competitive Programming during 10th
                  grade
                </p>
                <p className="m-0">
                  3rd place UIL Speech and Debate in 9th grade
                </p>
                <p className="m-0">
                  3rd place in UIL Social Studies in 8th grade
                </p>
                <p className="m-0">
                  3rd place in UIL Number Sense in 10th grade
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  While I do regret somewhat not specializing in a specific
                  extracurricular throughout my high school career, I feel that
                  participating regardless has made me a well-rounded person.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  In the end, overall, I feel that I grew positively from my
                  experiences in these various Texas Competitions.
                </p>
                <p className="m-0">&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[480px] relative h-[484px] object-cover"
          alt=""
          src="/placeholder-image@2x.png"
        />
      </div>
    </section>
  );
};

ContentAbout.propTypes = {
  className: PropTypes.string,
};

export default ContentAbout;
