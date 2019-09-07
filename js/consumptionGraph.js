$(document).ready(function(){

d3.csv("../data/consumption.csv", function (error, data) {
    loadedData = data.map(d => { return { "Country": d["Country"], "Year": d["Year"], "Value": d["Value"] }; });
    new d3plus.Pie()
        .config({
            data: loadedData,
            groupBy: "Country",
            value: function (d) {
                return d["Value"];
            }
        })
        .select("#consumption")
        .render();
});
});