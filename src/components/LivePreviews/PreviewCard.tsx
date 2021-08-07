import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import urls from '../../constants/urls'

const DisplayCard = styled(Card)`
  width: 500;
`

const CardImg = styled(CardMedia)`
  object-fit: cover;
  height: 300;
` as typeof CardMedia

interface Props {
  url: string
  name: string
  picSrc: string
  desc: string
}

const PreviewCard: React.FC<Props> = ({ url, name, picSrc, desc }) => (
  <DisplayCard>
    <CardActionArea onClick={() => window.open(url)}>
      <CardImg component="img" image={picSrc} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography component="p">{desc}</Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button
        size="small"
        color="primary"
        onClick={() => window.open(urls.external.github + url)}
      >
        Repository
      </Button>
    </CardActions>
  </DisplayCard>
)

export default PreviewCard
