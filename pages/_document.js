import { ColorModeScript, VStack } from '@chakra-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'
import { theme } from '~/styles/theme'

// Override default Next document to enforce overflowX=hidden on body element
// See: https://nextjs.org/docs/advanced-features/custom-document
export default function Document() {
	return (
		<Html>
			<Head>
				<link rel='icon' href='/fav.png' />
			</Head>

			<VStack
				flex={'1'}
				alignItems={'stretch'}
				as='body'
				minW='100vw'
				maxW={'100vw'}
				spacing='0'
				p={'0'}
				overflowX={'hidden'}
			>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Main />
				<NextScript />
			</VStack>
		</Html>
	)
}
