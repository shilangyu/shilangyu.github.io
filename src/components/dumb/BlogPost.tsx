import React, { Component, Fragment } from 'react'

import {
	WithStyles,
	withStyles,
	Theme,
	createStyles,
	Typography,
	Button,
	Divider,
	Grid
} from '@material-ui/core'

import { uID } from '../../constants/generators'

const styles = (theme: Theme) =>
	createStyles({
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

type Props = {
	title: string
	pagination: string[]
	posts: (string | JSX.Element)[]
}

type State = {
	pagiId: string[]
}

class BlogPost extends Component<Props & WithStyles<typeof styles>, State> {
	state = {
		pagiId: new Array(this.props.pagination.length).fill(null).map(e => uID.next().value)
	}

	paginationOnClick = (id: string) => () =>
		document.querySelector(`#${id}`)!.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})

	render() {
		const { classes, title, pagination, posts } = this.props
		const { pagiId } = this.state

		return (
			<Fragment>
				<Typography align="center" color="textPrimary" variant="h2">
					{title}
				</Typography>

				<Grid
					className={classes.pagination}
					justify="center"
					direction="row"
					alignItems="center"
					spacing={16}
					container
				>
					{pagination.map((name, i) => (
						<Grid item key={i}>
							<Button onClick={this.paginationOnClick(pagiId[i])}>{name}</Button>
						</Grid>
					))}
				</Grid>

				{posts.map((post, i) => (
					<Fragment key={i}>
						<Typography
							color="textPrimary"
							variant="h5"
							id={pagiId[i]}
							className={classes.subtitle}
						>
							{pagination[i]}
						</Typography>

						<Typography align="justify">{post}</Typography>

						{posts.length - 1 !== i && <Divider className={classes.divider} />}
					</Fragment>
				))}
			</Fragment>
		)
	}
}

export default withStyles(styles)(BlogPost)
