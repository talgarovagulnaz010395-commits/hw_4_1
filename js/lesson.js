const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')


const regExp = /\+996\s\d{3}\s\d{2}-\d{2}-\d{2}/;

phoneButton.onclick = () => {
  if(regExp.test(phoneInput.value)){
    phoneResult.innerHTML = 'cool';
    phoneResult.style.color = 'green';
  }else{
    phoneResult.innerHTML = "not cool";
    phoneResult.style.color = 'red';
  }
}

// 5!
// 5 * 4 * 3 * 2 * 1 = 120

let testNum = 5;

//

const countTwo = () => {
  testNum++;
  console.log(testNum)
  if(testNum<1200){
    requestAnimationFrame(countTwo); //fps 
  }
}




// let one = 123123;


// console.log(news.match(regExp));

const tabBlocks = document.querySelectorAll('.tab_content_block');
const tabItems = document.querySelectorAll('.tab_content_item');
const tabItemsContainer = document.querySelector('.tab_content_items');

let currentIndex = 0;

const hideAllBlocks = () => {
  tabBlocks.forEach((block) => {
    block.style.display = 'none';
  });
  tabItems.forEach((tab) => {
    tab.classList.remove('tab_content_item_active');
  });
};

const showBlock = (index) => {
  tabBlocks[index].style.display = 'block';
  tabItems[index].classList.add('tab_content_item_active');
};

hideAllBlocks();
showBlock(currentIndex);


const autoSlide = () => {
  currentIndex++;
  if (currentIndex >= tabBlocks.length) {
    currentIndex = 0;
  }
  hideAllBlocks();
  showBlock(currentIndex);
};


let slideInterval = setInterval(autoSlide, 5000);


tabItemsContainer.onclick = (event) => {
  if (event.target.classList.contains('tab_content_item')) {
    tabItems.forEach((tab, tabIndex) => {
      if (event.target === tab) {
        hideAllBlocks();
        showBlock(tabIndex);
        currentIndex = tabIndex;
        clearInterval(slideInterval);
        slideInterval = setInterval(autoSlide, 5000);
      }
    });
  }
};


const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const euroInput = document.querySelector('#eur');

const convertor = (element, targetElement, targetElement2) => {
    element.oninput = async () => {
        try {
            const response = await fetch("../data/converter.json")
            const data = await response.json()
            if (element.id === 'som') {
                targetElement.value = (element.value / data.usd).toFixed(2)
                targetElement2.value = (element.value / data.euro).toFixed(2)
            }
            if (element.id === 'usd') {
                targetElement.value = (element.value * data.usd).toFixed(2)
                targetElement2.value = (element.value / data.euroToDollar).toFixed(2)
            }
            if (element.id === 'eur') {
                targetElement.value = (element.value * data.euro).toFixed(2)
                targetElement2.value = (element.value * data.euroToDollar).toFixed(2)
            }
            (element.value === '') && (targetElement.value = '', targetElement2.value = '')
        } catch (error) {
            console.log(error)
        }
    }
}
convertor(somInput, usdInput, euroInput)
convertor(usdInput, somInput, euroInput)
convertor(euroInput, somInput, usdInput)


const card = document.querySelector('.card')
const btnContainer = document.querySelector('.inner_card_switcher')

let cardId = 1
const firstCard = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
        const data = await response.json()
        card.innerHTML = `
            <p>${data.title}</p>   
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>   
            <span>${data.id}</span>   
            `
    } catch (error) {
        console.error(error)
    }
}
firstCard(cardId)
btnContainer.onclick = (event) => {
    if (event.target.tagName.toLowerCase() === 'button') {
        if (event.target.id === 'btn-next') {
            cardId < 200 ? cardId++ : cardId = 1
        } else if (event.target.id === 'btn-prev') {
            cardId > 1 ? cardId-- : cardId = 200
        }
        firstCard(cardId)
    }
}

