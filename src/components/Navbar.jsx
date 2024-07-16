import PropTypes from "prop-types";

const Navbar = ({
  className = "",
  onLinkAboutMeAndAwardsClick,
  secondLink,
  onLinkOtherCodingProjectsClick,
  firstLink,
}) => {
  return (
    <header
      className={`self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-center py-0 px-space-2400 text-left text-base text-delft-blue font-text-regular-normal ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-col items-end justify-center py-8 px-0 border-b-[1px] border-solid border-sapphire">
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-end gap-[40px]">
            <div
              className="w-[180px] relative h-6 cursor-pointer"
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
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  secondLink: PropTypes.string,
  firstLink: PropTypes.string,

  /** Action props */
  onLinkAboutMeAndAwardsClick: PropTypes.func,
  onLinkOtherCodingProjectsClick: PropTypes.func,
};

export default Navbar;
