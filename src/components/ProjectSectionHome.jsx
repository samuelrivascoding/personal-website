import ContainerHarmHome from "./ContainerHarmHome";
import ContainerApacheHome from "./ContainerApacheHome";
import PropTypes from "prop-types";

const ProjectSectionHome = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start py-0 px-space-2400 gap-[80px] text-left text-29xl text-delft-blue font-text-regular-normal ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-20 px-0 text-37xl border-b-[1px] border-solid border-sapphire">
        <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-bold font-inherit">
          Below you will find the main projects I am currently working on
        </h1>
      </div>
      <ContainerHarmHome />
      <ContainerApacheHome />
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-4 px-0 gap-[80px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[384px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit">
            CS50: Introduction to Computer Science
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
              <div className="self-stretch relative leading-[150%]">
                This course by Harvard University is something I am currently
                doing; I enjoy greatly learning Computer Science. While I have
                yet to accumulate much more direct experience, I am still very
                passionate about Computer Science and learning this subject.
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[405px] relative h-[327px] object-cover"
          alt=""
          src="/image1@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-4 px-0 gap-[80px]">
      <img
          className="w-[405px] relative h-[327px] object-cover"
          alt=""
          src="/autonomousracecar.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[384px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit">
            MIT BWSI Open BWSI Course
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
              <div className="self-stretch relative leading-[150%]">
                I participated in the selective MIT self-study course based on Autonomous RACECAR course for the MIT Beaverworks Program. I learned about the basic fundamentals of computer vision for an Autonomous Racecar. I no longer have access to course now that summer is over, but it was an interesting experience! I enjoyed it.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

ProjectSectionHome.propTypes = {
  className: PropTypes.string,
};

export default ProjectSectionHome;
