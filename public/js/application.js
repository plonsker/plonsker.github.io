$(document).ready(function(){
    event.preventDefault();
    $("#about-click").click(function(){
        $(".about-container").toggle();
    });
   
});

$(document).ready(function(){
    event.preventDefault();
    $("#software-click").click(function(){
        $("#software-container").toggle();
    });
   
});

$(document).ready(function(){
    event.preventDefault();
    $("#photography-click").click(function(){
        $("#photography-container").toggle();
         var flkty = new Flickity( '.main-gallery', {
          cellAlign: 'left',
          contain: true,
          lazyLoad: true,
          pageDots: false,
          autoPlay: true
        });
    });
   
});

