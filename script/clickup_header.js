var activeButton = [0,0,0,0,0,0,0,0,0,0,0,0,0];


var col_bkg  = "#ffffff";
var col_txt  = "#0A1306"
var col_spec = "#39871d";
var col_hig  = "#D1732B";


function clickup(clickElement,idString) {

  document.getElementsByClassName("popup-container")[0].style.visibility = "hidden";

	colorsReset();

  var clickContainer = document.getElementsByClassName("click-content")[0];
 
	clickContainer.style.display = "inline";
	clickContainer.innerHTML = document.getElementById(idString).innerHTML;

  clickup_color(clickElement);



}

function clickup_color(clickElement) {
	setZeros();
	setActive(clickElement);
	colorsUp(clickElement);
}





function colorsUp(hoverElement) {
	hoverElement.style.color = col_bkg;
	hoverElement.style.backgroundColor = col_hig;
}

function colorsDown(hoverElement) {
	var index = getIndex(hoverElement);
	if(activeButton[index] == 0) {
		hoverElement.style.color = col_hig;
		hoverElement.style.backgroundColor = col_bkg;
	}
}

function colorsReset() {

	setZeros();

	var allButtons = document.getElementsByClassName("colButton");
	var allButtonsSize = allButtons.length;

	for(i=0; i<allButtonsSize; i++) {
	  allButtons[i].style.color = col_hig;
	  allButtons[i].style.backgroundColor = col_bkg;
	}
}





function setZeros() {
	var allButtons = document.getElementsByClassName("colButton");
	var allButtonsSize = allButtons.length;

	for(i=0; i<allButtonsSize; i++) {
		activeButton[i] = 0;
	}

}

function getIndex(clickElement) {
	var allButtons = document.getElementsByClassName("colButton");
	var allButtonsSize = allButtons.length;
	var thisButton = clickElement;

	for(i=0; i<allButtonsSize; i++) {
		if(allButtons[i] == thisButton) {
			thisButtonIndex = i;
		}
	}

	return thisButtonIndex;
}

function setActive(clickElement) {
	var index = getIndex(clickElement);
	activeButton[index] = 1;
}





	/////////////////////////////////////////////////



function clickup_opacity(clickElement)	{
	var allImages = document.getElementsByClassName("opacity-img");
  var allImagesSize = allImages.length;
	var thisImage = clickElement.getElementsByClassName("opacity-img")[0];
	
	var i = 0;
	var thisImageIndex;
	while(i<allImagesSize) {
		allImages[i].style.opacity = ".5";
		activeImage[i] = 0;

		if ( allImages[i] == thisImage ) {
			thisImageIndex = i;
			activeImage[i] = 1;
		}

		i++;

	}


	console.log(i);
	console.log(activeImage);
	console.log(activeImage[i]);

	thisImage.style.opacity = "1";
	
}



function opacityUp(clickParent) {
	clickParent.getElementsByClassName("opacity-img")[0].style.opacity = "1";
}

function opacityDown(clickElement) {
	
	var allImages = document.getElementsByClassName("opacity-img");
  var allImagesSize = allImages.length;
	var thisImage = clickElement.getElementsByClassName("opacity-img")[0];
	
	var i = 0;
	var thisImageIndex;
	while(i<allImagesSize) {
		if ( allImages[i] == thisImage ) thisImageIndex = i;
		i++;
	}

	
	
	if( activeImage[thisImageIndex] == 0) clickElement.getElementsByClassName("opacity-img")[0].style.opacity = ".5";
}
