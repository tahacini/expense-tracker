import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import ChartData from "./ChartData";
import { useEffect, useState } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const category = useSelector((state) => state.categories);
  const expense = useSelector((state) => state.expenses);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(ChartData(category, expense));
  }, [expense, category]);

  const data = {
    labels: datas.labels,
    datasets: [
      {
        data: datas.datas,
        backgroundColor: datas.colors,
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
}

export default PieChart;
