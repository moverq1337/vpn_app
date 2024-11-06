import { motion } from 'framer-motion'
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

export default function Login() {
	return (
		<div
			className='Signin flex items-center justify-center'
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
						LOGIN
					</motion.h2>
				</div>
				<motion.form
					className='flex flex-col gap-12 bg-[#680cb7]/5 shadow-lg rounded-lg border border-white/20 backdrop-blur-md px-20 py-10'
					variants={containerVariants}
					initial='hidden'
					animate='visible'
				>
					<motion.div variants={itemVariants}>
						<p className='text-white text-md font-regular'>E-MAIL</p>
						<input className='bg-transparent border-purple-200 border-2 rounded-lg px-2 py-2 text-white' />
					</motion.div>
					<motion.div variants={itemVariants}>
						<p className='text-white text-md font-regular'>PASSWORD</p>
						<input
							className='bg-transparent border-purple-200 border-2 rounded-lg px-2 py-2 text-white'
							type='password'
						/>
					</motion.div>
					<motion.div className='flex flex-col gap-7' variants={itemVariants}>
						<Button text='Login' navigateTo='/' />
					</motion.div>

					<motion.div className='flex flex-col gap-7' variants={itemVariants}>
						<Button text='Register' navigateTo='/registration' />
					</motion.div>
				</motion.form>
			</motion.div>
		</div>
	)
}
