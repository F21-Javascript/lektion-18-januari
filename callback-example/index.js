function makePancakes(eat) {
    console.log('Making pancakes');
    eat();
}

makePancakes(() => {
    console.log("Let's eat!");
});

function makePancakes2(eat) {
    console.log('Making pancakes');
    eat();
}

function letEat() {
    console.log("Let's eat!");
}

makePancakes(letEat);

const buttonElem = document.querySelector('#button');

// Vi skickar med till funktionen addEventListener en funktionen som körs när man klickar
// på knappen. Detta är en callback.
buttonElem.addEventListener('click', () => {
    console.log('Du klickade på en knapp');
});

const calculateButton = document.querySelector('#calculate-button');

function multiply(number) {
    const sum = number * 2;
    console.log(sum);
}

calculateButton.addEventListener('click', () => {
    const number = document.querySelector('#number').value;
    multiply(number);
});

