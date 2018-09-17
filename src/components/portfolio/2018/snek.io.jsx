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
				<h1 className="center-align">snek.io</h1>

				<ul className="pagination center">
					<li className="waves-effect">
						<a href="javascript:void(0);">Description</a>
					</li>
					<li className="waves-effect">
						<a href="javascript:void(0);">Menu</a>
					</li>
					<li className="waves-effect">
						<a href="javascript:void(0);">Game</a>
					</li>
					<li className="waves-effect">
						<a href="javascript:void(0);">Leaderboards</a>
					</li>
					<li className="waves-effect">
						<a href="javascript:void(0);">Multiplayer</a>
					</li>
				</ul>

				<div className="section">
					<h5 id="Description">Description</h5>
					<p>
						It was a project from the first semester of C# courses. The goal was to recreate the classic game "Snake" in Windows Forms.
						The adanced level of this project was adding multiplayer features (using sockets).
								<br />
					</p>
				</div>

				<div className="divider"></div>

				<div className="section">
					<h5 id="Menu">Menu</h5>
					<p>
						<img className="hoverable fit materialboxed" src="/public/assets/pictures/snek-menu.png" alt="" />
						<br /> In the menu you can choose your speed, color of your snake, color of the food, background color,
						and your nickname that will appear on the leaderboards. On the left you can see a live-preview
						of your settings.
			<br />
					</p>
				</div>

				<div className="divider"></div>

				<div className="section">
					<h5 id="Game">Game</h5>
					<p>
						<img className="hoverable fit materialboxed" src="/public/assets/pictures/snek-game.png" alt="" />
						<br /> Just like in the original game there is normal food and special food, where normal food gives
						you points equal to your speed and special giving &times;10 the speed. In addition, the special
						food disappears after some time (scaled to your speed). After consuming any food your snake grows
						larger. The goal is to survive as long as you can without running into your tail. After losing,
						the score, snake length, and chosen speed is saved to the leaderboards.
			<br />
					</p>
				</div>

				<div className="divider"></div>

				<div className="section">
					<h5 id="Leaderboards">Leaderboards</h5>
					<p>
						<img className="hoverable fit materialboxed" src="/public/assets/pictures/snek-leaderboards.png" alt="" />
						<br /> Here you can see all records on your network. It displays some basic information of the game.
						(Leaderboards database is hosted by MySQL on my PC, so for now it doesnt work on other networks)
			<br />
					</p>
				</div>

				<div className="divider"></div>

				<div className="section">
					<h5 id="Multiplayer">Multiplayer</h5>
					<p>
						<img className="hoverable fit materialboxed" src="/public/assets/pictures/snek-multiplayer.png" alt="" />
						<br /> Each player can either host or join a game, by entering a hosting number and your nickname.
						After that a lobby window pops up where you can see all players' nicknames in this room.
			<br />
					</p>
				</div>

			</Container>
		)
	}
}

export default withStyles(styles)(Snek)
