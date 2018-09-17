import React, { Component, Fragment } from 'react'
import Header from '../dumb/Header.jsx'

import Year2018 from './2018'


class Porfolio extends Component {
	render() {
		const { match: { params: { year } } } = this.props
		let Year

		switch(year) {
			case '2018':
				Year = Year2018
				break
		}

		return (
			<Fragment>
				<Header active={2} />
				<Year />
      </Fragment>
		)
	}
}

export default Porfolio
