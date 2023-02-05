$(document).ready(function () {

    $(".filter-button").click(function () {
      var value = $(this).attr('data-filter');

      if (value == "all") {
        $('.filter').removeClass('hidden');
        $('.filter').show('1000');
      }
      else {
        $('.filter[filter-item="' + value + '"]').removeClass('hidden');
        $(".filter").not('.filter[filter-item="' + value + '"]').addClass('hidden');
        $(".filter").not('.' + value).hide('500');
        $('.filter').filter('.' + value).show('500');

      }
    });

    if ($(".filter-button").removeClass("active")) {
      $(this).removeClass("active");
    }
    $(this).addClass("active");

  });


  $(document).ready(function () {
    $('#btn1').click(function () {
      $('#products').fadeIn();
    });
  });


  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function(){
    if (window.pageYOffset > 100){
      nav.classList.add('bg-dark','shadow');   
    }
  
    else{
      nav.classList.remove('bg-dark','shadow');
    }
  });




