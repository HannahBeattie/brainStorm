import { motion } from 'framer-motion'
import React from 'react'

function Grow({ children }) {
	return <motion.div animate={{ width: [0, 245] }}>{children}</motion.div>
}

export default Grow
