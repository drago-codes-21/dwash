import React from "react";

const StatsGrid = ({ check }) => {
  const statsData = [
    { name: "BIW", percentage: 100 },
    { name: "TP 1", percentage: 92 },
    { name: "TP 2", percentage: 75 },
    { name: "TP 3", percentage: 60 },
  ];

  return (
    <div className="stats-flexbox">
      {check === true &&
        statsData.map((stat, index) => (
          <div className="stats-card" key={index}>
            <h3>{stat.name}</h3>
            <p>{stat.percentage}%</p>
          </div>
        ))}
    </div>
  );
};

export default StatsGrid;
