import React from "react";
import Prize from "../../components/competitionpage/Prize";
import Timeline from "../../components/competitionpage/Timeline";
import RootLayout from "../layout";
import { useContext } from "react";
import TeamModalContext from "../../utilities/TeamModalContext";
import TeamModal from "../../components/TeamModal";

function CompetitionPage() {
  return (
    <div className="overflow-hidden bg-background-skyblue">
      <RootLayout>
        <div className="w-full flex flex-col justify-center">
          <Prize />
          <Timeline />
        </div>
      </RootLayout>
    </div>
  );
}

export default CompetitionPage;
