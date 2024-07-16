import { FunctionComponent } from "react";
import ContainerHarmHome from "./ContainerHarmHome";
import ContainerApacheHome from "./ContainerApacheHome";

export type ProjectSectionHomeType = {
  className?: string;
};

const ProjectSectionHome: FunctionComponent<ProjectSectionHomeType> = ({
  className = "",
}) => {
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
          src="/image@2x.png"
        />
      </div>
    </section>
  );
};

export default ProjectSectionHome;
