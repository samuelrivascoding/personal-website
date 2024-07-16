import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PortfolioHeaderAbout from "../components/PortfolioHeaderAbout";
import ContentAbout from "../components/ContentAbout";
import Footer from "../components/Footer";

const About = () => {
  const navigate = useNavigate();

  const onLinkHomeContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onLinkOtherCodingProjectsClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkHomeContainer2Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="w-full relative bg-background-color-primary flex flex-col items-start justify-start gap-[32px]">
      <Navbar
        onLinkAboutMeAndAwardsClick={onLinkHomeContainerClick}
        secondLink="Home"
        onLinkOtherCodingProjectsClick={onLinkOtherCodingProjectsClick}
        firstLink="Other Coding Projects"
      />
      <PortfolioHeaderAbout />
      <ContentAbout />
      <Footer
        firstLink="Other Coding Projects"
        onLinkAboutMeAndAwardsClick={onLinkHomeContainer2Click}
        secondLink="Home"
      />
    </div>
  );
};

export default About;
