// DOM
// Ref:
// >> star wrapper
const starWrapper = document.querySelector('.stars');

// >> rating result
const result = document.querySelector('.rating-result i span');


let currentIdx = 0;


// Methods

// click event to set the selected stars
function addListner() {
    starWrapper.addEventListener('click', (e) => {
        const target = e.target;
        if(target.classList.contains('fa-star')) {
            currentIdx = target.getAttribute('data-id');
            result.innerHTML = currentIdx
            changeColor(currentIdx);
        }
    })

    // on mouseover change the color states
    starWrapper.addEventListener('mouseover', (e) => {
        const target = e.target;
        if(target.classList.contains('fa-star')) {
            const newItem = target.getAttribute('data-id');
            changeColor(newItem);
        }
    })

    starWrapper.addEventListener('mouseleave', (e) => {
        // on mouseleave get the last selected star and set it
        changeColor(currentIdx);
    })
}


// change the stars color function
function changeColor(currentIdx) {
    let stars = document.querySelectorAll('.stars .star i');
    stars.forEach((element, idx) => {
        if(idx+1 <= currentIdx) {
            element.classList.remove('fa-regular');
            element.classList.add('fa-solid');
        } else {
            element.classList.remove('fa-solid');
            element.classList.add('fa-regular');
        }
    });
}

addListner();

