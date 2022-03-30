import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;

    background-color: var(--secundary);
    border-radius: 14px;
`

export const Item = styled.div`
    padding: 10px 13px;

    & + div {
        border-top: 1px solid var(--out);
    }

    &:first-child {
        padding-top: 13px;
    }

    &:last-child {
        padding-bottom: 17px;
    }
`

export const Title = styled.span`
    font-weight: bold;
    font-size: 19px;
`

