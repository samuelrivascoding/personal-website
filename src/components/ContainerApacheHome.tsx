import { FunctionComponent } from "react";

export type ContainerApacheHomeType = {
  className?: string;
};

const ContainerApacheHome: FunctionComponent<ContainerApacheHomeType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-start py-4 px-0 gap-[80px] text-left text-29xl text-delft-blue font-text-regular-normal ${className}`}
    >
      <img
        className="w-[405px] relative h-[327px] object-cover"
        alt=""
        src="/image@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[336px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit">
          Apache Solr Project Open Source Contribution
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start text-base">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
            <div className="self-stretch relative leading-[150%]">text</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
            <div className="self-stretch relative leading-[150%]">link</div>
          </div>
          <div className="self-stretch h-[120px] flex flex-col items-start justify-start" />
        </div>
      </div>
    </div>
  );
};

export default ContainerApacheHome;
