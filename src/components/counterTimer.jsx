// src/CountdownTimer.jsx
import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div>
            <div className='flex md:gap-20 gap-10  text-center'>
                <div className=''>
                    <p className='text-sm '>Days</p>
                    <p className='font-bold text-3xl'>{timeLeft.days}</p>
                </div>

                <div>
                
                    <p className='text-sm '>Hours</p>
                    <p className='font-bold text-3xl'>{timeLeft.hours} </p>
                </div>

                <div>
                    <p className='text-sm '>Minutes</p>
                    <p className='font-bold text-3xl'>{timeLeft.minutes}</p>
                </div>

                <div>
                    <p className='text-sm '>Second</p>
                    <p className='font-bold text-3xl'>{timeLeft.seconds}</p>
                </div>
                
            </div>
        </div>
    );
};

export default CountdownTimer;
