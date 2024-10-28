export default function Header() {
	return (
		<div className='flex justify-between text-xl font-regular p-2 text-white'>
			<div>
				<button>cashready.ru</button>
			</div>
			<div>
				<h1>localhost:2000</h1>
			</div>
			<div className='flex justify-center gap-2'>
				<p>created by.</p>
				<button>moverq</button>
				<p>&</p>
				<button>unkabas</button>
			</div>
		</div>
	)
}
