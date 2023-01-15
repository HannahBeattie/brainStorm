import FadeIn from '~/components/HOC/FadeIn'
import ScrollToTop from '~/components/framerMotion/ScrollToTop'
import WaterCol from '~/components/WaterColors'
import PageWrapper from '~/components/HOC/PageWrapper'

export default function Water() {
	return (
		<>
			<PageWrapper>
				<ScrollToTop />
				<WaterCol />
			</PageWrapper>
		</>
	)
}
