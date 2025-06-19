// app/page.tsx
'use client'; // This is a client component

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Confetti from 'react-confetti';

export default function BirthdayPage() {
  // State to hold the window dimensions
  const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 });

  // useEffect to get window size on the client side
  useEffect(() => {
    // We only want to run this on the client
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="birthday-container">
      {/* The confetti will fill the entire screen */}
      <Confetti
        width={windowDimension.width}
        height={windowDimension.height}
        recycle={false}
        numberOfPieces={500}
        tweenDuration={10000}
      />

      <div className="birthday-card">
        <Image
          src="/cake.png" // The path to your image in the `public` folder
          alt="Birthday Cake"
          width={200}
          height={200}
          className="birthday-image"
        />

        <h1 className="title">Happy Birthday, Ayush!</h1>

        <p className="message">
          Wishing you a day filled with joy, laughter, and unforgettable moments.
          May the year ahead be your best one yet, full of success and happiness.
        </p>

        <p className="cheers">Cheers to you! 🥳</p>
      </div>
    </main>
  );
}