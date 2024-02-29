import React, { useEffect, useState } from "react";
import AdminDashboadrLayout from "../layout";
import Card from "./Card";
import axios from "axios";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Index() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [teams, setTeams] = useState([]);
  const [count, setCount] = useState(null);
  useEffect(() => {
    const getAllTeam = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/teams`,
          { withCredentials: true }
        );
        if (response.data) {
          setTeams(response.data.teams);
          setCount(response.data.total);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getAllTeam();
  }, [isAuthenticated]);

  const selectCompetition = (competition) => {
    if (competition) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/admin/events/${competition}`, {
          withCredentials: true,
        })
        .then((teamsByEvent) => {
          setTeams(teamsByEvent.data.team);
          setCount(teamsByEvent.data.team.length);
        });
    } else {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/admin/teams`, {
          withCredentials: true,
        })
        .then((teams) => {
          setTeams(teams.data.teams);
          setCount(teams.data.total);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <AdminDashboadrLayout>
      <div className="bg-primary-500 p-5 rounded-md border-2 border-black">
        <ul className="font-Montserrat text-[14px] flex text-center text-black overflow-x-auto font-bold mb-5">
          <button onClick={() => selectCompetition(null)}>
            <li className="p-2 bg-white rounded-md mr-1 cursor-pointer h-fit">
              ALL
            </li>
          </button>
          <button
            onClick={() =>
              selectCompetition(process.env.NEXT_PUBLIC_COMPETITION_ID_ML)
            }
          >
            <li className="p-2 min-w-[90px] bg-white rounded-md mx-1 cursor-pointer h-fit">
              MLBB
            </li>
          </button>
          <button
            onClick={() =>
              selectCompetition(process.env.NEXT_PUBLIC_COMPETITION_ID_VALORANT)
            }
          >
            <li className="p-2 min-w-[90px] bg-white rounded-md mx-1 cursor-pointer h-fit">
              Valorant
            </li>
          </button>
          <button
            onClick={() =>
              selectCompetition(process.env.NEXT_PUBLIC_COMPETITION_ID_IC)
            }
          >
            <li className="p-2 min-w[120px] bg-white rounded-md mx-1 cursor-pointer h-fit">
              Informatics
            </li>
          </button>
          <button
            onClick={() =>
              selectCompetition(process.env.NEXT_PUBLIC_COMPETITION_ID_CTF)
            }
          >
            <li className="p-2 min-w-[150px] bg-white rounded-md mx-1 cursor-pointer h-fit">
              Capture The Flag
            </li>
          </button>
          <button
            onClick={() =>
              selectCompetition(process.env.NEXT_PUBLIC_COMPETITION_ID_CP)
            }
          >
            <li className="p-2 min-w-[220px] bg-white rounded-md mx-1 cursor-pointer h-fit">
              Competitive Programming
            </li>
          </button>
          <button
            onClick={() =>
              selectCompetition(process.env.NEXT_PUBLIC_COMPETITION_ID_UXCOMPE)
            }
          >
            <li className="p-2 bg-white rounded-md mx-1 cursor-pointer h-fit">
              UI/UX
            </li>
          </button>
          <button
            onClick={() =>
              selectCompetition(
                process.env.NEXT_PUBLIC_COMPETITION_ID_HACKATHON
              )
            }
          >
            <li className="p-2 bg-white rounded-md mx-1 cursor-pointer h-fit">
              Hackathon
            </li>
          </button>
          <button
            onClick={() =>
              selectCompetition(process.env.NEXT_PUBLIC_COMPETITION_ID_DAC)
            }
          >
            <li className="p-2 min-w-[120px] bg-white rounded-md mx-1 cursor-pointer h-fit">
              Data Analyst
            </li>
          </button>
        </ul>
        <h2 className="text-white font-bold font-Montserrat mb-2">
          {count} teams found
        </h2>
        <div className="text-black">
          {teams &&
            teams.map((team, id) => (
              <Link
                key={id}
                href={`${process.env.NEXT_PUBLIC_FE_URL}/admin/dashboard/teammember/detail/${team._id}`}
              >
                <Card
                  key={team._id}
                  name={team.teamName}
                  member={team.teamMember.length}
                  date={team.createdAt}
                  isverified={team.verified}
                />
              </Link>
            ))}
        </div>
      </div>
    </AdminDashboadrLayout>
  );
}
