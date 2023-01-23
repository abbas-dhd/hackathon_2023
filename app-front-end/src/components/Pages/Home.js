import { useEffect } from "react";
import HeroSection from "../HeroSection";
import MenSectionCards from "../MenSectionCards";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection />
      <MenSectionCards />
      {/* <WomenSectionCards /> */}
    </>
  );
};

export default Home;
