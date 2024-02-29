import React, { useEffect, useState } from "react";
import AdminDashboadrLayout from "../layout";
import axios from "axios";
import { useSelector } from "react-redux";
import Link from "next/link";
import Card from "../team/Card";

const Index = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [course, setCourse] = useState([]);
  const [count, setCount] = useState(null);
  useEffect(() => {
    const getAllTeam = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/course/get`,
          { withCredentials: true }
        );
        if (response.data) {
          setCourse(response.data.user);
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
          {course &&
            course.map((participant, id) => (
              <Link
                key={id}
                href={`${process.env.NEXT_PUBLIC_FE_URL}/admin/dashboard/${participant._id}`}
              >
                <Card
                  key={participant._id}
                  name={participant.name}
                  date={participant.createdAt}
                  isverified={participant.verified}
                />
              </Link>
            ))}
        </div>
      </div>
    </AdminDashboadrLayout>
  );
};

export default Index;
