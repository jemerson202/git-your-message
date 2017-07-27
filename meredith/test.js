var assert = require('chai').assert;
var expect = require('expect.js');


 describe('isString', function(){
   it('should return a string', function(){
     expect('isString').to.be.a('string');
   });
 });

describe('arrayLength', function(){
  it('should return the length of array', function() {
    var array = [1,2,3,4,5];
    expect(array.length).to.eql(5);
  })
});

describe('arrayIndex', function(){
  it('should return the 4th index in the array', function() {
    var array = [1,2,3,4,5];
    expect(array[4]).to.eql(5);
  })
});
