$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in-right-lg',
    outClass: 'fade-out-left-lg',
    linkElement: 'header a',
    inDuration: 1000,
    outDuration: 500
  });

  $(function(){
  // Bind the swipeHandler callback function to the swipe event on .animsition
  $( ".animsition" ).on( "swipe", swipeHandler );

  // Callback function references the event target and adds the 'swipe' class to it
  function swipeHandler( event ){
    $( ".location" ).trigger('click');
  }
});
});
