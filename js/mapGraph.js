$(document).ready(function(){
    $.getJSON("data/countries-110m.json", function(mapData){
        d3.csv("data/totalArea.csv", function(error, areaData){
            const chartData = 
            mapData["objects"]["countries"]["geometries"]
            .map(g => {
                return { id: g["id"], name: g["properties"]["name"]}
            })

            .filter(g => areaData.find(d => d["Country"] === g.name))
            .map(g => {
                return {...g, area: areaData.find(d => d["Country"] === g.name)["Value"]/1000}
            })

            var chart = new d3plus.Geomap()
            .config({
                data: chartData,
                groupBy: "id",
                topojson: "data/countries-110m.json",
                colorScale: "area",
                colorScaleConfig: {scale: "jenks"},
                label: function(d){
                    return d["name"]
                },
                tiles: false
            })
            .render()
        })
    })
})