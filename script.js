let canvas =document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake= [];
snake[0]={
    x: 8 * box,
    y: 8 * box
}
let direction= "right";
let food = {
  x: Math.floor(Math.random() * 15 + 1) *box,
  y: Math.floor(Math.random() * 15 + 1) *box
}

function criarBG(){ //desenha o fundo  e preencha 1º//
    context.fillStyle= "#43C44F";
    context.fillRect (0, 0, 16 *box, 16*box); //altura e largura de 16 quadradinhos//
  }

function criarCobrinha(){ //CRIOU COBRINHA VERDE 2º
  for(i = 0; i < snake.length; i++){
    context.fillStyle="#54e346";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

function drawFood(){ //6º
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, box, box)
}

document.addEventListener('keydown', update);// 5º

function update(event){
  if(event.keyCode == 37 && direction != 'right') direction = 'left';
  if(event.keyCode == 38 && direction != 'down') direction = 'up';
  if(event.keyCode == 39 && direction != 'left') direction = 'right';
  if(event.keyCode == 40 && direction != 'up') direction = 'down';
}


function iniciarJogo(){ // vai atualizar o jogo no intervalo de tempo 3º
  

  if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
  if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
  if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
  if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;
  
  for(i = 1; i<snake.length; i++){
    if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
      clearInterval(jogo);
      alert('Game Over :(');
    }
  }


  criarBG();
  criarCobrinha();
  drawFood();


  let snakeX = snake[0].x; //posições iniciais da cobra em relação de X e Y
  let snakeY= snake[0].y;

  if(direction =="right") snakeX += box;
  if(direction =="left") snakeX -= box;
  if(direction == "up") snakeY -= box;
  if(direction =="down") snakeY += box;

  if(snakeX != food.x || snakeY != food.y){
    snake.pop();
  } else{ 
          food.x= Math.floor(Math.random() * 15 +1) *box;
          food.y=Math.floor(Math.random() *15 +1) *box
  }
  
  let newHead= { //vai acrescentar um elemento a frente 4º
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead); //método unshift adiciona como primeiro quadradinho da cobrinha
}

let jogo = setInterval(iniciarJogo, 100);

