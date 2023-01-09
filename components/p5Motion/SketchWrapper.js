import { VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import useMeasure from 'react-use-measure'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

export default function SketchWrapper({ sketch }) {
	const [ref, bounds] = useMeasure()
	return (
		<VStack overflow={'hidden'} maxW={'100vw'} alignItems='stretch' px='10'>
			<VStack ref={ref} h='500px' cursor='pointer' overflow={'hidden'}>
				{bounds.height > 0 && (
					<ReactP5Wrapper
						sketch={sketch}
						h={bounds.height || 300}
						w={bounds.width || 500}
					/>
				)}
			</VStack>
		</VStack>
	)
}
