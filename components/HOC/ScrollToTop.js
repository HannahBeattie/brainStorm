import { Box, Button } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'

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
		<>
			{showTopBtn && (
				<Button
					display={{ base: 'none', md: 'block' }}
					position={'relative'}
					ref={scrollRef}
					style={{ overflow: 'scroll' }}
					bg={''}
					position={'fixed'}
					left={0}
					bottom={'10'}
					onClick={goToTop}
					color={'gray.300'}
					_hover={{ bg: '', color: 'gray.300' }}
					_active={{ bg: '', color: 'gray.300' }}
					area-label={'scroll to top'}
					cursor={'pointer'}
				>
					<BsArrowUpCircle />
				</Button>
			)}
		</>
	)
}
