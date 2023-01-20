import Silk from '~/components/p5/generative/Silk'
import { silk } from '~/components/p5GalleryPages/Details'
import GalleryWrapper from '~/components/p5GalleryPages/GalleryWrapper'

export default function GenSilk() {
	return (
		<GalleryWrapper
			title={silk.title}
			column1={silk.column1}
			column2={silk.column2}
			column3={silk.column3}
		>
			<Silk aria-label='An animation of a wave-like flowfield' />
		</GalleryWrapper>
	)
}
