import {
	AppBar,
	Button,
	Collapse,
	Hidden,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Menu,
	MenuItem,
	Slide,
	SwipeableDrawer,
	Toolbar,
	Typography,
	useScrollTrigger
} from '@material-ui/core'
import { ArrowDropDown, ExpandLess, ExpandMore, Menu as MenuIcon } from '@material-ui/icons'
import React, { Component } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'
import { Years } from '../constants/types'
import urls from '../constants/urls'
import { weakUId } from '../utils'

const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
	<Link innerRef={ref as any} {...props} />
))

const MenuButton = styled(IconButton)`
	margin-left: -12;
	margin-right: 20;
`

const Item = styled(ListItem)`
	padding-left: ${p => p.theme.spacing() * 4};
` as typeof ListItem

const DropDownIcon = styled(ArrowDropDown)`
	margin-left: ${p => p.theme.spacing() * 4};
`

const Title = styled(Typography)`
	flex-grow: 1;
`

type HLink = {
	text: string
	uid: string
} & (
	| {
			to: string
	  }
	| {
			subs: {
				text: string
				to: string
			}[]
	  })

const links: HLink[] = [
	{ text: 'about me', to: urls.index },
	{ text: 'live previews', to: urls.livePreviews },
	{
		text: 'portfolio',
		subs: Object.values(Years).map(text => ({
			text,
			to: urls.portfolio.replace(/:year$/, text)
		}))
	}
].map(e => ({ ...e, uid: weakUId() }))

const HideOnScroll: React.FC = ({ children }) => {
	const trigger = useScrollTrigger()

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	)
}

type OpenSelect =
	| {
			anchor: EventTarget
			uid: string
	  }
	| {
			anchor: null
			uid: null
	  }

interface State {
	active: string
	openSelect: OpenSelect
	openSubList: null | string
	drawerOpen: boolean
}

class Header extends Component<{}, State> {
	state = {
		active: (() => {
			const route = window.location.hash.substring(1)
			const found = links.find(e => {
				if ('subs' in e) {
					const inSubs = e.subs.find(e => e.to.startsWith(route))
					return !!inSubs
				}
				return e.to === route
			})

			return found ? found.uid : ''
		})(),
		openSelect: { anchor: null, uid: null },
		openSubList: null,
		drawerOpen: false
	}

	toggleSubList = (id: string) =>
		this.setState(prevState => ({ openSubList: prevState.openSubList === id ? null : id }))

	openSelect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) =>
		this.setState({ openSelect: { anchor: e.currentTarget, uid: id } })

	closeSelect = () => this.setState({ openSelect: { anchor: null, uid: null } })

	toggleDrawer = () => this.setState({ drawerOpen: !this.state.drawerOpen })

	setActive = (id: string) => this.setState({ active: id })

	render() {
		const { openSelect, active, openSubList } = this.state

		return (
			<nav>
				<Toolbar />
				<HideOnScroll>
					<AppBar>
						<Toolbar>
							<Hidden smUp>
								<MenuButton onClick={this.toggleDrawer} color="inherit">
									<MenuIcon />
								</MenuButton>

								<SwipeableDrawer
									open={this.state.drawerOpen}
									onClose={this.toggleDrawer}
									onOpen={this.toggleDrawer}
								>
									<div tabIndex={0} role="button" onKeyDown={this.toggleDrawer}>
										<List>
											{links.map(link =>
												'subs' in link ? (
													<React.Fragment key={link.text}>
														<ListItem
															button
															onClick={e => this.toggleSubList(link.uid)}
															selected={link.uid === active}
														>
															<ListItemText primary={link.text} />
															{openSubList === link.uid ? <ExpandLess /> : <ExpandMore />}
														</ListItem>
														<Collapse in={openSubList === link.uid} timeout="auto" unmountOnExit>
															<List>
																{link.subs.map(sub => (
																	<Item
																		button
																		key={sub.text}
																		component={AdapterLink}
																		to={sub.to}
																		onClick={() => {
																			this.setActive(link.uid)
																			this.toggleDrawer()
																		}}
																	>
																		<ListItemText primary={sub.text} />
																	</Item>
																))}
															</List>
														</Collapse>
													</React.Fragment>
												) : (
													<ListItem
														onClick={() => {
															this.setActive(link.uid)
															this.toggleDrawer()
														}}
														key={link.text}
														component={AdapterLink}
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
								</SwipeableDrawer>
							</Hidden>

							<Title variant="h6" color="inherit">
								Marcin Wojnarowski
							</Title>

							<Hidden xsDown>
								{links.map(link =>
									'subs' in link ? (
										<React.Fragment key={link.text}>
											<Button
												aria-haspopup="true"
												onClick={e => this.openSelect(e, link.uid)}
												color="inherit"
												variant={active === link.uid ? 'outlined' : undefined}
											>
												{link.text}
												<DropDownIcon />
											</Button>
											<Menu
												anchorEl={openSelect.anchor}
												open={openSelect.uid === link.uid}
												onClose={this.closeSelect}
											>
												{link.subs.map(sub => (
													<MenuItem
														key={sub.text}
														component={AdapterLink}
														to={sub.to}
														onClick={() => {
															this.setActive(link.uid)
															this.closeSelect()
														}}
													>
														{sub.text}
													</MenuItem>
												))}
											</Menu>
										</React.Fragment>
									) : (
										<Button
											key={link.text}
											component={AdapterLink}
											to={link.to}
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
				</HideOnScroll>
			</nav>
		)
	}
}

export default Header
