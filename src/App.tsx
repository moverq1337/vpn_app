import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AnimatedCursor from './components/cursor/cursor'
import Login from './pages/auth/login'
import Registration from './pages/auth/register'
import Welcome from './pages/welcome/welcome'

export default function App() {
	return (
		<BrowserRouter>
			<AnimatedCursor />
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
			</Routes>
		</BrowserRouter>
	)
}
