import { IconButton } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { TbArrowTopCircle } from 'react-icons/tb'

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
		<div ref={scrollRef} style={{ overflow: 'scroll' }}>
			{showTopBtn && (
				<IconButton
					as={TbArrowTopCircle}
					position={'fixed'}
					left={'2'}
					bottom={'4'}
					onClick={goToTop}
					bg={''}
					_hover={{ bg: '', color: 'white' }}
					area-label={'scroll to top'}
					cursor={'pointer'}
				/>
			)}
		</div>
	)
}
