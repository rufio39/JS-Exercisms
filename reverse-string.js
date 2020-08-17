//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {
  
  let ans = ""

  for (let pos = string.length - 1; pos > -1; pos--) {
      let char =string[pos]
      ans += char
  }
  return ans
};