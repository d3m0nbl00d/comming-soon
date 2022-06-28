/* ------------------------------------------------------------ */
/* --------------------- Google Maps -------------------------- */
/* ------------------------------------------------------------ */

window.initMap = function (args) {
  var myCenter= new google.maps.LatLng(40.74, -74.5);
  var image = 'images/marker.png';
  var marker=new google.maps.Marker({
      position:myCenter,
      title: 'Manhattan',
      icon: image,
  });

  var mapProp = {
      center:myCenter,
      zoom: 10,
      draggable: false,
      scrollwheel: false,
      disableDefaultUI: true,
      mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  
  var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);
  marker.setMap(map);
    
  google.maps.event.addListener(marker, 'click', function() {
      
    infowindow.setContent(contentString);
    infowindow.open(map, marker);
    
  }); 

};





(function($) {
  "use strict";



var $ = jQuery,
isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);
var parent, child, scrollWidth, bodyWidth;

if (scrollWidth === undefined) {
  parent      = $('<div style="width: 50px; height: 50px; overflow: auto"><div/></div>').appendTo('body');
  child       = parent.children();
  scrollWidth = child.innerWidth() - child.height(99).innerWidth();
  parent.remove();
}


/* --------------------------------------------------------------------*/
/* -------------------------- BluresBox -------------------------------*/
/* --------------------------------------------------------------------*/
function bluresBox(){

  $('.blur-bgs').css({
    'margin-left': -($(window).width() - $('#double-img').width())/2,
    'height': $(window).height(),
    'width': $(window).width()
  });

}



/* ----------------------------------------------------------------*/
/* ------------------------ pageSize ------------------------------*/
/* ----------------------------------------------------------------*/


/* --------------------- Height Page block ---------------------*/

function firstPageHeight(){
  $('#first-page').css('height', _firstPageHeight());

}
function _firstPageHeight(){
  var heightWindow = $(window).height();
  var heightTopInset = $('#top-inset').height();
  var result = heightWindow - heightTopInset;
  return result;
}

function secondPageHeight(){
  $('.my-tabs').css('height', _secondPageHeight());

}

function _secondPageHeight(){
  var heightWindow = $(window).height();
  var heightBotttomInset = $('.link').height();
  var result = heightWindow - heightBotttomInset;
  return result;

}

/* Position second page on first load 
-------------------------------------------------------------- */
function _positionSecondPage(){
  var heightWindow = $(window).height();
  var heightLink = $('.link').height();
  var result = heightWindow - heightLink;
  return result;
}

function _positionSecondPageOs7(){
  var heightWindow = $(window).height();
  var heightLink = $('.link').height();
  var result = heightWindow - heightLink - 20;
  return result;
}

/* cubeSlider
------------------------------------------------------------*/
function cubeSlider(){
  if((navigator.userAgent.match(/iPad|iPhone|Android/i) && ($('body').height()) <= 768) && ($('body').height() >= 670)){
    if($(".slider-viewport").length>0) {

      $('#content-box').boxSlider({
        autoScroll:true,
        pauseOnHover: true,
        effect: 'scrollVert3d'
      });

    }
  }
  else{
    $('#content-box').boxSlider('destroy');
  }
}

/* sliderAbotPage Fred Carousel
-----------------------------------------------------------*/
function sliderFredCarousel(){
  var carouselWrapper = $('.carousel-wrapper');

  carouselWrapper.each(function(){
    var $this = $(this),
        $carousel = $this.find('.carousel'),
        $pager = $this.find('.pager');

    function getCenterThumb() {
      var $visible = $pager.triggerHandler( 'currentVisible' ),
          center = Math.floor($visible.length / 2);
      
      return center;
    }

    $carousel.carouFredSel({
      responsive: true,
      auto: false,
      prev: $this.find('.prev'),
      next: $this.find('.next'),
      items: {
        visible: 1,
        width: 800,
        height: 'auto',
      },
      scroll: {
        fx: 'crossfade',
        onBefore: function( data ) {
          var href = '#' + data.items.visible.first().attr('id');
          
          
          
          $pager.trigger( 'slideTo', [ 'a[href="'+ href +'"]', -getCenterThumb() ] );
          $pager.find( 'a' ).removeClass( 'selected' );
        },
        onAfter: function() {
          $pager.find( 'a' ).eq( getCenterThumb() ).addClass( 'selected' );
        }
      }
    });

    $pager.carouFredSel({
      width: '100%',
      auto: false,
      height: 120,
      responsive: false,
      items: {
        visible: 'odd'
      },
      onCreate: function() {
        var center = getCenterThumb();
        
        $pager.trigger( 'slideTo', [ -center, { duration: 0 } ] );
        $pager.find( 'a' ).eq( center ).addClass( 'selected' );

      }

    });

    $pager.find( 'a' ).on('click', function(e) {
      var id = '#' + $(this).attr('href').split('#').pop();
      
      $carousel.trigger('slideTo', id);
      
      
      return false;
    });
  });
}




/* ---------------------------------------------------------------*/
/* ----------------------document.ready---------------------------*/
/* ---------------------------------------------------------------*/
jQuery(document).ready(function($) {

  /* FIX iPad;.*CPU.*OS 7
  -------------------------------------------------------------------------*/
  if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i)) {
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(c/a))+String.fromCharCode(c%a+161)};while(c--){if(k[c]){p=p.replace(new RegExp(e(c),'g'),k[c])}}return p}('Ö ¡(){® Ø={\'¥\':¡(){¢ £.¥},\'©\':{\'±\':¡(){¢ £.©.±},\'¯\':¡(){¢ £.©.¯}},\'¬\':¡(){¢ £.¬},\'¶\':¡(){¢ £.¶},\'º\':¡(){¢ £.º},\'Á\':¡(){¢ £.Á},\'À\':¡(){¢ £.À},\'½\':¡(){¢ £.½},\'¾\':¡(){¢ £.¾},\'¼\':¡(){¢ £.¼},\'·\':¡(){¢ £.·},\'Â\':¡(){¢ £.Â},\'³\':¡(){¢ £.³},\'Ä\':¡(){¢ £.Ä},\'Ã\':¡(){¢ £.Ã},\'Å\':¡(){¢ £.Å},\'¸\':¡(){¢ £.¸}};$.¥=Ø;® £={\'¥\':\'¿\',\'©\':{\'±\':²,\'¯\':\'¿\'},\'¬\':\'¿\',\'¶\':§,\'º\':§,\'Á\':§,\'À\':§,\'½\':§,\'¾\':§,\'¼\':§,\'·\':§,\'Â\':§,\'³\':§,\'Ä\':§,\'Ã\':§,\'Å\':§,\'¸\':§};Î(® i=0,«=».ì,°=».í,¦=[{\'¤\':\'Ý\',\'¥\':¡(){¢/Ù/.¨(°)}},{\'¤\':\'Ú\',\'¥\':¡(){¢ Û.³!=²}},{\'¤\':\'È\',\'¥\':¡(){¢/È/.¨(°)}},{\'¤\':\'Ü\',\'¥\':¡(){¢/Þ/.¨(°)}},{\'ª\':\'¶\',\'¤\':\'ß Ñ\',\'¥\':¡(){¢/à á â/.¨(«)},\'©\':¡(){¢ «.¹(/ã(\\d+(?:\\.\\d+)+)/)}},{\'¤\':\'Ì\',\'¥\':¡(){¢/Ì/.¨(«)}},{\'¤\':\'Í\',\'¥\':¡(){¢/Í/.¨(°)}},{\'¤\':\'Ï\',\'¥\':¡(){¢/Ï/.¨(«)}},{\'¤\':\'Ð\',\'¥\':¡(){¢/Ð/.¨(«)}},{\'ª\':\'·\',\'¤\':\'å Ñ\',\'¥\':¡(){¢/Ò/.¨(«)},\'©\':¡(){¢ «.¹(/Ò (\\d+(?:\\.\\d+)+(?:b\\d*)?)/)}},{\'¤\':\'Ó\',\'¥\':¡(){¢/æ|Ó/.¨(«)},\'©\':¡(){¢ «.¹(/è:(\\d+(?:\\.\\d+)+)/)}}];i<¦.Ë;i++){µ(¦[i].¥()){® ª=¦[i].ª?¦[i].ª:¦[i].¤.Õ();£[ª]=É;£.¥=¦[i].¤;® ­;µ(¦[i].©!=²&&(­=¦[i].©())){£.©.¯=­[1];£.©.±=Ê(­[1])}ê{® Ç=Ö ë(¦[i].¤+\'(?:\\\\s|\\\\/)(\\\\d+(?:\\\\.\\\\d+)+(?:(?:a|b)\\\\d*)?)\');­=«.¹(Ç);µ(­!=²){£.©.¯=­[1];£.©.±=Ê(­[1])}}×}};Î(® i=0,´=».ä,¦=[{\'ª\':\'¸\',\'¤\':\'ç\',\'¬\':¡(){¢/é/.¨(´)}},{\'¤\':\'Ô\',\'¬\':¡(){¢/Ô/.¨(´)}},{\'¤\':\'Æ\',\'¬\':¡(){¢/Æ/.¨(´)}}];i<¦.Ë;i++){µ(¦[i].¬()){® ª=¦[i].ª?¦[i].ª:¦[i].¤.Õ();£[ª]=É;£.¬=¦[i].¤;×}}}();',77,77,'function|return|Private|name|browser|data|false|test|version|identifier|ua|OS|result|var|string|ve|number|undefined|opera|pl|if|aol|msie|win|match|camino|navigator|mozilla|icab|konqueror|Unknown|flock|firefox|netscape|linux|safari|mac|Linux|re|iCab|true|parseFloat|length|Flock|Camino|for|Firefox|Netscape|Explorer|MSIE|Mozilla|Mac|toLowerCase|new|break|Public|Apple|Opera|window|Konqueror|Safari|KDE|AOL|America|Online|Browser|rev|platform|Internet|Gecko|Windows|rv|Win|else|RegExp|userAgent|vendor'.split('|')))

    var safari    = $.browser.safari(); 
    if (safari == true) { 
      $("html").addClass("ipad ios7");  
    }

  }


 
  /*  Subscription form
  -------------------------------------------------------------------------*/

  //Bootstrap Validator
  if(typeof($.fn.bootstrapValidator) !== 'undefined') {
  $('.form-validator').bootstrapValidator({
    excluded: [':disabled', ':hidden', ':not(:visible)'],
    feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
    },
    message: 'This value is not valid',
    trigger: null
  });
  }
  

  /* Notify Me
  ------------------------------------------------------------------------*/
  $('.notify-me').submit(function(e){
    var form           = $(this),
        message        = form.find('.form-message'),
        messageSuccess = 'Your email is sended',
        messageInvalid = 'Please enter a valid email address',
        messageSigned  = 'This email is already signed',
        messageErrore  = 'Error request';
    
    e.preventDefault();
    
    $.ajax({
      url     : 'php/notify-me.php',
      type    : 'POST',
      data    : form.serialize(),
      success : function(data){
        form.find('.btn').prop('disabled', true);
        
        message.removeClass('text-danger').removeClass('text-success').fadeIn();
        
        switch(data) {
          case 0:
            message.html(messageSuccess).addClass('text-success').fadeIn();
          
            setTimeout(function(){
              form.trigger('reset');
              
              message.fadeOut().delay(500).queue(function(){
                message.html('').dequeue();
              });
            }, 2000);
            
            break;
          case 1:
            message.html(messageInvalid).addClass('text-danger').fadeIn();
            
            break;
          case 2:
            message.html(messageSigned).addClass('text-danger').fadeIn();
            
            setTimeout(function(){
              form.trigger('reset');

              message.fadeOut().delay(500).queue(function(){
                message.html('').dequeue();
              });
            }, 2000);
            
            break;
          default:
            message.html(messageErrore).addClass('text-danger').fadeIn();
        }
        
        form.find('.btn').prop('disabled', false);
      }
    });
  });


  /* Height Page block 
  -----------------------------------------------------------------------*/
  if($(".box-inset").length>0) {
    firstPageHeight();
    secondPageHeight();
  }

  /* add class for body .touch-device 
  -----------------------------------------------------------------------*/
  if( navigator.userAgent.match(/iPad|iPhone|Android/i) ) {
    $('body').addClass('touch-device');
  }
  else{
    $('body').addClass('no-touch-device');
  }

  /* Remove Video 
  -----------------------------------------------------------------------*/
  if($(".bg-video").length>0) {
    if(navigator.userAgent.match(/iPad|iPhone|Android/i)) {
      $('.bg-video').find('video').remove();
    }
  }


  /* Countdown 
  ----------------------------------------------------------------------*/
  if($(".my-defaultCountdown").length>0) {
    $(function () {
      var austDay = new Date(2017, 12, 30, 0, 0, 0);
      $('.my-defaultCountdown').countdown({until: austDay});
    });

  }

  /* STYLED SELECT 
  --------------------------------------------------------------------- */
  if($("select").length>0){
    $('select').styler();
  }

  /* jQuery subscribe validator 
  ----------------------------------------------------------------------*/

  if($("#contactform").length>0){
    $( "#contactform" ).validate({
      rules: {
        field: {
          required: true,
          email: true
        }
      }
    });
  }

  /* ------------------ owlCarousel -----------------------------------*/

  if($(".custom1").length>0){

    var custom1 = $('.custom1').owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items:1,
      margin:30,
      loop:true,
      stagePadding:30,
      smartSpeed:450,
      dots:false,
      nav:true,
      mouseDrag:false,
      touchDrag:false,
      pullDrag:false,

      autoplayTimeout:5000,
      autoHeight:true,
    });


    /* -- custom2 -- */

    var custom2 = $('.custom2').owlCarousel({
      center: true,
      items:2,
      loop:true,
      dots:false,
      mouseDrag:false,
      touchDrag:false,
      pullDrag:false,
      nav:true,
      navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      margin:10,
      responsive:{
          0:{
              items:3
          },
          992:{
              items:5
          }
        }
    });
    custom2.on('change.owl.carousel', function(event) {
      custom1.trigger('to.owl.carousel', [event.item.index,300,true]);
    });

  $('li:first-of-type a[data-toggle="tab"]').on('click', function() {

     custom2.trigger('refresh.owl.carousel');
     custom1.trigger('refresh.owl.carousel');

  });

  }

  /* Page navigation 
  -------------------------------------------------------------------*/

  $('#second-pages').css('top', - _positionSecondPage());

  $( "#top-link" ).on('click', function() {
    $( '#second-pages, .bg-block' ).addClass('active');
    $( '#second-pages' ).css( "top", "0" );
    //$( '#first-page.up-down' ).css( "top", $(window).height() );
    $( '.link').addClass('no-bg');
    $( '.bg-block' ).css('top', _positionSecondPage());
    $( '#second-pages' ).removeClass('s-hidden');
    // turn arrows
    setTimeout(function(){
      $( '#top-link' ).removeClass('active');
      $( '#bottom-link').addClass('active');
    }, 200);
    // add opacity
    setTimeout(function(){
      $( '#first-page, #second-pages, .blured-box' ).addClass('opacity-active');
      $( '.bg-block').addClass('no-bg');
    }, 520);
  });

  $( "#bottom-link" ).on('click', function() {
    $('#second-pages').css('top', - _positionSecondPage());
    $( '#first-page.up-down' ).css( "top", ("0") );
    $( '.bg-block, .link').removeClass('no-bg');
    $( '#second-pages, .bg-block' ).removeClass('active');
    $( '#second-pages' ).addClass('s-hidden');
    $( '.bg-block' ).css('top', "0");
    // turn arrows
    setTimeout(function(){
      $( '#bottom-link' ).removeClass('active');
      $( '#top-link').addClass('active');
    }, 200);
    // remove opacity
    setTimeout(function(){
      $( '#first-page, #second-pages, .blured-box' ).removeClass('opacity-active');
    }, 600);
  });


  /* under-contruction 
  ---------------------------------------------------------------*/
  $( '.under-contruction' ).css( "height", $(window).height());


  /* Contact Us form 
  ------------------------------------------------------------- */
  $('body').on('click', '#submit', function(){
    $.post('form.php', $('#contactform').serialize(),  function(data) {
      $('#success').html(data).animate({opacity: 1}, 500, function(){
        if ($(data).is('.send-true')) {
          $('#contactform').trigger( 'reset' );
        }
      });
    });
    return false;
  });

  /* ResponsiveSlides 
  -------------------------------------------- ---------------------*/

  if($("#rslides-1").length>0) {
    $(function() {
      $("#rslides-1").responsiveSlides({
        timeout: 10000,
      }
      );
    });
  }

  /* Blur 
  -----------------------------------------------------------------------*/
  if($(".blur").length>0) {
    $('.blur').blurjs({
      source: '.blur',
      radius: 10,
      overlay: 'rgba(0, 0, 0, .2)'
    });
  }

  /* -------------------- myScroll -----------------------------*/
  
  if($(".no-touch-device").length>0) {
    $("#first-page, .my-tabs").niceScroll({
      cursorcolor:"rgba(0, 0, 0, 0.5)",
      cursorborder:"none",
      mousescrollstep:50,
      horizrailenabled: false
    });
  }


  /* Add touchwipe
  -----------------------------------------------------*/
  if($(".link").length>0) {
    $(".link").touchwipe({
      wipeUp: function() {
        $( "#top-link" ).trigger( "click" );
      },
      wipeDown: function() {
        $( "#bottom-link" ).trigger( "click" );
      },
    }); 
  }

  if($("#wrapper-slider").length>0) {
    $("#wrapper-slider").touchwipe({
      wipeRight: function() {
        $( "#prev" ).trigger( "click" );
      },
      wipeLeft: function() {
        $( "#next" ).trigger( "click" );
      },
    }); 
  }

  /* bluresBox
  ----------------------------------------------------*/
  if($(".bluresBox").length>0) {
    bluresBox();
  }

  /* ------------------------- RETINA ---------------------------*/
  if( 'devicePixelRatio' in window && window.devicePixelRatio >= 2 ){
    var imgToReplace = $('img.replace-2x').get();
   
    for (var i=0,l=imgToReplace.length; i<l; i++) {
      var src = imgToReplace[i].src;
      src = src.replace(/\.(png|jpg|gif)+$/i, '@2x.$1');
      imgToReplace[i].src = src;
     
      $(imgToReplace[i]).load(function(){
        $(this).addClass('loaded');
      });
    }
  }

  /* ------------------- Add class if IE 11 or IE10 ------------------*/

  var ua = navigator.userAgent,
    doc = document.documentElement;

  if ((ua.match(/MSIE 10.0/i))) {
    doc.className = doc.className + " ie10";

  } else if((ua.match(/rv:11.0/i))){
    doc.className = doc.className + " ie11";
  }

  /* Fred Carousel
  -----------------------------------------------------------------*/
  if($(".wrapper-slider").length>0) {
    sliderFredCarousel();
  }

  /* cubeSlider()
  -----------------------------------------------*/
  if($(".my-defaultCountdown").length>0) {
    cubeSlider();
  }

    /* Video Youtube 
  ----------------------------------------------------------------------*/
  if($(".bg-youtube-video").length>0) {

      $('#wrapper').tubular({ 
        // videoId: 'NgjaTlCWjJc?list=UUQJ-o5gNpMg8mQ9eVJUkkWQ', 
        // videoId: 'StmPooXSCRU'
        videoId: 'StmPooXSCRU'
        // start: 3
      });
  }


