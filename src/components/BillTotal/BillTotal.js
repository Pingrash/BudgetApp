import React, { useContext } from 'react';
import './BillTotal.css';
import { BillContext } from '../../context/BillContext';

const BillTotal = () => {
  const { bills, selectedInterval } = useContext(
    BillContext
  );

  const moneyIntervalTransform = cost => {
    const monthlyCost = parseFloat(cost);

    switch (selectedInterval) {
      case 'Monthly':
        return monthlyCost;

      case 'Daily':
        return (monthlyCost * 12) / 365;

      case 'Weekly':
        return (monthlyCost * 12) / 52;

      case 'Yearly':
        return monthlyCost * 12;

      default:
        return 0;
    }
  };

  return (
    <>
      <div className='billTotalContainer'>
        {selectedInterval} bill cost:
        <span className='totalCost'>
          {'$' +
            bills
              .reduce((acc, val) => {
                return val.enabled
                  ? moneyIntervalTransform(
                      val.monthlyCost
                    ) + acc
                  : acc;
              }, 0)
              .toFixed(2)}
        </span>
      </div>
      <div className='totalSavedContainer'>
        {selectedInterval} saved:
        <span className='totalSaved'>
          {'$' +
            bills
              .reduce((acc, val) => {
                return !val.enabled
                  ? moneyIntervalTransform(
                      val.monthlyCost
                    ) + acc
                  : acc;
              }, 0)
              .toFixed(2)}
        </span>
      </div>
    </>
  );
};

export default BillTotal;
