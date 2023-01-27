import Spark from '~/components/pages/p5/generative/Spark'
import { spark } from '~/components/pages/p5GalleryPages/Details'
import GalleryWrapper from '~/components/pages/p5GalleryPages/GalleryWrapper'

export default function GenSpark() {
	return (
		<GalleryWrapper
			title={spark.title}
			column1={spark.column1}
			column2={spark.column2}
			column3={spark.column3}
		>
			<Spark aria-label='An animation of a wave-like flowfield' />
		</GalleryWrapper>
	)
}
