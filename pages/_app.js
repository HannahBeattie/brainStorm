import { ChakraProvider, VStack } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import { Router } from 'next/router'
import Footer from '~/components/nav/Footer'
import Nav from '~/components/nav/Nav'
import ToggleMode from '~/components/nav/ToggleMode'
import { theme } from '~/styles/theme'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<title>Brain Storm</title>
				<meta name='description' content='Portfolio website' />
				<link rel='icon' href='/fav.png' />
			</Head>
			<VStack as='main' spacing='0' flex={'1'} alignItems='stretch' minH='100vh'>
				<Nav />
				<AnimatePresence mode='wait' initial={false}>
					<VStack flex='1' alignItems='stretch'>
						<Component {...pageProps} key={Router.asPath} />
					</VStack>
				</AnimatePresence>
				<ToggleMode />
				{!Component.noFooter && <Footer />}
			</VStack>
		</ChakraProvider>
	)
}
