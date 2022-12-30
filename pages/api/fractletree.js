import { background, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})
// check if there are vectors being displayed

function drawMe(p5) {
	p5.setup = () => {
		p5.createCanvas(800, 500)
		p5.background(100, 80)
	}

	p5.draw = () => {
		p5.clear()
		p5.frameRate(30)
		p5.stroke(100)
		// Start the tree from the bottom of the screen
		p5.translate(p5.width / 2, p5.height)
		// Draw a line 120 pixels
		p5.line(0, 0, 0, -120)
		// Move to the end of that line
		p5.translate(0, -120)
		// Start the recursive branching!
		branch({ p5, h: 120 })
	}
}

function branch({ p5, h }) {
	// Each branch will be 2/3rds the size of the previous one
	h *= 0.66
	// All recursive functions must have an exit condition!!!!
	// Here, ours is when the length of the branch is 2 pixels or less

	if (h > 2) {
		// Let's pick an angle 0 to 90 degrees based on the mouse position
		let a = (p5.mouseX / p5.width) * 90
		// Convert it to radians
		const theta = p5.radians(a)

		p5.push() // Save the current state of transformation (i.e. where are we now)
		p5.rotate(theta) // Rotate by theta
		p5.line(0, 0, 0, -h) // Draw the branch
		p5.translate(0, -h) // Move to the end of the branch
		branch({ p5, h }) // Ok, now call myself to draw two new branches!!
		p5.pop() // Whenever we get back here, we "pop" in order to restore the previous matrix state
		// Repeat the same thing, only branch off to the "left" this time!
		p5.push()
		p5.rotate(-theta)
		p5.line(0, 0, 0, -h)
		p5.translate(0, -h)
		branch({ p5, h })
		p5.pop()
	}
}

export default function Draw() {
	return (
		<VStack spacing={'0'} py={'16'}>
			<ReactP5Wrapper sketch={drawMe} />
		</VStack>
	)
}
