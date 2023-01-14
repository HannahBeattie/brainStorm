import { Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import FlowField from '~/components/p5/moving/FlowField'
import Grass from '~/components/p5/moving/Grass'
import Smoak from '~/components/p5/moving/Smoak'
import Wiggle from '~/components/p5/moving/Wiggle'
import Worms from '~/components/p5/moving/Worms'
import World from '../World'

export default function SketchTabs() {
	const [selected, setSelected] = useState(null)
	const sketches = [
		{ name: 'FlowField', subtitle: 'bloop', Sketch: <FlowField /> },
		{ name: 'Grass', subtitle: 'bleep', Sketch: <Grass /> },
		{ name: 'Smoak', subtitle: 'bloo', Sketch: <Smoak /> },
		{ name: 'Wiggle', subtitle: 'roop', Sketch: <Wiggle /> },
		{ name: 'Worms', subtitle: 'twoop', Sketch: <Worms /> },
		{ name: 'World', subtitle: 'twoop', Sketch: <World /> },
	]
	const ani = [<FlowField />, <Grass />, <Smoak />, <Wiggle />, <Worms />, <World />]

	return (
		<>
			<Tabs
				display={{ base: 'none', md: 'auto' }}
				overflow={'hidden'}
				size={{ md: 'md', sm: 'sm' }}
				justify={'stretch'}
				flex={'1'}
				alignSelf='stretch'
				isFitted
			>
				<TabList flex={'1'} alignSelf='stretch' alignItems='center' justify={'center'}>
					{sketches.map((item, idx) => (
						<Tab
							_active={{ color: 'blue' }}
							textTransform={'uppercase'}
							letterSpacing={{ md: '0.1em' }}
							fontSize={{ base: '10', md: 'lg' }}
							key={`tab-${idx}`}
						>
							{item.name}
						</Tab>
					))}
				</TabList>
				<TabPanels
					maxW={'100vw'}
					flex={'1'}
					alignSelf='stretch'
					alignItems='stretch'
					overflow={'hidden'}
				>
					{ani.map((item, idx) => (
						<TabPanel
							maxW={'100vw'}
							flex={'1'}
							alignSelf='stretch'
							alignItems='stretch'
							overflow={'hidden'}
							key={`panel-${idx}`}
						>
							{item}
						</TabPanel>
					))}
				</TabPanels>
			</Tabs>
			<VStack>
				{sketches.map((item, idx) => (
					<VStack key={`tab-${idx}`}>
						<Text
							_active={{ color: 'blue' }}
							textTransform={'uppercase'}
							letterSpacing={{ md: '0.1em' }}
							fontSize={{ base: '10', md: 'lg' }}
							onClick={() => setSelected(item.name)}
							tabIndex={0}
							color={item.name === selected ? 'red' : 'blue'}
						>
							{item.name}
						</Text>
						{item.name === selected ? item.Sketch : 'null'}
					</VStack>
				))}
			</VStack>
		</>
	)
}
