import Electric from '~/components/pages/p5/generative/Electric'
import { electric } from '~/components/pages/p5GalleryPages/Details'

import GalleryWrapper from '~/components/pages/p5GalleryPages/GalleryWrapper'

export default function GenElec() {
	return (
		<GalleryWrapper
			title={electric.title}
			column1={electric.column1}
			column2={electric.column2}
			column3={electric.column3}
		>
			<Electric aria-label='An animation of a wave-like flowfield' />
		</GalleryWrapper>
	)
}
