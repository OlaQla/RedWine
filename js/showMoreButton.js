$(document).ready(function () {
     // toggled paragraphs
     $(".pOrigin").hide();
     $(".pTasting").hide();
     $(".mapOverlay").hide();

     // show origin text when button is clicked
     $(".origin").click(function () {
          var parentCard = $(this).parents(".card").first();
          parentCard.find(".contentGrapes p").filter(":not(.pOrigin)").hide();
          parentCard.find(".pOrigin").toggle("slow");
     });
     // show text text when button is clicked   
     $(".tasting").click(function () {
          var parentCard = $(this).parents(".card").first();
          parentCard.find(".contentGrapes p").filter(":not(.pTasting)").hide();
          parentCard.find(".pTasting").toggle("slow");
     });

     // show map of region where Cabernet Franc is grown 
     $(".bntMap").first().click(function () {
          initMap(0, 0, locations = [
               { lat: 48, lng: 2 },
               { lat: 37, lng: -104 },
               { lat: 43, lng: 12 },
               { lat: -34, lng: -65 },
               { lat: -29, lng: 26 },
               { lat: 58, lng: -117 },
          ]);
          $(".mapOverlay").show("medium");
     })
     // show map of region where Cabernet Sauvignon is grown 
     $(".bntMap").eq(1).click(function () {
          initMap(0, 0, locations = [
               { lat: 37, lng: -104 },
               { lat: -31, lng: 142 },
               { lat: -28, lng: -70 },
               { lat: -34, lng: -65 },
               { lat: 43, lng: 12 },
               { lat: -29, lng: 26 },
               { lat: 48, lng: 2 },
          ]);
          $(".mapOverlay").show("medium");
     })

     // show map of region where Merlot is grown 
     $(".bntMap").eq(2).click(function () {
          initMap(0, 0, locations = [
               { lat: 37, lng: -104 },
               { lat: 43, lng: 12 },
               { lat: 48, lng: 2 },
               { lat: -28, lng: -70 },
               { lat: -31, lng: 142 },
               { lat: -29, lng: 26 },
               { lat: 46, lng: 8 },
          ]);
          $(".mapOverlay").show("medium");
     })

      // show map of region where Melbac is grown 
     $(".bntMap").eq(3).click(function () {
          initMap(0, 0, locations = [
               { lat: -34, lng: -65 },
               { lat: 37, lng: -104 },
               { lat: -28, lng: -70 },
               { lat: -31, lng: 142 },
               { lat: -31, lng: 142 },
          ]);
          $(".mapOverlay").show("medium");
     })

      // show map of region where Nebbiolo is grown 
     $(".bntMap").eq(4).click(function () {
          initMap(0, 0, locations = [
               { lat: 43, lng: 12 },
          ]);
          $(".mapOverlay").show("medium");
     })

     // show map of region where Pinot Noir is grown 
     $(".bntMap").eq(5).click(function () {
          initMap(0, 0, locations = [
               { lat: 48, lng: 2 },
               { lat: 37, lng: -104 },
               { lat: -37, lng: 175 },
               { lat: 43, lng: 12 },
               { lat: -31, lng: 142 }, ,
               { lat: -28, lng: -70 },
               { lat: 49, lng: 7 },
          ]);
          $(".mapOverlay").show("medium");
     })

      // show map of region where Pinotage is grown 
     $(".bntMap").eq(6).click(function () {
          initMap(0, 0, locations = [
               { lat: -29, lng: 26 },
          ]);
          $(".mapOverlay").show("medium");
     })

      // show map of region where Shiraz is grown 
     $(".bntMap").eq(7).click(function () {
          initMap(0, 0, locations = [
               { lat: -31, lng: 142 },
               { lat: -29, lng: 26 },
               { lat: 37, lng: -104 },
               { lat: -28, lng: -70 },
               { lat: -34, lng: -65 },
          ]);
          $(".mapOverlay").show("medium");
     })

      // show map of region where Grenache is grown 
     $(".bntMap").eq(8).click(function () {
          initMap(0, 0, locations = [
               { lat: 38, lng: -3 },
               { lat: -31, lng: 142 },
          ]);
          $(".mapOverlay").show("medium");
     })
     // show map of region where Zinfandel is grown      
     $(".bntMap").eq(9).click(function () {
          initMap(0, 0, locations = [
               { lat: 37, lng: -104 },
          ]);
          $(".mapOverlay").show("medium");
     })

     // button to hide map overlay
     $("#x").click(function () {
          $(".mapOverlay").hide("medium");
     })

});

