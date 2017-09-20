function backTemp() {


var svg_width = 1500;
var svg_height = 200;
var mysvg = d3.select("#backTemp")
  .append("svg")
  .attr("width", svg_width)
  .attr("height", svg_height);

var bin_w = 30;


 
  mysvg.selectAll("rect")
    .data(mydata)
    .enter()
    .append("rect")
    .attr("width",bin_w)
    .attr("height",function(d){ return (d.main.temp-250)*3.5; })
    .attr("fill",
      function(d){ return colors.get('blueE'); })
    .attr("x",function(d){return mydata.indexOf(d)*bin_w;})
    .attr("y",function(d){return svg_height - (d.main.temp-250)*3.5;})
    ;//.text(function(d){ return d.dt_txt.slice(11,13); };


}
