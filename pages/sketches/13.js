import { background, Center, Heading, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { GiEclipse } from 'react-icons/gi'
import { TypeAnimation } from 'react-type-animation'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

function sketch(p5) {
	p5.setup = () => {
		p5.createCanvas(600, 400, p5.WEBGL), p5.background('black')
	}

	p5.draw = () => {
		p5.normalMaterial()
		p5.push()
		p5.sphere(['100', '100', '20', '20'])
		p5.rotateZ(p5.frameCount * 0.01)
		p5.rotateX(p5.frameCount * 0.01)
		p5.rotateY(p5.frameCount * 0.01)
		p5.sphere(['300', '300', '20', '20'])
		p5.stroke('white')
		p5.strokeWeight('1')
		p5.pop()
	}
}

function circle(p5) {
	p5.setup = () => {
		p5.createCanvas(600, 400, p5.WEBGL), p5.background('black')
	}

	p5.draw = () => {
		p5.normalMaterial()
		p5.push()
		p5.rotateZ(p5.frameCount * 0.01)
		p5.rotateX(p5.frameCount * 0.0005)
		p5.rotateY(p5.frameCount * 0.01)
		p5.sphere(500)
		p5.pop()
	}
	p5.push = () => {
		p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY)
		p5.stroke('100')
		p5.strokeWeight('1')
		p5.pop()
	}
}

function drawMe(p5) {
	p5.setup = () => {
		p5.createCanvas(600, 400), p5.background('black')
	}

	p5.draw = () => {
		p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY)
		p5.stroke('400')
		p5.strokeWeight('2')
	}
}

function ball(p5) {
	let mult
	let r1
	let r2
	let g1
	let g2
	let b1
	let b2

	p5.setup = () => {
		p5.createCanvas(800, 500)
		p5.background('black')
		p5.angleMode(p5.DEGREES)
		p5.noiseDetail(20)
		let density = 200
		let space = p5.width / density

		for (let x = 0; x < p5.width; x += space) {
			for (let y = 0; y < p5.height; y += space) {
				let p = p5.createVector(x + p5.random(-10, 10), y + p5.random(-30, 30))
				points.push(p)
			}
			p5.shuffle(points, true)
			r1 = p5.random(255)
			r2 = p5.random(255)
			g1 = p5.random(255)
			g2 = p5.random(255)
			b1 = p5.random(300)
			b2 = p5.random(255)
			mult = p5.random(0.0001, 0.004)
		}
	}

	p5.draw = () => {
		p5.noStroke()
		for (var i = 0; i < points.length; i++) {
			let r = p5.map(points[i].x, 0, p5.width, r1, r2)
			let g = p5.map(points[i].y, 0, p5.width, g1, g2)
			let b = p5.map(points[i].x, 0, p5.width, b1, b2)
			let alpha = p5.map(
				p5.dist(p5.width / 2, p5.height / 2, points[i].x, points[i].y),
				0,
				200,
				200,
				0
			)
			p5.fill(r, g, b, alpha)
			let angle = p5.map(p5.noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)
			points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
			p5.ellipse(points[i].x, points[i].y, 1)
		}
	}
}
function doodle(p5) {
	p5.setup = () => {
		p5.createCanvas(800, 400)
	}

	//listen when we click the mouse
	p5.mouseClicked = () => {
		// p5.stroke(p5.random(0.4), p5.random(100), p5.random(80, 100))
		// p5.strokeWeight(p5.random())
		p5.stroke(p5.random(20, 145), p5.random(10), p5.random(80, 100))
	}
	//listen when we release *any* key
	p5.keyReleased = () => {
		//color hue values between 20 and 145
		//saturation 0 to 100
		//brightness 80 to 100
		p5.stroke(p5.random(10, 145), p5.random(100), p5.random(80, 100))
	}

	//listen for only character keys
	p5.keyType = () => {
		//weights 0 to 5
		p5.stroke(p5.random(0, 100), p5.random(10), p5.random(90, 100))
		p5.strokeWeight(p5.random(5))
	}

	p5.draw = () => {
		p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY)
	}
}

let points = []

function brain(p5) {
	p5.setup = () => {
		p5.createCanvas(800, 500)
		p5.angleMode(p5.DEGREES)
		p5.noiseDetail(1)
		let density = 40
		let space = p5.width / density

		for (let x = 0; x < p5.width; x += space) {
			for (let y = 0; y < p5.height; y += space) {
				let p = p5.createVector(x + p5.random(-10, 10), y + p5.random(-30, 30))
				points.push(p)
			}
		}
	}
	p5.draw = () => {
		let mult = 0.05
		p5.noStroke()
		for (var i = 0; i < points.length; i++) {
			let r = p5.map(points[i].x, 0, p5.width, 50, 255)
			let g = p5.map(points[i].y, 0, p5.width, 50, 255)
			let b = p5.map(points[i].x, 0, p5.width, 50, 255)
			let alpha = p5.map(
				p5.dist(p5.width / 2, p5.height / 2, points[i].x, points[i].y),
				0,
				350,
				255,
				0
			)
			p5.fill(r, g, b, alpha)
			let angle = p5.map(p5.noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)
			points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
			p5.ellipse(points[i].x, points[i].y, 1)
		}
	}
}

function mould(p5) {
	p5.setup = () => {
		p5.createCanvas(800, 500)

		let density = 50
		let space = p5.width / density

		for (let x = 0; x < p5.width; x += space) {
			for (let y = 0; y < p5.height; y += space) {
				let p = p5.createVector(x, y)
				points.push(p)
			}
		}
	}
	p5.draw = () => {
		p5.noStroke()
		p5.fill(255)
		for (var i = 0; i < points.length; i++) {
			let angle = p5.map(p5.noise(points[i].x, points[i].y), 0, 1, 0, 720)
			points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
			p5.ellipse(points[i].x, points[i].y, 1)
		}
	}
}

function squiggle(p5) {
	p5.setup = () => {
		p5.createCanvas(800, 500)
		let density = 100
		// 500
		let space = p5.width / density

		for (let x = 0; x < p5.width; x += space) {
			for (let y = 0; y < p5.height; y += space) {
				let p = p5.createVector(x, y)
				points.push(p)
			}
		}
	}
	p5.draw = () => {
		let mult = 0.005
		p5.noStroke()
		p5.fill(255)
		for (var i = 0; i < points.length; i++) {
			let angle = p5.map(p5.noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)
			points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
			p5.ellipse(points[i].x, points[i].y, 1)
		}
	}
}

export default function Draw() {
	return (
		<>
			<VStack py={'16'} spacing={'0'}>
				<ReactP5Wrapper sketch={flow} />
			</VStack>
		</>
	)
}
