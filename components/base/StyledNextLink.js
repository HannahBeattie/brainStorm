import { Link, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function StyledNextLink({ href, children, ...props }) {
	const router = useRouter()
	const currentRoute = router.pathname
	const isCurrent = href === currentRoute
	const col1 = useColorModeValue('gray.900', 'white')
	const col2 = useColorModeValue('gray.900', 'gray.100')

	return (
		<NextLink href={href} passHref legacyBehavior>
			<Link
				_hover={{
					textDecoration: 'none',
				}}
				fontWeight={isCurrent ? '900' : '300'}
				color={isCurrent ? col1 : col2}
				{...props}
			>
				{children}
			</Link>
		</NextLink>
	)
}
