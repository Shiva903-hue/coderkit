
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

## ✅ New Functions Added in v1.0.1

This version introduces a variety of **daily-use math and utility functions**. Below are the details:

---

### 📂 Math Functions

```js
import { add, subtract, multiply, divide, square, cube, power, average } from 'coderkit/math';

| Function         | Description                                 | Example                 |
| ---------------- | ------------------------------------------- | ----------------------- |
| `add(a, b)`      | Returns sum of two numbers                  | `add(2, 3)` ➝ `5`       |
| `subtract(a, b)` | Returns difference of two numbers           | `subtract(5, 3)` ➝ `2`  |
| `multiply(a, b)` | Returns product of two numbers              | `multiply(4, 5)` ➝ `20` |
| `divide(a, b)`   | Returns quotient (safe divide with 0 check) | `divide(10, 2)` ➝ `5`   |
| `square(n)`      | Returns square of a number                  | `square(4)` ➝ `16`      |
| `cube(n)`        | Returns cube of a number                    | `cube(3)` ➝ `27`        |
| `power(a, b)`    | Raises `a` to the power of `b`              | `power(2, 3)` ➝ `8`     |
| `average(a, b)`  | Returns average of two numbers              | `average(4, 6)` ➝ `5`   |


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
