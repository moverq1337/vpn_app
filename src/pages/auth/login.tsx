import bg from '../../assets/bg.png'
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
				<h2 className='text-2xl text-white font-bold mb-6 '>Login</h2>
				<form className='flex flex-col gap-4 bg-[#680cb7]/5 shadow-lg rounded-lg border border-white/20 backdrop-blur-md px-20 py-40'>
					<div>
						<p className='text-white text-2xl font-semibold'>enter username</p>
						<input className='bg-transparent border-purple-500 border-2 rounded-lg px-2 py-2 text-white'></input>
					</div>
					<div>
						<p className='text-white text-2xl font-semibold'>enter email</p>
						<input></input>
					</div>
					<div>
						<p className='text-white text-2xl font-semibold'>enter password</p>
						<input></input>
					</div>
					<div>
						<p className='text-white text-2xl font-semibold'>
							confirm password
						</p>
						<input></input>
					</div>
				</form>
			</div>
		</div>
	)
}
