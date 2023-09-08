const counter = document.getElementById('counter');

const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

let count = 0;
counter.value = count;

incrementButton.addEventListener('click', () => {
    count++;
    counter.value = count;
});

decrementButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
        counter.value = count;
    }
});
