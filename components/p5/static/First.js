import { Container, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import getGridProps from '~/components/hooks/getGridProps'
import MyLink from '~/components/base/StyledNextLink'

export default function First() {
	const staticPath = '/static'
	const staticCount = 9
	const items = []
	for (let ii = 0; ii < staticCount; ii++) {
		items.push(`${staticPath}/${ii}.jpeg`)
	}

	return (
		<>
			<Container>
				<Heading>Golden thread</Heading>
				<Text>
					Inspired by a flow field tutorial by{' '}
					<MyLink href='https://bit.ly/3Zihhrd' fontStyle={'italic'} fontWeight={'bold'}>
						Colorful coding
					</MyLink>
					, I began exploring the ways in which random variables could be used to
					manipulated the fields into resembling organic forms.
				</Text>
				<Text>
					As a watercolor painter, one of my favorite techniques is begining a painting
					with a random spatter of water and color and seeing which shapes emerge, then
					adding details and tweaks to allow others to see those shapes.
				</Text>
				<Text>
					My incling was towards trees and feathers, which to me mimicked the feel of
					intricately woven persion rugs and early japanese woodblock prints.
				</Text>
				<Text>
					To tease out these images, I layered flow fields over one-another, with the
					bottom layers having a high level of transperancy, with subsequent layers having
					less opacity.
				</Text>
				<Text>
					I tweaked the width of the lines and and volume of the noise to create
					pointalist-style 'stitches'.
				</Text>

				<Text>
					Finally, I added a subtle color gradient behind the noise-fields, that would act
					as an accent color and bring out areas of light and tone that was layered on
					top.
				</Text>
			</Container>

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
