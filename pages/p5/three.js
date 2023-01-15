import React from 'react'
import Electric from '~/components/p5/generative/Electric'
import Reef from '~/components/p5/generative/Reef'
import { electric } from '~/components/p5GalleryPages/Details'
import GalleryWrapper from '~/components/p5GalleryPages/GalleryWrapper'

export default function Three() {
	return (
		<GalleryWrapper
			title={electric.title}
			column1={electric.column1}
			column2={electric.column2}
			column3={electric.column3}
		>
			<Electric />
		</GalleryWrapper>
	)
}
