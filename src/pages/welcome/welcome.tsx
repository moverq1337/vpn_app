import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import bg from '../../assets/bg.png'
import Button from '../../components/buttonio'

export default function Welcome() {
	return (
		<div
			className='welcome-container relative text-white h-screen overflow-hidden'
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
				animate={{ opacity: 1 }}
				transition={{ duration: 5 }}
				className='flex ml-[10%] items-center h-full relative z-10'
			>
				<div>
					<motion.div
						initial={{ y: -300, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1 }}
					>
						<div className='flex flex-col gap-10'>
							<h2 className='font-regular text-5xl'>cashready.ru</h2>
							<h1 className='font-black text-7xl'>GET READY FOR:</h1>
							<div className='font-semibold text-5xl'>
								<Typewriter
									options={{
										strings: [
											'bypass any blocking and restrictions',
											'anonymous on web',
											'drip collection',
											'more! more! more!',
										],
										autoStart: true,
										loop: true,
									}}
								/>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ y: 300, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1 }}
						className='mt-10'
					>
						<Button text='letsgo' navigateTo='/login' />
					</motion.div>
				</div>
			</motion.div>
		</div>
	)
}
