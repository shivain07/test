
let slides = document.getElementsByClassName('slide')
let totalSlides = slides.length
let currentIndex = 0
function leftclick() {
    // console.log('currentIndex is left ' + currentIndex)
    
    if (currentIndex <= 0 ) {
        currentIndex = totalSlides-1
        check(currentIndex)
        return

    }
    else {
        currentIndex =currentIndex- 1
        check(currentIndex)
        return

    }
    
    
}
function rightclick() {
    // console.log('currentIndex is right ' + currentIndex)

    if(currentIndex>totalSlides){
        alert('its over')
    }
    
    if (currentIndex >= totalSlides) {
        currentIndex = 0
        check(currentIndex)
        return
    }
    else {
        check(currentIndex)
        currentIndex =currentIndex+ 1
        return
        
    }
    
    

}


function check(currentIndex){
    for (let i = 0; i < totalSlides; i++) {
        if (i != currentIndex) {
            slides[i].classList.add('hide')
            slides[i].classList.remove('show')
            
            
        } else {
            
            slides[currentIndex].classList.add('show')
            slides[currentIndex].classList.remove('hide')
            
        }
    }
    
}
// console.log(slides[currentIndex].classList, totalSlides)