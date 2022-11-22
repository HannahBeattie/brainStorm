import { Box, Heading, HStack, Icon, VStack, Image, Text, Spacer } from '@chakra-ui/react'
import React from 'react'
import { GiBrain, GiFocusedLightning, GiLightningTrio } from 'react-icons/gi'
import { FaBrain } from 'react-icons/fa'
import Appear from '../animate/Appear'
import Flicker from '../animate/Flicker'
import { motion } from 'framer-motion'

function Logo() {
	return (
		<>
			<Flicker>
				<VStack spacing={0} px={4} cursor={'pointer'}>
					<motion.div
						whileHover={{ scale: [1, 1.03] }}
						transition={{ ease: 'easeInOut' }}
					>
						<Heading
							display={{ base: 'none', sm: 'block' }}
							letterSpacing={'0.08em'}
							color={'#ff69b4'}
							fontSize={'3xl'}
							textTransform={'uppercase'}
							fontFamily={'Rubik Glitch'}
						>
							Brain Storm
						</Heading>
						<Heading
							display={{ base: 'none', sm: 'block' }}
							letterSpacing={'0.08em'}
							color={'#ff69b4'}
							fontSize={'3xl'}
							textTransform={'uppercase'}
							fontFamily={'Rubik Glitch'}
							opacity={0.2}
						>
							Brain Storm
						</Heading>
						<Heading
							display={{ base: 'none', sm: 'block' }}
							letterSpacing={'0.08em'}
							color={'#ff69b4'}
							fontSize={'3xl'}
							textTransform={'uppercase'}
							fontFamily={'Rubik Glitch'}
							opacity={0.2}
						>
							Brain Storm
						</Heading>
					</motion.div>
				</VStack>
			</Flicker>

			<VStack display={{ base: 'block', sm: 'none' }} spacing={0} textAlign={'center'}>
				<Flicker>
					<Heading
						letterSpacing={'0.08em'}
						color={'#ff69b4'}
						fontSize={'2xl'}
						textTransform={'uppercase'}
						fontFamily={'Rubik Glitch'}
					>
						Brain
					</Heading>
					<Heading
						textTransform={'uppercase'}
						color={'#ff69b4'}
						fontSize={'2xl'}
						fontFamily={'Rubik Glitch'}
					>
						Storm
					</Heading>
					<Heading
						letterSpacing={'0.08em'}
						color={'#ff69b4'}
						fontSize={'xl'}
						textTransform={'uppercase'}
						fontFamily={'Rubik Glitch'}
						opacity={0.2}
					>
						Brain
					</Heading>
					<Heading
						textTransform={'uppercase'}
						opacity={0.1}
						color={'#ff69b4'}
						fontSize={'xl'}
						fontFamily={'Rubik Glitch'}
					>
						Storm
					</Heading>{' '}
				</Flicker>
			</VStack>
		</>
	)
}

export default Logo
