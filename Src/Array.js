/**
 * Removes duplicate values from an array.
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  return [...new Set(arr)];
}

/**
 * Breaks an array into chunks of specified size.
 * @param {Array} arr
 * @param {number} size
 * @returns {Array[]}
 */
export function chunkArray(arr, size) {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  if (typeof size !== "number" || size <= 0) throw new TypeError("Size must be a positive number");

  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * Flattens a nested array.
 * @param {Array} arr
 * @returns {Array}
 */
export function flattenArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  return arr.flat(Infinity);
}

/**
 * Returns sum of numeric values in array.
 * @param {Array<number>} arr
 * @returns {number}
 */
export function sumArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  return arr.reduce((sum, val) => {
    if (typeof val !== "number") throw new TypeError("Array must contain only numbers");
    return sum + val;
  }, 0);
}

/**
 * Returns average of numeric values in array.
 * @param {Array<number>} arr
 * @returns {number}
 */
export function averageArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) throw new TypeError("Expected a non-empty array");
  return sumArray(arr) / arr.length;
}

/**
 * Returns the maximum value in array.
 * @param {Array<number>} arr
 * @returns {number}
 */
export function maxInArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  return Math.max(...arr);
}

/**
 * Returns the minimum value in array.
 * @param {Array<number>} arr
 * @returns {number}
 */
export function minInArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  return Math.min(...arr);
}

/**
 * Shuffles elements in array randomly.
 * @param {Array} arr
 * @returns {Array}
 */
export function shuffleArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");

  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Removes falsy values (false, 0, '', null, undefined, NaN) from array.
 * @param {Array} arr
 * @returns {Array}
 */
export function removeFalsy(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  return arr.filter(Boolean);
}

/**
 * Groups array of objects by specified key.
 * @param {Array<object>} arr
 * @param {string} key
 * @returns {object}
 */
export function groupBy(arr, key) {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  if (typeof key !== "string") throw new TypeError("Key must be a string");

  return arr.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
}
