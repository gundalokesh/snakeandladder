function player1(){
    let x = Math.floor(Math.random() * 6) + 1 ;
document.querySelector(".player1").innerHTML = x;
}
function player2(){
    let x = Math.floor(Math.random() * 6) + 1 ;
document.querySelector(".player2").innerHTML = x;
}

const container = document.querySelector(".grid-container");




for (let i = 100; i > 0; i--) {
  const div = document.createElement("div");
  const number = document.createTextNode((i + 0));
 
  div.className="grid-item";
  container.appendChild(div);
  div.appendChild(number);
  

}








