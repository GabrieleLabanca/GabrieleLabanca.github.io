window.onload=function(){
  $('#article_display').text("see something?");
  $('#random_article').click(function(){
    console.log("BE RANDOM");
  });


    $('#random_article').click(function(){
      console.log("BE RANDOM");
      $('#article_display').load("blog/archive/2018/test.html");
    });




}
