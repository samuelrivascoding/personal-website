import { useCallback } from "react";
import PropTypes from "prop-types";

const Footer = ({
  className = "",
  onLinkOtherCodingProjectsClick,
  firstLink,
  onLinkAboutMeAndAwardsClick,
  secondLink,
}) => {
  const onGithubTextClick = useCallback(() => {
    window.open("https://github.com/moistbeans23");
  }, []);

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
        <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-end gap-[40px]">
          <div
            className="w-[184px] relative h-6 cursor-pointer"
            onClick={onLinkOtherCodingProjectsClick}
          >
            <div className="absolute top-[0%] left-[0%] leading-[150%]">
              {firstLink}
            </div>
          </div>
          <div
            className="w-[184px] relative h-6 cursor-pointer"
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

Footer.propTypes = {
  className: PropTypes.string,
  firstLink: PropTypes.string,
  secondLink: PropTypes.string,

  /** Action props */
  onLinkOtherCodingProjectsClick: PropTypes.func,
  onLinkAboutMeAndAwardsClick: PropTypes.func,
};

export default Footer;
