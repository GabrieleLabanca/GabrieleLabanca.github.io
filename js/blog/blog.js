
function blog_main(){
  var mycat;
  var current_url;

  $.getJSON("./blog/archive/catalogue.json", function(json) {
    mycat = json;
    //display_last();
    display_cover();
  });

  $('#archive').click(function(){
    console.log("archive");
    window.open("blog/archive/catalogue.json")
  });

  $('#random_article').click(function(){
    current_url = get_article_url(random_article(mycat));
    $('#article_display').load(current_url);
  });

  $('#new_page').click(function(){
      window.open(current_url);    
      });

function display_cover(){
  //var last_url = get_article_url(last_article(mycat));
  current_url = "blog/archive/2017/12/23/23_programmatico.html";
  $('#article_display').load(current_url);
}

function display_last(){
  current_url = get_article_url(last_article(mycat));
  $('#article_display').load(current_url);
}

function last_article(cat){
  var N = cat.articles.length;
  return cat.articles[N-1];
}

function random_article(cat){
  if( typeof random_article.list == 'undefined' ) {
    random_article.list = [];
    var N = cat.articles.length;
    var is_good;
    for(var i=0; i<N; i++){
      do{
        is_good = 0;
        var n = Math.floor(Math.random()*N);
        for(var j in random_article.list){
          if(n == random_article.list[j]){
            is_good++;
          }
        }
      }while(is_good != 0);

      random_article.list.push(n);

    }
    console.log(random_article.list);
  }
  if( typeof random_article.index == 'undefined' ) {
    random_article.index = -1;
  }
  random_article.index += 1;
  var rnd_indx = random_article.list[random_article.index];
  if(random_article.index == random_article.list.length-1 ) random_article.index = -1;
  return cat.articles[rnd_indx];
}


function get_article_url(art){
  var date = art.date;
  var y = date.slice(0,2);
  var m = date.slice(2,4);
  var d = date.slice(4,6);
  var title = art.title;
  var art_url = "blog/archive/20"+y+"/"+m+"/"+d+"/"+d+"_"+title+".html";
  return art_url;
}
}
