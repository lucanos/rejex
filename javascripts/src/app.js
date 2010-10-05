$(document).ready(function() {
 // translate the page if required
 // var t = new Translator()
 // t.translate()
  $( 'input, textarea' ).inlineLabels();

 // display the options help
  $( '#options' )
    .live( 'focus' , function(){
      $('#options_help').animate( { opacity : 1 } , 400 );
    })
    .blur( function(){
      $('#options_help').animate( { opacity : 0 } , 400 );
    });

 // highlight any matches and display them
  $( 'form' ).find( 'input, textarea' ).keyup(function( e ){
   // don't try and do any highlighting when pressing the tab key
    if( $( '#expression' ).val() ){
      var p = new PatternMatcher({
        pattern:       $( '#expression' ).val() ,
        testString:    $( '#test_string' ).val() ,
        regExpOptions: $( '#options' ).val()
      });
      $( '#matches' ).text( p.highlight() );
    }
  });

});
