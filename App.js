let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);
let string = '';

buttonsArray.forEach(btn => {
    btn.addEventListener('click', (ent) => {
        if (ent.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        } else if (ent.target.innerHTML == 'AC') {
            string = '';
            display.value = string;
        } else if (ent.target.innerHTML == '=') {
            try {
                string = eval(string).toString();
            } catch {
                string = 'Error';
            }
            display.value = string;
        } else {
            string += ent.target.innerHTML;
            display.value = string;
        }
    });
});

// Function to handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/'].includes(key)) {
        string += key;
        display.value = string;
    } else if (key === 'Enter') {
        try {
            string = eval(string).toString();
        } catch {
            string = 'Error';
        }
        display.value = string;
    } else if (key === 'Backspace') {
        string = string.substring(0, string.length - 1);
        display.value = string;
    } else if (key === 'Escape') {
        string = '';
        display.value = string;
    }
});
