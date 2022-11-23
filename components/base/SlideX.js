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
import MyLink from '../MyLink'

export default function SlideX({ idx, title, sub, src, alt, href, buttonText, text }) {
	const isOdd = idx % 2
	const order = idx * 2

	const buttonProps = {
		_dark: {
			bg: 'pink.500',
			color: 'gray.200',
			_hover: { bg: 'gray.800', color: 'red.500', curser: 'pointer' },
		},
		bg: 'gray.200',
		color: 'gray.800',
		_hover: { bg: 'gray.700', color: 'teal.500', curser: 'pointer' },
		py: { sm: '4' },
		curser: 'pointer',
		minWidth: '180',
	}
	const textCol = useColorModeValue('white', 'white')

	const bg = useColorModeValue('gray.900', 'gray.100')

	const textInCard = {
		justifyContent: 'center',
		curser: 'pointer',
		alignItems: 'center',
		h: '100%',
		w: '100%',
		spacing: '8',
		boxShadow: '2xl',
		boxShadow: 'dark',
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
			>
				<MyLink href={href}>
					<VStack {...textInCard}>
						<Heading
							fontSize={'3xl'}
							fontFamily={'body'}
							variant='invert'
							textAlign='center'
						>
							{title}
						</Heading>
						<Text color={textCol}>{text}</Text>
						<Text color={'gray.500'}>{sub}</Text>
						<Button {...buttonProps}>{buttonText}</Button>
					</VStack>
				</MyLink>
			</GridItem>
		</>
	)
}
