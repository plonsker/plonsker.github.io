$(document).ready(function(){
    $("#about-click").click(function(event){
        event.preventDefault();
        $(".about-container").fadeToggle();
    });
});

$(document).ready(function(){
    $("#software-click").click(function(event){
        event.preventDefault();
        $("#software-container").fadeToggle();
    });
});

$(document).ready(function(){
    $("#photography-click").click(function(event){
        event.preventDefault();
        $("#photography-container").fadeToggle();
    });
});


$(document).ready(function(){
    $("#contact-click").click(function(event){
        event.preventDefault();
        $(".contact-imgs").fadeToggle();
        $("#contact-click").hide();
    });
});

$(document).ready(function(){
    $("#music-click").click(function(event){
        event.preventDefault();
        $("#music-container").fadeToggle();
    });
});
