const dataList = [10, 20, 30, 40, 50];

Array.prototype.myFilter = function(cb) {
    let res = [];
   
    for (let idx = 0; idx < this.length; idx++) {
        if (cb(this[idx])) {
            res.push(this[idx]);
        }
    }
    return res;
};

let filtered = dataList.myFilter(function(n) {
    return n > 20;
});

console.log("Filtered:", filtered);

Array.prototype.myReduce = function(fn, initVal) {
    let acc = initVal;
    let i = 0;
    while(i < this.length) {
        acc = fn(acc, this[i]);
        i++;
    }
    return acc;
};


let sum = dataList.myReduce((acc, x) => acc + x, 0);
console.log("Sum:", sum);