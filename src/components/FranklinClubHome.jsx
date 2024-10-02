import PropTypes from "prop-types";

const FranklinClubHome = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start py-10 px-space-2400 gap-[40px] text-left text-37xl text-delft-blue font-text-regular-normal ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-20 px-0 gap-[48px] border-t-[1px] border-solid border-sapphire border-b-[1px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[240px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit">
            Franklin High School STEM Club
          </h1>
          <div className="self-stretch relative text-lg leading-[150%]">
          I founded the Franklin High School STEM Club with the goal of inspiring my peers to pursue careers in science, 
          technology, engineering, and mathematics. Although the club initially had a small membership of 5-6 students, piggy-backing off of the existing TSA club, 
          I successfully mentored a group of freshmen to start a Girls Who Code chapter at our school. This experience 
          allowed me to develop strong leadership skills, as I organized club activities, mentored younger students, and 
          successfully built a supportive community for STEM enthusiasts. I also demonstrated my technical abilities by 
          coding the club's website using React Js.
          </div>
        </div>
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start min-w-[176px] text-xl">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[32px]">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <b className="self-stretch relative leading-[140%]">Date</b>
              <div className="self-stretch relative text-base leading-[150%]">
                April 2024
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] min-w-[120px] max-w-[224px]">
              <b className="self-stretch relative leading-[140%]">Role</b>
              <div className="self-stretch relative text-base leading-[150%]">
                Club President and Founder
              </div>
            </div>
            <div className="w-[120px] flex flex-col items-start justify-start gap-[8px] min-w-[120px]">
              <b className="self-stretch relative leading-[140%]">Website</b>
              <a
                className="self-stretch relative text-base [text-decoration:underline] leading-[150%] text-[inherit]"
                href="https://franklin-stem-club.netlify.app"
                target="_blank"
              >
                Franklin High school STEM Club
              </a>
            </div>
            <div className="w-[120px] flex flex-col items-start justify-start gap-[8px] min-w-[120px]">
              <a
                className="self-stretch relative text-base [text-decoration:underline] leading-[150%] text-[inherit]"
                href="https://www.instagram.com/franklinstemclub_/"
                target="_blank"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FranklinClubHome.propTypes = {
  className: PropTypes.string,
};

export default FranklinClubHome;
