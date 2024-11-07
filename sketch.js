// data from Data.GOV
// code reference from MM621 demos
// icon images from pixbay cretive common source

let data;

// load data and images
function preload() {
  data = loadTable("energy.csv", "csv", "header");
  imgFossil = loadImage("fossil.png");
  imgNuclear = loadImage("nuclear.png");
  imgRenew = loadImage("renewable.png");
}

function setup() {
  // use in html for the id
  let canvas = createCanvas(1200, 700);
  canvas.parent("energy-pro");
}

function draw() {
  background(0);
  // resize images
  let imgX = 150;
  let imgY = 210;
  let imgd = 170;
  imageMode(CENTER);
  image(imgFossil, imgX, imgY);
  imgFossil.resize(100, 100);

  image(imgNuclear, imgX, imgY+imgd);
  imgNuclear.resize(100, 100);

  image(imgRenew, imgX, imgY+imgd*2);
  imgRenew.resize(100, 100);

  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(15);
  text("Fossil Fuels", imgX, imgY+65);
  text("Nuclear Electric Power", imgX, imgY+235);
  text("Renewable Energy", imgX, imgY+405);
  textSize(25);
  fill(120, 0, 0);
  text("1949", 250, imgY-160);
  fill(100, 222, 222);
  text("2023", 990, imgY-160);

  // if data is read
  if (data) {
    let year = data.getColumn("Annual Total");
    let fossilPro = data.getColumn("Total Fossil Fuels Production");
    let nuclearPro = data.getColumn("Nuclear Electric Power Production");
    let renewPro = data.getColumn("Total Renewable Energy Production");
    // console.log(year);

    // for loop based on the number of rows, i = 74
      for (let i = 0; i < data.getRowCount(); i++) {
        let x = 250;
        let y = 150;
        let rF = fossilPro[i];
        let rN = nuclearPro[i];
        let rR = renewPro[i];
        x = x + i * 10;
        noFill();
        strokeWeight(3);
        stroke(100, i * 3, i * 3);

        // fossil fuel production, when hover over
        let dF = dist(imgX, imgY, mouseX, mouseY);
        if (rF > 0 && dF < 50) {
          ellipse(x, y - rF + 100, rF * 2);
        }
        // nuclear electric power production, when hover over
        let dN = dist(imgX, imgY+imgd, mouseX, mouseY);
        if (rN > 0 && dN < 50) {
          ellipse(x, y - rN + 250, rN * 2);
        }
        // renewable energe production, when hover over
        let dR = dist(imgX, imgY+imgd*2, mouseX, mouseY);
        if (rR > 0 && dR < 50) {
          ellipse(x, y - rR + 400, rR * 2);
        }
        // show all, when mouse is pressed
        if (mouseIsPressed){
          ellipse(x, y - rF + 100, rF * 2);
          ellipse(x, y - rN + 250, rN * 2);
          ellipse(x, y - rR + 400, rR * 2);
        }
      }
  }
}
