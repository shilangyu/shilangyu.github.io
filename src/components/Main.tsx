import React from 'react'
import { Route, Switch } from 'react-router-dom'
import urls from '../constants/urls'
import Index from './index/index'
import LivePreviews from './livePreviews'
import Portfolio from './portfolio'

const Main: React.FC = () => (
	<main>
		<Switch>
			<Route exact path={urls.index} component={Index} />
			<Route exact path={urls.livePreviews} component={LivePreviews} />
			<Route exact path={urls.portfolio} component={Portfolio} />
		</Switch>
	</main>
)

export default Main
