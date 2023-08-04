var viewport=document.getElementById('viewport');
var catch_me=document.getElementById('catch-me');
var y=viewport.clientHeight-catch_me.clientHeight; 
var x=viewport.clientWidth-catch_me.clientWidth;
function moveElmRand(elm){
    elm.style.position ='absolute';
    elm.style.top = getRandom(0,(window.innerHeight-(elm.offsetHeight)))+'px';
    elm.style.left = getRandom(0,(window.innerWidth-(elm.offsetWidth)))+'px';
   }
  
  function getRandom(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min))+min;
  }
  