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
				<h1 className="center-align">AI / ML</h1>

				<ul className="pagination center">
					<li className="waves-effect">
						<a href="javascript:void(0);">Desc</a>
					</li>
					<li className="waves-effect">
						<a href="javascript:void(0);">GA</a>
					</li>
					<li className="waves-effect">
						<a href="javascript:void(0);">NN</a>
					</li>
					<li className="waves-effect">
						<a href="javascript:void(0);">NE</a>
					</li>
					<li className="waves-effect">
						<a href="javascript:void(0);">TicTacToe</a>
					</li>
				</ul>

				<div className="section">
					<h5 id="Desc">Description</h5>
					<p>
						<br /> It was a personal development project: learning more about how Artificial intelligence works.
						My goal was to fully understand and write code from the ground up without using existing libraries.
						Below you can find some projects I worked on using Machine Learning algorithms.
				<br /> Disclaimer: graphs are only to explain the very basic idea.
		</p>

				</div>

				<div className="divider"></div>

				<div className="section">
					<h5 id="GA">Genetic Algorithm
				<a className="btn waves-effect waves-light mediumRoboto" href="/live-previews/10PRINT">
							10PRINT
						<i className="material-icons right">slideshow</i>
						</a>
					</h5>
					<p>
						<img className="hoverable fit materialboxed" src="/public/assets/pictures/GA-graph.png" alt="" />
						<br /> This algorithm focuses on perfecting something, just like in nature, we evolve and the fittest
						survives. Its comparable to how humans inherit features through genetics. In this example many
						10PRINT designs are randomly created then after you chose your favorite 2, new ones are generated
						based on the previous bests.
		
				<br /> I have also developed my own GA library for JavaScript:
				<a className="btn waves-effect waves-light mediumRoboto" href="https://github.com/clitcancer/Genetic.js">
							Repository
						<i className="material-icons right icon-github small"></i>
						</a>

					</p>

				</div>

				<div className="divider"></div>

				<div className="section">
					<h5 id="NN">Neural Network</h5>
					<p>
						<img className="hoverable fit materialboxed" src="/public/assets/pictures/NNcar-laser.png" alt="" />
						<br /> This algorithm is the `brain`. Based on inputs it gives an output after processing the information.
						In this example I build in C# a program that first takes an image of a track to be created. Then
						from a given point cars are started and their goal is to go as far as possible. As shown on the
						picture, a car recieves distance inputs. It scans how far a wall is at all 8 directions and decides
						where to move next.
		</p>
				</div>

				<div className="divider"></div>

				<div className="section">
					<h5 id="NE">Neuroevolution
				<a className="btn waves-effect waves-light mediumRoboto" href="/live-previews/jumping-balls">
							Jumping balls
						<i className="material-icons right">slideshow</i>
						</a>
					</h5>
					<p>
						<img className="hoverable fit materialboxed" src="/public/assets/pictures/NE-graph.png" alt="" />
						<br /> This algorithm merges the two previous ones. Now the `brain` gets better over time, the arrows
						here will represent the IQ level of a network. In this example I created a simulation of some
						balls trying to learn how to jump over the obstacles. Each of the 100 balls get the input of
						how far and how high is the obstacle, and how fast is it moving. Each of them have a unique set
						of arrows that help them decide whether they should jump or not. After all 100 balls are dead
						(hit a wall), a new, better generation of 100 new balls is made based & mutated off the best
						balls in the previous generation.
		</p>
				</div>

				<div className="divider"></div>

				<div className="section" id="bitch">
					<h5 id="TicTacToe">TicTacToe
				<a className="btn waves-effect waves-light mediumRoboto" href="/live-previews/tictactoe">
							TicTacToe
						<i className="material-icons right">slideshow</i>
						</a>
					</h5>
					<p>
						A simple AI I made that learns by playing, if a move he makes is bad he remembers it and never does it again.
				<br />
					</p>
				</div>

			</Container>
		)
	}
}

export default withStyles(styles)(Snek)
