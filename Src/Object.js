// Objects.js - Secure Object Utility Functions

/**
 * Deeply clones a JavaScript object.
 * @param {Object} obj
 * @returns {Object}
 */
export function deepClone(obj) {
  if (typeof obj !== "object" || obj === null)
    throw new TypeError("Expected an object");
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Checks if an object is empty (has no own properties).
 * @param {Object} obj
 * @returns {boolean}
 */
export function isEmptyObject(obj) {
  if (typeof obj !== "object" || obj === null)
    throw new TypeError("Expected an object");
  return Object.keys(obj).length === 0;
}

/**
 * Merges two objects deeply.
 * @param {Object} obj1
 * @param {Object} obj2
 * @returns {Object}
 */
export function mergeObjects(obj1, obj2) {
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  )
    throw new TypeError("Expected two objects");

  return {
    ...deepClone(obj1),
    ...deepClone(obj2),
  };
}

/**
 * Gets a nested value from object using dot notation path.
 * @param {Object} obj
 * @param {string} path
 * @returns {any}
 */
export function getNestedValue(obj, path) {
  if (typeof obj !== "object" || obj === null)
    throw new TypeError("Expected an object");
  if (typeof path !== "string")
    throw new TypeError("Expected path to be a string");

  return path.split(".").reduce((acc, key) => acc && acc[key], obj);
}

/**
 * Omits specified keys from object.
 * @param {Object} obj
 * @param {Array<string>} keys
 * @returns {Object}
 */
export function omit(obj, keys) {
  if (typeof obj !== "object" || obj === null)
    throw new TypeError("Expected an object");
  if (!Array.isArray(keys)) throw new TypeError("Expected keys to be an array");

  return Object.fromEntries(
    Object.entries(obj).filter(([k]) => !keys.includes(k))
  );
}

/**
 * Picks only specified keys from object.
 * @param {Object} obj
 * @param {Array<string>} keys
 * @returns {Object}
 */
export function pick(obj, keys) {
  if (typeof obj !== "object" || obj === null)
    throw new TypeError("Expected an object");
  if (!Array.isArray(keys)) throw new TypeError("Expected keys to be an array");

  return Object.fromEntries(
    keys.filter((key) => key in obj).map((key) => [key, obj[key]])
  );
}

/**
 * Deeply freezes an object to make it immutable.
 * @param {Object} obj
 * @returns {Object}
 */
export function deepFreeze(obj) {
  if (typeof obj !== "object" || obj === null)
    throw new TypeError("Expected an object");

  Object.freeze(obj);

  Object.getOwnPropertyNames(obj).forEach((prop) => {
    if (
      typeof obj[prop] === "object" &&
      obj[prop] !== null &&
      !Object.isFrozen(obj[prop])
    ) {
      deepFreeze(obj[prop]);
    }
  });

  return obj;
}

/**
 * Converts an object to a query string.
 * @param {Object} obj
 * @returns {string}
 */
export function objectToQueryString(obj) {
  if (typeof obj !== "object" || obj === null)
    throw new TypeError("Expected an object");

  return Object.entries(obj)
    .map(
      ([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
    )
    .join("&");
}
