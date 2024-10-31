import bg from '../../assets/bg.png'
import Button from '../../components/buttonio'

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
			<div>
				<div className='flex justify-center'>
					<h2 className='text-2xl text-white font-black mb-6 '>LOGIN</h2>
				</div>
				<form className='flex flex-col gap-12 bg-[#680cb7]/5 shadow-lg rounded-lg border border-white/20 backdrop-blur-md px-20 py-10'>
					<div>
						<p className='text-white text-md font-regular'>E-MAIL</p>
						<input className='bg-transparent border-purple-200 border-2 rounded-lg px-2 py-2 text-white'></input>
					</div>
					<div>
						<p className='text-white text-md font-regular'>PASSWORD</p>
						<input
							className='bg-transparent border-purple-200 border-2 rounded-lg px-2 py-2 text-white'
							type='password'
						></input>
					</div>
					<div className='flex flex-col gap-7'>
						<Button text='Login' navigateTo='/' />
						<Button text='Register' navigateTo='/registration' />
					</div>
				</form>
			</div>
		</div>
	)
}
