$(document).ready(function(){
    $("#sun").hover(
        function() {
            $(this).css("filter", "brightness(1.5)");
        }, 
        function() {
            $(this).css("filter", "brightness(1)");
        }
    );
});

$(document).ready(function(){
    // Вращение при наведении
    $("#sun2").hover(
        function() {
            $(this).css({
                "animation": "spin 2s linear infinite"
            });
        }, 
        function() {
            $(this).css({
                "animation": "none"
            });
        }
    );
});