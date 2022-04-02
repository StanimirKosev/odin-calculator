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

    const seven = document.createElement('button');
    seven.textContent = '7';
    calc.appendChild(seven).className = 'div1';
   
    const eight = document.createElement('button');
    eight.textContent = '8';
    calc.appendChild(eight).className = 'div1';

    const nine = document.createElement('button');
    nine.textContent = '9';
    calc.appendChild(nine).className = 'div1';

    const divide = document.createElement('button');
    divide.textContent = '/';
    calc.appendChild(divide).className = 'operators';

    const four = document.createElement('button');
    four.textContent = '4';
    calc.appendChild(four).className = 'div1';

    const five = document.createElement('button');
    five.textContent = '5';
    calc.appendChild(five).className = 'div1';

    const six = document.createElement('button');
    six.textContent = '6';
    calc.appendChild(six).className = 'div1';

    const asteriks = document.createElement('button');
    asteriks.textContent = '*';
    calc.appendChild(asteriks).className = 'operators';
    
    const three = document.createElement('button');
    three.textContent = '3';
    calc.appendChild(three).className = 'div1';

    const two = document.createElement('button');
    two.textContent = '2';
    calc.appendChild(two).className = 'div1';

    const one = document.createElement('button');
    one.textContent = '1';
    calc.appendChild(one).className = 'div1';

    const minus = document.createElement('button');
    minus.textContent = '-';
    calc.appendChild(minus).className = 'operators';
    
    const zero = document.createElement('button');
    zero.textContent = '0';
    calc.appendChild(zero).className = 'div1';

    const decimal = document.createElement('button');
    decimal.textContent = '.';
    calc.appendChild(decimal).className = 'div1';

    const equals = document.createElement('button');
    equals.textContent = '=';
    calc.appendChild(equals).className = 'equals div1';
    
    const plus = document.createElement('button');
    plus.textContent = '+';
    calc.appendChild(plus).className = 'operators';


const txtNClear = document.getElementById('textNclear');

    const text = document.createElement('div');
    text.textContent= '6 + 9 = 69';
    txtNclear.appendChild(text).className = 'text';    

    const clear = document.createElement('button');
    clear.textContent = 'AC';
    txtNclear.appendChild(clear).className = 'allClear operators';    

    

   