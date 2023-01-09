import { background, Box, Text, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'
import SketchWrapper from './SketchWrapper'

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
		this.weight = p5.random(0.5, 9)
	}
	draw({ noiseScale, col, lineIs }) {
		const p5 = this.p5
		p5.strokeWeight(lineIs ?? this.weight)
		p5.stroke(col ?? 'yellow')
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
		p5.stroke(col ?? 'yellow')
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
		this.pos.x += p5.cos(a) + p5.cos(a)
		this.pos.y += p5.sin(a)
	}

	onScreen() {
		const p5 = this.p5
		return (
			this.pos.x >= 0 && this.pos.x <= p5.width && this.pos.y >= 0 && this.pos.y <= p5.height
		)
	}
}

function smoak(p5) {
	// functions used in drawing
	// const pressedSeed = p5.mouseIsPressed ? 1 : 1
	let noiseScale
	// p5.noiseSeed(p5.millis(pressedSeed))
	//define particles
	let particles = []
	let particlesTwo = []
	const partNum = p5.random(800, 900)
	const partTwoNum = p5.random(200, 300)

	function reset() {
		p5.clear()
		noiseScale = Math.pow(p5.random(0.1, 0.5), 3)
		const m = 4
		const topR = 200 * p5.noise(700 + p5.frameCount / m)
		const topG = 10 * p5.noise(-240 + p5.frameCount / m)
		const topB = 240 * p5.noise(240 + p5.frameCount / m)
		const bottomR = 140 * p5.noise(200 + p5.frameCount / m)
		const bottomG = 20 * 9 * p5.noise(240 + p5.frameCount / m)
		const bottomB = 250 * p5.noise(400 + p5.frameCount / m)
		const topColor = p5.color(topR, topG, topB)
		const bottomColor = p5.color(bottomR, bottomG, bottomB)

		for (let y = 0; y < p5.height; y++) {
			const lineColor = p5.lerpColor(topColor, bottomColor, y / p5.height)
			p5.strokeWeight(1)
			p5.stroke(lineColor), p5.line(0, y, p5.width, y)
		}

		//loop through particle nums, push them to random points within canvas
		particles = []
		particlesTwo = []
		for (let i = 0; i < partNum; i++) {
			particles.push(new Particle({ p5 }))
		}
		for (let i = 0; i < partTwoNum; i++) {
			particlesTwo.push(new ParticleTwo({ p5 }))
		}
	}

	//setup canvas
	p5.setup = () => {
		p5.createCanvas(700, 500)
		reset()
		p5.mousePressed = () => {
			reset()
		}
	}
	p5.updateWithProps = (props) => {
		if (props.w && props.h) {
			p5.resizeCanvas(props.w, props.h)
			p5.width = props.w
			p5.height = props.h
		}

		reset()
	}

	//draw vectors
	p5.draw = (update) => {
		// Jiggle the flow field

		const b = p5.random(150, 240)
		let ran2 = p5.random(1, 4)
		const jiggle = p5.abs(noiseScale) * 0.01
		if (jiggle < 1) {
			noiseScale += p5.random(0, jiggle * 0.02)
		} else {
			noiseScale += p5.random(-jiggle, jiggle)
		}

		for (let i = 0; i < partNum; i++) {
			const p = particles[i]
			p.draw({ noiseScale, col: [21, 215, 215, 40], lineIs: 2.1 })
		}
		for (let i = 0; i < partTwoNum; i++) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: [10, 215, 0, 100], lineIs: 3.1 })
		}

		for (let i = 0; i < partTwoNum; i++) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: [200, 215, 100, 10], lineIs: 0.1 })
		}
		for (let i = 0; i < partTwoNum; i++) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: [100, 100, 100, 20], lineIs: 10 })
		}
		for (let i = 0; i < partTwoNum; i++) {
			10
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: [215, 215, 25, 10], lineIs: 0.4 })
		}

		for (let i = 0; i < partTwoNum; i++) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: [215, 100, 100, 9], lineIs: 10 })
		}
		for (let i = partTwoNum; i < partTwoNum; i--) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: [100, 100, 200, 10], lineIs: 30 })
		}
		for (let i = partTwoNum; i < partTwoNum; i--) {
			const p = particlesTwo[i]
			p.draw({ noiseScale, col: [100, 200, 215, 10], lineIs: 20 })
		}
	}
}

export default function Smoak() {
	return <SketchWrapper sketch={smoak} />
}
