const current = document.querySelectorAll('.current');
const imgs = document.querySelectorAll('.imgs img');
const imgParent = document.querySelectorAll('.imgs');
const opacity = 0.4;

imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));




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

  console.log(this.parentNode.id)

  current[this.parentNode.id - 1].src = e.target.src;

  current[this.parentNode.id - 1].classList.add('fade-in');

  setTimeout(() => current[this.parentNode.id - 1].classList.remove('fade-in'), 300);

  e.target.style.opacity = opacity;
}
