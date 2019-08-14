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
	SwipeableDrawer,
	Toolbar,
	Typography
} from '@material-ui/core'
import { ButtonBaseProps } from '@material-ui/core/ButtonBase'
import { ArrowDropDown, ExpandLess, ExpandMore, Menu as MenuIcon } from '@material-ui/icons'
import React, { Component } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'
import urls from '../constants/urls'
import { weakUId } from '../utils'

const WALink: (to: string) => React.SFC<ButtonBaseProps> = to => props => (
	<Link to={to} {...props as LinkProps} />
)

const Nav = styled.nav`
	flex-grow: 1;
`

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

class Header extends Component<{}, State> {
	state = {
		active: null,
		openSelect: { anchor: null, uid: null },
		openSubList: null,
		drawerOpen: false,
		links: [
			{ text: 'about me', to: urls.index, uid: weakUId() },
			{ text: 'live previews', to: urls.livePreviews, uid: weakUId() },
			{
				text: 'portfolio',
				subs: [
					{ text: '2018', to: urls.portfolio.replace(/:year$/, '2018') },
					{ text: '2019', to: urls.portfolio.replace(/:year$/, '2019') }
				],
				uid: weakUId()
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
		const { openSelect, links, active, openSubList } = this.state

		return (
			<Nav>
				<AppBar position="sticky">
					<Toolbar>
						<Hidden smUp>
							<MenuButton onClick={this.toggleDrawer} color="inherit" aria-label="Menu">
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
											link.subs ? (
												<React.Fragment key={link.text}>
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
																<Item
																	button
																	key={sub.text}
																	component={WALink(sub.to)}
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
							</SwipeableDrawer>
						</Hidden>

						<Title variant="h6" color="inherit">
							Marcin Wojnarowski
						</Title>

						<Hidden xsDown>
							{links.map(link =>
								link.subs ? (
									<React.Fragment key={link.text}>
										<Button
											aria-owns={openSelect ? link.uid : undefined}
											aria-haspopup="true"
											onClick={e => this.openSelect((e as unknown) as CustomEvent, link.uid)}
											color="inherit"
											variant={active === link.uid ? 'outlined' : undefined}
										>
											{link.text}
											<DropDownIcon />
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
									</React.Fragment>
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
			</Nav>
		)
	}
}

export default Header