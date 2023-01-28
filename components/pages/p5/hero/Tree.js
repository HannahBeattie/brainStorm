import { useColorModeValue, VStack } from '@chakra-ui/react'
import { useInView } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
import useMeasure from 'react-use-measure'
import Appear from '~/components/pages/framerMotion/Appear'
import { EnterStage } from '~/components/pages/framerMotion/EnterStage'

const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

class MyTree {
	constructor({ p5 }) {
		this.p5 = p5
		const edges = 120
		this.center = {
			x: p5.random(edges, p5.width - edges),
			y: p5.random(edges, p5.height - edges),
		}
	}
	draw = () => {
		const p5 = this.p5
		let scale = p5.random(9, 10)
		let resolution = p5.random(0.04, 0.08)
		let numPoints = p5.random(10, 30)
		let radius = p5.random(90, 100)

		let numRings = p5.random(10, 30)
		let r
		let n
		let a
		let y
		let x

		p5.push()
		p5.translate(this.center.x, this.center.y)

		for (r = 0; r < radius; r += radius / numRings) {
			p5.beginShape()
			for (
				a = -p5.TAU - p5.TAU / numPoints;
				a <= p5.TAU + p5.TAU / numPoints;
				a += p5.TAU / numPoints
			) {
				x = r * p5.cos(a)
				y = r * p5.sin(a)

				n = p5.map(p5.noise(x * resolution, y * resolution), 0, 3, -scale, scale)

				p5.curveVertex(x + n, y + n)

				if (p5.random() > 0.75 - 0.01 * p5.sin(r)) {
					p5.endShape()
					p5.beginShape()
				}
			}
			p5.endShape()
		}
		p5.pop()
	}
}

function sketch(p5) {
	let stroke = [40, 30, 10, 200]
	let trees = []
	let num
	let width = 800
	let height = 500
	let isInView = false
	let didDraw = false

	p5.updateWithProps = (props) => {
		let shouldReset = false
		if (props.stroke) {
			if (stroke[0] !== props.stroke[0] && didDraw) {
				shouldReset = true
			}
			stroke = props.stroke
		}
		if (props.w && props.h) {
			p5.resizeCanvas(props.w, props.h)
			width = props.w
			height = props.h
			shouldReset = true
		}
		if (props.num) {
			num = props.num
		}
		isInView = props.isInView
		if (shouldReset) {
			reset()
		}
	}

	function reset() {
		p5.resizeCanvas(width, height)
		p5.clear()
		let ranStoke = p5.random(0.1, 2)
		p5.strokeWeight(ranStoke)
		p5.noFill()
		p5.stroke(stroke)
		const numTree = num ?? p5.random(1, 2)

		trees = []
		for (let ii = 0; ii < numTree; ii++) {
			trees.push(new MyTree({ p5 }))
		}

		for (const tree of trees) {
			tree.draw()
		}
		didDraw = true
	}

	p5.setup = () => {
		let canvas = p5.createCanvas(200, 200)
		canvas.mousePressed(() => reset())
	}

	p5.draw = () => {
		if (isInView) {
			reset()
			p5.noLoop()
		}
	}
}
export default function Tree({ num }) {
	const [ref, bounds] = useMeasure({ debounce: 300 })
	let width = bounds.width
	if (typeof window !== 'undefined' && width > window.innerWidth) {
		width = window.innerWidth
	}
	// if (num === 100) {
	// 	console.log('<Tree> bounds:', width, bounds.width, bounds.height)
	// }
	const ref2 = useRef(null)
	const isInView = useInView(ref2)

	let stroke = useColorModeValue([0, 0, 0], [230, 220, 220])

	return (
		<VStack
			aria-label='An animation of generative rings, radiating from small to large'
			overflow={'hidden'}
			spacing={'0'}
			ref={ref}
			alignSelf='stretch'
			cursor='pointer'
			h='300'
		>
			<div ref={ref2}>
				<ReactP5Wrapper
					sketch={sketch}
					stroke={stroke}
					h={bounds.height}
					w={width - 20}
					num={num}
					isInView={isInView}
				/>
			</div>
		</VStack>
	)
}
