import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PortfolioHeaderAbout from "../components/PortfolioHeaderAbout";
import ContentAbout from "../components/ContentAbout";
import Footer from "../components/Footer";

const About: FunctionComponentAboutType = () => {
  const navigate = useNavigate();

  const onLinkHomeContainerClick = useCallback(() => {
<<<<<<< HEAD
    navigate("/home");
=======
    navigate("/");

>>>>>>> Incoming
  }, [navigate]);

  const onLinkOtherCodingProjectsClick = useCallback(() => {
<<<<<<< HEAD
=======
    navigate("/projects");
  }, [navigate]);

  const onLinkHomeContainer2Click = useCallback(() => {

>>>>>>> Incoming
    navigate("/");
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
<<<<<<< HEAD
      <Footer />
=======
      <Footer
        firstLink="Other Coding Projects"
        onLinkAboutMeAndAwardsClick={onLinkHomeContainer2Click}
        secondLink="Home"
      />

>>>>>>> Incoming
    </div>
  );
};

export default About;
