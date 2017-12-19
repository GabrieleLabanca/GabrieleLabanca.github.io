
function blog_main(){
  var mycat;

  $.getJSON("./blog/archive/catalogue.json", function(json) {
    console.log(json); // access the response object
    mycat = json;

    display_last();
  });

  $('#archive').click(function(){
    console.log("archive");
    window.open("blog/archive")
  });

  $('#random_article').click(function(){
    $('#article_display').load("blog/archive/2018/test.html");
  });
  function display_last(){
    var last_url = get_article_url(last_article(mycat));
    $('#article_display').load(last_url);
  }

  function last_article(cat){
    var N = cat.articles.length;
    return cat.articles[N-1];
  }
  function get_article_url(art){
    var date = art.date;
    var y = date.slice(0,2);
    var m = date.slice(2,4);
    var d = date.slice(4,6);
    var title = art.title;
    var art_url = "blog/archive/20"+y+"/"+m+"/"+d+"_"+title+".html";
    return art_url;
  }
}
