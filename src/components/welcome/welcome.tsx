import Typewriter from 'typewriter-effect'

export default function Welcome() {
	return (
		<div className='text-white'>
			<div className='flex ml-[10%] items-center h-screen'>
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
				</div>
			</div>
		</div>
	)
}
