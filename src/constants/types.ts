export enum Years {
	y2018 = '2018',
	y2019 = '2019'
}

export type Post = {
	title: string
	content: JSX.Element
}

export type Blog = {
	title: string
	posts: Post[]
}
