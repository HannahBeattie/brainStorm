import { background, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})
// check if there are vectors being displayed

function drawing(p5) {
	let a
	let b
	p5.setup = () => {
		p5.createCanvas(800, 500)
		p5.background('black')
		p5.stroke('gray')
		p5.noFill()
		a = 0
		b = 0
	}
	p5.draw = () => {
		var x1 = p5.width - 100 * p5.noise(a + 100)
		var x2 = p5.width - 100 * p5.noise(a + 100)
		var x3 = p5.width - 100 * p5.noise(a + 10)
		var x4 = p5.width * p5.noise(a + 45)
		var y1 = p5.height * p5.noise(a + 55)
		var y2 = p5.height * p5.noise(a + 65)
		var y3 = p5.height * p5.noise(a + 75)
		var y4 = p5.height * p5.noise(a + 85)

		p5.bezier(x1, y1, x2, y2, x3, y3, x4, y4)

		a += 0.005
		p5.translate(p5.width / 2, p5.height / 2)
		p5.endShape(p5.CLOSE)

		p5.beginShape()
		for (var i = 0; i < 200; i++) {
			var ang = p5.map(b, 0, 200, 0, p5.TWO_PI)
			var rad = 200 * p5.noise(i * 0.01, b * 0.005)
			var x = rad * p5.cos(ang)
			var y = rad * p5.sin(ang)

			p5.curveVertex(x, y)
		}
		p5.endShape(p5.CLOSE)

		b += 1
	}
}

export default function Draw() {
	return (
		<VStack spacing={'0'} py={'16'}>
			<ReactP5Wrapper sketch={drawing} />
		</VStack>
	)
}
