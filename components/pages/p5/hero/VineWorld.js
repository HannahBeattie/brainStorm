import { useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import useMeasure from 'react-use-measure'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

const duration = 400

function flow(p5) {
	let stroke = [0, 0, 0]
	let numFrames = 0
	let points = []
	let width = 800
	let height = 800
	let noiseMult = 0
	let noiseOffset = { x: 0, y: 0 }
	let startFrame = 70
	// window.p5 = p5

	function reset() {
		p5.clear()
		numFrames = 0
		p5.loop()
		noiseMult = 0.05 * p5.random(0.5, 1)
		noiseOffset = { x: p5.random(-1000, 1000), y: p5.random(-1000, 1000) }

		points = []
		// let ranNoise = p5.random(0.01, 0.06)
		p5.clear()
		p5.angleMode(p5.DEGREES)
		// p5.noiseDetail(ranNoise)
		const density = p5.random(40, 90)
		const space = p5.width / density
		const radius = Math.min(p5.width, p5.height) / 2 - 40

		for (let x = 0; x < p5.width; x += space) {
			for (let y = 0; y < p5.height; y += space) {
				const xx = x + p5.random(-space, space)
				const yy = y + p5.random(-space, space)
				// Only add points if they're inside a circle
				const dx = xx - p5.width / 2
				const dy = yy - p5.height / 2
				const dist = Math.sqrt(dx * dx + dy * dy)
				if (dist < radius) {
					let p = p5.createVector(xx, yy)
					points.push(p)
				}
			}
		}
	}

	p5.updateWithProps = (props) => {
		if (props.w && props.h) {
			p5.resizeCanvas(props.w, props.h)
			width = props.w
			height = props.h
		}
		if (props.stroke) {
			stroke = props.stroke
		}
		if (p5._setupDone) {
			reset()
		}
	}

	p5.setup = () => {
		let canvas = p5.createCanvas(width, height)
		canvas.mousePressed(() => {
			startFrame = 0
			reset()
		})
		p5.frameRate(30)
		reset()
	}

	p5.draw = () => {
		p5.fill(stroke)
		p5.noStroke()
		if (numFrames++ < startFrame) {
			return
		}
		if (numFrames++ > startFrame + duration) {
			p5.noLoop()
		}

		for (var i = 0; i < points.length; i++) {
			const xx = noiseOffset.x + points[i].x * noiseMult
			const yy = noiseOffset.y + points[i].y * noiseMult
			const angle = p5.map(p5.noise(xx, yy), 0, 1, 0, 700)
			points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
			p5.ellipse(points[i].x, points[i].y, 1)
		}
	}
}

export default function VineWorld() {
	const stroke = useColorModeValue([74, 69, 79], [210, 210, 210])
	const extraClass = useBreakpointValue({ base: 'specialCaseNoSelect', md: undefined })
	const [ref, bounds] = useMeasure()

	return (
		<VStack
			aria-label='An animation of vine-like white lines in a circle'
			height={{ base: '320px', sm: '500px', md: '600px', xl: '600px' }}
			width={{ base: '320px', sm: '500px', md: '600px', xl: '600px' }}
			className={extraClass}
			cursor='pointer'
			ref={ref}
		>
			<ReactP5Wrapper
				sketch={flow}
				stroke={stroke}
				h={bounds.height || 300}
				w={bounds.width || 500}
			/>
		</VStack>
	)
}
