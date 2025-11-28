import React, { useState, useRef, useEffect } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+'

const ScrambleText = ({ text, className = '', speed = 30, step = 0.5 }) => {
	const [displayedText, setDisplayedText] = useState(text)
	const intervalRef = useRef(null)

	useEffect(() => {
		setDisplayedText(text)
		return () => clearInterval(intervalRef.current)
	}, [text])

	const scramble = () => {
		let iteration = 0
		clearInterval(intervalRef.current)

		intervalRef.current = setInterval(() => {
			setDisplayedText(
				text
					.split('')
					.map((char, i) => (char === ' ' ? ' ' : i < iteration ? char : CHARS[Math.floor(Math.random() * CHARS.length)]))
					.join('')
			)

			if (iteration >= text.length) clearInterval(intervalRef.current)
			iteration += step
		}, speed)
	}

	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<span className={className} onMouseEnter={scramble}>
			{displayedText}
		</span>
	)
}

export default ScrambleText
