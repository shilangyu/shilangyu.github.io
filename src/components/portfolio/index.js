import React, { Component } from 'react'

import YearSection from './YearSection'

import posts2018 from './posts/2018'
import posts2019 from './posts/2019'

class Porfolio extends Component {
	render() {
		const {
			match: {
				params: { year }
			}
		} = this.props
		const sections = {
			'2018': posts2018,
			'2019': posts2019
		}
		const posts = sections[year] || (() => <div>no such year</div>)

		return <YearSection>{posts}</YearSection>
	}
}

export default Porfolio
