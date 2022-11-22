import { Box, HStack, Icon, Text, Tooltip, VStack } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import FadeIn from '../animate/FadeIn'
import MyLink from '../MyLink'
import { motion, useCycle } from 'framer-motion'

function NavItem({ title, href, icon }) {
	const [hovered, setHovered] = useState(false)

	return (
		<FadeIn>
			<motion.div whileHover={{ rotate: [0, 5, -5, 0] }}>
				<MyLink
					href={href}
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
				>
					<VStack px={2}>
						<motion.div
							whileHover={{ scale: 1.4, top: -9, rotate: 360 }}
							transition={{ duration: 0.5, ease: 'easeInOut' }}
						>
							<Icon
								_light={{ color: 'white', _hover: { color: 'white' } }}
								as={icon}
								boxSize='6'
							/>
						</motion.div>
						<motion.div
							initial={false}
							animate={hovered ? 'open' : 'closed'}
							variants={{
								open: { opacity: 1, scale: [0, 1] },
								closed: { opacity: 0 },
							}}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
						>
							<Text _light={{ color: 'white', _hover: { color: 'white' } }}>
								{title}
							</Text>
						</motion.div>
					</VStack>
				</MyLink>
			</motion.div>
		</FadeIn>
	)
}

export default NavItem
