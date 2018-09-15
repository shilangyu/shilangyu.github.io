import React from 'react'

import Grid from "@material-ui/core/Grid"


export default props =>
	<Grid container justify="center">
		<Grid item xs={12} sm={9} md={8} lg={8}>
			{props.children}
		</Grid>
	</Grid>
