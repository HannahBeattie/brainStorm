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
	constructor({ p5, npts, fn, scale, center, jiggle }) {
		this.p5 = p5
		this.pts = buildCurve(fn, npts) // [{x, y}, {x, y},...]
		this.center = center
		this.scale = scale
		this.jiggle = jiggle
	}

	draw = () => {
		const p5 = this.p5
		if (this.jiggle) {
			this.center.x += p5.random(-3, 3)
			this.center.y += p5.random(-3, 3)
		}

		// draw a line between each of the points
		const cx = this.center.x
		const cy = this.center.y
		const ss = this.scale
		p5.beginShape()
		for (let ii = 0; ii < this.pts.length - 1; ii++) {
			const ptA = this.pts[ii]
			p5.vertex(ptA.x * ss + cx, ptA.y * ss + cy)
		}
		p5.endShape(p5.CLOSE)
	}
}

function wiggleRock({ p5, wiggleStrength, t }) {
	// wiggly circle
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

class Rock {
	constructor({ p5 }) {
		this.wiggleStrength = 0.1
		this.p5 = p5

		const edges = 100 // distance from canvas edge
		const npts = 100
		this.shape = new Shape({
			p5,
			npts,
			center: {
				x: p5.random(edges, p5.width - edges),
				y: p5.random(edges, p5.height - edges),
			},
			scale: p5.random(20, 50),
			fn: this.shapeFn,
			jiggle: true,
		})
	}

	shapeFn = (t) => wiggleRock({ p5: this.p5, wiggleStrength: this.wiggleStrength, t })

	draw = () => {
		const p5 = this.p5
		p5.fill(200)
		p5.stroke('#000')
		this.shape.draw()
	}
}

class SmallRock {
	constructor({ p5 }) {
		this.wiggleStrength = 0.6
		this.p5 = p5
		// this.fill = p5.random(100, 100)
		const edges = 100
		const npts = p5.random(10, 20)
		this.stroke = p5.random(0.1, 2)

		this.shape = new Shape({
			p5,
			npts,
			center: {
				x: p5.random(edges, p5.width - edges),
				y: p5.random(edges, p5.height - edges),
			},
			scale: p5.random(5, 20),
			fn: this.shapeFn,
			jiggle: true,
		})
	}

	shapeFn = (t) => wiggleRock({ p5: this.p5, wiggleStrength: this.wiggleStrength, t })

	draw = () => {
		const p5 = this.p5
		// p5.fill(this.fill)
		p5.fill('blue')
		p5.stroke('green')
		p5.strokeWeight(this.stroke)
		this.shape.draw()
	}
}

function sketch(p5) {
	let resetMe
	let startMe
	let stopMe
	let shapes = []

	function background() {
		p5.background(255, 253, 208, 90)
		p5.noFill()
		// createFibers()
		p5.frameRate(5)
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

		const numBigRocks = 20
		const numSmallRocks = 20

		for (let ii = 0; ii < numBigRocks; ii++) {
			shapes.push(new Rock({ p5 }))
		}
		for (let ii = 0; ii < numSmallRocks; ii++) {
			shapes.push(new SmallRock({ p5 }))
		}
	}

	p5.draw = () => {
		p5.clear()
		background()
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
