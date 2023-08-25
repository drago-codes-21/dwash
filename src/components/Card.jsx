import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ check }) => {
  const statsData = [
    { name: "BIW", percentage: 100, color: "#007bff" },
    { name: "DNB", percentage: 92, color: "#50C878" },
    { name: "Endole", percentage: 75, color: "#E4D00A" },
    { name: "Experian", percentage: 60, color: "	#EE4B2B" },
  ];

  return (
    <div className="stats-flexbox">
      {check === true &&
        statsData.map((stat, idx) => (
          <div className="company-card" key={idx}>
            <Link to="/individual/data" style={{ textDecoration: "none" }}>
              <div className="company-header">{stat.name}</div>
              <div className="accuracy-label">
                <span
                  className="accuracy-value"
                  style={{ color: `${stat.color}` }}
                >
                  {stat.percentage}%
                </span>{" "}
                Accuracy
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Cards;
