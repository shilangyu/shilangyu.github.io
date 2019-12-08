import { Paper, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Blog } from '../../constants/types'
import BlogPost from '../BlogPost'
import Container from '../Container'

const TabBackground = styled(Paper)`
  flex-grow: 1;
  background-color: ${p => p.theme.palette.primary.main};
`

interface Props {
  children: Blog[]
}

const YearSection: React.FC<Props> = ({ children: blogs }) => {
  const [tab, setTab] = useState(0)

  return (
    <>
      <TabBackground square>
        <Tabs
          value={tab}
          onChange={(_, value) => setTab(value)}
          indicatorColor="secondary"
          centered
          variant="fullWidth"
        >
          {blogs.map(({ title }) => (
            <Tab key={title} label={title} />
          ))}
        </Tabs>
      </TabBackground>

      <Container>
        <BlogPost title={blogs[tab].title} posts={blogs[tab].posts} />
      </Container>
    </>
  )
}

export default YearSection
