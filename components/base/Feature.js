import {
	Box,
	Button,
	Center,
	Heading,
	Image,
	Spacer,
	Stack,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'

import MyLink from '../MyLink'

export default function Feature({ alt, heading, text, details, label, href, buttonText, src }) {
	const bg = useColorModeValue('gray.400', 'white')
	const textCol = useColorModeValue('white', 'black')
	const buttonProps = {
		bg: useColorModeValue('whiteAlpha.200', 'gray.900'),
		color: 'gray.200',
		_hover: { bg: 'pink.00' },
		py: '4',
	}
	const headingCol = useColorModeValue('pink.500', 'white')

	return (
		<VStack
			w='full'
			h='full'
			bg={bg}
			boxShadow={'2xl'}
			rounded={'md'}
			overflow={'hidden'}
			p={'4'}
		>
			<Image boxShadow={'sm'} src={src} alt={alt} layout={'fill'} />

			<Stack spacing={'4'} cursor={'pointer'} flex={'1'} p={4}>
				<Text
					color={'grayAlpha.500'}
					textTransform={'uppercase'}
					fontWeight={800}
					fontSize={'sm'}
					letterSpacing={1.1}
				>
					{label}
				</Text>
				<Spacer />
				<Heading color={headingCol} fontSize={'2xl'} fontFamily={'body'}>
					{heading}
				</Heading>

				<Box color={textCol} borderRadius={'lg'}>
					{details}
				</Box>

				<Text color={'gray.500'}>{text}</Text>
				<Spacer />
				{buttonText && (
					<MyLink href={href}>
						<Button flex={'1'} layout={'flex'} {...buttonProps}>
							{buttonText}
						</Button>
					</MyLink>
				)}
			</Stack>
		</VStack>
	)
}
