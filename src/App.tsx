import { useState } from 'react';
import './App.css';
import { InvestmentForm } from './components/InvestmentForm';
import { calculateInvestmentResults } from './util/investment';
import { CalculationList } from './components/CalculationList';
import { InvestmentData } from './types/InvestmentData';

const INITIAL_DATA = {
  initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
};

function App() {
  const [investmentData, setInvestmentData] = useState<InvestmentData>(INITIAL_DATA);
  
  const updateFormData = (data: any) => {
    setInvestmentData(data);
  }

  const investmentResults = calculateInvestmentResults(investmentData);
  return (
    <>
      <h1>Investment Calculator</h1>
      <InvestmentForm onUpdate={updateFormData} />
      <CalculationList results={investmentResults} />
    </>
  )
}
export default App;
