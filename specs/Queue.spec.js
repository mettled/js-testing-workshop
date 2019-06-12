var queue = require('../src/Queue');
var assert = require('assert');

describe('Queue', function () {
    describe('push', function () {
        it('should return last push arguments', function() {
            let Queue = new queue(5);

            assert.equal(Queue.length + 3, Queue.push(2,3,4));
            delete Queue;
        })

    })

    describe('pop', function () {
        it('should return array contains n items of queue', function() {
            let Queue = new queue(5);
            Queue.Queue = [2,3,4];
            let result = Queue.pop(2);

            assert.deepEqual([3,4] , result);
            delete Queue;
        })

        it('should return new Length', function() {
            let Queue = new queue(5);
            let length = Queue.length;
            Queue.pop(2);

            assert.equal(length - 2, Queue.length);
            delete Queue;
        })

    })


    describe('top', function () {

        it('should return same Length', function() {
            let Queue = new queue(5);
            let lengthBefore = Queue.length;
            Queue.top();
            let lengthAfter = Queue.length;

            assert.equal(lengthBefore, lengthAfter);
            delete Queue;
        })

    })

})
