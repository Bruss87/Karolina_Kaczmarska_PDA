var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

  describe('calculator', function () {
    beforeEach(function () {
      calculator = new Calculator()
    });
  
    // write unit tests here in the form of "it should do something..."
    it('it has a sample test', function(){
      assert.equal(true, true)
    })
    // set running total, then add the numbers
  
    // test can add 5 to 4 and get 9
    it('can add 5 and 4 to get 9', function(){
      calculator.previousTotal = 5;
      calculator.add(4);
      assert.equal(9, calculator.runningTotal)
    });
  
    // test can subtract 2 from 5 and get 3
    it('can subtract 2 from 5 to get 3', function(){
      calculator.previousTotal = 5;
      calculator.subtract(2);
      assert.equal(3, calculator.runningTotal)
    });
  
    // test can multiply 4 by 5 and get 20
    it('can multiply 4 and 5 to get 20', function(){
      calculator.previousTotal = 4;
      calculator.multiply(5);
      assert.equal(20, calculator.runningTotal)
    });
  
    // test can divide 32 by 4 and get 8
    it('can divide 32 by 7 to get 3', function(){
      calculator.previousTotal = 32;
      calculator.divide(4);
      assert.equal(8, calculator.runningTotal)
    });
  
    //test calculator.numberClick() - concatenate multiple number button clicks
    it('can concatenate multiple number button clicks', function(){
      calculator.runningTotal = 0;
      calculator.numberClick(1);
      calculator.numberClick(2);
      calculator.numberClick(3);
      calculator.numberClick(4);
      calculator.numberClick(5);
      assert.equal(12345, calculator.runningTotal);
    });
  
    //test calculator.operatorClick() - chain multiple operations together
    it('can chain multiple operations together', function(){
      calculator.previousTotal = 0;
      calculator.numberClick(1);
      calculator.numberClick(2);
      calculator.operatorClick('*');
      calculator.numberClick(2);
      calculator.operatorClick('+');
      calculator.numberClick(9);
      calculator.operatorClick('=');
      assert.equal(33, calculator.runningTotal);
    });
  
    //test calculator.clearClick() - clear the running total without affecting the calculation
    it('can clear the running total', function(){
      calculator.previousTotal = 0;
      calculator.numberClick(1);
      calculator.numberClick(2);
      calculator.operatorClick('*');
      calculator.numberClick(2);
      calculator.operatorClick('+');
      calculator.numberClick(9);
      calculator.numberClick(9);
      calculator.numberClick(9);
      calculator.clearClick();
      calculator.numberClick(1);
      calculator.operatorClick('=');
      assert.equal(25, calculator.runningTotal);
    });

});
