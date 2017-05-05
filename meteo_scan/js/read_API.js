var to_URL = "http://api.openweathermap.org/data/2.5/weather?q=Torino,it&APPID=36dc108c54b51062033b0e0d8cd81427";
var file_url = "https://www.w3schools.com/js/cd_catalog.xml";

function print_temperature()
{
  document.getElementById("temp_par").innerHTML = "Temperature goes here";
}

function print_status(xhttp)
{
  document.getElementById("status_par").innerHTML = xhttp.status;
  document.getElementById("rstate_par").innerHTML = xhttp.readystate;
}

function print_content(xhttp)
{
  document.getElementById("temp_par").innerHTML = xhttp.responseText;
}


function get_URL(url,cFunction)
{
  $("#status_par").get(file_url,jsonp=true);

  /*var xhttp = new XMLHttpRequest();
  xhttp.open("GET",url,true);
  xhttp.send();
  xhttp.onreadystatechange = function()
  {
    //if(this.readystate == 4 && this.status == 200) 
    cFunction(this);
  };
  */
  }

