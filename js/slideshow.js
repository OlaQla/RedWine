$(document).ready(function () {

    $(".slideshow").css("left", 0); // reset slide position

    // function transitioning slides in a loop with 5s delay
    function moveSlide() {
        var slideshow = $(".slideshow");
        var leftvalue = slideshow.position().left;
        var firstImage = slideshow.children().first();
        var imageSize = firstImage.width();
        var maxwidth = slideshow.width(); // total width of slides 
       
        /*transitioning from the last slide to the first one with no transition effect,
         to make impression of having infinite number of slides*/
        if (leftvalue - imageSize - 20 <= - maxwidth) { // 20 is put here to avoid rounding errors
            slideshow.css("transition", "none");
            slideshow.css("left", 0);
            setTimeout(moveSlide, 0)

        // transition for all elements except the last one
        } else {
            slideshow.css("transition", "left 2s");
            slideshow.css("left", leftvalue - imageSize);
            setTimeout(moveSlide, 5000)
        }
    }
    setTimeout(moveSlide, 5000)// initial kick off of transitioning
});