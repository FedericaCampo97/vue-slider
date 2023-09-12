/*Modifichiamo il codice dell'esercizio per renderlo 
funzionante con un array di oggetti al posto di un array 
di stringhe.*/

//Creo un array oggetto di immagini
const photo = [
    {
     image: './img/01.webp'
    },
    {
     image: './img/02.webp'
    },
    { 
     image: './img/03.webp'
    },
    {
     image: './img/04.webp'
    },
    {
     image: './img/05.webp'
    },
 ]
 
 //Inizializzo activeSlide a 0
 let activeSlide = 0;
 
 // Seleziono gli elementi html
 const sliderImagesEl = document.querySelector('.slider .images')
 const prevEl = document.querySelector('.prev')
 const nextEl = document.querySelector('.next')
 
 //Faccio ciclo foreach
 photo.forEach((element,key) => {
     const slidePath = element.image;
     
     //Creo l'elemtno img e verifico l'active dalla key
     const slideMarkup = `<img class="${activeSlide === key ? 'active' : '' }" src="${slidePath}" alt="">`
   
     sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)
 })
 
 //Seleziono immagini create
 const slidesImages = document.querySelectorAll('.slider .images > img')
 const thumbsElement = document.querySelector('.thumbnails')
 
 //Ciclo per creare in pagina le immagini piccole
 photo.forEach((element,key) => {
     const thumbPath = element.image;
     const thumbMarkup = `<img class="thumb ${activeSlide === key ? 'active' : ''}" src="${thumbPath}" alt="">`
     //console.log(thumbMarkup);
   
     thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)
 })
 
 function removeActive(){
     //Ricavo currentSlide e currentThumb
     const currentSlide = slidesImages[activeSlide]
     const currentThumb = document.querySelector('.thumbnails > img.active')
 
     // remove the active class from the current slide
     currentSlide.classList.remove('active')
     // remove the active class from the active thumb
     currentThumb.classList.remove('active')
 }
 
 function activateNextSlideAndThunmb(){
     // select the next slide
     const nextSlide = slidesImages[activeSlide]
     // add the active class to the next slide
     nextSlide.classList.add('active')
 
     // select the next thumb
     const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
     // add to the next thumb the active class
     nextThumb.classList.add('active')
 }
 
 //Creo funzione al click del next 
 nextEl.addEventListener('click', function(){
     removeActive()
   
     if (activeSlide === slidesImages.length - 1) {
       activeSlide = 0
     } else {
       activeSlide++
     }
 
     activateNextSlideAndThunmb()  
   })
 
 prevEl.addEventListener('click', function () {
   
     removeActive()
   
     if (activeSlide === 0) {
       activeSlide = slidesImages.length - 1
     } else {
         activeSlide--
     }
     
     activateNextSlideAndThunmb();
 })
 
 
 
 
 
 
 
 