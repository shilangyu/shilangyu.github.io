import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { ArrowDropDown } from '@material-ui/icons'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'


const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	rightIcon: {
		marginLeft: theme.spacing.unit,
	},
})


class Header extends Component {
	state = {
		anchorEl: null,
	}

	portfolioClick = event => {
		this.setState({ anchorEl: event.currentTarget })
	}

	portfolioClose = () => {
		this.setState({ anchorEl: null })
	}

	render() {
		const { classes } = this.props
		const { anchorEl } = this.state

		return (
			<div className={classes.root}>
				<AppBar position="sticky">
					<Toolbar>
						<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="title" color="inherit" className={classes.grow}>
							Marcin Wojnarowski
          </Typography>
						<Button color="inherit">about me</Button>
						<Button color="inherit">live previews</Button>

						<Button
							aria-owns={anchorEl ? 'portfolio-years' : null}
							aria-haspopup="true"
							onClick={this.portfolioClick}
							color="inherit"
						>
							portfolio
							<ArrowDropDown className={classes.rightIcon} />
						</Button>
						<Menu
							id="portfolio-years"
							anchorEl={anchorEl}
							open={Boolean(anchorEl)}
							onClose={this.portfolioClose}
						>
							<MenuItem onClick={this.portfolioClose}>2018</MenuItem>
						</Menu>

					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

export default withStyles(styles)(Header)
