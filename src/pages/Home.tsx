import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PortfolioHeaderHome from "../components/PortfolioHeaderHome";
import FranklinClubHome from "../components/FranklinClubHome";
import ProjectSectionHome from "../components/ProjectSectionHome";
import Footer from "../components/Footer";

const Home: FunctionComponentHomeType = () => {
  const navigate = useNavigate();

  const onLinkAboutMeAndAwardsClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onLinkOtherCodingProjectsClick = useCallback(() => {
<<<<<<< HEAD
    navigate("/");
=======
    navigate("/projects");

>>>>>>> Incoming
  }, [navigate]);

<<<<<<< HEAD
=======
  const onLinkOtherCodingProjects2Click = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onLinkAboutMeAndAwards2Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);


>>>>>>> Incoming
  return (
    <div className="w-full relative bg-background-color-primary flex flex-col items-start justify-start gap-[40px]">
      <Navbar
        onLinkAboutMeAndAwardsClick={onLinkAboutMeAndAwardsClick}
        secondLink="About me and Awards"
        onLinkOtherCodingProjectsClick={onLinkOtherCodingProjectsClick}
        firstLink="Other Coding Projects"
      />
      <PortfolioHeaderHome />
      <FranklinClubHome />
      <ProjectSectionHome />
<<<<<<< HEAD
      <Footer />
=======
      <Footer
        onLinkOtherCodingProjectsClick={onLinkOtherCodingProjects2Click}
        firstLink="Other Coding Projects"
        onLinkAboutMeAndAwardsClick={onLinkAboutMeAndAwards2Click}
        secondLink="About me and Awards"
      />

>>>>>>> Incoming
    </div>
  );
};

export default Home;
