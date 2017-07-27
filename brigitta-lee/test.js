var expect = require('chai').expect;
var test = require('/test')
var reversestr = test.reversestr

var caseOne = 'tebahpla';

  describe('Function Exists', function(){
    it('exists as a function', function (){
      expect(reversestr).to.exist;
    });
  });

  describe('Returns a String', function() {
    it('returns a string', function() {
      expect(reversestr(caseOne)).to.be.a('string');
    });
  });

  describe('Reverses a string', function() {
    it('reverses the order of the characters in a string', function() {
      expect(reversestr('alphabet')).to.equal('tebahpla');
    });
  });
