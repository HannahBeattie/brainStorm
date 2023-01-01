import { background, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { FaLastfmSquare } from 'react-icons/fa'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

let points = []
let pressed = false

function brain(p5) {
	let button
	let started = false
	let mult = 0.01

	function reset() {
		p5.clear()
		p5.background(254, 251, 234, 100)
		let density = p5.random(10, 100)
		let space = p5.width / density
		points = []
		mult = p5.random(0.001, 0.1)
		for (let x = 0; x < p5.width; x += space) {
			for (let y = 0; y < p5.height; y += space) {
				let p = p5.createVector(x + p5.random(-10, 10), y + p5.random(-30, 30))
				points.push(p)
			}
		}
	}

	p5.setup = () => {
		p5.createCanvas(800, 500)
		p5.background(254, 251, 234, 100)
		p5.angleMode(p5.DEGREES)
		p5.noiseDetail(p5.random(0.001, 1.1))
		reset()

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
		p5.noStroke()
		for (var i = 0; i < points.length; i++) {
			let r = p5.map(points[i].x, 0, p5.width, 10, 255)
			let g = p5.map(points[i].y, 0, p5.width, 50, 255)
			let b = p5.map(points[i].x, 0, p5.width, 50, 255)

			let alpha = p5.map(
				p5.dist(p5.width / 2, p5.height / 2, points[i].x, points[i].y),
				0,
				360,
				360,
				0
			)
			p5.fill(r, g, b, alpha)
			let angle = p5.map(p5.noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 360)
			points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
			p5.ellipse(points[i].x, points[i].y, 1.1)
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
