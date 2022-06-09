const target =  document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset;
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add('animate')
        }
        console.log(element.offsetTop);
    })
}

window.addEventListener('scroll', function(){
    animeScroll();
})