import React from 'react'

import { Container, Tab, Tweets } from './styled'
import Tweet from '../tweet/index'

function Feed() {
    return (
        <Container>
            <Tab>Tweets</Tab>

            <Tweets>
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
            </Tweets>
        </Container>
    )
}

export default Feed