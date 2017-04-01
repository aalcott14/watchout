// // start slingin' some d3 here.
// let svgSelection;
// var boardSelection = d3.select('.board');
// let enemyCount;

// // const drag = d3.behavior.drag()
// //                         .on('start', function() {})
// //                         .on('drag', function() {
// //                           circle.attr('cx', d3.event.x).attr('cy', d3.event.y)})
// //                         .on('end', function() {});


// function generateSVG() {
//   svgSelection = boardSelection.append('svg')
//                                .attr('width', 700)
//                                .attr('height', 700);
// }

// function generatePlayer() {
//   var drag = d3.behavior.drag()
//     .on('drag', function() {
//     player.attr('cx', d3.event.x);
//     player.attr('cy', d3.event.y);
//   });

//   var player = svgSelection.append('circle')
//                            .attr('class', 'player')
//                            .datum( {x: 350, y: 350} )
//                            .attr('cx', (d)=> d.x)
//                            .attr('cy', (d)=> d.y)
//                            .attr('r', 10)
//                            .style('fill', 'yellow')
//                            .call(drag);
// }
// // function generateEnemies(amount) {
// //   for (let i = 0; i < amount; i++) {
// //     generateEnemy();
// //   }
// //   enemyCount = amount;
// // }


// function generateEnemy() {
//   let randomX = Math.random() * 700;
//   let randomY = Math.random() * 700;

//   function move() {
//     let randomX = Math.random() * 700;
//     let randomY = Math.random() * 700;
    
//     //asteroids.datum({x: randomX, y: randomY})
//   }
  
//   // var drawEnemy = svgSelection.append('circle')
//   //                             .attr('class', 'enemy')
//   //                              .datum({x: randomX, y: randomY})
//   //                              .attr('cx', randomX)
//   //                              .attr('cy', randomY)
//   //                              .attr('r', 10)
//   //                              .style('fill', 'purple');
//     var asteroids = d3.select('svg').append('asteroids')
//       .data(d3.range(enemyCount))
//       .enter().append('div')
//       .attr('class', 'asteroid')
//       .style({
//         top: randomY,
//         left: randomX,
//         r: 10,
//         fill: 'purple',
//         width: 
//       })
//     asteroids.transition().duration(1500).attr('cx', randomX).attr('cy', randomY);
//   setInterval(function() {
//     move();
//     //detectCollide();
//   }, 1000);                                 
// }

// // function detectCollide() {
// //   d3.select('body').each(function(i, j) {
// //     console.log(
// //     d3.select(this)
// //       .selectAll('.enemy')
// //         .datum()
// //         )
// //   })
// // }


// generateSVG();
// enemyCount = prompt('How many enemies do you want to face?');
// generatePlayer();
// generateEnemies(enemyCount);

let drag = d3.behavior.drag().on('drag', function(){
  player.attr('cx', d3.event.x);
  player.attr('cy', d3.event.y);
})
let board = d3.select('.board')
  .style({width: 700, height: 700})

let svg = d3.select('svg')
  .attr('width', 700)
  .attr('height', 700)

let player = d3.select('svg')
  .append('circle')
  .style({fill: 'yellow'})
  .attr('class', 'mouse')
  .attr('cx', 350)
  .attr('cy', 350)
  .attr('r', 10)
  .call(drag);



function generateAsteroid(x, y) {
  svg.append('circle')
  .datum({x: x, y: y, r: 10})
  .attr('class', 'asteroid')
  .attr('cx', x)
  .attr('cy', y)
  .attr('r', 10)
  .style('fill', 'purple');
}

function move(asteroid){
  asteroid.transition()
    .duration(1000)
    .attr('cx', Math.random() * 700)
    .attr('cy', Math.random() * 700)
    .each('end', function() {
      move(d3.select(this))
    })
}

function checkCollision(asteroid){
  console.log(Math.floor(asteroid.datum().x))
  if(Math.floor(asteroid.datum().x) === Math.floor(player.x) || Math.floor(asteroid.datum().y) === Math.floor(player.y))
    console.log('NOOOOO')
}

for(let i=0; i<5; i++) 
  generateAsteroid(Math.random() * 700, Math.random() * 700) 


let asteroids = d3.selectAll('.asteroid');
asteroids.each( function() {
      move(d3.select(this));
      checkCollision(d3.select(this));
    })









































