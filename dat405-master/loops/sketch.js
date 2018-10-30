  let size2 = 30;
  let size = 50;
  function setup () {
      frameRate(2);
      createCanvas (500,500);

  }
  function draw() {
        fill (255);
      for (var y = 0; y < 10; y++)
      {
        for (let x = 0; x < 10; x++) {
        rect (size*x, size*y, size, size);

        }
      }
      for (var y2 = 0; y2 < 10; y2++)
      {

        for (let x2 = 0; x2 < 10; x2++) {
        fill (random(255), random(255), random(255))
        rect (size*x2 +10, size*y2 + 10, size2, size2);

        }
      }
  }
