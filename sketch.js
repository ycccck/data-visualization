// data from Data.GOV
// code reference from MM621 demos
// icon images from pixbay creative common source

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
    let years = data.getColumn("Annual Total");
    let fossilPro = data.getColumn("Total Fossil Fuels Production");
    let nuclearPro = data.getColumn("Nuclear Electric Power Production");
    let renewPro = data.getColumn("Total Renewable Energy Production");

    // for loop based on the number of rows, i = 74
      for (let i = 0; i < data.getRowCount(); i++) {
        let x = 250;
        let y = 150;
        let year = years[i];
        let rF = fossilPro[i];
        let rN = nuclearPro[i];
        let rR = renewPro[i];
        x = x + i * 10;
        noFill();
        strokeWeight(3);
        stroke(100, i * 3, i * 3);
        // show all
        ellipse(x, y - rF + 100, rF * 2);
        if (rN > 0){
          ellipse(x, y - rN + 250, rN * 2);
          }
        ellipse(x, y - rR + 400, rR * 2);

        // fossil fuel production, when hover over hightlight the circle and show the amount
        let dF = dist(x, y  + 100, mouseX, mouseY);
        if (dF < 5) {
          fill(100, i * 3, i * 3);
          noStroke();
          ellipse(x, y - rF + 100, rF * 2);
          textSize(20);
          text (year, x, y + 130); 
          textSize(18);
          text (rF, x, y + 150);
        }
        // nuclear electric power production, when hover over hightlight the circle and show the amount
        let dN = dist(x, y + 250, mouseX, mouseY);
        if (dN < 5) {
          fill(100, i * 3, i * 3);
          noStroke();
          ellipse(x, y - rN + 250, rN * 2);
          textSize(20);
          text (year, x, y + 280); 
          textSize(18);
          text (rN, x, y + 300);
        }
        // renewable energe production, when hover over hightlight the circle and show the amount
        let dR = dist(x, y + 400, mouseX, mouseY);
        if (dR < 5) {
          fill(100, i * 3, i * 3);
          noStroke();
          ellipse(x, y - rR + 400, rR * 2);
          textSize(20);
          text (year, x, y + 430); 
          textSize(18);
          text (rR, x, y + 450);
        }
      }
  }
}
