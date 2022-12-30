import { background, Center, Heading, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { GiEclipse } from 'react-icons/gi'
import { TypeAnimation } from 'react-type-animation'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})
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

export default function Draw() {
	return (
		<>
			<VStack py={'16'} spacing={'0'}>
				<ReactP5Wrapper sketch={mould} />
			</VStack>
		</>
	)
}
