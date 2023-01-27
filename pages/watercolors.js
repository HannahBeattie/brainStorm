import ScrollToTop from '~/components/pages/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import WaterColModel from '~/components/pages/waterColor/WaterColModel'
import WCIntro from '~/components/pages/waterColor/WCIntro'

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
