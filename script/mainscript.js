$(window).load(function(){

  $largeur_fenetre = $(window).width();
  $hauteur_fenetre = $(window).height();
  console.log("largeur : ", $largeur_fenetre);    
  console.log("hauteur : ",$hauteur_fenetre);

  // CHARGEMENT
  $(".chargement").fadeOut(1000);

  // LANCEMENT PLUGIN
  jQuery(document).ready(function ($) {
    $(window).stellar();
  });

  // CHOIX ONGLET
  $( "#triangle1" ).mouseenter(function() { $( "#triangle1 img" ).css('width', '900'); $( "#onglet_print_titre" ).css('color', '#432918'); $( "#onglet_print_commande" ).css('color', '#BE1622'); });
  $( "#triangle1" ).mouseleave(function() { $( "#triangle1 img" ).css('width', '772'); $( "#onglet_print_titre" ).css('color', '#BE1622'); $( "#onglet_print_commande" ).css('color', '#432918'); });

  $( "#triangle2" ).mouseenter(function() { $( "#triangle2 img" ).css('width', '900'); $( "#onglet_digital_titre" ).css('color', '#BE1622'); $( "#onglet_digital_commande" ).css('color', '#432918'); });
  $( "#triangle2" ).mouseleave(function() { $( "#triangle2 img" ).css('width', '772'); $( "#onglet_digital_titre" ).css('color', '#432918'); $( "#onglet_digital_commande" ).css('color', '#BE1622'); });

  // DECALAGE
  $("#onglet_print_textes").click(function() { $( "html" ).css('overflow-y', 'hidden'); $( "#losange, #triangle2" ).css('opacity', '0'); $( ".formulaire_print" ).css('margin-left' , '950px'); $( "#link_digital" ).css('opacity' , '1'); });
  $("#link_print").click(function() { 
    $( "#triangle1" ).css('opacity', '1'); 
    $( "#triangle2" ).css('opacity', '0'); 
    $( ".formulaire_digital" ).css('opacity', '0');
    $( ".formulaire_print" ).css('margin-left' , '950px');  
    $( ".formulaire_print" ).css('opacity', '1');  
    $( "#link_print" ).css('opacity' , '0'); 
    $( "#link_digital" ).css('opacity' , '1'); 
  });

  // marche pas bien
  $("#onglet_digital_textes").click(function() { $( "html" ).css('overflow-y', 'hidden'); $( "#losange, #triangle1" ).css('opacity', '0'); $( ".formulaire_digital" ).css('margin-left' , '50px'); $( "#link_print" ).css('opacity' , '1'); });
  $("#link_digital").click(function() { 
      $( "#triangle1" ).css('opacity', '0'); 
      $( "#triangle2" ).css('opacity', '1'); 
      $( ".formulaire_print" ).css('opacity', '0'); 
      $( ".formulaire_digital" ).css('margin-left' , '50px');
      $( ".formulaire_digital" ).css('opacity' , '1');
      $( "#link_digital" ).css('opacity' , '0'); 
      $( "#link_print" ).css('opacity' , '1');
    });





  // ANIMATIONS D'APPARITIONS TEXTES et PICTO DE L'INTRO //

  var $animation_elements = $('.animation-element');
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
   
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
   
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
      
    });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

});
  

