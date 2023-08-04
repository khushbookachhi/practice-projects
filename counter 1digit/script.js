let button=document.getElementById('button');
let current=document.querySelector('.current');
let next=document.querySelector('.next');
let count=0;
let interval=0;
let inputNum=document.getElementById('number');
let x=1;
let start=true;
function animate(interval){
    if(x<=count){
        next.innerHTML=x;
        next.classList.add('animate');
    
        setTimeout(function(){
            current.innerHTML=x;
            next.classList.remove('animate');
            x++;
        },500);
    }else{
        clearInterval(interval);
        
        
    }
   
   
//    console.log("animate");   
}

function startCounter(){
    count=parseInt(inputNum.value);
   
   if((count>=1 && count<10) && start===true){
    start=false; x=1;
  interval=setInterval(animate,1000);
   }else{
    next.innerHTML=1;
    x=1;

   }
    
}

