/**
 * Capitalizes the first letter of a string
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  if (typeof str !== "string") throw new Error("Argument must be a string");
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to lowercase
 * @param {string} str
 * @returns {string}
 */
export function toLower(str) {
  if (typeof str !== "string") throw new Error("Argument must be a string");
  return str.toLowerCase();
}

/**
 * Converts a string to uppercase
 * @param {string} str
 * @returns {string}
 */
export function toUpper(str) {
  if (typeof str !== "string") throw new Error("Argument must be a string");
  return str.toUpperCase();
}

/**
 * Reverses a string
 * @param {string} str
 * @returns {string}
 */
export function reverseString(str) {
  if (typeof str !== "string") throw new Error("Argument must be a string");
  return str.split("").reverse().join("");
}

/**
 * Checks if a string is a palindrome
 * @param {string} str
 * @returns {boolean}
 */
export function isPalindrome(str) {
  if (typeof str !== "string") throw new Error("Argument must be a string");
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}

/**
 * Counts the number of words in a string
 * @param {string} str
 * @returns {number}
 */
export function wordCount(str) {
  if (typeof str !== "string") throw new Error("Argument must be a string");
  if (!str.trim()) return 0;
  return str.trim().split(/\s+/).length;
}

/**
 * Trims whitespace from both ends of a string
 * @param {string} str
 * @returns {string}
 */
export function trimSpaces(str) {
  if (typeof str !== "string") throw new Error("Argument must be a string");
  return str.trim();
}

/**
 * Repeats a string n times
 * @param {string} str
 * @param {number} n
 * @returns {string}
 */
export function repeatString(str, n) {
  if (typeof str !== "string" || typeof n !== "number")
    throw new Error("Invalid arguments");
  return str.repeat(n);
}

/**
 * Checks if a string contains a substring
 * @param {string} str
 * @param {string} sub
 * @returns {boolean}
 */
export function contains(str, sub) {
  if (typeof str !== "string" || typeof sub !== "string")
    throw new Error("Arguments must be strings");
  return str.includes(sub);
}

/**
 * Gets the first n characters of a string
 * @param {string} str
 * @param {number} n
 * @returns {string}
 */
export function firstN(str, n) {
  if (typeof str !== "string" || typeof n !== "number")
    throw new Error("Invalid arguments");
  return str.slice(0, n);
}

/**
 * Gets the last n characters of a string
 * @param {string} str
 * @param {number} n
 * @returns {string}
 */
export function lastN(str, n) {
  if (typeof str !== "string" || typeof n !== "number")
    throw new Error("Invalid arguments");
  return str.slice(-n);
}

/**
 * Replaces all spaces with dashes
 * @param {string} str
 * @returns {string}
 */
export function toKebabCase(str) {
  if (typeof str !== "string") throw new Error("Argument must be a string");
  return str.replace(/\s+/g, "-").toLowerCase();
}

/**
 * Converts a string to camelCase
 * @param {string} str
 * @returns {string}
 */
export function toCamelCase(str) {
  if (typeof str !== "string") throw new Error("Argument must be a string");
  return str
    .toLowerCase()
    .replace(/[-_ ]+([a-z])/g, (_, c) => c.toUpperCase());
}

/**
 * Pads a string on the left side
 * @param {string} str
 * @param {number} length
 * @param {string} char
 * @returns {string}
 */
export function padLeft(str, length, char = " ") {
  if (typeof str !== "string" || typeof length !== "number")
    throw new Error("Invalid arguments");
  return str.padStart(length, char);
}

/**
 * Pads a string on the right side
 * @param {string} str
 * @param {number} length
 * @param {string} char
 * @returns {string}
 */
export function padRight(str, length, char = " ") {
  if (typeof str !== "string" || typeof length !== "number")
    throw new Error("Invalid arguments");
  return str.padEnd(length, char);
}
