import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FooterType = {
  className?: string;
  firstLink?: string;
  secondLink?: string;

  /** Action props */
  onLinkOtherCodingProjectsClick?: () => void;
  onLinkAboutMeAndAwardsClick?: () => void;

};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  onLinkOtherCodingProjectsClick,
  firstLink,
  onLinkAboutMeAndAwardsClick,
  secondLink,
}) => {

  const onGithubTextClick = useCallback(() => {
    window.open("https://github.com/moistbeans23");
  }, []);

  const onLinkOtherCodingProjectsClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkAboutMeAndAwardsClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div

      className={`self-stretch overflow-hidden flex flex-col items-start justify-start py-20 px-space-2400 text-left text-base text-delft-blue font-text-regular-normal ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between py-4 px-0 border-b-[1px] border-solid border-sapphire">
        <div className="flex flex-row items-center justify-start">
          <div
            className="relative leading-[150%] cursor-pointer"
            onClick={onGithubTextClick}
          >
            Github
          </div>
        </div>
        <div className="h-6 flex flex-row flex-wrap items-start justify-end gap-[40px]">
          <div
            className="w-[179px] relative h-6 cursor-pointer"
            onClick={onLinkOtherCodingProjectsClick}
          >
            <div className="absolute top-[0%] left-[0%] leading-[150%]">
              {firstLink}

            </div>
          </div>
          <div
            className="w-[180px] relative h-6 cursor-pointer"
            onClick={onLinkAboutMeAndAwardsClick}
          >
            <div className="absolute top-[0%] left-[0%] leading-[150%]">
              {secondLink}

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Footer;
