import { Box, Text, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

class ParticleTwo {
	constructor({ p5 }) {
		this.p5 = p5
		this.reset()
	}
	reset() {
		const p5 = this.p5
		this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height))
		this.weight = p5.random(4, 9)
	}
	draw({ noiseScale, col, lineIs }) {
		const p5 = this.p5
		p5.strokeWeight(lineIs ?? this.weight)
		p5.stroke(col ?? 'red')
		p5.point(this.pos.x, this.pos.y)
		this.updatePosFlow({ noiseScale })
		//if vectors trail of the screen, they will appear on screen again

		if (!this.onScreen()) {
			this.reset()
		}
	}

	updatePosFlow({ noiseScale }) {
		const p5 = this.p5
		//move particles using perlin (gradient) noise
		let n = p5.noise(this.pos.x * noiseScale, this.pos.y * noiseScale)
		// TAU = 2 * pie ... it will give us a number between 0 and 1
		let a = p5.TAU * n
		this.pos.x += p5.cos(a)
		this.pos.y += p5.sin(a)
	}

	onScreen() {
		const p5 = this.p5
		return (
			this.pos.x >= 0 && this.pos.x <= p5.width && this.pos.y >= 0 && this.pos.y <= p5.height
		)
	}
}
class Particle {
	constructor({ p5 }) {
		this.p5 = p5
		this.reset()
	}

	reset() {
		const p5 = this.p5
		this.pos = p5.createVector(p5.random(p5.width + 10), p5.random(p5.height + 10))
		this.weight = p5.random(1, 3)
	}

	draw({ noiseScale, col }) {
		const p5 = this.p5
		p5.strokeWeight(this.weight)
		p5.stroke(col ?? 'white')
		p5.point(this.pos.x, this.pos.y)
		this.updatePosFlow({ noiseScale })

		//if vectors trail of the screen, they will appear on screen again
		if (!this.onScreen()) {
			this.reset()
		}
	}

	updatePosFlow({ noiseScale }) {
		const p5 = this.p5
		//move particles using perlin (gradient) noise
		let n = p5.noise(this.pos.x * noiseScale, this.pos.y * noiseScale)
		// TAU = 2 * pie ... it will give us a number between 0 and 1
		let a = p5.TAU * n
		this.pos.x += p5.cos(a)
		this.pos.y += p5.sin(a)
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
	// const pressedSeed = p5.mouseIsPressed ? 1 : 1
	let noiseScale = Math.pow(p5.random(0.1, 0.5), 3)
	// p5.noiseSeed(p5.millis(pressedSeed))
	//define particles
	let particles = []
	let particlesTwo = []
	const partNum = p5.random(800, 900)
	const partTwoNum = p5.random(200, 300)
	//setup canvas
	p5.setup = () => {
		p5.createCanvas(700, 500)
		//loop through particle nums, push them to random points within canvas
		for (let i = 0; i < partNum; i++) {
			particles.push(new Particle({ p5 }))
		}
		for (let i = 0; i < partTwoNum; i++) {
			particlesTwo.push(new ParticleTwo({ p5 }))
		}
		const m = 1000
		const topR = 100 * p5.noise(p5.frameCount / m)
		const topG = 10 * p5.noise(240 + p5.frameCount / m)
		const topB = 900 * p5.noise(240 + p5.frameCount / m)
		const bottomR = 10 * p5.noise(240 + p5.frameCount / m)
		const bottomG = 900 * p5.noise(240 + p5.frameCount / m)
		const bottomB = 800 * p5.noise(400 + p5.frameCount / m)

		const topColor = p5.color(topR, topG, topB)
		const bottomColor = p5.color(bottomR, bottomG, bottomB)

		for (let y = 0; y < p5.height; y++) {
			const lineColor = p5.lerpColor(topColor, bottomColor, y / p5.height)
			p5.stroke(lineColor), p5.line(0, y, p5.width, y)
		}
	}

	//draw vectors
	p5.draw = (update) => {
		// Jiggle the flow field

		const jiggle = p5.abs(noiseScale) * 0.01
		if (jiggle < 1) {
			noiseScale += p5.random(0, jiggle * 0.003)
		} else {
			noiseScale += p5.random(-jiggle, jiggle)
		}

		let r = p5.random(200, 210)
		let g = p5.random(200, 240)
		let b = p5.random(200, 240)
		let t = p5.random(190, 200)
		for (let i = 0; i < partNum; i++) {
			const p = particles[i]
			p.draw({ noiseScale, col: (r, g, b, t), lineIs: 1.1 })
		}
		for (let i = 0; i < partTwoNum; i++) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: 'yellow', lineIs: 2.1 })
		}
		for (let i = 0; i < partTwoNum; i++) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: 'orange', lineIs: 2.1 })
		}
		for (let i = 0; i < partTwoNum; i++) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: 'white', lineIs: 1 })
		}
		for (let i = 0; i < partTwoNum; i++) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: (r, g, b, 100), lineIs: 1 })
		}

		for (let i = 0; i < partTwoNum; i++) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: 'orange', lineIs: 1 })
		}
		for (let i = partTwoNum; i < partTwoNum; i--) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: 'blue', lineIs: 100 })
		}
		for (let i = partTwoNum; i < partTwoNum; i--) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: 'red', lineIs: 1 })
		}
	}
}

export default function Draw() {
	return (
		<VStack spacing={'4'} py={16}>
			<Box p={'4'} bg={'gray.900'} borderRadius={10} boxShadow={'LG'}>
				<ReactP5Wrapper sketch={flowfield} />
			</Box>
			<Text fontWeight={800}>Flow field 01</Text>
		</VStack>
	)
}
