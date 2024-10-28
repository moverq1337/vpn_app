import Typewriter from 'typewriter-effect'
import group1 from '../../assets/group1.svg'
import group2 from '../../assets/group2.svg'
import group3 from '../../assets/group3.svg'
import Button from './buttonio'

export default function Welcome() {
	return (
		<div className='welcome-container relative text-white h-screen overflow-hidden'>
			{/* Основной контент */}
			<div className='flex ml-[10%] items-center h-full relative z-10'>
				<div className='flex flex-col gap-5'>
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
					<Button></Button>
				</div>
			</div>

			{/* Вращающиеся изображения */}
			<div className='absolute top-[20rem] left-[-20rem]  animate-spin-slow scale-150'>
				<img src={group1} alt='' className='w-full h-full object-contain' />
			</div>
			<div className='absolute top-[-25rem] right-[20rem]  animate-spin-slow scale-150'>
				<img src={group2} alt='' className='w-full h-full object-contain' />
			</div>
			<div className='absolute bottom-[-25rem] left-[90rem] animate-spin-slow scale-150'>
				<img src={group3} alt='' className='w-full h-full object-contain' />
			</div>
		</div>
	)
}
