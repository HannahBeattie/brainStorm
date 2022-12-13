import { Heading, HStack, Icon, Stack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { GiBleedingEye, GiBubbles, GiErlenmeyer } from 'react-icons/gi'
import { SlGhost } from 'react-icons/sl'

import { motion } from 'framer-motion'
import { CgSmileNoMouth } from 'react-icons/cg'
import { RiEyeCloseLine } from 'react-icons/ri'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
	const bigFont = {
		fontSize: { sm: '9xl', base: '7xl' },
		fontWeight: '900',
	}

	const iconProps = {
		fontSize: { base: '7xl', sm: '8xl' },
	}

	return (
		<VStack flex={'1'} spacing={'0'} alignItems={'stretch'} py={{ base: '16', sm: '16' }}>
			<Head>
				<title>Home</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Stack
				align={'center'}
				justify={'center'}
				flexDirectioN={{ base: 'column', sm: 'row' }}
			>
				<HStack>
					<Heading fontFamily={'Merriweather'} {...bigFont}>
						Hell
					</Heading>

					<motion.div
						animate={{
							rotate: [0, 10, -20, 0],
						}}
						transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
					>
						<Icon {...iconProps} as={useColorModeValue(GiErlenmeyer, SlGhost)} />
					</motion.div>
				</HStack>
				<HStack>
					<Heading fontFamily={'Merriweather'} {...bigFont}>
						W
					</Heading>
					<motion.div
						animate={{
							rotate: [0, 30, -30, 90, -90, 360, 0],
							// color: ['#36CB6A', '#AF36CB', '#367DCB', '#F2D80A'],
						}}
						transition={{ duration: 60, repeat: Infinity, ease: 'easeInOut' }}
					>
						<Icon {...iconProps} as={useColorModeValue(GiBubbles, CgSmileNoMouth)} />
					</motion.div>
					<Heading fontFamily={'Merriweather'} {...bigFont}>
						rld
					</Heading>
				</HStack>
			</Stack>
			<Text
				as={'div'}
				textAlign={'center'}
				minH={'55'}
				pt={{ base: '2' }}
				fontSize={{ base: 'lg', sm: '3xl' }}
				maxW={{ base: '17em', sm: '30em' }}
			>
				<TypeAnimation
					// Same String at the start will only be typed once, initially
					sequence={[
						'I am Hannah.',
						1000,
						'An animal enthusiast.',
						1000,
						'An Artist.',
						1000,
						'A Dev.',
						2000,
						'I live in New Zealand.',
						2000,
						'...Yes, there are hobbits here.',
						1000,
						'I enjoy telling stories...',
						1000,
						'& using humour,',
						1000,
						'creativity,',
						1000,
						'& digital technology',
						1000,
						'to create meaningful connections.',
						2000,
						'The first step is curiosity.',
					]}
					speed={40} // Custom Speed from 1-99 - Default Speed: 40
					style={{
						textAlign: 'center',
						fontFamily: 'Lora',
						fontWeight: '900',
					}}
					wrapper='Text' // Animation will be rendered as a <span>
					repeat={'none'} // Repeat this Animation Sequence infinitely
					cursor={false}
				/>
			</Text>
			<motion.div
				initial={{ opacity: '0' }}
				animate={{ opacity: [0, 0.5, 1] }}
				transition={{ delay: 43, duration: 3, ease: 'easeInOut' }}
			>
				<VStack spacing={{ base: '0' }} justify={'center'}>
					<Text
						fontFamily={'Reenie Beanie'}
						{...bigFont}
						fontSize={{ base: '4xl', sm: '5xl' }}
					>
						Take a look
					</Text>
					<Text
						fontFamily={'Reenie Beanie'}
						{...bigFont}
						fontSize={{ base: '4xl', sm: '5xl' }}
					>
						at my work
					</Text>

					<Icon as={useColorModeValue(RiEyeCloseLine, GiBleedingEye)} fontSize={'5xl'} />
				</VStack>
			</motion.div>
		</VStack>
	)
}
