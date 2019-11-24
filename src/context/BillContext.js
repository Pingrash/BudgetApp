import React, {
  useState,
  createContext,
  useEffect
} from 'react';

const BillContext = createContext();

const BillProvider = ({ children }) => {
  const [bills, setBills] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState(
    'Monthly'
  );
  const [editModeEnabled, setEditModeEnabled] = useState(
    false
  );

  /*
    On app initialisation setBills will be called.
    If any bills are in local storage then they are parsed and set. Otherwise an empty array is used.
  */
  useEffect(() => {
    setBills(
      JSON.parse(localStorage.getItem('bills')) || []
    );
  }, []);

  /*
    Update bills in local storage by creating a new array of current bills plus the new bill (sorted alphabetically) and setting the array under the 'bills' tag.
    Array needs to be stringified to be set to local storage.
  */
  const updateBills = bill => {
    const updatedBills = alphabeticalOrder([
      ...bills,
      bill
    ]);
    localStorage.setItem(
      'bills',
      JSON.stringify(updatedBills)
    );
    setBills(updatedBills);
  };

  /*
    Sorts the bills array into alphabetical order.
    This is used mainly for when new bills are added to keep the displayed list consistent for the user.
  */
  const alphabeticalOrder = bills => {
    return bills.sort((a, b) =>
      a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 0
    );
  };

  /*
    Takes an updated bill and adds it to bills array.
    First the bills array is filtered to remove the old version of the bill.
    Then the filtered list and the updated bill are set to state and local storage.
  */
  const editBill = billToUpdate => {
    const billsFiltered = bills.filter(
      bill => bill.title !== billToUpdate.title
    );
    const updatedBills = alphabeticalOrder([
      ...billsFiltered,
      billToUpdate
    ]);
    localStorage.setItem(
      'bills',
      JSON.stringify(updatedBills)
    );
    setBills(updatedBills);
  };

  /*
    Function to delete a bill.
    Filters out the bill to be deleted and then sets it to state and local storage.
  */
  const deleteBill = billToDelete => {
    const billsFiltered = bills.filter(
      bill => bill.title !== billToDelete.title
    );
    const updatedBills = alphabeticalOrder([
      ...billsFiltered
    ]);
    localStorage.setItem(
      'bills',
      JSON.stringify(updatedBills)
    );
    setBills(updatedBills);
  };

  return (
    <BillContext.Provider
      value={{
        bills,
        updateBills,
        editBill,
        selectedInterval,
        setSelectedInterval,
        editModeEnabled,
        setEditModeEnabled,
        deleteBill
      }}
    >
      {children}
    </BillContext.Provider>
  );
};

export { BillContext, BillProvider };
