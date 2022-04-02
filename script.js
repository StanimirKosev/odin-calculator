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

let displayValue = [];

const calc = document.getElementById('calc');

    const seven = document.createElement('button');
    seven.textContent = '7';
    calc.appendChild(seven).className = 'div1';
    seven.addEventListener("click",function(){
        displayValue.push('7');
        reduceTry();
    })

    const eight = document.createElement('button');
    eight.textContent = '8';
    calc.appendChild(eight).className = 'div1';
    eight.addEventListener("click",function(){
        displayValue.push('8');
        reduceTry();
    })

    const nine = document.createElement('button');
    nine.textContent = '9';
    calc.appendChild(nine).className = 'div1';
    nine.addEventListener("click",function(){
        displayValue.push('9');
        reduceTry();
    })

    const divide = document.createElement('button');
    divide.textContent = '/';
    calc.appendChild(divide).className = 'operators';
    divide.addEventListener("click",function(){
        displayValue.push('/');
        reduceTry();
    })
    
    const four = document.createElement('button');
    four.textContent = '4';
    calc.appendChild(four).className = 'div1';
    four.addEventListener("click",function(){
        displayValue.push('4');
        reduceTry();
    })
    
    const five = document.createElement('button');
    five.textContent = '5';
    calc.appendChild(five).className = 'div1';
    five.addEventListener("click",function(){
        displayValue.push('5');
        reduceTry();
    })
    
    const six = document.createElement('button');
    six.textContent = '6';
    calc.appendChild(six).className = 'div1';
    six.addEventListener("click",function(){
        displayValue.push('6');
        reduceTry();
    })
    
    const asteriks = document.createElement('button');
    asteriks.textContent = '*';
    calc.appendChild(asteriks).className = 'operators';
    asteriks.addEventListener("click",function(){
        displayValue.push('*');
        reduceTry();
    })


    const three = document.createElement('button');
    three.textContent = '3';
    calc.appendChild(three).className = 'div1';
    three.addEventListener("click",function(){
        displayValue.push('3');
        reduceTry();
    })
    
    const two = document.createElement('button');
    two.textContent = '2';
    calc.appendChild(two).className = 'div1';
    two.addEventListener("click",function(){
        displayValue.push('2');
        reduceTry();
    })


    const one = document.createElement('button');
    one.textContent = '1';
    calc.appendChild(one).className = 'div1';
    one.addEventListener("click",function(){
        displayValue.push('1');
        reduceTry();
    })
    
    const minus = document.createElement('button');
    minus.textContent = '-';
    calc.appendChild(minus).className = 'operators';
    minus.addEventListener("click",function(){
        displayValue.push('-');
        reduceTry();
    })

    const zero = document.createElement('button');
    zero.textContent = '0';
    calc.appendChild(zero).className = 'div1';
    zero.addEventListener("click",function(){
        displayValue.push('0');
        reduceTry();
    })

    const decimal = document.createElement('button');
    decimal.textContent = '.';
    calc.appendChild(decimal).className = 'div1';
    decimal.addEventListener("click",function(){
        displayValue.push('.');
        reduceTry();
    })

    const equals = document.createElement('button');
    equals.textContent = '=';
    calc.appendChild(equals).className = 'equals div1';
    equals.addEventListener("click",function(){
        /*text.textContent= '=';
        displayValue.push('='); */
    })
    
    const plus = document.createElement('button');
    plus.textContent = '+';
    calc.appendChild(plus).className = 'operators';
    plus.addEventListener("click",function(){
        displayValue.push('+');
        reduceTry();
    })

const txtNclear = document.getElementById('txtNclear');

    const text = document.createElement('div');
    txtNclear.appendChild(text).className = 'text';    

    const clear = document.createElement('button');
    clear.textContent = 'AC';
    txtNclear.appendChild(clear).className = 'allClear operators';    


function reduceTry(){
    
    const pls = displayValue.reduce((total,value) => {
       return text.innerText = total + value;
    },'');
};