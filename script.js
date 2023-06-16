$(document).on("keypress", "input", function(e){
	if(e.which == 13){
		var inputVal = $(this).val();
		window.location.href="https://www.google.com/search?q="+encodeURIComponent(inputVal)+"&sourceid=chrome&ie=UTF-8&oe=UTF-8";
	}
});
$( "#search" ).on( "focus", function() {
  console.log( "%cHandler for `focus` called.","color:red;font-size:10px;font-family:'copperplate',fantasy;");
});

$( "#search" ).on( "focusout", function() {
  console.log( "%cHandler for `focusout` called.","color:yellow;font-size:10px;font-family:'papyrus',fantasy;");
});
