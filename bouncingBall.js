let ball = document.getElementById('float-circle');
 
// Write your code below
 
function up(){
  ball.style.bottom = '200px';
}
 
function down(){
  ball.style.bottom = '50px';
}
 
document.onkeydown = up;
 
document.onkeyup = down;
