import { Box, Heading, HStack, Icon, VStack, Image, Text, Spacer } from '@chakra-ui/react'
import React from 'react'
import { GiBrain, GiFocusedLightning, GiLightningTrio } from 'react-icons/gi'
import { FaBrain } from 'react-icons/fa'
import Appear from '../animate/Appear'
import Flicker from '../animate/Flicker'
import { motion } from 'framer-motion'
import MyLink from '../MyLink'
import FadeIn from '../animate/FadeIn'

function Logo() {
	return (
		<>
			<Flicker>
				<motion.div whileHover={{ scale: [1, 1.03], opacity: [1, 0.5, 1] }}>
					<VStack
						spacing={0}
						px={4}
						cursor={'pointer'}
						color={'gray.800'}
						_dark={{ color: '#ff69b4' }}
						_hover={{ color: '#ff69b4' }}
					>
						<motion.div
							animate={{ opacity: [1, 0.5, 1, 0, 1], width: [250, 247] }}
							transition={{ ease: 'easeInOut' }}
						>
							<Heading
								display={{ base: 'none', sm: 'block' }}
								letterSpacing={'0.08em'}
								fontSize={'3xl'}
								textTransform={'uppercase'}
								fontFamily={'Rubik Glitch'}
							>
								Brain Storm
							</Heading>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: [0.5, 1, 0, 1], width: [260, 247] }}
						>
							<Heading
								display={{ base: 'none', sm: 'block' }}
								letterSpacing={'0.08em'}
								fontSize={'3xl'}
								textTransform={'uppercase'}
								fontFamily={'Rubik Glitch'}
								opacity={0.2}
							>
								Brain Storm
							</Heading>
						</motion.div>
					</VStack>
				</motion.div>
			</Flicker>

			<VStack display={{ base: 'block', sm: 'none' }} spacing={0} textAlign={'right'}>
				<Flicker>
					<Heading
						letterSpacing={'0.08em'}
						color={'white'}
						_dark={{ color: '#ff69b4' }}
						fontSize={'xl'}
						textTransform={'uppercase'}
						fontFamily={'Rubik Glitch'}
					>
						Brain
					</Heading>
					<Heading
						textTransform={'uppercase'}
						color={'white'}
						_dark={{ color: '#ff69b4' }}
						_hover={{ color: '#ff69b4' }}
						fontSize={'xl'}
						fontFamily={'Rubik Glitch'}
					>
						Storm
					</Heading>
				</Flicker>
			</VStack>
		</>
	)
}

export default Logo
