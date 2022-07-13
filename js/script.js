// Анимация при скролле
let elements = document.querySelectorAll(".to__anim");
let html = document.querySelector('html');

if (elements) {
   giveActive()
   window.addEventListener('scroll', giveActive);
   function giveActive(){
      for (i = 0; i != elements.length; i++){
         let animItem = elements[i];
         let itemHeight = animItem.offsetHeight;
         let itemOffset = offset(animItem).top;
         const coefficient = 4;
         let StartAnimPoint = window.innerHeight - itemHeight / coefficient;

         if((pageYOffset > itemOffset - StartAnimPoint) && pageYOffset < (itemOffset + itemHeight)){
            animItem.classList.add("active");
         }
      }
   }
   function offset(el) {
      var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}

// Меню бургер
let menuBurger = document.querySelector(".header__burger");
let headerMenu = document.querySelector(".header__links");
menuBurger.addEventListener("click", function(){
   menuBurger.classList.toggle("active");
   headerMenu.classList.toggle("active");
   html.classList.toggle("lock");
});
// Переход по ссылкам
let menuLinks = document.querySelectorAll("a[data-goto]");
console.log(menuLinks);
if (menuLinks.length > 0){
   menuLinks.forEach(menuLinks => {
      menuLinks.addEventListener("click", onMenuLinkClick)
   });

   function onMenuLinkClick(event){
      const menuLink = event.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".header").offsetHeight;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         })
         event.preventDefault();

         headerMenu.classList.remove("active");
         menuBurger.classList.remove("active");
         html.classList.toggle("lock");
      }
   }
}
// Исправление адаптива для секции проектов
const projectsReverse = document.querySelectorAll('.projects__work__reverse');
if (window.innerWidth < 1024){
   for (i = 0; i != projectsReverse.length; i++){
      projectsReverse[i].classList.remove("projects__work__reverse");
   }
}