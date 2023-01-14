import React from 'react'
import FadeIn from '~/components/base/motion/framerMotion/FadeIn'
import ScrollToTop from '~/components/HOC/ScrollToTop'
import SlideIn from '~/components/HOC/SlideIn'
import WaterCol from '~/components/WaterColors'

export default function Water() {
	return (
		<>
			<FadeIn>
				<ScrollToTop />
				<WaterCol />
			</FadeIn>
		</>
	)
}
