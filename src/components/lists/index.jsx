import React from 'react'
import { Container, Item, Title } from './styled'

function Lists({ title, elements }) {
    return (
        <Container>
            <Item>
                <Title>{title}</Title>
            </Item>

            {elements.map((element, index) => [
                <Item key={index}>{element}</Item>
            ])}
        </Container>
    )
}

export default Lists