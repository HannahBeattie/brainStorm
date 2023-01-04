import { useColorModeValue, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import useMeasure from 'react-use-measure'

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
	let width, height

	p5.updateWithProps = (props) => {
		if (props.stroke) {
			stroke = props.stroke
		}
		if (props.w && props.h) {
			p5.resizeCanvas(props.w, props.h)
			width = props.w
			height = props.h
		}
		if (props.num) {
			num = props.num
		}
	}

	function reset() {
		p5.clear()
		let ranStoke = p5.random(0.1, 2)
		p5.strokeWeight(ranStoke)
		p5.noFill()
		p5.stroke(stroke)
		const numTree = num ?? p5.random(1, 2)
		// console.log(`(reset) num=${num} numTree is`, numTree)
		trees = []
		for (let ii = 0; ii < numTree; ii++) {
			trees.push(new MyTree({ p5 }))
		}

		for (const tree of trees) {
			tree.draw()
		}
	}

	p5.setup = () => {
		// console.log('(setup) width, height is :', width, height)
		p5.createCanvas(width ?? 300, height ?? 300)

		// p5.noLoop()
		p5.mousePressed = () => {
			reset()
		}
	}

	p5.draw = () => {
		reset()
		p5.noLoop()
	}
}
export default function Tree({ num }) {
	const [ref, bounds] = useMeasure()
	// console.log('num is:', num)
	let stroke = useColorModeValue([100, 90, 90], [230, 220, 220])

	return (
		<VStack
			overflow={'hidden'}
			spacing={'0'}
			ref={ref}
			h='400px'
			alignSelf='stretch'
			cursor='pointer'
		>
			<ReactP5Wrapper
				sketch={sketch}
				stroke={stroke}
				h={bounds.height || 300}
				w={bounds.width || 500}
				num={num}
			/>
		</VStack>
	)
}
