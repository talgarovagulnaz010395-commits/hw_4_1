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

// обработчик кнопки Reset
resetBtn.onclick = () => {
    clearInterval(timer);
    seconds = 0;
    isRunning = false;
    updateDisplay();
};


// 1) Сделать слайдер автоматическим, чтобы срабатывала каждые 5 секунд или на ваше усмотрение
// 2) Вызывать модальное окно по скролу до конца страницы один раз. То есть если пользователь дошел до конца страницы то вызвать модальное окно один раз если он закроет его и снова прокрутит до конца страницы то вызов не должен происходить.
// Для выполнения этой задачи вам нужно изучить метод removeEventlistener() и событие scroll
// 3) Вызывать модальное окно через 10 секунд после открытия сайта
// 4) Добавить всё это в проект!

