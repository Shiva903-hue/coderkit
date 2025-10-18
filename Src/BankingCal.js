/**
 * Calculates simple interest
 * Formula: (P * R * T) / 100
 * @param {number} principal
 * @param {number} rate
 * @param {number} time
 * @returns {number}
 */
export function simpleInterest(principal, rate, time) {
  if ([principal, rate, time].some(v => typeof v !== "number"))
    throw new Error("All arguments must be numbers");
  return (principal * rate * time) / 100;
}

/**
 * Calculates compound interest
 * Formula: P * (1 + R/100)^T - P
 * @param {number} principal
 * @param {number} rate
 * @param {number} time
 * @param {number} [n=1] - number of times interest is compounded per year
 * @returns {number}
 */
export function compoundInterest(principal, rate, time, n = 1) {
  if ([principal, rate, time, n].some(v => typeof v !== "number"))
    throw new Error("All arguments must be numbers");
  return principal * Math.pow(1 + rate / (100 * n), n * time) - principal;
}

/**
 * Calculates loan EMI (Equated Monthly Installment)
 * Formula: [P * R * (1+R)^N] / [(1+R)^N - 1]
 * @param {number} principal
 * @param {number} annualRate - Annual interest rate in %
 * @param {number} months - Loan tenure in months
 * @returns {number}
 */
export function calculateEMI(principal, annualRate, months) {
  if ([principal, annualRate, months].some(v => typeof v !== "number"))
    throw new Error("All arguments must be numbers");

  const monthlyRate = annualRate / (12 * 100);
  const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, months);
  const denominator = Math.pow(1 + monthlyRate, months) - 1;
  return denominator === 0 ? 0 : numerator / denominator;
}

/**
 * Calculates total amount to be paid over the loan period
 * @param {number} emi
 * @param {number} months
 * @returns {number}
 */
export function totalLoanPayment(emi, months) {
  if ([emi, months].some(v => typeof v !== "number"))
    throw new Error("Both arguments must be numbers");
  return emi * months;
}

/**
 * Calculates total interest paid over the loan period
 * @param {number} totalPayment
 * @param {number} principal
 * @returns {number}
 */
export function totalInterestPaid(totalPayment, principal) {
  if ([totalPayment, principal].some(v => typeof v !== "number"))
    throw new Error("Both arguments must be numbers");
  return totalPayment - principal;
}

/**
 * Calculates monthly balance with recurring deposits
 * Formula: P * [ (1 + r/n)^(nt) - 1 ] / (r/n)
 * @param {number} monthlyDeposit
 * @param {number} rate - Annual interest rate in %
 * @param {number} time - Time in years
 * @returns {number}
 */
export function recurringDepositValue(monthlyDeposit, rate, time) {
  if ([monthlyDeposit, rate, time].some(v => typeof v !== "number"))
    throw new Error("All arguments must be numbers");
  const n = 12;
  const r = rate / (100 * n);
  return monthlyDeposit * ((Math.pow(1 + r, n * time) - 1) / r);
}

/**
 * Calculates Net Present Value (NPV)
 * @param {number[]} cashFlows - Array of future cash flows
 * @param {number} discountRate - Annual discount rate in %
 * @returns {number}
 */
export function netPresentValue(cashFlows, discountRate) {
  if (!Array.isArray(cashFlows) || typeof discountRate !== "number")
    throw new Error("Invalid arguments");
  return cashFlows.reduce(
    (acc, cf, i) => acc + cf / Math.pow(1 + discountRate / 100, i + 1),
    0
  );
}

/**
 * Calculates Return on Investment (ROI)
 * Formula: (Gain - Cost) / Cost * 100
 * @param {number} gain
 * @param {number} cost
 * @returns {number}
 */
export function returnOnInvestment(gain, cost) {
  if ([gain, cost].some(v => typeof v !== "number"))
    throw new Error("Both arguments must be numbers");
  return ((gain - cost) / cost) * 100;
}

/**
 * Calculates percentage change
 * Formula: ((newValue - oldValue) / oldValue) * 100
 * @param {number} oldValue
 * @param {number} newValue
 * @returns {number}
 */
export function percentageChange(oldValue, newValue) {
  if ([oldValue, newValue].some(v => typeof v !== "number"))
    throw new Error("Both arguments must be numbers");
  return ((newValue - oldValue) / oldValue) * 100;
}
