"use client";

import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
	const [seconds, setSeconds] = useState(0.5 * 60);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setSeconds((prevSeconds) => Math.max(0, prevSeconds - 1));
		}, 1000);

		return () => clearInterval(intervalId); // Cleanup function to clear interval
	}, []);

	const displayTime = formatTime(seconds);

	return (
		<div className="text-center text-5xl min-h-screen grid items-center">
			{seconds >= 1 ? (
				<h2>Countdown: {displayTime}</h2> //display timer
			) : (
				<h2>Timer has run out</h2> //Gør et eller andet
			)}
		</div>
	);
}

function formatTime(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}
