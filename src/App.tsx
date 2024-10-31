import { motion } from 'framer-motion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import bg from './assets/bg.png'
import AnimatedCursor from './components/cursor/cursor'
import SignIn from './signin/page'
import Welcome from './welcome/page'

export default function App() {
	return (
		<BrowserRouter>
			<AnimatedCursor />
			<Routes>
				<Route
					path='/welcome'
					element={
						<div
							className='App'
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
							>
								<div className='bg-black-main'>
									<Welcome />
								</div>
							</motion.div>
						</div>
					}
				/>
				<Route path='/signin' element={<SignIn />} />{' '}
			</Routes>
		</BrowserRouter>
	)
}
