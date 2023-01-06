import { Container, Grid, GridItem, Image, Text, Heading, VStack } from '@chakra-ui/react'
import getGridProps from '~/components/base/getGridProps'
import { ImageModal, useImageModal } from '~/components/hooks/UseImageModal'
import MyLink from '~/components/MyLink'

export default function More() {
	let items = [
		{
			src: '/waterCol/1.JPG',
		},
	]
	return (
		<VStack>
			<Heading>More Hobbies</Heading>
			<Container>
				<Text>One of my hobbies for the last few years has been water color painting.</Text>
			</Container>

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
							alt={`index ${idx}`}
							src={items.src}
							fit='cover'
						/>
					</GridItem>
				))}
			</Grid>
		</VStack>
	)
}
