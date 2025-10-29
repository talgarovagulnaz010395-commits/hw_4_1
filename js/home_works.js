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

let position = 0;
const parentWidth = parentBlock.offsetWidth - childBlock.offsetWidth;

function moveBlock() {
    if (position < parentWidth) {
        position += 0.5;
        childBlock.style.left = `${position}px`;

        requestAnimationFrame(moveBlock);
    }
}
moveBlock();

