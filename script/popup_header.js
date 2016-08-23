
console.log("load popup_header.js");

function popupAnimation(popParent) {
  var popContainer = popParent.parentElement.parentElement.getElementsByClassName("popup-container")[0];

	popContainer.style.width = "0px";
	popContainer.style.height = "0px";
  popContainer.style.visibility = "visible";
  


	var i = 0;
	var clock = setInterval(W,5);

	function W() {
		if (i == 350) {
			clearInterval(clock); 
		} else {
			i++;
			popContainer.style.width = i +'px';

	  }
	}

	i = 0;
	clock = setInterval(H,5);

	function H() {
		if (i == 350) {
			clearInterval(clock); 
		} else {
			i++;
			popContainer.style.height = i +'px';
	  }
	}


}


function popup(popParent) {


  // TODO 
	popupAnimation(popParent);


  popParent.parentElement.parentElement.getElementsByClassName("popup-container")[0].style.visibility = "visible";
  


  popParent.parentElement.parentElement.getElementsByClassName("popup-container")[0].innerHTML =  popParent.getElementsByClassName("popup")[0].innerHTML;
}



function popout(popParent) {
  
	console.log("popout " + popParent.parentElement.parentElement.getElementsByClassName("popup-container")[0].nodeName);

  popParent.parentElement.parentElement.getElementsByClassName("popup-container")[0].style.visibility = "hidden";
  

}




