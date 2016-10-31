$(document).ready(function(){
    event.preventDefault();
    $("#about-click").click(function(event){
        $(".about-container").toggle();
    });
   
});

$(document).ready(function(){
    event.preventDefault();
    $("#software-click").click(function(event){
        $("#software-container").toggle();
    });
   
});

$(document).ready(function(){
    event.preventDefault();
    $("#photography-click").click(function(event){
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
 event.preventDefault();
    $("#contact-click").click(function(event){
        $(".contact-imgs").toggle();
    });
  });

$(document).ready(function(){ 
 event.preventDefault();
    $("#music-click").click(function(event){
        $("#music-container").toggle();
    });
  });