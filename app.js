
// navbar item enable 
$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})
// popover enable 
$(function () {
    $('[data-toggle="popover"]').popover()
  })



$(document).ready(function(){
  $('#openEmail').on('click',function(){
     window.location.href = "mailto:stani98@libero.it?subject=PreventivoTrasloco&body="; 
  });
});






// animation text
AOS.init({
  duration: 1200,
})

