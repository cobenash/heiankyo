/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    // Place your code here.
  // var p=$('#block-webform-client-block-16');
  // p.hide();
  // $('.comments a.more').click(function(){
  // 	p.toggle('0');
  // 	return false;
  // });
    $(document).ready(function() {
      $('#block-menu-block-2').scrollToFixed({
        marginTop: 50,
      });
    });
   
    
    $(".comments a.more").click(function(){
      $("#block-webform-client-block-16").toggle();
    });
     //alert('test');
   
    //  $(document).ready(function(){
    //   $('.responsive-menus span.toggler').slicknav();
    // });
    // $(function () {
    //   $('.responsive-menus #rm-removed ul#rm-removed').hide();
    //   $('.responsive-menus .toggler').click(function(e) {
    //     $('.responsive-menus #rm-removed ul#rm-removed').slideDown();
    //     $('span.toggler').toggleClass('active');
    //     e.stopPropagation();
    //   });
    //   $(document).click(function() {
    //     if ($('.responsive-menus #rm-removed ul#rm-removed').is(':visible')) {
    //       $('.responsive-menus #rm-removed ul#rm-removed', this).slideUp(200);
    //       $('span.toggler').removeClass('active');
    //     }
    //   });
    // });
     
    
  }
   
};


})(jQuery, Drupal, this, this.document);
