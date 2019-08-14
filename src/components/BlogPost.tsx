import { Button, Divider, Grid, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import styled from 'styled-components'
import { Blog } from '../constants/types'
import { weakUId } from '../utils'

const BlogDivider = styled(Divider)`
	background-color: #e0e0e0;
	margin: 30px 0;
`

const Subtitle = styled(Typography)`
	margin: 0 0 10px 0;
`

const Pagination = styled(Grid)`
	margin: 0 0 20px 0;
`

interface State {
	pagiId: string[]
}

class BlogPost extends Component<Blog, State> {
	state = {
		pagiId: new Array(this.props.posts.length).fill(null).map(weakUId)
	}

	paginationOnClick = (id: string) => () =>
		document.querySelector(`#${id}`)!.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})

	render() {
		const { title, posts } = this.props
		const { pagiId } = this.state

		return (
			<>
				<Typography align="center" color="textPrimary" variant="h2">
					{title}
				</Typography>

				<Pagination justify="center" direction="row" alignItems="center" spacing={3} container>
					{posts.map(({ title }, i) => (
						<Grid item key={i}>
							<Button onClick={this.paginationOnClick(pagiId[i])}>{title}</Button>
						</Grid>
					))}
				</Pagination>

				{posts.map((post, i) => (
					<React.Fragment key={i}>
						<Subtitle color="textPrimary" variant="h5" id={pagiId[i]}>
							{posts[i].title}
						</Subtitle>

						<Typography align="justify">{post.content}</Typography>

						{posts.length - 1 !== i && <BlogDivider />}
					</React.Fragment>
				))}
			</>
		)
	}
}

export default BlogPost
