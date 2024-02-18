// DOM
// Ref:
// >> star wrapper
const starWrapper = document.querySelector('.stars');

// >> star icon

// >> rating result
const result = document.querySelector('.rating-result i span');


// Methods
let currentIdx = 0;

// click event
function addListner() {
    starWrapper.addEventListener('click', (e) => {
        const target = e.target;
        if(target.classList.contains('fa-star')) {
            currentIdx = target.getAttribute('data-id');
            result.innerHTML = currentIdx
            changeColor(currentIdx);
        }
    })

    starWrapper.addEventListener('mouseover', (e) => {
        const target = e.target;
        if(target.classList.contains('fa-star')) {
            const newItem = target.getAttribute('data-id');
            //result.innerHTML = currentIdx
            changeColor(newItem);
        }
    })

    starWrapper.addEventListener('mouseleave', (e) => {
        //const target = e.target.getAttribute('data-id');
        changeColor(currentIdx);
    })

    // starWrapper.addEventListener('mouseover', (e) => {
    //     const target = e.target.getAttribute('data-id');
    //     changeColor(target);
    // })
}

// mouseover


// mouseremove/mouseleave

// toggelStars

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

