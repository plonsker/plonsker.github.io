/*Downloaded from https://www.codeseek.co/travisw/zillow-like-photo-gallery-MvmXdY */
var startSlideshow = function() {

  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
    {
      src: 'https://s27.postimg.cc/g2so1q503/listing-0.jpg',
      w: 1024,
      h: 679
    },
    {
      src: 'https://s28.postimg.cc/j7pcb7r25/listing-1.jpg',
      w: 1024,
      h: 679
    },
    {
      src: 'https://s27.postimg.cc/f39ejgmqb/listing-2.jpg',
      w: 1024,
      h: 679
    },
    {
      src: 'https://s27.postimg.cc/jcsbgxwvn/listing-3.jpg',
      w: 1024,
      h: 679
    }
  ];

  // define options (if needed)
  var options = {
    // optionName: 'option value'
    // for example:
    index: 2 // start at first slide
  };

  // Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
}

$(function() {

  $('.js-slideshow').on('click', function() {
    startSlideshow();
  });

});
