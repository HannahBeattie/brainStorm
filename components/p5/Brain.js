import { useColorModeValue, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import useMeasure from 'react-use-measure'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

let points = []

function flow(p5) {
	let stroke
	let numFrames = 0

	p5.updateWithProps = (props) => {
		if (props.w && props.h) {
			p5.resizeCanvas(props.w, props.h)
			width = props.w
			height = props.h
		}
		if (props.stroke) {
			stroke = props.stroke
		}
	}
	p5.setup = () => {
		let canvas = p5.createCanvas(800, 500)
		canvas.mousePressed(myFunc)
		reset()
	}

	function myFunc() {
		reset()
	}
	function drawThis() {
		let ranNoise = p5.random(0.01, 0.5)
		p5.clear()
		p5.angleMode(p5.DEGREES)
		p5.noiseDetail(ranNoise)
		let density = p5.random(30, 50)
		let space = p5.width / density

		for (let x = 0; x < p5.width; x += space) {
			for (let y = 0; y < p5.height; y += space) {
				let p = p5.createVector(x + p5.random(10, 4 - 3), y + p5.random(-30, 10))
				points.push(p)
			}
		}
	}

	function reset() {
		p5.clear()
		numFrames = 0
		p5.loop()
		drawThis()
	}

	p5.draw = () => {
		let mult = 0.05
		p5.noStroke()
		p5.fill(stroke)
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
	let stroke = useColorModeValue([10, 10, 10], [240, 240, 240])
	const [ref, bounds] = useMeasure()
	return (
		<VStack overflow={'hidden'} maxW={'100vw'} ref={ref}>
			<VStack h='500px' alignSelf='stretch' cursor='pointer' overflow={'hidden'}>
				<ReactP5Wrapper sketch={flow} stroke={stroke} />
			</VStack>
		</VStack>
	)
}
