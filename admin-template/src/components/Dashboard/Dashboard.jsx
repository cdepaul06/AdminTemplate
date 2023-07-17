import React from "react";
import DashboardCard from "../DashboardCard";
import { useDashboardCards } from "../../constants";

const Dashboard = ({ title, value, icon }) => {
  const cards = useDashboardCards();

  return (
    <>
      <div className='flex flex-wrap justify-evenly m-10 ml-[13%]'>
        {cards.map((card) => (
          <div key={card.id} className='m-2'>
            <DashboardCard
              title={card.title}
              value={card.value}
              icon={card.icon}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
