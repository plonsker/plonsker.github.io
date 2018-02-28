<script type="text/javascript">






$(document).ready(function(){
  var flag = 0;

  var imageSrc = $("#container a img").attr("src");
  var imageSrc_large = imageSrc.split("icon/").join();



$("#container a img").click(function(event){
  event.preventDefault();
  if(flag === 0) {

    $("#container a img").attr("src",imageSrc.split("icon/").join());
    flag = 1;
    console.log(flag);
    console.log(imageSrc);
    console.log(imageSrc_large);


        }
  else if(flag === 1) {
    imageSrc_large = $("#container a img").attr("src");
    $("#container a img").attr("src","imageSrc");
    flag = 0;
  }
});
});

</script>
