function add(a,b){
    return parseFloat(a) + parseFloat(b);
};

function subtract(a,b){
    return parseFloat(a) - parseFloat(b);
};

function multiply(a,b){
    return parseFloat(a) * parseFloat(b);
};

function divison(a,b){
    return parseFloat(a) / parseFloat(b);
};


function operate(a,operator,b){ 
   
   if ( operator == '+'){
        result = add(a,b);
        resultAppender();
        afterCalc();
        displayTxt();
    }  
   if ( operator == '-'){
        result = subtract(a,b);
        resultAppender();
        afterCalc();
        displayTxt();
   }
   if ( operator == '*'){
        result= multiply(a,b);
        resultAppender();
        afterCalc();
        displayTxt();
   }
    if ( operator == '/'){
        result = divison(a,b);
        resultAppender();
        afterCalc();
        displayTxt();
    }     
};    


function resultAppender(){
       
    displayValue.forEach(function(obj){
        if (obj.result === ''){ 
            obj.result = result;
        }
    });
};
 

function afterCalc(){
    
    displayValue = [{  
        number1: result,
        operator:'',
        number2:'',   
        result,
    }]; 
};

function allClear(){

    displayValue = [{
        number1:'',
        operator:'',
        number2:'',
        result
    }];
    displayTxt();
};

function displayTxt(){ 
   
    const pls = displayValue.reduce((total,value) => {
    return text.innerText = `${total} ${value.number1} ${value.operator} ${value.number2}`; 
    },'');
};
 

let result = 0;

