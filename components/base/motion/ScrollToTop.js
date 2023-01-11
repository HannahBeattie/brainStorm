import { IconButton, Tooltip, Button } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { FiNavigation2 } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export default function ScrollToTop() {
	const scrollRef = useRef(null)
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
	const isPageWide = useMediaQuery('(min-width: 768px)')
	return (
		<>
			{isPageWide && (
				<div ref={scrollRef} style={{ overflow: 'scroll' }}>
					{showTopBtn && (
						<Button
							position={'fixed'}
							right={'2'}
							bottom={'5'}
							onClick={goToTop}
							bg={''}
							color={'gray.600'}
							_hover={{ bg: '', color: 'gray.300' }}
							_active={{ bg: '', color: 'gray.300' }}
							area-label={'scroll to top'}
							cursor={'pointer'}
							size={'sm'}
							fontWeight={'100'}
						>
							up
						</Button>
					)}
				</div>
			)}
		</>
	)
}