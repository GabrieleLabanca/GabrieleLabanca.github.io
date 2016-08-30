var activeImage = [0,0,0,0,0,0,0,0,0,0,0,0,0];

function clickup(clickElement,idString) {

  document.getElementsByClassName("popup-container")[0].style.visibility = "hidden";

	var clickContainer = document.getElementsByClassName("click-content")[0];
  
	clickContainer.innerHTML = document.getElementById(idString).innerHTML;

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
