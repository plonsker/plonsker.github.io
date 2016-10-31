$(document).ready(function(event){
    event.preventDefault();
    $("#about-click").click(function(event){
        var event = window.event || event;
        var elem = event.target || event.srcElement;
        $(".about-container").toggle();
    });
   
});

$(document).ready(function(){
    event.preventDefault();
    $("#software-click").click(function(event){
        var event = window.event || event;
        var elem = event.target || event.srcElement;
        $("#software-container").toggle();
    });
   
});

$(document).ready(function(){
    event.preventDefault();
    $("#photography-click").click(function(event){
        var event = window.event || event;
        var elem = event.target || event.srcElement;
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
        var event = window.event || event;
        var elem = event.target || event.srcElement;
        $(".contact-imgs").toggle();
    });
  });

$(document).ready(function(){ 
 event.preventDefault();
    $("#music-click").click(function(event){
        var event = window.event || event;
        var elem = event.target || event.srcElement;
        $("#music-container").toggle();
    });
  });