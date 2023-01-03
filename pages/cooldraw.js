import { VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { GiBlackHandShield } from 'react-icons/gi'

// FIBER TEXTURE Inspired by lzmunch's Paper texture : https://editor.p5js.org/lzmunch/sketches/Xnp94GpqN

const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

function sketch(p5) {
	let button
	p5.setup = () => {
		p5.createCanvas(800, 500)
		p5.background(20, 20, 10, 10)
		let r = p5.random(10, 240)
		let g = p5.random(100, 240)
		let b = p5.random(100, 240)
		let l = p5.random(10, 80)
		let s = p5.random(0.1, 10)
		p5.fill(r, g, b, s)
		button = p5.createButton('reset me')
		button.mousePressed(keyPressed)
	}

	function keyPressed() {
		p5.clear()
		p5.background(20, 20, 10, 10)
	}
	function flower(x, y) {
		p5.translate(x, y)
		p5.noStroke()
		let ran = p5.random(1, 100)
		for (let i = 0; i < 10; i++) {
			p5.ellipse(p5.mouseX, p5.mouseY)
			p5.stroke(0, 10, 30, 10)
			p5.ellipse(0, 10, ran, ran - 10)
			p5.rotate(p5.PI / 5)
		}
	}

	function reset() {
		let num
		let ran = p5.random(1, 100)
		p5.stroke(20, 100, 10, 20)
		flower(p5.mouseX, p5.mouseY)

		p5.stroke(100, ran, 10)
		p5.mousePressed = () => {
			p5.stroke(ran, 10, ran, ran)
		}
	}

	p5.draw = () => {
		reset()
		p5.keyPressed = () => {
			reset()
		}
		p5.mousePressed = () => {
			let num = p5.random(0.5, 1.5)
			let r = p5.random(1, 240)
			let g = p5.random(200, 240)
			let b = p5.random(1, 240)
			let s = p5.random(0.1, 10)
			p5.fill(r, r * num, r + num, num)
			p5.stroke(r, g, b, 100)
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
