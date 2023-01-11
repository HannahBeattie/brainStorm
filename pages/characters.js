import { Grid, GridItem, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import FadeIn from '~/components/base/motion/framerMotion/FadeIn'
import getGridProps from '~/components/hooks/getGridProps'
import { ImageModal, useImageModal } from '~/components/hooks/UseImageModal'

export default function Gallery() {
	const monstPath = '/monsters'
	const monstCount = 15
	const items = []
	for (let ii = 0; ii < monstCount; ii++) {
		items.push(`${monstPath}/${ii}.${ii === 9 ? 'png' : 'jpeg'}`)
	}
	const { openImageNum, imageModalProps } = useImageModal({ items })
	return (
		<FadeIn>
			<VStack
				alignItems='center'
				px={{ base: 4, md: 10 }}
				pt={{ base: 4, md: 8 }}
				spacing={4}
			>
				<Heading>Monsters</Heading>
				<Text>Someday these characters will be part of a playable world.</Text>

				<Grid
					gap={{ md: 5, base: '4' }}
					maxW='6xl'
					py={{ md: '6', base: '0' }}
					templateColumns={{ md: 'repeat(3, 1fr)' }}
					templateRows={{
						md: `repeat(${Math.floor((monstCount * 2) / 3)}, 300px)`,
					}}
				>
					{items.map((url, idx) => (
						<GridItem key={url} {...getGridProps(idx)}>
							<Image
								borderRadius={'md'}
								w='100%'
								cursor={{ md: 'pointer' }}
								boxShadow={'dark'}
								h='100%'
								flex='1'
								alt={'3d character drawing'}
								src={url}
								fit='cover'
								onClick={() => openImageNum(idx)}
							/>
						</GridItem>
					))}
				</Grid>

				<ImageModal {...imageModalProps} />
			</VStack>
		</FadeIn>
	)
}
