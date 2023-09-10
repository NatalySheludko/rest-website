const btns = document.querySelectorAll(".btn");
const overlay = document.querySelector(".overlay");
const form = document.querySelector('.callback-form');

const body = document.querySelector('body');

console.log(btns);
console.log(overlay);
console.dir(overlay);

btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        overlay.style.display = 'flex';
        body.style.overflow = 'hidden';
    })
})

form.addEventListener('click', function(e){
    e.stopPropagation();
})

overlay.addEventListener('click', function(){
    overlay.style.display = 'none';
    body.style.overflow = 'auto';
})










const btn = document.querySelector(".more__info");
const advantages__blocks = document.querySelector(".advantages__blocks");

console.log(advantages__blocks);
console.dir(advantages__blocks);

advantages__blocks.addEventListener('click', function(){
    overlay.style.display = 'flex'
})

overlay.addEventListener('click', function(){
    overlay.style.display = 'none'
})





