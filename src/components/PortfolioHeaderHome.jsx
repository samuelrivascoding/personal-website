import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import "./style.css"

const PortfolioHeaderHome = ({ className = "" }) => {

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (event) => {
      const halfWidth = container.offsetWidth / 2;
      const halfHeight = container.offsetHeight / 2;

          container.style.transform = `rotateX(${y * 10}deg) rotateY(${x * -10}deg)`; // Adjust rotation angle for smoother effect


      container.style.transform = `rotateX(${y * 45}deg) rotateY(${x * -45}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      className={`self-stretch overflow-hidden flex flex-col items-end justify-end py-0 px-space-2400 text-left text-37xl text-delft-blue font-text-regular-normal ${className}`}
    >
      <div className="self-stretch flex flex-row items-end justify-end border-b-[1px] border-solid border-sapphire">
        <div ref={containerRef} className="homeheader">
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
      </div>
    </section>
  );
};

PortfolioHeaderHome.propTypes = {
  className: PropTypes.string,
};

export default PortfolioHeaderHome;
