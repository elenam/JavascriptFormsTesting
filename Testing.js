/**
 * Created by elenam on 1/27/14.
 */

var assert = require("assert");
var createParagraph = require('./functions').createParagraph;
var createList = require('./functions').createList;

describe('Create paragraph', function(){
    describe('test 1', function(){
        it('should create a paragraph with given text', function(){
            assert.equal(createParagraph("Blah"), "<p>Blah</p>");
        })
    });

    describe('test 2', function(){
        it('should create a paragraph with given text', function(){
            assert.equal(createList(1), "<ol><li>One</li></ol>");
        })
    });
});