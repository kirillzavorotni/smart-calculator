class SmartCalculator {
    constructor(initialValue) {
        this.result = '' + initialValue;
    }
  
    add(number) {
        this.result += '+' + number;
        return this;
    }
    
    subtract(number) {
        this.result += '-' + number;
        return this;
    }
  
    multiply(number) {
        this.result += '*' + number;
        return this;
    }
  
    devide(number) {
        this.result += '/' + number;
        return this;
    }
  
    pow(number) {
        this.result += '**' + number;
        return this;
    }
    // переназначает toString для объекта и ретернем примитив для корректной работы программы 
    toString(){
        let result = eval(this.result);
        return result;
    }
  }


module.exports = SmartCalculator;