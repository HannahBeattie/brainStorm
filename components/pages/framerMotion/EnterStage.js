import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

export function EnterStage({ children, right, small }) {
	const { scrollYProgress } = useScroll()
	const x = useTransform(scrollYProgress, [0, 1], [right ? 200 : small ? -100 : -200, 0])
	return <motion.div style={{ x }}>{children}</motion.div>
}

export function Unfold({ children, num, style, ...rest }) {
	const { scrollYProgress } = useScroll()

	const y = useTransform(scrollYProgress, [0.5, 1], [num, 0])

	return (
		<motion.div style={{ ...style, y }} {...rest}>
			{children}
		</motion.div>
	)
}

export function UnfoldSm({ children }) {
	const { scrollYProgress } = useScroll()
	const y = useTransform(scrollYProgress, [0.5, 1], [-900, 30])
	return <motion.div style={{ y }}>{children}</motion.div>
}
