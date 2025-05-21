"use client";

import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(timerId);
  }, []);

  return (
    <div style={{ fontSize: '2em', fontFamily: 'monospace' }}>
      {time.toLocaleTimeString()}
    </div>
  );
};

export default Clock;
