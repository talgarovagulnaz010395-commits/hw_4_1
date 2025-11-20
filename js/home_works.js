const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerText = 'Valid Gmail!';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.innerText = 'Invalid Gmail!';
        gmailResult.style.color = 'red';
    }
};
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;
let direction = 'right';

const parentWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const parentHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

function moveBlock() {
    if (direction === 'right') {
        if (positionX < parentWidth) {
            positionX += 0.7;
            childBlock.style.left = `${positionX}px`;
            requestAnimationFrame(moveBlock);
        } else {
            direction = 'down';
            requestAnimationFrame(moveBlock);
        }
    } else if (direction === 'down') {
        if (positionY < parentHeight) {
            positionY += 0.7;
            childBlock.style.top = `${positionY}px`;
            requestAnimationFrame(moveBlock);
        } else {
            direction = 'left';
            requestAnimationFrame(moveBlock);
        }
    } else if (direction === 'left') {
        if (positionX > 0) {
            positionX -= 0.7;
            childBlock.style.left = `${positionX}px`;
            requestAnimationFrame(moveBlock);
        } else {
            direction = 'up';
            requestAnimationFrame(moveBlock);
        }
    } else if (direction === 'up') {
        if (positionY > 0) {
            positionY -= 0.7;
            childBlock.style.top = `${positionY}px`;
            requestAnimationFrame(moveBlock);
        } else {
            direction = 'right';
            requestAnimationFrame(moveBlock);
        }
    }
}

moveBlock();

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const secondsDisplay = document.getElementById('seconds');

let seconds = 0;
let timer = null;
let isRunning = false;


function updateDisplay() {
    secondsDisplay.textContent = seconds;
}


startBtn.onclick = () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}
stopBtn.onclick = () => {
    clearInterval(timer);
    isRunning = false;
};


resetBtn.onclick = () => {
    clearInterval(timer);
    seconds = 0;
    isRunning = false;
    updateDisplay();
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const closeBtn = modal.querySelector('.modal_close');



    function openModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }
    closeBtn.addEventListener('click', closeModal);

    function handleScroll() {

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            openModal();

            window.removeEventListener('scroll', handleScroll);
        }
    }
    window.addEventListener('scroll', handleScroll);


    setTimeout(() => {
        openModal();
    }, 10000);
});

const charactersContainer = document.querySelector('.characters-list');

const xhr = new XMLHttpRequest();
xhr.open('GET', '../data/characters.json'); // путь к JSON
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();

xhr.onload = function () {
    try {
        const characters = JSON.parse(xhr.responseText);

        characters.forEach(person => {
            const card = document.createElement('div');
            card.classList.add('character-card');
            card.innerHTML = `
                <div class="character-photo">
                 <img src="${person.photo}" alt="${person.name}">
                </div>
                  <h3>${person.name}</h3>
                  <p><b>Возраст:</b> ${person.age}</p>
                  <p>${person.text}</p>
                `;

            charactersContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Ошибка при загрузке characters.json');
    }
};


const getData = async()=>{
    try {
        const response = await fetch('../data/bio.json')
        const data = await response.json()
        console.log("Мои данные:",data)
    }
    catch(e){
        console.log(e);
    }

}

const getPosts = async()=>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log("Все посты:",data)
    }catch(e){
        console.log(e)
    }

}
getPosts()
getData()






