var lebronPosition = 0;
var curryPosition = 0;
// $('#curry').attr(left)
// console.log(curryLeft);


function keyFunction(e){
  if(e.keyCode == 39){
      lebronPosition +=10;
      lebron.style.left = lebronPosition + '2px';
    }
   if(e.keyCode == 90){
      curryPosition +=10;
      curry.style.left = curryPosition + '2px';
    if(curryLeft >= 1000){
        alert("curry winner!!");
      }
    }
};

document.onkeydown = keyFunction;



