import { Box, ChakraProvider, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import Nav from '~/components/nav/Nav'
import LightMode from '~/components/nav/ToggleMode'
import { theme } from '~/styles/theme'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<title>Brain Storm</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<VStack as='main' spacing='0' flex={'1'} justify={'stretch'} minH={'100vh'} w={'100vw'}>
				<Nav />
				<LightMode />
				<Component {...pageProps} />
			</VStack>
		</ChakraProvider>
	)
}
