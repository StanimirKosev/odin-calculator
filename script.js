function add(a,b){
    return a+b;
};

function subtract(a,b){
    return a-b;
};

function multiply(a,b){
    return a*b;
};

function divison(a,b){
    return a/b;
};

function operate(operator,a,b){
    
    switch (operator){
        case '+':    
            return add(a,b);
        
        case '-':
            return subtract(a,b);
           
        case '*':
            return multiply(a,b);
        
        case '/':
            return divison(a,b);    
    }

}


const calc = document.getElementById('calc');

function calculate(sq){
    for (let i = 0 ; i < sq ; i++){
        const div = document.createElement('div');
        calc.appendChild(div).className = 'div1';
    };
};
calculate(15);

const txtNClear = document.getElementById('textNclear');

        const text = document.createElement('div');
        txtNclear.appendChild(text).className = 'text';

        const clear = document.createElement('div');
        txtNclear.appendChild(clear).className = 'allClear';