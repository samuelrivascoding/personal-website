import PropTypes from "prop-types";

const PortfolioHeaderHome = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-end justify-end py-0 px-space-2400 text-left text-37xl text-delft-blue font-text-regular-normal ${className}`}
    >
      <div className="self-stretch flex flex-row items-end justify-end border-b-[1px] border-solid border-sapphire">
        <div className="self-stretch w-[760px] box-border flex flex-col items-end justify-end pt-0 pb-10 pr-0 pl-9 gap-[24px] max-w-[760px] border-l-[1px] border-solid border-sapphire">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit">{`Hello! I’m Samuel Rivas. `}</h1>
          <div className="self-stretch relative text-lg leading-[150%]">
            <p className="m-0">{`I am a student at heart. I am a soldier in mind. I value integrity, wisdom, and work ethic above all else. `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">{`Efficiency is my North Star. It guides my approach to problem solving and learning new skills. `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              I enjoy teaching other people knowledge and the lessons I learned.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

PortfolioHeaderHome.propTypes = {
  className: PropTypes.string,
};

export default PortfolioHeaderHome;
