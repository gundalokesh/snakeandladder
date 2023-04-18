function player1(){
    let x = Math.floor(Math.random() * 6) + 1 ;
document.querySelector(".player1").innerHTML = x;
if(x <= 1){
  document.querySelector(".id1").style.left =  `${(x)* 20}px`;

  document.querySelector(".id1").style.zIndex = "1000";

}

else{
  document.querySelector(".id1").style.left =  `${(x - 1)* 79.86 }px`;
}

 







}
function player2(){
    let x = Math.floor(Math.random() * 6) + 1 ;
document.querySelector(".player2").innerHTML = x;
if(x <= 1){
  document.querySelector(".id2").style.left =  `${(x)* 20}px`;

  document.querySelector(".id2").style.zIndex = "1000";

}
else{
  document.querySelector(".id2").style.left =  `${(x - 1)* 79.86 }px`;
}
}

const container = document.querySelector(".grid-container");




for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
 
 
  div.className="grid-item-"+ i;
  container.appendChild(div);

  

}















