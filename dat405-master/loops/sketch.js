  let size = 50;
  function setup () {
      createCanvas (500,500);
      noLoop();

  }
  function draw() {
      fill (215, 200,170);
      for (var y = 0; y < 10; y+=3.4)
      {
        for (let x = 0; x < 10; x++) {
        fill (128,0,128)
        rect (size*x, size*y, size, size);
        console.log("X: " + x + ", Y: " + y)
        }
      }
  }
