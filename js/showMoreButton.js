$(document).ready(function(){

     $(".pOrigin").hide();
     $(".pTasting").hide();

     $(".origin").click(function(){
          var parentCard =  $(this).parents(".card").first();
          parentCard.find(".contentGrapes p").filter(":not(.pOrigin)").hide();
          parentCard.find(".pOrigin").toggle("slow");
     });

     $(".tasting").click(function(){
          var parentCard = $(this).parents(".card").first();
          parentCard.find(".contentGrapes p").filter(":not(.pTasting)").hide();
          parentCard.find(".pTasting").toggle("slow");
     });

     $(".mapOverlay").hide();
     
     $(".bntMap").first().click(function(){
          initMap(0, 0, locations = [
               {lat: -1, lng: -1},
               {lat: 1, lng: 1},
           
          ]);
          $(".mapOverlay").show("medium");
     })
     
     $(".bntMap").eq(1).click(function(){
          initMap(52, 21, locations = [
               {lat: 52, lng: 21},
               {lat: 53, lng: 22}, 
          ]);
          $(".mapOverlay").show("medium");
     })
     
     $("#x").click(function(){
          $(".mapOverlay").hide("medium");
     })
});

