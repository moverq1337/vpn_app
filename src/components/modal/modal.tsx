import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'

interface ModalFormProps {
	isOpen: boolean
	onClose: () => void
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Email:', email)
		console.log('Password:', password)
		onClose()
	}

	if (!isOpen) return null

	// Определяем variants для контейнера и элементов
	const containerVariants = {
		hidden: { scale: 0.9 },
		visible: {
			scale: 1,
			transition: {
				duration: 0.1,
				delayChildren: 0.2,
				staggerChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	}

	return (
		<div
			style={{
				position: 'fixed',
				inset: '0',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'rgba(0, 0, 0, 0.5)', // Устанавливаем начальный цвет сразу
				zIndex: 50,
			}}
			onClick={onClose}
		>
			<motion.div
				className='w-full max-w-md p-8 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-transparent rounded-xl relative z-10'
				style={{
					background:
						'linear-gradient(#212121, #212121) padding-box, linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box',
				}}
				onClick={e => e.stopPropagation()}
				variants={containerVariants}
				initial='hidden'
				animate='visible'
			>
				<motion.form
					onSubmit={handleSubmit}
					className='flex flex-col gap-5'
					variants={containerVariants}
				>
					<motion.div className='flex flex-col gap-1' variants={itemVariants}>
						<label className='text-xs font-semibold text-gray-400'>Email</label>
						<input
							type='email'
							id='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							placeholder='ti_mozgov@la.nba'
							required
							className='w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500'
						/>
					</motion.div>
					<motion.div className='flex flex-col gap-1' variants={itemVariants}>
						<label className='text-xs font-semibold text-gray-400'>
							Password
						</label>
						<input
							type='password'
							id='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							placeholder='************'
							required
							className='w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 resize-none focus:outline-none focus:border-pink-500'
						/>
					</motion.div>
					<motion.div variants={itemVariants}>
						<StyledWrapper>
							<button type='submit'>Submit</button>
						</StyledWrapper>
					</motion.div>
				</motion.form>
			</motion.div>
		</div>
	)
}

// Стили для кнопки
const StyledWrapper = styled.div`
	button {
		border-radius: 0.25rem;
		text-transform: uppercase;
		font-style: normal;
		font-weight: 400;
		padding-left: 25px;
		padding-right: 25px;
		color: #fff;
		-webkit-clip-path: polygon(
			0 0,
			0 0,
			100% 0,
			100% 0,
			100% calc(100% - 15px),
			calc(100% - 15px) 100%,
			15px 100%,
			0 100%
		);
		clip-path: polygon(
			0 0,
			0 0,
			100% 0,
			100% 0,
			100% calc(100% - 15px),
			calc(100% - 15px) 100%,
			15px 100%,
			0 100%
		);
		height: 40px;
		font-size: 0.7rem;
		line-height: 14px;
		letter-spacing: 1.2px;
		transition: 0.2s 0.1s;
		background-image: linear-gradient(90deg, #1c1c1c, #6220fb);
		border: 0 solid;
		overflow: hidden;
	}

	button:hover {
		cursor: pointer;
		transition: all 0.3s ease-in;
		padding-right: 30px;
		padding-left: 30px;
	}
`

export default ModalForm
