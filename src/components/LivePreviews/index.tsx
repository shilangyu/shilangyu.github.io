import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import styled from 'styled-components'
import urls from '../../constants/urls'
import PreviewCard from './PreviewCard'

const Root = styled(Grid)`
	padding-top: ${p => p.theme.spacing() * 3};
	background-color: #e0e0e0;
	margin: 30px 0;
`

interface State {
	previews: {
		name: string
		desc: string
		picSrc: string
		url: string
	}[]
}

class LivePreviews extends Component<{}, State> {
	state = {
		previews: [
			{
				name: 'tictactoe',
				desc: 'Playing against an AI that gets better the more it plays',
				picSrc: '/assets/pics/live-previews/tictactoe.png',
				url: urls.external.livePreviews.tictactoe
			},
			{
				name: 'genetic.ts',
				desc: 'Showcases of my genetic.ts library for genetic algorithms',
				picSrc: '/assets/pics/live-previews/geneticjs.svg',
				url: urls.external.livePreviews.geneticjs
			}
		]
	}

	render() {
		const { previews } = this.state

		return (
			<Root container spacing={3} alignItems="flex-start">
				{previews.map(preview => (
					<Grid key={preview.url} xs item>
						<PreviewCard {...preview} />
					</Grid>
				))}
			</Root>
		)
	}
}

export default LivePreviews
