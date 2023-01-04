import { IconButton, Tooltip } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { FiNavigation2 } from 'react-icons/fi'
import { motion } from 'framer-motion'

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
	return (
		<Tooltip label={'hi'} bg='red'>
			<div ref={scrollRef} style={{ overflow: 'scroll' }}>
				{showTopBtn && (
					<IconButton
						as={FiNavigation2}
						position={'fixed'}
						right={'4'}
						bottom={'8'}
						onClick={goToTop}
						bg={''}
						color={'gray.600'}
						_hover={{ bg: '', color: 'gray.300' }}
						area-label={'scroll to top'}
						cursor={'pointer'}
						size={'xs'}
					/>
				)}
			</div>
		</Tooltip>
	)
}
