import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
	fonts: {
		body: 'Roboto, sans-serif',
		heading: 'Poppins',
	},
	colors: {
		grayAlpha: {
			100: '#8881',
			200: '#8882',
			300: '#8884',
			400: '#8886',
			500: '#8888',
			600: '#8889',
			700: '#888b',
			800: '#888d',
			900: '#888f',
		},
	},
	components: {
		Heading: {
			baseStyle: (props) => ({
				fontFamily: 'heading',
				fontWeight: '300',
			}),
			variants: {
				invert: {
					color: 'gray.300',

					_dark: {
						color: 'black',
					},
				},
			},
		},
	},
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: false,
	},

	styles: {
		global: {
			body: {
				bg: 'grayAlpha.200',
				_dark: {
					bg: 'gray.800',
				},
				// Make mobile tap highlight light-gray instead of blue-ish
				WebkitTapHighlightColor: 'rgba(128,128,128,0.2)', // '-webkit-tap-highlight-color'
			},
			// styles for the `a`
		},
	},
})
