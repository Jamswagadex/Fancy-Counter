const counterEl = document.querySelector('.counter');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');
const counterTitleEl = document.querySelector('.counter__title');

function increamentCounter(){
    //Get current value of Counter
    const currentValue = counterValueEl.textContent;
    //Change current value to number
    const currentValueAsNumber = +currentValue;
    //increment by 1
    let newValue = currentValueAsNumber + 1;
    //check if the newValue is greater than 5
    if (newValue > 5) {
    //if it is, force it to be 5 instead
        newValue = 5;
    //give user indicator that limit has been reached
    counterEl.classList.add ('counter--limit');
    //update counter title to say limit has been reached
    counterTitleEl.innerHTML = 'Limit!, Buy <b>pro</b> for >5';
    //Disable both increase and decrease button
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
    }
    //update counter value with new content
    counterValueEl.textContent = newValue;

    //unfocused (blur) button
    increaseButtonEl.blur();
}

increaseButtonEl.addEventListener('click', increamentCounter);

decreaseButtonEl.addEventListener('click', function(){
    //Get the current value of counter
    const currentValue = counterValueEl.textContent; 
    //change the current value to number
    const currentValueAsNumber = +currentValue;
    //decrement by 1
    let newValue = currentValueAsNumber - 1;
    //check if new value is less than 0
    if(newValue < 0) {
        //force newValue to be 0
        newValue = 0;
    };
    //update counter value with new content
    counterValueEl.textContent = newValue;

    //unfocused (blur) button
    decreaseButtonEl.blur();
});

resetButtonEl.addEventListener('click', function() {
    //set counter value to 0
    counterValueEl.textContent = 0;
    //reset background color
    counterEl.classList.remove('counter--limit');
    //reset counter title
    counterTitleEl.textContent = 'Fancy Counter';
    //enable increase and decrease button
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;

    //unfocused (blur) button
    resetButtonEl.blur();
});
    document.addEventListener('keydown', increamentCounter);