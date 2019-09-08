d3.csv("data/consumptionPerCapita.csv", function (error, data) {
    
     // pick from data fields for chart (Year -> Value per Country)
    loadedData = data.map(d => { return { "Country": d["Country"], "Year": d["Year"], "Value": d["Value"] }; });
    new d3plus.Pie()
        .config({
            data: loadedData,
            groupBy: "Country",
            value: function (d) {
                return d["Value"];
            }
        })
        .select("#consumptionPerCapita")
        .render();

});