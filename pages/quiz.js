import { useEffect } from 'react'
// etc...

export default function useKey() {
	useEffect(() => {
		const keyPressed = ({ key }) =>
			key === 'ArrowLeft'
				? console.log('ArrowLeft')
				: key === 'ArrowRight' && console.log('ArrowRight')
		window.addEventListener('keydown', keyPressed)
		return () => window.removeEventListener('keydown', keyPressed)
	}, [])
	console.log('keyPressed!')

	return <main>Press a key</main>
}
