import React, { useContext } from 'react';
import './EditBills.css';
import { BillContext } from '../../context/BillContext';

const EditBills = () => {
  const {
    bills,
    setEditModeEnabled,
    editBill,
    deleteBill
  } = useContext(BillContext);

  return (
    <div className='editBillContainer'>
      <h6
        className='editModeBtn'
        onClick={() => setEditModeEnabled(false)}
      >
        DONE
      </h6>
      {bills.map((bill, billIndex) => {
        return (
          <div className='editBillMode' key={billIndex}>
            <div className='editBillRowContent'>
              <div className='editBillTitle'>
                {bill.title}
              </div>
              <input
                className='editBillCostInput'
                type='number'
                value={bill.monthlyCost}
                onChange={e =>
                  editBill({
                    title: bill.title,
                    enabled: bill.enabled,
                    monthlyCost: e.target.value
                  })
                }
              />
              <h6
                className='deleteBtn'
                onClick={() => deleteBill(bill)}
              >
                DELETE
              </h6>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default EditBills;
