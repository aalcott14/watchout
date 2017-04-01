// start slingin' some d3 here.
let svgSelection;
var boardSelection = d3.select('.board');

// const drag = d3.behavior.drag()
//                         .on('start', function() {})
//                         .on('drag', function() {
//                           circle.attr('cx', d3.event.x).attr('cy', d3.event.y)})
//                         .on('end', function() {});

var drag = d3.behavior.drag()
  .on('drag', function() {
    circle.attr('cx', d3.event.x)
          .attr('cy', d3.event.y);
  });



function generateSVG() {
  svgSelection = boardSelection.append('svg')
                                   .attr('width', 700)
                                   .attr('height', 700);
}

function generatePlayer() {
  var drawPlayer = svgSelection.selectAll('.player')
                             .data([ {x: 350, y: 350, r: 10} ])
                             .append('circle')
                             .attr('class', 'player')
                             .attr('cx', (d)=> d.x)
                             .attr('cy', (d)=> d.y)
                             .attr('r', (d)=> d.r)
                             .style('fill', 'yellow')
                             //.data([ {x: x, y: y} ])
                             //.attr('transform', 'translate(' + x + ',' + y + ')')
                             .call(drag);
}

function generateEnemies(amount) {
  for (let i = 0; i < amount; i++) {
    generateEnemy();
  }
}


function generateEnemy() {
  let randomX = Math.random() * 700;
  let randomY = Math.random() * 700;

  function move() {
    drawEnemy.transition().duration(1500).attr('cx', Math.random() * 700).attr('cy', Math.random() * 700);
  }
  
  var drawEnemy = svgSelection.append('circle').attr('class', 'enemy')
                                   .attr('cx', randomX)
                                   .attr('cy', randomY)
                                   .attr('r', 10)
                                   .style('fill', 'purple');
  setInterval(function() {
    move();
  }, 1000);                                 
}



var enemyCount = prompt('How many enemies do you want to face?');
generateSVG();
generatePlayer();
generateEnemies(enemyCount);
