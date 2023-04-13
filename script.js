/*const knopka=document.querySelector("#knopka");
console.log(knopka);
const menu=document.querySelector(".menu");

knopka.addEventListener("click",knopka1)

function knopka1 () {
  menu.classList.toggle("event")
}*/
const knopka=document.querySelector("#knopka");
console.log(knopka);
const menu=document.querySelector(".menu");

knopka.addEventListener("click",()=>{
  menu.classList.toggle("event")
})

 /*(argument)=> {
  // body...
}*/

// $('.akcii').slick();
$('.akcii').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
   arrows : false,
});
