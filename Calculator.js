const calculator = {
    add: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    power: function(a, b){
        return a ** b;
    },
    div: function(a, b){
        return a / b;
    },
    mul: function(a, b){
        return a * b;
    },

};

const addResult = calculator.add(2,3);
const minusResult = calculator.minus(addResult,10);
const mulResult = calculator.mul(10,minusResult);
const divResult = calculator.div(mulResult,addResult);
const powerResult = calculator.power(divResult,minusResult);
