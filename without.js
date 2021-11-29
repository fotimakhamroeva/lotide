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


const without = function(source, itemsToRemove) {
    const result = [];
    for (let i = 0; i < source.length; i++) {
        const item = source[i];
        let add = true;
        for (let y = 0; y < itemsToRemove.length; y++) {
            const itemToRemove = itemsToRemove[y];
            if (item === itemToRemove) {
                add = false;
                break;
            }
        }
        if (add) {
            result.push(item);
        }
    }
    return result;
}


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);