import React, { Component } from "react"
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"

import Container from '../../dumb/Container.jsx'
import Snek from './snek.io.jsx'
import Aiml from './aiml.jsx'
import Thispage from './thispage.jsx'

const styles = theme => ({
	root: {
		// ...theme.spacing.container
	},
	// wrapper: {
	//   maxWidth: 400
	// },
	paper: {
		margin: theme.spacing.unit,
		padding: theme.spacing.unit * 1
	}
})

class _2018 extends Component {
	render() {
		const { classes } = this.props

		return (
			<Container>

				<Snek />
				<Aiml />
				<Thispage />

			</Container>
		)
	}
}

export default withStyles(styles)(_2018)
