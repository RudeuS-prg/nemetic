import React, { useRef, useEffect } from 'react'

const Sphere = () => {
	const canvasRef = useRef(null)
	const containerRef = useRef(null)

	useEffect(() => {
		const canvas = canvasRef.current
		const container = containerRef.current
		if (!canvas || !container) return
		const ctx = canvas.getContext('2d')
		if (!ctx) return

		// Use refs to store dimensions so they persist across animation frames
		const dimensions = { width: 0, height: 0, globeRadius: 0 }

		const updateDimensions = () => {
			const size = Math.min(container.offsetWidth, container.offsetHeight)
			dimensions.width = canvas.width = size
			dimensions.height = canvas.height = size
			dimensions.globeRadius = size * 0.35
		}

		updateDimensions()

		// Configuration
		const getGlobeRadius = () => dimensions.globeRadius
		const DOT_RADIUS = 2
		const DOT_COUNT = 400
		const PERSPECTIVE = 400
		const ROTATION_SPEED = 0.002

		// Generate points on a sphere (Fibonacci Sphere Algorithm)
		const generatePoints = () => {
			const points = []
			const GLOBE_RADIUS = getGlobeRadius()
			const phi = Math.PI * (3 - Math.sqrt(5)) // Golden angle

			for (let i = 0; i < DOT_COUNT; i++) {
				const y = 1 - (i / (DOT_COUNT - 1)) * 2 // y goes from 1 to -1
				const radius = Math.sqrt(1 - y * y) // Radius at y
				const theta = phi * i // Golden angle increment

				const x = Math.cos(theta) * radius
				const z = Math.sin(theta) * radius

				points.push({
					x: x * GLOBE_RADIUS,
					y: y * GLOBE_RADIUS,
					z: z * GLOBE_RADIUS,
				})
			}
			return points
		}

		let points = generatePoints()

		let angleX = 0
		let angleY = 0
		let mouseX = 0
		let mouseY = 0

		const render = () => {
			// Clear with transparent background
			ctx.clearRect(0, 0, dimensions.width, dimensions.height)

			// Rotation logic
			angleX += (mouseY * 0.001 - angleX) * 0.1
			angleY += (mouseX * 0.001 - angleY) * 0.1

			// Auto rotation
			const rotationX = angleX + 0.002
			const rotationY = angleY + ROTATION_SPEED

			points.forEach((point) => {
				// Rotate Y
				let x1 = point.x * Math.cos(rotationY) - point.z * Math.sin(rotationY)
				let z1 = point.z * Math.cos(rotationY) + point.x * Math.sin(rotationY)

				// Rotate X
				let y1 = point.y * Math.cos(rotationX) - z1 * Math.sin(rotationX)
				let z2 = z1 * Math.cos(rotationX) + point.y * Math.sin(rotationX)

				// Project 3D to 2D
				const scale = PERSPECTIVE / (PERSPECTIVE + z2)
				const x2D = dimensions.width / 2 + x1 * scale
				const y2D = dimensions.height / 2 + y1 * scale

				// Draw
				const alpha = Math.max(0.1, scale - 0.5)
				const size = Math.max(0.5, DOT_RADIUS * scale)

				ctx.beginPath()
				ctx.fillStyle = `rgba(99, 102, 241, ${alpha})` // Indigo
				ctx.arc(x2D, y2D, size, 0, Math.PI * 2)
				ctx.fill()
			})

			// Update base angles for auto-rotation
			angleX = rotationX * 0.95
			angleY = rotationY

			requestAnimationFrame(render)
		}

		render()

		const handleMouseMove = (e) => {
			const rect = canvas.getBoundingClientRect()
			mouseX = e.clientX - rect.left - dimensions.width / 2
			mouseY = e.clientY - rect.top - dimensions.height / 2
		}

		const handleResize = () => {
			updateDimensions()
			// Regenerate points with new radius
			points = generatePoints()
		}

		window.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<div ref={containerRef} className='w-full h-full flex items-center justify-center opacity-40'>
			<canvas ref={canvasRef} className='pointer-events-auto cursor-move w-full h-full object-contain' />
		</div>
	)
}

export default Sphere
