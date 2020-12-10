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

  setTimeout(() => current[this.parentNode.id - 1].classList.remove('fade-in'), 300);

  e.target.style.opacity = opacity;
}

function currentClick(e) {
  let imgArr = []


  let currentGallery = imgsDiv[this.id-1];


  $(currentGallery).children('img').each(function(){
    imgArr.push(this);
});

// imgArr.forEach(item =>
//   console.log(item)
//   if (current[this.id-1].src === item.src)){
//     current[this.id-1].src = current[this.id].src
//   }
// )

console.log(imgArr.indexOf(current[this.id].src));

//theres only one current image uuuggghh


current[this.id-1].src = imgArr[0].src

//maybe do another loop here

// console.log(imgArr.indexOf(current[this.id].src))

// console.log(imgArr[this.id])


  // console.log(imgArr);

}
