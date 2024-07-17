import { useCallback} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PortfolioHeaderAbout from "../components/PortfolioHeaderAbout";
import ContentAbout from "../components/ContentAbout";
import Footer from "../components/Footer";

const About = () => {
  const navigate = useNavigate();

  const onLinkHomeContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkOtherCodingProjectsClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onLinkHomeContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);


  
  return (
    <div className=" w-full relative bg-background-color-primary flex flex-col items-start justify-start gap-[32px] bg-background-color-primary;">
      <Navbar
        onLinkAboutMeAndAwardsClick={onLinkHomeContainerClick}
        secondLink="Home"
        onLinkOtherCodingProjectsClick={onLinkOtherCodingProjectsClick}
        firstLink="Other Coding Projects"
      />
      <PortfolioHeaderAbout />
      <ContentAbout />
      <Footer
        onLinkOtherCodingProjectsClick={onLinkOtherCodingProjectsClick}
        firstLink="Other Coding Projects"
        onLinkAboutMeAndAwardsClick={onLinkHomeContainer2Click}
        secondLink="Home"
      />
    </div>
  );
};

export default About;
