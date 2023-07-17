import React, { useState, useEffect } from "react";

const DashboardCard = ({ title, value, icon }) => {
  const IconComponent = icon;

  // State to hold box shadow
  const [boxShadow, setBoxShadow] = useState("");

  // Add green box shadow every time value changes
  useEffect(() => {
    setBoxShadow("0 0 10px 3px limegreen");

    // After 300ms, remove the box shadow
    const timeoutId = setTimeout(() => setBoxShadow(""), 500);
    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <div
      style={{
        boxShadow: boxShadow,
        transition: "box-shadow 500ms",
      }}
      className='rounded-lg shadow-lg p-5 border bg-[#024362]'
    >
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
