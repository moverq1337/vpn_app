export default function Registration() {
	return (
		<div
			className='Signin flex items-center justify-center'
			style={{
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				minHeight: '100vh',
				width: '100%',
			}}
		>
			<div className='bg-white p-8 rounded shadow-lg'>
				<h2 className='text-2xl font-bold mb-6'>Registration</h2>
				<form>
					<div className='mb-4'>
						<label className='block text-gray-700 text-sm font-bold mb-2'>
							Email
						</label>
						<input
							type='email'
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						/>
					</div>
					<div className='mb-6'>
						<label className='block text-gray-700 text-sm font-bold mb-2'>
							Password
						</label>
						<input
							type='password'
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						/>
					</div>
					<div className='flex items-center justify-between'>
						<button
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
							type='submit'
						>
							Register
						</button>
					</div>
					<div>
						<a
							href='#'
							className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
							onClick={() => (window.location.href = '/login')}
						>
							already have account? let's sign in :D
						</a>
					</div>
				</form>
			</div>
		</div>
	)
}
