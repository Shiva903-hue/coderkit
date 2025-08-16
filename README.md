
# 📦 coderkit

> A simple and secure utility toolkit with essential JavaScript functions — built for speed, safety, and developer convenience.

---

## ✨ Features

- 🧮 Basic math utilities: `add`, `subtract`, `multiply`
- 🔐 Built-in type-checking for safer operations
- ✅ ESM Support (`import { add } from 'coderkit'`)
- 🧠 Beginner-friendly and open-source

---

## 📦 Installation

```bash
npm install coderkit
```

---

## 📚 Usage

```js
import { add, subtract, multiply } from 'coderkit';

console.log(add(5, 3));       // 8
console.log(subtract(10, 4)); // 6
console.log(multiply(2, 6));  // 12
```

> ✅ Works out of the box with modern Node.js (v14+).

---

## 🔒 Type Safety

Each function includes runtime type checks to prevent unexpected behavior.

```js
add("2", 3); // ❌ Throws error: "Both arguments must be numbers"
```

---

## ✅ New Functions Added in v1.0.5

This version introduces a variety of **daily-use String functions**. Below are the details:

---

### 📂 String Functions

```js
import {capitalize, toLower, toUpper, reverseString, isPalindrome, wordCount, trimSpaces, repeatString, contains, firstN, lastN, toKebabCase, toCamelCase, padLeft, padRight} from 'coderkit/object';
```
| Function              | Description                                | Example                                           |
|-----------------------|--------------------------------------------|---------------------------------------------------|
| `capitalize(str)`     | Capitalizes first letter                   | `capitalize("hello")` ➝ `"Hello"`                 |
| `toLower(str)`        | Converts string to lowercase               | `toLower("HELLO")` ➝ `"hello"`                   |
| `toUpper(str)`        | Converts string to uppercase               | `toUpper("hello")` ➝ `"HELLO"`                   |
| `reverseString(str)`  | Reverses a string                          | `reverseString("abc")` ➝ `"cba"`                 |
| `isPalindrome(str)`   | Checks if a string is a palindrome         | `isPalindrome("madam")` ➝ `true`                 |
| `wordCount(str)`      | Counts words in a string                   | `wordCount("this is coderkit")` ➝ `3`            |
| `trimSpaces(str)`     | Removes spaces from both ends              | `trimSpaces("  hi  ")` ➝ `"hi"`                  |
| `repeatString(s, n)`  | Repeats string `n` times                   | `repeatString("hi", 3)` ➝ `"hihihi"`             |
| `contains(s, sub)`    | Checks if string contains substring        | `contains("hello", "ell")` ➝ `true`              |
| `firstN(s, n)`        | Returns first `n` characters               | `firstN("hello", 2)` ➝ `"he"`                    |
| `lastN(s, n)`         | Returns last `n` characters                | `lastN("hello", 2)` ➝ `"lo"`                     |
| `toKebabCase(str)`    | Converts to kebab-case                     | `toKebabCase("Hello World")` ➝ `"hello-world"`   |
| `toCamelCase(str)`    | Converts to camelCase                      | `toCamelCase("hello_world")` ➝ `"helloWorld"`    |
| `padLeft(s, len, ch)` | Pads string on left                        | `padLeft("5", 3, "0")` ➝ `"005"`                 |
| `padRight(s, len,ch)` | Pads string on right                       | `padRight("5", 3, "0")` ➝ `"500"`                |

---
## 🌐 Open Source & Contributions

This package is open-source and community-driven.  
Feel free to fork it, raise issues, or contribute new utility functions!

```bash
git clone https://github.com/Shiva903-hue/coderkit
```

We welcome:
- 🚀 New functions (arrays, strings, objects, etc.)
- 🐛 Bug fixes
- 📖 Better docs

---

## 📄 License

MIT © [Shivam Waghmare](https://github.com/Shiva903-hue)

---

## 🔗 Follow for Updates

Follow me on [Youtube](https://www.youtube.com/@CodeAstraX) for Explanation and new Updates , [LinkedIn](https://www.linkedin.com/in/shivam-waghmare/) for tech updates, or check out my [GitHub](https://github.com/Shiva903-hue) for more projects!

---
