import { Button, GridItem, Heading, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import SlideIn from '~/components/HOC/SlideIn'
import Appear from '../motion/framerMotion/Appear'
import IAmHov from '../motion/IAmHov'
import StyledNextLink from '../StyledNextLink'

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
			bg: 'blackAlpha.900',
			color: 'gray.200',
			_hover: { bg: 'blackAlpha.700', color: 'gray.200', curser: 'pointer' },
		},
		bg: 'gray.900',
		color: 'gray.200',
		_hover: { bg: 'gray.800', color: 'white', curser: 'pointer' },
		py: { sm: '4' },
		curser: 'pointer',
		minWidth: '300',
	}

	const bg = useColorModeValue('grayAlpha.300', 'blackAlpha.300')

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
				<StyledNextLink href={href} target={'blank'}>
					<Image
						border={'1px'}
						borderColor={'grayAlpha.200'}
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
				border={'1px'}
				borderColor={'grayAlpha.200'}
				key={`service-${idx}`}
				order={{ md: isOdd ? order + 1 : order }}
				colSpan={{ sm: 1 }}
				rowSpan={{ sm: 1 }}
				bg={bg}
				borderRightRadius={{ md: isOdd ? '8' : '0' }}
				borderLeftRadius={{ md: !isOdd ? '8' : '0' }}
			>
				<VStack {...textInCard} p={{ md: '4' }}>
					<Heading textAlign={'center'} color={useColorModeValue('black', 'teal.400')}>
						{title}
					</Heading>
					<Text textAlign={'center'}>{text}</Text>
					<Text color={'gray.800'} _dark={{ color: 'gray.200' }}>
						{sub}
					</Text>

					{link2 && (
						<StyledNextLink href={'link2'} target={'blank'}>
							<Text as={'span'} color='teal' fontWeight={'500'}>
								{linkTitle}
							</Text>{' '}
						</StyledNextLink>
					)}

					<StyledNextLink href={href} target={'blank'}>
						<Button {...buttonProps}>{buttonText}</Button>
					</StyledNextLink>
				</VStack>
			</GridItem>
		</>
	)
}
