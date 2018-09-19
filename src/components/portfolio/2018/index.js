import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"

import Container from '../../dumb/Container.jsx'
import BlogPost from '../../dumb/BlogPost.jsx'
import posts from './posts.jsx'

const styles = theme => ({
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
				
				<BlogPost fromData={posts[0]}/>

			</Container>
		)
	}
}

export default withStyles(styles)(_2018)
