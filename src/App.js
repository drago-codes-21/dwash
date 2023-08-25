import { Route, Routes } from "react-router-dom";
import InfoForm from "./components/Input";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<InfoForm />} />
        <Route path="/individual/data" element={<Table />} />
      </Routes>
    </div>
  );
};

export default App;
