import React, { Component } from 'react'

import { withStyles, Theme, WithStyles, createStyles, Grid } from '@material-ui/core'

import PreviewCard from './PreviewCard'

import urls from '../../constants/urls'

const styles = (theme: Theme) =>
	createStyles({
		root: {
			paddingTop: theme.spacing.unit * 3
		}
	})

class LivePreviews extends Component<WithStyles<typeof styles>> {
	state = {
		previews: [
			{
				name: 'tictactoe',
				desc: 'Playing against an AI that gets better the more it plays',
				picSrc: '/assets/pics/live-previews/tictactoe.png',
				url: urls.external.livePreviews.tictactoe
			},
			{
				name: 'Genetic.js',
				desc: 'Showcases of my Genetic.js library for genetic algorithms',
				picSrc: '/assets/pics/live-previews/geneticjs.svg',
				url: urls.external.livePreviews.geneticjs
			}
		]
	}
	render() {
		const { classes } = this.props
		const { previews } = this.state

		return (
			<Grid container spacing={24} alignItems="flex-start" className={classes.root}>
				{previews.map(preview => (
					<Grid key={preview.url} xs item>
						<PreviewCard {...preview} />
					</Grid>
				))}
			</Grid>
		)
	}
}

export default withStyles(styles)(LivePreviews)
