import React from "react";

function generateRandomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generateRandomPercentage() {
  return Math.floor(Math.random() * (85 - 50 + 1)) + 50;
}

function Table() {
  const rowNames = [
    "Legal Name",
    "Country",
    "Address",
    "Trading Name",
    "VAT Number",
    "SIC Code",
    "Business Name",
    "Director",
    "UBO",
  ];

  // Generate random data for the table
  const tableData = rowNames.map(() => ({
    biwData: generateRandomString(Math.floor(Math.random() * 3) + 6),
    currentTp: generateRandomString(Math.floor(Math.random() * 3) + 6),
    accuracy: generateRandomPercentage(),
  }));

  return (
    <>
      <h2>Attribute wise Third party Data</h2>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>BIW Data</th>
            <th>Current TP</th>
            <th>Accuracy</th>
          </tr>
        </thead>
        <tbody>
          {rowNames.map((row, index) => (
            <tr key={index}>
              <th>{row}</th>
              <td>{tableData[index].biwData}</td>
              <td>{tableData[index].currentTp}</td>
              <td>{tableData[index].accuracy}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
