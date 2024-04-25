// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState, forwardRef } from "react";
import { DatePicker } from "antd";
import dayjs from 'dayjs';

function DateSelector() {

  const [date, setDate] = useState(new Date());
  function onChange(date, dateString) {
    setDate(date);
  }

  const maxDate = dayjs('2023-12-31');

  return (
    <>
    <div style={{ 
      background: '#363636', 
      width: '100%', 
      height: '80px',
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
      paddingLeft: '20px',
      borderRadius: '8px',
    }}>
      {/* <input type='date' id='backtestData' name='backtestData'
        style={{
          backgroundColor: '#363636',
          color: '#2196f3',
          border: '2px solid #2196f3',
          borderRadius: '8px',
          padding: '10px',
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          fontSize: '14px'
        }}
      /> */}

      <DatePicker 
        onChange={onChange} 
        maxDate={maxDate}
        style={{
          color: 'black',
          border: "5px solid #purple",
        }}
      />
      <h3
        style={{
          paddingLeft: '20px',
          color: '#2196f3',
        }}
      >
        Select a date for backtesting.
      </h3>
      <p
        style={{
          paddingLeft: '20px',
          color: 'white',
        }}
      >
        {`(range from 1-Jan-1970 to 31-Dec-2023)`}
      </p>
    </div>
    </>
    )
  }
      
export default DateSelector