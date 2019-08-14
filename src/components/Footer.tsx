import { Avatar, Grid, Tooltip, Typography, Zoom } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import urls from '../constants/urls'

const Root = styled.footer`
	margin-top: ${p => p.theme.spacing() * 3};
`

const Main = styled(Grid)`
	background-color: ${p => p.theme.palette.primary.main};
	padding-top: ${p => p.theme.spacing() * 3};
	padding-bottom: ${p => p.theme.spacing() * 3};
`

const Side = styled(Grid)`
	background-color: ${p => p.theme.palette.primary.dark};
	padding-top: ${p => p.theme.spacing()};
	padding-bottom: ${p => p.theme.spacing()};
`

const LogoAvatar = styled(Avatar)`
	margin: 10;
`

const Row = styled.div`
	display: flex;
	justify-content: center;
`

type FooterLinkProps = {
	text: string
	href: string
	src: string
}

const FooterLink: React.FC<FooterLinkProps> = props => (
	<Tooltip TransitionComponent={Zoom} title={props.text}>
		<LogoAvatar
			style={{ cursor: 'pointer' }}
			onClick={() => window.open(props.href)}
			alt={props.text}
			src={props.src}
		/>
	</Tooltip>
)

const Footer = () => (
	<Root>
		<Main justify="space-around" direction="row" container>
			<Grid item>
				<Typography variant="h6">info</Typography>
				<Typography>
					designed using Materialui <br />
					html5 canvas drawing by p5.js <br />
					build with React <br />
					all graphs made thanks to draw.io <br />
				</Typography>
			</Grid>

			<Grid item>
				<Typography variant="h6">links</Typography>
				<Row>
					<FooterLink
						href={urls.external.github}
						text="GitHub"
						src={'/assets/pics/github-logo.png'}
					/>
					<FooterLink href={urls.external.p5} text="p5.js" src={'/assets/pics/p5js-logo.png'} />
					<FooterLink
						href={urls.external.drawio}
						text="draw.io"
						src={'/assets/pics/drawio-logo.png'}
					/>
					<FooterLink
						href={urls.external.materialui}
						text="materialui"
						src={'/assets/pics/materialui-logo.svg'}
					/>
					<FooterLink href={urls.external.react} text="react" src={'/assets/pics/react-logo.png'} />
				</Row>
			</Grid>
		</Main>

		<Side justify="space-around" direction="row" container>
			<Grid item>
				<Typography>&reg; 42069 you'r mom &trade;</Typography>
			</Grid>

			<Grid item>
				<Typography>More links</Typography>
			</Grid>
		</Side>
	</Root>
)

export default Footer
