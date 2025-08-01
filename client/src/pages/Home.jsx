import Banner from "../components/Banner";
import FeaturedSection from "../components/FeaturedSection";
import Hero from "../components/Hero";
import NewsLetter from "../components/NewsLetter";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <Banner />
      <Testimonial />
      <NewsLetter />
    </>
  );
};

export default Home;
