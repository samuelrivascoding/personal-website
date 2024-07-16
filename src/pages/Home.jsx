import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PortfolioHeaderHome from "../components/PortfolioHeaderHome";
import FranklinClubHome from "../components/FranklinClubHome";
import ProjectSectionHome from "../components/ProjectSectionHome";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const onLinkAboutMeAndAwardsClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onLinkOtherCodingProjectsClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkOtherCodingProjects2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkAboutMeAndAwards2Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

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
      <Footer
        onLinkOtherCodingProjectsClick={onLinkOtherCodingProjects2Click}
        firstLink="Other Coding Projects"
        onLinkAboutMeAndAwardsClick={onLinkAboutMeAndAwards2Click}
        secondLink="About me and Awards"
      />
    </div>
  );
};

export default Home;
