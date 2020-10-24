import React from 'react';
import InstallmentComponent from './InstallmentComponent';

export default function InstallmentsComponent(props) {
  return (
    <div className="row">
      {props.installments.map(
        ({ id, totalValue, incomeValue, incomeTax }, index) => {
          return (
            <div className="col s2" key={index}>
              <InstallmentComponent
                installment={index + 1}
                totalValue={totalValue}
                incomeValue={incomeValue}
                incomeTax={incomeTax}
              />
            </div>
          );
        }
      )}
    </div>
  );
}
