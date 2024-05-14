// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState, forwardRef, useEffect } from "react";
import { DatePicker } from "antd";
import dayjs from 'dayjs';
import moment from 'moment';

function DateSelector({setDate}) {

  useEffect(() => {
    setDate(moment('2023-09-01').toDate());
  }, []);

  function onChange(date, dateString) {
    const jsDate = date ? date.toDate() : null
    setDate(jsDate);
    console.log(`DateSelector - setDate: ${date}`)
  }

  const minDate = dayjs('2023-09-01')
  const maxDate = dayjs('2023-09-30');

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

      <DatePicker 
        defaultValue={moment('2023-09-01')}
        onChange={onChange} 
        maxDate={maxDate}
        minDate={minDate}
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
        Select a date.
      </h3>
      <p
        style={{
          paddingLeft: '20px',
          color: 'white',
        }}
      >
        {`(range from 1-Sep-2023 to 30-Sep-2023 in UAT enviroment)`}
      </p>
    </div>
    </>
    )
  }
      
export default DateSelector