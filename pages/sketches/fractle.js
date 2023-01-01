import { background, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { FaLastfmSquare } from 'react-icons/fa'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})
let started = false

let pressed = false

function brain(p5) {
	let minYchange = 0 //these two ranges determine line overlap and width
	let maxYchange = 1
	let layers = 1
	let rotStripe //rotation of each stripe; try 10 or 90;
	// try lines = true with high alph or lines = false with low alph (100)
	let lines = true
	let filling = true
	let r, g, b
	let button

	function reset() {
		p5.clear()
		if (lines == true) {
			p5.stroke(30, 90, 30, 90)
		} else {
			p5.noStroke()
		}
		p5.angleMode(p5.DEGREES)
		let end = p5.height / 2 + 500 //where lines stop
		for (let i = 0; i < layers; i++) {
			let y1
			if (i == 0) {
				y1 = -p5.height / 2 - 300
			} else {
				y1 = -p5.height / 2 + (p5.height / p5.layers) * i
			}
			//starting height for each layer
			let y2 = y1,
				y3 = y1,
				y4 = y1,
				y5 = y1,
				y6 = y1
			let rotLayer = p5.random(300) //layer rotation
			let rotThisStripe = 0
			//keep going until all the lines are at the bottom
			while (
				(y1 < end) &
				(y2 < end) &
				(y3 < end) &
				(y4 < end) &
				(y5 < end) &
				(y6 < end) &
				(-maxYchange < minYchange)
			) {
				y1 += p5.random(minYchange, maxYchange)
				y2 += p5.random(minYchange, maxYchange)
				y3 += p5.random(minYchange, maxYchange)
				y4 += p5.random(minYchange, maxYchange)
				y5 += p5.random(minYchange, maxYchange)
				y6 += p5.random(minYchange, maxYchange)

				r = p5.random(100, 200)
				g = p5.random(100, 200)
				b = p5.random(200, 240)

				if (filling == true) {
					p5.fill(r, g, b, 240)
				} else {
					p5.noFill()
				}

				p5.push()

				p5.translate(p5.width / 2, p5.height / 2)
				rotStripe = 0.8
				rotThisStripe += rotStripe //rotating after each stripe

				p5.rotate(rotThisStripe + rotLayer * p5.random(0.9, 1))

				let xStart = -p5.width / 2
				p5.beginShape()
				p5.curveVertex(xStart - 300, p5.height / 2 + 400)
				p5.curveVertex(xStart - 300, y1)
				p5.curveVertex(xStart + (p5.width / 6) * 1, y2)
				p5.curveVertex(xStart + (p5.width / 5) * 2, y3)
				p5.curveVertex(xStart + (p5.width / 5) * 3, y4)
				p5.curveVertex(xStart + (p5.width / 5) * 4, y5)
				p5.curveVertex(p5.width / 8 + p5.width, y6)
				p5.curveVertex(p5.width / 2 + 800, p5.height / 2 + p5.width)
				p5.endShape(p5.CLOSE)
				p5.pop()
			}
		}
	}

	p5.setup = () => {
		p5.createCanvas(800, 500)
		p5.background(254, 251, 234, 100)
		let buttonText = pressed ? 'reset' : 'start'
		button = p5.createButton(buttonText)
		button.mousePressed(() => {
			started = true
			reset()
			button.html('reset')
		})
		button.addClass('p5Button')
		window.btn = button
	}

	p5.draw = () => {
		if (!started) {
			return
		}
	}
}

export default function Draw() {
	return (
		<>
			<VStack py={'16'} spacing={'0'}>
				<ReactP5Wrapper sketch={brain} />
			</VStack>
		</>
	)
}
