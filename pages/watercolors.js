import ScrollToTop from '~/components/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import WaterColModel from '~/components/WaterColModel'
import WCIntro from '~/components/WCIntro'

export default function Water() {
	return (
		<>
			<PageWrapper>
				<ScrollToTop />
				<WCIntro />
				<WaterColModel />
			</PageWrapper>
		</>
	)
}
