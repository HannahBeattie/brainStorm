import { VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { GiBlackHandShield } from 'react-icons/gi'

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

function fluff({ p5, wiggleStrength, t }) {
	// wiggly circle
	let wiggleX = 0
	let wiggleY = 0
	if (t !== 0 && t !== 1) {
		wiggleX = p5.random(0, wiggleStrength)
		wiggleY = p5.random(0, wiggleStrength)
	}
	return {
		x: p5.cos(100 * p5.PI * t) + wiggleX,
		y: p5.sin(100 * p5.PI * t) + wiggleY,
	}
}

function wiggleShape({ p5, wiggleStrength, t, ran }) {
	let wiggleX = 0
	let wiggleY = 0
	if (t !== 0 && t !== 1) {
		wiggleX = p5.random(0, wiggleStrength)
		wiggleY = p5.random(0, wiggleStrength)
	}
	return {
		x: p5.cos(100 * p5.PI * t * ran) + wiggleX,
		y: p5.sin(100 * p5.PI * t * ran) + wiggleY,
	}
}
function newNew({ p5, wiggleStrength, t, strings }) {
	let wiggleX = -10
	let wiggleY = -10
	if (t !== 0 && t !== 1) {
		wiggleX = p5.random(0, wiggleStrength)
		wiggleY = p5.random(0, wiggleStrength)
	}
	return {
		x: p5.cos(100000 * p5.PI * t * 1000 * strings) + wiggleX,
		y: p5.sin(100000 * p5.PI * t * 100) + wiggleY,
	}
}
class Weird {
	constructor({ p5, col, scale }) {
		this.wiggleStrength = 0.1
		this.p5 = p5
		this.ran = p5.random(1, 2)
		this.stroke = col ?? 'red'
		const edges = 100 // distance from canvas edge
		const npts = 100
		this.shape = new Shape({
			p5,
			npts,
			center: {
				x: p5.random(edges, p5.width - edges),
				y: p5.random(edges, p5.height - edges),
			},
			scale: scale ?? p5.random(10, 12),
			fn: this.shapeFn,
			jiggle: true,
		})
	}

	shapeFn = (t) =>
		wiggleShape({ p5: this.p5, ran: this.ran, wiggleStrength: this.wiggleStrength, t })

	draw = () => {
		const p5 = this.p5
		p5.angleMode(p5.DEGREES)
		this.shape.draw()
		p5.stroke(this.stroke)
	}
}

class New {
	constructor({ p5, col, scale }) {
		this.p5 = p5
		this.wiggleStrength = p5.random(1, 0.1)
		this.fill = ''
		const edges = 20
		this.strings = p5.random(1, 0.1)
		const npts = p5.random(100, 900)
		this.strokeWeight = p5.random(0.01, 0.01)
		this.stroke = col ?? 'orange'
		this.shape = new Shape({
			p5,
			npts,
			center: {
				x: p5.random(edges, p5.width - edges),
				y: p5.random(edges, p5.height - edges),
			},
			scale: scale ?? p5.random(10, 20),
			fn: this.shapeFn,
			jiggle: true,
		})
	}

	shapeFn = (t) =>
		newNew({
			strings: this.strings,
			p5: this.p5,
			wiggleStrength: this.wiggleStrength,
			t,
		})

	draw = () => {
		const p5 = this.p5
		strings: this.strings
		p5.angleMode(p5.DEGREES)
		p5.noFill()
		p5.strokeWeight(this.strokeWeight)
		p5.stroke(this.stroke)
		this.shape.draw()
		p5.translate(p5.random(1, 20))
	}
}

class OtherWeird {
	constructor({ p5, col, scale }) {
		let r = p5.random(100, 200)
		let g = p5.random(100, 200)
		let b = p5.random(100, 200)
		let a = p5.random(80, 200)
		let sw = p5.random(0.1, 3)
		this.wiggleStrength = 0.01
		this.p5 = p5
		const npts = p5.random(40, 90)
		this.strokeWeight = sw
		const edges = 100 // distance from canvas edge
		this.shape = new Shape({
			p5,
			npts,
			center: {
				x: p5.random(edges, p5.width - edges),
				y: p5.random(edges, p5.height - edges),
			},
			scale: scale ?? p5.random(10, 12),
			fn: this.shapeFn,
			jiggle: 20,
		})
	}

	shapeFn = (t) => fluff({ p5: this.p5, wiggleStrength: this.wiggleStrength, t })

	draw = () => {
		const p5 = this.p5
		let r = p5.random(100, 200)
		let g = p5.random(100, 150)
		let b = p5.random(100, 150)
		let a = p5.random(80, 90)
		p5.angleMode(p5.DEGREES)
		p5.stroke(r, g, b, a)
		p5.strokeWeight(this.strokeWeight)
		this.shape.draw()
	}
}

class Blah {
	constructor({ p5, col, scale }) {
		this.wiggleStrength = 0.1
		this.p5 = p5
		const edges = 100
		const npts = p5.random(20, 40)
		this.strokeWeight = p5.random(0.2, 5)
		this.shape = new Shape({
			p5,
			npts,
			center: {
				x: p5.random(edges, p5.width - edges),
				y: p5.random(edges, p5.height - edges),
			},
			scale: scale ?? p5.random(20, 100),
			fn: this.shapeFn,
			jiggle: true,
		})
	}

	shapeFn = (t) => wiggleRock({ p5: this.p5, wiggleStrength: this.wiggleStrength, t })

	draw = () => {
		const p5 = this.p5
		p5.noFill()
		p5.strokeWeight(this.strokeWeight)
		this.shape.draw()
	}
}
function sketch(p5) {
	let resetMe
	let startMe
	let stopMe
	let shapes = []

	function background(r, g, b, l) {
		p5.background(r, g, b, l)
		p5.frameRate(5)
	}

	function start() {
		p5.loop()
	}

	function stop() {
		p5.noLoop()
	}

	function reset() {
		p5.clear()
	}

	p5.setup = () => {
		p5.createCanvas(800, 500)
		const numNew = 20
		const numBigShape = 10
		const numSmallShape = 10

		for (let ii = 0; ii < numSmallShape; ii++) {
			shapes.push(new OtherWeird({ p5 }))
		}
		for (let ii = 0; ii < numSmallShape; ii++) {
			shapes.push(new New({ p5 }))
		}
		for (let ii = 0; ii < numNew; ii++) {
			shapes.push(new New({ p5, col: 'white' }))
		}

		for (let ii = 0; ii < numNew; ii++) {
			shapes.push(new New({ p5, col: 'white' }))
		}
		for (let ii = 0; ii < numNew; ii++) {
			shapes.push(new OtherWeird({ p5, col: 'orange' }))
		}
		for (let ii = 0; ii < numBigShape; ii++) {
			shapes.push(new Weird({ p5 }))
		}
		for (let ii = 0; ii < numSmallShape; ii++) {
			shapes.push(new OtherWeird({ p5, scale: 30, col: 'white' }))
		}
		for (let ii = 0; ii < numSmallShape; ii++) {
			shapes.push(new OtherWeird({ p5, scale: 10 }))
		}
		for (let ii = 0; ii < numSmallShape; ii++) {
			shapes.push(new OtherWeird({ p5, scale: 30 }))
		}
		for (let ii = 0; ii < numSmallShape; ii++) {
			shapes.push(new Blah({ p5, scale: 10 }))
		}
		for (let ii = 0; ii < numSmallShape; ii++) {
			shapes.push(new New({ p5, scale: numSmallShape }))
		}
	}

	p5.draw = () => {
		reset()

		background(30, 20, 35, 240)
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
