import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
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
  root: {
    paddingTop: theme.spacing.unit * 3
  },
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

class LivePreviews extends Component {
  state = {
    previews: [
      { name: '10PRINT', desc: '10PRINT patterns generated based on your preferences', picSrc: '/assets/pics/live-previews/10PRINT.png', href: urls.external.livePreviews['10print']},
      { name: 'tictactoe', desc: 'Playing against an AI that gets better the more it plays', picSrc: '/assets/pics/live-previews/tictactoe.png', href: urls.external.livePreviews.tictactoe},
      { name: 'jumping balls NE', desc: 'Jumping balls that learn over time how to jump over the obstacles', picSrc: '/assets/pics/live-previews/jumping-balls.png', href: urls.external.livePreviews.jumpingBalls}
    ]
  }
  render() {
    const { classes } = this.props
    const { previews } = this.state

    return (
      <Grid container spacing={24} alignItems="flex-start" className={classes.root}>
        {previews.map(preview => 
          <Grid key={preview.href}  xs item>
            <Card className={classes.card}>
              <CardActionArea onClick={() => window.open(preview.href)} className={classes.upperCard}>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={preview.picSrc}
                  title={preview.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    {preview.name}
                  </Typography>
                  <Typography component="p">
                    {preview.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(urls.external.github + preview.href)}>
                  Repository
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )}
      </Grid>
    )
  }
}

export default withStyles(styles)(LivePreviews)
