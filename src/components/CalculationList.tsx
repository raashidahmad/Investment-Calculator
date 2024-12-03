import { InvestmentResult } from "../types/InvestmentResult";
import { formatter } from "../util/investment";

export const CalculationList = ({ results }: any) => {
    let totalInterest = 0;

    return (
        <>
            {results && results.length > 0 &&
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Investment Value</th>
                            <th>Interest (Year)</th>
                            <th>Invested Capital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result: InvestmentResult, index: number) => {
                            totalInterest += result.interest;
                            return (<tr key={index}>
                                <td>{result.year}</td>
                                <td>{formatter.format(result.valueEndOfYear)}</td>
                                <td>{formatter.format(result.interest)}</td>
                                <td>{formatter.format(result.annualInvestment)}</td>
                            </tr>);
                        })}
                    </tbody>
                </table>}

            {(!results || results.length === 0) && <p>No results to show</p>}
        </>
    );
}