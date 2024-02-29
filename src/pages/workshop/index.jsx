import React from "react";
import HeroWS from "../../components/WorkshopPage/HeroWS";
import Speaker from "../../components/WorkshopPage/Speaker";
import Timeline from "../../components/WorkshopPage/TimeLine";
import Question from "../../components/LandingPage/Question";
import Footer from "../../components/footer";
import RootLayout from "../layout";

function Workshop() {
  return (
    <>
      <RootLayout>
        <HeroWS />
        <Speaker />
        <Timeline />
        <Footer />
      </RootLayout>
    </>
  );
}

export default Workshop;
