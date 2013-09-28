
describe('eql(a, b)', function(){

  var assert = require('assert')
    , eql = require('eql');

  it('should return true when eql', function(){
    assert(true == eql(new Date(2013, 0, 0), new Date(2013, 0, 0)));
    assert(true == eql({ a: eql }, { a: eql }));
    assert(true == eql(undefined, undefined));
    assert(true == eql(true, true));
    assert(true == eql(null, null));
    assert(true == eql(/i/ig, /i/ig));
    assert(true == eql([eql], [eql]));
    assert(true == eql('', ''));
    assert(true == eql(0, 0));
  })

  it('should return false when not eql', function(){
    assert(false == eql(new Date(2013, 1, 0), new Date(2013, 0, 0)));
    assert(false == eql({ a: eql }, { a: eql.object }));
    assert(false == eql([eql.array], [eql.object]));
    assert(false == eql(null, undefined));
    assert(false == eql(false, true));
    assert(false == eql(/g/i, /a/gi));
    assert(false == eql(null, 0));
    assert(false == eql('', ' '));
    assert(false == eql(0, 1));
  });

});
