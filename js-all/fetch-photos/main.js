const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

const card1 = document.querySelector('#photoSec');
const card2 = document.querySelector('.single-card');

const fetchData1 = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const minData = await res.json();

        const mainData = minData.splice(0, 4);
        console.log(mainData);
        mainData.map(item => {
            // normal photo gallery 
            const photo = document.createElement('img');
            photo.src = item.url;
            photo.width = 200;
            photo.height = 200;
            photo.style.margin = '10px'; 
            card1.append(photo);
        })
    } catch(error) {
        console.log(error);
    }
}

const fetchData2 = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const minData = await res.json();

        const mainData = minData.splice(0, 4);
        console.log(mainData);
        mainData.map(item => {
            // flip photo gallery
            const frontBox = document.createElement('div');
            frontBox.classList.add('front');
            frontBox.style.backgroundImage = item.url;

            const backBox = document.createElement('div');
            backBox.classList.add('back');
            backBox.innerHTML = `<h3>${item.title}</h3><br/><img src='${item.thumbnailUrl}'/>`;
            
            card2.append(frontBox);
            card2.append(backBox);

        })
    } catch(error) {
        console.log(error);
    }
}

btn1.addEventListener('click', fetchData1);
btn2.addEventListener('click', fetchData2);