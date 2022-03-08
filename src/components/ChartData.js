function ChartData(categories, expenses) {
  const category = categories;
  const expense = expenses;
  const fallBack = {
    labels: ["No Expense"],
    colors: ["green"],
    datas: [1],
  };
  const chartDatas = {
    labels: [],
    colors: [],
    datas: [],
  };

  for (let i = 0; i < category.length; i++) {
    let holder = expense.map((item) => {
      if (item.category === category[i].category) {
        return item.expense;
      }
      return null;
    });
    let total = holder.reduce((pre, cur) => +pre + +cur, 0);
    if (total < 0) {
      chartDatas.labels.push(category[i].category);
      chartDatas.colors.push(category[i].color);
      chartDatas.datas.push(total);
    }
  }

  if (chartDatas.datas.length > 0) {
    return chartDatas;
  }
  return fallBack;
}

export default ChartData;
