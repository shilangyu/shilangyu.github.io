import { Grid } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Geneticts from '../../assets/live-previews/geneticts.svg'
import Tictactoe from '../../assets/live-previews/tictactoe.png'
import urls from '../../constants/urls'
import PreviewCard from './PreviewCard'

const Root = styled(Grid)`
	padding-top: ${p => p.theme.spacing() * 3}px;
`

const previews = [
	{
		name: 'tictactoe',
		desc: 'Playing against an AI that gets better the more it plays',
		picSrc: Tictactoe,
		url: urls.external.livePreviews.tictactoe
	},
	{
		name: 'genetic.ts',
		desc: 'Showcases of my genetic.ts library for genetic algorithms',
		picSrc: Geneticts,
		url: urls.external.livePreviews.geneticts
	}
]

const LivePreviews: React.FC = () => (
	<Root container spacing={3} alignItems="flex-start">
		{previews.map(preview => (
			<Grid key={preview.url} xs item>
				<PreviewCard {...preview} />
			</Grid>
		))}
	</Root>
)

export default LivePreviews
