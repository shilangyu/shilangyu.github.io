import React from 'react'

import Grid from '@material-ui/core/Grid'

export const Container: React.SFC = props => (
	<Grid container justify="center">
		<Grid item xs={11} sm={9} md={8} lg={8}>
			{props.children}
		</Grid>
	</Grid>
)
