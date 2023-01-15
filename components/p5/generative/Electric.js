import SketchWrapper from './SketchWrapper'

class ParticleTwo {
	constructor({ p5 }) {
		this.p5 = p5
		this.reset()
	}
	reset() {
		const p5 = this.p5
		this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height))
		this.weight = p5.random(0.5, 9)
	}
	draw({ noiseScale, col, lineIs }) {
		const p5 = this.p5
		p5.strokeWeight(lineIs ?? this.weight)
		p5.stroke(col ?? 'yellow')
		p5.point(this.pos.x, this.pos.y)
		this.updatePosFlow({ noiseScale })
		//if vectors trail of the screen, they will appear on screen again

		if (!this.onScreen()) {
			this.reset()
		}
	}

	updatePosFlow({ noiseScale }) {
		const p5 = this.p5
		//move particles using perlin (gradient) noise
		let n = p5.noise(this.pos.x * noiseScale, this.pos.y * noiseScale)
		// TAU = 2 * pie ... it will give us a number between 0 and 1

		let a = p5.TAU * n
		this.pos.x += p5.cos(a)
		this.pos.y += p5.sin(a)
	}

	onScreen() {
		const p5 = this.p5
		return (
			this.pos.x >= 0 && this.pos.x <= p5.width && this.pos.y >= 0 && this.pos.y <= p5.height
		)
	}
}
class Particle {
	constructor({ p5 }) {
		this.p5 = p5
		this.reset()
	}

	reset() {
		const p5 = this.p5
		this.pos = p5.createVector(p5.random(p5.width + 10), p5.random(p5.height + 10))
		this.weight = p5.random(1, 3)
	}

	draw({ noiseScale, col }) {
		const p5 = this.p5

		p5.strokeWeight(this.weight)
		p5.stroke(col ?? 'yellow')
		p5.point(this.pos.x, this.pos.y)
		this.updatePosFlow({ noiseScale })
		//if vectors trail of the screen, they will appear on screen again
		if (!this.onScreen()) {
			this.reset()
		}
	}

	updatePosFlow({ noiseScale }) {
		const p5 = this.p5
		//move particles using perlin (gradient) noise
		let n = p5.noise(this.pos.x * noiseScale, this.pos.y * noiseScale)
		// TAU = 2 * pie ... it will give us a number between 0 and 1
		let a = p5.TAU * n
		this.pos.x += p5.cos(a)
		this.pos.y += p5.sin(a)
	}

	onScreen() {
		const p5 = this.p5
		return (
			this.pos.x >= 0 && this.pos.x <= p5.width && this.pos.y >= 0 && this.pos.y <= p5.height
		)
	}
}

function electric(p5) {
	// functions used in drawing
	// const pressedSeed = p5.mouseIsPressed ? 1 : 1
	let noiseScale
	// p5.noiseSeed(p5.millis(pressedSeed))
	//define particles
	let particles = []
	let particlesTwo = []
	const partNum = p5.random(800, 900)
	const partTwoNum = p5.random(200, 300)

	function reset() {
		p5.clear()
		noiseScale = Math.pow(p5.random(0.1, 0.5), 3)

		//loop through particle nums, push them to random points within canvas
		particles = []
		particlesTwo = []
		for (let i = 0; i < partNum; i++) {
			particles.push(new Particle({ p5 }))
		}
		for (let i = 0; i < partTwoNum; i++) {
			particlesTwo.push(new ParticleTwo({ p5 }))
		}

		const m = 4
		const b = p5.random(150, 240)
		const topR = b * 4 * p5.noise(700 + p5.frameCount / m)
		const topG = b * 2 * p5.noise(-240 + p5.frameCount / m)
		const topB = b * p5.noise(240 + p5.frameCount / m)
		const bottomR = 10 * p5.noise(200 + p5.frameCount / m)
		const bottomG = b * 9 * p5.noise(240 + p5.frameCount / m)
		const bottomB = b * p5.noise(400 + p5.frameCount / m)

		const topColor = p5.color(topR, topG, topB)
		const bottomColor = p5.color(bottomR, bottomG, bottomB)

		for (let y = 0; y < p5.height; y++) {
			const lineColor = p5.lerpColor(topColor, bottomColor, y / p5.height)
			p5.strokeWeight(1)
			p5.stroke(lineColor), p5.line(0, y, p5.width, y)
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

	p5.updateWithProps = (props) => {
		if (props.w && props.h) {
			p5.resizeCanvas(props.w, props.h)
			reset()
		}
	}

	//draw vectors
	p5.draw = (update) => {
		// Jiggle the flow field

		const b = p5.random(150, 240)
		let ran2 = p5.random(1, 4)
		const jiggle = p5.abs(noiseScale) * 0.01
		if (jiggle < 1) {
			noiseScale += p5.random(0, jiggle * 0.02)
		} else {
			noiseScale += p5.random(-jiggle, jiggle)
		}

		for (let i = 0; i < partNum; i++) {
			const p = particles[i]
			p.draw({ noiseScale, col: [21, 215, 10, 40], lineIs: 2.1 })
		}
		for (let i = 0; i < partTwoNum; i++) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: [10, 215, 0, 100], lineIs: 3.1 })
		}

		for (let i = 0; i < partTwoNum; i++) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: [100, 215, 0], lineIs: 0.1 })
		}
		for (let i = 0; i < partTwoNum; i++) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: [100, 100, 10, 20], lineIs: ran2 })
		}
		for (let i = 0; i < partTwoNum; i++) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: [b, 10, b], lineIs: 1.4 })
		}

		for (let i = 0; i < partTwoNum; i++) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: [10, 100, 100, 9], lineIs: 10 })
		}
		for (let i = partTwoNum; i < partTwoNum; i--) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: [100, 100, 200, 0], lineIs: 30 })
		}
		for (let i = partTwoNum; i < partTwoNum; i--) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: [100, 200, 0], lineIs: 20 })
		}
	}
}

export default function Electric() {
	return <SketchWrapper sketch={electric} />
}
