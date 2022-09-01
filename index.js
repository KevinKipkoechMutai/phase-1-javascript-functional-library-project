function standardizeInput(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}

function myEach(collection, callback) {
    const latestCollection = standardizeInput(collection);

    for (let idx = 0; idx < latestCollection.length; idx++) {
        callback(latestCollection[idx]);
    }
    return collection;
}

function myReduce(collection, callback, acc) {
    let latestCollection = standardizeInput(collection);
    if (!acc) {
        acc = latestCollection[0];
        latestCollection = latestCollection.slice(1);
    }
    
    for (let i = 0; i < latestCollection.length; i++) {
        acc = callback(acc, latestCollection[i], latestCollection);
    }
    return acc;
}

function myMap(collection, callback) {
    const latestCollection = standardizeInput(collection);
    const newArray = [];
    for (let idx = 0; idx < latestCollection.length; idx++) {
        newArray.push(callback(latestCollection[idx]));
    }
    return newArray;
}


function myFind(collection, predicate) {
    const latestCollection = standardizeInput(collection);
    for (let idx = 0; idx < latestCollection.length; idx++) {
        if (predicate(latestCollection[idx])) {
            return latestCollection[idx];
        }
    }
    return undefined;
}

function mySize(collection) {
    const latestCollection = standardizeInput(collection);
    return latestCollection.length;
}

function myFirst(arr, stop=false) {
    return (stop) ? arr.slice(0, stop): arr[0];
}

function myLast(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
}

function myFilter(collection, predicate) {
    const latestCollection = standardizeInput(collection);
    const newArray = [];
    for (let idx = 0; idx < latestCollection.length; idx++) {
        if (predicate(latestCollection[idx])) {
            newArray.push(latestCollection[idx]);
        } 
    }
    return newArray;
}

function mySortBy(arr, callback) {
    const newArray = [...arr];
    return newArray.sort((a,b) => {
        if (callback(a) > callback(b)) {
            return 1;
        } else if (callback(b) > callback(a)) {
            return -1;
        } else {
            return 0;
        }
    });
}

function unpack(receiver, arr) {
    for (let i of arr) {
        receiver.push(i);
    }
}

function myFlatten(collection, shallow, newArray = []) {
    if (shallow) {
        for (let col of collection) {
            Array.isArray(col) ? unpack(newArray, col) : newArray.push(col);
        }
    } else {
        for (let col of collection) {
            if (Array.isArray(col)) {
                myFlatten(col, false, newArray);
            } else {
                newArray.push(col);
            }
        }
    }
    return newArray;
}

function myKeys(obj) {
    const keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
}

function myValues(obj) {
    const values = [];
    for (let value in obj) {
        values.push(obj[value]);
    }
    return values;
}