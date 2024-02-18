import React, { useEffect, useState } from "react";
import AdminDashboadrLayout from "../layout";
import Card from "./Card";
import axios from "axios";
import Link from "next/link";

export default function index() {
  const [teams, setTeams] = useState([])
  const [count, setCount] = useState(null)
  useEffect(() => {
    const getAllTeam = async() => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/teams`, { withCredentials: true})
        if(response.data){
          setTeams(response.data.teams)
          setCount(response.data.total)
        }
      } catch(err){
        console.log(err);
      }
    }
    getAllTeam()
  }, [])
  return (
    <AdminDashboadrLayout>
      <div className='bg-primary-500 p-5 rounded-md border-2 border-black'>
        <ul className='font-Montserrat text-[14px] flex text-center text-black overflow-x-auto font-bold mb-5'>
          <li className='p-2 bg-white rounded-md mr-1 cursor-pointer h-fit'>
            ALL
          </li>
          <li className='p-2 min-w-[90px] bg-white rounded-md mx-1 cursor-pointer h-fit'>
            E-Sports
          </li>
          <li className='p-2 min-w[120px] bg-white rounded-md mx-1 cursor-pointer h-fit'>
            Informatics
          </li>
          <li className='p-2 min-w-[150px] bg-white rounded-md mx-1 cursor-pointer h-fit'>
            Capture The Flag
          </li>
          <li className='p-2 min-w-[220px] bg-white rounded-md mx-1 cursor-pointer h-fit'>
            Competitive Programming
          </li>
          <li className='p-2 bg-white rounded-md mx-1 cursor-pointer h-fit'>
            UI/UX
          </li>
          <li className='p-2 bg-white rounded-md mx-1 cursor-pointer h-fit'>
            Hacketon
          </li>
          <li className='p-2 min-w-[120px] bg-white rounded-md mx-1 cursor-pointer h-fit'>
            Data Analyst
          </li>
        </ul>
        <h2 className='text-white font-bold font-Montserrat mb-2'>
          {count} teams found
        </h2>
        <div className="text-black">
          {teams && teams?.map((team) => (
            <Link href={`${process.env.NEXT_PUBLIC_FE_URL}/admin/dashboard/teammember/detail/${team._id}`}>
                <Card key={team._id}
                name={team.teamName}
                desc={team.teamMember.length}
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
