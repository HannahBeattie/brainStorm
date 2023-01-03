import { background, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { GiBlackHandShield } from 'react-icons/gi'

// FIBER TEXTURE Inspired by lzmunch's Paper texture : https://editor.p5js.org/lzmunch/sketches/Xnp94GpqN

const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

class Star {
	constructor({ p5 }) {
		this.p5 = p5
		const edges = 20
		this.center = {
			x: p5.random(edges, p5.width - edges),
			y: p5.random(edges, p5.height - edges),
		}
		this.ran = p5.random(10, 50)
	}
	draw = () => {
		const p5 = this.p5

		let petalW = p5.random(0.1, 0.3)
		let height = p5.random(0.1, 20)
		// Get a random height for the petals that changes over time
		// from 15 to 50
		const ran = 10 + 40 * p5.noise(this.ran, p5.frameCount / 10)
		p5.push()
		p5.translate(this.center.x, this.center.y)

		p5.beginShape()
		for (let i = 0; i < 10; i++) {
			p5.stroke(200, 200, 0, 90)
			p5.ellipse(0, height * 0.5, petalW, ran)
			p5.rotate(p5.PI / 5)
			p5.stroke(140, 140, 140, 90)
			p5.fill(100, 10, 0, 90)
			p5.ellipse(0, 10, 0.1)
		}
		p5.endShape(p5.CLOSE)
		p5.pop()
	}
}

class Embroider {
	constructor({ p5 }) {
		this.p5 = p5
		const edges = 30
		this.center = {
			x: p5.random(edges, p5.width - edges),
			y: p5.random(edges, p5.height - edges),
		}
		this.ran = p5.random(10, 200)
	}
	draw = () => {
		const p5 = this.p5
		let petalW = p5.random(0.1, 0.3)
		let height = p5.random(0.1, 20)
		// Get a random height for the petals that changes over time
		// from 15 to 50
		const ran = 10 + 40 * p5.noise(this.ran, p5.frameCount / 20)
		p5.push()
		p5.translate(this.center.x, this.center.y)

		p5.beginShape()
		let ranMe = p5.random(1, 30)
		for (let i = 0; i < 10; i++) {
			p5.stroke(200, 200, 0, 90)
			p5.ellipse(0, height * 0.5, petalW, ran)
			p5.rotate(p5.PI / 5)
			p5.stroke(140, 140, 140, 90)
			// p5.fill(100, 10, 0, 90)
			p5.noFill()
			p5.ellipse(0, 10, ranMe)
		}
		p5.endShape(p5.CLOSE)
		p5.pop()
	}
}
class Daisy {
	constructor({ p5 }) {
		this.p5 = p5
		const edges = 100
		this.center = {
			x: p5.random(edges, p5.width - edges),
			y: p5.random(edges, p5.height - edges),
		}
		this.ran = p5.random(10, 50)
	}
	draw = () => {
		const p5 = this.p5
		// Get a random height for the petals that changes over time
		// from 15 to 50
		const ran = 10 + 40 * p5.noise(this.ran, p5.frameCount / 10)
		p5.push()
		p5.translate(this.center.x, this.center.y)
		p5.noStroke()
		p5.beginShape()
		for (let i = 0; i < 10; i++) {
			p5.stroke(ran, ran, 20, 20)
			p5.ellipse(0, ran * 0.55, 10, ran)
			p5.rotate(p5.PI / 5)
			p5.ellipse(0, 0, 10)
		}
		p5.endShape(p5.CLOSE)
		p5.pop()
	}
}

function sketch(p5) {
	let flowers = []
	// let button
	p5.setup = () => {
		p5.createCanvas(800, 500)
		const numFlowers = 10
		for (let ii = 0; ii < numFlowers; ii++) {
			flowers.push(new Embroider({ p5 }))
		}

		for (let ii = 0; ii < numFlowers; ii++) {
			flowers.push(new Star({ p5 }))
		}

		reset()
		p5.mousePressed = () => {
			p5.clear()
			reset()
		}
	}

	function reset() {
		p5.clear()
		const m = 1000
		const topR = 100 * p5.noise(p5.frameCount / m)
		const topG = 0 * p5.noise(240 + p5.frameCount / m)
		const topB = 100 * p5.noise(240 + p5.frameCount / m)
		const bottomR = 100 * p5.noise(240 + p5.frameCount / m)
		const bottomG = 20 * p5.noise(240 + p5.frameCount / m)
		const bottomB = 800 * p5.noise(400 + p5.frameCount / m)

		const topColor = p5.color(topR, topG, topB)
		const bottomColor = p5.color(bottomR, bottomG, bottomB)

		for (let y = 0; y < p5.height; y++) {
			const lineColor = p5.lerpColor(topColor, bottomColor, y / p5.height)
			p5.stroke(lineColor), p5.line(0, y, p5.width, y)
		}
	}

	p5.draw = () => {
		reset()
		for (const flower of flowers) {
			flower.draw()
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
