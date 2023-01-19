import { Grid, GridItem, Image } from '@chakra-ui/react'
import IntroCard from '~/components/base/templates/IntroCard'
import getGridProps from '~/components/hooks/getGridProps'
import { flowFields } from './staticDetails'

export default function Flowfields() {
	let items = flowFields.items
	return (
		<>
			<IntroCard heading={flowFields.title}>{flowFields.intro}</IntroCard>
			<Grid
				gap={{ md: 5, base: '4' }}
				maxW='6xl'
				py={{ md: '6', base: '0' }}
				templateColumns={{ md: 'repeat(3, 1fr)' }}
				templateRows={{
					md: `repeat(${Math.floor((items.length * 2) / 3)}, 300px)`,
				}}
			>
				{items.map((items, idx) => (
					<GridItem key={idx} {...getGridProps(idx)}>
						<Image
							borderRadius={'md'}
							w='100%'
							boxShadow={'dark'}
							h='100%'
							flex='1'
							alt={`An image of a genrative flowfield`}
							src={items.src}
							fit='cover'
						/>
					</GridItem>
				))}
			</Grid>
		</>
	)
}
