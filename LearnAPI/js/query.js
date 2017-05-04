$(document).ready(function(){
    $("button").click(function(){
        $("button").load("data/text.txt");
    });
});

$(document).ready(function(){
    $("#load_external").click(function(){
	$.getJSON(someURL,function(data) {
	    $("#container_external").text("data/text.txt");	
	});
    });
});




