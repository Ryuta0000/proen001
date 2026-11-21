// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;
const vyMax = 20;//追加

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ
  
  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  // BLANK[1] キャラクターの左右移動
  if (keyIsDown(LEFT_ARROW)) { x -= 5;}
  if (keyIsDown(RIGHT_ARROW)){ x += 5; }
  if (keyIsDown(SHIFT) && keyIsDown(LEFT_ARROW)) { x -= 10;}
  if (keyIsDown(SHIFT) && keyIsDown(RIGHT_ARROW)){ x += 10;}
  
   
  // BLANK[2] 重力とジャンプ要件３はテキストの「重力、床に弾む」の応用になります。 地面で跳ね返る代わりにキー操作でジャンプ（vx を大きめの負の値にする）するようにしてください。 そのままだと空中でもジャンプできてしまうので、地面にいるときだけジャンプできるように if 文を追加しましょう。
  if (y < height * 0.498 ) { vy += g; }
  if (y >= height * 0.75) { vy = vy * 0;}
  if( y < height * 0.8){ vy = 0.5 * vy;}
  if (keyIsDown(UP_ARROW)){vy = -2;}
  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新
  x += vx;
  y += vy;
  // キャラクターを描く
  fill(0);
  ellipse(x, y*1.5, size, size);
}

x = x +vx
  