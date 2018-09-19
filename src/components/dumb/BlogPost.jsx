import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
	divider: {
		'background-color': '#e0e0e0',
		margin: '30px 0'
	},
	subtitle: {
		margin: '0 0 10px 0'
	}
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
			<Fragment>
				<Typography
					align="center"
					color="textPrimary"
					variant="display3"
				>
					{title}
				</Typography>


				<Grid justify="center" direction="row" alignItems="center" spacing={16} container>
					{pagination.map(ref =>
						<Grid item key={ref.id}>
							<Button onClick={() => this.paginationOnClick(ref.id)}>{ref.name}</Button>
						</Grid>
					)}
				</Grid>

				{
					posts.map((post, i) =>
						<Fragment key={i}>
							<Typography
								color="textPrimary"
								variant="headline"
								id={pagination[i].id}
								className={classes.subtitle}
							>
								{pagination[i].name}
							</Typography>

							<Typography>
								{post}
							</Typography>

							{posts.length - 1 !== i && <Divider className={classes.divider} />}

						</Fragment>
					)
				}
			</Fragment>
		)
	}
}

export default withStyles(styles)(BlogPost)
