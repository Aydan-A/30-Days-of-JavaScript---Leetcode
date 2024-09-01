
// This code is responsible for returning an object containing the toBe and notToBe functions. 

// I want to emphasize this part that many people forget.

// return { toBe: toBe,
//        notToBe: notToBe, };

// The expect function returns an object with two properties: toBe and notToBe. (with two key-value pairs.)
// There are people who make mistakes especially in this part. They cannot write a return to the main function.

var expect = function (val) {
    function toBe (val1) {
        if (val === val1) {
            return true;
        }
        else {
           throw new Error ("Not Equal");
        }
    }

     function notToBe  (val2) {
        if (val !== val2) {
            return true;
        }
        else {
            throw new Error ("Equal")
        }
    }
  

    return { toBe: toBe,
      notToBe: notToBe, }
};
