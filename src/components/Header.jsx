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

import urls from '../constants/urls'
import { uID } from '../constants/generators'

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	rightIcon: {
		marginLeft: theme.spacing.unit
	},
	drawer: {
		width: 'auto'
	},
	nested: {
		paddingLeft: theme.spacing.unit * 4
	}
})

class Header extends Component {
	state = {
		active: null,
		openSelect: { anchor: null, uid: null },
		openSubList: null,
		drawerOpen: false,
		links: [
			{ text: 'about me', to: urls.index, uid: uID.next().value },
			{ text: 'live previews', to: urls.livePreviews, uid: uID.next().value },
			{
				text: 'portfolio',
				subs: [
					{ text: '2018', to: urls.portfolio.replace(/:year$/, 2018) },
					{ text: '2019', to: urls.portfolio.replace(/:year$/, 2019) }
				],
				uid: uID.next().value
			}
		]
	}

	openSubList = id =>
		this.setState(prevState => ({ openSubList: prevState.openSubList === id ? false : id }))

	openSelect = (e, id) => this.setState({ openSelect: { anchor: e.currentTarget, uid: id } })
	closeSelect = () => this.setState({ openSelect: { anchor: null, uid: null } })

	toggleDrawer = () => this.setState({ drawerOpen: !this.state.drawerOpen })

	setActive = id => this.setState({ active: id })

	render() {
		const { classes } = this.props
		const { openSelect, links, active, openSubList } = this.state

		return (
			<nav className={classes.root}>
				<AppBar position="sticky">
					<Toolbar>
						<Hidden smUp>
							<IconButton
								onClick={this.toggleDrawer}
								className={classes.menuButton}
								color="inherit"
								aria-label="Menu"
							>
								<MenuIcon />
							</IconButton>

							<SwipeableDrawer
								open={this.state.drawerOpen}
								onClose={this.toggleDrawer}
								onOpen={this.toggleDrawer}
							>
								<div tabIndex={0} role="button" onKeyDown={this.toggleDrawer}>
									<div className={classes.drawer}>
										<List>
											{links.map(link =>
												link.subs ? (
													<Fragment key={link.text}>
														<ListItem
															button
															onClick={e => this.openSubList(link.uid)}
															selected={link.uid === active}
														>
															<ListItemText primary={link.text} />
															{openSubList === link.uid ? <ExpandLess /> : <ExpandMore />}
														</ListItem>
														<Collapse in={openSubList === link.uid} timeout="auto" unmountOnExit>
															<List component="div" disablePadding>
																{link.subs.map(sub => (
																	<ListItem
																		button
																		key={sub.text}
																		component={Link}
																		to={sub.to}
																		className={classes.nested}
																		onClick={e => {
																			this.setActive(link.uid)
																			this.toggleDrawer()
																		}}
																	>
																		<ListItemText primary={sub.text} />
																	</ListItem>
																))}
															</List>
														</Collapse>
													</Fragment>
												) : (
													<ListItem
														onClick={() => {
															this.toggleDrawer()
															this.setActive(link.uid)
														}}
														key={link.text}
														component={Link}
														to={link.to}
														button
														selected={link.uid === active}
													>
														<ListItemText primary={link.text} />
													</ListItem>
												)
											)}
										</List>
									</div>
								</div>
							</SwipeableDrawer>
						</Hidden>

						<Typography variant="h6" color="inherit" className={classes.grow}>
							Marcin Wojnarowski
						</Typography>

						<Hidden xsDown>
							{links.map(link =>
								link.subs ? (
									<Fragment key={link.text}>
										<Button
											aria-owns={openSelect ? link.uid : null}
											aria-haspopup="true"
											onClick={e => this.openSelect(e, link.uid)}
											color="inherit"
											variant={active === link.uid ? 'outlined' : null}
										>
											{link.text}
											<ArrowDropDown className={classes.rightIcon} />
										</Button>
										<Menu
											id={link.uid}
											anchorEl={openSelect.anchor}
											open={openSelect.uid === link.uid}
											onClose={this.closeSelect}
										>
											{link.subs.map(sub => (
												<MenuItem
													key={sub.text}
													component={Link}
													to={sub.to}
													onClick={e => {
														this.setActive(link.uid)
														this.closeSelect()
													}}
												>
													{sub.text}
												</MenuItem>
											))}
										</Menu>
									</Fragment>
								) : (
									<Button
										key={link.text}
										component={Link}
										to={link.to}
										onClick={() => this.setActive(link.uid)}
										color="inherit"
										variant={active === link.uid ? 'outlined' : null}
									>
										{link.text}
									</Button>
								)
							)}
						</Hidden>
					</Toolbar>
				</AppBar>
			</nav>
		)
	}
}

export default withStyles(styles)(Header)
