window.onload=function() {

  var svg = d3.select("#cv_net_svg");
  var width = svg.attr("width"),
  height = svg.attr("height");

  var color = d3.scaleOrdinal(d3.schemeCategory10);

  var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

  d3.json("js/cv_network/cv_network.json", function(error, graph) {
    if (error) throw error;

    var link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(graph.links)
      .enter().append("line")
      .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

    var node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(graph.nodes)
      .enter().append("circle")
      .attr("r", function(d){ if(d.r === undefined) return 5; else return d.r; })
      .attr("fill", function(d) { return color(group_to_color(d.group)); })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended))
      .append("title")
      .text(function(d) { return d.id; })
      .append("text")
      .attr("dx", 10)
      .attr("dy", ".35em")
      .text(function(d) { return d.id; })
      .style("stroke", "black");

    simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

    simulation.force("link")
      .links(graph.links);


    function ticked() {
      link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

      d3.selectAll("circle").attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      });

      d3.selectAll("text").attr("x", function (d) {
        return d.x;
      })
      .attr("y", function (d) {
        return d.y;
      });

      node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    }
  });

  function dragstarted(d) {

    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) 
  {
    var target_url;
    if(d.url === undefined) target_url = "https://duckduckgo.com/?q="+d.id;
    else target_url = d.url; 
    window.open(target_url); 
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  var group_array = ["c++","js","arduino","root","istruzione"];
  function group_to_color(g){
    for(var i in group_array){
      if(g == group_array[i]) return i;
    }
  }


} // closes window.onload
