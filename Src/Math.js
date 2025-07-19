/**
 * Adds two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Both arguments must be numbers");
  return a + b;
}

/**
 * Subtracts b from a
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function subtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Both arguments must be numbers");
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Both arguments must be numbers");
  return a * b;
}

/**
 * Divides a by b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Both arguments must be numbers");
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

/**
 * Returns the remainder of a divided by b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function mod(a, b) {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Both arguments must be numbers");
  return a % b;
}

/**
 * Calculates the power of a^b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function power(a, b) {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Both arguments must be numbers");
  return Math.pow(a, b);
}

/**
 * Returns the square root of a number
 * @param {number} a
 * @returns {number}
 */
export function sqrt(a) {
  if (typeof a !== "number") throw new Error("Argument must be a number");
  return Math.sqrt(a);
}

/**
 * Returns the absolute value of a number
 * @param {number} a
 * @returns {number}
 */
export function abs(a) {
  if (typeof a !== "number") throw new Error("Argument must be a number");
  return Math.abs(a);
}

/**
 * Returns true if a is even
 * @param {number} a
 * @returns {boolean}
 */
export function isEven(a) {
  if (typeof a !== "number") throw new Error("Argument must be a number");
  return a % 2 === 0;
}

/**
 * Returns true if a is odd
 * @param {number} a
 * @returns {boolean}
 */
export function isOdd(a) {
  if (typeof a !== "number") throw new Error("Argument must be a number");
  return a % 2 !== 0;
}

/*Returns the maximum of two numbers

@param {number} a

@param {number} b

@returns {number}
*/
export function max(a, b) {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Both arguments must be numbers");
  return Math.max(a, b);
}

/**

Returns the minimum of two numbers

@param {number} a

@param {number} b

@returns {number}
*/
export function min(a, b) {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Both arguments must be numbers");
  return Math.min(a, b);
}

/**

Returns the average of an array of numbers

@param {number[]} numbers

@returns {number}
*/
export function average(numbers) {
  if (!Array.isArray(numbers) || numbers.some((n) => typeof n !== "number"))
    throw new Error("Argument must be an array of numbers");
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

/**

Rounds a number to the nearest integer

@param {number} a

@returns {number}
*/
export function round(a) {
  if (typeof a !== "number") throw new Error("Argument must be a number");
  return Math.round(a);
}

/**

Returns the floor of a number

@param {number} a

@returns {number}
*/
export function floor(a) {
  if (typeof a !== "number") throw new Error("Argument must be a number");
  return Math.floor(a);
}

/**

Returns the ceiling of a number

@param {number} a

@returns {number}
*/
export function ceil(a) {
  if (typeof a !== "number") throw new Error("Argument must be a number");
  return Math.ceil(a);
}
