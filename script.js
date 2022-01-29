 let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');
let inspeed = document.getElementById('inspeed');


let values =[
'😃','😋','😐','🤐','😮','🤑','🥶','🤖','😡','😷','🙄'
];

function getRandomValue(){
  
    return  values[Math.floor(Math.random()*11)];

}
let animationid;
function updateanimation(newspeed) {
  if(animationid) clearInterval(animationid);
  
animationid=setInterval(() => {
   value1.innerText=getRandomValue()  ;
   value2.innerText=getRandomValue()  ;
   value3.innerText=getRandomValue() ; 
    
}, 1000/newspeed);

}

inspeed.onchange= function (ev){

//   console.log('value change',ev.target.value);
  document.documentElement.style.setProperty('--speed',ev.target.value);
  updateanimation(ev.target.value);

};