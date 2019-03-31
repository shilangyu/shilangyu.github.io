import React, { Component, Fragment } from 'react'

import { withStyles, createStyles, WithStyles, Theme, Tabs, Tab, Paper } from '@material-ui/core'

import { Container } from '../dumb/Container'
import BlogPost from '../dumb/BlogPost'

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

export type Blog = {
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
