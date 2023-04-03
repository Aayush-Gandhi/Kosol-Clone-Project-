import { useState, useEffect } from 'react';

export default function SystemDate() {
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);

  return (
    <p className="text-white">
      Date: <span className="font-bold">{date}</span>
    </p>
  );
}    