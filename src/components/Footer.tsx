import React, { Component } from 'react'

import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Zoom from '@material-ui/core/Zoom'

import urls from '../constants/urls'

const styles = (theme: Theme) =>
	createStyles({
		root: {
			marginTop: theme.spacing.unit * 3
		},
		main: {
			backgroundColor: theme.palette.primary.main,
			paddingTop: theme.spacing.unit * 3,
			paddingBottom: theme.spacing.unit * 3
		},
		lower: {
			backgroundColor: theme.palette.primary.dark,
			paddingTop: theme.spacing.unit,
			paddingBottom: theme.spacing.unit
		},
		avatar: {
			margin: 10
		},
		row: {
			display: 'flex',
			justifyContent: 'center'
		}
	})

type FooterLinkProps = {
	text: string
	href: string
	src: string
	class: string
}

const FooterLink: React.SFC<FooterLinkProps> = props => (
	<Tooltip TransitionComponent={Zoom} title={props.text}>
		<Avatar
			style={{ cursor: 'pointer' }}
			onClick={() => window.open(props.href)}
			alt={props.text}
			src={props.src}
			className={props.class}
		/>
	</Tooltip>
)

class Footer extends Component<WithStyles<typeof styles>> {
	render() {
		const { classes } = this.props

		return (
			<footer className={classes.root}>
				<Grid className={classes.main} justify="space-around" direction="row" container>
					<Grid item>
						<Typography variant="h6">info</Typography>
						<Typography>
							designed using Materialui <br />
							html5 canvas drawing by p5.js <br />
							build with React <br />
							all graphs made thanks to draw.io <br />
						</Typography>
					</Grid>

					<Grid item>
						<Typography variant="h6">links</Typography>
						<div className={classes.row}>
							<FooterLink
								href={urls.external.github}
								text="GitHub"
								src={'/assets/pics/github-logo.png'}
								class={classes.avatar}
							/>
							<FooterLink
								href={urls.external.p5}
								text="p5.js"
								src={'/assets/pics/p5js-logo.png'}
								class={classes.avatar}
							/>
							<FooterLink
								href={urls.external.drawio}
								text="draw.io"
								src={'/assets/pics/drawio-logo.png'}
								class={classes.avatar}
							/>
							<FooterLink
								href={urls.external.materialui}
								text="materialui"
								src={'/assets/pics/materialui-logo.svg'}
								class={classes.avatar}
							/>
							<FooterLink
								href={urls.external.react}
								text="react"
								src={'/assets/pics/react-logo.png'}
								class={classes.avatar}
							/>
						</div>
					</Grid>
				</Grid>

				<Grid className={classes.lower} justify="space-around" direction="row" container>
					<Grid item>
						<Typography>&reg; 42069 you'r mom &trade;</Typography>
					</Grid>

					<Grid item>
						<Typography>More links</Typography>
					</Grid>
				</Grid>
			</footer>
		)
	}
}

export default withStyles(styles)(Footer)
