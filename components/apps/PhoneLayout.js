import { Grid, GridItem, Heading, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import Breathe from '~/components/base/motion/framerMotion/ButtonFocus'
import StyledNextLink from '~/components/base/StyledNextLink'
import LinkWrapper from '../base/LinkWrapper'

export default function PhoneLayout({
	project,
	href,
	linkTitle,
	num,
	src,
	alt,
	projcetDescription,
}) {
	return (
		<>
			{/* <Grid templateColumns={{ md: 'repeat(2, 1fr)' }}> */}
			<GridItem width={'100%'}>
				<VStack
					width={'100%'}
					_hover={{ boxShadow: 'dark' }}
					flex={'1'}
					py={20}
					borderRadius={'20'}
					boxShadow={'md'}
					bg={'grayAlpha.100'}
					justify={'stretch'}
					align={'stretch'}
					h={'100%'}
				>
					<VStack spacing={10} ustifyItems={'stretch'}>
						<VStack flex={'1'} justifyItems={'stretch'} px={100} spacing={4}>
							<Heading>{project}</Heading>
							{projcetDescription && <Text>{projcetDescription}</Text>}
						</VStack>
						<Spacer />
						{href && (
							<VStack spacing={0}>
								<Heading py={4}>Links</Heading>

								<Breathe>
									<LinkWrapper href={href}>{linkTitle}</LinkWrapper>
								</Breathe>
							</VStack>
						)}
					</VStack>
				</VStack>
			</GridItem>
			<GridItem height={600}>
				<Image
					alt={alt}
					boxShadow={'dark'}
					border={'2px'}
					borderColor={'teal.800'}
					borderRadius={'md'}
					h={'100%'}
					w={'100%'}
					src={src}
					_hover={{ boxShadow: 'dark-lg' }}
				/>
			</GridItem>
			{/* </Grid> */}
		</>
	)
}
