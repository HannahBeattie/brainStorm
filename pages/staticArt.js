import { useScroll } from 'framer-motion'
import StyledNextLink from '~/components/base/StyledNextLink'
import Scroll from '~/components/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import First from '~/components/p5/static/First'
import Seccond from '~/components/p5/static/Seccond'
import Third from '~/components/p5/static/Third'

export default function Static() {
	const { scrollYProgress } = useScroll()
	return (
		<PageWrapper>
			<ScrollToTop />
			<Scroll />
			<First />
			<Seccond />
			<Third />
			<StyledNextLink href={'/p5Animations'}>
				<i>Back to animation page</i>
			</StyledNextLink>
		</PageWrapper>
	)
}
