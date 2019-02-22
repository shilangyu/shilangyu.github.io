import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Container from '../dumb/Container.jsx'
import BlogPost from '../dumb/BlogPost.jsx'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
	paper: {
		flexGrow: 1,
		backgroundColor: theme.palette.primary.main
	}
})

class YearSection extends Component {
	state = {
		tab: 0
	}

	tabChange = (event, value) => this.setState({ tab: value })

	render() {
		const { classes, children: posts } = this.props
		const post = posts[this.state.tab]

		return (
			<Fragment>
				<Paper className={classes.paper} square>
					<Tabs
						value={this.state.tab}
						onChange={this.tabChange}
						indicatorColor="secondary"
						centered
						fullWidth
					>
						{posts.map(({ title }) => (
							<Tab key={title} label={title} />
						))}
					</Tabs>
				</Paper>

				<Container>
					<BlogPost
						key={post.title}
						title={post.title}
						pagination={post.posts.map(e => e.title)}
						posts={post.posts.map(e => e.content)}
					/>
				</Container>
			</Fragment>
		)
	}
}

export default withStyles(styles)(YearSection)
