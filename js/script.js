const screan = document.querySelector('.screan');
const btns = document.querySelectorAll('.button');
const znak = document.querySelector('.button-znak')

btns.forEach((element) => {
    element.addEventListener('click', () => {
        if (screan.textContent === '0') {
            screan.textContent = '';
            screan.textContent += element.textContent;
        } 
        else {
            screan.textContent += element.textContent;
        }
    })
})

znak.addEventListener('click', () => {
    let result1 = [];
    let result2 = [];
    let znak = [];
    let index1;
    let arr = screan.textContent.split('');
    arr.forEach((element, index) => {
        if (!isNaN(element) && index1 > 0){
            result2.push(element);
        }
        else if (isNaN(element)){
            znak.push(element);
            index1 = index;
        }
        else
            result1.push(element);
    });
    result1 = +(result1.join(''));
    result2 = +(result2.join(''));
    znak = znak.join('');
    switch(znak) {
        case '+':
            screan.textContent = result1+result2
            break;
        case '-':
            screan.textContent = result1 - result2
            break;
        case '*':
            screan.textContent = result1 * result2
            break;
        case '/':
            screan.textContent = result1 / result2
            break;
    }
})

// + znak.join('') + +(result2.join(''))













