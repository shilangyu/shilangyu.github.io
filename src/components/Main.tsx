import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { withStyles, WithStyles, Theme, createStyles } from '@material-ui/core'

import Index from './index/index'
import LivePreviews from './livePreviews'
import Portfolio from './portfolio'

import urls from '../constants/urls'

const styles = (theme: Theme) =>
	createStyles({
		root: {}
	})

class Main extends Component<WithStyles<typeof styles>> {
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
