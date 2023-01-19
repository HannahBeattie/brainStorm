import Electric from '~/components/p5/generative/Electric'
import Geo from '~/components/p5/generative/Geo'
import { geo } from '~/components/p5GalleryPages/details'
import GalleryWrapper from '~/components/p5GalleryPages/GalleryWrapper'

export default function GenGeo() {
	return (
		<GalleryWrapper
			title={geo.title}
			column1={geo.column1}
			column2={geo.column2}
			column3={geo.column3}
		>
			<Geo aria-label='A geometrical animation, with many twirls' />
		</GalleryWrapper>
	)
}
