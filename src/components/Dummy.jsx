import React, { useState } from "react";

function Table() {
  // Define column and row names
  const columns = [
    "Experian",
    "Company House",
    "Equifax",
    "Registry Trust",
    "Thomson Local",
    "Endole",
    "BT OSIS",
    "HMRC",
  ];

  const rows = [
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

  // Initialize the table data with all values set to 0
  const initialTableData = rows.map(() =>
    columns.map(() => Math.floor(Math.random() * 101))
  );

  const [tableData, setTableData] = useState(initialTableData);

  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <th>{row}</th>
            {tableData[rowIndex].map((value, columnIndex) => (
              <td key={columnIndex}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
