import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { AlertTriangle, Home } from 'lucide-react'
import Seo from '../components/SEO'
import Page from '../components/Page'
import TypedText from '../components/TypedText'
import ScrambleText from '../components/ScrambleText'

export const Head = () => {
	return <Seo title='404: Pattern Not Found' />
}

const NotFoundPage = () => {
	return (
		<Page>
			<section className='min-h-[80vh] flex items-center justify-center relative overflow-hidden'>
				<div className='wrapper relative z-10 text-center'>
					<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
						<div className='w-24 h-24 mx-auto bg-colorPrimary/10 text-colorPrimary rounded-full flex items-center justify-center mb-6 border border-colorPrimary/30'>
							<AlertTriangle size={48} />
						</div>
					</motion.div>

					<h1 className='text-6xl md:text-8xl font-bold mb-6 tracking-tighter'>
						<span className='text-colorPrimary'>404</span>
					</h1>

					<div className='text-xl md:text-2xl text-colorLight/80 mb-8 font-mono max-w-2xl mx-auto relative'>
						<TypedText text='Pattern not found.' speed={50} />
					</div>

					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className='max-w-lg mx-auto text-colorLight/60 mb-12'>
						<p>The requested trajectory does not exist. Return to the source to recalibrate.</p>
					</motion.div>

					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
						<Link to='/' className='button group'>
							<Home size={18} className='group-hover:scale-110 transition-transform' />
							<span className='font-bold'>
								<ScrambleText text='RETURN TO SOURCE' />
							</span>
						</Link>
					</motion.div>
				</div>

				{/* Background decoration */}
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-colorPrimary/5 rounded-full blur-3xl -z-10 pointer-events-none' />
			</section>
		</Page>
	)
}

export default NotFoundPage
