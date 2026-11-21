// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 11; // マスの一辺の長さ
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      if ((i + j) % 2 === 0){
        fill(255); //しろ
        stroke(255);
      } else {
        fill(128); //グレー
        stroke(128);
      }
      rect(i * size, j * size, size, size);/// BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
      if (j < 3){
        if ((i + j) % 2 === 1){
          fill(255, 0, 0);
        ellipse(i * size + size / 2, j * size + size / 2, size* 0.9, size * 0.9);
        }
      }  
      if (j > 4){
        if ((i + j) % 2 === 1){
          fill(0);
        ellipse(i * size + size / 2, j * size + size / 2, size * 0.9, size * 0.9);
       }
      }  
      
    }
  
  }
}