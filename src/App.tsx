import React from 'react'
import './App.css'
import AnimatedCursor from './components/cursor/cursor'
import Welcome from './components/welcome/welcome'

const App: React.FC = () => {
	return (
		<div className='App'>
			{/* Добавляем кастомный курсор */}
			<AnimatedCursor />
			{/* Основной контент */}
			<div className='bg-black-main'>
				<Welcome />
			</div>
		</div>
	)
}

export default App
