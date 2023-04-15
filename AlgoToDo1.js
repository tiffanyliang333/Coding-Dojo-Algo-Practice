// push front
var arr = [1, 2, 3, 4, 5];
function pushFront(arr, val) {
    for (let i = arr.length - 1; i >= 0; i--){
        arr[i + 1] = arr[i];
    }
    arr[0] = val;
    return arr;
}

// pop front
var arr = [1, 2, 3, 4, 5];
function popFront(arr, val) {
    const firstVal = arr[0];
    for (let i = 0; i < arr.length -1; i++){
        arr[i + 1] = arr[i];
    }
    arr.length = arr.length - 1;
    return firstVal;

// insert at
var arr = [1, 2, 3, 4, 5];
    arr.splice(2, 0, 1);
    console.log(arr);

//remove at
var arr = [1, 2, 3, 4, 5];
function removeAt(arr, i) {
    var removedValue = arr[i];
    arr.splice(i, 1);
    console.log(removedValue);
    return removedValue;
}

//swap pairs
var arr = [1, 2, 3, 4, 5];
function swapPairs(arr) {
    for (var i = 0; i < arr.length - 1; i += 2) {
        [arr[i], arr[i + 1] = [arr[i + 1], arr[i]]];
    }
    return arr;
}

//remove duplicates
var arr = [1, 2, 3, 4, 5, 5, 5, 5];
function removeDupes(arr) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
    return arr;
}}