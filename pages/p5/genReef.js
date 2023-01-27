import Reef from '~/components/pages/p5/generative/Reef'
import { reef } from '~/components/pages/p5GalleryPages/Details'
import GalleryWrapper from '~/components/pages/p5GalleryPages/GalleryWrapper'

export default function GenReef() {
	return (
		<GalleryWrapper
			title={reef.title}
			column1={reef.column1}
			column2={reef.column2}
			column3={reef.column3}
		>
			<Reef aria-label='An animation of a wave-like flowfield that follows the mouse' />
		</GalleryWrapper>
	)
}
