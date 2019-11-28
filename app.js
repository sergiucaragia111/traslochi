
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

