import { Button, GridItem, Heading, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import ButtonFocus from '~/components/pages/framerMotion/ButtonFocus'
import StyledNextLink from '../StyledNextLink'

export default function Slide({
	linkTitle,
	link2,
	idx,
	title,
	sub,
	src,
	alt,
	href2,
	href,
	link2Title,
	buttonText,
	text,
}) {
	const isOdd = idx % 2
	const order = idx * 2

	const buttonProps = {
		_dark: {
			bg: 'whiteAlpha.200',
			color: 'whiteAlpha.900',
			_hover: { bg: 'whiteAlpha.300', color: 'gray.200', curser: 'pointer' },
		},
		bg: 'whiteAlpha.200',
		color: 'gray.200',
		_hover: { bg: 'whiteAlpha.300', color: 'white', curser: 'pointer' },
		py: { sm: '4' },
		curser: 'pointer',
		minWidth: '300',
	}

	const bg = useColorModeValue('extraDark', 'extraDark')

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
				<StyledNextLink href={href} target={'blank'}>
					<Image
						borderLeftRadius={{ md: isOdd ? '8' : '0' }}
						borderRightRadius={{ md: !isOdd ? '8' : '0' }}
						{...imProps}
						align='top'
						src={src}
						alt={alt}
					/>
				</StyledNextLink>
			</GridItem>
			<GridItem
				py={{ base: 4, md: 0 }}
				key={`service-${idx}`}
				order={{ md: isOdd ? order + 1 : order }}
				colSpan={{ sm: 1 }}
				rowSpan={{ sm: 1 }}
				bg={bg}
				borderRightRadius={{ md: isOdd ? '8' : '0' }}
				borderLeftRadius={{ md: !isOdd ? '8' : '0' }}
			>
				<VStack {...textInCard} p={{ md: '4' }}>
					<Heading textAlign={'center'}>{title}</Heading>
					<Text textAlign={'center'}>{text}</Text>
					<Text>{sub}</Text>

					{href2 && (
						<ButtonFocus>
							<StyledNextLink href={href2} target={'blank'}>
								<Text as={'span'} color='teal.400' fontWeight={'500'}>
									{link2Title}
								</Text>{' '}
							</StyledNextLink>
						</ButtonFocus>
					)}
					<ButtonFocus>
						<StyledNextLink href={href} target={'blank'}>
							<Button {...buttonProps}>{buttonText}</Button>
						</StyledNextLink>
					</ButtonFocus>
				</VStack>
			</GridItem>
		</>
	)
}
