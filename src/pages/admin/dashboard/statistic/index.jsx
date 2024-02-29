import React, { useEffect, useState } from "react";
import AdminDashboadrLayout from "../layout";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Index() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [statistics, setStatistics] = useState([]);
  useEffect(() => {
    const getStatistic = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/stat`,
          { withCredentials: true }
        );
        if (response.data) {
          setStatistics(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getStatistic();
  }, [isAuthenticated]);

  return (
    <AdminDashboadrLayout>
      <div
        className={`bg-primary-500 w-full  md:grid md:grid-cols-3 lg:grid-cols-4 transition duration-300 p-5 rounded-md border-2 border-black`}
      >
        <div className="hidden lg:flex transition duration-300"></div>
        {statistics &&
          statistics.map((category) => {
            return (
              <div key={Math.random()} className="my-2">
                <div className="flex md:flex-col justify-between items-center px-3 py-2 bg-text-placeholder-light text-black rounded-xl m-2">
                  <p className="font-Montserrat text-[14px] md:order-2">
                    {category.name}
                  </p>
                  <div className="text-[24px] font-GameOfSquid lg:order-1 md:text-[76px]">
                    {category.total}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </AdminDashboadrLayout>
  );
}
