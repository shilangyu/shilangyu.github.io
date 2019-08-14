import { Grid } from '@material-ui/core'
import React from 'react'

const Container: React.FC = ({ children }) => (
	<Grid container justify="center">
		<Grid item xs={11} sm={9} md={8} lg={8}>
			{children}
		</Grid>
	</Grid>
)

export default Container
