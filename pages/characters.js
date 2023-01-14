import { Grid, GridItem, Heading, Image, Text, VStack } from '@chakra-ui/react'
import Appear from '~/components/base/motion/framerMotion/Appear'
import SlideIn from '~/components/HOC/SlideIn'
import getGridProps from '~/components/hooks/getGridProps'
import { ImageModal, useImageModal } from '~/components/hooks/UseImageModal'
import { motion } from 'framer-motion'
import FadeIn from '~/components/base/motion/framerMotion/FadeIn'
import SpringIn from '~/components/HOC/SpringIn'
import ScrollToTop from '~/components/HOC/ScrollToTop'
export default function Characters() {
	const monstPath = '/monsters'
	const monstCount = 15
	const items = []
	for (let ii = 0; ii < monstCount; ii++) {
		items.push(`${monstPath}/${ii}.${ii === 9 ? 'png' : 'jpeg'}`)
	}
	const { openImageNum, imageModalProps } = useImageModal({ items })
	return (
		<FadeIn>
			<ScrollToTop />
			<VStack flex={'1'} alignSelf='stretch' justify='center' py={8} spacing={8}>
				<Heading>Monsters</Heading>
				<Text>Someday these characters will be part of a playable world.</Text>
				<Appear>
					<Grid
						cursor={{ md: 'pointer' }}
						gap={{ md: 5, base: '4' }}
						maxW='6xl'
						py={{ md: '6', base: '0' }}
						templateColumns={{ md: 'repeat(3, 1fr)' }}
						templateRows={{
							md: `repeat(${Math.floor((monstCount * 2) / 3)}, 300px)`,
						}}
					>
						{items.map((url, idx) => (
							<GridItem key={url} {...getGridProps(idx)} cursor={{ md: 'pointer' }}>
								<Image
									cursor={{ md: 'pointer' }}
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
				</Appear>
				<ImageModal {...imageModalProps} />
			</VStack>
		</FadeIn>
	)
}
