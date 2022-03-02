import { Container, GridLayout } from 'components/organism'
import React from 'react'

const Home = () => {
  return (
    <GridLayout columns='7fr 5fr'>
    <Container marginTop={24} marginLeft={24} marginRight={24}></Container>
    <Container variant='secondary' paddingTop={24} paddingLeft={24} paddingRight={24}></Container>
    </GridLayout>
  )
}

export default Home