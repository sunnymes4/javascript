const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

const card1 = document.querySelector('#photoSec');
const card2 = document.querySelector('#wrapper');

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
            const singleCard = document.createElement('div');
            const frontBox = document.createElement('div');
            const backBox = document.createElement('div');
            const bgImg = document.createElement('img');

            bgImg.src = item.url;
            bgImg.width = '200';
            bgImg.height = '200';

            frontBox.append(bgImg);

            singleCard.classList.add('single-card');
            frontBox.classList.add('front');
            backBox.classList.add('back');

            backBox.innerHTML = `<h3>${item.title}</h3><br/><img src='${item.thumbnailUrl}' style='width: 100px'/>`;
            
            singleCard.append(frontBox);
            singleCard.append(backBox);

            card2.append(singleCard);

        })
    } catch(error) {
        console.log(error);
    }
}

btn1.addEventListener('click', fetchData1);
btn2.addEventListener('click', fetchData2);