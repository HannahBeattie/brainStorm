import React from 'react'
import FlowField from '~/components/p5Motion/FlowField'
import Grass from '~/components/p5Motion/Grass'
import Perlin from '~/components/p5Motion/Perlin'
import Smoak from '~/components/p5Motion/Smoak'
import Wiggle from '~/components/p5Motion/Wiggle'
import Worms from '~/components/p5Motion/Worms'
import FadeIn from '../animate/FadeIn'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function SketchTabs() {
	const sketches = [
		{ name: 'FlowField', subtitle: 'bloop', Sketch: <FlowField /> },
		{ name: 'Grass', subtitle: 'bleep', Sketch: Grass },
		{ name: 'Smoak', subtitle: 'bloo', Sketch: Smoak },
		{ name: 'Wiggle', subtitle: 'roop', Sketch: Wiggle },
		{ name: 'Worms', subtitle: 'twoop', Sketch: Worms },
	]
	const ani = [<FlowField />, <Grass />, <Smoak />, <Wiggle />, <Worms />]

	return (
		<>
			<Tabs
				size='md'
				variant='enclosed'
				justify={'stretch'}
				flex={'1'}
				alignSelf='stretch'
				isFitted
				colorScheme={'teal'}
			>
				<TabList flex={'1'} alignSelf='stretch' alignItems='center' justify={'center'}>
					{sketches.map((item, idx) => (
						<Tab key={`tab-${idx}`}>{item.name}</Tab>
					))}
				</TabList>
				<TabPanels flex={'1'} alignSelf='stretch' alignItems='stretch'>
					{ani.map((item, idx) => (
						<TabPanel key={`panel-${idx}`}>{item}</TabPanel>
					))}
				</TabPanels>
			</Tabs>
		</>
	)
}
