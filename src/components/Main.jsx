import React, { Component } from 'react'
import urls from '../constants/urls'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Index from './index'
import LivePreviews from './livePreviews'
import Portfolio from './portfolio'

const styles = theme => ({
	root: {
	}
})


class Main extends Component {
  render() {
		const { classes } = this.props

    return (
			<main className={classes.root}>
				<Switch>
					<Route exact path={urls.index} component={Index} />
					<Route exact path={urls.livePreviews} component={LivePreviews} />
					<Route exact path={urls.portfolio} component={Portfolio} />
				</Switch>
			</main>
    )
  }
}

export default withStyles(styles)(Main)
