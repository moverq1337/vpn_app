import { motion } from 'framer-motion'
import { useState } from 'react'
import bg from '../../assets/bg.png'
import Button from '../../components/buttonio'

const containerVariants = {
	hidden: { opacity: 0, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.3,
		},
	},
}

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: { y: 0, opacity: 1 },
}

export default function Registration() {
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (password !== confirmPassword) {
			setError('Passwords do not match')
		} else {
			setError('')
		}
	}

	const isButtonDisabled = password !== confirmPassword

	return (
		<div
			className='Register flex items-center justify-center'
			style={{
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				minHeight: '100vh',
				width: '100%',
				backgroundImage: `url(${bg})`,
			}}
		>
			<motion.div
				initial='hidden'
				animate='visible'
				variants={containerVariants}
			>
				<div className='flex justify-center'>
					<motion.h2
						className='text-2xl text-white font-black mb-6'
						variants={itemVariants}
					>
						REGISTER
					</motion.h2>
				</div>
				<motion.form
					onSubmit={handleSubmit}
					className='flex flex-col gap-12 bg-[#680cb7]/5 shadow-lg rounded-lg border border-white/20 backdrop-blur-md px-20 py-10'
					variants={containerVariants}
					initial='hidden'
					animate='visible'
				>
					<motion.div variants={itemVariants}>
						<p className='text-white text-md font-regular'>USERNAME</p>
						<input className='bg-transparent border-purple-200 border-2 rounded-lg px-2 py-2 text-white' />
					</motion.div>
					<motion.div variants={itemVariants}>
						<p className='text-white text-md font-regular'>E-MAIL</p>
						<input className='bg-transparent border-purple-200 border-2 rounded-lg px-2 py-2 text-white' />
					</motion.div>
					<motion.div variants={itemVariants}>
						<p className='text-white text-md font-regular'>PASSWORD</p>
						<input
							className='bg-transparent border-purple-200 border-2 rounded-lg px-2 py-2 text-white'
							type='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</motion.div>
					<motion.div variants={itemVariants}>
						<p className='text-white text-md font-regular'>CONFIRM PASSWORD</p>
						<input
							className='bg-transparent border-purple-200 border-2 rounded-lg px-2 py-2 text-white'
							type='password'
							value={confirmPassword}
							onChange={e => setConfirmPassword(e.target.value)}
						/>
						{error && <p className='text-red-500 text-sm'>{error}</p>}
					</motion.div>
					<motion.div className='flex flex-col gap-7' variants={itemVariants}>
						<Button
							text='REGISTER'
							navigateTo='/login'
							disabled={isButtonDisabled}
						/>
					</motion.div>
				</motion.form>
			</motion.div>
		</div>
	)
}
