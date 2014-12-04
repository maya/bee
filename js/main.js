// Quote rotator
(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1200)
            .delay(12000)
            .fadeOut(1200, showNextQuote);
    }
    
    showNextQuote();
    
})();
