// http://p5js.org/examples/simulate-game-of-life.html
const sketch = p => {
  p.w;
  p.columns;
  p.rows;
  p.board;
  p.next;

  p.setup = () => {
    p.createCanvas(720, 400);
    p.w = 20;
    // Calculate columns and rows
    p.columns = p.floor(p.width / p.w);
    p.rows = p.floor(p.height / p.w);
    // Wacky way to make a 2D array is JS
    p.board = new Array(p.columns);
    for (var i = 0; i < p.columns; i++) {
      p.board[i] = new Array(p.rows);
    }
    // Going to use multiple 2D arrays and swap them
    p.next = new Array(p.columns);
    for (i = 0; i < p.columns; i++) {
      p.next[i] = new Array(p.rows);
    }
    p.init();
  };

  p.draw = () => {
    p.background(255);
    p.generate();
    for (var i = 0; i < p.columns; i++) {
      for (var j = 0; j < p.rows; j++) {
        if (p.board[i][j] == 1) p.fill(0);
        else p.fill(255);
        p.stroke(0);
        p.rect(i * p.w, j * p.w, p.w - 1, p.w - 1);
      }
    }
  };

  // reset board when mouse is pressed
  p.mousePressed = () => {
    p.init();
  };

  // Fill board randomly
  p.init = () => {
    for (var i = 0; i < p.columns; i++) {
      for (var j = 0; j < p.rows; j++) {
        // Lining the edges with 0s
        if (i == 0 || j == 0 || i == p.columns - 1 || j == p.rows - 1)
          p.board[i][j] = 0;
        // Filling the rest randomly
        else p.board[i][j] = p.floor(p.random(2));
        p.next[i][j] = 0;
      }
    }
  };

  // The process of creating the new generation
  p.generate = () => {
    // Loop through every spot in our 2D array and check spots neighbors
    for (var x = 1; x < p.columns - 1; x++) {
      for (var y = 1; y < p.rows - 1; y++) {
        // Add up all the states in a 3x3 surrounding grid
        var neighbors = 0;
        for (var i = -1; i <= 1; i++) {
          for (var j = -1; j <= 1; j++) {
            neighbors += p.board[x + i][y + j];
          }
        }

        // A little trick to subtract the current cell's state since
        // we added it in the above loop
        neighbors -= p.board[x][y];
        // Rules of Life
        if (p.board[x][y] == 1 && neighbors < 2) p.next[x][y] = 0;
        // Loneliness
        else if (p.board[x][y] == 1 && neighbors > 3) p.next[x][y] = 0;
        // Overpopulation
        else if (p.board[x][y] == 0 && neighbors == 3) p.next[x][y] = 1;
        // Reproduction
        else p.next[x][y] = p.board[x][y]; // Stasis
      }
    }

    // Swap!
    p.temp = p.board;
    p.board = p.next;
    p.next = p.temp;
  };
};

export default sketch;
