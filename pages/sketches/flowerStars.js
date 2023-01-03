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
		const edges = 100
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
		const edges = 100
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
			p5.fill(100, 10, 0, 90)
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
		const numFlowers = 20
		p5.createCanvas(800, 500)

		// button = p5.createButton('reset me')
		// button.mousePressed(keyPressed)

		// for (let ii = 0; ii < numFlowers; ii++) {
		// 	flowers.push(new Daisy({ p5 }))
		// }

		for (let ii = 0; ii < numFlowers; ii++) {
			flowers.push(new Embroider({ p5 }))
		}

		for (let ii = 0; ii < numFlowers; ii++) {
			flowers.push(new Star({ p5 }))
		}
	}

	// function keyPressed() {
	// 	p5.clear()
	// 	p5.background(20, 20, 10, 10)
	// }

	function reset() {
		p5.clear()

		for (const flower of flowers) {
			flower.draw()
		}
	}

	p5.draw = () => {
		p5.clear()
		reset()

		p5.mousePressed = () => {
			let num = p5.random(0.5, 1.5)
			let r = p5.random(40, 240)
			let g = p5.random(200, 240)
			let b = p5.random(1, 240)
			let s = p5.random(0.1, 100)
			p5.fill(r, r * num - num, r * 0.3 + num, num)
			p5.stroke(r, g, b, s)
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
