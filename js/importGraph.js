d3.csv("data/import.csv", function (error, data) {
   // pick from data fields for chart (Year -> Value per Continent)
  loadedData = data.map(d => { return { "Country": d["Country"], "Year": d["Year"], "Value": d["Value"] }; });

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
    .select("#import")
    .render();
});