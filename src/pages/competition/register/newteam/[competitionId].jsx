import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import DataTimGeneral from "../../../user/dashboard/lomba/dataTimet";
import DataTimUX from "../../../user/dashboard/lomba/dataTimet/datatimux";

export default function NewTeam() {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const Router = useRouter();
  const competitionIds = ["cp", "ctf", "da", "uix", "hck", "esp", "ic"];
  const competitionId = router.query;
  const [teamName, setTeamName] = useState("");
  const [teamInstitution, setTeamInstitution] = useState("");
  const [game, setGame] = useState("ml");

  const competitionEnv = {
    cp: process.env.NEXT_PUBLIC_COMPETITION_ID_CP,
    ctf: process.env.NEXT_PUBLIC_COMPETITION_ID_CTF,
    da: process.env.NEXT_PUBLIC_COMPETITION_ID_DA,
    hck: process.env.NEXT_PUBLIC_COMPETITION_ID_HACKATHON,
    uix: process.env.NEXT_PUBLIC_COMPETITION_ID_UIUX,
    itAcademy: process.env.NEXT_PUBLIC_COMPETITION_ID_ITACADEMY,
    ic: process.env.NEXT_PUBLIC_COMPETITION_ID_IC,
    // esports
    valorant: process.env.NEXT_PUBLIC_COMPETITION_ID_VALORANT,
    ml: process.env.NEXT_PUBLIC_COMPETITION_ID_ML,
  };

  useEffect(() => {
    if (
      competitionId != "undefined" &&
      !competitionIds.includes(competitionId)
    ) {
      Router.push("/competition");
    }
  }, [competitionIds]);

  const createNewTeam = ({
    competitionId,
    teamName,
    teamInstitution,
    teamLeader,
    token,
  }) => {
    const eventId = competitionEnv[`${competitionId}`];
    const newTeamData = {
      eventId,
      teamName,
      teamLeader,
      teamInstitution,
    };
    console.log(`Data : ${newTeamData}`);
    axios
      .post(baseURL + "/team/new", newTeamData, {
        headers: {
          Authorization: `Bewarer ${token}`,
        },
      })
      .then((res) => {
        console.log(`Response: ${res}`);
        Router.replace("/competition/register/newteam/success" + competitionId);
        return res.data.data;
      })
      .catch((err) => {
        console.log(err.response.data.message);
        return err.response.data;
      });
  };

  const registerTeamHandler = () => {
    if (localStorage.getItem(token) == null) {
      toast.error("login first");
      return;
    }

    const { _id } = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("token"));
    let evenId;

    if (teamName == "") {
      toast.error("Please add your team name!");
    }
    if (teamInstitution == "") {
      toast.error("Please add you team institution!");
    }

    if (teamName.length > 0 && teamInstitution.length > 0) {
      if (competitionId == "esp") {
        createNewTeam(game, teamName, _id, teamInstitution, token);
      } else {
        createNewTeam(
          competitionId,
          teamName,
          _id,
          teamInstitution,
          teamLeader
        );
      }
    }
  };

  return <>{competitionId == "uix" ? <DataTimUX /> : <DataTimGeneral />}</>;
}
