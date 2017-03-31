// start slingin' some d3 here.
let svgSelection;
var boardSelection = d3.select(".board");

function generateEnemies(amount) {
  for (let i = 0; i < amount; i++) {
    generateEnemy();
  }
}
function generateSVG() {
svgSelection = boardSelection.append("svg")
                                 .attr("width", 700)
                                 .attr("height", 700);
}

function generateEnemy() {
  let randomX = Math.random() * 700;
  let randomY = Math.random() * 700;

  function move() {
    drawEnemy.transition().duration(1500).attr('cx', Math.random() * 700).attr('cy', Math.random() * 700);
  }
  

  var drawEnemy = svgSelection.append("circle")
                                   .attr("cx", randomX)
                                   .attr("cy", randomY)
                                   .attr("r", 20)
                                   .style("fill", "purple");
  setInterval(function() {
    move();
  }, 1000);                                 
}
var enemyCount = prompt('How many enemies do you want to face?')
generateSVG();
generateEnemies(enemyCount);
