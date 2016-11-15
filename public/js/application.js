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


$(document).ready(function(){ 
 event.preventDefault();
    $("#contact-click").click(function(){
        $(".contact-imgs").toggle();
    });
  });

$(document).ready(function(){ 
 event.preventDefault();
    $("#music-click").click(function(){
        $("#music-container").toggle();
    });
  });