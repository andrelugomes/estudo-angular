'use strict';

describe('Filter: wordwrap', function () {

  // load the filter's module
  beforeEach(module('estudoAngularApp'));

  // initialize a new instance of the filter before each test
  var wordwrap;
  beforeEach(inject(function ($filter) {
    wordwrap = $filter('wordwrap');
  }));

 it('Deve testar o filtro wordwrap com: NULL', function() {
    expect(wordwrap(null, null)).toBe(null);
  });

  it('Deve testar o filtro wordwrap com palavras grandes', function() {
    expect(wordwrap("testestesteste", 5)).toBe("teste... ");
  });


});
