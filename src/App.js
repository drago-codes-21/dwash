import { useState } from "react";
import InfoForm from "./components/Input";
import Navbar from "./components/Navbar";
import StatsGrid from "./components/OverviewBox";
import DataTable from "./components/Table";

function App() {
  const [check, setCheck] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <InfoForm handleClick={() => setCheck(!check)} />
        <h3>Top 3 third parties</h3>
        <StatsGrid check={check} />
        <h3>Attribute Level Comparison</h3>
        <DataTable />
      </header>
    </div>
  );
}

export default App;
