import {
	Box,
	Button,
	Center,
	Heading,
	Image,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'

import MyLink from '../MyLink'

export default function Feature({ alt, heading, text, details, label, href, buttonText, src }) {
	const bg = useColorModeValue('gray.900', 'white')
	const textCol = useColorModeValue('white', 'black')
	const buttonProps = {
		bg: useColorModeValue('whiteAlpha.200', 'gray.900'),
		color: 'gray.200',
		_hover: { bg: 'pink.00' },
		py: '4',
	}
	const headingCol = useColorModeValue('pink.500', 'white')

	return (
		<Center>
			<Box
				maxW={{ md: '400px' }}
				w={'full'}
				bg={bg}
				boxShadow={'2xl'}
				rounded={'md'}
				p={6}
				overflow={'hidden'}
			>
				<Box mt={-6} mb={6} mx={-6} pos={'relative'}>
					<Image src={src} alt={alt} layout={'fill'} />
				</Box>
				<Stack spacing={'4'} cursor={'pointer'}>
					<Text
						color={'grayAlpha.500'}
						textTransform={'uppercase'}
						fontWeight={800}
						fontSize={'sm'}
						letterSpacing={1.1}
					>
						{label}
					</Text>

					<Heading color={headingCol} fontSize={'2xl'} fontFamily={'body'}>
						{heading}
					</Heading>

					<Box p={3} color={textCol} bg={'grayAlpha.100'} borderRadius={'lg'}>
						{details}
					</Box>

					<Text color={'gray.500'}>{text}</Text>
					{buttonText && (
						<MyLink href={href}>
							<Button flex={'1'} layout={'flex'} {...buttonProps}>
								{buttonText}
							</Button>
						</MyLink>
					)}
				</Stack>
			</Box>
		</Center>
	)
}
