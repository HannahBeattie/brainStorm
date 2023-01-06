import { background, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { FaMarsStroke } from 'react-icons/fa'
import { GiBlackHandShield } from 'react-icons/gi'
import { SlLoop } from 'react-icons/sl'

// FIBER TEXTURE Inspired by lzmunch's Paper texture : https://editor.p5js.org/lzmunch/sketches/Xnp94GpqN

const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

class Tree {
	constructor({ p5 }) {
		this.p5 = p5
		const edges = 100
		this.center = {
			x: p5.random(edges, p5.width - edges),
			y: p5.random(edges, p5.height - edges),
		}
	}
	draw = () => {
		const p5 = this.p5
		let scale = p5.random(8, 10)
		let resolution = p5.random(0.01, 0.08)
		let numPoints = p5.random(20, 100)
		let radius = p5.random(40, 90)
		// let numRings = p5.random(10, 100)
		let numRings = p5.random(5, 20)
		let r
		let n
		let a
		let y
		let x

		p5.push()
		p5.translate(this.center.x, this.center.y)

		for (r = 0; r < radius; r += radius / numRings) {
			p5.beginShape()
			for (
				a = -p5.TAU - p5.TAU / numPoints;
				a <= p5.TAU + p5.TAU / numPoints;
				a += p5.TAU / numPoints
			) {
				x = r * p5.cos(a)
				y = r * p5.sin(a)

				n = p5.map(p5.noise(x * resolution, y * resolution), 0, 3, -scale, scale)

				p5.curveVertex(x + n, y + n)

				if (p5.random() > 0.75 - 0.01 * p5.sin(r)) {
					p5.endShape()
					p5.beginShape()
				}
			}
			p5.endShape()
		}
		p5.pop()
	}
}

function sketch(p5) {
	let trees = []

	function reset() {
		p5.clear()
		p5.background(240, 240, 240, 230)
		let ranStoke = p5.random(0.1, 1)
		p5.strokeWeight(ranStoke)
		p5.noFill()

		const numTree = p5.random(4, 15)
		// const numTree = 5
		trees = []
		for (let ii = 0; ii < numTree; ii++) {
			trees.push(new Tree({ p5 }))
		}

		for (const tree of trees) {
			tree.draw()
		}
	}

	p5.setup = () => {
		p5.createCanvas(800, 500)
		// p5.noLoop()
		p5.mousePressed = () => {
			reset()
		}
	}

	p5.draw = () => {
		p5.frameRate(0.5)
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
