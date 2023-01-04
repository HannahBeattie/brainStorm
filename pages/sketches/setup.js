import { VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { GiBlackHandShield } from 'react-icons/gi'

// FIBER TEXTURE Inspired by lzmunch's Paper texture : https://editor.p5js.org/lzmunch/sketches/Xnp94GpqN

const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

class Particle {
	constructor({ x, y, col, p5 }) {
		this.p5 = p5
	}
}
function sketch(p5) {
	p5.setup = () => {
		p5.createCanvas(800, 500)
		p5.background(100, 10)
	}
	function sketch(p5) {
		p5.draw = () => {}
	}
}

export default function Draw() {
	return (
		<VStack spacing={'0'} py={'16'}>
			<ReactP5Wrapper sketch={sketch} />
		</VStack>
	)
}
