import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import InstallmentComponent from './components/InstallmentComponent';
import InstallmentsComponent from './components/InstallmentsComponent';

const INSTALLMENTS_EXAMPLE = [
  {
    id: 1,
    totalValue: 5947.2,
    incomeValue: 47.2,
    incomeTax: 0.8,
  },
  {
    id: 2,
    totalValue: 5994.78,
    incomeValue: 94.78,
    incomeTax: 1.61,
  },
  {
    id: 3,
    totalValue: 6042.74,
    incomeValue: 142.74,
    incomeTax: 2.42,
  },
  {
    id: 4,
    totalValue: 6091.08,
    incomeValue: 191.08,
    incomeTax: 3.24,
  },
  {
    id: 5,
    totalValue: 6139.81,
    incomeValue: 239.81,
    incomeTax: 4.06,
  },
  {
    id: 6,
    totalValue: 6188.92,
    incomeValue: 288.92,
    incomeTax: 4.9,
  },
  {
    id: 7,
    totalValue: 6238.44,
    incomeValue: 338.44,
    incomeTax: 5.74,
  },
];
export default function App() {
  const [installments, setInstallments] = useState([]);
  const generateInstallments = (formData) => {
    const { ventureCapital, interestRate, months } = formData;
    ventureCapital &&
      interestRate &&
      months &&
      setInstallments(calculate(ventureCapital, interestRate, months));
  };

  const calculate = (ventureCapital, interestRate, months) => {
    const installments = [];

    for (let month = 1; month <= parseInt(months); month++) {
      const installment = {};
      installment.totalValue =
        parseFloat(ventureCapital) *
        (1 + parseFloat(interestRate / 100)) ** parseInt(month);

      installment.incomeValue =
        parseFloat(installment.totalValue) - parseFloat(ventureCapital);

      installment.incomeTax =
        (parseFloat(installment.incomeValue) / parseFloat(ventureCapital)) *
        100;

      console.log(`Parcela ${month}: ${JSON.stringify(installment)}`);
      installments.push(installment);
    }
    console.log(installments);
    return installments;
  };
  return (
    <div className="container">
      <FormComponent onChangeFormsValue={generateInstallments} />
      <InstallmentsComponent installments={installments} />
    </div>
  );
}
