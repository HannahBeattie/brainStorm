import { Box, Button } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineVerticalAlignTop } from 'react-icons/ai'
import Appear from './Appear'
import FadeIn from '~/components/HOC/FadeIn'

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

	const buttonProps = {
		bg: 'null',
		position: 'fixed',
		color: 'grayAlpha.900',

		_hover: { bg: 'null' },
		_active: { bg: 'null' },
		cursor: 'pointer',
	}
	return (
		<>
			{showTopBtn && (
				<>
					<FadeIn>
						<Button
							{...buttonProps}
							display={{ base: 'none', md: 'flex' }}
							onClick={goToTop}
							ref={scrollRef}
							bottom='16'
							area-label={'scroll to top'}
							right={4}
							_light={{ color: 'grayAlpha.600', _hover: { color: 'warmWhite' } }}
							_dark={{
								bg: 'blackAlpha.700',
								color: 'whiteAlpha.900',
								_hover: { color: 'warmWhite' },
							}}
							p={1}
							borderRadius={20}
						>
							<AiOutlineVerticalAlignTop size={30} />
						</Button>
					</FadeIn>
				</>
			)}
		</>
	)
}
