import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'

import { uID } from './../../constants/generators'

const styles = theme => ({
	divider: {
		'background-color': '#e0e0e0',
		margin: '30px 0'
	},
	subtitle: {
		margin: '0 0 10px 0'
	},
	pagination: {
		margin: '0 0 20px 0'
	}
})

class BlogPost extends Component {
	constructor(props) {
		super(props)

		this.state = { pagiId: new Array(props.pagination.length).fill().map(e => uID.next().value) }
	}

	paginationOnClick = id => () => document.querySelector(`#${id}`).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	})


	render() {
		const { classes, title, pagination, posts } = this.props
		const { pagiId } = this.state

		return (
			<Fragment>
				<Typography
					align="center"
					color="textPrimary"
					variant="display3"
				>
					{title}
				</Typography>


				<Grid className={classes.pagination} justify="center" direction="row" alignItems="center" spacing={16} container>
					{pagination.map((name, i) =>
						<Grid item key={i}>
							<Button onClick={this.paginationOnClick(pagiId[i])}>{name}</Button>
						</Grid>
					)}
				</Grid>

				{
					posts.map((post, i) =>
						<Fragment key={i}>
							<Typography
								color="textPrimary"
								variant="headline"
								id={pagiId[i]}
								className={classes.subtitle}
							>
								{pagination[i]}
							</Typography>

							<Typography align="justify">
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
