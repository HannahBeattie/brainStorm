import Spark from '~/components/p5/generative/Spark'
import { spark } from '~/components/p5GalleryPages/details'
import GalleryWrapper from '~/components/p5GalleryPages/GalleryWrapper'

export default function GenSpark() {
	return (
		<GalleryWrapper
			title={spark.title}
			column1={spark.column1}
			column2={spark.column2}
			column3={spark.column3}
		>
			<Spark />
		</GalleryWrapper>
	)
}
