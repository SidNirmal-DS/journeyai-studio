import HeroSection from "./components/HeroSection";
import DescribeYourJourney from "./components/DescribeYourJourney";
import StagesCards from "./components/StagesCards";
import ConversionTouchpoints from "./components/ConversionTouchpoints";
import EmotionalTriggers from "./components/EmotionalTriggers";
import ExportJourneySection from "./components/ExportJourneySection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DescribeYourJourney />
      <StagesCards />
      <ConversionTouchpoints />
      <EmotionalTriggers />
      <ExportJourneySection />
      <Footer />
    </>
  );
}
