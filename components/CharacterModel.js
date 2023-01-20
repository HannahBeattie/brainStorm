import { Grid, GridItem, Image } from '@chakra-ui/react'
import Appear from '~/components/framerMotion/Appear'
import getGridProps from '~/components/hooks/getGridProps'
import { useImageModal } from './hooks/useImageModal'

export default function CharacterModel() {
	const monstPath = '/monsters'
	const monstCount = 15
	const items = []
	for (let ii = 0; ii < monstCount; ii++) {
		items.push(`${monstPath}/${ii}.${ii === 9 ? 'png' : 'jpeg'}`)
	}
	const { openImageNum, imageModalProps } = useImageModal({ items })
	return (
		<>
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
		</>
	)
}
