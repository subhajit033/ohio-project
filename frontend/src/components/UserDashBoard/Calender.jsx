import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <div>
        <h1 className="text-4xl">Announcement</h1>
        <p></p>
      </div>
    </div>
  );
};

export default Calender;
