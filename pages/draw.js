import { VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})
// check if there are vectors being displayed

class Particle {
	constructor({ p5 }) {
		this.p5 = p5
		this.reset()
	}

	reset() {
		const p5 = this.p5
		this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height))
		// this.weight = p5.random(0.1, 20)
		this.weight = 0.1
		this.r = p5.map(this.pos.x, 0, p5.width, 50, 255)
		this.g = p5.map(this.pos.y, 0, p5.width, 50, 255)
		this.b = p5.map(this.pos.x, 0, p5.width, 255, 0)
		// this.alpha = p5.map(
		// 	p5.dist(p5.width / 2, p5.height / 2, this.pos.x, this.pos.y),
		// 	0,
		// 	200,
		// 	300,
		// 	0
		// )
	}

	draw({ noiseScale }) {
		const p5 = this.p5
		p5.strokeWeight(this.weight)
		this.weight += 0.03
		p5.stroke(this.r, this.g, this.b)

		p5.point(this.pos.x, this.pos.y)
		//move particles using perlin (gradient) noise
		let n = p5.noise(this.pos.x * noiseScale, this.pos.y * noiseScale)
		// TAU = 2 * pie ... it will give us a number between 0 and 1
		let a = p5.TAU * n
		this.pos.x += p5.cos(a)
		this.pos.y += p5.sin(a)
		//if vectors trail of the screen, they will appear on screen again
		if (!this.onScreen()) {
			this.reset()
		}
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
	}
	//define particles
	let particles = []
	const num = p5.random(900, 1000)
	//setup canvas
	p5.setup = () => {
		p5.createCanvas(800, 500)
		// define vectors
		//loop through particle nums, push them to random points within canvas
		for (let i = 0; i < num; i++) {
			// particles.push(p5.createVector(p5.random(p5.width), p5.random(p5.height)))
			particles.push(new Particle({ p5 }))
		}
		// //add random color
		// for (var i = 0; i < particles.length; i++) {
		// 	let r = p5.map(particles[i].x, 0, p5.width, 50, 255)
		// 	let g = p5.map(particles[i].y, 0, p5.width, 50, 255)
		// 	let b = p5.map(particles[i].x, 0, p5.width, 50, 255)
		// 	let alpha = p5.map(
		// 		p5.dist(p5.width / 2, p5.height / 2, particles[i].x, particles[i].y),
		// 		0,
		// 		200,
		// 		300,
		// 		0
		// 	)

		// 	p5.strokeWeight(p5.random(0.1, 1))
		// 	p5.stroke(r, g, b)
		// }
	}
	//draw vectors
	p5.draw = () => {
		//pass in primary and alpha color; The alpha is semi-transparent and will show where the trails have been
		p5.background(0, 10)
		//loop through partcle num, push them as points on the screen
		for (let i = 0; i < num; i++) {
			const p = particles[i]
			p.draw({ noiseScale })
			// p5.point(p.x, p.y)
			// //move particles using perlin (gradient) noise
			// let n = p5.noise(p.x * noiseScale, p.y * noiseScale)
			// // TAU = 2 * pie ... it will give us a number between 0 and 1
			// let a = p5.TAU * n
			// p.x += p5.cos(a)
			// p.y += p5.sin(a)
			// //if vectors trail of the screen, they will appear on screen again
			// if (!onScreen(p)) {
			// 	p.x = p5.random(p5.width)
			// 	p.y = p5.random(p5.height)
			// }
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
