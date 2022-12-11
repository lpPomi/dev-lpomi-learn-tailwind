import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useState } from 'react';

import moment from 'moment';

function DatePicker1() {

  const [selectedDate, setSelectedDate] = useState(null);

  const [startDate, setStartDate] = useState(new Date());



  /* 
    const showDate = () => {
     setSelectedDate(date);
      console.log(date);
    }; */

  const showDate = (date) => {
    console.log(date);
    console.log(moment(date).format("yyyy-MM-dd"));
    console.log(moment(date).format("yyyy-MM-DD"));

  };


  return (
    <div>

      <DatePicker
        selected={startDate}
        onChange={showDate}
        dateFormat="dd/MM/yyyy"
      />

    </div>
  );
}

export default DatePicker1;