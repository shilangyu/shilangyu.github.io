import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Blog, Years } from '../../constants/types'
import posts2018 from './posts/2018'
import posts2019 from './posts/2019'
import YearSection from './YearSection'

const noSuchYear: Blog[] = [{ title: 'This year was not documented yet', posts: [] }]

interface Props {
	year: string
}

const Porfolio: React.FC<RouteComponentProps<Props>> = props => {
	const {
		match: {
			params: { year }
		}
	} = props

	const sections: { [key in Years]: Blog[] } = {
		'2018': posts2018,
		'2019': posts2019
	}

	const posts = ((year: any): year is keyof typeof sections => year in sections)(year)
		? sections[year]
		: noSuchYear

	return <YearSection>{posts}</YearSection>
}

export default Porfolio
