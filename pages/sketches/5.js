import { VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})
// check if there are vectors being displayed

class OtherParticle {
	constructor({ p5 }) {
		this.p5 = p5
		this.reset()
	}

	reset() {
		const p5 = this.p5
		this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height))
		this.weight = 0.0001

		// this.alpha = p5.map(
	}

	draw({ noiseScale }) {
		const p5 = this.p5
		const growPressed = p5.mouseIsPressed ? 1.05 : 1
		p5.strokeWeight(this.weight * growPressed)
		this.weight += 0.0005

		p5.stroke('orange')

		p5.point(this.pos.x, this.pos.y)
		this.updatePosFlow({ noiseScale })
		this.updatePosFollowMouse()

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

	updatePosFollowMouse() {
		const p5 = this.p5
		const dx = p5.mouseX - this.pos.x
		const dy = p5.mouseY - this.pos.y
		const dist = Math.sqrt(dx * dx + dy * dy)
		let strength = p5.map(dist, 0, p5.width / 2, 0.001, 0, true)
		if (p5.mouseIsPressed) {
			strength *= 1
		}
		this.pos.x += dx * strength
		this.pos.y += dy * strength
		p5.stroke('#0D98BA')
	}

	onScreen() {
		const p5 = this.p5
		return (
			this.pos.x >= 0 && this.pos.x <= p5.width && this.pos.y >= 0 && this.pos.y <= p5.height
		)
	}
}
class ThirdParticle {
	constructor({ p5 }) {
		this.p5 = p5
		this.reset()
	}

	reset() {
		const p5 = this.p5
		this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height))
		this.weight = 0.01
		this.r = p5.map(this.pos.x, 0, p5.width, 10, 90)
		this.g = p5.map(this.pos.y, 0, p5.width, 10, 90)
		this.b = p5.map(this.pos.x, 0, p5.width, 10, 90)
		// this.alpha = p5.map(
	}

	draw({ noiseScale }) {
		const p5 = this.p5
		const growPressed = p5.mouseIsPressed ? 2 : 1
		p5.strokeWeight(this.weight * growPressed)
		this.weight += 0.002
		p5.stroke(this.r, this.g, this.b)

		p5.point(this.pos.x, this.pos.y)
		this.updatePosFlow({ noiseScale })
		this.updatePosFollowMouse()

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

	updatePosFollowMouse() {
		const p5 = this.p5
		const dx = p5.mouseX - this.pos.x
		const dy = p5.mouseY - this.pos.y
		const dist = Math.sqrt(dx * dx + dy * dy)
		let strength = p5.map(dist, 0, p5.width / 2, 0.01, 0, true)
		if (p5.mouseIsPressed) {
			strength *= -1
		}
		this.pos.x += dx * strength
		this.pos.y += dy * strength
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
		this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height))
		this.weight = 0.01
		this.r = p5.map(this.pos.x, 0, p5.width, 10, 90)
		this.g = p5.map(this.pos.y, 0, p5.width, 10, 90)
		this.b = p5.map(this.pos.x, 0, p5.width, 10, 90)
		// this.alpha = p5.map(
	}

	draw({ noiseScale }) {
		const p5 = this.p5
		const growPressed = p5.mouseIsPressed ? 2 : 1
		p5.strokeWeight(this.weight * growPressed)
		this.weight += 0.002
		p5.stroke('red')

		p5.point(this.pos.x, this.pos.y)
		this.updatePosFlow({ noiseScale })
		this.updatePosFollowMouse()

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

	updatePosFollowMouse() {
		const p5 = this.p5
		const dx = p5.mouseX - this.pos.x
		const dy = p5.mouseY - this.pos.y
		const dist = Math.sqrt(dx * dx + dy * dy)
		let strength = p5.map(dist, 0, p5.width / 2, 0.01, 0, true)
		if (p5.mouseIsPressed) {
			strength *= -1
		}
		this.pos.x += dx * strength
		this.pos.y += dy * strength
	}

	onScreen() {
		const p5 = this.p5
		return (
			this.pos.x >= 0 && this.pos.x <= p5.width && this.pos.y >= 0 && this.pos.y <= p5.height
		)
	}
}

function flowfield(p5) {
	// functions used in drawing

	let noiseScale = Math.pow(p5.random(0.01, 1), 2)
	p5.mouseReleased = () => {
		p5.noiseSeed(p5.millis())
		noiseScale = Math.pow(p5.random(0.01, 1), 2)
		p5.clear()
	}

	//define particles
	let particles = []
	let otherParticle = []
	let thirdParticle = []
	// const num = p5.random(10, 10)
	const num = 100
	//setup canvas
	p5.setup = () => {
		p5.createCanvas(800, 500)

		// define vectors
		//loop through particle nums, push them to random points within canvas
		for (let i = 0; i < num; i++) {
			particles.push(new Particle({ p5 }))
		}
		for (let i = 0; i < num; i++) {
			otherParticle.push(new OtherParticle({ p5 }))
		}
		for (let i = 0; i < num; i++) {
			thirdParticle.push(new ThirdParticle({ p5 }))
		}
	}

	//draw vectors
	p5.draw = () => {
		// Jiggle the flow field
		noiseScale *= 0.995
		const jiggle = p5.abs(noiseScale) * 0.005
		if (jiggle < 0.0003) {
			noiseScale += p5.random(0, jiggle * 2)
		} else {
			noiseScale += p5.random(-jiggle, jiggle)
		}

		//pass in primary and alpha color; The alpha is semi-transparent and will show where the trails have been
		p5.background(100, 0.05)
		//loop through partcle num, push them as points on the screen
		for (let i = 0; i < num; i++) {
			const p = particles[i]
			p.draw({ noiseScale })
		}
		for (let i = 0; i < num; i++) {
			const o = otherParticle[i]
			o.draw({ noiseScale })
		}
		for (let i = 0; i < num; i++) {
			const b = thirdParticle[i]
			b.draw({ noiseScale })
		}
	}
}

export default function Draw() {
	return (
		<VStack spacing={'0'} py={'16'}>
			<ReactP5Wrapper sketch={flowfield} />
		</VStack>
	)
}
