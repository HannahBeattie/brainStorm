import { useColorModeValue, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import useMeasure from 'react-use-measure'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

function flow(p5) {
	let stroke = [0, 0, 0]
	let numFrames = 0
	let points = []
	let width = 800
	let height = 800
	window.p5 = p5

	function reset() {
		p5.clear()
		numFrames = 0
		p5.loop()

		points = []
		let ranNoise = p5.random(0.01, 0.02)
		p5.clear()
		p5.angleMode(p5.DEGREES)
		p5.noiseDetail(ranNoise)
		let density = p5.random(30, 100)
		let space = p5.width / density

		for (let x = 0; x < p5.width; x += space) {
			for (let y = 0; y < p5.height; y += space) {
				let p = p5.createVector(x + p5.random(9, 4 - 3), y + p5.random(-10, 3))
				points.push(p)
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
		canvas.mousePressed(() => reset())
		reset()
	}

	p5.draw = () => {
		let mult = 0.05
		p5.fill(stroke)
		p5.noStroke()
		if (numFrames++ > 100) {
			p5.noLoop()
		}

		for (var i = 0; i < points.length; i++) {
			let angle = p5.map(p5.noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)
			points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
			p5.ellipse(points[i].x, points[i].y, 1)
		}
	}
}

export default function Brain() {
	let stroke = useColorModeValue([0, 0, 0], [240, 240, 240])
	const [ref, bounds] = useMeasure()
	return (
		<VStack cursor='pointer' ref={ref} flex={'1'} align={'stretch'} w='100%' h={'100%'}>
			<ReactP5Wrapper
				sketch={flow}
				stroke={stroke}
				h={bounds.height || 300}
				w={bounds.width || 500}
			/>
		</VStack>
	)
}
