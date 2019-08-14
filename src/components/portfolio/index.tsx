import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import posts2018 from './posts/2018'
import posts2019 from './posts/2019'
import YearSection, { Blog } from './YearSection'

interface Props {
	year: string
}

class Porfolio extends Component<RouteComponentProps<Props>> {
	render() {
		const {
			match: {
				params: { year }
			}
		} = this.props

		const sections: { [key: string]: Blog[] } = {
			'2018': posts2018,
			'2019': posts2019
		}
		const posts = sections[year] || (() => <div>no such year</div>)

		return <YearSection>{posts}</YearSection>
	}
}

export default Porfolio
