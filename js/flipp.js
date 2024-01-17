$(document).ready(function() {
    $(".flip-container").on("click", function() {
        $(this).find(".flipper").toggleClass("flipped");
    });
});