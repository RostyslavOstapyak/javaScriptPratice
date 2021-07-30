'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function getArrayBounds(arr) {
  // put your code here
  let result=[];
  if(!Array.isArray(arr)){
    return null;
  } 
  result.push(arr.length);
  result.push(arr[0]);
  result.push(arr[arr.length-1])
  return result
}

// examples
getArrayBounds([1, 10, 9, 11]); // ==> [4, 1, 11]
getArrayBounds(10, 12, 14); // ==> null
getArrayBounds([1]); // ==> [1, 1, 1]
