import { Link, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function LinkWrapper({ href, children, ...props }) {
	const router = useRouter()
	const currentRoute = router.pathname
	const isCurrent = href === currentRoute

	return (
		<NextLink href={href} passHref legacyBehavior>
			<Link
				fontWeight={isCurrent ? '900' : '300'}
				{...props}
				_hover={{ textDecoration: 'underline' }}
				textDecoration={'underline'}
			>
				{children}
			</Link>
		</NextLink>
	)
}
