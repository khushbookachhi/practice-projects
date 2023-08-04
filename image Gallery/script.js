// let body=document.getElementById('about-para');
// console.log(body);
// let x=body.getBoundingClientRect().height;
// console.log(window.innerHeight);

let body=document.querySelector('html');
let x=body.getBoundingClientRect().height-window.innerHeight+1;
let view=document.getElementById('viewed');
window.addEventListener('scroll',()=>{
    let y=body.getBoundingClientRect().top;
    let ans=((y)/x)*100;
    ans=-(Math.round(ans));
    view.innerHTML=`${ans} % Viewed`;
})