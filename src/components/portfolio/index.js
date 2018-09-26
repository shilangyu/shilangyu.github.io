import React, { Component } from 'react'

import Year2018 from './2018'


class Porfolio extends Component {
	render() {
		const { match: { params: { year } } } = this.props
		let Year

		switch (year) {
			case '2018':
				Year = Year2018
				break
			default:
				Year = () => <div>no such year</div>
		}

		return (
			<Year />
		)
	}
}

export default Porfolio
