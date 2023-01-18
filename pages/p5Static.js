import LinkWrapper from '~/components/base/LinkWrapper'
import ScrollProgress from '~/components/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import Flowfields from '~/components/p5/static/FlowFields'
import GoldenThread from '~/components/p5/static/GoldenThread'
import ObjectClass from '~/components/p5/static/ObjectClass'

export default function P5Static() {
	return (
		<PageWrapper>
			<ScrollToTop />
			<ScrollProgress />
			<GoldenThread />
			<Flowfields />
			<ObjectClass />
			<LinkWrapper href={'/p5Index'}>Back to animation page</LinkWrapper>
		</PageWrapper>
	)
}
