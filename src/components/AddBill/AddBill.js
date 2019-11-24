import React, { useContext, useState } from 'react';
import './AddBill.css';
import { BillContext } from '../../context/BillContext';

const AddBill = () => {
  const [newBillTitle, setNewBillTitle] = useState('');
  const [newBillCost, setNewBillCost] = useState('');
  const { updateBills } = useContext(BillContext);

  const billObjectValid = () => {
    // Check that newBillCost is true and is a number
    const costValid =
      newBillCost && parseFloat(newBillCost);

    // check that newBillTitle is true and is not only whitespace
    const titleValid =
      newBillTitle &&
      newBillTitle.split('').find(char => char !== ' ');

    return costValid && titleValid;
  };

  const clearForm = () => {
    setNewBillTitle('');
    setNewBillCost('');
  };

  return (
    <div className='addBillContainer'>
      <input
        className='addBillFormControl form-control'
        placeholder='Enter bill title'
        type='text'
        value={newBillTitle}
        onChange={e => setNewBillTitle(e.target.value)}
      />
      <input
        className='addBillFormControl form-control'
        placeholder='Enter bill monthly cost'
        type='number'
        value={newBillCost}
        onChange={e => setNewBillCost(e.target.value)}
      />
      <button
        className='addBillFormControl btn btn-primary'
        onClick={() => {
          if (billObjectValid()) {
            updateBills({
              title: newBillTitle,
              monthlyCost: newBillCost,
              enabled: true
            });
            clearForm();
          } else console.log('invalid');
        }}
      >
        Add Bill
      </button>
    </div>
  );
};

export default AddBill;
