import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography
} from '@material-ui/core'
import React, { Component } from 'react'
import styled from 'styled-components'
import urls from '../../constants/urls'
import { clean as cleanStyles } from '../../styles/misc'

const DisplayCard = styled(Card)`
	width: 500;
`

const CardImg = styled(CardMedia)`
	object-fit: cover;
	height: 300;
` as typeof CardMedia

type Props = {
	url: string
	name: string
	picSrc: string
	desc: string
}

class PreviewCard extends Component<Props> {
	render() {
		const { url, name, picSrc, desc } = this.props

		return (
			<DisplayCard>
				<a target="_blank" rel="noopener noreferrer" href={url} style={cleanStyles}>
					<CardActionArea>
						<CardImg component="img" image={picSrc} title={name} />
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
			</DisplayCard>
		)
	}
}

export default PreviewCard
