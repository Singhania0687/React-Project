import React, { useState, useEffect } from 'react';

export default function Timer() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval); // cleanup on unmount
    }, []);

    return (
        <h1>{time}</h1>
    );
}
