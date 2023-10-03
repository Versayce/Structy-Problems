

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


var isValid = function(s) {
    let stack = [];
    const map = {
        "}": "{",
        "]": "[",
        "}": "{"
    };
    let i = 0;

    if (s.length%2 !== 0) return false;

    while (i < s.length) {
        if (map[s[i]]) {
            if (map[s[i]] === stack[stack.length - 1]) {
                stack.pop();
            } else return false;
        } else {
            stack.push(s[i]);
        };
        i++;
    };

    if (stack.length > 0) return false;

    return true;
};


Input: s = "()"
isValid("()")
Output: true

Input: s = "()[]{}"
isValid("()[]{}")
Output: true

// Input: s = "(]"
isValid("(]")
// Output: false
