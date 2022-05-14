const counter = document.querySelector ('h2');
const buttons = document.querySelectorAll ('button');

let count = 0;
for (let btn of buttons) {
        btn.addEventListener('click', function(e) {
            const clicked = e.currentTarget.classList;

            if (clicked.contains('decrease')){
                count --;
            } 
            else if (clicked.contains('increase')) {
                count++;
            } else {
                count = 0;
            };

            counter.textContent = count;

            if (count < 0) {
                counter.style.color = 'red';
            } if (count > 0) {
                counter.style.color = 'green';
            } if (count === 0) {
                counter.style.color = 'black';
        };
    });
};
