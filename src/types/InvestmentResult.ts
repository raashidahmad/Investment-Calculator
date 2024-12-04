export interface InvestmentResultProps {
    year: number
    valueEndOfYear: number
    interest: number
    totalInterest: number
    annualInvestment: number
}

export interface InvestmentResult {
    results: InvestmentResultProps[]
}