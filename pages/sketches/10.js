import { VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})
// check if there are vectors being displayed

function drawMe(p5) {
	function mouseClicked({ p5, col }) {
		//weights 0 to 1
		line(mouseX, mouseY, pmouseX, pmouseY)

		//what if want weights 0 to .4?
		//strokeWeight( random(.4) );
	}

	let colorPicker
	let i
	let m
	let r
	let slider = p5.createSlider(0, 255, 100)

	let button

	function resetSketch() {}
	p5.setup = () => {
		p5.createCanvas(800, 500)
		p5.background(300)
		p5.noStroke()
		colorPicker = p5.createColorPicker('#ed225d')
		slider.position(210, 650)
		slider.style('width', '100px')
		button = p5.createButton('reset')
	}

	p5.draw = () => {
		let val = slider.value()
		let col = colorPicker.color()
		if (p5.mouseIsPressed == true) {
			p5.fill(
				col.levels[0] + p5.random(-25, 25),
				col.levels[1] + p5.random(-25, 25),
				col.levels[2] + p5.random(-25, 25),
				6
			)
			for (i = 0; i < 3; i++) {
				p5.push()
				p5.translate(p5.mouseX, p5.mouseY)
				p5.rotate(p5.random(p5.PI * 2))

				p5.beginShape()
				for (m = 0; m < p5.PI * 2; m += 1) {
					r = p5.random(20, val)
					let x = p5.cos(m) * r
					let y = p5.sin(m) * r
					p5.vertex(x, y)
				}
				p5.endShape(p5.CLOSE)
				p5.pop()
				// button.mousePressed(reset)
			}
		}
	}
}

export default function Draw() {
	return (
		<VStack spacing={'0'} py={'16'}>
			<ReactP5Wrapper sketch={drawMe} />
		</VStack>
	)
}
