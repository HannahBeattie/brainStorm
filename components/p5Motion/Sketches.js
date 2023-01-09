import { CloseIcon } from '@chakra-ui/icons'
import { Button, CloseButton, HStack, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import FlowField from '~/components/p5Motion/FlowField'
import Grass from '~/components/p5Motion/Grass'
import Perlin from '~/components/p5Motion/Perlin'
import Smoak from '~/components/p5Motion/Smoak'
import Wiggle from '~/components/p5Motion/Wiggle'
import Worms from '~/components/p5Motion/Worms'
import FadeIn from '../animate/FadeIn'

const sketches = [
	{ name: 'FlowField', subtitle: 'bloop', Sketch: FlowField },
	{ name: 'Grass', subtitle: 'bleep', Sketch: Grass },
	{ name: 'Smoak', subtitle: 'bloo', Sketch: Smoak },
	{ name: 'Wiggle', subtitle: 'roop', Sketch: Wiggle },
	{ name: 'Worms', subtitle: 'twoop', Sketch: Worms },
]

export default function Sketches() {
	const [sketch, setSketch] = useState(null)

	return (
		<VStack alignSelf='stretch' alignItems='stretch'>
			<SelectSketchPanel setSketch={setSketch} />
			<SketchForSelection sketch={sketch} />
		</VStack>
	)
}

function SelectSketchPanel({ setSketch }) {
	return (
		<HStack flex={'1'} alignSelf='stretch' alignItems='center' justify={'center'}>
			{sketches.map((item, idx) => (
				<Button
					bg='null'
					fontWeight={'100'}
					fontSize={'lg'}
					_hover={{ bg: 'null' }}
					_active={{ bg: 'null' }}
					size={'sm'}
					key={idx}
					onClick={() => {
						setSketch(item)
					}}
				>
					{item.name}
				</Button>
			))}
		</HStack>
	)
}

function SketchForSelection({ sketch }) {
	const { name, Sketch } = sketch ?? {}
	if (!name || !Sketch) {
		return null
	}
	return (
		<VStack alignSelf='stretch' alignItems='stretch'>
			<Sketch />
			<Text alignSelf='center' py={4}>
				{name}
			</Text>
		</VStack>
	)
}
