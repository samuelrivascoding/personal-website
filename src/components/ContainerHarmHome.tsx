import { FunctionComponent } from "react";

export type ContainerHarmHomeType = {
  className?: string;
};

const ContainerHarmHome: FunctionComponent<ContainerHarmHomeType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-start py-4 px-0 gap-[80px] text-left text-29xl text-delft-blue font-text-regular-normal ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[280px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit">
          Harm Scanner
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start text-base">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
            <div className="self-stretch relative leading-[150%]">{`Sodium Laureth Sulfate? What even is that? Commonly found in soaps, this chemical compound may be contaminated with 1,4-dioxane, a possible carcinogen, during the manufacturing process, and there are many other products that are linked to harm, associated with things like cancer and developmental diseases. I created a app that leverages image recognition technology with Google Cloud Vision, Open AI, and Google Generative AI technology to inform users about product labels for products. I compare the ingredient labels to a 1000+ item list of ingredients linked to developmental disorders and carcinogens. `}</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
            <a
              className="self-stretch relative [text-decoration:underline] leading-[150%] text-[inherit]"
              href="https://app-scanner.vercel.app/"
              target="_blank"
            >
              Harm Scanner
            </a>
          </div>
        </div>
      </div>
      <div className="w-[280px] flex flex-col items-start justify-start gap-[16px] text-xs text-sapphire">
        <img
          className="w-[280px] relative h-[327px] object-cover"
          alt=""
          src="/placeholder-image@2x.png"
        />
        <div className="self-stretch relative leading-[150%]">
          What even are those inactive ingredients? The app scans ingredients
          using image recognition to quickly compare against a database of known
          ingredients linked to developmental harm and carcinogens
        </div>
      </div>
      <img
        className="w-[405px] relative h-[327px] object-cover"
        alt=""
        src="/pictureharm@2x.png"
      />
    </div>
  );
};

export default ContainerHarmHome;
