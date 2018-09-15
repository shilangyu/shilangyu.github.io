import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
})


class Footer extends Component {

	render() {

		return (
			<div className={classes.root}>
			</div>
		)
	}
}

export default withStyles(styles)(Footer)
