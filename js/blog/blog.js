// global variables
var mycat;
var current_url;
var current_rnd_url;
var display_cover;

function blog_main(){
  // loads the catalogue of articles and 
  $.getJSON("https://gabrielelabanca.github.io/blog/archive/catalogue.json", function(json) {
    mycat = json;
    //display_cover();
    console.log("mycat",mycat);
    current_rnd_url = get_article_url(random_article(mycat));
    console.log(current_rnd_url);
  });

  // when click 'archive' btn shows archive
  $('#archive').click(function(){
    console.log("archive");
    $('#article_display').empty();
    for(var i=mycat.articles.length; i>0; i--){
      art = mycat.articles[i-1];
      var link = $("<a></a>");
      link.text(function(){ 
        var et = art.extended_title;
        if(et === undefined) return art.title;
        return et;
      });
      link.attr("href",get_article_url(art));
      var date = get_article_date(art);
      var para = $("<p></p>");
      para.append(date," - ",link);
      $('#article_display').append(para);
    }
    //window.open("blog/archive/catalogue.json")
  });

  // when click on 'random article' show random article
  $('#random_article').click(function(){
    current_url = get_article_url(random_article(mycat));
    $('#article_display').load(current_url);
  });

  // open current article in new tab
  $('#new_page').click(function(){
    window.open(current_url);    
  });

  // display selected article
  display_cover = function(){
    //var last_url = get_article_url(last_article(mycat));
    current_url = "blog/archive/2017/12/23/programmatico.html";
    $('#article_display').load(current_url);
  }

  // display last article
  function display_last(){
    current_url = get_article_url(last_article(mycat));
    $('#article_display').load(current_url);
  }

  // return last article
  function last_article(cat){
    var N = cat.articles.length;
    return cat.articles[N-1];
  }

  // returns a random article from articles[]
  // avoiding repetition before the cycle ends
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
        } while(is_good != 0);

        random_article.list.push(n);

      }
      //console.log(random_article.list);
    }
    if( typeof random_article.index == 'undefined' ) {
      random_article.index = -1;
    }
    random_article.index += 1;
    var rnd_indx = random_article.list[random_article.index];
    if(random_article.index == random_article.list.length-1 ){
      random_article.index = -1;
    }
    return cat.articles[rnd_indx];
  }



  // returns full url for an article
  function get_article_url(art){
    var date = art.date;
    var y = date.slice(0,2);
    var m = date.slice(2,4);
    var d = date.slice(4,6);
    var title = art.title;
    var art_url = "https://gabrielelabanca.github.io/blog/archive/20"+y+"/"+m+"/"+d+"/"+title+".html";
    return art_url;
  }

  function get_article_date(art){
    var date = art.date;
    var y = date.slice(0,2);
    var m = date.slice(2,4);
    var d = date.slice(4,6);
    date = d+"/"+m+"/"+y
    return date;
  }

}

function create_thisurl(){
  stri=window.location.href;
  pos = stri.search('#');
  if(pos>0) var res = stri.slice(0,pos);
  else res = stri;
  var loc = document.getElementById("thisurl");
  $("#thisurl").attr('href',stri).text(stri);
  //loc.innerHTML = res;
}
function open_random(){window.open(current_rnd_url);}


function load_html(){
  var idx = JSON.parse(index_data);
  for(var i=0; i<idx.length; i++){
    $("#index_ol li:last").after("<li></li>");
    $("#index_ol li:last").append("<a></a>");
    $("#index_ol li:last a").text(idx[i].title).attr('href','#index'+(i+1));
    $("#sections div:last").after("<div></div>")
      .attr('id','index'+(i+1)).load("./art0"+(i+1)+".html");
    $("#sections div:last").append("<hr>");
    $("#notes div:last").after("<div></div>").attr('id','note'+(i+1)).load("./note0"+(i+1)+".html");
  }
  $("#index_ul li:last").after("<li></li>");
  $("#index_ul li:last").append("<a></a>");
  $("#index_ul li:last a").text("Note").attr('href','#note');
  $("#introduction").load("./introduction.html");
  $("#conclusion").load("./conclusion.html");

}

function main_load(){
  load_html();
  create_mail();
  create_thisurl();
  blog_main(); // in full_blog.js
}




