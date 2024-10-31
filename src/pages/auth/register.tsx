import { useState } from 'react'
import bg from '../../assets/bg.png'
import Button from '../../components/buttonio'

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
			<div>
				<div className='flex justify-center'>
					<h2 className='text-2xl text-white font-black mb-6 '>REGISTER</h2>
				</div>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col gap-12 bg-[#680cb7]/5 shadow-lg rounded-lg border border-white/20 backdrop-blur-md px-20 py-10'
				>
					<div>
						<p className='text-white text-md font-regular'>USERNAME</p>
						<input className='bg-transparent border-purple-200 border-2 rounded-lg px-2 py-2 text-white'></input>
					</div>
					<div>
						<p className='text-white text-md font-regular'>E-MAIL</p>
						<input className='bg-transparent border-purple-200 border-2 rounded-lg px-2 py-2 text-white'></input>
					</div>
					<div>
						<p className='text-white text-md font-regular'>PASSWORD</p>
						<input
							className='bg-transparent border-purple-200 border-2 rounded-lg px-2 py-2 text-white'
							type='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
						></input>
					</div>
					<div>
						<p className='text-white text-md font-regular'>CONFIRM PASSWORD</p>
						<input
							className='bg-transparent border-purple-200 border-2 rounded-lg px-2 py-2 text-white'
							type='password'
							value={confirmPassword}
							onChange={e => setConfirmPassword(e.target.value)}
						></input>
						{error && <p className='text-red-500 text-sm'>{error}</p>}
					</div>
					<Button text='REGISTER' navigateTo='/' disabled={isButtonDisabled} />
				</form>
			</div>
		</div>
	)
}
