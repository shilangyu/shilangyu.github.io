import React, { Component } from 'react'

import {
	Theme,
	createStyles,
	WithStyles,
	withStyles,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography
} from '@material-ui/core'

import urls from '../../constants/urls'
import { clean as cleanStyles } from '../../styles/misc'

const styles = (theme: Theme) =>
	createStyles({
		card: {
			width: 500
		},
		media: {
			objectFit: 'cover',
			height: 300
		},
		upperCard: {
			// maxHeight: 500
		}
	})

type Props = {
	url: string
	name: string
	picSrc: string
	desc: string
}

class PreviewCard extends Component<Props & WithStyles<typeof styles>> {
	render() {
		const { classes, url, name, picSrc, desc } = this.props

		return (
			<Card className={classes.card}>
				<a target="_blank" rel="noopener noreferrer" href={url} style={cleanStyles}>
					<CardActionArea className={classes.upperCard}>
						<CardMedia component="img" className={classes.media} image={picSrc} title={name} />
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{name}
							</Typography>
							<Typography component="p">{desc}</Typography>
						</CardContent>
					</CardActionArea>
				</a>
				<CardActions>
					<Button
						size="small"
						color="primary"
						onClick={() => window.open(urls.external.github + url)}
					>
						Repository
					</Button>
				</CardActions>
			</Card>
		)
	}
}

export default withStyles(styles)(PreviewCard)
