import React, { Component } from "react"
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"

import Container from '../../dumb/Container.jsx'

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

class Snek extends Component {
	render() {
		const { classes } = this.props

		return (
			<Container>
				<h1 className="center-align">this.page</h1>
				<div className="section">
					<p>
						<div className="center">
							<img className="hoverable fit" src="/public/assets/pictures/page-graph.png" alt="" />
						</div>
						This page was built on Node.js, giving me a lot of flexibility when handling http requests. Typed in URL is sent to the server.
						The server then strips down the URL and looks up in a database informations about it. After receiving
						data it is sent to a html renderer EJS that creates the HTML page. Once done it's sent to the
						user.
                        </p>
				</div>

				<div className="divider"></div>

				<div className="section">
					<h5>Why bother?</h5>
					<p>
						<br /> The page is written in a clear and easy to read way, it helps in futher development. To some
						tiny extent the page was build following the MVC (model-view-controller) model.
                        </p>
				</div>

				<div className="divider"></div>

				<div className="section">
					<h5>Stats</h5>
					<p id="stats">
						<br />
						<i className="material-icons left">insert_drive_file</i>
						<br />
						<i className="material-icons left">code</i>
					</p>
				</div>

				<div className="divider"></div>

				<div className="section center">
					<a className="btn waves-effect waves-light mediumRoboto" href="https://github.com/clitcancer/myPage">
						Repository
                        <i className="material-icons right icon-github small"></i>
					</a>
				</div>

			</Container>
		)
	}
}

export default withStyles(styles)(Snek)
