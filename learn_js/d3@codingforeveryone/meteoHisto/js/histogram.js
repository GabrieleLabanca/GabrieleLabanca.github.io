
var svg_width = 1500;
var svg_height = 200;
var mysvg = d3.select("#showdata")
  .append("svg")
  .attr("width", svg_width)
  .attr("height", svg_height);

var bin_w = 30;

window.onload=function() {
  mysvg.selectAll("rect")
    .data(mydata)
    .enter()
    .append("rect")
    .attr("width",bin_w)
    .attr("height",function(d){ return (d.main.temp-250)*3.5; })
    .attr("fill",
      function(d){
        var h =  d.dt_txt.slice(11,13);
        if(h=='00')      d.col = colors.get('blueDD');
        else if(h=='03') d.col = colors.get('blueD');
        else if(h=='06') d.col = colors.get('blue');
        else if(h=='09') d.col = colors.get('blueL');
        else if(h=='12') d.col = colors.get('blueLL');
        else if(h=='15') d.col = colors.get('blueL');
        else if(h=='18') d.col = colors.get('blue');
        else if(h=='21') d.col = colors.get('blueD');
        else d.col = 'red';
        return d.col;
      })
    .attr("x",function(d){return mydata.indexOf(d)*bin_w;})
    .attr("y",function(d){return svg_height - (d.main.temp-250)*3.5;});


mysvg.selectAll("circle")
    .data(mydata)
    .enter()
    .append("circle")
    .attr("cx",function(d){ return (0.5+mydata.indexOf(d))*bin_w; })
    .attr("cy",function(d){ return svg_height - d.wind.speed*10; })
    .attr("r",5);

mysvg.selectAll("rect")
    .on('mouseover',function(d){ d3.select(this).attr('stroke',colors.get('blueE')); })
    .on('mouseout',function(d){ d3.select(this).attr('stroke',this.fill); })
    .on('click',function(d){
        d3.selectAll('rect').attr('fill',function(t){ return t.col; });
        d3.select(this)
          .attr('fill',colors.get('blueE'));
        d3.select('#spt').append('p').text("banana");//function(/*d is already defined*/){ return d.main.temp; });
       });

}
