import React from 'react'
import Reef from '~/components/p5/generative/Reef'
import Silk from '~/components/p5/generative/Silk'
import Spark from '~/components/p5/generative/Spark'
import { silk } from '~/components/p5GalleryPages/details'
import GalleryWrapper from '~/components/p5GalleryPages/GalleryWrapper'

export default function One() {
	return (
		<GalleryWrapper
			title={silk.title}
			column1={silk.column1}
			column2={silk.column2}
			column3={silk.column3}
		>
			<Silk />
		</GalleryWrapper>
	)
}
