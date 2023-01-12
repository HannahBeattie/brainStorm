import React from 'react'
import FadeIn from '~/components/base/motion/framerMotion/FadeIn'
import SlideIn from '~/components/HOC/SlideIn'
import WaterCol from '~/components/WaterColors'

export default function Water() {
	return (
		<>
			<FadeIn>
				<WaterCol />
			</FadeIn>
		</>
	)
}
