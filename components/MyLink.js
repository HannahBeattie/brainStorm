import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function MyLink({ href, children, ...props }) {
	const router = useRouter()
	const currentRoute = router.pathname
	const isCurrent = href === currentRoute
	console.log(currentRoute, href, isCurrent)
	return (
		<NextLink href={href} passHref legacyBehavior>
			<Link
				_hover={{
					textDecoration: 'none',
				}}
				fontWeight={isCurrent ? '900' : '300'}
				color={isCurrent ? 'gray.900' : 'gray.400'}
				{...props}
			>
				{children}
			</Link>
		</NextLink>
	)
}
