import { VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

// FIBER TEXTURE Inspired by lzmunch's Paper texture : https://editor.p5js.org/lzmunch/sketches/Xnp94GpqN

const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

function buildCurve(fn, npts) {
	// via https://www.fxhash.xyz/article/cloverfield-walkthrough
	// return an array of points that draw the shape defined by "fn"
	var pts = []
	for (var i = 0; i < npts; ++i) {
		var pt = fn(i / (npts - 1))
		pts.push(pt)
	}
	return pts
}

class Shape {
	constructor({ p5, npts, fn, scale, center }) {
		this.p5 = p5
		this.pts = buildCurve(fn, npts) // [{x, y}, {x, y},...]
		this.center = center
		this.scale = scale
	}

	draw = () => {
		const p5 = this.p5
		this.center.x += p5.random(-3, 3)
		this.center.y += p5.random(-3, 3)
		// p5.push()
		// p5.erase()
		// p5.noStroke()
		p5.fill(100, 50)
		p5.stroke('#000')

		// draw a line between each of the points
		const cx = this.center.x
		const cy = this.center.y
		const ss = this.scale
		p5.beginShape()
		for (let ii = 0; ii < this.pts.length - 1; ii++) {
			const ptA = this.pts[ii]
			// const ptB = this.pts[ii + 1]
			// p5.line(ptA.x * ss + cx, ptA.y * ss + cy, ptB.x * ss + cx, ptB.y * ss + cy)
			p5.vertex(ptA.x * ss + cx, ptA.y * ss + cy)
		}
		p5.endShape(p5.CLOSE)

		p5.noErase()
		// p5.pop()
	}
}

function sketch(p5) {
	let resetMe
	let startMe
	let stopMe
	let shapes = []

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
	}

	function background() {
		p5.background(255, 253, 208, 90)
		p5.noFill()
		createFibers()
		p5.frameRate(10)
	}

	function buttons() {
		resetMe = p5.createButton('_reset_ ')
		resetMe.mousePressed(() => {
			reset()
		})

		startMe = p5.createButton('_play_ ')
		startMe.mousePressed(() => {
			start()
		})

		stopMe = p5.createButton('_pause_')
		stopMe.mousePressed(() => {
			stop()
		})
	}

	function start() {
		p5.loop()
	}

	function stop() {
		p5.noLoop()
	}

	function reset() {
		p5.clear()
		p5.strokeWeight(0.8)
		p5.rectMode(p5.CENTER)
		p5.noFill()
		p5.rect(400, 250, 700, 400)
		p5.stroke(100)
		background()
	}

	p5.setup = () => {
		p5.createCanvas(800, 500)
		reset()
		buttons()

		const numShapes = 20
		const edges = 100
		const wiggleStrength = 0.3
		const npts = 30

		const fn = (t) => {
			// circle
			let wiggleX = 0
			let wiggleY = 0
			if (t !== 0 && t !== 1) {
				wiggleX = p5.random(0, wiggleStrength)
				wiggleY = p5.random(0, wiggleStrength)
			}
			return {
				x: p5.cos(2 * p5.PI * t) + wiggleX,
				y: p5.sin(2 * p5.PI * t) + wiggleY,
			}
		}

		for (let ii = 0; ii < numShapes; ii++) {
			shapes.push(
				new Shape({
					p5,
					npts,
					center: {
						x: p5.random(edges, p5.width - edges),
						y: p5.random(edges, p5.height - edges),
					},
					scale: p5.random(20, 100),
					fn,
				})
			)
		}

		// shapes = [
		// 	new Shape({
		// 		p5,
		// 		npts: 64,
		// 		center: { x: p5.width / 2, y: p5.height / 2 },
		// 		scale: 20,
		// 		fn: (t) => ({
		// 			// circle
		// 			x: p5.cos(2 * p5.PI * t),
		// 			y: p5.sin(2 * p5.PI * t),
		// 		}),
		// 		// fn: (t) => ({
		// 		// 	x: 16 * p5.pow(p5.sin(t), 3),
		// 		// 	y: 13 * p5.cos(t) - 5 * p5.cos(2 * t) - 2 * p5.cos(3 * t) - p5.cos(4 * t),
		// 		// }),
		// 	}),
		// ]
	}

	p5.draw = () => {
		// p5.clear()
		// background()
		for (const shape of shapes) {
			shape.draw()
		}
	}
}

export default function Draw() {
	return (
		<VStack spacing={'0'} py={'16'}>
			<ReactP5Wrapper sketch={sketch} />
		</VStack>
	)
}
