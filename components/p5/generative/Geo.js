import dynamic from 'next/dynamic'
import SketchWrapper from './SketchWrapper'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

function geo(p5) {
	let ranStroke = p5.random(0.005, 0.09)
	let stroke = [100, 30, 10, 100]
	let points = []
	let noiseMult = 1
	let noiseOffset = { x: 0, y: 0 }

	function reset() {
		p5.clear()
		p5.noFill()
		noiseMult = p5.random(0.0005, 0.005)
		noiseOffset = {
			x: p5.random(-1000, 1000),
			y: p5.random(-1000, 1000),
		}
		let density = p5.random(80, 100)
		let space = p5.width / density
		points = []

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
			reset()
		}
		if (props.stroke) {
			stroke = props.stroke
		}
	}

	p5.setup = () => {
		let canvas = p5.createCanvas(800, 500)
		canvas.mousePressed(() => reset())
		reset()
	}

	p5.draw = () => {
		p5.stroke(stroke)
		p5.strokeWeight(ranStroke)
		for (var i = 0; i < points.length; i++) {
			const xx = points[i].x * noiseMult + noiseOffset.x
			const yy = points[i].y * noiseMult + noiseOffset.y
			const angle = p5.map(p5.noise(xx, yy), 0, 1, 0, 720)
			points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
			p5.ellipse(points[i].x, points[i].y, 1)
		}
	}
}

export default function Geo({ props }) {
	return <SketchWrapper sketch={geo} {...props} />
}
