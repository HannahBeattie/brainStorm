import { VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import useMeasure from 'react-use-measure'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

function wiggle(p5) {
	let points = []
	p5.setup = () => {
		p5.createCanvas(800, 500)

		p5.mousePressed = () => {
			// p5.saveGif('01.gif', 30, { delay: 0, units: 'frames' })
		}

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
	p5.updateWithProps = (props) => {
		if (props.w && props.h) {
			p5.resizeCanvas(props.w, props.h)
			p5.width = props.w
			p5.height = props.h
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

export default function Wiggle() {
	const [ref, bounds] = useMeasure()
	return (
		<VStack overflow={'hidden'} maxW={'100vw'} ref={ref}>
			<VStack h='500px' alignSelf='stretch' cursor='pointer' overflow={'hidden'}>
				<ReactP5Wrapper sketch={wiggle} />
			</VStack>
		</VStack>
	)
}
