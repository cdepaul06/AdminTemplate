import React from "react";
import DashboardCard from "../DashboardCard";
import { dashboardCards } from "../../constants";

const Dashboard = ({}) => {
  return (
    <div className='flex flex-wrap justify-evenly m-10 ml-[13%]'>
      {dashboardCards.map((card) => (
        <div key={card.id} className='m-2'>
          <DashboardCard
            title={card.title}
            value={card.value}
            icon={card.icon}
          />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
