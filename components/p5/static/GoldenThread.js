import { Grid, GridItem, Image } from '@chakra-ui/react'
import IntroCard from '~/components/base/templates/IntroCard'
import getGridProps from '~/components/hooks/getGridProps'
import { goldenThread } from './staticDetails'

export default function GoldenThread() {
	const staticPath = '/static'
	const staticCount = 9
	const items = []
	for (let ii = 0; ii < staticCount; ii++) {
		items.push(`${staticPath}/${ii}.jpeg`)
	}

	return (
		<>
			<IntroCard heading={goldenThread.title}>{goldenThread.intro}</IntroCard>

			<Grid
				gap={{ md: 5, base: '4' }}
				maxW='6xl'
				py={{ md: '6', base: '0' }}
				templateColumns={{ md: 'repeat(3, 1fr)' }}
				templateRows={{
					md: `repeat(${Math.floor((staticCount * 2) / 3)}, 300px)`,
				}}
			>
				{items.map((url, idx) => (
					<GridItem key={url} {...getGridProps(idx)}>
						<Image
							borderRadius={'md'}
							w='100%'
							boxShadow={'dark'}
							h='100%'
							flex='1'
							alt={`index ${idx}`}
							src={url}
							fit='cover'
						/>
					</GridItem>
				))}
			</Grid>
		</>
	)
}
