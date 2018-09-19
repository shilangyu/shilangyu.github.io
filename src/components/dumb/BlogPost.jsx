import React, { Component, Fragment } from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

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

		const uID =  () => '_' + Math.random().toString(36).substr(2, 9)

		pagination = pagination.map(name => ({name, id: uID()}))

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

				<ul>
					{pagination.map(ref =>
						<li key={ref.id} className="waves-effect">
							<a onClick={() => this.paginationOnClick(ref.id)} href="javascript:void(0);">{ref.name}</a>
						</li>)}
				</ul>

				<div className="section">
					{posts.map((post, i) =>
						<Fragment key={i}>
							<h5 id={pagination[i].id}>{pagination[i].name}</h5>
							<p>
								{post}
							</p>
							<div className="divider"></div>
						</Fragment>
					)}
				</div>

			</Container>
		)
	}
}

export default withStyles(styles)(BlogPost)
