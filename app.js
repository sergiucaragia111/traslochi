
// navbar item enable 
$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})
// popover enable 
$(function () {
    $('[data-toggle="popover"]').popover()
  })

  // datepicker
  $('#datepicker').datepicker({
    uiLibrary: 'bootstrap4',
    format: 'dd/mm/yyyy',
    startDate: '-3d'
});



$(document).ready(function(){
  $('#openEmail').on('click',function(){
     window.location.href = "mailto:stani98@libero.it?subject=PreventivoTrasloco&body="; 
  });
});

$('#bottone').click(()=>{
  window.open('tel:393208921103');
});
 
// ANIMAZIONE TESTO

/*
See https://www.greensock.com/splittext/ for details. 
This demo uses SplitText which is a membership benefit of Club GreenSock, https://www.greensock.com/club/
*/
function runText (textLine){
  var mySplitText = new SplitText(textLine, { type: "chars" }),
  tl = new TimelineLite();

tl.staggerFrom(mySplitText.chars, 0.01, { opacity: 0 }, 0.08);
}

runText("#hud");

