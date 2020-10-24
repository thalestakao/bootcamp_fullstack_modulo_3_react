import React from 'react';
import { formatNumber } from '../helpers/formData';
import css from './installment.module.css';

export default function InstallmentComponent({
  installment,
  totalValue,
  incomeValue,
  incomeTax,
}) {
  return (
    <div className={css.box}>
      <div className={css.leftElement}>
        <span>{installment}</span>
      </div>
      <div
        className={
          incomeValue > 0
            ? css.positiveRightElements
            : css.negativeRightElements
        }
      >
        <span className={css.value}>R$ {formatNumber(totalValue)}</span>
        <span className={css.value}>
          {incomeValue > 0 ? '+' : '-'} R$ {formatNumber(incomeValue)}
        </span>
        <span
          className={
            incomeValue > 0 ? css.positivePercentage : css.negativePercentage
          }
        >
          {formatNumber(incomeTax)} %
        </span>
      </div>
    </div>
  );
}
