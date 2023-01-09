import { VStack } from '@chakra-ui/react'
import SketchWrapper from './SketchWrapper'

function perlin(p5) {
	let numFrames = 0
	const NUM_DOTS = 400
	let x1 = Math.random() * p5.Width
	let y1 = Math.random() * p5.Height
	let theta = Math.random() * 2 * Math.PI
	let segmentLength = Math.random() * 5 + 2
	let x2 = Math.cos(theta) * segmentLength + x1
	let y2 = Math.sin(theta) * segmentLength + y1
	//setup canvas
	p5.setup = () => {
		p5.createCanvas(700, 500)
		p5.colorMode(p5.HSB, 100)
		p5.frameRate(5)

		p5.fill(0)

		p5.mousePressed = () => {
			reset()
		}
	}

	function createTexture() {
		let r = p5.random(100, 500)
		let g = p5.random(100, 300)
		let b = p5.random(100, 400)
		let t = p5.random(10, 100)
		const NUM_DOTS = 400
		for (let i = 0; i < NUM_DOTS; i++) {
			let x = p5.random() * p5.width
			let y = p5.random() * p5.height
			let r = p5.random(10, 2)
			p5.ellipse(x, y, r, r, y2)
			let scale = p5.random(0.1, 10)
			p5.line(x1, y1, x2, y2)
			p5.noFill()
			p5.stroke(10, 10 - p5.random() * 5, 100 - p5.random() * 8, p5.random() * 10 + 75)
			p5.noStroke()
			p5.fill(r, g, b, 4)

			p5.square(x, y, scale, scale, scale, scale, scale)
		}

		// p5.noLoop()
	}
	function createFibers() {
		let numFibers = p5.random(1000, 2000)
		for (let i = 0; i < numFibers; i++) {
			let x1 = p5.random() * p5.width
			let y1 = p5.random() * p5.height
			let theta = p5.random() * 2 * Math.PI
			let segmentLength = p5.random() * 5 + 9
			let x2 = p5.cos(theta) * segmentLength + x1
			let y2 = p5.sin(theta) * segmentLength + y1

			p5.line(x1, y1, x2, y2)
			p5.stroke(10, 20 - p5.random() * 1, 1000 - p5.random() * 20, p5.random() * 10 + 75)
		}

		p5.noLoop()

		console.log('created fibers')
	}
	function reset() {
		p5.noStroke()
		p5.noFill()
		p5.background(15, 10, 100)
		for (let i = 0; i < NUM_DOTS; i++) {
			let x = Math.random() * p5.Width
			let y = Math.random() * p5.Height
			p5.ellipse(x, y, 10, 10)
		}
		createTexture()
		createFibers()
	}
	//draw vectors
	p5.draw = () => {
		reset()
		// if (numFrames++ > 30) {
		// 	p5.noLoop()
		// }
	}
}

export default function Perlin() {
	return <SketchWrapper sketch={perlin} />
}
