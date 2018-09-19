import React, { Component, Fragment } from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

import Container from './Container.jsx'

const styles = theme => ({
})

class BlogPost extends Component {
	constructor(props) {
		super(props)

		if ('fromData' in props) {
			const { fromData: data } = props

			var title = data.title
			var pagination = data.posts.map(e => e.title)
			var posts = data.posts.map(e => e.content)
		} else {
			var { title, pagination, posts } = props
		}

		const uID = () => '_' + Math.random().toString(36).substr(2, 9)

		pagination = pagination.map(name => ({ name, id: uID() }))

		this.state = { title, pagination, posts }
	}

	paginationOnClick = id => {
		document.querySelector(`#${id}`).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	}

	render() {
		const { classes } = this.props
		const { title, pagination, posts } = this.state

		return (
			<Container>
				<Typography
					align="center"
					color="textPrimary"
					variant="display3"
				>
					{title}
				</Typography>

				{pagination.map(ref => <Button key={ref.id} onClick={() => this.paginationOnClick(ref.id)}>{ref.name}</Button>
				)}

				{posts.map((post, i) =>
					<Fragment key={i}>
						<Typography
							color="textPrimary"
							variant="display1"
							id={pagination[i].id}
						>
							{pagination[i].name}
						</Typography>

						<Typography>
							{post}
						</Typography>

						<div className="divider"></div>
					</Fragment>
				)}

			</Container>
		)
	}
}

export default withStyles(styles)(BlogPost)
