let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);
let string = '';
  
buttonsArray.forEach(btn => {
    btn.addEventListener('click',(ent)=>{
        if(ent.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            display.value = string;
        }
        else if (ent.target.innerHTML == 'AC'){
            string = '';
            display.value = string ;
        }
        else if(ent.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }
        else {
        string += ent.target.innerHTML;
        display.value = string;
        }
    });
});

