import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const DynamicBarChart = ({ data }) => {
  return (
    <div className='border-4 border-white w-[800px]'>
      <BarChart
        width={800}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey='amount' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='amount' fill='#8feb7a' />
      </BarChart>
    </div>
  );
};

export default DynamicBarChart;
