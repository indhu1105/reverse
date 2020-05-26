// Javascript strings have no reverse function.
//  You'll have to reverse the array before joining it together into a string:
function rev(str) {
   let result = str.split('').reverse().join('');
   return result;
}

module.exports = rev;