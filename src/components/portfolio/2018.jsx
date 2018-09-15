import React, { Component } from "react"
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"

const styles = theme => ({
	root: {
		overflow: "hidden",
		padding: `0 ${theme.spacing.unit * 9}px`
	},
	// wrapper: {
	//   maxWidth: 400
	// },
	paper: {
		margin: theme.spacing.unit,
		padding: theme.spacing.unit * 1
	}
})

class _2018 extends Component {
	render() {
		const { classes } = this.props
		const message = `Truncation should be conditionally applicable on this long line of text
											as this is a much longer line than what the container can support. `

		return (
			<div className={classes.root}>
				<div className={classes.wrapper}>
					<Paper className={classes.paper}>
						<Grid container wrap="nowrap" spacing={16}>
							<Grid item>
								<Avatar>W</Avatar>
							</Grid>
							<Grid item xs>
								<Typography>{message}</Typography>
							</Grid>
						</Grid>
					</Paper>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(_2018)
