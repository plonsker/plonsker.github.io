$(document).ready(function(){
    $("#about-click").click(function(event){
        event.preventDefault();
        $(".about-container").toggle();
    });
   
});

$(document).ready(function(){
    $("#software-click").click(function(event){
        event.preventDefault();
        $("#software-container").toggle();
    });
   
});

$(document).ready(function(){
    $("#photography-click").click(function(event){
        event.preventDefault();
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


$(document).ready(function(){ 
    $("#contact-click").click(function(event){
        event.preventDefault();
        $(".contact-imgs").toggle();
    });
  });

$(document).ready(function(){ 
    $("#music-click").click(function(event){
        event.preventDefault();
        $("#music-container").toggle();
    });
  });