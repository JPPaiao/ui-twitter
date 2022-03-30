import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    padding: 3px 0;
    cursor: pointer;

    > span {
        color: var(--cin);

    }

    &:hover {
        span, strong {
            color: var(--tt);
            text-decoration: underline;
        }
    }
`
