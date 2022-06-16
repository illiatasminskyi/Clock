import React, { useState, useEffect } from 'react'
import './App.css'
import lightOff from './img/lightOff.svg'

const App = () => {
	const [light, setLight] = useState(false)
	const [clock, setClock] = useState('')

	const timeChange = async () => {
		const date = await new Date()
		const h = await date.getHours()
		const m = await date.getMinutes()

		const zeroH = h < 10 && '0'
		const zeroM = m < 10 && '0'
		await setClock(`${zeroH + h} : ${zeroM + m}`)
	}

	const update = setInterval(() => {
		timeChange()
	}, 5000)

	useEffect(() => {
		timeChange()
	}, [update])

	return (
		<div
			className='App'
			style={{
				backgroundColor: light
					? 'rgba(37, 40, 71, 1)'
					: 'rgba(37, 39, 58, 0.96)',
			}}
		>
			<img src={lightOff} alt='Light Off' />
			<div className='ClockAndTable'>
				<div
					className='Clock'
					style={{ backgroundColor: light ? '#7EB8C4' : 'rgba(16, 16, 16, 1)' }}
				>
					<div
						className='time'
						style={{ color: light ? '#000000' : '#F16B52' }}
					>
						{clock}
					</div>
				</div>
				<div
					className='Table'
					style={{
						backgroundColor: light ? '#89795C' : 'rgba(34, 35, 52, 1)',
					}}
				></div>
			</div>
			<span className='button' onClick={() => setLight(!light)}>
				<div className='button_block'></div>
			</span>
			<div
				className='light'
				style={{
					borderBottom: light
						? '100vh solid #FFD984'
						: '100vh solid transparent',
				}}
			></div>
		</div>
	)
}

export default App
