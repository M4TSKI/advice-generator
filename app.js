
let quoteAdviceElement = document.querySelector('.quote__box--advice');
let quoteTextElement = document.querySelector('.quote__box--text');
let quoteButtonElement = document.querySelector('.quote__box--button');

const bindButtonEvent = () => quoteButtonElement.addEventListener("click",renderQuote);
const toogleButtonActive = () => quoteButtonElement.disabled !== quoteButtonElement.disabled;
const renderQuote = () => {
    toogleButtonActive()
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            quoteAdviceElement.innerText = `ADVICE #${data.slip.id}`;
            quoteTextElement.innerText = `“${data.slip.advice}”`;
        });
    toogleButtonActive()
}
const init = () => {
    bindButtonEvent();
    renderQuote();
}

init();