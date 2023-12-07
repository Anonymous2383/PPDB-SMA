//  $(document).ready(function () {
//     $("#pre").fadeOut("slow");

//    console.log(Document.getElementById("pre"))
//  });

let order = () => alert("Orderan Di Terima!!");
let contact = () => alert("Pesan Di Kirim");

var loader = document.getElementById("pre");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
$(document).ready(function () {
  $(".hover-div").hover(
    function () {
      $(".hover-div").stop().fadeTo("fast", 0.3);
      $(this).stop().fadeTo("fast", 1);
    },
    function () {
      $(".hover-div").stop().fadeTo("fast", 1);
    }
  );
});
