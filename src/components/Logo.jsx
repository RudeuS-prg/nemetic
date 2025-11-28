import React from 'react'
import { Link } from 'gatsby'
import LogoSvg from '../../static/logo.svg'

const Logo = () => {
	return (
		<Link to='/' className='flex items-center gap-4 text-inherit cursor-pointer no-underline' aria-label='Nemetic - Home' title='Nemetic'>
			<LogoSvg className='w-6 h-6 fill-colorPrimary' />
			<div className='text-xs font-mono text-colorLight/30'>v1.0.0</div>
		</Link>
	)
}

export default Logo
