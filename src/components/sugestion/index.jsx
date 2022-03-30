import React from 'react'
import { Container, Avatar, Info, FollowButton } from './styled'

function Suggestion({ name, nickName }) {
    return (
        <Container>
            <Avatar />

            <Info>
                <strong>{name}</strong>
                <span>{nickName}</span>
            </Info>

            <FollowButton primary>Seguir</FollowButton>
        </Container>
    )
}

export default Suggestion