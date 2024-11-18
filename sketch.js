function setup() {
    createCanvas(800, 400, WEBGL); 
    noStroke(); 
  }
  
  function draw() {
    background(200);
  
    // Pencahayaan
    ambientLight(100, 100, 100); 
    directionalLight(255, 255, 255, 1, 1, -1); 
  
    // Rotasi donat
    rotateX(frameCount * 0);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0);
  
    // Warna material
    ambientMaterial(150, 10, 0);
  
    // Membuat donat
    torus(120, 40); 
  }
  