let button=document.getElementById('button');
// digit 1
let current=document.querySelector('.current');
let next=document.querySelector('.next');
// digit 2
let current2=document.querySelector('.current2');
let next2=document.querySelector('.next2');
// digit 3
let current3=document.querySelector('.current3');
let next3=document.querySelector('.next3'); 
// digit 4
let current4=document.querySelector('.current4');
let next4=document.querySelector('.next4'); 
// digit 5
let current5=document.querySelector('.current5');
let next5=document.querySelector('.next5'); 

let count=0;
let interval=0;
let inputNum=document.getElementById('number');
let x=1;
let start=true;
let digit2=1,total=1, digit3=1, digit4=1, digit5=1;
function animate(interval){

    if(total<=count){
           if(x>9){
            
           digit2Counter();
           }
           
            next.innerHTML=x;
            next.classList.add('animate');
            
        setTimeout(function(){
                current.innerHTML=x;
                next.classList.remove('animate');
                x++; 
        },500);
    }else{
        clearInterval(interval);   
        return;
    }
   
   
//    console.log("animate");  
++total;
console.log(total); 
}
function digit2Counter(){
    if(digit2>9){
        digit3Counter();
    }
    console.log('digit2Counter');
    x=0; 
    next2.innerHTML=digit2++;
    next2.classList.add('animate');
    setTimeout(function(){
        current2.innerHTML=next2.innerHTML;
        next2.classList.remove('animate');
         
},500); 
}

function digit3Counter(){
    if(digit3>9){
        digit4Counter();
    }
    console.log('digit3Counter');
    x=0; digit2=0;
    next3.innerHTML=digit3++;
    next3.classList.add('animate');
    setTimeout(function(){
        current3.innerHTML=next3.innerHTML;
        next3.classList.remove('animate');
         
},500); 
}

function digit4Counter(){
    if(digit4>9){
        digit5Counter();
    }
    console.log('digit4Counter');
    x=0; digit2=0; digit3=0;
    next4.innerHTML=digit4++;
    next4.classList.add('animate');
    setTimeout(function(){
        current4.innerHTML=next4.innerHTML;
        next4.classList.remove('animate');
         
},500); 
}

function digit5Counter(){
    console.log('digit5Counter');
    x=0; digit2=0; digit3=0; digit4=0;
    next5.innerHTML=digit5++;
    next5.classList.add('animate');
    setTimeout(function(){
        current5.innerHTML=next5.innerHTML;
        next5.classList.remove('animate');
         
},500); 
}



function startCounter(){
    count=parseInt(inputNum.value);
   
   if((count>=1 && count<=99999) && start===true){
    start=false; x=1; total=1;
  interval=setInterval(animate,700);
   }else{
    next.innerHTML=1;
    x=1; total=1; digit2=1; digit3=1; digit4=1; digit5=1;
    current2.innerHTML=0;
    next2.innerHTML=0;
    next2.classList.remove('animate');
    current3.innerHTML=0;
    next3.innerHTML=0;
    next3.classList.remove('animate');

    current4.innerHTML=0;
    next4.innerHTML=0;
    next4.classList.remove('animate');

    current5.innerHTML=0;
    next5.innerHTML=0;
    next5.classList.remove('animate');
   }
    
}

