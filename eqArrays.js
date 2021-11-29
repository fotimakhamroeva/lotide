// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log("Assertion Passed: " + actual + " === " + expected);
    } else {
        console.log("Assertion Failed: " + actual + " !== " + expected);
    }
};


// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const element1 = arr1[i];
        const element2 = arr2[i];
        if (element1 !== element2) {
            return false;
        }
    }
    return true;
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);