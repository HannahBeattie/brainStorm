import { background, Center, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

function sketch(p5) {
	p5.setup = () => {
		p5.createCanvas(600, 400, p5.WEBGL), p5.background('black')
	}

	p5.draw = () => {
		p5.normalMaterial()
		p5.push()
		p5.sphere(['100', '100', '20', '20'])
		p5.rotateZ(p5.frameCount * 0.01)
		p5.rotateX(p5.frameCount * 0.01)
		p5.rotateY(p5.frameCount * 0.01)
		p5.sphere(['300', '300', '20', '20'])
		p5.stroke('white')
		p5.strokeWeight('1')
		p5.pop()
	}
}

function circle(p5) {
	p5.setup = () => {
		p5.createCanvas(600, 400), p5.background('black')
	}

	p5.draw = () => {
		p5.normalMaterial()
		p5.push()
		p5.rotateZ(p5.frameCount * 0.01)
		p5.rotateX(p5.frameCount * 0.0005)
		p5.rotateY(p5.frameCount * 0.01)
		p5.sphere(500)
		p5.pop()
	}
	p5.push = () => {
		p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY)
		p5.stroke('100')
		p5.strokeWeight('1')
		p5.pop()
	}
}

function drawMe(p5) {
	p5.setup = () => {
		p5.createCanvas(600, 400), p5.background('black')
	}

	p5.draw = () => {
		p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY)
		p5.stroke('400')
		p5.strokeWeight('2')
	}
}
function doodle(p5) {
	p5.setup = () => {
		p5.createCanvas(800, 400)
	}

	//listen when we click the mouse
	p5.mouseClicked = () => {
		//weights 0 to 1
		p5.stroke(p5.random(0.4), p5.random(100), p5.random(80, 100))
		p5.strokeWeight(p5.random())

		//what if want weights 0 to .4?
		//strokeWeight( random(.4) );
	}
	//listen when we release *any* key
	p5.keyReleased = () => {
		//color hue values between 20 and 145
		//saturation 0 to 100
		//brightness 80 to 100
		p5.stroke(p5.random(10, 20), p5.random(100), p5.random(80, 100))
	}

	//listen for only character keys
	p5.keyType = () => {
		//weights 0 to 5
		p5.stroke(p5.random(0, 100), p5.random(10), p5.random(90, 100))
		p5.strokeWeight(p5.random(5))
	}

	p5.draw = () => {
		p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY)
		p5.stroke(p5.random(0, 100), p5.random(10), p5.random(90, 100))
	}
}

export default function Draw() {
	return (
		<>
			<VStack py={'16'} spacing={'0'} overflow={'hidden'}>
				<ReactP5Wrapper sketch={doodle} />

				<Text
					as={'div'}
					textAlign={'center'}
					minH={'55'}
					pt={{ base: '2', md: '8' }}
					fontSize={{ base: 'lg', sm: 'xl' }}
					maxW={{ base: '17em', sm: '30em' }}
					fontFamily={'Merriweather'}
					color={'gray.400'}
				>
					<TypeAnimation
						// Same String at the start will only be typed once, initially
						sequence={[
							'Hello.',
							1000,
							'I am Hannah...',
							1000,
							'An animal enthusiast.',
							1000,
							'An Artist.',
							1000,
							'A Dev.',
							2000,
							'I live in New Zealand.',
							2000,
							'...Yes, there are hobbits here.',
							1000,
							'I enjoy telling stories...',
							1000,
							'& using humour,',
							1000,
							'creativity,',
							1000,
							'& digital technology',
							1000,
							'to create meaningful connections.',
							2000,
							'The first step is curiosity.',
						]}
						speed={40} // Custom Speed from 1-99 - Default Speed: 40
						style={{
							textAlign: 'center',
							fontFamily: 'Lora',
							fontWeight: '900',
						}}
						wrapper='Text' // Animation will be rendered as a <span>
						repeat={'none'} // Repeat this Animation Sequence infinitely
						cursor={false}
					/>
				</Text>
			</VStack>
		</>
	)
}
