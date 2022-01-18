/**
 * 1. Koppla en eventlyssnare till knappen
 * 2. När jag klickar på knappen slumpa ett number
 * 3. Baserat på numret applicera en av följande css-klasser på tärningen
 * (dots-1, dots-2, dots-3, dots-4, dots-5, dots-6)
 */

const dice = {
    sides:6,
    throw: function() {
        return Math.ceil(Math.random() * dice.sides);
    }
}

const throwButton = document.querySelector('#throw-button');
const diceElem = document.querySelector('#theDice');

throwButton.addEventListener('click', () => {
    const result = dice.throw();

    console.log(`Nummer slumpat: ${result}`);
    diceElem.classList = '';
    diceElem.classList.add('dice', `dots-${result}`);
});