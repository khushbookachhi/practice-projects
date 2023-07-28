console.log("working");
let color=document.getElementById('circle');
let x=0; let y=0;
let shape=document.getElementById('shape');

function changeColor(){
   
           if(x==0){
            color.style.backgroundColor='red';
            x++;
           }else if(x==1){
            color.style.backgroundColor='blue';
            x++;
           }else if(x==2){
            color.style.backgroundColor='yellow';
            x++;
           }else if(x==3){
            color.style.backgroundColor='green';
            x++;
           }else{
            color.style.backgroundColor='blueviolet';
            x=0;
           }
    
     }
     function changeShape(){
   
   if(y==0){
    shape.classList.remove('shape2');
    shape.classList.add('circle');
    y++;
   }else if(y==1){
    shape.classList.remove('circle');
    shape.classList.add('triangle');

    y++;
   }else if(y==2){
    shape.classList.remove('triangle');
    shape.classList.add('rightAngle');


// shape.style.cssText=`border-radius:50%`;
   
    y++;
   }else if(y==3){
    shape.classList.remove('rightAngle');
    shape.classList.add('cone');
    y++;
   }else{
    shape.classList.remove('cone');
    shape.classList.add('shape2');
    y=0;
   }

}
   

