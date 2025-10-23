let rectangle = [];

function setup (){

createCanvas(600,600);
 for (let i = 0; i < 100 ; i++) { 
    let rect= {
    x: random(600),
    y: random (600),
    length:50,
    width:50,
    }
rectangle. push(rect);


} 
console.log(rectangle)


}
function draw () {
background (255)
fill(25,255)
  for (let i = 0; i < rectangle.length; i++) {
        rect(rectangle[i].x, rectangle[i].y, 7);
  }







}   
function mouseClick (){








}

