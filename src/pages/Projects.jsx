import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ContentApplicationSpace from "../components/ContentApplicationSpace";
import Footer from "../components/Footer";


const Projects = () => {
  const navigate = useNavigate();

  const onLinkHomeContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkAboutMeAndAwardsClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onLinkAboutMeAndAwards2Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onLinkHomeContainer2Click = useCallback(() => {
    navigate("/");
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
