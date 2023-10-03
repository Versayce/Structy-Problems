

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// var isValid = function(s) {
//     let stack = [];
//     const legend = {
//         "}": "{",
//         "]": "[",
//         "}": "{"
//     };
//     let parenthesis = "({["
//     let i = 0;

//     if (s.length%2 !== 0) return false;

//     while (i < s.length) {
//         if (legend[s[i]]) {
//             stack.pop();
//         }
//         else {
//             if (legend[s[i]] === stack[stack.length - 1]) {
//                 stack.pop();
//             } else return false
//         };
//         i++;
//     };

//     if (stack.length > 0) return false;

//     return true
// };

var isValid = function(s) {
    let st = [];
    const legend = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        st.push(s[i]);
      } else if (legend[st.pop()] !== s[i]) {
        return false;
      }
    }
    return st.length ? false : true;
 };


// Input: s = "()"
console.log(isValid("()"))
// Output: true

// Input: s = "()[]{}"
console.log(isValid("()[]{}"))
// Output: true

// Input: s = "(]"
console.log(isValid("(]"))
// Output: false
