//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


// cnt < num, cnt === num
export const square = (num) => {

  let exponent = num - 1

  if (num < 1 || num > 64) {
    throw new Error('square must be between 1 and 64')
  }
  let number = BigInt(2 ** exponent)
  return number
};

export const total = () => {
  let num = 65
  let exponent = num - 1
  let number = BigInt(2 ** exponent)

  if (number < 1) {
    throw new Error('square must be between 1 and 64')
  }
  return (number - BigInt(1))
};
