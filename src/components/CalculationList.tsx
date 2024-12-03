import { InvestmentResult } from "../types/InvestmentResult";

export const CalculationList = ({ results }: any) => {
    let totalInterest = 0;

    return (
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result: InvestmentResult, index: number) => {
                    totalInterest += result.interest;
                    return (<tr key={index}>
                        <td>{result.year}</td>
                        <td>{result.valueEndOfYear}</td>
                        <td>{result.interest}</td>
                        <td>{result.totalInterest}</td>
                        <td>{result.annualInvestment}</td>
                    </tr>);
                })}
            </tbody>
        </table>
    );
}