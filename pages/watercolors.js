import ScrollToTop from '~/components/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import WaterColModel from '~/components/waterColor/WaterColModel'
import WCIntro from '~/components/waterColor/WCIntro'

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
