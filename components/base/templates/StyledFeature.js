import {
	Box,
	Button,
	Heading,
	Image,
	Spacer,
	Stack,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'

import MyLink from '../StyledNextLink'

export default function StyledFeature({
	alt,
	heading,
	text,
	details,
	label,
	href,
	buttonText,
	src,
}) {
	const bg = useColorModeValue('gray.600', 'gray.700')
	const textCol = useColorModeValue('white', 'white')
	const buttonProps = {
		_dark: {
			bg: 'gray.900',
			color: 'gray.200',
			_hover: { bg: 'gray.800', color: 'teal.200', curser: 'pointer' },
		},
		bg: 'teal.500',
		color: 'white',
		_hover: { bg: 'gray.700', color: 'teal.500', curser: 'pointer' },
		py: '4',
	}
	const headingCol = useColorModeValue('white', 'white')

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

				<Text>{text}</Text>
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
