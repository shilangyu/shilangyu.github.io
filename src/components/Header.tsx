import {
	AppBar,
	Button,
	Collapse,
	createStyles,
	Hidden,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Menu,
	MenuItem,
	SwipeableDrawer,
	Theme,
	Toolbar,
	Typography,
	withStyles,
	WithStyles
} from '@material-ui/core'
import { ButtonBaseProps } from '@material-ui/core/ButtonBase'
import { ArrowDropDown, ExpandLess, ExpandMore, Menu as MenuIcon } from '@material-ui/icons'
import React, { Component, Fragment } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { uID } from '../constants/generators'
import urls from '../constants/urls'

const WALink: (to: string) => React.SFC<ButtonBaseProps> = to => props => (
	<Link to={to} {...props as LinkProps} />
)

const styles = (theme: Theme) =>
	createStyles({
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
			marginLeft: theme.spacing()
		},
		drawer: {
			width: 'auto'
		},
		nested: {
			paddingLeft: theme.spacing() * 4
		}
	})

type OpenSelect = {
	anchor: null | EventTarget
	uid: null | string
}

type Subs = {
	text: string
	to: string
}

type HLink = {
	text: string
	uid: string
	to?: string
	subs?: Subs[]
}

type State = {
	active: null | string
	openSelect: OpenSelect
	openSubList: null | string
	drawerOpen: boolean
	links: HLink[]
}

class Header extends Component<WithStyles<typeof styles>, State> {
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
					{ text: '2018', to: urls.portfolio.replace(/:year$/, '2018') },
					{ text: '2019', to: urls.portfolio.replace(/:year$/, '2019') }
				],
				uid: uID.next().value
			}
		]
	}

	openSubList = (id: string) =>
		this.setState(prevState => ({ openSubList: prevState.openSubList === id ? null : id }))

	openSelect = (e: CustomEvent, id: string) =>
		this.setState({ openSelect: { anchor: e.currentTarget, uid: id } })
	closeSelect = () => this.setState({ openSelect: { anchor: null, uid: null } })

	toggleDrawer = () => this.setState({ drawerOpen: !this.state.drawerOpen })

	setActive = (id: string) => this.setState({ active: id })

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
															<List component={'div' as 'ul'} disablePadding>
																{link.subs.map(sub => (
																	<ListItem
																		button
																		key={sub.text}
																		component={WALink(sub.to)}
																		className={classes.nested}
																		onClick={() => {
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
														component={WALink(link.to)}
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
											aria-owns={openSelect ? link.uid : undefined}
											aria-haspopup="true"
											onClick={e => this.openSelect((e as unknown) as CustomEvent, link.uid)}
											color="inherit"
											variant={active === link.uid ? 'outlined' : undefined}
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
													component={WALink(sub.to)}
													onClick={() => {
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
										component={WALink(link.to) as any}
										onClick={() => this.setActive(link.uid)}
										color="inherit"
										variant={active === link.uid ? 'outlined' : undefined}
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
