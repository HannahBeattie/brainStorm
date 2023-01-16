import ScrollProgress from '~/components/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import HelloWorld from '~/components/landingPage/HelloWorld'
import Intro from '~/components/landingPage/Intro'
import VineWorld from '~/components/p5/hero/VineWorld'

export default function Home() {
	return (
		<PageWrapper>
			<ScrollToTop />
			<ScrollProgress />
			<HelloWorld />
			<VineWorld />
			<Intro />
		</PageWrapper>
	)
}

Home.noFooter = true
