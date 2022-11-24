import { Box, ColorModeScript, VStack } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import FadeIn from '~/components/animate/FadeIn'
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

			<VStack as='body' w='100vw' overflowX='hidden'>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Main />
				<NextScript />
			</VStack>
		</Html>
	)
}
