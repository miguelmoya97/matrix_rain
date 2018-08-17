var symbol;
var streams = [];
var symbolSize = 22;
var speed;
var width;
var height;


function setup() {
  width = 900;
  height = 500;
  speed = round(random(1,4));

  createCanvas(width, height);
  var x=0;
  var y=0;
  for (var i=0; i<=width/symbolSize; i++){
    var stream = new Stream();
    stream.generateSymbols(x, round(random(-10, 0)));
    streams.push(stream);
    x+=symbolSize;
  }

}

function draw() {
  background(0);
  for (var i=0; i<streams.length;i++){
    streams[i].draw();
  }
  //symbol.move();
  //symbol.setToRandomSymbol();
}

function Symbol(x, y, speed){
  this.x = x;
  this.y = y;
  this.value;
  this.speed = speed;
  this.rate = round(random(2,20));

  this.setToRandomSymbol = function(){
    if(frameCount % this.rate == 0) {
      this.value = String.fromCharCode(0x30A0 + round(random(0,96)));
    }
  }

  this.draw = function() {
    textSize(symbolSize);
    fill(0, 255, 90);
    text(this.value, this.x, this.y);
  }

  this.move = function() {
    this.y = (this.y>=height) ? this.y=0 : this.y+=this.speed;
  }

}





function Stream(){
  this.symbols = [];
  this.totalSymbols = round(random(6, 18));
  this.speed = round(random(1,5));

  this.generateSymbols = function(x, y) {
    for(var i=0; i < this.totalSymbols; i++){
      symbol = new Symbol(x,y,this.speed);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      y-=symbolSize;
    }
  }

  this.draw = function(){
    this.symbols.forEach(function(symbol) {
    //  textSize(symbolSize);
    //  fill(0, 255, 90);
    //  text(symbol.value, symbol.x, symbol.y);
      symbol.draw();
      symbol.setToRandomSymbol();
      symbol.move();
    });

    }


}
