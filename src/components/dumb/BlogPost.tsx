import { Button, Divider, Grid, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import styled from 'styled-components'
import { uID } from '../../constants/generators'

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

interface Props {
	title: string
	pagination: string[]
	posts: (string | JSX.Element)[]
}

interface State {
	pagiId: string[]
}

class BlogPost extends Component<Props, State> {
	state = {
		pagiId: new Array(this.props.pagination.length).fill(null).map(e => uID.next().value)
	}

	paginationOnClick = (id: string) => () =>
		document.querySelector(`#${id}`)!.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})

	render() {
		const { title, pagination, posts } = this.props
		const { pagiId } = this.state

		return (
			<>
				<Typography align="center" color="textPrimary" variant="h2">
					{title}
				</Typography>

				<Pagination justify="center" direction="row" alignItems="center" spacing={10} container>
					{pagination.map((name, i) => (
						<Grid item key={i}>
							<Button onClick={this.paginationOnClick(pagiId[i])}>{name}</Button>
						</Grid>
					))}
				</Pagination>

				{posts.map((post, i) => (
					<React.Fragment key={i}>
						<Subtitle color="textPrimary" variant="h5" id={pagiId[i]}>
							{pagination[i]}
						</Subtitle>

						<Typography align="justify">{post}</Typography>

						{posts.length - 1 !== i && <BlogDivider />}
					</React.Fragment>
				))}
			</>
		)
	}
}

export default BlogPost
