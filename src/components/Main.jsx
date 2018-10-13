import React, { Component } from 'react'
import urls from '../constants/urls'
import { Route, Switch } from 'react-router-dom'


import Index from './index'
import LivePreviews from './livePreviews'
import Portfolio from './portfolio'


class App extends Component {
  render() {
    return (
			<main>
				<Switch>
					<Route exact path={urls.index} component={Index} />
					<Route exact path={urls.livePreviews} component={LivePreviews} />
					<Route exact path={urls.portfolio} component={Portfolio} />
				</Switch>
			</main>
    )
  }
}

export default App
