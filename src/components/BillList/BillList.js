import React, { useContext } from 'react';
import './BillList.css';
import { BillContext } from '../../context/BillContext';

const BillList = () => {
  const {
    bills,
    editBill,
    setEditModeEnabled
  } = useContext(BillContext);
  return (
    <div className='billListContainer'>
      <h6
        className='editModeBtn'
        onClick={() => setEditModeEnabled(true)}
      >
        Edit
      </h6>
      {bills.map((bill, index) => {
        return (
          <div key={index} className='billListRow'>
            <div className='billListRowContent'>
              <input
                type='checkbox'
                className='formCheckInput'
                checked={bill.enabled}
                onChange={() => {
                  editBill({
                    title: bill.title,
                    monthlyCost: bill.monthlyCost,
                    enabled: !bill.enabled
                  });
                }}
              />
              {bill.title} - ${bill.monthlyCost}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BillList;
