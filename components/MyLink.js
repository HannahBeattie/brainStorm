import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function MyLink({ href, children, ...props }) {
	return (
		<NextLink
			href={href}
			passHref
			legacyBehavior
			_hover={{
				textDecoration: 'none',
			}}
		>
			<Link
				_hover={{
					textDecoration: 'none',
				}}
				{...props}
			>
				{children}
			</Link>
		</NextLink>
	)
}
