import { background, Center, Heading, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { GiEclipse } from 'react-icons/gi'
import { TypeAnimation } from 'react-type-animation'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

let points = []

function flow(p5) {
	let mult
	let r1
	let r2
	let g1
	let g2
	let b1
	let b2

	p5.setup = () => {
		p5.createCanvas(800, 500)
		p5.angleMode(p5.DEGREES)
		p5.noiseDetail(p5.random(1, 3))
		let density = p5.random(80, 90)
		let space = p5.width / density

		for (let x = 0; x < p5.width; x += space) {
			for (let y = 0; y < p5.height; y += space) {
				let p = p5.createVector(x + p5.random(1, 100), y + p5.random(100, 300))
				points.push(p)
			}
			p5.shuffle(points, true)
			r1 = p5.random(255)
			r2 = p5.random(255)
			g1 = p5.random(255)
			g2 = p5.random(255)
			b1 = p5.random(255)
			b2 = p5.random(255)
			mult = p5.random(0.2, 0.01)
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
				500,
				400,
				0
			)
			p5.fill(r, g, b, alpha)
			let angle = p5.map(p5.noise(points[i].x * mult, points[i].y * mult), 0, 20, 0, 900)
			points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
			p5.ellipse(points[i].x, points[i].y, 1)
		}
	}
}

export default function Draw() {
	return (
		<VStack spacing={'0'} py={'16'}>
			<ReactP5Wrapper sketch={flow} />
		</VStack>
	)
}
