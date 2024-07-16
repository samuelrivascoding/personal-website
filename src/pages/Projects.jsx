import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ContentApplicationSpace from "../components/ContentApplicationSpace";
import Footer from "../components/Footer";

const Projects = () => {
  const navigate = useNavigate();

  const onLinkHomeContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onLinkAboutMeAndAwardsClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onLinkAboutMeAndAwards2Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onLinkHomeContainer2Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="w-full relative bg-background-color-primary flex flex-col items-start justify-start gap-[32px]">
      <Navbar
        onLinkAboutMeAndAwardsClick={onLinkHomeContainerClick}
        secondLink="Home"
        onLinkOtherCodingProjectsClick={onLinkAboutMeAndAwardsClick}
        firstLink="About me and Awards"
      />
      <ContentApplicationSpace />
      <section className="self-stretch flex flex-col items-start justify-start py-20 px-space-2400 text-left text-base text-delft-blue font-text-regular-normal">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
          <div className="self-stretch relative leading-[150%]">
            This course by Harvard University is something I am currently doing;
            I enjoy greatly learning Computer Science. While I have yet to
            accumulate much more direct experience, I am still very passionate
            about Computer Science and learning this subject.
          </div>
        </div>
      </section>
      <Footer
        onLinkOtherCodingProjectsClick={onLinkAboutMeAndAwards2Click}
        firstLink="About me and Awards"
        onLinkAboutMeAndAwardsClick={onLinkHomeContainer2Click}
        secondLink="Home"
      />
    </div>
  );
};

export default Projects;
