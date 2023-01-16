import { Container, Grid, GridItem, Image, Text, Heading } from '@chakra-ui/react'
import getGridProps from '~/components/hooks/getGridProps'
import { ImageModal, useImageModal } from '~/components/hooks/UseImageModal'
import StyledNextLink from '~/components/base/StyledNextLink'

export default function Third() {
	let items = [
		{
			src: '/static/14.jpeg',
		},
		{
			src: '/static/15.jpeg',
		},
		{
			src: '/static/16.jpeg',
		},
		{
			src: '/static/17.jpeg',
		},
		{
			src: '/static/18.jpeg',
		},
		{
			src: '/static/19.jpeg',
		},
	]
	return (
		<>
			<Container>
				<Heading>Tests: Flow fields 2</Heading>
				<Text>
					These images represent further experements with flow fields. I specifically
					wanted to play with the idea of making veins and muscles.
				</Text>
				<Text>
					As a child, I used to draw muscles, veins and DNA sequences, to practice my
					technical drawing. I have always enjoyed the intricate mix of chaos and order in
					the micro view of the human body.
				</Text>
				<Text>
					One of the first things I noticed about my flow field code, is that the
					resulting sequences resembled veins or hair.
				</Text>

				<Text>
					To lean into this, I played with gradient backgrounds and layering, with thin,
					intricate semi-transparent white and light-pink lines causing the 'veins' to
					look three demensional and somewhat slick.
				</Text>
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
		</>
	)
}
