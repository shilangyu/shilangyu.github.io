import { Avatar, Grid, Tooltip, Typography, Zoom } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import DrawioIcon from '../assets/logos/drawio.svg'
import GithubIcon from '../assets/logos/github.svg'
import MaterialuiIcon from '../assets/logos/materialui.svg'
import P5jsIcon from '../assets/logos/p5js.png'
import ReactIcon from '../assets/logos/react.svg'
import urls from '../constants/urls'

const Root = styled.footer`
  margin-top: auto;
`

const Main = styled(Grid)`
  background-color: ${p => p.theme.palette.primary.main};
  padding-top: ${p => p.theme.spacing() * 3}px;
  padding-bottom: ${p => p.theme.spacing() * 3}px;
`

const Side = styled(Grid)`
  background-color: ${p => p.theme.palette.primary.dark};
  padding-top: ${p => p.theme.spacing()}px;
  padding-bottom: ${p => p.theme.spacing()}px;
`

const LogoAvatar = styled(Avatar)`
  margin: 10px;
  cursor: pointer;
`

interface FooterLinkProps {
  text: string
  href: string
  src: string
}

const FooterLink: React.FC<FooterLinkProps> = props => (
  <Tooltip TransitionComponent={Zoom} title={props.text}>
    <LogoAvatar
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
        <Grid direction="row" container>
          <FooterLink
            href={urls.external.github}
            text="GitHub"
            src={GithubIcon}
          />
          <FooterLink href={urls.external.p5} text="p5.js" src={P5jsIcon} />
          <FooterLink
            href={urls.external.drawio}
            text="draw.io"
            src={DrawioIcon}
          />
          <FooterLink
            href={urls.external.materialui}
            text="materialui"
            src={MaterialuiIcon}
          />
          <FooterLink href={urls.external.react} text="react" src={ReactIcon} />
        </Grid>
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
