console.log('Working');
let ball= document.getElementById('ball');
let button=document.querySelector('.button');
let body=document.querySelector('body');
let x=0;

button.addEventListener('click', ()=>{
    button.classList.toggle('active');
    body.classList.toggle('active');
    // document.getElementsByTagName('h1').classList.toggle('active');
    // classlist does not work on tag but it can in queryselector id class
})
