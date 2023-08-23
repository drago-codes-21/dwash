import React from "react";

const DataTable = () => {
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>BIW</th>
            <th>TP 1</th>
            <th>TP 2</th>
            <th>TP 3</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 17 }, (_, index) => (
            <tr key={index}>
              <td>Data {index + 1}-1</td>
              <td>Data {index + 1}-2</td>
              <td>Data {index + 1}-3</td>
              <td>Data {index + 1}-4</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
