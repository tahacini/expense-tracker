import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const category = useSelector((state) => state.categories);
  const categoryLabels = category.map((el) => el.category);
  const categoryColors = category.map((el) => el.color);
  const expense = useSelector((state) => state.expenses);
  const expenseData = [];

  for (let i = 0; i < categoryLabels.length; i++) {
    let holder = expense.map((item) => {
      if (item.category === categoryLabels[i]) {
        return item.expense;
      }
      return null;
    });
    let total = holder.reduce((pre, cur) => +pre + +cur, 0);
    expenseData.push(total);
  }

  const data = {
    labels: categoryLabels,
    datasets: [
      {
        label: "# of Votes",
        data: expenseData,
        backgroundColor: categoryColors,
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
}

export default PieChart;
