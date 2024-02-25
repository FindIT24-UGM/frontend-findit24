import React, { useEffect, useState } from "react";
import AdminDashboadrLayout from "../layout";
// import Card from "../team/Card";
// import axios from "axios";
// import Link from "next/link";
// import { useSelector } from "react-redux";

const Index = () => {
    // const { isAuthenticated } = useSelector((state) => state.auth);
    // const [teams, setTeams] = useState([])
    // const [count, setCount] = useState(null)
    // useEffect(() => {
    //     const getAllTeam = async() => {
    //     try {
    //         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/teams`, { withCredentials: true})
    //         if(response.data){
    //         setTeams(response.data.teams)
    //         setCount(response.data.total)
    //         }
    //     } catch(err){
    //         console.log(err);
    //     }
    //     }
    //     getAllTeam()
    // }, [isAuthenticated])

    // const selectCompetition = (competition) => {
    //     axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/events/${competition}`, { withCredentials: true})
    //     .then(teamsByEvent => {
    //         setTeams(teamsByEvent.data.team)
    //         setCount(teamsByEvent.data.team.length)
    //     })
    // }

    return (
        <AdminDashboadrLayout>
            <div className='bg-primary-500 p-5 rounded-2xl border-2 border-black'>
                {/* <h2 className='text-white font-bold font-Montserrat mb-2'>
                {count} teams found
                </h2>
                <div className="text-black">
                {teams && teams.map((team) => (
                    <Link href={`${process.env.NEXT_PUBLIC_FE_URL}/admin/dashboard/teammember/detail/${team._id}`}>
                        <Card key={team._id}
                        name={team.teamName}
                        member={team.teamMember.length}
                        date={team.createdAt}
                        isverified={team.verified}
                    />
                    </Link>
                ))}
                </div> */}
            </div>
        </AdminDashboadrLayout>
    );
}

export default Index;
