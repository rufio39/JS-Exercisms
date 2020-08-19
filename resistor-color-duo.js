//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"] 

export const decodedValue = (resistorColors) => {
    let ans = 0
    for (let count = 0; count < 2; count++) {
        ans += COLORS.findIndex(color => color === resistorColors[count]) * (count === 0? 10:1)
    }
  return ans
};


// Black - Brown - Red - Orange - Yellow - Green - Blue - Violet - Grey - White

