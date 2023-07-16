import React from "react";

const DashboardCard = ({ title, value, icon }) => {
  const IconComponent = icon;
  return (
    <div className='bg-[#024362] rounded-lg shadow-lg p-5 border'>
      <div className='flex flex-row items-center'>
        <IconComponent className='w-10 h-10 text-white ml-2' />
        <div className='ml-5'>
          <p className='text-white text-lg font-semibold underline'>{title}</p>
          <p className='text-white text-2xl font-semibold'>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
