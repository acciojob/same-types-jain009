function isSameType(value1, value2) {
  // Handle NaN special case (NaN is the only value not equal to itself)
  if (typeof value1 === 'number' && typeof value2 === 'number') {
    return Number.isNaN(value1) === Number.isNaN(value2);
  }
  // Regular type check
  return typeof value1 === typeof value2;
}

// Helper function to convert prompt input to actual JavaScript types
function parseValue(input) {
  // Try to convert to number (including NaN, Infinity)
  if (!isNaN(input)) return Number(input);
  // Handle boolean values
  if (input.toLowerCase() === 'true') return true;
  if (input.toLowerCase() === 'false') return false;
  // Handle null/undefined explicitly
  if (input === 'null') return null;
  if (input === 'undefined') return undefined;
  // Return as string if none match
  return input;
}

// Get and parse values
const input1 = prompt("Enter Start of the Range.");
const input2 = prompt("Enter End Of the Range.");
const value1 = parseValue(input1);
const value2 = parseValue(input2);

alert(isSameType(value1, value2));

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
