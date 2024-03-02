import React, { useEffect, useState } from "react";
import AdminDashboadrLayout from "../layout";
import axios from "axios";
import { useSelector } from "react-redux";
import Link from "next/link";
import Accordion from "../../../../components/LandingPage/Dashboard/Accordion";
import Card from "../team/Card";

const Index = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [courseMember, setCourseMember] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const getAllTeam = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/course/${process.env.NEXT_PUBLIC_COMPETITION_ID_WORKSHOP}`, 
          { withCredentials: true }
        );
        if (response.data) {
          setCourseMember(response.data.user);
          setCount(response.data.user.length);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getAllTeam();
  }, [isAuthenticated]);

  return (
    <AdminDashboadrLayout>
      <div className="bg-primary-500 p-5 rounded-2xl border-2 border-black">
        <h2 className="text-white font-bold font-Montserrat mb-2">
          {count} course participant found
        </h2>
        <div className="text-black">
          {courseMember &&
            courseMember.map((participant, id) => (
              <div
                key={id}
                // href={`${process.env.NEXT_PUBLIC_FE_URL}/admin/dashboard/${participant._id}`}
              >
                <Accordion
                  key={participant._id}
                  name={participant.name}
                  email={participant.email}
                  dateOfBirth={participant.dateOfBirth}
                  province={participant.province}
                  address={participant.address}
                  phone={participant.phone}
                  id={participant._id}
                  status={participant.statusUser}
                  institutionName={participant.institutionName}
                  institutionNumber={participant.institutionNumber}
                  institutionFile={participant.paymentFile}
                  date={participant.dateOfBirth}
                  isverified={participant.verified}
                />
              </div>
            ))}
        </div>
      </div>
    </AdminDashboadrLayout>
  );
};

export default Index;
