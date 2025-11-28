import React, { useState, useEffect } from 'react'

const TypedText = ({ text, speed = 100, className = '', showCursor = true }) => {
	const [displayedText, setDisplayedText] = useState('')

	useEffect(() => {
		let i = 0
		const typingInterval = setInterval(() => {
			if (i < text.length) {
				setDisplayedText(text.substring(0, i + 1))
				i++
			} else {
				clearInterval(typingInterval)
			}
		}, speed)

		return () => clearInterval(typingInterval)
	}, [text, speed])

	return (
		<span className={className}>
			<span className='invisible whitespace-pre-wrap'>{text}</span>
			<span className='absolute inset-0 whitespace-pre-wrap'>
				{displayedText}
				{showCursor && <span className='animate-pulse text-colorPrimary'>_</span>}
			</span>
		</span>
	)
}

export default TypedText
