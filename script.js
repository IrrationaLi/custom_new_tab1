$(document).on("keypress", "input", function(e){
	if(e.which == 13){
		var inputVal = $(this).val();
		window.location.href="https://www.google.com/search?q="+encodeURIComponent(inputVal)+"&sourceid=chrome&ie=UTF-8&oe=UTF-8";
	}
});

function sleep(ms) { //thank you @Shehroz30
    return new Promise(resolve => setTimeout(resolve, ms));
}
let end = 0;
let start = 0;
let out = 0;
let inn = 0;
$( "#search" ).on("focus", async function() {
	if (start>0){
    	inn = start;
    } else {
		inn = 0;
    }
	for (let i = inn; i <=100; i++) {
    	$("#sl2").css({ "left": (i/2).toString()+"%","width": i.toString()+"%"});
        end = i;
		await sleep(0.5);
        if(document.activeElement !== document.getElementById('search')){
    		return false;
		}
	};
});
$( "#search" ).on("focusout", async function() {
	if (end<100){
		out = end;
    } else {
    	out = 100;
    };
    for (let i = out; i >=0; i--) {
    	$("#sl2").css({ "left": (i/2).toString()+"%","width": i.toString()+"%"});
        start=i;
    	await sleep(0.5);
        if(document.activeElement === document.getElementById('search')){
            return false;
        }
    };
});
