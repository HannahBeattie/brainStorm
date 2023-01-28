import { Box, ColorModeScript, VStack } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import FadeIn from '~/components/HOC/FadeIn'
import { AnimatePresence, motion } from 'framer-motion'
import { theme } from '~/styles/theme'

// Override default Next document to enforce overflowX=hidden on body element
// See: https://nextjs.org/docs/advanced-features/custom-document
export default function Document() {
	return (
		<Html>
			<Head>
				<link rel='shortcut icon' href='/static/halo.png' />
			</Head>

			<VStack
				flex={'1'}
				alignItems={'stretch'}
				as='body'
				minW='100vw'
				maxW={'100vw'}
				spacing='0'
				p={'0'}
			>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Main />
				<NextScript />
			</VStack>
		</Html>
	)
}
