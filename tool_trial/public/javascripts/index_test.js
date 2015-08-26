


console.log("using index_test.js");

//always succeeds due to"#" - which basically loads the index page again
 $.get("/#/nernveqfnbknafekbnaklusers");

//succeeds if users page exists
  $.get( "/users", function( data ) {
  console.log( "Data Loaded: " + data );
})
  .done(function(){
    console.log("done");
  })
  .fail(function(){
    console.log("fail");
  })
  .always(function(){
    console.log("always alert");
  });

/*

//doing a post-let's see
  $.put( "/users", function( data ) {
  console.log( "Data Loaded: " + data );
})
  .done(function(){
    console.log("done");
  })
  .fail(function(){
    console.log("fail");
  })
  .always(function(){
    console.log("always alert");
  });
*/