import React from "react";
import Prize from "../../components/competitionpage/Prize";
import Timeline from "../../components/competitionpage/Timeline";
import RootLayout from "../layout";

function CompetitionPage() {
  return (
    <RootLayout>
      <div className="w-full flex flex-col justify-center">
        <Prize />
        <Timeline />
      </div>
    </RootLayout>
  );
}

export default CompetitionPage;
