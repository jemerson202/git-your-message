var expect = require('chai').expect;
var app = require('../app/app');

describe ('Check String', function() {
  it('checks if something is a string',
    expect("Hello World").to.be.a('string');
  )};
}); 
