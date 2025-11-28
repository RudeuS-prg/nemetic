import React from 'react'
import { Link } from 'gatsby'
import Logo from './Logo'
import ScrambleText from './ScrambleText'

const NAV_ITEMS = [
	{ id: 'recursion', label: 'Recursion' },
	{ id: 'manifesto', label: 'Manifesto' },
	{ id: 'protocol', label: 'Protocol' },
]

const Header = () => {
	return (
		<header className='fixed top-0 z-50 w-full flex items-center justify-between px-8 py-4 bg-colorDarker/80 backdrop-blur-md border-b border-colorPrimary/10'>
			<Logo />

			<nav className='flex items-center gap-8 font-mono text-xs uppercase tracking-widest'>
				{NAV_ITEMS.map(({ id, label }) => (
					<Link
						key={id}
						to={`/#${id}`}
						className='relative group py-2 text-colorLight/60 hover:text-colorPrimary transition-colors cursor-pointer'>
						<span className='absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity text-colorPrimary'>›</span>
						{label}
						<span className='absolute bottom-0 left-0 w-0 h-px bg-colorPrimary group-hover:w-full transition-all duration-300'></span>
					</Link>
				))}
			</nav>

			<div className='hidden md:flex items-center gap-2 text-xs font-mono text-colorPrimary/50'>
				<span className='w-2 h-2 bg-colorPrimary rounded-full animate-pulse'></span>
				<ScrambleText text="SYSTEM ONLINE" />
			</div>
		</header>
	)
}

export default Header
