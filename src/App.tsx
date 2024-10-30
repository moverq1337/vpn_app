import { motion } from 'framer-motion'
import React from 'react'
import './App.css'
import bg from './assets/bg.png'
import AnimatedCursor from './components/cursor/cursor'
import Welcome from './components/welcome/welcome'

const App: React.FC = () => {
	return (
		<div
			className='App'
			style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				minHeight: '100vh',
				width: '100%',
			}}
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 10 }}
				transition={{ duration: 5 }}
			>
				{/* Добавляем кастомный курсор */}
				<AnimatedCursor />
				{/* Основной контент */}
				<div className='bg-black-main'>
					<Welcome />
				</div>
			</motion.div>
		</div>
	)
}

export default App
