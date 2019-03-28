import React, { Component, Fragment } from 'react'
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

import { Container } from '../dumb/Container'
import BlogPost from '../dumb/BlogPost'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'

const styles = (theme: Theme) =>
	createStyles({
		paper: {
			flexGrow: 1,
			backgroundColor: theme.palette.primary.main
		}
	})

type State = {
	tab: number
}

type Post = {
	title: string
	content: string | JSX.Element
}

type Blog = {
	title: string
	posts: Post[]
}

type Props = {
	children: Blog[]
}

class YearSection extends Component<WithStyles<typeof styles> & Props, State> {
	state = {
		tab: 0
	}

	tabChange = (event: React.ChangeEvent<{}>, value: number) => this.setState({ tab: value })

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
						variant="fullWidth"
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