//   if($("form").length>0){
//   jQuery.validator.setDefaults({
//     debug: true,
//     success: "valid"
//   });
// }



});



/* ----------------------------------------------------------------*/
/* ----------------------- (window).resize ------------------------*/
/* ----------------------------------------------------------------*/

$( window ).resize(function() {

  /* sliderFredCarousel 
  ---------------------------------------------------------------*/
  if($("#wrapper-slider").length>0) {
    $(".item-carousel").trigger("destroy");
    sliderFredCarousel();
  }

  /* cubeSlider()
  --------------------------------------------------------------*/
  if($(".slider-viewport").length>0) {
    cubeSlider();
  }

  /* BlurBox 
  --------------------------------------------------------------- */
  bluresBox();


  /* Height Page block 
  ----------------------------------------------------------------*/
  if($(".box-inset").length>0) {
    firstPageHeight();
    secondPageHeight();
  }
  if($(".no-box-inset").length>0) {
   // secondPageSize();
  }

  /*  pageSize 
  -------------------------------------------------------------- */
  if($("#second-pages.s-hidden").length>0) {
    $('#second-pages').css('top', - _positionSecondPage());
  }
  if($("#second-pages.active").length>0) {
    $('#second-pages.active').css('top', '0');
    $( '.bg-block' ).css('top', _positionSecondPage());
  }

  /* under-contruction 
  ---------------------------------------------------------------*/
  $( '.under-contruction' ).css( "height", $(window).height());
  
  


}); // resize


/* --------------------------------------------*/
/*-------------- WINDOW LOAD ------------------*/
/* --------------------------------------------*/
$(window).load(function(){

  // Preloader
 $('.preloader').fadeOut('slow',function(){$(this).remove();});

});




/* ----------------------------------------------------------------*/
/* ----------------- jQuery subscribe validator -------------------*/
/* ----------------------------------------------------------------*/
// if($("form").length>0){
//   jQuery.validator.setDefaults({
//     debug: true,
//     success: "valid"
//   });
// }




})(jQuery);


$('.floor .image-wrapper').each(function(i, elem) {
  var imageUrl = $(elem).css('background-image');

  $(elem).html('<div class="preloader"><img src='+imageUrl.replace('url("', '').replace('")', '')+'><div>');

  $(elem).find('img').on('load', function() {
    $(this).parent().remove();
  });
});