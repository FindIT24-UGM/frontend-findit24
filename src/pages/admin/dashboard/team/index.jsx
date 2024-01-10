import React from "react";
import AdminDashboadrLayout from "../layout";
import Card from "./Card";

export default function index() {
  return (
    <AdminDashboadrLayout>
      <div className='bg-primary-500 p-5 rounded-md list-disc'>
        <ul className='font-Montserrat text-[14px] flex text-center overflow-x-auto font-bold mb-5'>
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
          8 teams found
        </h2>
        <div>
          <Card
            name={"SamSan Tech"}
            desc={"3 people"}
            date={"16 Feb 2023"}
            isverified={1}
          />
          <Card
            name={"SamSan Tech"}
            desc={"3 people"}
            date={"16 Feb 2023"}
            isverified={0}
          />
          <Card
            name={"SamSan Tech"}
            desc={"3 people"}
            date={"16 Feb 2023"}
            isverified={0}
          />
          <Card
            name={"SamSan Tech"}
            desc={"3 people"}
            date={"16 Feb 2023"}
            isverified={1}
          />
          <Card
            name={"SamSan Tech"}
            desc={"3 people"}
            date={"16 Feb 2023"}
            isverified={1}
          />
          <Card
            name={"SamSan Tech"}
            desc={"3 people"}
            date={"16 Feb 2023"}
            isverified={0}
          />
          <Card
            name={"SamSan Tech"}
            desc={"3 people"}
            date={"16 Feb 2023"}
            isverified={1}
          />
          <Card
            name={"SamSan Tech"}
            desc={"3 people"}
            date={"16 Feb 2023"}
            isverified={0}
          />
        </div>
      </div>
    </AdminDashboadrLayout>
  );
}
