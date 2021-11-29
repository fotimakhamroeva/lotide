const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log("Assertion Passed: " + actual + " === " + expected);
    } else {
        console.log("Assertion Failed: " + actual + " !== " + expected);
    }
};

const countLetters = function(sentence) {
    const result = {};
    for (const letter of sentence) {
        if (result[letter]) {
            result[letter] += 1;
        } else {
            result[letter] = 1;
        }
    }
    console.log(result);
    return result;
}


const result = countLetters("lighthouse in the house");
assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["h"], 4);