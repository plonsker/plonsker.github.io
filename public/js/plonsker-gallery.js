const current = document.querySelectorAll('.current');
const imgs = document.querySelectorAll('.imgs img');
const imgsDiv = document.querySelectorAll('.imgs');
const opacity = 0.4;

imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

current.forEach(currentImg => currentImg.addEventListener('click', currentClick));


$.each($(".current"), function(index, value){
  var num = index + 1;
  $(value).attr("id", + num);
});

$.each($(".imgs"), function(index, value){
  var num = index + 1;
  $(value).attr("id", + num);
});



function imgClick(e) {
  imgs.forEach(img => (img.style.opacity = 1));
  current[this.parentNode.id - 1].src = e.target.src;
  current[this.parentNode.id - 1].classList.add('fade-in');
  setTimeout(() => current[this.parentNode.id - 1].classList.remove('fade-in'), 333);
  e.target.style.opacity = opacity;
}


var i=0;


function currentClick(e) {

  let imgArr = []
  let currentGallery = imgsDiv[this.id-1];

  $(currentGallery).children('img').each(function(){
    imgArr.push(this.src);
  });

  i++

  if(i < imgArr.length) {

    current[this.id-1].src = imgArr[i];

  } else {
    current[this.id-1].src = imgArr[0]
    i=0
  }

  imgs.forEach(img => (img.style.opacity = 1));
  current[this.id - 1].classList.add('fade-in');
  setTimeout(() => current[this.id - 1].classList.remove('fade-in'), 333);

}
