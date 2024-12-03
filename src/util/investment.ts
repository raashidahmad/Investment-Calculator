// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return

import { InvestmentData } from "../types/InvestmentData";

// - duration: The investment duration (time frame)
export const calculateInvestmentResults = ({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  } : InvestmentData) => {
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      let interestEarnedInYear = investmentValue * (expectedReturn / 100);
      if (Number.isNaN(interestEarnedInYear)) {
        interestEarnedInYear = 1;
      }
      investmentValue += interestEarnedInYear + annualInvestment;
      annualData.push({
        year: i + 1, // year identifier
        interest: formatDecimals(interestEarnedInYear), // the amount of interest earned in this year
        valueEndOfYear: formatDecimals(investmentValue), // investment value at end of year
        annualInvestment: formatDecimals(annualInvestment), // investment added in this year
      });
    }
  
    return annualData;
  }

  export const formatDecimals = (num: number) => {
    if (!num || Number.isNaN(num)) {
        return 0;
    }

    return Number(num).toFixed(2);
  }
  
  // The browser-provided Intl API is used to prepare a formatter object
  // This object offers a "format()" method that can be used to format numbers as currency
  // Example Usage: formatter.format(1000) => yields "$1,000"
  export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  