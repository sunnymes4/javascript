
// Reduce polyfill
Array.prototype.myReduce = function(cb, initial) {
    for(let i = 0; i<this.length; i++) {
        initial = initial !== undefined ? cb(initial, this[i]) : this[i]
    }

    return initial;
}

// Map polyfill
Array.prototype.myMap = function(cb) {
    let arr = [];
    for(let i = 0; i<this.length; i++) {
        arr.push(cb(this[i]));
    }

    return arr;
}

// Filter polyfill
Array.prototype.myFilter = function(cb) {
    let arr = [];

    for(let i = 0; i<this.length; i++) {
        if(this[i]) {
            arr.push(this[i]);
        }
    }

    return arr;
}

// Foreach polyfill
Array.prototype.myForeach = function(cb) {
    for(let i = 0; i<this.length; i++) {
        cb(this[i])
    }
}