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

    const seven = document.createElement('div');
    seven.textContent = '7';
    calc.appendChild(seven).className = 'div1';

    const eight = document.createElement('div');
    eight.textContent = '8';
    calc.appendChild(eight).className = 'div1';

    const nine = document.createElement('div');
    nine.textContent = '9';
    calc.appendChild(nine).className = 'div1';

    const divide = document.createElement('div');
    divide.textContent = '/';
    calc.appendChild(divide).className = 'div1';

    const four = document.createElement('div');
    four.textContent = '4';
    calc.appendChild(four).className = 'div1';

    const five = document.createElement('div');
    five.textContent = '5';
    calc.appendChild(five).className = 'div1';

    const six = document.createElement('div');
    six.textContent = '6';
    calc.appendChild(six).className = 'div1';

    const asteriks = document.createElement('div');
    asteriks.textContent = '*';
    calc.appendChild(asteriks).className = 'div1';
    
    const three = document.createElement('div');
    three.textContent = '3';
    calc.appendChild(three).className = 'div1';

    const two = document.createElement('div');
    two.textContent = '2';
    calc.appendChild(two).className = 'div1';

    const one = document.createElement('div');
    one.textContent = '1';
    calc.appendChild(one).className = 'div1';

    const minus = document.createElement('div');
    minus.textContent = '-';
    calc.appendChild(minus).className = 'div1';
    
    const zero = document.createElement('div');
    zero.textContent = '0';
    calc.appendChild(zero).className = 'div1';

    const equals = document.createElement('div');
    equals.textContent = '=';
    calc.appendChild(equals).className = 'div1';

    const plus = document.createElement('div');
    plus.textContent = '+';
    calc.appendChild(plus).className = 'div1';


const txtNClear = document.getElementById('textNclear');

    const clear = document.createElement('div');
    clear.textContent = 'AC';
    txtNclear.appendChild(clear).className = 'allClear';    

    const text = document.createElement('div');
    txtNclear.appendChild(text).className = 'text';

   