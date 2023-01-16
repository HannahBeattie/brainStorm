import StyledNextLink from '~/components/base/StyledNextLink'
import ScrollProgress from '~/components/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import First from '~/components/p5/static/First'
import Seccond from '~/components/p5/static/Seccond'
import Third from '~/components/p5/static/Third'

export default function Static() {
	return (
		<PageWrapper>
			<ScrollToTop />
			<ScrollProgress />
			<First />
			<Seccond />
			<Third />
			<StyledNextLink href={'/p5Animations'}>
				<i>Back to animation page</i>
			</StyledNextLink>
		</PageWrapper>
	)
}
