import React, { useContext } from 'react';
import './App.css';

import { BillContext } from '../../context/BillContext';
import AddBill from '../AddBill/AddBill';
import BillList from '../BillList/BillList';
import BillTotal from '../BillTotal/BillTotal';
import BillOptions from '../BillOptions/BillOptions';
import EditBills from '../EditBills/EditBills';

const App = () => {
  const { editModeEnabled } = useContext(BillContext);

  return (
    <div className='bills-container'>
      {editModeEnabled ? (
        <EditBills />
      ) : (
        <span>
          <BillOptions />
          <AddBill />
          <BillTotal />
          <BillList />
        </span>
      )}
    </div>
  );
};

export default App;
