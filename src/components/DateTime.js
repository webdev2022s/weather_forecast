import { useState, useEffect } from "react";
export default function DateTime() {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    function TimeDate() {
      setInterval(() => {
        setDate(new Date().toLocaleDateString());
        setTime(new Date().toLocaleTimeString());
      }, 1000);
    }
    TimeDate();
  }, []);

  return (
    <>
      <footer>
        <div>
          {date} -- {time}
        </div>
      </footer>
    </>
  );
}
