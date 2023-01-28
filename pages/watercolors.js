import ScrollToTop from '~/components/pages/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import WaterColModel from '~/components/pages/waterColor/WaterColModel'
import WCIntro from '~/components/pages/waterColor/WCIntro'
import Head from 'next/head'

export default function Water() {
	return (
		<>
			<Head>
				<title>Watercolors</title>
				<meta name='description' content='Portfolio website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<PageWrapper>
				<ScrollToTop />
				<WCIntro />
				<WaterColModel />
			</PageWrapper>
		</>
	)
}
