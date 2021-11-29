const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log("Assertion Passed: " + actual + " === " + expected);
    } else {
        console.log("Assertion Failed: " + actual + " !== " + expected);
    }
};


const findKeyByValue = function(showObj, value) {
    const keys = Object.keys(showObj);
    //console.log(keys);
    for (const key of keys) {
        if (showObj[key] === value) {
            return key;
        }
    }
}


const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);