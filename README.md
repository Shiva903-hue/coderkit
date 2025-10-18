
# 📦 coderkit

> A simple and secure utility toolkit with essential JavaScript functions — built for speed, safety, and developer convenience.

---
### Site is live now You can check the detail form
>[coderkit↗](https://coderkit.vercel.app/)
---

## ✨ Features

- 🧮 Basic math utilities: `add`, `subtract`, `multiply`
- 🔐 Built-in type-checking for safer operations
- ✅ ESM Support (`import { add } from 'coderkit'`)
- 🧠 Beginner-friendly and open-source

---

## 📦 Installation

```bash
npm install coderkit@latest
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


## 💰 Banking & Finance Functions (v1.0.6)

This version adds a powerful set of **financial and banking-related functions** — perfect for calculations like interest, loans, and investment analysis.

```js
import {
  simpleInterest,
  compoundInterest,
  calculateEMI,
  totalLoanPayment,
  totalInterestPaid,
  recurringDepositValue,
  netPresentValue,
  returnOnInvestment,
  percentageChange
} from 'coderkit/finance';
```

| Function                         | Description                                       | Example                                               |
| -------------------------------- | ------------------------------------------------- | ----------------------------------------------------- |
| `simpleInterest(P, R, T)`        | Calculates Simple Interest                        | `simpleInterest(10000, 5, 2)` ➝ `1000`                |
| `compoundInterest(P, R, T)`      | Calculates Compound Interest                      | `compoundInterest(10000, 5, 2)` ➝ `1025`              |
| `calculateEMI(P, rate, N)`       | Calculates monthly loan EMI                       | `calculateEMI(500000, 8, 60)` ➝ `10138.95`            |
| `totalLoanPayment(emi, n)`       | Calculates total payment over the loan period     | `totalLoanPayment(10138.95, 60)` ➝ `608337`           |
| `totalInterestPaid(total, P)`    | Calculates total interest paid on a loan          | `totalInterestPaid(608337, 500000)` ➝ `108337`        |
| `recurringDepositValue(M, R, T)` | Calculates maturity value of a recurring deposit  | `recurringDepositValue(1000, 7, 5)` ➝ `72977.49`      |
| `netPresentValue(flows, rate)`   | Calculates Net Present Value of future cash flows | `netPresentValue([2000, 3000, 4000], 10)` ➝ `7246.82` |
| `returnOnInvestment(gain, cost)` | Calculates ROI percentage                         | `returnOnInvestment(1200, 1000)` ➝ `20`               |
| `percentageChange(old, new)`     | Calculates percentage growth or decline           | `percentageChange(1000, 1200)` ➝ `20`                 |


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

---
## 📄 License

MIT © [Shivam Waghmare](https://github.com/Shiva903-hue)

---

## 🔗 Follow for Updates

Follow me on [Youtube](https://www.youtube.com/@CodeAstraX) for Explanation and new Updates , [LinkedIn](https://www.linkedin.com/in/shivam-waghmare/) for tech updates, or check out my [GitHub](https://github.com/Shiva903-hue) for more projects!

---
