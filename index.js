import * as math from './Src/Math.js';
import * as arr from './Src/Array.js';
import * as obj from './Src/Object.js';
import * as str from './Src/String.js';
import * as BankingCal from './Src/BankingCal.js';

// Re-export individual functions
export * from './Src/Math.js';
export * from './Src/Array.js';
export * from './Src/Object.js';
export * from './Src/String.js';
export * from './Src/BankingCal.js';

// Also export as namespaces
export { math, arr , str, obj , BankingCal};