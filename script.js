let clickBtn = document.querySelector(".btnClass");
let colors = ["Red","Yellow","Blue","Green","Purple","Pink"];
let index = 0;

clickBtn.addEventListener("click",() => {
   if(index>colors.length - 1){
       index = 0;
   }
   document.body.style.backgroundColor = colors[index++];
});