import Table from "./components/Table";
import Manage from "./components/Manage";
import PieChart from "./components/PieChart";
import Footer from "./components/Footer";
import RadarChart from "./components/RadarChart";

function App() {
  return (
    <>
      <div className="wrapper">
        <Manage />
        <Table />
        <div>
          <PieChart />
          <RadarChart />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
