$(document).ready(function(){
d3.csv("data/wine_production.csv", function (error, data) {
    // pick from data fields for chart (Year -> Value per Continent)
    loadedData = data.map(d => { return { "Continent": d["Continent"], "Year": d["Year"], "Value": d["Value"] / 1000 }; });
    new d3plus.LinePlot() 
        .config({
            data: loadedData,
            groupBy: "Continent"
        })
        .x("Year")
        .y("Value")
        .select("#chart")
        .render();
  
});
});