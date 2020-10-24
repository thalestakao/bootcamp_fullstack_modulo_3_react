import React, { useEffect, useState } from 'react';

export default function FormComponent({ onChangeFormsValue }) {
  const [ventureCapital, setventureCapital] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [months, setMonths] = useState('');

  useEffect(() => {
    const formData = {
      ventureCapital,
      interestRate,
      months,
    };
    onChangeFormsValue(formData);
  }, [ventureCapital, interestRate, months]);

  const handleOnChangeValues = () => {};
  return (
    <div>
      <form action="">
        <div className="row">
          <div className="col s4">
            <div className="input-field">
              <input
                type="number"
                id="ventureCapital"
                step="0.1"
                onChange={(e) => setventureCapital(e.target.value)}
              />
              <label htmlFor="ventureCapital" className="active">
                Capital inicial:
              </label>
            </div>
          </div>
          <div className="col s4">
            <div className="input-field">
              <input
                type="number"
                id="interestRate"
                step="0.1"
                onChange={(e) => setInterestRate(e.target.value)}
              />
              <label htmlFor="interestRate" className="active">
                Taxa de juros mensal:
              </label>
            </div>
          </div>
          <div className="col s4">
            <div className="input-field">
              <input
                type="number"
                id="months"
                step="1"
                onChange={(e) => setMonths(e.target.value)}
              />
              <label htmlFor="months" className="active">
                Período (meses):
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
