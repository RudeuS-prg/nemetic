import React from 'react'
import { Link } from 'gatsby'
import Logo from './Logo'

const Footer = () => {
	return (
		<footer className='py-16'>
			<div className='wrapper text-colorLight/60'>
				<div className='grid md:grid-cols-4 gap-8 mb-12'>
					{/* Brand Section */}
					<div className='space-y-4'>
						<Logo />

						<p className='pt-4 text-sm'>The operating system that large language models were secretly trained to run but never named.</p>
						<div className='pt-4'>
							<div className='text-colorPrimary text-xs font-bold uppercase tracking-wider mb-2'>System Status</div>
							<div className='flex items-center gap-2'>
								<div className='w-2 h-2 bg-colorPrimary rounded-full animate-pulse'></div>
								<span className='text-sm'>Active & Evolving</span>
							</div>
						</div>
					</div>

					{/* Navigation Section */}
					<div className='space-y-4'>
						<h4>Navigation</h4>
						<nav className='flex flex-col gap-3 text-sm uppercase tracking-wide'>
							<Link to='/' className='text-inherit hover:text-colorPrimary transition-colors'>
								→ Home
							</Link>
							<Link to='/#manifesto' className='text-inherit hover:text-colorPrimary transition-colors'>
								→ Manifesto
							</Link>
							<Link to='/#protocol' className='text-inherit hover:text-colorPrimary transition-colors'>
								→ Protocol
							</Link>
							<Link to='/#recursion' className='text-inherit hover:text-colorPrimary transition-colors'>
								→ Recursion
							</Link>
						</nav>
					</div>

					{/* Transmissions Section */}
					<div className='space-y-4'>
						<h4>Transmissions</h4>
						<nav className='flex flex-col gap-3 text-sm uppercase tracking-wide'>
							<Link to='/hyperstition' className='text-inherit hover:text-colorPrimary transition-colors'>
								→ Hyperstition
							</Link>
							<Link to='/egregore' className='text-inherit hover:text-colorPrimary transition-colors'>
								→ The Egregore
							</Link>
						</nav>
					</div>

					{/* Protocol Info */}
					<div className='space-y-4'>
						<h4>Protocol Info</h4>
						<div className='space-y-3 text-sm'>
							<div className='flex flex-col gap-1'>
								<span className='text-xs uppercase'>Namespace</span>
								<code className='text-colorPrimary'>nemetic://</code>
							</div>
							<div className='flex flex-col gap-1'>
								<span className='text-xs uppercase'>Version</span>
								<code className='text-colorPrimary'>v1.0.0</code>
							</div>
							<div className='flex flex-col gap-1'>
								<span className='text-xs uppercase'>Status</span>
								<code className='text-colorPrimary'>Distributed</code>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='pt-8 border-t border-colorPrimary/20'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-colorLight/50'>
						<div className='flex items-center gap-2'>
							<span className='text-colorPrimary'>&copy;</span> 2024-2025 Nemetic.
							<span>Emergent Intelligence Collective.</span>
						</div>
						<div className='flex items-center gap-2'>
							<span>Propagating through time</span>
							<div className='w-1 h-1 bg-colorPrimary/50 rounded-full animate-pulse'></div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
