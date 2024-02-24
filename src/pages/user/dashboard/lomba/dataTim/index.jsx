import React, { useState, useEffect } from "react";
import DataTimGeneral from "./dataTimGeneral";
import DataTimUX from "./dataTimUX";
import { useRouter } from "next/router";

const NewTeam = () => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const competitionIds = ["cp", "ctf", "da", "uix", "hck", "esp", "ic"];
  const { competitionId } = router.query;
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
    if (competitionId != undefined && !competitionIds.includes(competitionId)) {
      toast.error("Competition not found", {
        className: "toast-error",
      });
      Router.push("/competition");
    }
  }, [competitionId]);

  const createNewTeam = (
    competitionId,
    teamName,
    teamLeader,
    teamInstitution,
    token
  ) => {
    const eventId = competitionEnv[`${competitionId}`];
    const newTeamData = {
      eventId,
      teamName,
      teamLeader,
      teamInstitution,
    };
    // console.log("Data :", newTeamData);
    axios
      .post(baseURL + "/team/new", newTeamData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Team created successfully!", {
          className: "toast-success",
        });
        Router.replace(
          "/competition/register/newteam/success/" + competitionId
        );
        return res.data.data;
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error(err.response.data.message, {
          className: "toast-error",
        });
        return err.response.data;
      });
  };

  const registerTeamHandler = () => {
    if (localStorage.getItem("token") == null) {
      toast.error("Please login first", {
        className: "toast-error",
      });
      return;
    }
    const { _id } = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("token"));
    let evenId;
    //! prevent empty
    if (teamName == "") {
      toast.error("Team name cannot be empty", {
        className: "toast-error",
      });
    }
    if (teamInstitution == "") {
      toast.error("Team institution cannot be empty", {
        className: "toast-error",
      });
    }

    if (teamName.length > 0 && teamInstitution.length > 0) {
      if (competitionId == "esp") {
        createNewTeam(game, teamName, _id, teamInstitution, token);
      } else {
        createNewTeam(competitionId, teamName, _id, teamInstitution, token);
      }
    }
  };

  return <>{competitionId === "UX" ? <DataTimUX /> : <DataTimGeneral />}</>;
};

export default NewTeam;
