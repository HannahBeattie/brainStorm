import { ArrowDownIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { Box, Button, IconButton, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import { CgShapeTriangle } from 'react-icons/cg'
import { FaAngleUp } from 'react-icons/fa'
import Pulse from '../animate/Pulse'

export default function ScrollToTop() {
	const [showTopBtn, setShowTopBtn] = useState(false)
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true)
			} else {
				setShowTopBtn(false)
			}
		})
	}, [])
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<Box position={'relative'}>
			{showTopBtn && (
				<Button onClick={goToTop}>
					<Text
						fontWeight={'light'}
						className='icon-style, icon-position'
						fontSize={{ base: 'xs' }}
					>
						- up - to - top -
					</Text>
				</Button>
			)}
		</Box>
	)
}
