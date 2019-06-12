class Queue {
    constructor(length){
        this.Queue = [];
        this.length = length;
    }

    push(...arg){
        return this.length + arg.length;
    }
    pop(n){
        this.length = this.length - n;
        return this.Queue.slice(n-1);

    }
    top(){
        return this.Queue[this.length - 1];
    }
}


module.exports = Queue;
