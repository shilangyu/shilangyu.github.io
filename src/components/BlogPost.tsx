import { Button, Divider, Grid, Typography } from '@material-ui/core'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Blog } from '../constants/types'
import { weakUId } from '../utils'

const BlogDivider = styled(Divider)`
  background-color: #e0e0e0;
  margin: 30px 0;
`

const Subtitle = styled(Typography)`
  margin-bottom: ${p => p.theme.spacing()}px;
`

const Pagination = styled(Grid)`
  margin-bottom: ${p => p.theme.spacing() * 2}px;
`

const BlogPost: React.FC<Blog> = ({ title, posts }) => {
  const pagiId = new Array(posts.length).fill(null).map(weakUId)

  const paginationOnClick = useCallback(
    (id: string) => () =>
      document.querySelector(`#${id}`)!.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      }),
    []
  )

  return (
    <>
      <Typography align="center" color="textPrimary" variant="h2">
        {title}
      </Typography>

      <Pagination
        justify="center"
        direction="row"
        alignItems="center"
        spacing={3}
        container
      >
        {posts.map(({ title }, i) => (
          <Grid item key={i}>
            <Button onClick={paginationOnClick(pagiId[i])}>{title}</Button>
          </Grid>
        ))}
      </Pagination>

      {posts.map((post, i) => (
        <React.Fragment key={i}>
          <Subtitle color="textPrimary" variant="h5" id={pagiId[i]}>
            {posts[i].title}
          </Subtitle>

          <Typography align="justify">{post.content}</Typography>

          {posts.length - 1 !== i && <BlogDivider />}
        </React.Fragment>
      ))}
    </>
  )
}

export default BlogPost
