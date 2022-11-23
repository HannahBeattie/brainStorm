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
	const bg = useColorModeValue('white', 'white')
	const textCol = useColorModeValue('gray.700', 'black')
	const buttonProps = {
		bg: 'gray.900',
		color: 'gray.200',
		_hover: { bg: 'cyan.900' },
		py: '4',
	}

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
					<Image pt={2} px={4} src={src} alt={alt} layout={'fill'} />
				</Box>
				<Stack spacing={'4'} cursor={'pointer'}>
					<Text
						color={'teal.400'}
						textTransform={'uppercase'}
						fontWeight={800}
						fontSize={'sm'}
						letterSpacing={1.1}
					>
						{label}
					</Text>

					<Heading color={textCol} fontSize={'2xl'} fontFamily={'body'}>
						{heading}
					</Heading>

					<Box p={3} color={'black'}>
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
