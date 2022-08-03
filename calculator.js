const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
        }
        else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.slice(0, - 1);
        }
        else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        }
        else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        }
        else {
            display.innerText += item.id;
        }
    }

})

alert("Toggle me to show Light and Dark Mode");


const toggleButton = document.querySelector('.theme');
const calculator = document.querySelector('.calculator');
const themeIcon = document.querySelector('.themeIcon');
let dark = true;
toggleButton.onclick = () => {
    calculator.classList.toggle('dark');
    toggleButton.classList.toggle('active');
    dark = !dark;
}




