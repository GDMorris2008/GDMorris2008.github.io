$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Gri
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(400, 650, 200, 20,"yellow" );
    createPlatform(800, 550, 200, 20,"orange" );
    createPlatform(1200, 450, 200, 20,"red" );
    createPlatform(800, 340, 200, 20,"cyan" );
    createPlatform(400, 250, 200, 20,"black" );



    // TODO 3 - Create Collectables
    createCollectable("database", 500, 610);  // yellow
    createCollectable("database", 900, 510);  // orange
    createCollectable("database", 1300, 410); // red
    createCollectable("database", 900, 300);  // cyan
    createCollectable("database", 500, 210);  // black
    
    // TODO 4 - Create Cannons
    createCannon("bottom", 400, 1500);
    createCannon("top", 300, 1000);
    createCannon("bottom", 800, 1000);
 



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
