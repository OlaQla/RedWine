
d3.csv("/data/wine_production.csv", function (error, data) {
    loadedData = data.map(d => { return { "Continent": d["Continent"], "Year": d["Year"], "Value": d["Value"] / 1000 }; });
    
    var attributes = [
        {"Continent": "Europe", "hex": "#E5E500"},
        {"Continent": "Africa", "hex": "#00cc00"},
        {"Continent": "Oceania", "hex": "#0000cc"},
        {"Continent": "Asia", "hex": "#00cccc"},
        {"Continent": "America", "hex": "cccc00"},
    ]
    var visualisation = d3plus.viz()
    .container("#chart")
    .data(loadedData)
    .type("line")
    .id("Continent")
    .text("Continent")
    .attrs(attributes)
    .legend({"size":40})
    .y("Value")
    .x("Year")
    .color("hex")
    .title("Wine production per continent (Years: 1995-2017)")
    .draw();

});