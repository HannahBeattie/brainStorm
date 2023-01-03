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
		const edges = 4
		this.center = {
			x: p5.random(edges, p5.width - edges),
			y: p5.random(edges, p5.height - edges),
		}
	}
	draw = () => {
		const p5 = this.p5
		let scale = p5.random(3, 30)
		let resolution = p5.random(0.001, 0.008)
		let numPoints = p5.random(100, 400)
		let radius = p5.random(20, 100)
		let numRings = p5.random(10, 100)
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
				a = -p5.TAU / numPoints;
				a < p5.TAU + p5.TAU / numPoints;
				a += p5.TAU / numPoints
			) {
				x = 200 + r * p5.cos(a)
				y = 200 + r * p5.sin(a)

				n = p5.map(p5.noise(x * resolution, y * resolution), 0, 1, -scale, scale)

				p5.curveVertex(x + n, y + n)

				if (p5.random() > 0.75 - 0.25 * p5.sin(r)) {
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
	function reset() {
		p5.clear()
		p5.background(220)
		for (const tree of trees) {
			tree.draw()
		}
	}
	let trees = []
	p5.setup = () => {
		p5.createCanvas(800, 500)

		p5.stroke(0)
		p5.strokeWeight(1)
		p5.noFill()
		const numTree = 20
		for (let ii = 0; ii < numTree; ii++) {
			trees.push(new Tree({ p5 }))
		}

		p5.noLoop()
		p5.mousePressed = () => {
			reset()
		}
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
