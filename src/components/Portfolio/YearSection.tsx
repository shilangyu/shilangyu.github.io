import { Paper, Tab, Tabs } from '@material-ui/core'
import React, { Component } from 'react'
import styled from 'styled-components'
import { Blog } from '../../constants/types'
import BlogPost from '../BlogPost'
import Container from '../Container'

const TabBackground = styled(Paper)`
	flex-grow: 1;
	background-color: ${p => p.theme.palette.primary.main};
`

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
		const { children: blogs } = this.props
		const currentBlog = blogs[this.state.tab]

		return (
			<>
				<TabBackground square>
					<Tabs
						value={this.state.tab}
						onChange={this.tabChange}
						indicatorColor="secondary"
						centered
						variant="fullWidth"
					>
						{blogs.map(({ title }) => (
							<Tab key={title} label={title} />
						))}
					</Tabs>
				</TabBackground>

				<Container>
					<BlogPost title={currentBlog.title} posts={currentBlog.posts} />
				</Container>
			</>
		)
	}
}

export default YearSection
