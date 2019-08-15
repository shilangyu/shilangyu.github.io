import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import urls from '../constants/urls'
import Index from './Index/index'
import LivePreviews from './LivePreviews'
import Portfolio from './Portfolio'

const Root = styled.main`
	margin-bottom: ${p => p.theme.spacing() * 3}px;
`

const Main: React.FC = () => (
	<Root>
		<Switch>
			<Route exact path={urls.index} component={Index} />
			<Route exact path={urls.livePreviews} component={LivePreviews} />
			<Route exact path={urls.portfolio} component={Portfolio} />
		</Switch>
	</Root>
)

export default Main
