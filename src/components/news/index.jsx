import React from 'react'
import { Container } from './styled'

function News({ title, assunto }) {
    return (
        <Container>
            <span>{title}</span>
            <strong>{assunto}</strong>
        </Container>
    )
}

export default News