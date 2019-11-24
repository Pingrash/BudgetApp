import React, { useContext } from 'react';
import './BillOptions.css';
import { BillContext } from '../../context/BillContext';

const BillOptions = () => {
  const {
    selectedInterval,
    setSelectedInterval
  } = useContext(BillContext);

  return (
    <div className='intervalOptionsContainer'>
      <div
        className={
          selectedInterval === 'Daily'
            ? 'selectedInterval'
            : 'interval'
        }
        onClick={e =>
          setSelectedInterval(e.target.innerText)
        }
      >
        Daily
      </div>
      <div
        className={
          selectedInterval === 'Weekly'
            ? 'selectedInterval'
            : 'interval'
        }
        onClick={e =>
          setSelectedInterval(e.target.innerText)
        }
      >
        Weekly
      </div>
      <div
        className={
          selectedInterval === 'Monthly'
            ? 'selectedInterval'
            : 'interval'
        }
        onClick={e =>
          setSelectedInterval(e.target.innerText)
        }
      >
        Monthly
      </div>
      <div
        className={
          selectedInterval === 'Yearly'
            ? 'selectedInterval'
            : 'interval'
        }
        onClick={e =>
          setSelectedInterval(e.target.innerText)
        }
      >
        Yearly
      </div>
    </div>
  );
};

export default BillOptions;
