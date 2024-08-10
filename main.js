 const slides = document.querySelectorAll(".slider-image img");
 const prevBtn= document.querySelector(".previous-Btn");
 const nextBtn= document.querySelector(".next-Btn");
 const imageId =document.querySelector(".image-id");
 const galleryContainer =document.querySelector(".gallery-container")
 galleryContainer.style.gridTemplateColumns =`repeat ${slides.length} , 1fr`
 let currentSlide =0;
 updateSliderControl();
 function goToSlide(n){
    //remove Active class from the current slide
    slides[currentSlide].classList.remove("active")
    // Update the current slide
    currentSlide =(n + slides.length) % slides.length //(-1 + 7) % 7 =6 to not out rangr nuber of image
    // Add Active Class to the New Slide
    slides[currentSlide].classList.add("active")
    // Update slider controls
    updateSliderControl();
    //Update thumbail Active State
    updateThumbnailActiveState(currentSlide)
 }
 prevBtn.addEventListener("click",()=>{
    goToSlide(currentSlide - 1); //-1
 });
 nextBtn.addEventListener("click",()=>{
    goToSlide(currentSlide + 1);
 });
 function updateSliderControl(){
    prevBtn.disabled =currentSlide ===0 ;
    nextBtn.disabled = currentSlide === slides.length -1;
    imageId.innerHTML = `Image ${currentSlide +1} of ${slides.length}`
 }

 slides.forEach((img,index)=>{
const thumbnail = img.cloneNode();
thumbnail.addEventListener("click",()=>{
    goToSlide(index)
})
galleryContainer.appendChild(thumbnail)
 })
 function updateThumbnailActiveState(index){
    galleryContainer.querySelectorAll("img").forEach((img,i)=>{
   img.classList.toggle("active",i===index)
    })
 }