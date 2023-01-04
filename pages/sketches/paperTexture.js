import { VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

// PAPER TEXTURE BY  lzmunch

// function createTexture() {
// 	const NUM_DOTS = 500
// 	for (let i = 0; i < NUM_DOTS; i++) {
// 		let x = p5.random(1, 0.4) * p5.width
// 		let y = p5.random(1, 0.4) * p5.height
// 		let r = p5.random(1, 0.4)
// 		p5.ellipse(x, y, r)
// 	}
// }

const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

function sketch(p5) {
	let resetMe
	let startMe
	let stopMe

	function createFibers() {
		let numFibers = 10000
		for (let i = 0; i < numFibers; i++) {
			let x1 = p5.random() * p5.width
			let y1 = p5.random() * p5.height
			let theta = p5.random() * 2 * Math.PI
			let segmentLength = p5.random() * 5 + 2
			let x2 = p5.cos(theta) * segmentLength + x1
			let y2 = p5.sin(theta) * segmentLength + y1

			p5.stroke(90, 100 - p5.random() * 900, 100 - p5.random() * 8, p5.random() * 10 + 20)
			p5.line(x1, y1, x2, y2)
		}
		console.log('created fibers')
	}

	function background() {
		p5.createCanvas(800, 500)
		p5.background(255, 253, 208, 90)
		p5.noFill()
		createFibers()
	}

	function buttons() {
		resetMe = p5.createButton('_run_')
		p5.mousePressed = () => {
			reset()
		}
		startMe = p5.createButton('_reset_')

		p5.mousePressed = () => {
			start()
		}
		stopMe = p5.createButton('_stop_')

		p5.mousePressed = () => {
			stop()
		}
	}

	function start() {
		p5.loop()
	}
	function stop() {
		p5.noLoop()
	}

	function reset() {
		p5.strokeWeight(0.8)
		p5.rectMode(p5.CENTER)
		p5.noFill
		p5.rect(400, 250, 700, 400)
		p5.stroke(100)
	}

	//
	p5.setup = () => {
		background()
		buttons()
	}

	p5.draw = () => {
		reset()
	}
}

export default function Draw() {
	return (
		<VStack spacing={'0'} py={'16'}>
			<ReactP5Wrapper sketch={sketch} />
		</VStack>
	)
}
