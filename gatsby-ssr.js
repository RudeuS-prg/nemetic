import * as React from 'react'

import '@fontsource-variable/montserrat'
import './src/assets/css/global.css'

export const onRenderBody = ({ setHeadComponents }) => {
	if (process.env.NODE_ENV === 'production') {
		return setHeadComponents([
			<script key='plausible-script' async src='https://plausible.io/js/pa-USyqq8iqYbTUKkzFEtrwf.js'></script>,
			<script
				key='plausible-init'
				dangerouslySetInnerHTML={{
					__html: 'window.plausible=window.plausible||function(){(plausible.q = plausible.q || []).push(arguments)},plausible.init=plausible.init||function(i){(plausible.o = i || {})}; plausible.init()',
				}}
			/>,
		])
	}
	return null
}
