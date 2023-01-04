import { ChakraProvider, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import LightMode from '~/components/nav/LightMode'
import MyNav from '~/components/nav/MyNav'
import Nav from '~/components/refact/Nav'
import { theme } from '~/styles/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<title>Brain Storm</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<VStack as='main' spacing='0' flex={'1'} justify={'stretch'} minH={'100vh'} w={'100vw'}>
				<MyNav />
				{/* <LightMode /> */}
				<Component {...pageProps} />
			</VStack>
		</ChakraProvider>
	)
}

export default MyApp
