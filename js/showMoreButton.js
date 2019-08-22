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
     $(".bntMap").click(function(){
          $(".mapOverlay").show();
     })
     $("#x").click(function(){
          $(".mapOverlay").hide();
     })
});

