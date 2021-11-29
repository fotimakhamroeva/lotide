const assertArraysEqual = function(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const element1 = arr1[i];
        const element2 = arr2[i];
        if (element1 !== element2) {
            console.log("Assertion Failed: " + arr1 + " !== " + arr2);
            return false;
        }
    }
    console.log("Assertion Passed: " + arr1 + " === " + arr1);
    return true;
};


const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        const element1 = arr1[i];
        const element2 = arr2[i];
        if (element1 !== element2) {
            return false;
        }
    }
    return true;
};


const letterPositions = function(sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
        const letter = sentence[i];
        if (results[letter] === undefined) {
            results[letter] = [];
        }
        results[letter].push(i);
    }
    console.log(results);
    return results;
  };


const result = letterPositions("lighthouse in the house");
const arr = result["h"]
assertArraysEqual(arr, [3, 5, 15, 18]);

