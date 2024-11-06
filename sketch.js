let data;

// load data and images
function preload() {
  data = loadTable("energy.csv", "csv", "header");
  imgFossil = loadImage("fossil.png");
  imgNuclear = loadImage("nuclear.png");
  imgRenew = loadImage("renewable.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  // header
      fill(255);
      noStroke();
      textSize(30);
      textAlign(CENTER, CENTER);
      text("Energy Production from 1949 to 2023", 600, 80);
  
  // resize images
  image(imgFossil, 100, 310);
  imgFossil.resize(100, 100);

  image(imgNuclear, 100, 480);
  imgNuclear.resize(100, 100);

  image(imgRenew, 100, 650);
  imgRenew.resize(100, 100);

  // if data is read, use for large data sets
  if (data) {
    let year = data.getColumn("Annual Total");
    let fossilPro = data.getColumn("Total Fossil Fuels Production");
    let nuclearPro = data.getColumn("Nuclear Electric Power Production");
    let renewPro = data.getColumn("Total Renewable Energy Production");
    // console.log(year);

    // for loop based on the number of rows, i = 74
    let m = mouseX;
    if (m > 150) {
      for (let i = 0; i < data.getRowCount(); i++) {
        let x = 300;
        let y = 300;
        let rF = fossilPro[i];
        let rN = nuclearPro[i];
        let rR = renewPro[i];
        x = x + i * 10;
        noFill();
        strokeWeight(3);
        stroke(100, i * 3, i * 3);

        // fossil fuel production
        if (rF > 0) {
          ellipse(x, y - rF + 100, rF * 2);
        }

        // nuclear electric power production
        if (rN > 0) {
          ellipse(x, y - rN + 250, rN * 2);
        }
        // renewable energe production
        if (rR > 0) {
          ellipse(x, y - rR + 400, rR * 2);
        }

        // image didn't work this way
        // image(imgFossil, 100, 100);
        // imgFossil.resize(rF, rF);
      }

      fill(255);
      noStroke();
      text("Energy Production from 1949 to 2023", 600, 80);
      textSize(20);
      text("Fossil Fuels", 600, 420);
      text("Nuclear Electric Power", 600, 570);
      text("Renewable Energy", 600, 720);
      textSize(25);
      fill(120, 0, 0);
      text("1949", 300, 200);
      fill(100, 222, 222);
      text("2023", 1040, 200);
    }
  }
}