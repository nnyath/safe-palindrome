var expect = require('chai').expect
var assert = require('chai').assert
var Palindrome = require('../src/palindrome.js')

var params = {
    validA: 'tacocat',
    validB: '',
    validIndex: Math.floor('tacocat'.length / 2),
    validC:'eye',
    validD:'',
    validIndexTwo: Math.floor('eye'.length / 2),
    invalidA: 'Test1',
    invalidB: '123',
    invalidIndex: 0,
    invalidIndexTwo: '0',
}

describe('Original - Input Args', function () {

    it('should error on invalid StringA input', function () {
        expect(Palindrome.original.bind(Palindrome, params.invalidA, params.validIndex, params.validB)).to.throw('Invalid StringA Parameter')
        expect(Palindrome.original.bind(Palindrome, undefined, params.validIndex, params.validB)).to.throw('Invalid StringA Parameter')
        expect(Palindrome.original.bind(Palindrome, null, params.validIndex, params.validB)).to.throw('Invalid StringA Parameter')
    })

    it('should error on invalid StringB input', function () {
        expect(Palindrome.original.bind(Palindrome, params.validA, params.validIndex, params.invalidB)).to.throw('Invalid StringB Parameter')
    })

    it('should error on invalid Index input', function () {
        expect(Palindrome.original.bind(Palindrome, params.validA, params.invalidIndex, params.validB)).to.throw('Invalid Index Parameter')
        expect(Palindrome.original.bind(Palindrome, params.validA, params.invalidIndex2, params.validB)).to.throw('Invalid Index Parameter')
        expect(Palindrome.original.bind(Palindrome, params.validA, params.validA.length + 1, params.validB)).to.throw('Invalid Index Parameter')
    })

})

describe('Original - Valid Palindrome', function () {

    it('should return true for valid Palindrome', function () {
        assert.isTrue(Palindrome.original(params.validA, params.validIndex, params.validB))
        assert.isTrue(Palindrome.original(params.validA, params.validIndex))
        assert.isTrue(Palindrome.original(params.validC, params.validIndexTwo))
    })

    it('should return false for invalid Palindrome', function () {
        assert.isFalse(Palindrome.original('test', Math.floor('test'.length / 2)))
        assert.isFalse(Palindrome.original('diy', Math.floor('diy'.length / 2)))
    })

})

describe('Original Improved - Input Args', function () {

    it('should error on invalid StringA input', function () {
        expect(Palindrome.original.bind(Palindrome, params.invalidA, params.validIndex, params.validB)).to.throw('Invalid StringA Parameter')
        expect(Palindrome.original.bind(Palindrome, undefined, params.validIndex, params.validB)).to.throw('Invalid StringA Parameter')
        expect(Palindrome.original.bind(Palindrome, null, params.validIndex, params.validB)).to.throw('Invalid StringA Parameter')
    })

    it('should error on invalid StringB input', function () {
        expect(Palindrome.original.bind(Palindrome, params.validA, params.validIndex, params.invalidB)).to.throw('Invalid StringB Parameter')
    })

    it('should error on invalid Index input', function () {
        expect(Palindrome.original.bind(Palindrome, params.validA, params.invalidIndex, params.validB)).to.throw('Invalid Index Parameter')
        expect(Palindrome.original.bind(Palindrome, params.validA, params.invalidIndex2, params.validB)).to.throw('Invalid Index Parameter')
        expect(Palindrome.original.bind(Palindrome, params.validA, params.validA.length + 1, params.validB)).to.throw('Invalid Index Parameter')
    })

})

describe('Original Improved - Valid Palindrome', function () {

    it('should return true for valid Palindrome', function () {
        assert.isTrue(Palindrome.originalImproved(params.validA))
        assert.isTrue(Palindrome.originalImproved(params.validC))
    })

    it('should return false for invalid Palindrome', function () {
        assert.isFalse(Palindrome.originalImproved('test'))
        assert.isFalse(Palindrome.originalImproved('diy'))
    })

})

