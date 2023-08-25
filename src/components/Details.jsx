import React, { useState } from "react";

const generateRandomValue = () => {
  return Math.floor(Math.random() * 91) + 10;
};

const generateTableData = () => {
  const tableData = [];
  for (let i = 0; i < 16; i++) {
    const row = {
      name: `Value Attribute ${i + 1}`,
      value1: generateRandomValue(),
      value2: generateRandomValue(),
    };
    tableData.push(row);
  }
  return tableData;
};

const DetailsPage = () => {
  const [tableData] = useState(generateTableData());

  return (
    <div style={{ maxWidth: "800px" }}>
      <h2>Individual Third Party Details</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "60%" }}>String Value</th>
            <th style={{ width: "20%" }}>Integral Value 1</th>
            <th style={{ width: "20%" }}>Integral Value 2</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.value1}</td>
              <td>{row.value2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsPage;
