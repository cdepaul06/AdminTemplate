import React from "react";
import DashboardCard from "../DashboardCard";
import { useDashboardCards } from "../../constants";
import DynamicBarChart from "../DynamicBarChart";

const Dashboard = () => {
  const cards = useDashboardCards();

  return (
    <>
      <div className='flex flex-wrap justify-evenly mt-10 ml-64'>
        {cards.map((card) => (
          <div key={card.id} className='m-2'>
            <DashboardCard
              title={card.title}
              amount={card.amount}
              icon={card.icon}
            />
          </div>
        ))}
      </div>
      <div className='flex flex-row mt-[5%] ml-[32%]'>
        <DynamicBarChart data={cards} />
      </div>
    </>
  );
};

export default Dashboard;
