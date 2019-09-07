d3.csv("../data/export.csv", function (error, data) {
  loadedData = data.map(d => { return { "Country": d["Country"], "Year": d["Year"], "Value": d["Value"] }; });

  console.log(JSON.stringify(loadedData[0]));

  new d3plus.BarChart()
    .config({
      data: loadedData,
      groupBy: "Country",
      x: "Country",
      y: "Value",
      time: "Year",
      legend: false
    })
    .yDomain([0, 25000])
    .select("#export")
    .render();
});