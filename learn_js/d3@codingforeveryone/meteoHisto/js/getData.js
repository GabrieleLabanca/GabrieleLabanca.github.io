
  var mydata;
  var copy_md;
  function makeJson(jsonp)
  {
  	mydata = jsonp.list;
    copy_md = jsonp.list;
    backTemp();
    foreTemp();
  }
  var myscript = document.createElement('script');
  myscript.src = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=36dc108c54b51062033b0e0d8cd81427' + '&callback=makeJson';
  document.getElementsByTagName('body')[0].appendChild(myscript);
  
