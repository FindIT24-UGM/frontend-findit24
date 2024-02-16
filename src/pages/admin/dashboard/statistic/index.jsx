import React from "react";
import AdminDashboadrLayout from "../layout";

export default function index({ categories }) {
  const data = [
    {
      name: "Registered Team",
      number: 84,
    },
    {
      name: "People Joined",
      number: 317,
    },
    {
      name: "Unverified Team",
      number: 16,
    },
    {
      name: "Capture The Flag",
      number: 12,
    },
    {
      name: "Competitive Programming",
      number: 23,
    },
    {
      name: "UX Competition",
      number: 17,
    },
    {
      name: "Data Analyst",
      number: 28,
    },
    {
      name: "Hacketon",
      number: 34,
    },
    {
      name: "E-Sports",
      number: 49,
    },
    {
      name: "Informatics Competition",
      number: 33,
    },
  ];
  return (
    <AdminDashboadrLayout>
      <div
        className={`bg-primary-500 w-full  md:grid md:grid-cols-3 lg:grid-cols-4 transition duration-300 p-5 rounded-md border-2 border-black`}
      >
        <div className="hidden lg:flex transition duration-300"></div>
        {data.map((items, i) => {
          return (
            <div key={i} className="my-2">
              <div className="flex md:flex-col justify-between items-center px-3 py-2 bg-text-placeholder-light rounded-xl m-2">
                <p className="font-Montserrat text-[14px] md:order-2">
                  {items.name}
                </p>
                <div className="text-[24px] font-GameOfSquid lg:order-1 md:text-[76px]">
                  {items.number}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AdminDashboadrLayout>
  );
}
