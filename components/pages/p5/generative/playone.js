import dynamic from 'next/dynamic'
import SketchWrapper from '~/components/pages/p5/generative/SketchWrapper'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

function geo(p5) {
	let ranStroke = p5.random(0.005, 0.09)

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
	}

	p5.setup = () => {
		let canvas = p5.createCanvas(800, 500)
		canvas.mousePressed(() => reset())

		reset()
	}

	p5.draw = () => {
		const ran = p5.random(0, 0.09)
		p5.stroke('36, 32, 151, 0.41')
		p5.strokeWeight(ran)
		for (var i = 0; i < points.length; i++) {
			const xx = points[i].x * noiseMult + noiseOffset.x
			const yy = points[i].y * noiseMult + noiseOffset.y
			const angle = p5.map(p5.noise(xx, yy), 0, 20, 0, 1000)
			points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
			p5.ellipse(points[i].x, points[i].y, 2)
		}

		p5.stroke('teal')
		p5.strokeWeight(0.005)
		p5.strokeWeight(ran)
		for (var i = 0; i < points.length; i++) {
			const xx = points[i].x * noiseMult + noiseOffset.x
			const yy = points[i].y * noiseMult + noiseOffset.y
			const angle = p5.map(p5.noise(xx, yy), 20, ran, 200, 720)
			points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
			p5.ellipse(points[i].x, points[i].y, 1)
		}
		p5.stroke('blue')
		p5.strokeWeight(0.05)
		p5.strokeWeight(ran)
		for (var i = 0; i < points.length; i++) {
			const xx = points[i].x * noiseMult + noiseOffset.x
			const yy = points[i].y * noiseMult + noiseOffset.y
			const angle = p5.map(p5.noise(xx, yy), 20, ran, 200, 720)
			points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
			p5.ellipse(points[i].x, points[i].y, 1)
		}
	}
}

export default function PlayOne({ props }) {
	return <SketchWrapper sketch={geo} {...props} />
}
