$(document).ready(function() {
    // .slideshow -> set left to 0 -> $().css("left", 0)
        $(".slideshow").css("left", 0);
    // set timer func -> get left, if max set to 0 else set left to one you got + 100%

    function moveSlide () {
        var slideshow = $(".slideshow");
        var leftvalue = slideshow.position().left;

        var firstImage = slideshow.children().first();
        var imageSize = firstImage.width();

        console.log(leftvalue);

        var maxwidth = slideshow.width();
        console.log(maxwidth);

        if (leftvalue - imageSize <= - maxwidth){
            slideshow.css("left", 0);
        }else {
           
            slideshow.css("left", leftvalue - imageSize);
        }
        
        setTimeout(moveSlide, 5000)
    }
    
    
    setTimeout(moveSlide, 5000)
});