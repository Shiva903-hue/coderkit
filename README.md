
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

## ✅ New Functions Added in v1.0.3

This version introduces a variety of **daily-use Object functions**. Below are the details:

---

### 📂 Objects Functions

```js
import {deepClone,isEmptyObject,mergeObjects, getNestedValue,omit,pick,deepFreeze, objectToQueryString} from 'coderkit/object';

| Function                  | Description                                               | Example                                    |
|--------------------------|-----------------------------------------------------------|--------------------------------------------|
| `deepClone(obj)`         | Creates a deep copy of an object                          | `deepClone({a:{b:1}})` ➝ `{a:{b:1}}`        |
| `isEmptyObject(obj)`     | Checks if object has no keys                              | `isEmptyObject({})` ➝ `true`               |
| `mergeObjects(a, b)`     | Shallow merges two objects                                | `mergeObjects({a:1}, {b:2})` ➝ `{a:1,b:2}` |
| `getNestedValue(obj, p)` | Retrieves value from nested path                          | `getNestedValue(obj, 'user.name')`         |
| `omit(obj, keys)`        | Returns object without specified keys                     | `omit({a:1,b:2}, ['b'])` ➝ `{a:1}`         |
| `pick(obj, keys)`        | Returns object with only specified keys                   | `pick({a:1,b:2}, ['a'])` ➝ `{a:1}`         |
| `deepFreeze(obj)`        | Recursively freezes object (makes it immutable)           | `deepFreeze(config)`                       |
| `objectToQueryString(o)` | Converts object to URL query string                       | `objectToQueryString({a:1,b:2})` ➝ `"a=1&b=2"` |

```
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