let displayValue = [{  /**  2. allClear butona  */
    number1:'',
    operator:'',
    number2:'',
    result:''    
}];

    /** DOM Manipulation and event listeners */
    const calc = document.getElementById('calc');

    const seven = document.createElement('button'); 
    seven.textContent = '7'; 
    calc.appendChild(seven).className = 'div1';
    seven.addEventListener("click",function(){
        displayValue.forEach(function(obj){
            if ((obj.number1 === '' || obj.number1 !== '' ) && obj.operator === ''){ 
                if (result == ''){
                    obj.number1 += '7'
                }
                if (result != ''){
                    result= ''
                    obj.number1 = '7'
                }
            } 
            if (obj.operator !== ''){
                obj.number2 += '7'; 
            }
        });
    displayTxt();
    })

    const eight = document.createElement('button');
    eight.textContent = '8';
    calc.appendChild(eight).className = 'div1';
    eight.addEventListener("click",function(){
        displayValue.forEach(function(obj){
            if ((obj.number1 === '' || obj.number1 !== '' ) && obj.operator === ''){ 
                if (result == ''){
                    obj.number1 += '8'
                }
                if (result != ''){
                    result= ''
                    obj.number1 = '8'
                }
            } 
            if (obj.operator !== ''){
                obj.number2 += '8'; 
            }
        });
    displayTxt();
    })

    const nine = document.createElement('button');
    nine.textContent = '9';
    calc.appendChild(nine).className = 'div1';
    nine.addEventListener("click",function(){
        displayValue.forEach(function(obj){
            if ((obj.number1 === '' || obj.number1 !== '' ) && obj.operator === ''){ 
                if (result == ''){
                    obj.number1 += '9'
                }
                if (result != ''){
                    result= ''
                    obj.number1 = '9'
                }
            } 
            if (obj.operator !== ''){
                obj.number2 += '9'; 
            }
        });
    displayTxt();
    })

    const divide = document.createElement('button');
    divide.textContent = '/';
    calc.appendChild(divide).className = 'operators';
    divide.addEventListener("click",function(){
        displayValue.forEach(function(obj){
            if (obj.operator === ''){ 
                obj.operator= '/';
            }
        });
        decimal.disabled = false
        displayTxt();
    })
    
    const four = document.createElement('button');
    four.textContent = '4';
    calc.appendChild(four).className = 'div1';
    four.addEventListener("click",function(){
        displayValue.forEach(function(obj){
            if ((obj.number1 === '' || obj.number1 !== '' ) && obj.operator === ''){ 
                if (result == ''){
                    obj.number1 += '4'
                }
                if (result != ''){
                    result= ''
                    obj.number1 = '4'
                }
            } 
            if (obj.operator !== ''){
                obj.number2 += '4'; 
            }
        });
    displayTxt();
    })
    
    const five = document.createElement('button');
    five.textContent = '5';
    calc.appendChild(five).className = 'div1';
    five.addEventListener("click",function(){
        displayValue.forEach(function(obj){
            if ((obj.number1 === '' || obj.number1 !== '' ) && obj.operator === ''){ 
                if (result == ''){
                    obj.number1 += '5'
                }
                if (result != ''){
                    result= ''
                    obj.number1 = '5'
                }
            } 
            if (obj.operator !== ''){
                obj.number2 += '5'; 
            }
        });
    displayTxt();
    })
    
    const six = document.createElement('button');
    six.textContent = '6';
    calc.appendChild(six).className = 'div1';
    six.addEventListener("click",function(){
        displayValue.forEach(function(obj){
            if ((obj.number1 === '' || obj.number1 !== '' ) && obj.operator === ''){ 
                if (result == ''){
                    obj.number1 += '6'
                }
                if (result != ''){
                    result= ''
                    obj.number1 = '6'
                }
            } 
            if (obj.operator !== ''){
                obj.number2 += '6'; 
            }
        });
    displayTxt();
    })
    
    const asteriks = document.createElement('button');
    asteriks.textContent = '*';
    calc.appendChild(asteriks).className = 'operators';
    asteriks.addEventListener("click",function(){
        displayValue.forEach(function(obj){
            if (obj.operator === ''){ 
                obj.operator = '*';
            }
        });
        decimal.disabled = false
        displayTxt();
    })


    const three = document.createElement('button');
    three.textContent = '3';
    calc.appendChild(three).className = 'div1';
    three.addEventListener("click",function(){
        displayValue.forEach(function(obj){
            if ((obj.number1 === '' || obj.number1 !== '' ) && obj.operator === ''){ 
                if (result == ''){
                    obj.number1 += '3'
                }
                if (result != ''){
                    result= ''
                    obj.number1 = '3'
                }
            } 
            if (obj.operator !== ''){
                obj.number2 += '3'; 
            }
        });
    displayTxt();
    })
    
    const two = document.createElement('button');
    two.textContent = '2';
    calc.appendChild(two).className = 'div1';
    two.addEventListener("click",function(){
        displayValue.forEach(function(obj){
            if ((obj.number1 === '' || obj.number1 !== '' ) && obj.operator === ''){ 
                if (result == ''){
                    obj.number1 += '2'
                }
                if (result != ''){
                    result= ''
                    obj.number1 = '2'
                }
            } 
            if (obj.operator !== ''){
                obj.number2 += '2'; 
            }
        });
    displayTxt();
    })


    const one = document.createElement('button');
    one.textContent = '1';
    calc.appendChild(one).className = 'div1';
    one.addEventListener("click",function(){
        displayValue.forEach(function(obj){
            if ((obj.number1 === '' || obj.number1 !== '' ) && obj.operator === ''){ 
                if (result == ''){
                    obj.number1 += '1'
                }
                if (result != ''){
                    result= ''
                    obj.number1 = '1'
                }
            } 
            if (obj.operator !== ''){
                obj.number2 += '1'; 
            }
        });
    displayTxt();
    })
    
    const minus = document.createElement('button');
    minus.textContent = '-';
    calc.appendChild(minus).className = 'operators';
    minus.addEventListener("click",function(){
        displayValue.forEach(function(obj){
            if (obj.operator === ''){ 
                obj.operator = '-';
            }
        });
        decimal.disabled = false
        displayTxt();
    })

    const zero = document.createElement('button');
    zero.textContent = '0';
    calc.appendChild(zero).className = 'div1';
    zero.addEventListener("click",function(){
        displayValue.forEach(function(obj){
            if ((obj.number1 === '' || obj.number1 !== '' ) && obj.operator === ''){ 
                if (result == ''){
                    obj.number1 += '0'
                }
                if (result != ''){
                    result= ''
                    obj.number1 = '0'
                }
            } 
            if (obj.operator !== ''){
                obj.number2 += '0'; 
            }
        });
    displayTxt();
    })

    const decimal = document.createElement('button');
    decimal.textContent = '.';
    calc.appendChild(decimal).className = 'div1';
    decimal.addEventListener("click",function(){
        displayValue.forEach(function(obj){
            if ((obj.number1 === '' || obj.number1 !== '' ) && obj.operator === ''){ 
                if (result == ''){
                    obj.number1 += '.'   
                }
                if (result != ''){
                    result= ''
                    obj.number1 = '.'
                    }
            } 
            if (obj.operator !== ''){
                obj.number2 += '.'; 
            }
        decimal.disabled = true 
        });
    displayTxt();
    })

    const equals = document.createElement('button');
    equals.textContent = '=';
    calc.appendChild(equals).className = 'equals div1';
    equals.addEventListener("click",function(){
        const mapAgain1 = displayValue.map(value => `${value.number1}`)
        const mapAgain2 = displayValue.map(value => `${value.operator}`)
        const mapAgain3 = displayValue.map(value => `${value.number2}`)
        operate(mapAgain1 ,mapAgain2, mapAgain3);
        decimal.disabled = false
    })
    
    const plus = document.createElement('button');
    plus.textContent = '+';
    calc.appendChild(plus).className = 'operators';
    plus.addEventListener("click",function(){
        displayValue.forEach(function(obj){
            if (obj.operator === ''){
                obj.operator = '+'
            }
        });
        decimal.disabled = false
        displayTxt();
    })

const txtNclear = document.getElementById('txtNclear');

    const text = document.createElement('div');
    txtNclear.appendChild(text).className = 'text';    

    const clear = document.createElement('button');
    clear.textContent = 'AC';
    txtNclear.appendChild(clear).className = 'allClear operators';    
    clear.addEventListener("click",function(){
        allClear();
    })


