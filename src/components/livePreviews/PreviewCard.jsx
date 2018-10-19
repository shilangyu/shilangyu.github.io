import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import urls from '../../constants/urls'

const styles = theme => ({
  card: {
    width: 500,
  },
  media: {
    objectFit: 'cover',
    height: 300
  },
  upperCard: {
    // maxHeight: 500
  }
})

class PreviewCard extends Component {
  render() {
    const { classes, url, name, picSrc, desc } = this.props

    return (
      <Card className={classes.card}>
        <CardActionArea onClick={() => window.open(url)} className={classes.upperCard}>
          <CardMedia
            component="img"
            className={classes.media}
            image={picSrc}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {name}
            </Typography>
            <Typography component="p">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(urls.external.github + url)}>
            Repository
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(PreviewCard)
