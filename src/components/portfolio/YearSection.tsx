import { Paper, Tab, Tabs } from '@material-ui/core'
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import BlogPost from '../dumb/BlogPost'
import Container from '../dumb/Container'

const TabBackground = styled(Paper)`
	flex-grow: 1;
	background-color: ${p => p.theme.palette.primary.main};
`

type Post = {
	title: string
	content: string | JSX.Element
}

export type Blog = {
	title: string
	posts: Post[]
}

interface Props {
	children: Blog[]
}

interface State {
	tab: number
}

class YearSection extends Component<Props, State> {
	state = {
		tab: 0
	}

	tabChange = (e: React.ChangeEvent<{}>, value: number) => this.setState({ tab: value })

	render() {
		const { children: posts } = this.props
		const post = posts[this.state.tab]

		return (
			<Fragment>
				<TabBackground square>
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
				</TabBackground>

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

export default YearSection
