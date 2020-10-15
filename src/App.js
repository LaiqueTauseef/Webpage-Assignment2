import React from "react";
import MainLogoSection from "./components/mainLogoSection";
import IntroSection from "./components/introSection";
import ExpertiseSection from "./components/expertiseSection";
import ExperienceSection from "./components/experienceSection";
import TweetsSection from "./components/tweetsSection";
import TrustedBySection from "./components/trustedBySection";
import TestimonialsSection from "./components/testimonialsSection";
import ContactUsSection from "./components/contactUsSection";
import UptoDateSection from "./components/uptoDateSection";
import BottomLinksSection from "./components/bottomLinksSection";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <MainLogoSection />
      <IntroSection />
      <ExpertiseSection />
      <ExperienceSection />
      <TweetsSection />
      <TrustedBySection />
      <TestimonialsSection />
      <ContactUsSection />
      <UptoDateSection />
      <BottomLinksSection />
      <section id="background2"></section>
    </React.Fragment>
  );
}

export default App;
