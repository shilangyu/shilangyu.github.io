import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'

import urls from '../../constants/urls'


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
	drawer: {
		width: 'auto'
	},
	nested: {
		paddingLeft: theme.spacing.unit * 4,
	}
})


class Header extends Component {
	state = {
		anchorEl: null,
		drawerOpen: false,
		open: false
	}

	portfolioClick = event => this.setState({ anchorEl: event.currentTarget })

	portfolioClose = () => this.setState({ anchorEl: null })

	toggleDrawer = () => this.setState({ drawerOpen: !this.state.drawerOpen })

	toggleSubList = () => this.setState(state => ({ open: !this.state.open }))

	render() {
		const { classes, active } = this.props
		const { anchorEl } = this.state

		let currentActive = 0

		const links = [
			{ text: 'about me', to: urls.index },
			{ text: 'live previews', to: urls.livePreviews },
			{
				text: 'portfolio', subs: [
					{ text: '2018', to: urls.portfolio.replace(/:year$/, 2018) }
				]
			}
		]

		return (
			<div className={classes.root}>
				<AppBar position="sticky">
					<Toolbar>

						<Hidden smUp>

							<IconButton onClick={this.toggleDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
								<MenuIcon />
							</IconButton>

							<SwipeableDrawer
								open={this.state.drawerOpen}
								onClose={this.toggleDrawer}
								onOpen={this.toggleDrawer}
							>
								<div
									tabIndex={0}
									role="button"
									onKeyDown={this.toggleDrawer}
								>
									<div className={classes.drawer}>
										<List>
											{links.map(link => link.subs ?
												<Fragment key={link.text}>
													<ListItem button onClick={this.toggleSubList}>
														<ListItemText primary={link.text} />
														{this.state.open ? <ExpandLess /> : <ExpandMore />}
													</ListItem>
													<Collapse in={this.state.open} timeout="auto" unmountOnExit>
														<List component="div" disablePadding>
															{link.subs.map(sub =>
																<ListItem button key={sub.text} component={Link} to={sub.to} className={classes.nested}>
																	<ListItemText primary={sub.text} />
																</ListItem>
															)}
														</List>
													</Collapse>
												</Fragment>
												:
												<ListItem key={link.text} component={Link} to={link.to} button>
													<ListItemText primary={link.text} />
												</ListItem>
											)}
										</List>
									</div>
								</div>
							</SwipeableDrawer>

						</Hidden>

						<Typography variant="title" color="inherit" className={classes.grow}>
							Marcin Wojnarowski
          	</Typography>

						<Hidden xsDown>
							{links.map(link => link.subs ?
								<Fragment key={link.text}>
									<Button
										aria-owns={anchorEl ? 'portfolio-years' : null}
										aria-haspopup="true"
										onClick={this.portfolioClick}
										color="inherit"
										variant={currentActive++ === active ? 'outlined' : null}
									>
										{link.text}
										<ArrowDropDown className={classes.rightIcon} />
									</Button>
									<Menu
										id="portfolio-years"
										anchorEl={anchorEl}
										open={Boolean(anchorEl)}
										onClose={this.portfolioClose}
									>
										{link.subs.map(sub =>
											<MenuItem
												key={sub.text}
												component={Link}
												to={sub.to}
												onClick={this.portfolioClose}
											>
												{sub.text}
											</MenuItem>
										)}
									</Menu>
								</Fragment>
								: <Button
									key={link.text}
									component={Link}
									to={link.to}
									color="inherit"
									variant={currentActive++ === active ? 'outlined' : null}
								>
									{link.text}
								</Button>
							)}
						</Hidden>

					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

export default withStyles(styles)(Header)
