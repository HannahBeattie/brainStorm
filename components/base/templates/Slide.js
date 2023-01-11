import {
	Box,
	Button,
	GridItem,
	Heading,
	Image,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import MyLink from '../StyledNextLink'

export default function Slide({
	linkTitle,
	link2,
	idx,
	title,
	sub,
	src,
	alt,
	href,
	buttonText,
	text,
}) {
	const isOdd = idx % 2
	const order = idx * 2

	const buttonProps = {
		_dark: {
			bg: 'gray.900',
			color: 'gray.200',
			_hover: { bg: 'gray.800', color: 'teal.200', curser: 'pointer' },
		},
		bg: 'teal.500',
		color: 'white',
		_hover: { bg: 'gray.800', color: 'teal.500', curser: 'pointer' },
		py: { sm: '4' },
		curser: 'pointer',
		minWidth: '300',
	}
	const textCol = useColorModeValue('white', 'gray.200')
	const bg = useColorModeValue('gray.700', 'gray.700')

	const textInCard = {
		justifyContent: 'center',
		curser: 'pointer',
		alignItems: 'center',
		h: '100%',
		w: '100%',
		spacing: '8',
		boxShadow: '2xl',
		boxShadow: 'dark',
		color: 'white',
		_dark: { color: 'white' },
	}
	const imProps = {
		w: '100%',
		h: '100%',
		maxH: '500',
		fit: 'cover',
		boxShadow: '2xl',
	}
	const [hovered, setHovered] = useState(false)
	return (
		<>
			<GridItem order={{ md: isOdd ? order : order + 1 }} colSpan={2} rowSpan={1}>
				<MyLink href={href}>
					<Image
						borderLeftRadius={{ md: isOdd ? '8' : '0' }}
						borderRightRadius={{ md: !isOdd ? '8' : '0' }}
						{...imProps}
						align='top'
						src={src}
						alt={alt}
					/>
				</MyLink>
			</GridItem>
			<GridItem
				key={`service-${idx}`}
				order={{ md: isOdd ? order + 1 : order }}
				colSpan={{ sm: 1 }}
				rowSpan={{ sm: 1 }}
				bg={bg}
				borderRightRadius={{ md: isOdd ? '8' : '0' }}
				borderLeftRadius={{ md: !isOdd ? '8' : '0' }}
				px={8}
				py={{ sm: 4 }}
			>
				<VStack {...textInCard}>
					<Heading
						fontSize={'3xl'}
						fontFamily={'body'}
						variant='invert'
						textAlign='center'
						color={'white'}
						_dark={{ color: 'white' }}
					>
						{title}
					</Heading>
					<Text color={textCol} textAlign={'center'}>
						{text}
					</Text>
					<Text color={'gray.100'} _dark={{ color: 'gray.200' }}>
						{sub}
					</Text>

					{link2 && (
						<MyLink href={'link2'}>
							<Text as={'span'} color='teal' fontWeight={'500'}>
								{linkTitle}
							</Text>{' '}
						</MyLink>
					)}
					<MyLink href={href}>
						<Button {...buttonProps}>{buttonText}</Button>
					</MyLink>
				</VStack>
			</GridItem>
		</>
	)
}
